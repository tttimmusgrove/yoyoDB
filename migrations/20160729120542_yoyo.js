
exports.up = function(knex, Promise) {
  return knex.schema.createTable('yoyo', function(table){
    table.increments();
    table.string('name');
    table.string('price');
    table.integer('rating');
    table.string('difficulty');
    table.string('imageURL');
    table.string('videoUrl');
    table.string('type');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('yoyo');
};
