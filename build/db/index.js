"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../config"));

var database = _config["default"].database;

var _default = new _sequelize.Sequelize(database.schema, database.username, database.password, database.sequelizeOptions);

exports["default"] = _default;