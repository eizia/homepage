define(['less!./product.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        productHomeHandler: function() {
        	$('.guide').html('产品');
            $('.module').removeClass('show');
            $('#product').addClass('show');
            $('.mainVideo.landing').remove();
            //替换视频并且开始播放
            video.play();
        },
        productDetailHandler: function(productName) {
            console.log('product name is:' + productName);
        }
    }
})
