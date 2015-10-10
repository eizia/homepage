define(['../scene', '../title', 'less!./product.less'], function(Scene, Title) {

    var allProduct = Array.prototype.slice.call(document.querySelectorAll("#product .cardContainer"));
    var $product = $("#product")

    return {
        productHandler: function() {
            $product.addClass("show")
            allProduct.forEach(function(card){
                $(card).addClass("show")
            })

            Title.set([
                {text: '产品'}
            ]);
            return Scene.set("channel")

        },
        productExitHandler:function(){
            allProduct.forEach(function(card){
                $(card).removeClass("show")
            })
            setTimeout(function(){
                $product.removeClass("show")
            }, 500)
        }
    }
})
