import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { persona, personaId } from './persona';

export interface empleadoAttributes {
  empleado_id: string;
  persona_id: number;
  no_empleado?: string;
  contrasena?: string;
  ultimo_acceso?: Date;
}

export type empleadoPk = "empleado_id";
export type empleadoId = empleado[empleadoPk];
export type empleadoOptionalAttributes = "no_empleado" | "contrasena" | "ultimo_acceso";
export type empleadoCreationAttributes = Optional<empleadoAttributes, empleadoOptionalAttributes>;

export class empleado extends Model<empleadoAttributes, empleadoCreationAttributes> implements empleadoAttributes {
  empleado_id!: string;
  persona_id!: number;
  no_empleado?: string;
  contrasena?: string;
  ultimo_acceso?: Date;

  // empleado belongsTo persona via persona_id
  persona!: persona;
  getPersona!: Sequelize.BelongsToGetAssociationMixin<persona>;
  setPersona!: Sequelize.BelongsToSetAssociationMixin<persona, personaId>;
  createPersona!: Sequelize.BelongsToCreateAssociationMixin<persona>;

  static initModel(sequelize: Sequelize.Sequelize): typeof empleado {
    return empleado.init({
    empleado_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'persona_id'
      }
    },
    no_empleado: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    contrasena: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ultimo_acceso: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'empleado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "empleado_id_pk",
        unique: true,
        fields: [
          { name: "empleado_id" },
        ]
      },
    ]
  });
  }
}
