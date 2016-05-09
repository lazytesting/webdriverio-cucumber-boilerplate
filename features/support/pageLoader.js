var glob = require('glob').sync;
var path = require('path');

module.exports.load = function(world) {
    return glob(__dirname + '/../pages/*.page.js')
        .forEach(pagePath => {

            var pageName = path.basename(pagePath);
            var name = pageName.substr(0, pageName.length - 8) + 'Page';

            world[name] = require(pagePath);
            world[name].setBrowser(world.browser)
        });
};
