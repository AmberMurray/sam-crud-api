
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('artists').del()
  .then(function () {
    // Inserts seed entries
    return knex('artists').insert([
      {
        id: 1,
        first_name: 'vince',
        last_name: 'v-gooh',
        nationality: 'earth'
      },
      {
        id: 2,
        first_name: 'edward',
        last_name: 'hawk-eye-hawking',
        nationality: 'california'
      },
      {
        id: 3,
        first_name: 'grafitti',
        last_name: 'banksey',
        nationality: 'rollerskate'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists))"
    )
  })
}
