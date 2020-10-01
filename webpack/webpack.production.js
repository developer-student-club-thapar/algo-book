const path = require("path");
const { HtmlWebPackPluginProd, StyleLintPlugin } = require("./plugins/index");
const { ESLintLoader } = require("./loaders/index");

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
    // module: {
    //     rules: [ESLintLoader],
    // },
    plugins: [HtmlWebPackPluginProd],
    // plugins: [StyleLintPlugin, HtmlWebPackPluginProd],
};
