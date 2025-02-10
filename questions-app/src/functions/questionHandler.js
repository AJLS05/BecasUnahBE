// handlers/preguntasFrecuentesHandler.js
const { getPreguntasFrecuentesController } = require('../controllers/PreguntasFrecuentesController');

module.exports.getPreguntasFrecuentes = async (event) => {
    return await getPreguntasFrecuentesController(event);
};