exports.seed = function (knex) {
  return knex("indgredients").insert([
    { ingredient_name: "Milk Bucket" },
    { ingredient_name: "Sugar" },
    { ingredient_name: "Egg" },
    { ingredient_name: "Wheat" },
    { ingredient_name: "Red Mushroom" },
    { ingredient_name: "Brown Mushroom" },
    { ingredient_name: "Bowl" },
  ]);
};
