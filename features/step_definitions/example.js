
module.exports = function () {
    this.Given(/^I am on the Github repo$/, function (callback) {
        this.homePage.open(callback, "");
    });

    this.When(/^I go to the README file$/, function (callback) {
        this.homePage.readme.click().then(function(){console.log(callback); callback()});
    });

    this.Then(/^I should see "(.*)" as the page title$/, function (expectedTitle, callback) {
        this.homePage.title.getText().then(function(text) {
            console.log(text);
            if (expectedTitle === text) {
                callback();
            } else {
                callback(new Error("Expected title to be" + expectedTitle));
            }
        });

    });
}