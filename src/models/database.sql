CREATE DATABASE malaysian_profiles;

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  email VARCHAR(254) NOT NULL,
  birthdate date NOT NULL,
  gender VARCHAR(10) NOT NULL,
  is_deletable BOOLEAN NOT NULL DEFAULT FALSE,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  profile_id integer NOT NULL REFERENCES profiles(id) DEFERRABLE INITIALLY DEFERRED,
  address1 VARCHAR(100) NOT NULL,
  address2 VARCHAR(100),
  city VARCHAR(50) NOT NULL,
  state VARCHAR(50) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  country VARCHAR(50) NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone
);