// src/repositories/userRepository.js
const  sequelize  = require('../config/conexion');
const { QueryTypes } = require('sequelize');

class UserRepository {
    // Método para obtener el usuario por no_cuenta y contraseña
    async getUserByUsernameAndPassword(no_cuenta, contrasena) {
        try {
          if (!sequelize) throw new Error('Sequelize no está inicializado');
          
          const result = await sequelize.query(
            'SELECT * FROM becario WHERE no_cuenta = :no_cuenta',
            { 
              replacements: { no_cuenta },
              type: QueryTypes.SELECT 
            }
          );
      
          if (result.length === 0) return null;
          
          const user = result[0];
          if (contrasena !== user.contrasena) return null;
          
          return user;
        } catch (error) {
          console.error('Error en getUserByUsernameAndPassword:', error);
          throw error; // Propaga el error para manejarlo en el controlador
        }
      }
}

module.exports = new UserRepository();
