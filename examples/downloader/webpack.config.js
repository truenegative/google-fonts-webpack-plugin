var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var GoogleFontsWebpackPlugin = require('../..');

module.exports = {
    entry: './example.js',
    output: {
        path: path.join(__dirname, 'dist' ),
        publicPath: '',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.html$/, loader: 'html' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new GoogleFontsWebpackPlugin({
            fonts: [
                { "Open Sans": "300,700" }
            ],
            download: true
        })
    ]
};