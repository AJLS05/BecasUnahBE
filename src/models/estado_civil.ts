import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persona, personaId } from './persona';

export interface estado_civilAttributes {
  estado_civil_id: number;
  nombre_estado_civil?: string;
}

export type estado_civilPk = "estado_civil_id";
export type estado_civilId = estado_civil[estado_civilPk];
export type estado_civilOptionalAttributes = "nombre_estado_civil";
export type estado_civilCreationAttributes = Optional<estado_civilAttributes, estado_civilOptionalAttributes>;

export class estado_civil extends Model<estado_civilAttributes, estado_civilCreationAttributes> implements estado_civilAttributes {
  estado_civil_id!: number;
  nombre_estado_civil?: string;

  // estado_civil hasMany persona via estado_civil_id
  personas!: persona[];
  getPersonas!: Sequelize.HasManyGetAssociationsMixin<persona>;
  setPersonas!: Sequelize.HasManySetAssociationsMixin<persona, personaId>;
  addPersona!: Sequelize.HasManyAddAssociationMixin<persona, personaId>;
  addPersonas!: Sequelize.HasManyAddAssociationsMixin<persona, personaId>;
  createPersona!: Sequelize.HasManyCreateAssociationMixin<persona>;
  removePersona!: Sequelize.HasManyRemoveAssociationMixin<persona, personaId>;
  removePersonas!: Sequelize.HasManyRemoveAssociationsMixin<persona, personaId>;
  hasPersona!: Sequelize.HasManyHasAssociationMixin<persona, personaId>;
  hasPersonas!: Sequelize.HasManyHasAssociationsMixin<persona, personaId>;
  countPersonas!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof estado_civil {
    return estado_civil.init({
    estado_civil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_estado_civil: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'estado_civil',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "estado_civil_id_pk",
        unique: true,
        fields: [
          { name: "estado_civil_id" },
        ]
      },
    ]
  });
  }
}
