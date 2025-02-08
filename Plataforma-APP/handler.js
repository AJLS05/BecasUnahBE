const becarioService = require('./src/services/becarioService');

module.exports.obtenerBecarios = async (event) => {
  try {
    const becarios = await becarioService.obtenerTodosLosBecarios();
    return {
      statusCode: 200,
      body: JSON.stringify(becarios)
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Error al obtener los becarios',
        details: error.message
      })
    };
  }
};
