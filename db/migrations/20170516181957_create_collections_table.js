exports.up = (knex, Promise) => {
  return knex.schema.createTable('collections', (table) => {
    table.increments()
    table.string('name')
    table.string('pic_url')
    table.timestamps(true, true)
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('collections')
}
