import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { carreras, carrerasId } from './carreras';

export interface facultadesAttributes {
  facultad_id: string;
  nombre_facultad?: string;
}

export type facultadesPk = "facultad_id";
export type facultadesId = facultades[facultadesPk];
export type facultadesOptionalAttributes = "nombre_facultad";
export type facultadesCreationAttributes = Optional<facultadesAttributes, facultadesOptionalAttributes>;

export class facultades extends Model<facultadesAttributes, facultadesCreationAttributes> implements facultadesAttributes {
  facultad_id!: string;
  nombre_facultad?: string;

  // facultades hasMany carreras via facultad_id
  carreras!: carreras[];
  getCarreras!: Sequelize.HasManyGetAssociationsMixin<carreras>;
  setCarreras!: Sequelize.HasManySetAssociationsMixin<carreras, carrerasId>;
  addCarrera!: Sequelize.HasManyAddAssociationMixin<carreras, carrerasId>;
  addCarreras!: Sequelize.HasManyAddAssociationsMixin<carreras, carrerasId>;
  createCarrera!: Sequelize.HasManyCreateAssociationMixin<carreras>;
  removeCarrera!: Sequelize.HasManyRemoveAssociationMixin<carreras, carrerasId>;
  removeCarreras!: Sequelize.HasManyRemoveAssociationsMixin<carreras, carrerasId>;
  hasCarrera!: Sequelize.HasManyHasAssociationMixin<carreras, carrerasId>;
  hasCarreras!: Sequelize.HasManyHasAssociationsMixin<carreras, carrerasId>;
  countCarreras!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof facultades {
    return facultades.init({
    facultad_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    nombre_facultad: {
      type: DataTypes.STRING(100),
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
