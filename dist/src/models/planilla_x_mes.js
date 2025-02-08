"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.planilla_x_mes = void 0;
const sequelize_1 = require("sequelize");
class planilla_x_mes extends sequelize_1.Model {
    static initModel(sequelize) {
        return planilla_x_mes.init({
            planilla_id: {
                type: sequelize_1.DataTypes.STRING(10),
                allowNull: false
            },
            becario_id: {
                type: sequelize_1.DataTypes.CHAR(5),
                allowNull: false,
                references: {
                    model: 'becario',
                    key: 'becario_id'
                }
            },
            fecha: {
                type: sequelize_1.DataTypes.DATEONLY,
                allowNull: false
            },
            estado_entrega: {
                type: sequelize_1.DataTypes.CHAR(1),
                allowNull: true,
                defaultValue: "N"
            },
            observaciones: {
                type: sequelize_1.DataTypes.STRING(255),
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'planilla_x_mes',
            schema: 'dbo',
            timestamps: false
        });
    }
}
exports.planilla_x_mes = planilla_x_mes;
