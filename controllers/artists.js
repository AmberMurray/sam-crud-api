const Artist = require('../models/artist')


const getAll = (req, res) => {
  Artist.getAll().then(artists => {
    res.json({ artists })
  })
}

const getOne = (req, res) => {
  let id = req.params.id
  Artist.getOne(id).then(artist => {
    res.json({ artist })
  })
}


const create = (req, res) => {
  let body = {
    first_name: req.body.first_name,
    last_name: req.body. last_name,
    nationality: req.body.nationality
  }
  Artist.create(body).then(artist => {
    res.json(artist)
  })

}

const destroy = (req, res) => {
  id = req.params.id
  Artist.destroy(id).then(([artist]) => {
    res.json( artist )
  })
}

//This is the same delete as above. The reason for the const = deadArtist bit is because we are jumping into the arry and pulling out the one thing we're deleting (it's just nice)

// const destroy = (req, res) => {
//   id = req.params.id
//   Artist.destroy(id).then(artist => {
//     const deadArtist = artist[0]
//     res.json({ deadArtist })
//   })
// }



module.exports = { getAll, getOne, create, destroy }
