"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.facultades = void 0;
const sequelize_1 = require("sequelize");
class facultades extends sequelize_1.Model {
    static initModel(sequelize) {
        return facultades.init({
            facultad_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                primaryKey: true
            },
            nombre_facultad: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'facultades',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "facultad_id_pk",
                    unique: true,
                    fields: [
                        { name: "facultad_id" },
                    ]
                },
            ]
        });
    }
}
exports.facultades = facultades;
