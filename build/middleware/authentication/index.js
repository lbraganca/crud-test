"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = middleware;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _User = _interopRequireDefault(require("../../model/User"));

var _config = _interopRequireDefault(require("../../config"));

var authentication = _config["default"].authentication;

function middleware(request, response, next) {
  var token = request.getValue(authentication.field);

  if (!token) {
    return response.customError('unauthorized');
  }

  return _jsonwebtoken["default"].verify(token, authentication.jwt.secret, /*#__PURE__*/function () {
    var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(error, payload) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!error) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", response.error()(error));

            case 2:
              _context.prev = 2;
              _context.next = 5;
              return _User["default"].findByPk(payload.id);

            case 5:
              request.user = _context.sent;
              return _context.abrupt("return", next());

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              return _context.abrupt("return", response.customError('userNotFound'));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
}