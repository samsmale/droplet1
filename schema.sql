DROP TABLE IF EXISTS signups;


CREATE TABLE signups (
  employee_id INTEGER PRIMARY KEY autoincrement,
  email TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);