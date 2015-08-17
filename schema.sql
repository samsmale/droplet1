DROP TABLE IF EXISTS slices;
DROP TABLE IF EXISTS loafs;

CREATE TABLE loafs (
  id INTEGER PRIMARY KEY autoincrement,
  title TEXT,
  content INTEGER,
  votes INTEGER,
  user TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
PRAGMA foreign_keys = ON;
CREATE TABLE slices (
  id INTEGER PRIMARY KEY autoincrement,
  content TEXT,
  user TEXT,
  loaf_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(loaf_id) REFERENCES loafs(loaf_id)
);
