"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const becario_1 = __importDefault(require("../routes/becario"));
const user_1 = __importDefault(require("../routes/user"));
const becario_2 = require("../models/becario");
class Server {
    constructor() {
        this.app = (0, express_1.default)();
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
        this.app.use('/api/becario', becario_1.default);
        this.app.use('/api/userss', user_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield becario_2.becario.sync(); // ✅ Usamos `models` importado desde `conexion.ts`
                console.log("📌 Base de datos sincronizada correctamente.");
            }
            catch (error) {
                console.log("❌ Error al sincronizar la base de datos:", error);
            }
        });
    }
}
exports.default = Server;
