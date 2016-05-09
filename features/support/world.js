var webdriverio = require('webdriverio');
var pageLoader = require('pageLoader.js');
var config = require('../../config.json');
var client = webdriverio.remote(config.webdriverOptions);





function World() {
    pageLoader.load();
    this.browser = client.init()
    var HomePage = homePage(this);
}

module.exports = function() {
    this.World = World;
};
