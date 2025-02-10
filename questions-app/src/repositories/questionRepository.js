// repositories/questionRepository.js
const sequelize = require('../config/conexion');
const { QueryTypes } = require('sequelize');

const getPreguntasFrecuentes = async () => {
    try {
        const result = await sequelize.query("SELECT * FROM preguntas_frecuentes", {
            type: QueryTypes.SELECT
        });
        return result;
    } catch (error) {
        console.error("Error en el repositorio:", error);
        throw new Error("Error obteniendo preguntas frecuentes");
    }
};

module.exports = { getPreguntasFrecuentes };