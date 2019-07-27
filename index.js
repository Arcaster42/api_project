//Server Config
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view engine', 'pug')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))

//Modules
require('dotenv').config()
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: 5432
    }
})
const {Model} = require('objection')
Model.knex(knex)
module.exports = {knex}

//Routes
app.use(require('./routes/root'))
app.use(require('./routes/signup'))
app.use(require('./routes/api'))
app.use(require('./routes/board'))
app.use(require('./routes/reply'))
app.use(require('./routes/post'))

//Server Start
app.listen(port, () => console.log(`Listening on ${port}`))