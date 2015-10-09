define(['../scene', 'less!./aboutus.less'], function(Scene) {
    return {
        aboutusHandler: function() {
            $('.guideBtn').html('我们').attr('href','/#aboutus');
            $('.module').removeClass('show');
            $('#aboutus').addClass('show');
            $('.mainVideo.landing').addClass("hide");
        }
    }
})
