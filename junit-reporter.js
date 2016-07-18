var cucumber_junit = require('./node_modules/cucumber-junit/lib/cucumber_junit.js');
var fs = require('fs');


function junitReport(resultPath, JUnitResultPath) {
    var data = fs.readFileSync(resultPath);
    var junitData = cucumber_junit(data);
    fs.writeFileSync(JUnitResultPath, junitData, 'utf8')
}

module.exports = junitReport;

