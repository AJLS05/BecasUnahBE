const { DataTypes } = require('sequelize');
const sequelize = require('../config/conexion'); // Asegúrate de que la ruta sea correcta

const FAQ = sequelize.define('faq', {
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
  },
}, {
  tableName: 'preguntas_frecuentes', 
  timestamps: false
});

module.exports = FAQ;