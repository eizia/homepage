define(['less!./customer.less'], function() {
    return {
        customerHandler: function() {
            $('.guideBtn').html('客户').attr('href','/#customer');
            $('.module').removeClass('show');
            $('#customer').addClass('show');
            $('.mainVideo.landing').addClass("hide");
        }
    }
})
