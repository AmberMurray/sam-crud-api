exports.up = (knex, Promise) => {
  return knex.schema.createTable('artworks', (table) => {
    table.increments()
    table.integer('artist_id')
    table.string('title')
    table.string('yr_created')
    table.string('type')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('artworks')
}
