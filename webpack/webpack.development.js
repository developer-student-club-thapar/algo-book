const { HtmlWebPackPluginDev } = require("./plugins/index");
require("dotenv").config({ path: "./.env.dev" });
module.exports = {
    devtool: "eval-source-map",
    mode: "development",
    entry: "./src/index.js",
    target: "web",
    plugins: [HtmlWebPackPluginDev],
    devServer: {
        historyApiFallback: {
            index: "/",
        },
        proxy: {
            "/api": `http://localhost:${process.env.SERVER_PORT}`,
        },
    },
};
