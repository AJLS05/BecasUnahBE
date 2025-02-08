"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.becas = void 0;
const sequelize_1 = require("sequelize");
class becas extends sequelize_1.Model {
    static initModel(sequelize) {
        return becas.init({
            beca_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nombre_beca: {
                type: sequelize_1.DataTypes.STRING(150),
                allowNull: true
            },
            descripcion: {
                type: sequelize_1.DataTypes.TEXT,
                allowNull: true
            },
            monto: {
                type: sequelize_1.DataTypes.DECIMAL(19, 4),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'becas',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "beca_id_pk",
                    unique: true,
                    fields: [
                        { name: "beca_id" },
                    ]
                },
            ]
        });
    }
}
exports.becas = becas;
