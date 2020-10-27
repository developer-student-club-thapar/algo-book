const path = require("path");
const { HtmlWebPackPluginProd } = require("./plugins/index");
var CompressionPlugin = require("compression-webpack-plugin");

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
    plugins: [
        HtmlWebPackPluginProd,
        new CompressionPlugin({
            algorithm: "gzip",
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
    ],
};
