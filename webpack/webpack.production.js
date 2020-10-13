const path = require("path");
const { HtmlWebPackPluginProd } = require("./plugins/index");

module.exports = {
    devtool: "source-map",
    mode: "production",
    entry: "./src/index.js",
    output: {
        filename: "client.js",
        path: path.join(__dirname, "..", "build"),
    },
    node: {
        __dirname: false,
        __filename: false,
    },
    plugins: [HtmlWebPackPluginProd],
};
