var myHooks = function () {
    this.Before(function (scenario, callback) {
        this.browser.init().then(function(){callback()});
    });
    this.After(function (scenario, callback) {
        this.browser.end().then(function(){callback()});
    });
};

module.exports = myHooks;