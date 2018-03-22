ALTER TABLE favorites RENAME original_title TO title;
ALTER TABLE favorites ADD COLUMN release_date INTEGER NOT NULL;