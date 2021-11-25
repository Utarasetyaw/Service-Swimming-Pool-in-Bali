import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const product = db.define('product',{
    foto:{
        type: DataTypes.STRING
    },
    judul:{
        type: DataTypes.STRING
    },
    keterangan:{
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

export default product