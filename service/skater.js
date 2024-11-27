const Skater = require("../models/skaters");

const findAllSkaters = async () => {
    try {
        const skaters = await Skater.findAll();
        if (skaters == 0) {
            return {
                message: "No hay Skaters registrados",
                status: 204,
                data: []
            }
        }
        return {
            message: "Los Skaters registrados son:",
            status: 200,
            data: skaters
        }
    } catch (error) {
        console.log(error.message);
        return {
            message: "Error en el servidor",
            status: 500,
            data: []
        }
    }
}

const insertSkater = async ( email, nombre, password, anosExperiencia, especialidad, foto, estado) => {
    try {
        const skater = await Skater.create({ email, nombre, password, anosExperiencia, especialidad, foto, estado });
        const skaters = await Skater.findAll();
        return {
            msg: `El skater con nombre ${nombre} se insertó correctamente`,
            status: 201,
            datos: []
        }

    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const updateSkater = async (id, email, nombre, password, anosExperiencia, especialidad, foto, estado) => {
    try {
        const skater = await Skater.update({ email, nombre, password, anosExperiencia, especialidad, foto, estado },
            {
                where: {
                    id
                }
            });
        const skaters = await Skater.findAll();
        return {
            msg: `El skater con nombre ${id} se actualizó correctamente`,
            status: 201,
            datos: skaters.map(skater => skater.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

const deleteSkater = async (id) => {
    try {
        const skater = await Skater.destroy({
            where: {
                id
            }
        });
        const skaters = await Skater.findAll();
        return {
            msg: `El skater con id ${id} se eliminó correctamente`,
            status: 201,
            datos: skaters.map(skater => skater.toJSON())
        }
    } catch (error) {
        console.log(error.message);
        return {
            msg: 'Error en el servidor',
            status: 500,
            datos: []
        }
    }
}

module.exports = {
    findAllSkaters,
    insertSkater,
    updateSkater,
    deleteSkater
}