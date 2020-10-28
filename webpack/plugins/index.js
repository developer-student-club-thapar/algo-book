const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebPackPlugin = require("html-webpack-plugin");
const {
    CleanWebpackPlugin: cleanWebpackPlugin,
} = require("clean-webpack-plugin");

const HtmlWebPackPluginDev = new htmlWebPackPlugin({
    template: "./src/public/index.html",
    filename: "./index.html",
});

const HtmlWebPackPluginProd = new htmlWebPackPlugin({
    template: "./src/public/index.html",
    filename: "./public/index.html",
});

const MiniCssExtractPlugin = new miniCssExtractPlugin({
    filename: "[name].bundle.css",
    chunkFilename: "[id].css",
});

const CleanWebpackPlugin = new cleanWebpackPlugin();

module.exports = {
    MiniCssExtractPlugin,
    HtmlWebPackPluginProd,
    HtmlWebPackPluginDev,
    CleanWebpackPlugin,
};
