const express = require('express')
const router = express()
const knex = require('../index')
const db = knex.knex

router.get('/board', (req, res) => {
    res.render('board')
})

module.exports = router