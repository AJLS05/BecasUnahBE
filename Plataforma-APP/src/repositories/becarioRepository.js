const Becario = require('../models/Becario');

class BecarioRepository {
  async getAllBecarios() {
    return await Becario.findAll();
  }
  
  // Aquí podrías agregar otros métodos para consultar, actualizar, eliminar, etc.
}

module.exports = new BecarioRepository();
