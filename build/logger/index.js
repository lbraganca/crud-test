"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _winston = require("winston");

require("winston-daily-rotate-file");

var _config = _interopRequireDefault(require("../config"));

var log = _config["default"].log;
var logger = (0, _winston.createLogger)({
  level: 'info',
  format: _winston.format.combine(_winston.format.timestamp({
    format: 'YYYY-MM-DD HH:mm:ss'
  }), _winston.format.errors({
    stack: true
  }), _winston.format.splat(), _winston.format.json(), _winston.format.prettyPrint()),
  transports: [new _winston.transports.DailyRotateFile({
    filename: _path["default"].join(log.path, '%DATE%.log'),
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '60d'
  })]
});

if (process.env.NODE_ENV === 'development') {
  logger.add(new _winston.transports.Console());
}

var _default = logger;
exports["default"] = _default;