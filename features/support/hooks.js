var webdriverio = require('webdriverio');
var config = require('../../config.json')

var client = webdriverio.remote(config.webdriverOptions);

var myHooks = function () {
    this.Before(function (scenario) {
   //     this.browser = client.init()
    });
};

module.exports = myHooks;