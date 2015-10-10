define(['../scene', '../title', 'less!./product.less'], function(Scene, Title) {

    var $allProduct = $("#product .cardContainer");
    var $product = $("#product")

    $allProduct.each(function(index, elem){
        var $elem = $(elem);

        var $light = $elem.find(".light");
        var $float = $elem.find(".float");
        var $bg = $elem.find(".bg");
        var $card = $elem.find(".card");
        var $shadow = $elem.find(".shadow");
        var $rotateXY = $elem.find(".rotateXY");

        var $area = $elem.find(".area");
        var width = $area.width();
        var height = $area.height();
        $area.mousemove(function(event){
            var valueX = 2 * event.offsetX / width - 1
            var valueY = 2 * event.offsetY / height - 1
            //console.log(valueX, valueY)
            // $bg.velocity('stop');
            $bg.velocity('stop').velocity({
                translateX : -valueX * 20 + "px",
                translateY : -valueY * 20 + "px"
            }, 0)
            $light.velocity('stop').velocity({
                translateX : -valueX * 400 + "px",
                translateY : -valueY * 200 + "px"
            }, 0)
            $shadow.velocity('stop').velocity({
                translateX : -valueX * 10 + "px",
                translateY : -valueY * 10 + "px"
            }, 0)
            $float.velocity('stop').velocity({
                translateX : valueX * 8 + "px",
                translateY : valueY * 8 + "px"
            }, 0)
            $rotateXY.velocity('stop').velocity({
                rotateY : valueX * 8 + "deg",
                rotateX : -valueY * 8 + "deg"
            }, 0)
        })
    })

    return {
        productHandler: function() {
            $product.addClass("show")
            $allProduct.addClass("show");

            Title.set([
                {text: '产品'}
            ]);
            return Scene.set("channel")

        },
        productExitHandler:function(){
            $allProduct.removeClass("show");
            setTimeout(function(){
                $product.removeClass("show")
            }, 500)
        }
    }
})
