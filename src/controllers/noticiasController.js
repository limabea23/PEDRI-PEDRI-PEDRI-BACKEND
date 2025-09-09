const noticiasModel = require("../models/noticiasModel");

const getAllNoticias = async (req, res) => {
    try {
        const noticias = await noticiasModel.getAllNoticias();
        res.json(noticias);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar notícias." });
    }
};

const getNoticia = async (req, res) => {
    try {
        const noticia = await noticiasModel.getNoticiaById(req.params.id);
        if (!noticia) {
            return res.status(404).json({ message: "notícia não encontrada." });
        }
        res.json(noticia);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar notícia." });
    }
};

const createNoticia = async (req, res) => {
    try {
        const { listagem_id, titulo, subtitulo, texto, anexo, data_publicacao } = req.body;
        const newNoticia = await noticiasModel.createNoticia(listagem_id, titulo, subtitulo, texto, anexo, data_publicacao);
        res.status(201).json(newNoticia);
    } catch (error) {
        res.status(500).json({ message: "erro ao criar notícia." });
    }
};

const updateNoticia = async (req, res) => {
    try {
        const { listagem_id, titulo, subtitulo, texto, anexo, data_publicacao } = req.body;
        const updatedNoticia = await noticiasModel.updateNoticia(req.params.id, listagem_id, titulo, subtitulo, texto, anexo, data_publicacao);
        if (!updatedNoticia) {
            return res.status(404).json({ message: "notícia não encontrada." });
        }
        res.json(updatedNoticia);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar notícia." });
    }
};

const deleteNoticia = async (req, res) => {
    try {
        const message = await noticiasModel.deleteNoticia(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar notícia." });
    }
};

module.exports = { getAllNoticias, getNoticia, createNoticia, updateNoticia, deleteNoticia };