/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('caught_pokemon', (table) => {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('pokemon_name')
    table.string('nickname')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('caught_pokemon')
}
