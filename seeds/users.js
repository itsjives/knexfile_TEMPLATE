
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'test', passwords:'1', email:'fake@snail' },
        {username:'rick', passwords:'1', email: 'snake@bail'},
        {username:'morty', passwords:'1' ,email: 'shake@bake'}
      ]);
    });
};
