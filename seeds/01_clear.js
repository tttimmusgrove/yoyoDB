exports.seed = function(knex, Promise) {
  return knex.raw('TRUNCATE type, yoyo RESTART IDENTITY CASCADE;');
};
