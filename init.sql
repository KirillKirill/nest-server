CREATE TABLE public.users (
    id int PRIMARY KEY,
    username varchar(255) NOT NULL,
    email varchar (255) NOT NULL,
    password varchar (255) NOT NULL,
    role text NOT NULL
);