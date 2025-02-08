"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.empleado = void 0;
const sequelize_1 = require("sequelize");
class empleado extends sequelize_1.Model {
    static initModel(sequelize) {
        return empleado.init({
            empleado_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                primaryKey: true
            },
            persona_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'persona',
                    key: 'persona_id'
                }
            },
            no_empleado: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            contrasena: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: true
            },
            ultimo_acceso: {
                type: sequelize_1.DataTypes.DATE,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'empleado',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "empleado_id_pk",
                    unique: true,
                    fields: [
                        { name: "empleado_id" },
                    ]
                },
            ]
        });
    }
}
exports.empleado = empleado;
