function Page() {}

Page.prototype.setBrowser = function(browser) {
    this.browser = browser;
};

Page.prototype.open = function(path) {
    this.browser.url('/' + path);
};

module.exports = new Page();
