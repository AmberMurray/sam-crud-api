const db = require('../db/connection')

class Collection {
  constructor () {}

  static getAll() {
    return db('collections')
  }

  static getOne(id) {
    return db('collections').where({ id }).first()
  }

//using destructuring here to validate code coming into the create request
  static create ({ name }) {
    const artist = { name }
    return db('collections').insert(artist).returning('*')
  }

  static update (body) {
    return db('collections').where('id', body.id).update(body).returning('*')
  }


  static destroy(id) {
    return db('collections').where({ id }).del().returning('*')
  }

}

module.exports = Collection
