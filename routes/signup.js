const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()

router.get('/signup', (req, res) => {
    res.render('signup')
})

router.post('/signup', upload.none(), (req, res) => {
    console.log(req.body)
})

module.exports = router