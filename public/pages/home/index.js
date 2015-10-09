define(['when', './product/main', './case/main', './customer/main', './aboutus/main', './scene', './title', 'less!./index'], function(when, Product, Case, Customer, Aboutus, Scene, Title) {

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


    function homeHandler() {
        $('.module').removeClass('show');
        $('#home').addClass('show');
        //mainVideoBg控制视频
        Scene.set("home")
        Title.set([]);
    }
    

    when.all([Scene.loaded, when().delay(1000)])
        .then(function(){

            Scene.set("home")
                .progress(function(){

                    console.info("start to home")

                    $('.gCover').addClass('hide');
                    $('nav.global').addClass('show');
                    $('.logo,.menu').addClass('locate');
                })
                .then(function(){

                    console.info("in home")

                });


        })





    var router = Router(routes);
    router.init();

});
