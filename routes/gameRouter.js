var router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.render('game/index')
        console.log('test game route')
    })
    .post((req, res) => {})

module.exports = router