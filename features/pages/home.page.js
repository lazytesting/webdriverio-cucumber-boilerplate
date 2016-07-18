var Page = require('./page');

const selectors = {
    readme : "a[title='README.md']"
}

var HomePage = Object.create(Page, {
    open: {
        value: function () {
            return this.browser.url('/');
        }
    },
    openReadme: {
        value: function () {
            return this.browser.click(selectors.readme);
        }
    },

});

module.exports = HomePage;
