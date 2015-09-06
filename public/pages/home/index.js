define([], function() {

    function initRouter() {
        var routes = {
            '/products': productsHander
        };

        function productsHander(){
        	alert('products!');
        }

        var router = Router(routes);
        router.init();
    }

    initRouter();

});
