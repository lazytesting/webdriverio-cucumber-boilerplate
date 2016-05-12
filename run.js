const spawn = require('child_process').spawn;
const fs = require('fs');


/**
 * Run tests
 */

startSeleniumServer()
    .then(runCucumber)
    .then(stopSeleniumServer)
    .then(exitWithCode);


/**
 * Start the selenium server
 * @return {Promise}
 */
function startSeleniumServer() {

    return new Promise(resolve => {

        console.log('Starting Selenium server');

        const server = spawn('node', [
                __dirname + '/node_modules/selenium-standalone/bin/selenium-standalone',
                'start'],
            {stdio: ['ignore', process.stdout, process.stderr]});

        // Give server a second to start
        setTimeout(function () {
            const context = {seleniumServer: server};
            resolve(context);
        }, 2e3);
    });
}

/**
 * Run all cucumber test
 * @param {Object} context
 * @return {Promise}
 */
function runCucumber(context) {

    return new Promise(resolve => {

        console.log('\nRunning tests');

        const child = spawn('node', [
            __dirname + '/node_modules/cucumber/bin/cucumber.js',
            '--format',
            'json:results.json',
        ], {stdio: ['ignore', process.stdout, process.stderr]});

        child.on('close', code => {
            context.cucumberExitCode = code;
            resolve(context);
        });
    });
}

/**
 * Stop the selenium server
 * @param {Object} context
 * @return {Promise}
 */
function stopSeleniumServer(context) {
    return new Promise(resolve => {
        console.log('Stopping Selenium server');
        context.seleniumServer.kill();
        resolve(context);
    });
}

/**
 * Exit this process with the correct code
 * @param {Object} context - cucumber's exitcode
 */
function exitWithCode(context) {
    process.exit(context.cucumberExitCode);
}