exports.up = function(knex) {
  return knex.schema.createTable("audio_features", audio => {
    audio.increments("audio_id");
    audio
      .integer("savedTrackId")
      .unsigned()
      .notNullable()
      .references("saved_tracks_id")
      .inTable("saved_tracks")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");
    audio.float("acousticness");
    audio.float("danceability");
    audio.float("engery");
    audio.integer("instrumentalness");
    audio.integer("key");
    audio.float("liveness");
    audio.float("loudness");
    audio.integer("mode");
    audio.float("speechiness");
    audio.float("tempo");
    audio.integer("time_signature");
    audio.float("valence");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("audio_features");
};
