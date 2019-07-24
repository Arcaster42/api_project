const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()
const knex = require('../index')
const db = knex.knex

router.post('/reply', upload.none(), (req, res) => {
    console.log(req.body)
    res.send(req.body.content)
})

module.exports = router