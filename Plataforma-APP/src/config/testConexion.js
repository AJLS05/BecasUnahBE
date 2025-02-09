const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configurar la conexión con las variables de entorno
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Necesario para conexiones a Azure SQL
      trustServerCertificate: true, // Solo para desarrollo
    },
  },
  logging: console.log, // Para ver las consultas SQL en la terminal
});

async function obtenerPrimerBecario() {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa.');

    // Consulta SQL para obtener el primer becario
    const [results] = await sequelize.query('SELECT * FROM becario WHERE no_cuenta=20223842099');

    if (results.length > 0) {
      console.log('👀 Primer becario encontrado:', results[0]); // Muestra el primer becario
    } else {
      console.log('⚠️ No se encontraron becarios en la base de datos.');
    }
  } catch (error) {
    console.error('❌ Error en la consulta:', error);
  } finally {
    await sequelize.close();
  }
}

obtenerPrimerBecario();
