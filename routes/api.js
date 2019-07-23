const express = require('express')
const router = express()
const knex = require('../index.js')

router.get('/api/roles', (req, res) => {
    let query = knex.select().from('roles')
    console.log(query)
    res.send(query)
})

module.exports = router