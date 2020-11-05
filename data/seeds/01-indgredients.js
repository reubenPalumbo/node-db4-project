const colName = "ingredient_name";

exports.seed = function (knex) {
  return knex("indgredients").insert([
    { colName: "rowValue1" },
    { colName: "rowValue2" },
    { colName: "rowValue3" },
  ]);
};
