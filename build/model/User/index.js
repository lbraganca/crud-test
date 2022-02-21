"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = require("sequelize");

var _crypto = require("crypto");

var _config = _interopRequireDefault(require("../../config"));

var _db = _interopRequireDefault(require("../../db"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var authentication = _config["default"].authentication;

var User = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(User, _Model);

  var _super = _createSuper(User);

  function User() {
    (0, _classCallCheck2["default"])(this, User);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(User, [{
    key: "validatePassword",
    value: function validatePassword(enteredPassword) {
      return this.password === User.encryptPassword(enteredPassword, this.salt);
    }
  }]);
  return User;
}(_sequelize.Model);

(0, _defineProperty2["default"])(User, "generateSalt", function () {
  return (0, _crypto.randomBytes)(authentication.password.salt.size).toString(authentication.password.salt.encoding);
});
(0, _defineProperty2["default"])(User, "encryptPassword", function (plainPassword, salt) {
  return (0, _crypto.createHash)(authentication.password.algorithm).update(plainPassword).update(salt).digest(authentication.password.digest);
});
User.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  salt: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    set: function set(value) {
      var salt = User.generateSalt();
      this.setDataValue('salt', salt);
      this.setDataValue('password', User.encryptPassword(value, salt));
    }
  }
}, {
  sequelize: _db["default"]
});
var _default = User;
exports["default"] = _default;