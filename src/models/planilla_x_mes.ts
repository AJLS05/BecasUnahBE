import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';

export interface planilla_x_mesAttributes {
  planilla_id: string;
  becario_id: string;
  fecha: string;
  estado_entrega?: string;
  observaciones?: string;
}

export type planilla_x_mesOptionalAttributes = "estado_entrega" | "observaciones";
export type planilla_x_mesCreationAttributes = Optional<planilla_x_mesAttributes, planilla_x_mesOptionalAttributes>;

export class planilla_x_mes extends Model<planilla_x_mesAttributes, planilla_x_mesCreationAttributes> implements planilla_x_mesAttributes {
  planilla_id!: string;
  becario_id!: string;
  fecha!: string;
  estado_entrega?: string;
  observaciones?: string;

  // planilla_x_mes belongsTo becario via becario_id
  becario!: becario;
  getBecario!: Sequelize.BelongsToGetAssociationMixin<becario>;
  setBecario!: Sequelize.BelongsToSetAssociationMixin<becario, becarioId>;
  createBecario!: Sequelize.BelongsToCreateAssociationMixin<becario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof planilla_x_mes {
    return planilla_x_mes.init({
    planilla_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    becario_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'becario',
        key: 'becario_id'
      }
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado_entrega: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    observaciones: {
      type: DataTypes.STRING(255),
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
