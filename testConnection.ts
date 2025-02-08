import { Sequelize } from "sequelize";

const sequelize = new Sequelize('sistemacontrolhorasbecas', 'admin', 'IngenieriaSoftware123*', {
    host: 'sistemacontrolhorasbecas.cp2kek4gki90.us-east-2.rds.amazonaws.com',
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
        options: {
          encrypt: true,
          trustServerCertificate: true // Desactiva verificación temporalmente
        }
      },
    logging: false
});

// Función para probar la conexión
async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión establecida correctamente con SQL Server en AWS.');
    } catch (error) {
        console.error('❌ Error al conectar con la base de datos:', error);
    }
}

testConnection();
