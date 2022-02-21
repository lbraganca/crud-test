"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = middleware;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _errorDescriptions = _interopRequireDefault(require("../../routes/errors/error-descriptions"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function success() {
  var _this = this;

  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
  return function (content) {
    _this.status(status);

    _this.json(content);
  };
}

function customError(key) {
  var errorDescription = _errorDescriptions["default"][key];
  this.status(errorDescription.code);
  this.json(errorDescription);
}

function error() {
  var _this2 = this;

  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 400;
  return function (content) {
    _this2.status(status);

    _this2.json(_objectSpread(_objectSpread({}, _errorDescriptions["default"].other), {}, {
      code: status,
      message: content.message
    }));
  };
}

function middleware(request, response, next) {
  response.success = success;
  response.customError = customError;
  response.error = error;
  next();
}