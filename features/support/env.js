var config = require('../../config.json');

var configure = function () {
    //cucumber step timeout
    this.setDefaultTimeout(1000 * config.stepTimeout);
};

module.exports = configure;