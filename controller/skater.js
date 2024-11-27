const { findAllSkaters, insertSkater, updateSkater, deleteSkater } = require("../service/skater");

const findAllSkatersController = async (req, res) => {
    const respuesta = await findAllSkaters();
    res.json(respuesta);
}

const createSkaterController = async (req, res) => {
    const { email, nombre, password, anos_experiencia, especialidad, foto, estado } = req.body;
    const respuesta = await insertSkater(email, nombre, password, anos_experiencia, especialidad, foto, estado);
    res.json(respuesta);
}

const updateSkaterController = async (req, res) => {
    const { id, email, nombre, password, anos_experiencia, especialidad, foto, estado } = req.body; 
    const respuesta = await updateSkater(id, email, nombre, password, anos_experiencia, especialidad, foto, estado);
    res.json(respuesta);
}

const deleteSkaterController = async (req, res) => {
    const id = req.query.id;
    const respuesta = await deleteSkater(id);
    res.json(respuesta);
}

module.exports = {
    findAllSkatersController,
    createSkaterController,
    updateSkaterController,
    deleteSkaterController
}