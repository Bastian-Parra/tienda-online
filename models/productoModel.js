import { DataTypes } from "sequelize";
import DBConnection from "../config/database.js";
import Vendedor from "./vendedorModel.js";
import Comprador from "./compradorModel.js";
import TipoProducto from "./tipoProductoModel.js";

const Producto = DBConnection.define("Producto", {
    numeroVendedor: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Vendedor,
            key: "numeroVendedor"
        }
    },
    idComprador: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Comprador,
            key: "idComprador"
        }
    },
    idTipoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
            model: TipoProducto,
            key: "idTipoProducto"
        }
    },
    precioCompra: {
        type: DataTypes.INTEGER,
        allowNull: false
    }

},
    {
        timestamps: false,
        tableName: "producto"
    }
)


// asociaciones de las llaves foráneas
Producto.belongsTo(Vendedor, { foreignKey: "numeroVendedor" })
Producto.belongsTo(Comprador, { foreignKey: "idComprador" })
Producto.belongsTo(TipoProducto, { foreignKey: "idTipoProducto" })

export default Producto
