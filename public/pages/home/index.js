define(['./product/main', './case/main', './customer/main', './aboutus/main', 'less!./index'], function(Product, Case, Customer, Aboutus) {

    var routes = {
        '/': homehandler,
        '/product': Product.productHomeHandler,
        '/product/:productName': Product.productDetailHandler,
        '/case': Case.caseHomeHandler,
        '/case/:caseName': Case.caseDetailHandler,
        '/customer': Customer.customerHomeHandler,
        '/customer/:customerName': Customer.customerDetailHandler,
        '/aboutus': Aboutus.aboutusHandler
    };

    function homehandler() {
        console.log('this is home!')
    }

    setTimeout(function() {
        var $allPath = Array.prototype.slice.call(
                document.querySelector(".logo")
                .getElementsByTagName("svg"))
            .map(function(svgElment) {
                svgElment.style.opacity = 1;
                return Array.prototype.slice.call(svgElment.getElementsByTagName("path"))
            });

        Array.prototype.concat.apply([], $allPath).forEach(function(path) {
            path.executeQuery = [];
            animateCross(path,
                    200, 600, 600, "linear", "point", "inverse")
                (1, 2000, 300, "ease-out", "fill", "verse", function() {
                    //after logo shows up
                    !afterLogoShowsUp.exectued && afterLogoShowsUp();
                });
        });
    }, 1000);

    function animateCross(path, ratio, time, gap, func, fill, direction, fn) {
        _executeCross(path, ratio, time, gap, func, fill, direction, fn);

        setTimeout(function() {
            var arg = path.executeQuery.shift();
            if (arg) {
                animateCross.apply(animateCross, arg);
            }
        }, time + gap);

        return _pushCross.bind(path);
    }

    function _pushCross() {
        var arg = Array.prototype.slice.call(arguments);
        arg.unshift(this);
        this.executeQuery.push(arg);
        return _pushCross.bind(this);
    }

    function _executeCross(path, ratio, time, gap, func, fill, direction, fn) {

        var length = path.getTotalLength();
        var from;
        var to;
        var tmp;

        func = func || "linear";
        gap = gap || 200;
        ratio = ratio || 1;
        time = time || 600;

        from = ratio <= 1 ? ratio * length : ratio;
        to = fill === "fill" ? "0" : -length;

        tmp = from;
        if (direction === "inverse") {
            from = to;
            to = tmp;
        }

        path.style.transition = path.style.WebkitTransition = path.style.MozTransition = "none";
        path.style.strokeDasharray = tmp + " " + length;
        path.style.strokeDashoffset = from;
        path.getBoundingClientRect();
        path.style.transition = path.style.WebkitTransition = path.style.MozTransition = "stroke-dashoffset " + time + "ms " + func;
        path.style.strokeDashoffset = to;

        setTimeout(function() {
            fn && fn();
        }, time + gap)
    }


    function afterLogoShowsUp() {
        var allDelayShow = Array.prototype.slice.call(document.querySelectorAll(".delayShow"));

        allDelayShow.forEach(function(delayElement) {
            delayElement.style.opacity = 1;
        });

        afterLogoShowsUp.exectued = true;
    }

    setTimeout(function(){
        $('.logo,.menu').addClass('locate');
    },2000);

    var router = Router(routes);
    router.init();

});
