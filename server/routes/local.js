const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const showdown = require("showdown");
const converter = new showdown.Converter();

//* get contents of a local path
router.get("/path/:type/:topic?/:name?", async (req, res) => {
    let { topic, type, name } = req.params;
    if (!topic) {
        topic = "";
    }
    if (!name) {
        name = "";
    }
    const readme = name.includes(".md");
    try {
        let data;
        if (name) {
            data = fs.readFileSync(path.resolve(type, topic, name), "utf-8");
            if (readme) {
                data = converter.makeHtml(data);
                data = replaceImgTags(data, type, topic);
            }
        } else {
            data = fs.readdirSync(path.resolve(type, topic));
            data = data.map((name) => ({ name }));

            if (topic) {
                data = data.filter((item) => {
                    const itemName = item.name.toLowerCase();
                    return (
                        !itemName.includes("images") && itemName.includes(".")
                    );
                });
            }
        }
        res.json(data);
    } catch (err) {
        console.log(`Invalid Path`, err);
        res.json({
            msg: `Invalid Path`,
            err,
        });
    }
});

module.exports = router;

function replaceImgTags(data, type, topic) {
    const imgTags = data.match(/<img.*?src="images(.*?)"[^\>]+>/g) || [];

    imgTags.forEach((tag) => {
        let src = tag.match(/images.([a-z0-9A-Z.])*/g);
        src = src[0];

        const newTag = tag.replace(
            src,

            `https://raw.githubusercontent.com/developer-student-club-thapar/algo-book/master/${type}/${topic}/${src}`
        );
        data = data.replace(/<img.*?src="images(.*?)"[^\>]+>/, newTag);
    });
    const aTags = data.match(/<a.*?href="images(.*?)">/g) || [];
    aTags.forEach((tag) => {
        let src = tag.match(/images.([a-z0-9A-Z.])*/g);
        src = src[0];

        const newTag = tag.replace(
            src,

            `https://raw.githubusercontent.com/developer-student-club-thapar/algo-book/master/${type}/${topic}/${name}`
        );

        data = data.replace(/<a.*?href="images(.*?)">/, newTag);
    });
    return data;
}
