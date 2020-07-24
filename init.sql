CREATE TABLE persons (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    role text NOT NULL
);

INSERT INTO persons( username, email, password, role) VALUES(
    'Admin',
    'admin@dashbouquet.com',
    'admin123',
    'admin'
);