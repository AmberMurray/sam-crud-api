
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('collections').del()
  .then(function () {
    // Inserts seed entries
    return knex('collections').insert([
      {
        id: 1,
        name: 'Ancient American',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 2,
        name: 'Modern & Contemporary',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 3,
        name: 'Pacific Northwest',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 4,
        name: 'Cut & Paste',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 5,
        name: 'Finger Painting',
        pic_url: 'http://placehold.it/400x400'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('collections_id_seq', (SELECT MAX(id) FROM collections))"
    )
  })
}
