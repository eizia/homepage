define(['when', './product/main', './case/main', './customer/main', './aboutus/main', './scene', './title', 'less!./index'], function(when, Product, Case, Customer, Aboutus, Scene, Title) {


    var currentPage;
    var currentModule;

    var Home = {
        homeHandler: function() {
            $('#home').addClass('show');
            //mainVideoBg控制视频
            $('.logoSpace').addClass('locate');
            Title.set([]);
            return Scene.set('home')
                .progress(function() {
                    //start

                })
                .then(function() {
                    $('.logo,.menu').addClass('locate');
                    //done
                });
        },
        homeExitHandler: function() {
            $('.logo,.menu,.logoSpace').removeClass('locate');
            setTimeout(function() {
                if (window.location.hash.length > 3) {
                    $('#home').removeClass('show');
                }
            }, 800)
        }
    };

    function proxy(page) {
        var arg = Array.prototype.slice.call(arguments);
        var module = this;
        arg.shift();
        //run exit handler fisrt "xxxExitHandler"
        when(currentModule && currentModule[currentPage + 'ExitHandler'] && currentModule[currentPage + 'ExitHandler']())
            .then(function() {
                currentPage = page;
                currentModule = module;
                //and then run page handler  "xxxHandler"
                module[page + 'Handler'].apply(module, arg).then(function() {

                });
            })
    }


    var router = Router({
        '': proxy.bind(Home, 'home'),
        'case': proxy.bind(Case, 'case'),
        'case/:caseName': proxy.bind(Case, 'caseDetail'),
        'product': proxy.bind(Product, 'product'),
        'customer': proxy.bind(Customer, 'customer'),
        'aboutus': proxy.bind(Aboutus, 'aboutus')
    });

    when.all([Scene.loaded, when().delay(1000)])
        .then(function() {
            router.init("/");
            $('.gCover').addClass('hide');
            $('nav.global').addClass('show');
        })

    return Home;

});