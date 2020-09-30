const loaders = require("./loaders/index");
const plugins = require("./plugins/index");
const webpack = require("webpack");

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
        plugins.MiniCssExtractPlugin,
        plugins.CleanWebpackPlugin,
        new webpack.ProgressPlugin(),
        new webpack.BannerPlugin({
            banner: yourVariable => {
                return `yourVariable: ${yourVariable}`;
            },
        }),
    ],
};
