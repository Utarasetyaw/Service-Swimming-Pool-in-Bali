import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const client = db.define('client',{
    foto:{
        type: DataTypes.STRING
    },
    judul:{
        type: DataTypes.STRING
    },
    lokasi:{
        type: DataTypes.STRING
    },
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
    },{
    freezeTableNama : true
});

export default client