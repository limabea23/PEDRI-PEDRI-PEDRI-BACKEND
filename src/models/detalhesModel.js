const pool = require("../config/database");

const getAllDetalhes = async () => {
    const result = await pool.query("SELECT * FROM detalhes");
    return result.rows;
};

const getDetalheById = async (id) => {
    const result = await pool.query("SELECT * FROM detalhes WHERE id = $1", [id]);
    return result.rows[0];
};

const createDetalhe = async (titulo, listagem_id, photo) => {
    const result = await pool.query(
        "INSERT INTO detalhes (titulo, listagem_id, photo) VALUES ($1, $2, $3) RETURNING *",
        [titulo, listagem_id, photo]
    );
    return result.rows[0];
};

const updateDetalhe = async (id, listagem_id, titulo, subtitulo, texto, photo) => {
    const result = await pool.query(
        "UPDATE detalhes SET listagem_id = $1, titulo = $2, subtitulo = $3, texto = $4, photo = $5 WHERE id = $6 RETURNING *",
        [listagem_id, titulo, subtitulo, texto, photo, id]
    );
    return result.rows[0];
};

const deleteDetalhe = async (id) => {
    const result = await pool.query("DELETE FROM detalhes WHERE id = $1 RETURNING *", [id]);
    return result.rowCount ? { message: "Detalhe deletado com sucesso." } : { error: "Detalhe não encontrado." };
};

module.exports = { getAllDetalhes, getDetalheById, createDetalhe, updateDetalhe, deleteDetalhe };