﻿"use strict";

var path = require("path");
var WebpackNotifierPlugin = require("webpack-notifier");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// https://sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/
module.exports = {
    entry: "./Scripts/Home/react/index.js",
    output: {
        path: path.resolve(__dirname, "./Scripts/dist/Home/react"),
        filename: "bundle.js"
    },
    //devServer: {
    //    contentBase: ".",
    //    host: "localhost",
    //    port: 9000
    //},
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"], 
                        //plugins: ["@babel/plugin-proposal-class-properties"] 
                    }
                }
            }
        ]
    },
    // Enable Source Map
    // https://webpack.js.org/configuration/devtool/
    devtool: "inline-source-map",
    //plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};