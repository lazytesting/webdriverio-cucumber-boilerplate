var Page = require('./page');

const selectors = {
    title : "article > h1"
}

var ReadmePage = Object.create(Page, {
    getTitle: {
        value: function () {
            return this.browser.getText(selectors.title);
        }
    },

});

module.exports = ReadmePage;
