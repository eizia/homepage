define(['less!./customer.less'], function() {
    var video = document.querySelector('.mainVideo.enter');
    return {
        customerHomeHandler: function() {
            $('.guide').html('客户');
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
