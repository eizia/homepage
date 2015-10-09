define(['less!./aboutus.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        aboutusHandler: function() {
            $('.guideBtn').html('我们').attr('href','/#aboutus');
            $('.module').removeClass('show');
            $('#aboutus').addClass('show');
            $('.mainVideo.landing').addClass("hide");
            //替换视频并且开始播放
            video.play();
        }
    }
})
