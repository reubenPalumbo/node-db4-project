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
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("indgredients")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      tbl.integer("quantity").notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments();
      tbl
        .integer("resipes_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resipes")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
      tbl.integer("slot").unsigned().notNullable();
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("indgredients")
        .onUpdate("RESTRICT")
        .onDelete("RESTRICT");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("link_R-I")
    .dropTableIfExists("indgredients")
    .dropTableIfExists("resipes");
};
