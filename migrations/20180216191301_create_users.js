
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments('id').unsigned().primary();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'))
    table.dateTime('updatedAt').nullable();
    table.dateTime('deletedAt').nullable();
    
    table.string('username').unique().notNull();
    table.string('firstname').notNull();
    table.string('lastname').notNull();
    table.string('email').unique().notNull();
    table.string('password').notNull();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
