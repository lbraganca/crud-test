"use strict";
const { Sequelize } = require("sequelize");
const { database } = require("../config");

module.exports = new Sequelize(database.schema, database.username, database.password, database.sequelizeOptions);