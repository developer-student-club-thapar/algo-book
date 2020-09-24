const miniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebPackPlugin = require("html-webpack-plugin");
const styleLintPlugin = require("stylelint-webpack-plugin");
const {
    CleanWebpackPlugin: cleanWebpackPlugin,
} = require("clean-webpack-plugin");

const path = require("path");

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

const StyleLintPlugin = new styleLintPlugin({
    configFile: path.resolve(__dirname, "stylelint.config.js"),
    context: path.resolve(__dirname, "../../src/"),
    files: "./css/*.css",
    failOnError: false,
    quiet: false,
});

const CleanWebpackPlugin = new cleanWebpackPlugin();

module.exports = {
    MiniCssExtractPlugin,
    StyleLintPlugin,
    HtmlWebPackPluginProd,
    HtmlWebPackPluginDev,
    CleanWebpackPlugin,
};
