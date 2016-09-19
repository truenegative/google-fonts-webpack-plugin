/**
 * Downloader Module
 */

'use strict';

var request = require('request');
var fs = require('fs');
var _ = require('lodash');

var fontRegExp = /url\(([^\)]+)\)/gm;

var userAgentMap = [{
	extension: 'ttf',
	userAgent: '(none)'
}, {
	extension: 'woff',
	userAgent: 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:27.0) Gecko/20100101 Firefox/27.0'
}, {
	extension: 'eot',
	userAgent: 'Mozilla/4.0(compatible; MSIE 7.0b; Windows NT 6.0)'
}, {
	extension: 'svg',
	userAgent: 'Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.10'
}];

var userAgentLength = userAgentMap.length;


function Downloader() {
    
}

Downloader.prototype.requestFonts(font,path) {

    var userAgentIndex = 0;

    if(userAgentIndex == userAgentLength) return;

    var data = userAgentMap[userAgentIndex];
    var options = {
        url: url,
        headers: {
            'User-Agent': data.userAgent
        }
    }

    console.log("Requesting CSS", options.url, options.headers['User-Agent']);

    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var matches, fontUrls = [];
            
            while(matches = fontRegExp.exec(body)) fontUrls.push(matches[1]);

            var fontLength = fontUrls.length;
            console.log("Found " + fontLength + " fonts");

            fontUrls.map(function(fontUrl) {
                requestFont(fontUrl)
            })


        }
    })

}

function requestFont(fontLength) {
    var downloadedFonts = [];
    var currentFont = 0;

    if (currentFont == fontLength) {
        userAgentIndex++;
        return;
    }

    if (_.contains(downloadedFonts, fontUrls[currentFont])) {
        console.log(fontUrls[currentFont], " already downloaded.");
        currentFont++;
    } else {
        var filename = font
    }

}

module.exports = Downloader;