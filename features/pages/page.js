function Page() {}

Page.prototype.setBrowser = function(browser) {
    this.browser = browser;
};


module.exports = new Page();
