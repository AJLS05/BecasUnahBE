// const express = require('express');
// const userService = require('./src/services/loginService');
// const app = express();

// // Middleware para procesar JSON
// app.use(express.json());

// // Endpoint de Login
// app.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await userService.validateUser(username, password);
//         // Devuelve el usuario en formato JSON
//         res.json({ user });
//     } catch (error) {
//         // Devuelve un error si la autenticación falla
//         res.status(401).json({ error: error.message });
//     }
// });
