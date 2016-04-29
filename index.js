/**
 * @param  {object} cooking - add, remove and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  var plugins = []

  if (options.cssnext) {
    plugins.push(require('postcss-cssnext'))
  }

  cooking.add('preLoader.postcss', {
    test: /\.css$/,
    loaders: ['postcss']
  })

  cooking.add('postcss', function () {
    return plugins
  })
}
