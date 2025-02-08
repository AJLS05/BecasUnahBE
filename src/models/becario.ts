import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { becas, becasId } from './becas';
import type { carreras, carrerasId } from './carreras';
import type { estado_beca, estado_becaId } from './estado_beca';
import type { persona, personaId } from './persona';
import type { reporte, reporteId } from './reporte';

export interface becarioAttributes {
  becario_id: string;
  persona_id: number;
  no_cuenta?: string;
  carrera_id: string;
  beca_id: number;
  estado_beca_id: number;
  fecha_inicio_beca: string;
  contrasena?: string;
  ultimo_acceso?: Date;
}

export type becarioPk = "becario_id";
export type becarioId = becario[becarioPk];
export type becarioOptionalAttributes = "no_cuenta" | "contrasena" | "ultimo_acceso";
export type becarioCreationAttributes = Optional<becarioAttributes, becarioOptionalAttributes>;

export class becario extends Model<becarioAttributes, becarioCreationAttributes> implements becarioAttributes {
  becario_id!: string;
  persona_id!: number;
  no_cuenta?: string;
  carrera_id!: string;
  beca_id!: number;
  estado_beca_id!: number;
  fecha_inicio_beca!: string;
  contrasena?: string;
  ultimo_acceso?: Date;

    // becario hasMany planilla_x_mes via becario_id
  
  // becario hasMany reporte via becario_id
  reportes!: reporte[];
  getReportes!: Sequelize.HasManyGetAssociationsMixin<reporte>;
  setReportes!: Sequelize.HasManySetAssociationsMixin<reporte, reporteId>;
  addReporte!: Sequelize.HasManyAddAssociationMixin<reporte, reporteId>;
  addReportes!: Sequelize.HasManyAddAssociationsMixin<reporte, reporteId>;
  createReporte!: Sequelize.HasManyCreateAssociationMixin<reporte>;
  removeReporte!: Sequelize.HasManyRemoveAssociationMixin<reporte, reporteId>;
  removeReportes!: Sequelize.HasManyRemoveAssociationsMixin<reporte, reporteId>;
  hasReporte!: Sequelize.HasManyHasAssociationMixin<reporte, reporteId>;
  hasReportes!: Sequelize.HasManyHasAssociationsMixin<reporte, reporteId>;
  countReportes!: Sequelize.HasManyCountAssociationsMixin;
  // becario belongsTo becas via beca_id
  beca!: becas;
  getBeca!: Sequelize.BelongsToGetAssociationMixin<becas>;
  setBeca!: Sequelize.BelongsToSetAssociationMixin<becas, becasId>;
  createBeca!: Sequelize.BelongsToCreateAssociationMixin<becas>;
  // becario belongsTo carreras via carrera_id
  carrera!: carreras;
  getCarrera!: Sequelize.BelongsToGetAssociationMixin<carreras>;
  setCarrera!: Sequelize.BelongsToSetAssociationMixin<carreras, carrerasId>;
  createCarrera!: Sequelize.BelongsToCreateAssociationMixin<carreras>;
  // becario belongsTo estado_beca via estado_beca_id
  estado_beca!: estado_beca;
  getEstado_beca!: Sequelize.BelongsToGetAssociationMixin<estado_beca>;
  setEstado_beca!: Sequelize.BelongsToSetAssociationMixin<estado_beca, estado_becaId>;
  createEstado_beca!: Sequelize.BelongsToCreateAssociationMixin<estado_beca>;
  // becario belongsTo persona via persona_id
  persona!: persona;
  getPersona!: Sequelize.BelongsToGetAssociationMixin<persona>;
  setPersona!: Sequelize.BelongsToSetAssociationMixin<persona, personaId>;
  createPersona!: Sequelize.BelongsToCreateAssociationMixin<persona>;

  static initModel(sequelize: Sequelize.Sequelize): typeof becario {
    return becario.init({
    becario_id: {
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
    no_cuenta: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    carrera_id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'carreras',
        key: 'carrera_id'
      }
    },
    beca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'becas',
        key: 'beca_id'
      }
    },
    estado_beca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'estado_beca',
        key: 'estado_beca_id'
      }
    },
    fecha_inicio_beca: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
    tableName: 'becario',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "becario_id_pk",
        unique: true,
        fields: [
          { name: "becario_id" },
        ]
      },
    ]
  });
  }
}
