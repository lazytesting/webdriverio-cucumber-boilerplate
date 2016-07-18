const spawn = require('child_process').spawn;
const fs = require('fs');
const junitReporter = require('./junit-reporter.js');
const config = require('./config.json');
const mkdirp = require('mkdirp');

/**
 * Run tests
 */

startSeleniumServer()
    .then(cleanTestResults)
    .then(runCucumber)
    .then(stopSeleniumServer)
    .then(createJUnitReport)
    .then(exitWithCode)
    .catch(console.log);



/**
 * Run all cucumber test
 * @param {Object} context
 * @return {Promise}
 */
function cleanTestResults(context)
{
    return new Promise(resolve => {
        console.log('Clear old test results');

        //cucumber needs empty results file
        fs.writeFileSync(config.resultPath, "");
        try {
            fs.unlinkSync(config.JUnitResultPath);
        }catch(e) {}

        if( fs.existsSync(config.screenshotFolder) ) {
            files = fs.readdirSync(config.screenshotFolder);
            files.forEach(function (file, index) {
                var curPath = config.screenshotFolder + "/" + file;
                if (fs.lstatSync(curPath).isDirectory()) {
                    deleteFolderRecursive(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
        }
        else {
            mkdirp(config.screenshotFolder, function(err) {
                if (err)
                {
                    throw err;
                }
            });
        }


        resolve(context);
    });
}

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
 * Create the JUnit report
 * @param {Object} context
 * @return {Promise}
 */
function createJUnitReport(context) {
    return new Promise(resolve => {
        console.log('Create JUnit report');
        junitReporter(config.resultPath, config.JUnitResultPath);
        resolve(context);
    });
}

/**
 * Exit this process with the correct code
 * @param {Object} context - cucumber's exitcode
 */
function exitWithCode(context) {
    console.log('Exit')
    process.exit(context.cucumberExitCode);
}