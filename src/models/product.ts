import { DataTypes } from "sequelize";
import sequelize from "../db/conexion";
const Becario = sequelize.define('becario', {
    product_id: {
        type: DataTypes.INTEGER, primaryKey: true
    },
    name:{
        type: DataTypes.STRING
    }
}
)