import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';

export interface becasAttributes {
  beca_id: number;
  nombre_beca?: string;
  descripcion?: string;
  monto?: number;
}

export type becasPk = "beca_id";
export type becasId = becas[becasPk];
export type becasOptionalAttributes = "nombre_beca" | "descripcion" | "monto";
export type becasCreationAttributes = Optional<becasAttributes, becasOptionalAttributes>;

export class becas extends Model<becasAttributes, becasCreationAttributes> implements becasAttributes {
  beca_id!: number;
  nombre_beca?: string;
  descripcion?: string;
  monto?: number;

  // becas hasMany becario via beca_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof becas {
    return becas.init({
    beca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_beca: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,4),
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
