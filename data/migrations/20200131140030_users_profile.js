exports.up = function(knex) {
  return knex.schema.createTable("users_profile", users => {
    users.increments("user_id");
    users.varchar("display_name", 128);
    users.varchar("href");
    users.varchar("id");
    users.varchar("type");
    users.varchar("uri");
    users.varchar("spt_val");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users_profile");
};
