import dotenv, { config } from 'dotenv';
import Server from "./Server/server";

//Configuramos el dotenv 
    dotenv.config();

const server = new Server
