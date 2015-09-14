define(['less!./case.less'], function() {
    return {
        caseHomeHandler: function() {
            $('.guide').html('案例');
            $('.module').removeClass('show');
            $('#case').addClass('show');

            //替换视频并且开始播放
            $('.mainVideo').attr('src','/resource/video/enter.mp4');
            $('.mainVideo')[0].play();
        },
        caseDetailHandler: function(caseName) {
            console.log('case name is:' + caseName);
        }
    }
})
