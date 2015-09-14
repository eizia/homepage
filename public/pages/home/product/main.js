define(['less!./product.less'], function() {
    return {
        productHomeHandler: function() {
        	$('#product').addClass('show');
        },
        productDetailHandler: function(productName) {
            console.log('product name is:' + productName);
        }
    }
})
