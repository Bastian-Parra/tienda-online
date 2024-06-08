import DBConnection from "../config/database";
import { DataTypes } from "sequelize";

const TipoProducto = DBConnection.define("Tipoproducto", {
    idTipoProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    descripcionProducto: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        tableName: "tipoproducto"
    }
)

export default TipoProducto
