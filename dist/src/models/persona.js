"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
const sequelize_1 = require("sequelize");
class persona extends sequelize_1.Model {
    static initModel(sequelize) {
        return persona.init({
            persona_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            primer_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: false
            },
            segundo_nombre: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            primer_apellido: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: false
            },
            segundo_apellido: {
                type: sequelize_1.DataTypes.STRING(25),
                allowNull: true
            },
            fecha_nacimiento: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            dni: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: false
            },
            sexo: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true
            },
            estado_civil_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'estado_civil',
                    key: 'estado_civil_id'
                }
            },
            telefono: {
                type: sequelize_1.DataTypes.STRING(9),
                allowNull: true
            },
            correo_institucional: {
                type: sequelize_1.DataTypes.STRING(35),
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'persona',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "persona_id_pk",
                    unique: true,
                    fields: [
                        { name: "persona_id" },
                    ]
                },
            ]
        });
    }
}
exports.persona = persona;
