// services/preguntasFrecuentesService.js
const { getPreguntasFrecuentes } = require('../repositories/questionRepository');

const obtenerPreguntasFrecuentes = async () => {
    try {
        const preguntas = await getPreguntasFrecuentes();
        return preguntas;
    } catch (error) {
        console.error("Error en el servicio:", error);
        throw new Error("Error al obtener preguntas frecuentes");
    }
};

module.exports = { obtenerPreguntasFrecuentes };