const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// 不进行压缩代码
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
    entry: './src/co-design-ts.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'co-design-ts.js',
        libraryTarget: 'umd'
    },
    plugins: [
        new UglifyJsPlugin({
            extractComments: false,
            uglifyOptions: {
                minimize: true,
                beautify: false,
                output: {
                    comments: false
                },
                mangle: {},
                compress: {
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                    negate_iife: false
                }
            }
        }),
        new UnminifiedWebpackPlugin()
    ]
};
