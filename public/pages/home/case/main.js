define(['less!./case.less'], function() {
    return {
        caseHomeHandler: function() {
            $('.guide').html('案例');
            $('.module').removeClass('show');
            $('#case').addClass('show');
            $('.mainVideoBg').css({
                'background-image': 'url(/resource/image/bg_a.jpg)'
            })
        },
        caseDetailHandler: function(caseName) {
            console.log('case name is:' + caseName);
        }
    }
})
