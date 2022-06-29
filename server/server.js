const path = require('path')
const express = require('express')

const welcome = require('./routes/welcome')
const pokemon = require('./routes/pokemon')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/welcome', welcome)
server.use('/api/v1/pokemon', pokemon)

module.exports = server
