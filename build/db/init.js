"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _Note = _interopRequireDefault(require("../model/Note"));

var _User = _interopRequireDefault(require("../model/User"));

var _index = _interopRequireDefault(require("./index"));

var _logger = _interopRequireDefault(require("../logger"));

(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var users;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          _logger["default"].info('Dropping database...');

          _context.next = 4;
          return _index["default"].drop();

        case 4:
          _logger["default"].info('Dropped.');

          _logger["default"].info('Creating database...');

          _context.next = 8;
          return _index["default"].sync();

        case 8:
          _logger["default"].info('Created.');

          if (!(process.env.NODE_ENV === 'development')) {
            _context.next = 18;
            break;
          }

          _logger["default"].info('Creating dummy users...');

          _context.next = 13;
          return _User["default"].bulkCreate([{
            email: 'test.1@runtime-revolution.com',
            password: 'test.1'
          }, {
            email: 'test.2@runtime-revolution.com',
            password: 'test.2'
          }, {
            email: 'test.3@runtime-revolution.com',
            password: 'test.3'
          }, {
            email: 'test.4@runtime-revolution.com',
            password: 'test.4'
          }, {
            email: 'test.5@runtime-revolution.com',
            password: 'test.5'
          }]);

        case 13:
          users = _context.sent;

          _logger["default"].info('Created.');

          _logger["default"].info('Creating dummy notes...');

          _context.next = 18;
          return _Note["default"].bulkCreate([{
            content: '<h1>Example 1</h1><p>Some text</p>',
            author: users[0].id
          }, {
            content: '<h1>Example 2</h1><p>Some text</p>',
            author: users[0].id
          }, {
            content: '<h1>Example 3</h1><p>Some text</p>',
            author: users[1].id
          }, {
            content: '<h1>Example 4</h1><p>Some text</p>',
            author: users[1].id
          }, {
            content: '<h1>Example 5</h1><p>Some text</p>',
            author: users[1].id
          }, {
            content: '<h1>Example 6</h1><p>Some text</p>',
            author: users[2].id
          }, {
            content: '<h1>Example 7</h1><p>Some text</p>',
            author: users[3].id
          }, {
            content: '<h1>Example 8</h1><p>Some text</p>',
            author: users[3].id
          }, {
            content: '<h1>Example 9</h1><p>Some text</p>',
            author: users[4].id
          }, {
            content: '<h1>Example 10</h1><p>Some text</p>',
            author: users[1].id
          }, {
            content: '<h1>Example 11</h1><p>Some text</p>',
            author: users[0].id
          }]);

        case 18:
          _context.next = 20;
          return _index["default"].close();

        case 20:
          _logger["default"].info('Done.');

          _context.next = 26;
          break;

        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);

          _logger["default"].error(_context.t0);

        case 26:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[0, 23]]);
}))();