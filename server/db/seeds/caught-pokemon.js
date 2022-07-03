/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('caught_pokemon').del()
  await knex('caught_pokemon').insert([
    {
      id: 1,
      user_id: 1,
      pokemon_name: 'pikachu',
      nickname: 'Chu Chu',
    },
    {
      id: 2,
      user_id: 1,
      pokemon_name: 'voltorb',
      nickname: 'Volty',
    },
    {
      id: 3,
      user_id: 1,
      pokemon_name: 'seel',
      nickname: 'Splashy',
    },
    {
      id: 4,
      user_id: 1,
      pokemon_name: 'diglett',
      nickname: 'Doug',
    },
  ])
}
