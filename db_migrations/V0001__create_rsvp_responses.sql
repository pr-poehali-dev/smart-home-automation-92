CREATE TABLE IF NOT EXISTS rsvp_responses (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  answer TEXT NOT NULL CHECK (answer IN ('yes', 'no')),
  created_at TIMESTAMP DEFAULT NOW()
);