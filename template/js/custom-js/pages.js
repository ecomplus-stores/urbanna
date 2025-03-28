// Primeiro trecho (busca de produtos)
import EcomSearch from '@ecomplus/search-engine'
window.$ecomConfig.set('default_img_size', 'zoom')

const search = new EcomSearch()
console.log(search)
search.setSortOrder('news').fetch()

// Segundo trecho (redirecionamento para carrinho)
if (storefront && storefront.context && storefront.context.resource === 'products') {
  ecomCart.on('addItem', (data) => { 
    window.location = '/app/#/cart/'
  })
}
