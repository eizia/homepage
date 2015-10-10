define(['when', '../scene', '../title', 'less!./customer.less'], function(when, Scene, Title) {
    var $customer = $("#customer")
    var $allCustomers = $(".customer")
    return {
        customerHandler: function() {
            $customer.addClass("show")
            $allCustomers.addClass("show");
            Title.set([
                {text: '客户'}
            ]);
            return Scene.set("channel")

        },
        customerExitHandler:function(){
            $allCustomers.removeClass("show");
            return when().delay(300).then(function(){
            	setTimeout(function(){
            		$customer.removeClass("show");
            	}, 300)
            })
        }
    }
})
