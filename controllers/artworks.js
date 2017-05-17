const Artwork = require('../models/artwork')


const getAll = (req, res) => {
  Artwork.getAll().then(artworks => {
    res.json( artworks )
  })
}

const getOne = (req, res) => {
  let id = req.params.id
  Artwork.getOne(id).then(artwork => {
    res.json( artwork )
  })
}

const create = (req, res) => {
  Artwork.create(req.body).then(artwork => {
    res.json(artwork)
  })
}

const update = (req, res) => {
  let body = {
    id: req.params.id,
    artist_id: req.body.artist_id,
    title: req.body.title,
    yr_created: req.body.yr_created,
    type: req.body.type
  }
  Artwork.update(body).then(([artwork]) => {
    res.json(artwork)
  })
}

const destroy = (req, res) => {
  id = req.params.id
  Artwork.destroy(id).then(([artwork]) => {
    res.json( artwork )
  })
}


module.exports = { getAll, getOne, create, update, destroy }
