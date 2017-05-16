const db = require('../db/connection')

class Artist {
  constructor () {}

  static getAll() {
    return db('artists')
  }

  static getOne(id) {
    return db('artists').where({ id }).first()
  }

//The code here is the same as the below, but is using destructuring - it's fancy
  static create ({first_name, last_name, nationality}) {
    const artist = {first_name, last_name, nationality}
    return db('artists').insert(artist).returning('*')
  }

  // static create(body) {
  //   //we do validation here to make sure what gets entered into the db is the stuff we want entered and not evil stuff
  //   const artist = {
  //     first_name: body.first_name,
  //     last_name: body.last_name,
  //     nationality: body.nationality
  //   }
  // }
  // static create(body) {
  //   return db('artists').insert(body).returning('*')
  // }

  static destroy(id) {
    return db('artists').where({ id }).del().returning('*')
  }





}




module.exports = Artist
