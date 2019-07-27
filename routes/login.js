const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()
const bcrypt = require('bcrypt')
const knex = require('../index')
const db = knex.knex

router.post('/login', upload.none(),  (req, res) => {
    const username = req.body.username
    const password = req.body.password
    db('users')
    .where({username: username})
    .then((data) => {
        const hash = data[0].pw_hash
        bcrypt.compare(password, hash, (err, same) => {
            if (same) {
                req.session.user = data[0].username
                res.redirect('/board')
            }
            if (!same) {
                res.send('Invalid Credentials')
            }
        })
    })
})

module.exports = router