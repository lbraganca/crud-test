"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = middleware;

function getValue(field) {
  var _this$params, _this$body, _this$query;

  return ((_this$params = this.params) === null || _this$params === void 0 ? void 0 : _this$params[field]) || ((_this$body = this.body) === null || _this$body === void 0 ? void 0 : _this$body[field]) || ((_this$query = this.query) === null || _this$query === void 0 ? void 0 : _this$query[field]) || this.header && this.header(field) || null;
}

function middleware(request, response, next) {
  request.getValue = getValue;
  next();
}