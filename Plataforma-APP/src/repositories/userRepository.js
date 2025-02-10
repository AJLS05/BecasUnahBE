const sequelize = require('../config/conexion');
const { QueryTypes } = require('sequelize');

class PreguntasFrecuentesRepository {
    async getAllPreguntas() {
        try {
            if (!sequelize) throw new Error('Sequelize no está inicializado');

            // Consultar todas las preguntas frecuentes
            const result = await sequelize.query(
                `SELECT * FROM preguntas_frecuentes;`, 
                { type: QueryTypes.SELECT }
            );

            return result;
        } catch (error) {
            console.error('Error en getAllPreguntas:', error);
            throw error; // Propagar el error
        }
    }
}

module.exports = new PreguntasFrecuentesRepository();
