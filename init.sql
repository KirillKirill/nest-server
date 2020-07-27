CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL
);

INSERT INTO users( username, email, password, role) VALUES(
    'Admin',
    'admin@gmail.com',
    'admin123',
    'admin'
);