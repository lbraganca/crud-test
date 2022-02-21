"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _http = _interopRequireDefault(require("http"));

var _app = _interopRequireDefault(require("./app"));

var _logger = _interopRequireDefault(require("./logger"));

var _config = _interopRequireDefault(require("./config"));

var port = _config["default"].server.port;

_app["default"].set('port', port);

var httpServer = _http["default"].createServer(_app["default"]);

httpServer.on('error', function (error) {
  var syscall = error.syscall,
      code = error.code;

  if (syscall !== 'listen') {
    throw error;
  }

  if (code === 'EACCESS') {
    return _logger["default"].error("".concat(port, " requires elevated privileges."));
  }

  if (code === 'EADDRINUSE') {
    return _logger["default"].error("".concat(port, " is already in use."));
  }

  throw error;
});
httpServer.on('listening', function () {
  var _httpServer$address = httpServer.address(),
      address = _httpServer$address.address;

  _logger["default"].info("Listening on ".concat(address, ":").concat(port));
});
httpServer.listen(port);