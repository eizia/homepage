define(['./product/main','./case/main','./customer/main','./aboutus/main','less!./index'], function(Product,Case,Customer,Aboutus) {

    var routes = {
        '/':homehandler,
        '/product': Product.productHomeHandler,
        '/product/:productName': Product.productDetailHandler,
        '/case':Case.caseHomeHandler,
        '/case/:caseName':Case.caseDetailHandler,
        '/customer':Customer.customerHomeHandler,
        '/customer/:customerName':Customer.customerDetailHandler,
        '/aboutus':Aboutus.aboutusHandler
    };

    function homehandler(){
    	console.log('this is home!')
    }

    var router = Router(routes);
    router.init();

});
