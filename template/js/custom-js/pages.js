// Add your custom JavaScript for storefront pages here.
import EcomSearch from '@ecomplus/search-engine'
window.$ecomConfig.set('default_img_size', 'zoom')

const search = new EcomSearch()
console.log(search)
search.setSortOrder('news').fetch()
