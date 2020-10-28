const loaders = require("./loaders/index");
const plugins = require("./plugins/index");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
    .BundleAnalyzerPlugin;
var Visualizer = require("webpack-visualizer-plugin");

module.exports = {
    module: {
        rules: [
            loaders.svgLoader,
            loaders.babelLoader,
            loaders.htmlLoader,
            loaders.CSSLoader,
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader",
            },
        ],
    },
    plugins: [
        // new Visualizer(),
        // new BundleAnalyzerPlugin(),
        plugins.MiniCssExtractPlugin,
        plugins.CleanWebpackPlugin,
        new webpack.ProgressPlugin(),
    ],
};
