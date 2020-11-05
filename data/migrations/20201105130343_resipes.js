exports.up = function (knex) {
  return knex.schema
    .createTable("resipes", (tbl) => {
      tbl.increments();
      tbl.text("resipe_name", 128).unique().notNullable();
    })
    .createTable("indgredients", (tbl) => {
      tbl.increments();
      tbl.text("ingredient_name", 128).unique().notNullable();
    })
    .createTable("link_R-I", (tbl) => {
      tbl.increments();
      tbl
        .integer("resipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("indgredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.integer("quantity").notNullable();
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("resipes")
    .dropTableIfExists("indgredients")
    .dropTableIfExists("link_R-I");
};
