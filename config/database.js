import { Sequelize } from "sequelize";


// conexión a la base de datos que tengamos creada en cada uno de nuestros pcs (la idea es que se llame tienda para todos)
const DBConnection = new Sequelize('tienda', 'root', 'contraseña_del_mysql', {
    host: 'localhost',
    dialect:'mysql',
})

export default DBConnection