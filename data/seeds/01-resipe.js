exports.seed = function (knex) {
  return knex("resipes").insert([
    { resipe_name: "Cake" },
    { resipe_name: "Bread" },
    { resipe_name: "Mushroom Stew" },
  ]);
};
