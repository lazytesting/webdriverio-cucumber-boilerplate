var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    username: { get: function () { return browser.element('#username'); } },
    password: { get: function () { return browser.element('#password'); } },
    form:     { get: function () { return browser.element('#login'); } },
    flash:    { get: function () { return browser.element('#flash'); } },

    /**
     * define or overwrite page methods
     */
    submit: { value: function() {
        this.form.submitForm();
    } }
});

module.exports = HomePage