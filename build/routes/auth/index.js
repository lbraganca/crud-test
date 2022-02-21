"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _express = require("express");

var _User = _interopRequireDefault(require("../../model/User"));

var _config = _interopRequireDefault(require("../../config"));

var jwtConfig = _config["default"].authentication.jwt;
var router = (0, _express.Router)();
/**
 * Login
 */

router.post('/login', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var email, password, user;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = request.getValue('email');
            password = request.getValue('password');

            if (!(!email || !password)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", response.customError('missingParams'));

          case 4:
            _context.next = 6;
            return _User["default"].findOne({
              where: {
                email: email
              }
            });

          case 6:
            user = _context.sent;

            if (user) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", response.customError('userNotFound'));

          case 9:
            if (user.validatePassword(password)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", response.customError('wrongPassword'));

          case 11:
            return _context.abrupt("return", _jsonwebtoken["default"].sign({
              id: user.id,
              email: user.email
            }, jwtConfig.secret, jwtConfig.options, function (error, token) {
              return error ? response.error()(error) : response.success()(token);
            }));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;