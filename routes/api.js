const express = require('express')
const router = express()
const knex = require('../index.js')
const db = knex.knex

router.get('/api/posts', (req, res) => {
    let result;
    db('posts')
    .then((results) => {
        result = JSON.stringify(results)
        res.send(result)
    })
})

module.exports = router