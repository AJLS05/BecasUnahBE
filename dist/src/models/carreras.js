"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carreras = void 0;
const sequelize_1 = require("sequelize");
class carreras extends sequelize_1.Model {
    static initModel(sequelize) {
        return carreras.init({
            carrera_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                primaryKey: true
            },
            nombre_carrera: {
                type: sequelize_1.DataTypes.STRING(100),
                allowNull: true
            },
            facultad_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                references: {
                    model: 'facultades',
                    key: 'facultad_id'
                }
            }
        }, {
            sequelize,
            tableName: 'carreras',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "carrera_id_pk",
                    unique: true,
                    fields: [
                        { name: "carrera_id" },
                    ]
                },
            ]
        });
    }
}
exports.carreras = carreras;
