const { DataTypes } = require('sequelize');
const sequelize = require('../../config/conexion'); // Asegúrate de que la ruta sea correcta

const Becario = sequelize.define('becario', {
  becario_id: {
    type: DataTypes.CHAR(5),
    allowNull: false,
    primaryKey: true
  },
  persona_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  no_cuenta: {
    type: DataTypes.STRING(15),
    allowNull: true  // No se especifica NOT NULL en la definición SQL
  },
  carrera_id: {
    type: DataTypes.CHAR(5),
    allowNull: false
  },
  beca_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  estado_beca_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha_inicio_beca: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(10),
    allowNull: true  // Se permite nulo, ya que no se especifica NOT NULL
  },
  ultimo_acceso: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  tableName: 'becario',  // Asegura que se use el nombre exacto de la tabla
  timestamps: false      // Desactiva la creación automática de createdAt y updatedAt
});

module.exports = Becario;
