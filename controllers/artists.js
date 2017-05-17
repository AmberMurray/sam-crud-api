const Artist = require('../models/artist')


const getAll = (req, res) => {
  Artist.getAll().then(artists => {
    res.json( artists )
  })
}

const getOne = (req, res) => {
  let id = req.params.id
  Artist.getOne(id).then(artist => {
    res.json( artist )
  })
}

const create = (req, res) => {
  Artist.create(req.body).then(artist => {
    res.json(artist)
  })
}

const update = (req, res) => {
  let body = {
    id: req.params.id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    nationality: req.body.nationality
  }
  Artist.update(body).then(([artist]) => {
    res.json(artist)
  })
}

const destroy = (req, res) => {
  id = req.params.id
  Artist.destroy(id).then(([artist]) => {
    res.json( artist )
  })
}




module.exports = { getAll, getOne, create, update, destroy }
