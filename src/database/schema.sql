CREATE DATABASE pedri;

\c pedri;

CREATE TABLE listagem (
    id SERIAL PRIMARY KEY,
    photo TEXT
);

CREATE TABLE detalhes (
    id SERIAL PRIMARY KEY,
    listagem_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    subtitulo TEXT,
    texto TEXT, 
    anexo TEXT, 
    CONSTRAINT fk_listagem_detalhes FOREIGN KEY (listagem_id) REFERENCES listagem(id) 
);

CREATE TABLE galeria (
    id SERIAL PRIMARY KEY,
    listagem_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    anexo TEXT, 
    CONSTRAINT fk_listagem_galeria FOREIGN KEY (listagem_id) REFERENCES listagem(id) 
);

CREATE TABLE noticias (
    id SERIAL PRIMARY KEY,
    listagem_id INT NOT NULL,
    titulo VARCHAR(100) NOT NULL,
    subtitulo TEXT,
    texto TEXT, 
    anexo TEXT, 
    data_publicacao DATE,
    CONSTRAINT fk_listagem_noticias FOREIGN KEY (listagem_id) REFERENCES listagem(id) 
);