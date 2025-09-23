const pool = require("../config/database");

const getAllNoticias = async () => {
    const result = await pool.query("SELECT * FROM noticias");
    return result.rows;
};

const getNoticiaById = async (id) => {
    const result = await pool.query("SELECT * FROM noticias WHERE id = $1", [id]);
    return result.rows[0];
};

const createNoticia = async (listagem_id, titulo, subtitulo, texto, photo, data_publicacao) => {
    const result = await pool.query(
        "INSERT INTO noticias (listagem_id, titulo, subtitulo, texto, photo, data_publicacao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [listagem_id, titulo, subtitulo, texto, photo, data_publicacao]
    );
    return result.rows[0];
};

const updateNoticia = async (id, listagem_id, titulo, subtitulo, texto, photo, data_publicacao) => {
    const result = await pool.query(
        "UPDATE noticias SET listagem_id = $1, titulo = $2, subtitulo = $3, texto = $4, photo = $5, data_publicacao = $6 WHERE id = $7 RETURNING *",
        [listagem_id, titulo, subtitulo, texto, photo, data_publicacao, id]
    );
    return result.rows[0];
};

const deleteNoticia = async (id) => {
    const result = await pool.query("DELETE FROM noticias WHERE id = $1 RETURNING *", [id]);
    return result.rowCount ? { message: "Notícia deletada com sucesso." } : { error: "Notícia não encontrada." };
};

module.exports = { getAllNoticias, getNoticiaById, createNoticia, updateNoticia, deleteNoticia };