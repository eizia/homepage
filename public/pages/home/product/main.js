define(['../scene', '../title', 'less!./product.less'], function(Scene, Title) {

    var $allProduct = $("#product .cardContainer");
    var $product = $("#product")
    var $topic = $product.find(".topic");
    var $cover = $(".lightCover");

    var origin = {}
    var current = {}

    $allProduct.each(function(index, elem) {
        var $elem = $(elem);
        var animating = false;
        var latestX = 0;
        var latestY = 0;

        var $light = $elem.find(".light");
        var $float = $elem.find(".float");
        var $bg = $elem.find(".bg");
        var $card = $elem.find(".card");
        var $shadow = $elem.find(".shadow");
        var $rotateXY = $elem.find(".rotateXY");

        var $area = $elem.find(".area");
        var width = $area.width();
        var height = $area.height();


        function transform(valueX, valueY, animation, fn) {
            var duration = animation ? animation : 0;
            $bg.velocity('stop').velocity({
                translateX: -valueX * 20 + "px",
                translateY: -valueY * 20 + "px"
            }, duration, "ease-in-out")
            $light.velocity('stop').velocity({
                translateX: -valueX * 400 + "px",
                translateY: -valueY * 200 + "px"
            }, duration, "ease-in-out")
            $shadow.velocity('stop').velocity({
                translateX: -valueX * 10 + "px",
                translateY: -valueY * 10 + "px"
            }, duration, "ease-in-out")
            $float.velocity('stop').velocity({
                translateX: valueX * 8 + "px",
                translateY: valueY * 8 + "px"
            }, duration, "ease-in-out")
            $rotateXY.velocity('stop').velocity({
                rotateY: valueX * 8 + "deg",
                rotateX: -valueY * 8 + "deg"
            }, duration, "ease-in-out", fn)
        }


        $area.mousemove(function(event) {
            var valueX = 2 * event.offsetX / width - 1
            var valueY = 2 * event.offsetY / height - 1
            //如果变化过大，缩小value的数值，避免跳动
            valueX = Math.abs(valueX - latestX) > 0.3 ? ((valueX - latestX) * 0.3 + latestX) : valueX;
            valueY = Math.abs(valueY - latestY) > 0.3 ? ((valueY - latestY) * 0.3 + latestY) : valueY;
            latestX = valueX
            latestY = valueY
            transform(valueX, valueY);
        })
        $area.mouseout(function() {
            transform(0, 0, 300)
            latestX = 0;
            latestY = 0;
        })
        if (window.DeviceOrientationEvent && window.outerWidth < 768) {
            window.addEventListener("deviceorientation", function(event) {

                if (!((origin.time + 100) < new Date().getTime())) {
                    if (origin.beta === undefined) {
                        origin.beta = event.beta;
                    }
                    if (origin.gamma === undefined) {
                        origin.gamma = event.gamma;
                    }
                    if (current.time === undefined) {
                        origin.time = new Date().getTime()
                    }
                    current.beta = event.beta - origin.beta;
                    current.gamma = event.gamma - origin.gamma;

                    current.beta = current.beta % 180
                    current.gamma = current.gamma % 90

                    transform(width * current.gamma / 10000, height * current.beta / 10000, 0);
                }

            })

            // 支持
        } else {
            // 不支持
        }


    })


    return {
        productHandler: function() {
            $product.addClass("show")
            $allProduct.addClass("show");

            origin = {};
            current = {};

            setTimeout(function() {
                $topic.addClass("show");
            }, 400)
            setTimeout(function() {
                $cover.addClass("show");
            }, 800)
            Title.set([{
                text: '案例'
            }]);
            return Scene.set("channel")

        },
        productExitHandler: function() {
            $allProduct.removeClass("show");
            $topic.removeClass("show")
            $cover.removeClass("show")

            if (window.location.href.indexOf('#product') < 0) {
                $product.removeClass("show");
            }
        }
    }
})