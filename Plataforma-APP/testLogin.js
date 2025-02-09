const fetch = require('node-fetch');

async function testLogin() {
    try {
        const response = await fetch('https://sl0vr31lxk.execute-api.us-east-1.amazonaws.com/dev/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                no_cuenta: '20223842099', // Reemplaza con un número de cuenta de la base de datos
                contrasena: 'A1b@cD2e3F'    // Reemplaza con una contraseña válida
            })
        });

        const data = await response.json();
        console.log('Login exitoso:', data);
    } catch (error) {
        console.error('Error en el login:', error);
    }
}

testLogin();
