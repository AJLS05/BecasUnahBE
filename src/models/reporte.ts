import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';

export interface reporteAttributes {
  reporte_id: string;
  becario_id: string;
  fecha_reporte?: string;
  total_horas?: number;
  observaciones?: string;
}

export type reportePk = "reporte_id";
export type reporteId = reporte[reportePk];
export type reporteOptionalAttributes = "fecha_reporte" | "total_horas" | "observaciones";
export type reporteCreationAttributes = Optional<reporteAttributes, reporteOptionalAttributes>;

export class reporte extends Model<reporteAttributes, reporteCreationAttributes> implements reporteAttributes {
  reporte_id!: string;
  becario_id!: string;
  fecha_reporte?: string;
  total_horas?: number;
  observaciones?: string;

  // reporte belongsTo becario via becario_id
  becario!: becario;
  getBecario!: Sequelize.BelongsToGetAssociationMixin<becario>;
  setBecario!: Sequelize.BelongsToSetAssociationMixin<becario, becarioId>;
  createBecario!: Sequelize.BelongsToCreateAssociationMixin<becario>;

  static initModel(sequelize: Sequelize.Sequelize): typeof reporte {
    return reporte.init({
    reporte_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    becario_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'becario',
        key: 'becario_id'
      }
    },
    fecha_reporte: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    total_horas: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'reporte',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "reporte_id_pk",
        unique: true,
        fields: [
          { name: "reporte_id" },
        ]
      },
    ]
  });
  }
}
