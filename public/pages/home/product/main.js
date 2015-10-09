define(['../scene', '../title', 'less!./product.less'], function(Scene, Title) {
    return {
        productHomeHandler: function() {
            $('.module').removeClass('show');
            $('#product').addClass('show');
            $('.mainVideo.landing').addClass("hide");

            Scene.set("channel")
            Title.set([
                {text: '产品'}
            ]);
            //替换视频并且开始播放
        },
        productDetailHandler: function(productName) {
            console.log('product name is:' + productName);
        }
    }
})
