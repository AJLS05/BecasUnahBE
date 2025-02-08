const becarioRepository = require('../repositories/becarioRepository');

class BecarioService {
  async obtenerTodosLosBecarios() {
    const becarios = await becarioRepository.getAllBecarios();
    // Si es necesario, realiza aquí alguna transformación o validación
    return becarios;
  }
}

module.exports = new BecarioService();
