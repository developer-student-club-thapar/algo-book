const path = require("path");
const { HtmlWebPackPluginProd } = require("./plugins/index");
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    devtool: "source-map",
    mode: "production",
    entry: "./src/index.js",
    optimization: {
        // usedExports: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                },
            },
        },
    },
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
