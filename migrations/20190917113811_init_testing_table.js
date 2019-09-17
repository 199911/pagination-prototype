
exports.up = async function(knex) {
    // Create another table with same schema as `items``
    await knex.schema.createTable('many_items', function (table) {
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
    await knex.schema.dropTable('many_items')
  };
