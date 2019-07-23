const express = require('express')
const router = express()
const knex = require('../index.js')

router.get('/api/roles', (req, res) => {
    let result;
    knex('roles')
    .then((results) => {
        result = JSON.stringify(results)
        res.send(result)
    })
})

module.exports = router