define(['when', '../scene', '../title', 'less!./aboutus.less'], function(when, Scene, Title) {
    var $aboutus = $("#aboutus")
    var $us = $aboutus.find(".us");
    var $line = $aboutus.find(".line");
    var $contact = $aboutus.find(".contact");
    var $topic = $aboutus.find(".topic");
    var $cover = $(".lightCover")
    return {
        aboutusHandler: function() {
            $aboutus.addClass("show")
            $us.addClass("show")
            $line.addClass("show")
            $contact.addClass("show")
            setTimeout(function() {
                $topic.addClass("show");
            }, 400)
            setTimeout(function() {
                $cover.addClass("show");
            }, 800)
            Title.set([{
                text: '我们'
            }]);
            return Scene.set("channel")

        },
        aboutusExitHandler: function() {
            $us.removeClass("show")
            $line.removeClass("show")
            $contact.removeClass("show")
            $topic.removeClass("show")
            $cover.removeClass("show")

            setTimeout(function() {
                if (window.location.href.indexOf('#aboutus') < 0) {
                    $aboutus.removeClass("show");
                }
            }, 600)
        }
    }
})