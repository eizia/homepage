define(['less!./customer.less'], function() {
    return {
        customerHomeHandler: function() {
            $('.guideBtn').html('客户').attr('href','/#customer');
            $('.module').removeClass('show');
            $('#customer').addClass('show');
            $('.mainVideo.landing').addClass("hide");
        },
        customerDetailHandler: function(customerName) {
            console.log('customer name is:' + customerName);
        }
    }
})
