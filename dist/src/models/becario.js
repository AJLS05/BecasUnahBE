"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.becario = void 0;
const sequelize_1 = require("sequelize");
class becario extends sequelize_1.Model {
    static initModel(sequelize) {
        return becario.init({
            becario_id: {
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
            no_cuenta: {
                type: sequelize_1.DataTypes.STRING(15),
                allowNull: true
            },
            carrera_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                references: {
                    model: 'carreras',
                    key: 'carrera_id'
                }
            },
            beca_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'becas',
                    key: 'beca_id'
                }
            },
            estado_beca_id: {
                type: sequelize_1.DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'estado_beca',
                    key: 'estado_beca_id'
                }
            },
            fecha_inicio_beca: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
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
            tableName: 'becario',
            schema: 'dbo',
            timestamps: false,
            indexes: [
                {
                    name: "becario_id_pk",
                    unique: true,
                    fields: [
                        { name: "becario_id" },
                    ]
                },
            ]
        });
    }
}
exports.becario = becario;
