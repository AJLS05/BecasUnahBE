"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estado_civil = void 0;
const sequelize_1 = require("sequelize");
class estado_civil extends sequelize_1.Model {
    static initModel(sequelize) {
        return estado_civil.init({
            estado_civil_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nombre_estado_civil: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'estado_civil',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "estado_civil_id_pk",
                    unique: true,
                    fields: [
                        { name: "estado_civil_id" },
                    ]
                },
            ]
        });
    }
}
exports.estado_civil = estado_civil;
