import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***
export function getPokemonList(url) {
  return request.get(url).then((response) => response.body)
}
export function getPokemonData(pokemon) {
  return request.get(pokemon.url).then((response) => response.body)
}
