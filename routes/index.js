var express = require('express');
var router = express.Router();

var home = require('../analysis.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = home.DoAnalysis();

  res.render('index', result);
});

module.exports = router;
