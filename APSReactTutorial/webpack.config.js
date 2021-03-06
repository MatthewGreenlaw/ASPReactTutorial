﻿﻿"use strict";

var path = require("path");
//var WebpackNotifierPlugin = require("webpack-notifier");
//var BrowserSyncPlugin = require("browser-sync-webpack-plugin");

// https://sochix.ru/how-to-integrate-webpack-into-visual-studio-2015/
module.exports = {
    watch: true,
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        home: "./src/jsx/Home/index.js",
<<<<<<< HEAD
        playground: "./src/jsx/playground/index.js",
        practice: "./src/jsx/Practice/index.js",
=======
        parentComponent: "./src/jsx/ParentComponet/index.js",
>>>>>>> origin/master
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "webpack/[name]/index.js"
    },
    //devServer: {
    //    contentBase: ".",
    //    host: "localhost",
    //    port: 9000
    //},
    resolve: {
        modules: [
            path.resolve('./node_modules'),
        ],
        alias: {
            api: path.resolve(__dirname, './src/api'),
            sharedHooks: path.resolve(__dirname, './src/sharedHooks'),
        },
        extensions: ['.js', '.jsx'] 
    },
    module: {
        rules: [
            {
                test: /\.js$|.jsx$/,
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
    //plugins: [new WebpackNotifierPlugin(), new BrowserSyncPlugin()]
};