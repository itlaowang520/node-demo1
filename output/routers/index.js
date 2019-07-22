"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controllers = _interopRequireDefault(require("../controllers"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _monitor = _interopRequireDefault(require("./monitor"));

var VERSION = 'v1';
var PROJECT = 'wm-server';
var router = new _koaRouter.default({
  prefix: "/api/".concat(PROJECT, "/").concat(VERSION)
});
router.get('/hello', _controllers.default);
router.use(_monitor.default.routes());
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map