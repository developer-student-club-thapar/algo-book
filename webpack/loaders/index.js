const svgLoader = {
    test: /\.svg/,
    use: ["svg-loader"],
};

const babelLoader = {
    test: /\.m?js$/,
    exclude: /(algorithms|node_modules|bower_components)/,
    use: {
        loader: "babel-loader",
        options: {
            presets: ["@babel/preset-env"],
        },
    },
};
const CSSLoader = {
    test: /\.css$/,
    use: ["style-loader", "css-loader"],
};

const ESLintLoader = {
    test: /\.js$/,
    enforce: "pre",
    exclude: /node_modules/,
    use: {
        loader: "eslint-loader",
        options: {
            configFile: `${__dirname}/../../.eslintrc`,
        },
    },
};

const htmlLoader = {
    test: /\.html$/,
    use: ["html-loader"],
};

module.exports = {
    babelLoader,
    svgLoader,
    CSSLoader,
    ESLintLoader,
    htmlLoader,
};
