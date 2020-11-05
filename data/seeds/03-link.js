exports.seed = function (knex) {
  return knex("link_R-I").insert([
    { resipes_id: 1, ingredient_id: 1, quantity: 3 },
    { resipes_id: 1, ingredient_id: 2, quantity: 2 },
    { resipes_id: 1, ingredient_id: 3, quantity: 1 },
    { resipes_id: 1, ingredient_id: 4, quantity: 3 },

    { resipes_id: 2, ingredient_id: 4, quantity: 3 },

    { resipes_id: 3, ingredient_id: 5, quantity: 1 },
    { resipes_id: 3, ingredient_id: 6, quantity: 1 },
    { resipes_id: 3, ingredient_id: 7, quantity: 1 },
  ]);
};
