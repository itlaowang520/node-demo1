"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _monitor = _interopRequireDefault(require("../../models/monitor"));

function getMonitorItemController(_x, _x2) {
  return _getMonitorItemController.apply(this, arguments);
}

function _getMonitorItemController() {
  _getMonitorItemController = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    var monitorId, monitor;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            monitorId = context.request.query.monitorId;

            if (!monitorId) {
              context.throw(new Error('缺少monitorId'));
            }

            _context.prev = 2;
            _context.next = 5;
            return _monitor.default.getItemById(monitorId);

          case 5:
            monitor = _context.sent;
            _context.next = 12;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](2);
            _context.t0.message = '获取monitor失败！';
            context.throw(_context.t0);

          case 12:
            if (!monitor) {
              context.throw(new Error('找不到对应的monitor!'));
            }

            context.body = (0, _objectSpread2.default)({}, monitor, {
              code: 0
            });
            next();

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 8]]);
  }));
  return _getMonitorItemController.apply(this, arguments);
}

var _default = getMonitorItemController;
exports.default = _default;
//# sourceMappingURL=getItem.js.map