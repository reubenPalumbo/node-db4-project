const colName = "resipe_name";

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("resipes").insert([
    { colName: "Cake" },
    { colName: "Bread" },
    { colName: "Mushroom Stew" },
  ]);
};
