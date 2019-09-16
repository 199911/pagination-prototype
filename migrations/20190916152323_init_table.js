
exports.up = async function(knex) {
  await knex.schema.createTable('items', function (table) {
    table
      .increments('id')
      .unsigned()
      .primary()
    table
      .string('name')
      .notNullable()
    table
      .integer('likes')
      .unsigned()
      .notNullable()
      .defaultTo(0)
    table.timestamps()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable('items')
};
