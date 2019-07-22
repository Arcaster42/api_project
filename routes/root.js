const express = require('express')
const router = express.Router()
const knex = require('../index.js')

router.get('/', (req, res) => {
    res.send('placeholder')
})

module.exports = router