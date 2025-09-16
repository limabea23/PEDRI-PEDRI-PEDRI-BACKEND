const listagemModel = require("../models/listagemModel");

const getAllListagens = async (req, res) => {
    try {
        const listagens = await listagemModel.getAllListagens();
        res.json(listagens);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar listagens." });
    }
};

const getListagem = async (req, res) => {
    try {
        const listagem = await listagemModel.getListagemById(req.params.id);
        if (!listagem) {
            return res.status(404).json({ message: "listagem não encontrada." });
        }
        res.json(listagem);
    } catch (error) {
        res.status(500).json({ message: "erro ao buscar listagem." });
    }
};

const createListagem = async (req, res) => {
    try {
        const photo = req.file ? req.file.filename : null;
        const newListagem = await listagemModel.createListagem(photo);
        res.status(201).json(newListagem);
    } catch (error) {
        if (error.code === "23505") {
            return res.status(400).json({ message: "listagem já cadastrada." });
        }
        res.status(500).json({ message: "erro ao criar listagem." });
    }
};

const updateListagem = async (req, res) => {
    try {
        const { photo } = req.body;
        const updatedListagem = await listagemModel.updateListagem(req.params.id, photo);
        if (!updatedListagem) {
            return res.status(404).json({ message: "listagem não encontrada." });
        }
        res.json(updatedListagem);
    } catch (error) {
        res.status(500).json({ message: "erro ao atualizar listagem." });
    }
};

const deleteListagem = async (req, res) => {
    try {
        const message = await listagemModel.deleteListagem(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "erro ao deletar listagem." });
    }
};

module.exports = { getAllListagens, getListagem, createListagem, updateListagem, deleteListagem };