const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

function getCaughtPokemon() {
  return db('caught_pokemon').select()
}

module.exports = {
  db,
  getCaughtPokemon,
}
