exports.up = function(knex) {
  return knex.schema.createTable("saved_tracks", song => {
    song.increments("saved_tracks_id");
    song
      .integer("userId")
      .unsigned()
      .notNullable()
      .references("user_id")
      .inTable("users_profile")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    song.varchar("items_added_at");
    song.varchar("track_href");
    song.varchar("track_id");
    song.varchar("track_name");
    song.integer("track_popularity");
    song.varchar("track_preview_url");
    song.integer("track_number");
    song.varchar("track_uri");
    song.varchar("albums_images");
    song.varchar("artists_names");
    song.varchar("artists_id");
    song.integer("limit");
    song.integer("total");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("saved_tracks");
};
