const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
      './lib/dsl': pathDslAlias,
      './../lib/dsl': pathDslAlias,
      '../lib/dsl': pathDslAlias,
      './methods/set-search-term': path.resolve(dirSearchAlias, 'set-search-term'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
      './html/AddressForm.html': path.resolve(__dirname, 'template/js/custom-js/components/AddressForm.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.js'),
      './js/ProductVariations.js': path.resolve(__dirname, 'template/js/custom-js/components/ProductVariations.js'),
      './js/SearchEngine.js': path.resolve(__dirname, 'template/js/custom-js/components/SearchEngine.js')
    }
  }
})