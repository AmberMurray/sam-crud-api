
exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('artists').del()
  .then(function () {
    // Inserts seed entries
    return knex('artists').insert([
      {
        id: 1,
        first_name: 'Vince',
        last_name: 'V-gooh',
        nationality: 'Earth'
      },
      {
        id: 2,
        first_name: 'Edward',
        last_name: 'Hawkeye Hawking',
        nationality: 'California'
      },
      {
        id: 3,
        first_name: 'Grafitti',
        last_name: 'Banksey',
        nationality: 'Rollerskate'
      },
      {
        id: 4,
        first_name: 'Bill',
        last_name: 'Murray',
        nationality: 'USA'
      },
      {
        id: 5,
        first_name: 'Howie',
        last_name: 'Monet',
        nationality: 'France'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artists_id_seq', (SELECT MAX(id) FROM artists))"
    )
  })
}
