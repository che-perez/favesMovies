const db = require('../db/config');

const Favorites = {};

Favorites.findAll = () => {
    return db.query(
        `SELECT * FROM favorites`
    );
};

Favorites.findById = (id) => {
    return db.oneOrNone(
        `SELECT * FROM favorites
        WHERE id = $1`,
        [id]
    );
};

Favorites.create = (movie) => {
    return db.one(
        `INSERT INTO favorites (
            original_title, overview, poster_path, backdrop_path, movie_id)
            VALUES ( $1, $2, $3, $4, $5)
            RETURNING *`,
            [movie.original_title, movie.overview, movie.poster_path, movie.backdrop_path, movie.movie_id]
        );
};

Favorites.destroy = id => {
    return db.none(
        `DELETE FROM favorites
        WHERE id = $1`, [id]
    );
};

module.exports = Favorites;