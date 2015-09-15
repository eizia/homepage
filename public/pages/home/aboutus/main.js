define(['less!./aboutus.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        aboutusHandler: function() {
            $('.guide').html('我们');
            $('.module').removeClass('show');
            $('#aboutus').addClass('show');
            $('.mainVideo.landing').remove();
            //替换视频并且开始播放
            video.play();
        }
    }
})
