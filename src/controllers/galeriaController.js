const galeriaModel = require("../models/galeriaModel");

const getAllGalerias = async (req, res) => {
    try {
        const galerias = await galeriaModel.getAllGalerias();
        res.json(galerias);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar galerias." });
    }
};

const getGaleria = async (req, res) => {
    try {
        const galeria = await galeriaModel.getGaleriaById(req.params.id);
        if (!galeria) {
            return res.status(404).json({ message: "galeria não encontrada." });
        }
        res.json(galeria);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar galeria." });
    }
};

const createGaleria = async (req, res) => {
    try {
        const { listagem_id, titulo, anexo } = req.body;
        const newGaleria = await galeriaModel.createGaleria(listagem_id, titulo, anexo);
        res.status(201).json(newGaleria);
    } catch (error) {
        res.status(500).json({ message: "erro ao criar galeria." });
    }
};

const updateGaleria = async (req, res) => {
    try {
        const { listagem_id, titulo, anexo } = req.body;
        const updatedGaleria = await galeriaModel.updateGaleria(req.params.id, listagem_id, titulo, anexo);
        if (!updatedGaleria) {
            return res.status(404).json({ message: "galeria não encontrada." });
        }
        res.json(updatedGaleria);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar galeria." });
    }
};

const deleteGaleria = async (req, res) => {
    try {
        const message = await galeriaModel.deleteGaleria(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar galeria." });
    }
};

module.exports = { getAllGalerias, getGaleria, createGaleria, updateGaleria, deleteGaleria };