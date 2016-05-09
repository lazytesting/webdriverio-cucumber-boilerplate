var Page = require('./page');

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return this.browser.element('#username'); } },
    password: { get: function () { return this.browser.element('#password'); } },
    form:     { get: function () { return this.browser.element('#login'); } },
    flash:    { get: function () { return this.browser.element('#flash'); } },

    /**
     * define or overwrite page methods
     */
    submit: {
        value: function() {
            this.form.submitForm();
        }
    }
});

module.exports = HomePage;
