
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('artworks').del()
  .then(function () {
    // Inserts seed entries
    return knex('artworks').insert([
      {
        id: 1,
        artist_id: 1,
        title: 'You\'re my boy, blue!',
        yr_created: '1981',
        type: 'Watercolor and mud painting'
      },
      {
        id: 2,
        artist_id: 2,
        title: 'Untitled Nothing',
        yr_created: '1934',
        type: 'Ceramic sculpture'
      },
      {
        id: 3,
        artist_id: 3,
        title: 'Hungry Like The Wolf',
        yr_created: '1901',
        type: 'Textile'
      },
      {
        id: 4,
        artist_id: 3,
        title: 'Flock of Seaguls',
        yr_created: '1902',
        type: 'Paper sculpture'
      },
      {
        id: 5,
        artist_id: 1,
        title: 'Can You Hear Me?',
        yr_created: '2015',
        type: 'Mixed-media'
      },
      {
        id: 7,
        artist_id: 5,
        title: 'Pigs In Space',
        yr_created: '1823',
        type: 'Aluminum & Acrylic'
      },
      {
        id: 8,
        artist_id: 4,
        title: 'Squatch',
        yr_created: '1955',
        type: 'Kinetic sculpture'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artworks_id_seq', (SELECT MAX(id) FROM artworks))"
    )
  })
}
