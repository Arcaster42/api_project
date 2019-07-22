//Server Config
const express = require('express')
const app = express()
const port = 3000
app.set('view_engine', 'pug')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))

//Modules
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'arcaster',
        password: 'admin',
        database: 'api_project'
    }
})

module.exports = knex

//Routes
app.use(require('./routes/root'))

//Server Start
app.listen(port, () => console.log(`Listening on ${port}`))