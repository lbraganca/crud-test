"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _User = _interopRequireDefault(require("../User"));

var _db = _interopRequireDefault(require("../../db"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Note = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Note, _Model);

  var _super = _createSuper(Note);

  function Note() {
    (0, _classCallCheck2["default"])(this, Note);
    return _super.apply(this, arguments);
  }

  return (0, _createClass2["default"])(Note);
}(_sequelize.Model);

Note.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false,
    defaultValue: ''
  },
  author: {
    type: _sequelize.DataTypes.INTEGER,
    references: {
      model: _User["default"],
      key: 'id'
    }
  }
}, {
  sequelize: _db["default"]
});
var _default = Note;
exports["default"] = _default;