const config = require('../../config.json');

var myHooks = function () {

    this.Before(function (scenario, callback) {
        this.browser.init()
            .then(function(){callback()});
    });

    this.After(function (scenario, callback) {
        this.browser.end()
            .then(()=>callback());
    });

    this.After(function (scenario, callback) {
        if (scenario.isFailed()) {
            this.browser.saveScreenshot(config.screenshotFolder + scenario.getName() + ".png").then(function () {
                callback()
            });
        }
        else {
            callback();
        }
    });

};

module.exports = myHooks;