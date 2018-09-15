var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Weav' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Weav' });
});

router.get('/consultant-Ryan', function(req, res, next) {
  res.render('consultant-Ryan', { title: 'Adrian Ryan Brief' });
});

module.exports = router;
