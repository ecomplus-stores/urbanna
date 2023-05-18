const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.js'),
      './js/ProductVariations.js': path.resolve(__dirname, 'template/js/custom-js/components/ProductVariations.js')
    }
  }
})