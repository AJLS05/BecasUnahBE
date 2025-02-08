import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface preguntas_frecuentesAttributes {
  pregunta_id: number;
  pregunta: string;
  respuesta: string;
}

export type preguntas_frecuentesPk = "pregunta_id";
export type preguntas_frecuentesId = preguntas_frecuentes[preguntas_frecuentesPk];
export type preguntas_frecuentesCreationAttributes = preguntas_frecuentesAttributes;

export class preguntas_frecuentes extends Model<preguntas_frecuentesAttributes, preguntas_frecuentesCreationAttributes> implements preguntas_frecuentesAttributes {
  pregunta_id!: number;
  pregunta!: string;
  respuesta!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof preguntas_frecuentes {
    return preguntas_frecuentes.init({
    pregunta_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pregunta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    respuesta: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'preguntas_frecuentes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pregunta_id_pk",
        unique: true,
        fields: [
          { name: "pregunta_id" },
        ]
      },
    ]
  });
  }
}
