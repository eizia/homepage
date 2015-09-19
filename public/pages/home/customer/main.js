define(['less!./customer.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        customerHomeHandler: function() {
            $('.guideBtn').html('客户').attr('href','/#customer');
            $('.module').removeClass('show');
            $('#customer').addClass('show');
            $('.mainVideo.landing').remove();
            //替换视频并且开始播放
            video.play();
        },
        customerDetailHandler: function(customerName) {
            console.log('customer name is:' + customerName);
        }
    }
})
