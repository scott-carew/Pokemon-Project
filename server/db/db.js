const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getCaughtPokemon()
  return db('')


  module.exports = {
    db,
    getCaughtPokemon
  }