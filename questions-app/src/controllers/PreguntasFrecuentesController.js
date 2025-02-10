// controllers/preguntasFrecuentesController.js
const { obtenerPreguntasFrecuentes } = require('../services/questionService');

const getPreguntasFrecuentesController = async (event) => {
    try {
        const preguntas = await obtenerPreguntasFrecuentes();
        return {
            statusCode: 200,
            body: JSON.stringify(preguntas),
        };
    } catch (error) {
        console.error("Error en el controller:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error al obtener preguntas frecuentes" }),
        };
    }
};

module.exports = { getPreguntasFrecuentesController };