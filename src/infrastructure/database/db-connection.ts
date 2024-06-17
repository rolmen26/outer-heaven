import { Sequelize } from "sequelize";

const config = require("./db.config")[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: { 
        max: 5, 
        min: 0, 
        acquire: 30000, 
        idle: 10000 
    },
    logging: process.env.NODE_ENV === "development" ? console.log : false
});

export default sequelize;