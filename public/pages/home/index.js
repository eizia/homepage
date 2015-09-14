define(['./product/main', './case/main', './customer/main', './aboutus/main', 'less!./index'], function(Product, Case, Customer, Aboutus) {

    var routes = {
        '/': homeHandler,
        '/product': Product.productHomeHandler,
        '/product/:productName': Product.productDetailHandler,
        '/case': Case.caseHomeHandler,
        '/case/:caseName': Case.caseDetailHandler,
        '/customer': Customer.customerHomeHandler,
        '/customer/:customerName': Customer.customerDetailHandler,
        '/aboutus': Aboutus.aboutusHandler
    };

    function homeHandler() {
        $('.module').removeClass('show');
        $('#home').addClass('show');
        $('.guide').html('');
        //mainVideoBg控制视频
        $('.mainVideoBg').css({
            'background-image':'url(/resource/image/bg_b.jpg)'
        })
    }


    setTimeout(function(){
        $('.logo,.menu').addClass('locate');
    },2000);

    var router = Router(routes);
    router.init();

});
