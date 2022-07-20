CREATE DATABASE profiles_api;

CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255),
  email VARCHAR(254) NOT NULL,
  birthdate date NOT NULL,
  gender VARCHAR(10) NOT NULL,
  nationality VARCHAR(255),
  is_deletable BOOLEAN NOT NULL DEFAULT FALSE,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone
);

CREATE TABLE addresses (
  id SERIAL PRIMARY KEY,
  profile_id integer NOT NULL REFERENCES profiles(id) DEFERRABLE INITIALLY DEFERRED,
  address1 VARCHAR(255) NOT NULL,
  address2 VARCHAR(255),
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  zip VARCHAR(20) NOT NULL,
  country VARCHAR(100) NOT NULL,
  created_at timestamp with time zone default CURRENT_TIMESTAMP NOT NULL,
  updated_at timestamp with time zone
);