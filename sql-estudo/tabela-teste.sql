SHOW DATABASES;
CREATE DATABASE EstudoNode;
USE EstudoNode;

SHOW TABLES;
CREATE TABLE usuarios (
	nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

DESCRIBE usuarios;

INSERT INTO usuarios(nome,email,idade) VALUES(
	"Math",
    "email@teste.com",
    20
);

INSERT INTO usuarios(nome,email,idade) VALUES(
	"João",
    "email1@teste.com",
    20
);

INSERT INTO usuarios(nome,email,idade) VALUES(
	"Cleber",
    "email2@teste.com",
    25
);

INSERT INTO usuarios(nome,email,idade) VALUES(
	"Maria",
    "maria@teste.com",
    20
);

SHOW TABLES;
SELECT * FROM usuarios;
SELECT * FROM usuarios WHERE idade = 20;
