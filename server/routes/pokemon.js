const express = require('express')
const router = express.Router()
const request = require('superagent')

// GET /api/v1/pokemon/
router.get('/', (req, res) => {
  request
    .get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      res.json(response.body)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send('err')
    })
})

module.exports = router
