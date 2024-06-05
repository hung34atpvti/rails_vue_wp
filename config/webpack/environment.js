const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())

environment.loaders.append('vue', {
  test: /\.vue$/,
  use: [{
    loader: 'vue-loader'
  }]
})

module.exports = environment