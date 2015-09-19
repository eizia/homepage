define(['less!./product.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        productHomeHandler: function() {
        	$('.guideBtn').html('产品').attr('href','/#product');
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
