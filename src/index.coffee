eco = require 'eco'
umd = require 'umd-wrapper'

module.exports = class EcoCompiler
  brunchPlugin: yes
  type: 'stylesheet'
  extension: 'eco'

  constructor: (@config) ->
    null

  compile: (data, path, callback) ->
    try
      result = eco.render(data)
    catch err
      error = err
    callback error, result
