const path = require("path");
const tsconfig = require("./tsconfig.json");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { TsConfigPathsPlugin } = require("awesome-typescript-loader");

module.exports = {
    entry: "./src/index.ts",
    mode: "development",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [new TsConfigPathsPlugin()],
    },
    devServer: {
        contentBase: "/",
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: "./index.html",
            template: "./src/index.html",
        }),
        new CopyWebpackPlugin([{ from: "./src/game/assets", to: "./" }]),
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
                options: tsconfig,
            },
        ],
    },
};
