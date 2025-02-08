import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';
import type { facultades, facultadesId } from './facultades';

export interface carrerasAttributes {
  carrera_id: string;
  nombre_carrera?: string;
  facultad_id: string;
}

export type carrerasPk = "carrera_id";
export type carrerasId = carreras[carrerasPk];
export type carrerasOptionalAttributes = "nombre_carrera";
export type carrerasCreationAttributes = Optional<carrerasAttributes, carrerasOptionalAttributes>;

export class carreras extends Model<carrerasAttributes, carrerasCreationAttributes> implements carrerasAttributes {
  carrera_id!: string;
  nombre_carrera?: string;
  facultad_id!: string;

  // carreras hasMany becario via carrera_id
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
  // carreras belongsTo facultades via facultad_id
  facultad!: facultades;
  getFacultad!: Sequelize.BelongsToGetAssociationMixin<facultades>;
  setFacultad!: Sequelize.BelongsToSetAssociationMixin<facultades, facultadesId>;
  createFacultad!: Sequelize.BelongsToCreateAssociationMixin<facultades>;

  static initModel(sequelize: Sequelize.Sequelize): typeof carreras {
    return carreras.init({
    carrera_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    nombre_carrera: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    facultad_id: {
      type: DataTypes.CHAR(5),
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
