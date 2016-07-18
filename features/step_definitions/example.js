const assert = require('assert');

module.exports = function () {
    this.Given(/^I am on the Github repo$/, function () {
        return this.homePage.open();
    });

    this.When(/^I go to the README file$/, function () {
        return this.homePage.openReadme();
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (expectedTitle) {
        return this.readmePage.getTitle()
            .then(
                function (actualTitle) {
                    assert.equal(actualTitle, expectedTitle);
                }
            );
    });
}