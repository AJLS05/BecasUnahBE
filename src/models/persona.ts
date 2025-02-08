import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becario, becarioId } from './becario';
import type { empleado, empleadoId } from './empleado';
import type { estado_civil, estado_civilId } from './estado_civil';

export interface personaAttributes {
  persona_id: number;
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
  fecha_nacimiento: string;
  dni: string;
  sexo?: string;
  estado_civil_id: number;
  telefono?: string;
  correo_institucional: string;
}

export type personaPk = "persona_id";
export type personaId = persona[personaPk];
export type personaOptionalAttributes = "segundo_nombre" | "segundo_apellido" | "sexo" | "telefono";
export type personaCreationAttributes = Optional<personaAttributes, personaOptionalAttributes>;

export class persona extends Model<personaAttributes, personaCreationAttributes> implements personaAttributes {
  persona_id!: number;
  primer_nombre!: string;
  segundo_nombre?: string;
  primer_apellido!: string;
  segundo_apellido?: string;
  fecha_nacimiento!: string;
  dni!: string;
  sexo?: string;
  estado_civil_id!: number;
  telefono?: string;
  correo_institucional!: string;

  // persona belongsTo estado_civil via estado_civil_id
  estado_civil!: estado_civil;
  getEstado_civil!: Sequelize.BelongsToGetAssociationMixin<estado_civil>;
  setEstado_civil!: Sequelize.BelongsToSetAssociationMixin<estado_civil, estado_civilId>;
  createEstado_civil!: Sequelize.BelongsToCreateAssociationMixin<estado_civil>;
  // persona hasMany becario via persona_id
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
  // persona hasMany empleado via persona_id
  empleados!: empleado[];
  getEmpleados!: Sequelize.HasManyGetAssociationsMixin<empleado>;
  setEmpleados!: Sequelize.HasManySetAssociationsMixin<empleado, empleadoId>;
  addEmpleado!: Sequelize.HasManyAddAssociationMixin<empleado, empleadoId>;
  addEmpleados!: Sequelize.HasManyAddAssociationsMixin<empleado, empleadoId>;
  createEmpleado!: Sequelize.HasManyCreateAssociationMixin<empleado>;
  removeEmpleado!: Sequelize.HasManyRemoveAssociationMixin<empleado, empleadoId>;
  removeEmpleados!: Sequelize.HasManyRemoveAssociationsMixin<empleado, empleadoId>;
  hasEmpleado!: Sequelize.HasManyHasAssociationMixin<empleado, empleadoId>;
  hasEmpleados!: Sequelize.HasManyHasAssociationsMixin<empleado, empleadoId>;
  countEmpleados!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof persona {
    return persona.init({
    persona_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    primer_nombre: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    segundo_nombre: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    primer_apellido: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    segundo_apellido: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dni: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    sexo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    estado_civil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estado_civil',
        key: 'estado_civil_id'
      }
    },
    telefono: {
      type: DataTypes.STRING(9),
      allowNull: true
    },
    correo_institucional: {
      type: DataTypes.STRING(35),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'persona',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "persona_id_pk",
        unique: true,
        fields: [
          { name: "persona_id" },
        ]
      },
    ]
  });
  }
}
