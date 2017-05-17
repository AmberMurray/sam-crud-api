
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
  .then(function () {
    // Inserts seed entries
    return knex('collections').insert([
      {
        id: 1,
        name: 'Ancient American'
      },
      {
        id: 2,
        name: 'Modern & Contemporary'
      },
      {
        id: 3,
        name: 'Pacific Northwest'
      },
      {
        id: 4,
        name: 'Cut & Paste'
      },
      {
        id: 5,
        name: 'Finger Painting'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('collections_id_seq', (SELECT MAX(id) FROM collections))"
    )
  })
}
