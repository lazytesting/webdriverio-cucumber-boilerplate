module.exports = function () {
    this.Given(/^I am on the Cucumber.js GitHub repository$/, function () {
        this.homePage.open();
    });

    this.When(/^I go to the README file$/, function () {
        this.homePage.username.setValue('hoi');
    });

    this.Then(/^I should see "(.*)" as the page title$/, function () {
        // matching groups are passed as parameters to the step definition

        var pageTitle = this.browser.text('title');
        if (title === pageTitle) {
            callback();
        } else {
            callback(new Error("Expected to be on page with title " + title));
        }
    });
};
