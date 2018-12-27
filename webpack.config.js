const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    devServer: {
        contentBase: "./public/index.html",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: "./index.html",
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin([{ from: "./src/assets", to: "./" }]),
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: [
                    path.resolve(__dirname, "typings"),
                    path.resolve(__dirname, "node_modules"),
                ],
            },
            {
                test: /\.spec.ts$/,
                use: "ignore-loader",
            },
        ],
    },
};
