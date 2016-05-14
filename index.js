/**
 * @param  {object} cooking - add, remove and config
 * @param  {*} options - custom option
 */
module.exports = function (cooking, options) {
  var plugins = []

  if (options.cssnext) {
    plugins.push(require('postcss-cssnext')(options.cssnext))
    cooking.add('vue.autoprefixer', false)
  }

  if (options.nested) {
    plugins.push(require('postcss-nested')((options.nested))
  }

  if (options.bem) {
    plugins.push(require('postcss-bem')(options.bem))
  }

  cooking.add('preLoader.postcss', {
    test: /\.css$/,
    loaders: ['postcss-loader']
  })

  cooking.add('postcss', function () {
    return plugins
  })

  cooking.add('vue.postcss', function () {
    return plugins
  })
}
