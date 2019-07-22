"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _koaRouter = _interopRequireDefault(require("koa-router"));

var monitorControllers = _interopRequireWildcard(require("../../../controllers/monitor"));

var router = new _koaRouter.default();
router.get('/list', monitorControllers.getList).post('/add', monitorControllers.addItem).get('/getInfoById', monitorControllers.getItem).post('/update', monitorControllers.updateItem).post('/del', monitorControllers.delItem);
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map