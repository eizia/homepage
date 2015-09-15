define(['./product/main', './case/main', './customer/main', './aboutus/main', 'less!./index'], function(Product, Case, Customer, Aboutus) {

    var routes = {
        '': homeHandler,
        'product': Product.productHomeHandler,
        'product/:productName': Product.productDetailHandler,
        'case': Case.caseHomeHandler,
        'case/:caseName': Case.caseDetailHandler,
        'customer': Customer.customerHomeHandler,
        'customer/:customerName': Customer.customerDetailHandler,
        'aboutus': Aboutus.aboutusHandler
    };

    var video = document.querySelector('.mainVideo.enter');

    function homeHandler() {
        $('.module').removeClass('show');
        $('#home').addClass('show');
        $('.guideBtn').html('');
        $('.subGuideBtn').html('');
        //mainVideoBg控制视频
        playBack();
    }
    function playBack(){
        if (video.currentTime > 0 ) {
            video.currentTime -= 0.012;
            requestAnimationFrame(playBack);
        };
    }

    // loading 结束后
    $('.mainVideo')[0].play();
    $('.logo,.menu').addClass('locate');

    var router = Router(routes);
    router.init();

});
