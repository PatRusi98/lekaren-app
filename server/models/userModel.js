import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const User = db.define('user',{
    name:{
        type: DataTypes.STRING
    },
    surname:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    password:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});

export default User;