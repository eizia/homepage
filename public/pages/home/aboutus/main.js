define(['when', '../scene', '../title', 'less!./aboutus.less'], function(when, Scene, Title) {
    var $aboutus = $("#aboutus")
    var $us = $aboutus.find(".us");
    var $line = $aboutus.find(".line");
    var $contact = $aboutus.find(".contact");
    return {
        aboutusHandler: function() {
            $aboutus.addClass("show")
            $us.addClass("show")
            $line.addClass("show")
            $contact.addClass("show")
            Title.set([
                {text: '我们'}
            ]);
            return Scene.set("channel")

        },
        aboutusExitHandler:function(){

            $us.removeClass("show")
            $line.removeClass("show")
            $contact.removeClass("show")
            return when().delay(300).then(function(){
            	setTimeout(function(){
            		$aboutus.removeClass("show");
            	}, 300)
            })
        }
    }
})
