import { Sequelize } from "sequelize";

const db = new Sequelize('lekaren-app', 'root', 'Pato1998', {
    host: "localhost",
    dialect: "mysql"
});

export default db;