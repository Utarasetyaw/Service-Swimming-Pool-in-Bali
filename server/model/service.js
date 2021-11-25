import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const service = db.define('service',{
    icon:{
        type: DataTypes.STRING
    },
    judul:{
        type: DataTypes.STRING
    },
    deskripsi:{
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

export default service