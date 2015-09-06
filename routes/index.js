var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

/* GET home page. */
router.get('/*', function(req, res,next) {
    var contentType = req.get('Content-Type');
    if (contentType === undefined || contentType === 'text/html') {
        var filePath = path.join(__dirname, '../public/pages/home/index.html');
        var html = fs.readFile(filePath, function(err, data) {
            if (err) {
                res.status(404).end();
            } else {
                res.set('Content-Type', 'text/html');
                res.send(data);
            }
        })
    }else{
    	next();
    }
});

router.get('/:pageName', function(req, res) {
    var html = fs.readFile(filePath, function(err, data) {
        if (err) {
            res.status(404).end();
        } else {
            res.set('Content-Type', 'text/html');
            res.send(data);
        }
    })
})

module.exports = router;
