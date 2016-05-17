var cucumber_junit = require('./node_modules/cucumber-junit/lib/cucumber_junit.js');
var fs = require('fs');


function junitReport() {
    fs.readFile('./results.json', (err, data) => {
        if (err) throw err;
        fs.writeFile('junit_results.xml', cucumber_junit(data), 'utf8')
    });
}

module.exports = junitReport();