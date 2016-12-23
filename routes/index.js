var express = require('express');
var router = express.Router();

var home = require('../controllers/home.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  var result = home.Index();

  res.render('index', result);
});

module.exports = router;
