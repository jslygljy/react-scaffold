/**
 * Created by ljy on 2017/10/29.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        vendor: [path.join(__dirname, 'src', 'vendor.js')],
    },

    output: {
        path: path.join(__dirname, 'dll'),
        filename: '[name].js',
        library: '[name]',
    },

    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dll', '[name]-manifest.json'),
            filename: '[name].js',
            name: '[name]',
        }),
    ]
};