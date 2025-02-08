"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conexion_1 = __importDefault(require("../db/conexion"));
const Becario = conexion_1.default.define('becario', {
    product_id: {
        type: sequelize_1.DataTypes.INTEGER, primaryKey: true
    },
    name: {
        type: sequelize_1.DataTypes.STRING
    }
});
