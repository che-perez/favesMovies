ALTER TABLE favorites RENAME original_titile TO original_title;
ALTER TABLE favorites ADD COLUMN movie_id INTEGER NOT NULL;