const { merge: webpackMerge } = require("webpack-merge");
const commonConfig = require("./webpack/webpack.common.js");

module.exports = ({ mode }) => {
    const envModeConfig = require(`./webpack/webpack.${mode}.js`);
    return webpackMerge(commonConfig, envModeConfig);
};
