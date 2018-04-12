define(['when', '../scene', '../title', 'less!./customer.less'], function(when, Scene, Title) {
    var $customer = $("#customer")
    var $allCustomers = $(".customer")
    var $topic = $customer.find(".topic");
    var $cover = $(".lightCover")
    return {
        customerHandler: function() {
            $customer.addClass("show")
            $allCustomers.addClass("show");
            setTimeout(function() {
                $topic.addClass("show");
            }, 400)
            setTimeout(function() {
                $cover.addClass("show");
            }, 800)
            Title.set([{
                text: '客户'
            }]);
            return Scene.set("channel")

        },
        customerExitHandler: function() {
            $allCustomers.removeClass("show");
            $topic.removeClass("show")
            $cover.removeClass("show")

            setTimeout(function() {
                if (window.location.href.indexOf('#customer') < 0) {
                    $customer.removeClass("show");
                }
            }, 600)
        }
    }
})