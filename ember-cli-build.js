/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    // sassOptions: {
    //   includePaths: [
    //     'node_modules/bootstrap-sass/assets/stylesheets'
    //   ]
    // }
  });

  // bootstrap & bootstrap-sass from node_modules
  app.import("../../node_modules/bootstrap/dist/js/bootstrap.js");
  // app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.eot", {
  //   destDir: "fonts/bootstrap"
  // });
  // app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.svg", {
  //   destDir: "fonts/bootstrap"
  // });
  // app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.ttf", {
  //   destDir: "fonts/bootstrap"
  // });
  // app.import("node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff", {
  //   destDir: "fonts/bootstrap"
  // });
  // app.import(
  //   "node_modules/bootstrap/fonts/glyphicons-halflings-regular.woff2",
  //   { destDir: "fonts/bootstrap" }
  // );

  return app.toTree();
};
