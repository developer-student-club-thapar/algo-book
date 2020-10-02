const router = require("express").Router();
const axios = require("axios");
// router.get("/algos", async (req, res) => {
//     try {
//         const { data } = await axios.get(
//             "https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms"
//         );
//         console.log("algos", data);
//         res.json(data);
//     } catch (err) {
//         console.log("Some error occured while fetching algos=>", err);
//         res.json({ msg: "Some error occured while fetching algos", err });
//     }
// });

// router.get("/algo/files/:algoName", async (req, res) => {
//     const { algoName } = req.params;
//     if (!algoName) res.status(400).json({ msg: "No algo name provided" });
//     try {
//         const { data } = await axios.get(
//             `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algoName}`
//         );
//         console.log("algoFiles", data);
//         res.json(data);
//     } catch (err) {
//         console.log(
//             `Some error occured while fetching files for ${algoName} =>`,
//             err
//         );
//         res.json({
//             msg: `Some error occured while fetching files for ${algoName}`,
//             err,
//         });
//     }
// });
// router.get("/algo/files/:algoName", async (req, res) => {
//     const { algoName } = req.params;
//     if (!algoName) res.status(400).json({ msg: "No algo name provided" });
//     try {
//         const { data } = await axios.get(
//             `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algoName}`
//         );
//         console.log("algoFiles", data);
//         res.json(data);
//     } catch (err) {
//         console.log(
//             `Some error occured while fetching files for ${algoName} =>`,
//             err
//         );
//         res.json({
//             msg: `Some error occured while fetching files for ${algoName}`,
//             err,
//         });
//     }
// });

router.get("/contents/:path", async (req, res) => {
    const { path } = req.params;
    try {
        const { data } = await axios.get(
            `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/${path}`,
            {
                headers: {
                    accept: "application/vnd.github.VERSION.raw",
                },
            }
        );
        console.log(data);
        res.json(data);
    } catch (err) {
        console.log(
            `Some error occured while fetching files for ${algoName} =>`,
            err
        );
        res.json({
            msg: `Some error occured while fetching files for ${algoName}`,
            err,
        });
    }
});

module.exports = router;
