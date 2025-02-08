"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reporte = void 0;
const sequelize_1 = require("sequelize");
class reporte extends sequelize_1.Model {
    static initModel(sequelize) {
        return reporte.init({
            reporte_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                primaryKey: true
            },
            becario_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                references: {
                    model: 'becario',
                    key: 'becario_id'
                }
            },
            fecha_reporte: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: true
            },
            total_horas: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: true
            },
            observaciones: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'reporte',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "reporte_id_pk",
                    unique: true,
                    fields: [
                        { name: "reporte_id" },
                    ]
                },
            ]
        });
    }
}
exports.reporte = reporte;
