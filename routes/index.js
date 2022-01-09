var express = require('express');
var router = express.Router();
var gameRouter = require('./gameRouter')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RunningDog' });
});

router.use('/game', gameRouter)

module.exports = router;
