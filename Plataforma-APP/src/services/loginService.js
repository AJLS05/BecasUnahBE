// src/services/loginService.js
const userRepository = require('../repositories/userRepository');

class UserService {
    async validateUser(no_cuenta, contrasena) {
        const user = await userRepository.getUserByUsernameAndPassword(no_cuenta,contrasena)
        if (!user) {
            throw new Error('Usuario no encontrado');
        }

        return { user}; // Devuelves los datos que necesitas
    }
}

module.exports = new UserService();
