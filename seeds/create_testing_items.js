const faker = require('faker');

const createFakeData = (id) => ({
  id,
  name: faker.name.findName(),
  likes: faker.random.number(),
  created_at: faker.date.past(),
  updated_at: faker.date.recent()
})


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('many_items')
    .del()
    .then(async function () {
      // Create 100,000,000 items
      const loop = 1000000;
      const chunk = 100;
      for(let i = 0; i < loop; ++i) {
        const items = [];
        for(let j = 1; j <= chunk; ++j) {
          const id = i * chunk + j;
          items.push(createFakeData(id));
        }
        await knex('many_items').insert(items);
      }
    });
};
