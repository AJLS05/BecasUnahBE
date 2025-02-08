import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';

export interface estado_becaAttributes {
  estado_beca_id: number;
  estado_beca?: string;
}

export type estado_becaPk = "estado_beca_id";
export type estado_becaId = estado_beca[estado_becaPk];
export type estado_becaOptionalAttributes = "estado_beca";
export type estado_becaCreationAttributes = Optional<estado_becaAttributes, estado_becaOptionalAttributes>;

export class estado_beca extends Model<estado_becaAttributes, estado_becaCreationAttributes> implements estado_becaAttributes {
  estado_beca_id!: number;
  estado_beca?: string;

  // estado_beca hasMany becario via estado_beca_id
  becarios!: becario[];
  getBecarios!: Sequelize.HasManyGetAssociationsMixin<becario>;
  setBecarios!: Sequelize.HasManySetAssociationsMixin<becario, becarioId>;
  addBecario!: Sequelize.HasManyAddAssociationMixin<becario, becarioId>;
  addBecarios!: Sequelize.HasManyAddAssociationsMixin<becario, becarioId>;
  createBecario!: Sequelize.HasManyCreateAssociationMixin<becario>;
  removeBecario!: Sequelize.HasManyRemoveAssociationMixin<becario, becarioId>;
  removeBecarios!: Sequelize.HasManyRemoveAssociationsMixin<becario, becarioId>;
  hasBecario!: Sequelize.HasManyHasAssociationMixin<becario, becarioId>;
  hasBecarios!: Sequelize.HasManyHasAssociationsMixin<becario, becarioId>;
  countBecarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof estado_beca {
    return estado_beca.init({
    estado_beca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado_beca: {
      type: DataTypes.STRING(30),
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
