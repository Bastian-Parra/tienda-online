import { DataTypes } from "sequelize";
import DBConnection from "../config/database";
import Vendedor from "./vendedorController";
import Comprador from "./compradorController";
import TipoProducto from "./tipoProductoController";

const Producto = DBConnection.define("Producto", {
    numeroVendedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        references: {
            model: Vendedor,
            key: "numeroVendedor"
        }
    },
    idComprador: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Comprador,
            key: "idComprador"
        }
    },
    idTipoProducto: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
