"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _compression = _interopRequireDefault(require("compression"));

var _request = _interopRequireDefault(require("../middleware/request"));

var _response = _interopRequireDefault(require("../middleware/response"));

var _authentication = _interopRequireDefault(require("../middleware/authentication"));

var _api = _interopRequireDefault(require("../routes/api"));

var _auth = _interopRequireDefault(require("../routes/auth"));

require("../model");

var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use((0, _compression["default"])());
app.use(_express["default"].json());
app.use(_request["default"]);
app.use(_response["default"]);
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use('/auth', _auth["default"]);
app.use(_authentication["default"]);
app.use('/api', _api["default"]);
var _default = app;
exports["default"] = _default;