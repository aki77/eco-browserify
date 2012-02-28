(function() {
  "use strict";
  var eco, precompile;

  precompile = require('eco').precompile;

  eco = function() {
    return function(bundle) {
      return bundle.register('.eco', function(body) {
        return "module.exports = " + (precompile(body));
      });
    };
  };

  module.exports = eco();

  module.exports.eco = eco;

}).call(this);
