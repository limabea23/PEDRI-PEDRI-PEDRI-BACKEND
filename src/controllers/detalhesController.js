const detalhesModel = require("../models/detalhesModel");

const getAllDetalhes = async (req, res) => {
    try {
        const detalhes = await detalhesModel.getAllDetalhes();
        res.json(detalhes);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar detalhes." });
    }
};

const getDetalhe = async (req, res) => {
    try {
        const detalhe = await detalhesModel.getDetalheById(req.params.id);
        if (!detalhe) {
            return res.status(404).json({ message: "detalhe não encontrado." });
        }
        res.json(detalhe);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar detalhe." });
    }
};

const createDetalhe = async (req, res) => {
    try {
        const { listagem_id, titulo, subtitulo, texto } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newDetalhe = await detalhesModel.createDetalhe(listagem_id, titulo, subtitulo, texto, photo);
        res.status(201).json(newDetalhe);
    } catch (error) {
        res.status(500).json({ message: "erro ao criar detalhe." });
    }
};

const updateDetalhe = async (req, res) => {
    try {
        const { listagem_id, titulo, subtitulo, texto } = req.body;
        const photo = req.file ? req.file.filename : null;
        const updatedDetalhe = await detalhesModel.updateDetalhe(req.params.id, listagem_id, titulo, subtitulo, texto, photo);
        if (!updatedDetalhe) {
            return res.status(404).json({ message: "detalhe não encontrado." });
        }
        res.json(updatedDetalhe);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar detalhe." });
    }
};

const deleteDetalhe = async (req, res) => {
    try {
        const message = await detalhesModel.deleteDetalhe(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar detalhe." });
    }
};

module.exports = { getAllDetalhes, getDetalhe, createDetalhe, updateDetalhe, deleteDetalhe };