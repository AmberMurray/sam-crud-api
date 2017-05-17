const db = require('../db/connection')

class Artist {
  constructor () {}

  static getAll() {
    return db('artists')
  }

  static getOne(id) {
    return db('artists').where({ id }).first()
  }

//using destructuring here to validate code coming into the create request
  static create ({first_name, last_name, nationality}) {
    const artist = {first_name, last_name, nationality}
    return db('artists').insert(artist).returning('*')
  }

  static update (body) {
    return db('artists').where('id', body.id).update(body).returning('*')
  }


  static destroy(id) {
    return db('artists').where({ id }).del().returning('*')
  }

}

module.exports = Artist
