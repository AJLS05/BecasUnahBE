const sequelize = require('../config/conexion');
const { QueryTypes } = require('sequelize');

class UserRepository {
    async getUserByUsernameAndPassword(credencialNumerica, contrasena) {
        try {
            if (!sequelize) throw new Error('Sequelize no está inicializado');

            // Buscar en la tabla becario
            let result = await sequelize.query(
                `SELECT becario.*, persona.primer_ingreso 
                  FROM 
                      becario
                  LEFT JOIN 
                      persona ON becario.persona_id = persona.persona_id
                  WHERE 
                  becario.no_cuenta = :credencialNumerica;`,
                {
                    replacements: { credencialNumerica },
                    type: QueryTypes.SELECT
                }
            );

            // Si no hay coincidencias en becario, buscar en empleado
            if (result.length === 0) {
                result = await sequelize.query(
                    `SELECT empleado.*, persona.primer_ingreso 
                  FROM 
                      empleado
                  LEFT JOIN 
                      persona ON empleado.persona_id = persona.persona_id
                  WHERE 
                  empleado.no_empleado = :credencialNumerica;`,
                    {
                        replacements: { credencialNumerica },
                        type: QueryTypes.SELECT
                    }
                );
            }

            // Si sigue sin encontrar resultados, retornar null
            if (result.length === 0) return null;

            const user = result[0];

            // Verificar la contraseña
            if (contrasena !== user.contrasena) return null;

            return user;
        } catch (error) {
            console.error('Error en getUserByUsernameAndPassword:', error);
            throw error; // Propagar el error
        }
    }
}

module.exports = new UserRepository();
