/**
 * Created by ljy on 2017/10/29.
 */
var path = require('path')
var webpack = require('webpack')

const config = {
    entry: {
        development: ['react', 'react-dom', 'react-router']
    },
    output: {
        path: path.join(__dirname,'..'),
        filename: 'dll.[name].js',
        library: '[name]_[hash]'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, 'js', '[name]-manifest.json'),
            name: '[name]_[hash]',
            context: path.join(__dirname, '..', '..')
        })
    ]
}

module.exports = config
