const router = require("express").Router();
const axios = require("axios");
//* get contents of a path
router.get("/path/:type/:path?/:name?", async (req, res) => {
    let { path, type, name } = req.params;
    if (!path) {
        path = "";
    } else if (name) path += `/${name}`;
    const readme = path.includes(".md");
    try {
        let { data } = await axios.get(
            `https://api.github.com/repos/developer-student-club-thapar/algo-book/contents/${type}/${path}`,
            {
                headers: {
                    accept: readme
                        ? "application/vnd.github.VERSION.html"
                        : "application/vnd.github.VERSION.raw",
                },
            }
        );
        if (readme) {
            const imgTags =
                data.match(/<img.*?src="images(.*?)"[^\>]+>/g) || [];

            imgTags.forEach((tag) => {
                let src = tag.match(/images.([a-z0-9A-Z.])*/g);
                src = src[0];

                const newTag = tag.replace(
                    src,

                    `https://raw.githubusercontent.com/developer-student-club-thapar/algo-book/master/${type}/${
                        path.split("/")[0]
                    }/${src}`
                );
                data = data.replace(/<img.*?src="images(.*?)"[^\>]+>/, newTag);
            });
            const aTags = data.match(/<a.*?href="images(.*?)">/g) || [];
            aTags.forEach((tag) => {
                let src = tag.match(/images.([a-z0-9A-Z.])*/g);
                src = src[0];

                const newTag = tag.replace(
                    src,

                    `https://raw.githubusercontent.com/developer-student-club-thapar/algo-book/master/${type}/${
                        path.split("/")[0]
                    }/${src}`
                );

                data = data.replace(/<a.*?href="images(.*?)">/, newTag);
            });
        }
        if (path && !name) {
            data = data.filter(
                (item) =>
                    item.name.toLowerCase().includes(".py") ||
                    item.name.toLowerCase().includes(".js") ||
                    item.name.toLowerCase().includes(".cpp") ||
                    item.name.toLowerCase().includes(".java") ||
                    item.name.toLowerCase().includes(".md")
            );
        }

        res.json(data);
    } catch (err) {
        console.log(`Some error occured while fetching data from ${path}`, err);
        res.json({
            msg: `Some error occured while fetching data from ${path}`,
            err,
        });
    }
});

//* route to get all 5 files at once
// router.get("/contents/:type/:path?", async (req, res) => {
//     let { type, path } = req.params;
//     path = path ? path : "";
//     try {
//         let { data } = await axios.get(
//             `https://api.github.com/repos/developer-student-club-thapar/algo-book/contents/${type}/${path}`,
//             {
//                 headers: {
//                     accept: "application/vnd.github.VERSION.raw",
//                 },
//             }
//         );
//         console.log(data);
//         if (path) {
//             data = data.filter(
//                 (item) =>
//                     item.name.toLowerCase().includes(".py") ||
//                     item.name.toLowerCase().includes(".js") ||
//                     item.name.toLowerCase().includes(".cpp") ||
//                     item.name.toLowerCase().includes(".java") ||
//                     item.name.toLowerCase().includes(".md")
//             );
//             let promises = data.map((item) => {
//                 return axios.get(
//                     `https://api.github.com/repos/developer-student-club-thapar/algo-book/contents/${type}/${path}/${item.name}`,
//                     {
//                         headers: {
//                             accept: item.name.includes(".md")
//                                 ? "application/vnd.github.VERSION.html"
//                                 : "application/vnd.github.VERSION.raw",
//                         },
//                     }
//                 );
//             });
//             const results = Promise.all(promises);
//             results.then((result) => {
//                 result.forEach((item, i) => {
//                     data[i].content = item.data;
//                 });

//                 res.json(data);
//             });
//         } else {
//             res.json(data);
//         }
//     } catch (err) {
//         console.log(`Some error occured while fetching files`, err);
//         res.json({
//             msg: `Some error occured while fetching files`,
//             err,
//         });
//     }
// });

module.exports = router;
