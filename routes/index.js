var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
    res.redirect('/home');
});

router.get('/:pageName', function(req, res) {
	var filePath = path.join(__dirname,'../public/pages/'+req.params.pageName+'/index.html');
	var html = fs.readFile(filePath,function(err,data){
		if (err) {
			res.status(404).end();
		}else{
			res.set('Content-Type', 'text/html');
			res.send(data);
		}
	})
})

module.exports = router;
