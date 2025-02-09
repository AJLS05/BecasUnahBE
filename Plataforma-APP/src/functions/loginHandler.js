// src/functions/loginHandler.js
const userService = require('../services/loginService');

module.exports.login = async (event) => {
    const { no_cuenta, contrasena } = JSON.parse(event.body);

    try {
        const user = await userService.validateUser(no_cuenta, contrasena);
        return {
            statusCode: 200,
            body: JSON.stringify(user), // Devuelves el usuario autenticado
        };
    } catch (error) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: error.message }), // En caso de error
        };
    }
};
