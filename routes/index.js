var express = require('express');
var router = express.Router();

/*exports.index = function(req,res){
	res.render('index');
};

exports.templates = function(req,res){
	filename = req.params.filename;
	res.render('templates/'+filename);
};*/


//GET home page.
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('*/:route',function(req, res){
	var filename = req.params['0'];
	//console.log(req.params['0']);
	res.render('templates/' + filename);
});

module.exports = router;
