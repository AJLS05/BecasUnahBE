import express, { Application } from 'express';
import routesBecario from '../routes/becario';
import routesUser from '../routes/user';
import sequelize from "../db/conexion";
import { becario } from '../models/becario'

class Server {
    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || "1433"; // Asegurar un puerto
        this.listen();
        this.middlewares();
        this.routes();
        this.dbConnect(); // Intentar conectar la BD
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('📌 Aplicación corriendo en el puerto: ' + this.port);
        });
    }

    routes() {
        this.app.use('/api/becario', routesBecario);
        this.app.use('/api/userss', routesUser);
    }

    middlewares() {
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            await becario.sync(); // ✅ Usamos `models` importado desde `conexion.ts`
            console.log("📌 Base de datos sincronizada correctamente.");
        } catch (error) {
            console.log("❌ Error al sincronizar la base de datos:", error);
        }
    }
}

export default Server;
