const pool = require("../config/database");

const getAllListagens = async () => {
    const result = await pool.query("SELECT * FROM listagem");
    return result.rows;
};

const getListagemById = async (id) => {
    const result = await pool.query("SELECT * FROM listagens WHERE id = $1", [id]);
    return result.rows[0];
};

const createListagem = async (listagem_id, titulo, subtitulo, texto,) => {
    const result = await pool.query(
        "INSERT INTO listagens (listagem_id, titulo, subtitulo, texto,) VALUES ($1) RETURNING *",
        [listagem_id, titulo, subtitulo, texto,]
    );
    return result.rows[0];
};

const updateListagem = async (id, listagem_id, titulo, subtitulo, texto,) => {
    const result = await pool.query(
        "UPDATE listagens SET listagem_id, titulo, subtitulo, texto, = $1 RETURNING *",
        [listagem_id, titulo, subtitulo, texto,, id]
    );
    return result.rows[0];
};

const deleteListagem = async (id) => {
    const result = await pool.query("DELETE FROM listagens WHERE id = $1 RETURNING *", [id]);

    if (result.rowCount === 0) {
        return { error: "Listagem não encontrada." };
    }

    return { message: "Listagem deletada com sucesso." };
};

module.exports = { getAllListagens, getListagemById, createListagem, updateListagem, deleteListagem };