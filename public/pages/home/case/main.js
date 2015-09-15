define(['less!./case.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        caseHomeHandler: function() {
            $('.guideBtn').html('案例').attr('href','/#case');
            $('.subGuideBtn').html('');
            $('.module').removeClass('show');
            $('#case').addClass('show');
            $('.mainVideo.landing').remove();
            //替换视频并且开始播放
            video.play();
        },
        caseDetailHandler: function(caseName) {
            console.log('case name is:' + caseName);
        }
    }
})
