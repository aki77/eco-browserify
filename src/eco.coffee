"use strict"

{precompile} = require 'eco'

eco = () ->
  (bundle) ->
    bundle.register '.eco', (body) ->
      "module.exports = #{precompile(body)}"

module.exports = eco()
module.exports.plugin = eco