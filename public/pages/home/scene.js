define(['when'], function(when) {

    var userAgent = window.navigator.userAgent;

    var video = {
        enter: document.querySelector('.mainVideo.enter'),
        landing: document.querySelector('.mainVideo.landing'),
        exit: document.querySelector('.mainVideo.exit')
    }


    var current = 'logo';

    var scenes = {
        logo: {},
        home: { in : function(from) {
                if (from === 'logo') {
                    return play('landing');
                }
            }
        },
        channel: { in : function(from) {
                return play('enter');
            },
            out: function(to) {
                switch (to) {
                    case 'home':
                        return play('exit');
                    case 'detail':
                        return play('exit');
                }
            }
        },
        detail: { in : function(from) {
                var defer = when.defer();
                defer.resolve();
                return defer.promise;
            },
            out: function(to) {
                var defer = when.defer();
                defer.resolve();
                return defer.promise;
            }
        }
    };

    var videoNames = Object.keys(video);
    var loadedVideos = 0;
    var onloadDefer = when.defer();


    document.addEventListener("WeixinJSBridgeReady", function() {
        var videos = document.querySelectorAll("video");
        var i = 0;
        while (i < videos.length) {
            videos[i].play()
        }

    }, false);

    videoNames.forEach(function(name) {

        // video[name].addEventListener('loadedmetadata', function() {
        //     this.currentTime=0.01;
        //     this.play();
        // });

        // video[name].play();

        //先把视频全部播放一遍，通过ended判定视频全部完整缓存。只设置autoplay，获取不到视频完整缓冲好的事件。
        video[name].addEventListener('ended', function() {
            loadedVideos++;
            if (loadedVideos === videoNames.length) {
                console.info("all videos loaded")
                onloadDefer.resolve();
            }
        });

    });


    function play(name) {

        var defer = when.defer();


        function run() {
            videoNames.forEach(function(n) {
                $(video[n]).addClass('hide');
            });
            $(video[name]).removeClass('hide');

            video[name].play();
        }

        video[name].onended = defer.resolve;

        if (video[name].currentTime !== 0) {
            video[name].currentTime = 0;
            video[name].onseeked = run;
        } else {
            run();
        }
        return defer.promise;
    }

    var loadingInterval;
    var loadingIndex = 0;
    var loadingText = ["···", "··", "·"]
    $(".gCover").click(function() {

        videoNames.forEach(function(name) {
            video[name].play();
        });

        $enter = $(".gCover .enter").addClass("loading");
        $enter.text(loadingText[loadingIndex % 3]);
        clearInterval(loadingInterval);
        loadingInterval = setInterval(function(){
            loadingIndex++;
            $enter.text(loadingText[loadingIndex % 3]);
        }, 500)

    })

    return {
        set: function(name) {
            var defer = when.defer();
            if (current !== name) {
                when(scenes[current].out && scenes[current].out(name))
                    .then(defer.notify)
                    .then(function() {
                        return scenes[name].in && scenes[name].in(current)
                    })
                    .then(function() {
                        current = name;
                        defer.resolve();
                    });

                return defer.promise;
            } else {
                return when.resolve();
            }
        },
        loaded: onloadDefer.promise,
        onload: function(callback) {
            onloadDefer.promise.then(callback);
        }
    }
})