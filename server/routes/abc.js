router.get("/index", (req, res) => {
    const types = ["algorithms"];
    const ans = {};
    let c = 50;
    types.forEach(getData);
    // async function getAlgos() {
    //     const { data } = await axios.get(
    //         "https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms"
    //     );
    //     console.log("algo", data);
    //     setAlgos(data);
    //     getAlgosDATA(data[0]);
    // }

    // async function getAlgosDATA(algo) {
    //     const { data } = await axios.get(
    //         `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algo.name}`
    //     );
    //     console.log("algo-data", data);
    //     // setAlgos(data);
    //     getContent(algo, data[0]);
    // }
    // async function getContent(algo, file) {
    //     const { data } = await axios.get(
    //         `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/algorithms/${algo.name}/${file.name}`,
    //         {
    //             headers: {
    //                 accept: "application/vnd.github.VERSION.raw",
    //             },
    //         }
    //     );
    //     console.log("algo-data-cpp", data);
    // }

    // getAlgos();

    async function getData(type) {
        c--;
        const { data } = await axios.get(
            `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/${type}`
        );
        // console.log(type, data);
        ans[type] = type;
        data.forEach(
            setTimeout(async (folder) => {
                ans[type][folder] = folder;
                console.log(type, folder);
                c--;
                const { data } = await axios.get(
                    `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/${type}/${folder.name}`
                );
                data.forEach(
                    setTimeout(async (file) => {
                        console.log(type, folder, file);
                        ans[type][folder][file] = file;
                        c--;
                        if (c === 0) {
                            console.log(ans);
                            res.send("b");
                        }
                        const { data } = await axios.get(
                            `https://api.github.com/repos/rishabhjain-28/algo-book-test/contents/${type}/${folder.name}/${file.name}`,
                            {
                                headers: {
                                    accept:
                                        "application/vnd.github.VERSION.raw",
                                },
                            }
                        );
                        console.log(type, folder, file, data);
                        ans[type][folder][file][data] = data;
                        // console.log(data);
                    }, 1000)
                );
            }, 1000)
        );
    }
    console.log(ans);
    res.send("a");
});

router.post("/callback", async (req, res) => {});

module.exports = router;
