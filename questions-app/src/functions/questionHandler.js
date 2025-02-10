const { getPreguntasFrecuentesController } = require('../controllers/PreguntasFrecuentesController');

const headersACL = {
    'Access-Control-Allow-Origin': '*', // Permitir todas las solicitudes
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
};

module.exports.getPreguntasFrecuentes = async (event) => {
    try {
        const preguntas = await getPreguntasFrecuentesController(event);
        return {
            statusCode: 200,
            headers: headersACL,
            body: JSON.stringify(preguntas),
        };
    } catch (error) {
        return {
            statusCode: 401,
            headers: headersACL,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
