# webdriverio-cucumber-boilerplate
Just a simple boilerplate for BDD style Webdriver Tests.


## Install
1. install Node.js 4 or higher
2. clone this repo

## Features
- Write your tests in BDD style
- Page Object Pattern
- Includes Selenium Server
- Junit Reporting
- Screenshots on failed tests

## Run tests
Execute:
```
npm test
```

## Create tests
1. Add a .feature file in the features folder.
The feature file needs to be in the Gherkin format see [this article](https://github.com/cucumber/cucumber/wiki/Gherkin) for more details.
2. implement the steps in features/step_definitions
  See the [https://github.com/cucumber/cucumber-js](CucumberJs documentation) for details.
  Ensure that you use the promise-style of writing your steps.
  in your steps you can use this.[pageName]Page:
  ```
    this.When(/^I go to the README file$/, function () {
        return this.homePage.openReadme();
    });
  ```

3. Create the page objects in the folder pages, make sure that pages file name ends on '.page.js'

a page has the following components:
   - object 'selectors' with all the CSS selectors you would like to use on this page
   - Object.Create which contains all the functions which are used in the step definitions
     in the functions you can access WebdriverIO using ```this.browser.[function]```
     see the [http://webdriver.io/api.html](WebdriverIO API) for more info
```
    var Page = require('./page');

    const selectors = {
        readme : "a[title='README.md']"
    }

    var HomePage = Object.create(Page, {
        openReadme: {
        value: function () {
            return this.browser.click(selectors.readme);
        }
    },

});

module.exports = HomePage;
```




