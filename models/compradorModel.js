import {DataTypes} from "sequelize";
import DBConnection from "../config/database";


const Comprador = DBConnection.define("Comprador", {

    idComprador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nombreComprador: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        timestamps: false,
        tableName: "comprador"
    }
)

export default Comprador;