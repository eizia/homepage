define(['less!./product.less'], function() {
    return {
        productHomeHandler: function() {
            console.log('product!');
        },
        productDetailHandler: function(productName) {
            console.log('product name is:' + productName);
        }
    }
})
