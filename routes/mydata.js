var express = require('express');
var router = express.Router();

/* GET Mydata. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Eluvaka Thirupathi' });
});

module.exports = router;
