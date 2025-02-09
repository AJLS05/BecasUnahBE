
const failedAttempts = {};

class AuthAttemptService {
    static MAX_ATTEMPTS = 3;
    static BLOCK_DURATION = 60000; // 1 minuto en milisegundos

    // Verifica si el usuario está bloqueado
    isBlocked(no_cuenta) {
        return failedAttempts[no_cuenta] && failedAttempts[no_cuenta].blockedUntil > Date.now();
    }

    // Registra un intento fallido y retorna los intentos restantes
    registerFailedAttempt(no_cuenta) {
        if (!failedAttempts[no_cuenta]) {
            failedAttempts[no_cuenta] = { attempts: 0, blockedUntil: null };
        }

        failedAttempts[no_cuenta].attempts++;

        // Bloquear si alcanza el máximo de intentos
        if (failedAttempts[no_cuenta].attempts >= AuthAttemptService.MAX_ATTEMPTS) {
            failedAttempts[no_cuenta].blockedUntil = Date.now() + AuthAttemptService.BLOCK_DURATION;
            return { blocked: true, remainingAttempts: 0 };
        }

        return { blocked: false, remainingAttempts: AuthAttemptService.MAX_ATTEMPTS - failedAttempts[no_cuenta].attempts };
    }

    // Limpia los intentos fallidos cuando el usuario se autentica correctamente
    clearAttempts(no_cuenta) {
        delete failedAttempts[no_cuenta];
    }
}

module.exports = new AuthAttemptService();
