exports.up = function (knex) {
  return knex.schema.createTable("projects", (tbl) => {
    tbl.increments("project_id");
    tbl.string("project_name").notNullable().unique();
    tbl.string("project_description");
    tbl.boolean("project_completed", false);
  });
};

exports.down = function (knex) {};
