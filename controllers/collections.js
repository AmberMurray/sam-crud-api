const Collection = require('../models/collection')


const getAll = (req, res) => {
  Collection.getAll().then(collections => {
    res.json( collections )
  })
}

const getOne = (req, res) => {
  let id = req.params.id
  Collection.getOne(id).then(collection => {
    res.json( collection )
  })
}

const create = (req, res) => {
  Collection.create(req.body).then(collection => {
    res.json(collection)
  })
}

const update = (req, res) => {
  let body = {
    id: req.params.id,
    name: req.body.name,
  }
  Collection.update(body).then(([collection]) => {
    res.json(collection)
  })
}

const destroy = (req, res) => {
  id = req.params.id
  Collection.destroy(id).then(([collection]) => {
    res.json( collection )
  })
}




module.exports = { getAll, getOne, create, update, destroy }
