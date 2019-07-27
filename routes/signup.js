const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()
const knex = require('../index')
const db = knex.knex;
const bcrypt = require('bcrypt')
const hat = require('hat')

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', upload.none(), (req, res) => {
    const username = req.body.username.toLowerCase()
    const password = req.body.password
    db('users')
    .where({username: username})
    .then((query) => {
        if (query.length < 1) {
            bcrypt.hash(password, 10, (err, hash) => {
                db('users')
                .insert({
                    username: username,
                    email: 'test@email.com',
                    pw_hash: hash,
                    api_key: hat(),
                    can_put: true,
                    can_patch: true,
                    can_delete: true
                })
                .then(() => res.send('Account created'))
                .catch((err) => res.send(err))
            })
        } else if (query.length > 0) {
            res.send('User already exists')
        }
    })
    .catch((err) => res.send(err))
})

module.exports = router