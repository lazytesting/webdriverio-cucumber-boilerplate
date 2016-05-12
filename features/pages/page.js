function Page() {}

Page.prototype.setBrowser = function(browser) {
    this.browser = browser;
};

Page.prototype.open = function(cb, path) {
    this.browser.url('/' + path).then(function() {cb()});
};

module.exports = new Page();
