exports.seed = function (knex) {
  return knex("steps")
    .del()
    .then(function () {
      return knex("steps").insert([
        { resipes_id: 1, ingredient_id: 1, slot: 1 },
        { resipes_id: 1, ingredient_id: 1, slot: 2 },
        { resipes_id: 1, ingredient_id: 1, slot: 3 },
        { resipes_id: 1, ingredient_id: 2, slot: 4 },
        { resipes_id: 1, ingredient_id: 2, slot: 6 },
        { resipes_id: 1, ingredient_id: 3, slot: 5 },
        { resipes_id: 1, ingredient_id: 4, slot: 7 },
        { resipes_id: 1, ingredient_id: 4, slot: 8 },
        { resipes_id: 1, ingredient_id: 4, slot: 9 },

        { resipes_id: 2, ingredient_id: 4, slot: 1 },
        { resipes_id: 2, ingredient_id: 4, slot: 2 },
        { resipes_id: 2, ingredient_id: 4, slot: 3 },

        { resipes_id: 3, ingredient_id: 5, slot: 1 },
        { resipes_id: 3, ingredient_id: 6, slot: 2 },
        { resipes_id: 3, ingredient_id: 7, slot: 3 },
      ]);
    });
};
