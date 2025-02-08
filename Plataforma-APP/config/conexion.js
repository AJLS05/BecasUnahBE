const { Sequelize } = require('sequelize');
require('dotenv').config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    dialectOptions: {
        options: {
            encrypt: true, // Encriptación para conexión segura con SQL Server
            trustServerCertificate: true // Evitar problemas con certificados
        }
    },
    logging: false // Desactivar logs de Sequelize
});

// Probar conexión a la base de datos
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión a la base de datos establecida correctamente.');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
    }
}

// Ejecutar prueba de conexión
testConnection();

module.exports = sequelize;
