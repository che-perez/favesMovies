CREATE TABLE IF NOT EXISTS favorites(
    id SERIAL PRIMARY KEY,
    original_titile VARCHAR(255) NOT NULL,
    overview TEXT NOT NULL,
    poster_path TEXT NOT NULL,
    backdrop_path TEXT NOT NULL
);