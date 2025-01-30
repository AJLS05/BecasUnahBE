const loginAttempts = new Map();

module.exports.login = async (event) => {
    const { usuario, password } = JSON.parse(event.body);
    const maxIntentos = parseInt(process.env.MAX_INTENTOS) || 3;
    const tiempoBloqueo = parseInt(process.env.TIEMPO_BLOQUEO) || 60000;
    const ahora = Date.now();

    // Inicializar el registro del usuario si no existe
    if (!loginAttempts.has(usuario)) {
        loginAttempts.set(usuario, { intentos: 0, bloqueoHasta: null });
    }

    const user = loginAttempts.get(usuario);

    // Si el usuario está bloqueado, evitar intentos y mostrar el tiempo restante
    if (user.bloqueoHasta && ahora < user.bloqueoHasta) {
        return generarRespuesta(401, `Cuenta bloqueada. Espere ${Math.ceil((user.bloqueoHasta - ahora) / 1000)} segundos.`, 0, true);
    }

    // Resetear intentos si el tiempo de bloqueo ha expirado
    if (user.bloqueoHasta && ahora >= user.bloqueoHasta) {
        user.intentos = 0;
        user.bloqueoHasta = null;
    }

    // Verificar credenciales con una comparación simple
    const credencialesValidas = validarCredenciales(usuario, password);

    if (credencialesValidas) {
        user.intentos = 0;
        user.bloqueoHasta = null;
        return generarRespuesta(200, 'Inicio de sesión exitoso.', maxIntentos, false, true);
    }

    // Aumentar el número de intentos fallidos
    user.intentos++;

    // Si alcanza el límite de intentos, bloquear la cuenta por 1 minuto
    if (user.intentos >= maxIntentos) {
        user.bloqueoHasta = ahora + tiempoBloqueo;
        return generarRespuesta(401, 'Demasiados intentos fallidos. Espere 1 minuto para volver a intentarlo.', 0, true);
    }

    return generarRespuesta(401, 'Credenciales incorrectas.', maxIntentos - user.intentos, false);
};

// Función de validación simple
function validarCredenciales(usuario, password) {
    // Validar con un usuario y contraseña específicos (puedes personalizar esto)
    const usuarioValido = 'usuarioValido';
    const passwordValido = 'passwordValido';

    // Verificar si las credenciales son correctas
    return usuario === usuarioValido && password === passwordValido;
}

// Función auxiliar para generar respuestas JSON
function generarRespuesta(statusCode, mensaje, intentosRestantes, bloqueado = false, exito = false) {
    return {
        statusCode,
        body: JSON.stringify({
            mensaje,
            intentosRestantes,
            bloqueado,
            exito
        })
    };
}
