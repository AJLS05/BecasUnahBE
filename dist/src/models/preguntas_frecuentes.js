"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preguntas_frecuentes = void 0;
const sequelize_1 = require("sequelize");
class preguntas_frecuentes extends sequelize_1.Model {
    static initModel(sequelize) {
        return preguntas_frecuentes.init({
            pregunta_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            pregunta: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            },
            respuesta: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'preguntas_frecuentes',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "pregunta_id_pk",
                    unique: true,
                    fields: [
                        { name: "pregunta_id" },
                    ]
                },
            ]
        });
    }
}
exports.preguntas_frecuentes = preguntas_frecuentes;
