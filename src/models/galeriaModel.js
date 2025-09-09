const pool = require("../config/database");

const getAllGalerias = async () => {
    const result = await pool.query("SELECT * FROM galeria");
    return result.rows;
};

const getGaleriaById = async (id) => {
    const result = await pool.query("SELECT * FROM galeria WHERE id = $1", [id]);
    return result.rows[0];
};

const createGaleria = async (listagem_id, titulo, anexo) => {
    const result = await pool.query(
        "INSERT INTO galeria (listagem_id, titulo, anexo) VALUES ($1, $2, $3) RETURNING *",
        [listagem_id, titulo, anexo]
    );
    return result.rows[0];
};

const updateGaleria = async (id, listagem_id, titulo, anexo) => {
    const result = await pool.query(
        "UPDATE galeria SET listagem_id = $1, titulo = $2, anexo = $3 WHERE id = $4 RETURNING *",
        [listagem_id, titulo, anexo, id]
    );
    return result.rows[0];
};

const deleteGaleria = async (id) => {
    const result = await pool.query("DELETE FROM galeria WHERE id = $1 RETURNING *", [id]);
    return result.rowCount ? { message: "Galeria deletada com sucesso." } : { error: "Galeria não encontrada." };
};

module.exports = { getAllGalerias, getGaleriaById, createGaleria, updateGaleria, deleteGaleria };