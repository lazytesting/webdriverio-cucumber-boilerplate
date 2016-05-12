var webdriverio = require('webdriverio');
var pageLoader = require('./pageLoader.js');
var config = require('../../config.json');
var client = webdriverio.remote(config.webdriverOptions);

function World() {
    this.browser =  client;
    pageLoader.load(this);
}

module.exports = function() {
    this.World = World;
};
