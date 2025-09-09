const pool = require("../config/database");

const getAllListagens = async () => {
    const result = await pool.query("SELECT * FROM listagem ORDER BY id ASC");
    return result.rows;
};

const getListagemById = async (id) => {
    const result = await pool.query("SELECT * FROM listagem WHERE id = $1", [id]);
    return result.rows[0];
};

const createListagem = async (conteudo) => {
    const result = await pool.query(
        "INSERT INTO listagem (conteudo) VALUES ($1) RETURNING *",
        [conteudo]
    );
    return result.rows[0];
};

const updateListagem = async (id, conteudo) => {
    const result = await pool.query(
        "UPDATE listagem SET conteudo = $1 WHERE id = $2 RETURNING *",
        [conteudo, id]
    );
    return result.rows[0];
};

const deleteListagem = async (id) => {
    const result = await pool.query("DELETE FROM listagem WHERE id = $1 RETURNING *", [id]);
    return result.rowCount ? { message: "Listagem deletada com sucesso." } : { error: "Listagem não encontrada." };
};

module.exports = { getAllListagens, getListagemById, createListagem, updateListagem, deleteListagem };