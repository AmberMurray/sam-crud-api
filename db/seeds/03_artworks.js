
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
        type: 'Watercolor and mud painting',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 2,
        artist_id: 2,
        title: 'Untitled Nothing',
        yr_created: '1934',
        type: 'Ceramic sculpture',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 3,
        artist_id: 3,
        title: 'Hungry Like The Wolf',
        yr_created: '1901',
        type: 'Textile',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 4,
        artist_id: 3,
        title: 'Flock of Seaguls',
        yr_created: '1902',
        type: 'Paper sculpture',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 5,
        artist_id: 1,
        title: 'Can You Hear Me?',
        yr_created: '2015',
        type: 'Mixed-media',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 7,
        artist_id: 5,
        title: 'Pigs In Space',
        yr_created: '1823',
        type: 'Aluminum & Acrylic',
        pic_url: 'http://placehold.it/400x400'
      },
      {
        id: 8,
        artist_id: 4,
        title: 'Squatch',
        yr_created: '1955',
        type: 'Kinetic sculpture',
        pic_url: 'http://placehold.it/400x400'
      }
    ])
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('artworks_id_seq', (SELECT MAX(id) FROM artworks))"
    )
  })
}
