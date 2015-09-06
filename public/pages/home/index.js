define([], function() {

    var routes = {
        '/':homehandler,
        '/product': productHomeHandler,
        '/product/:productName': productDetailHandler,
        '/case':caseHomeHandler,
        '/case/:caseName':caseDetailHandler,
        '/customer':customerHomeHandler,
        '/customer/:customerName':customerDetailHandler,
        '/aboutus':aboutusHandler
    };

    function homehandler(){
    	console.log('this is home!')
    }

    function productHomeHandler() {
        console.log('product!');
    }

    function productDetailHandler(productName) {
        console.log('product name is:'+productName);
    }

    function caseHomeHandler() {
        console.log('case!');
    }

    function caseDetailHandler(caseName) {
        console.log('case name is:'+caseName);
    }

    function customerHomeHandler() {
        console.log('customer!');
    }

    function customerDetailHandler(caseName) {
        console.log('customer name is:'+caseName);
    }

    function aboutusHandler() {
        console.log('aboutus!');
    }

    var router = Router(routes);
    router.init();

});
