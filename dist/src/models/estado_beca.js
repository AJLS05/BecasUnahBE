"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estado_beca = void 0;
const sequelize_1 = require("sequelize");
class estado_beca extends sequelize_1.Model {
    static initModel(sequelize) {
        return estado_beca.init({
            estado_beca_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            estado_beca: {
                type: sequelize_1.DataTypes.STRING(30),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'estado_beca',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "estado_beca_id_pk",
                    unique: true,
                    fields: [
                        { name: "estado_beca_id" },
                    ]
                },
            ]
        });
    }
}
exports.estado_beca = estado_beca;
