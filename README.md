# webdriverio-cucumber-boilerplate
An easy boilerplate for your Automated Functional Tests. 

## Install
1. install Node.js 4 or higher
2. clone this repo

## Usage
1. add an feature file in the features folder
2. create the page objects in the folder pages
make sure that pages file name ends on 'page.js'
See: http://webdriver.io/guide/testrunner/pageobjects.html for details how to create the page objects
3. implement the steps in features/step_definitions
See: https://github.com/cucumber/cucumber-js for details

in your steps you can use this.[pageName]Page:
```
this.homePage.open();
```
you can also directly interact with the browser:
```
this.browser.url("https://github.com");
```  





