import { Sequelize } from "sequelize";
import db from "../config/database.js"

const { DataTypes } = Sequelize;

const blog = db.define('blog',{
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

export default blog