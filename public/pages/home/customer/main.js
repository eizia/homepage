define(['less!./customer.less'], function() {
    return {
        customerHomeHandler: function() {
            console.log('customer!');
        },
        customerDetailHandler: function(customerName) {
            console.log('customer name is:' + customerName);
        }
    }
})
