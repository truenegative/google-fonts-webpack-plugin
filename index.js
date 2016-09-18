'use strict';
var _ = require('lodash');
var path = require('path');


var googleFontsUrl = "http://fonts.googleapis.com/css?family=";


function GoogleFontsWebpackPlugin(options) {
    // Default options
    this.options = _.extend({
        fonts: [],
        download: false,
        path: __dirname
    }, options);
}

GoogleFontsWebpackPlugin.prototype.apply = function(compiler) {

    // Generate Font URL's
    var fontUrls = this.options.fonts.map(function(font,index){
        let fontName = Object.keys(font)[0];
        let fontOptions = fontName[fontName];

        let fontUrl = googleFontsUrl + fontName.replace(' ', '+') + ':' + font[fontName];
        return fontUrl;
    });


    compiler.plugin('compilation', function(compilation) {

        compilation.plugin('html-webpack-plugin-before-html-generation', function(htmlPLuginData, callback) {
            let cssAssets = htmlPLuginData.assets.css;

            // Add fonts to beginning of CSS Assets
            fontUrls.map(function(url) {
                cssAssets.unshift(url);
            })
            

            callback();
        });
    });
};

module.exports = GoogleFontsWebpackPlugin;