
// connection between postgres  and databse

const Sequelize = require('sequelize');

// create a new instance of sequelize
const sequelize = new Sequelize(

    process.env.PG_DB,
    process.env.PG_USER,
    process.env.PG_PASSWORD,

    {
        host: process.env.PG_HOST, // we are using docker so we use the name of the service
        dialect:'postgres', // we are using postgres
    }

);

module.exports = sequelize;  // export the instance of sequelize