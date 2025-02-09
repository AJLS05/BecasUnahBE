// src/repositories/userRepository.js
const  sequelize  = require('../config/conexion');
const { QueryTypes } = require('sequelize');

class UserRepository {
    // Método para obtener el usuario por no_cuenta y contraseña
    async getUserByUsernameAndPassword(no_cuenta, contrasena) {
        if (!sequelize) {
            throw new Error('Sequelize no está inicializado');
        }

        console.log('no_cuenta:', no_cuenta); // Verifica el valor de no_cuenta

        const result = await sequelize.query(
            'SELECT * FROM becario WHERE no_cuenta = :no_cuenta',
            { 
                replacements: { no_cuenta: no_cuenta },
                type: QueryTypes.SELECT 
            }
        );

        if (result.length === 0) {
            return null; // No se encontró el usuario
        }

        const user = result[0];

        
        if (contrasena !== user.contrasena) {
            return null; // Contraseña incorrecta
        }

        return user; // Usuario autenticado
    }
}

module.exports = new UserRepository();
