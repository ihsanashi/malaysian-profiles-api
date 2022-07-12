CREATE DATABASE malaysian_profiles;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(254) NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone
);

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(256) NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
);