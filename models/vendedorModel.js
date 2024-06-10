import DBConnection from "../config/database";
import { DataTypes } from "sequelize";

const Vendedor = DBConnection.define("Vendedor", {
    numeroVendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreVendedor: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        tableName: "vendedor"
    }
)

export default Vendedor