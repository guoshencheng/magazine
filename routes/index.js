var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('react', {
    name: 'index',
    data: null,
    title: 'create'
  })
})

module.exports = router;
