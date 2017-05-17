const db = require('../db/connection')

class Artwork {
  constructor () {}

  static getAll() {
    return db('artworks')
  }

  static getOne(id) {
    return db('artworks').where({ id }).first()
  }

//using destructuring here to validate code coming into the create request
  static create ({artist_id, title, yr_created, type}) {
    const artist = {artist_id, title, yr_created, type}
    return db('artworks').insert(artist).returning('*')
  }

  static update (body) {
    return db('artworks').where('id', body.id).update(body).returning('*')
  }


  static destroy(id) {
    return db('artworks').where({ id }).del().returning('*')
  }

}

module.exports = Artwork
