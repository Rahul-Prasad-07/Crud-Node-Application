const Sequelize = require('sequelize');
const db = require('../util/database');

// we want to create table of users in databse
// define a model of user, which will use to create tabel in databse
// we have id, it will increment automatically when we add new user
// we have name, it will be string
// we have email, it will be string



const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = User;