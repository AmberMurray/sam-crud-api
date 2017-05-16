const db = require('../db/connection')

class Artist {
  constructor () {}

  static getAll() {
    return db('artists')
  }

  static getOne(id) {
    return db('artists').where({ id }).first()
  }

  static create(body) {
    return db('artists').insert(body).returning('*')
  }

  static destroy(id) {
    return db('artists').where({ id }).del().returning('*')
  }





}




module.exports = Artist
