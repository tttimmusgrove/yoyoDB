
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('type').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('type').insert({type: 'best'}),
        knex('type').insert({type: 'hard'}),
        knex('type').insert({type: 'DEATH!'})
      ]);
    });
};
