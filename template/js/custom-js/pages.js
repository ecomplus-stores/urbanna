// Add your custom JavaScript for storefront pages here.
if (window.storefront && window.storefront.context && window.storefront.context.resource === 'products') {
    window.$ecomConfig.set('default_img_size', 'zoom')
}
