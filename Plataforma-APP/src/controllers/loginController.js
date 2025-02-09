import { validateUser } from '../services/loginService';

class LoginController {
    async login(req, res) {
        const { no_cuenta, contrasena } = req.body;

        try {
            const user = await validateUser(no_cuenta, contrasena);
            return res.status(200).json(user);
        } catch (error) {
            return res.status(401).json({ message: error.message });
        }
    }
}

export default new LoginController();
