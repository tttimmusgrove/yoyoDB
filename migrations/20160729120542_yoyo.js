


exports.up = function(knex, Promise) {
  return knex.schema.createTable('yoyo', function(table){
    table.increments();
    table.string('name');
    table.string('price');
    table.integer('rating');
    table.string('difficulty');
    table.string('imageURL');
    table.string('videoUrl');
    table.integer('type_id').references('id').inTable('type').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('yoyo');
};
