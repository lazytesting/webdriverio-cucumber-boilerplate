var Page = require('./page');
var HomePage = Object.create(Page, {

    /**
     * define elements
     */
    readme: { get: function () { return this.browser.element("a[title='README.md']"); } },
    title: { get: function () { return this.browser.element("article > h1"); } },

});

module.exports = HomePage;
