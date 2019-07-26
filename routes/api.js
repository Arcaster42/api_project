const express = require('express')
const router = express()
const knex = require('../index.js')
const db = knex.knex

router.get('/api/posts', (req, res) => {
    db('posts')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/posts/:author', (req, res) => {
    db('posts')
    .where({author: req.params.author})
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/replies', (req, res) => {
    db('replies')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/replies/:author', (req, res) => {
    db('replies')
    .where({author: req.params.author})
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/topics/', (req, res) => {
    db('topics')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/topics/:name', (req, res) => {
    db('topics')
    .where({topic: req.params.name})
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/users', (req, res) => {
    db('users')
    .select('username')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

module.exports = router