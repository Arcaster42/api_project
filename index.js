//Server Config
const express = require('express')
const app = express()
const port = 3000
app.set('view_engine', 'pug')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))

//Modules


//Routes
app.use(require('./routes/root'))

//Server Start
app.listen(port, () => console.log(`Listening on ${port}`))