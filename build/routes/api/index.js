"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _express = require("express");

var _db = _interopRequireDefault(require("../../db"));

var router = (0, _express.Router)();

var isBodyValid = function isBodyValid(body) {
  return (0, _typeof2["default"])(body) === 'object' && body !== null && !Array.isArray(body);
};
/**
 * Insert new instances
 */


router.post('/:entity', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, response) {
    var entityParam, body, entity;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            entityParam = request.getValue('entity');

            if (entityParam) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", response.customError('missingParams'));

          case 3:
            body = request.body;

            if (isBodyValid(body)) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", response.customError('missingOrInvalidBody'));

          case 6:
            entity = _db["default"].models[entityParam];

            if (entity) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", response.customError('entityUndefined'));

          case 9:
            _context.prev = 9;
            _context.t0 = response.success();
            _context.next = 13;
            return entity.create(body);

          case 13:
            _context.t1 = _context.sent;
            return _context.abrupt("return", (0, _context.t0)(_context.t1));

          case 17:
            _context.prev = 17;
            _context.t2 = _context["catch"](9);
            return _context.abrupt("return", response.error()(_context.t2));

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[9, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * Query instances
 * host/Note/1
 */

router.get('/:entity', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(request, response) {
    var entityParam, entity;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            entityParam = request.getValue('entity');

            if (entityParam) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", response.customError('missingParams'));

          case 3:
            entity = _db["default"].models[entityParam];

            if (entity) {
              _context2.next = 6;
              break;
            }

            return _context2.abrupt("return", response.customError('entityUndefined'));

          case 6:
            _context2.prev = 6;
            _context2.t0 = response.success();
            _context2.next = 10;
            return entity.findAll({
              where: request.query
            });

          case 10:
            _context2.t1 = _context2.sent;
            return _context2.abrupt("return", (0, _context2.t0)(_context2.t1));

          case 14:
            _context2.prev = 14;
            _context2.t2 = _context2["catch"](6);
            return _context2.abrupt("return", response.error()(_context2.t2));

          case 17:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[6, 14]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
/**
 * Update instances
 */

router.put('/:entity', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(request, response) {
    var entityParam, body, entity;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            entityParam = request.getValue('entity');

            if (entityParam) {
              _context3.next = 3;
              break;
            }

            return _context3.abrupt("return", response.customError('missingParams'));

          case 3:
            body = request.body;

            if (isBodyValid(body)) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", response.customError('missingOrInvalidBody'));

          case 6:
            entity = _db["default"].models[entityParam];

            if (entity) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", response.customError('entityUndefined'));

          case 9:
            _context3.prev = 9;
            _context3.t0 = response.success();
            _context3.next = 13;
            return entity.update(body, {
              where: request.query
            });

          case 13:
            _context3.t1 = _context3.sent;
            return _context3.abrupt("return", (0, _context3.t0)(_context3.t1));

          case 17:
            _context3.prev = 17;
            _context3.t2 = _context3["catch"](9);
            return _context3.abrupt("return", response.error()(_context3.t2));

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[9, 17]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
/**
 * Delete instances
 */

router["delete"]('/:entity', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(request, response) {
    var entityParam, entity;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            entityParam = request.getValue('entity');

            if (entityParam) {
              _context4.next = 3;
              break;
            }

            return _context4.abrupt("return", response.customError('missingParams'));

          case 3:
            entity = _db["default"].models[entityParam];

            if (entity) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", response.customError('entityUndefined'));

          case 6:
            _context4.prev = 6;
            _context4.t0 = response.success();
            _context4.next = 10;
            return entity.destroy({
              where: request.query
            });

          case 10:
            _context4.t1 = _context4.sent;
            return _context4.abrupt("return", (0, _context4.t0)(_context4.t1));

          case 14:
            _context4.prev = 14;
            _context4.t2 = _context4["catch"](6);
            return _context4.abrupt("return", response.error()(_context4.t2));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[6, 14]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = router;
exports["default"] = _default;