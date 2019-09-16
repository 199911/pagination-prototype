
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          id: 1,
          name: 'Sunday',
          likes: 405,
          created_at: new Date(1999,0,1),
          updated_at: new Date(1999,0,1),
        },
        {
          id: 2,
          name: 'Monday',
          likes: 169,
          created_at: new Date(2000,0,1),
          updated_at: new Date(2000,10,1),
        },
        {
          id: 3,
          name: 'Tuesday',
          likes: 100,
          created_at: new Date(1997,0,1),
          updated_at: new Date(2000,7,1),
        },
        {
          id: 4,
          name: 'Wednesday',
          likes: 777,
          created_at: new Date(1989,0,1),
          updated_at: new Date(2000,5,9),
        },
        {
          id: 5,
          name: 'Thursday',
          likes: 689,
          created_at: new Date(1992,11,12),
          updated_at: new Date(2000,10,1),
        },
        {
          id: 6,
          name: 'Friday',
          likes: 405,
          created_at: new Date(2047,0,13),
          updated_at: new Date(2099,10,14),
        },
      ]);
    });
};
