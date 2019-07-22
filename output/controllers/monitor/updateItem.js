"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _appFunc = _interopRequireDefault(require("../../utils/appFunc"));

var _monitor = _interopRequireDefault(require("../../models/monitor"));

function updateItemController(_x, _x2) {
  return _updateItemController.apply(this, arguments);
}

function _updateItemController() {
  _updateItemController = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    var monitorId, monitor, newDatas;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_appFunc.default.isEmptyObject(context.request.body)) {
              context.throw(new Error('更新monitor信息错误，monitor信息为空！'));
            }

            if (!context.request.body.monitorId) {
              context.throw(new Error('更新monitor信息错误，monitorId不能为空！'));
            }

            monitorId = context.request.body.monitorId;
            _context.next = 5;
            return _monitor.default.getItemById(monitorId);

          case 5:
            monitor = _context.sent;

            if (!monitor) {
              _context.next = 20;
              break;
            }

            newDatas = context.request.body;
            _context.prev = 8;
            _context.next = 11;
            return _monitor.default.updateItemById(monitorId, newDatas);

          case 11:
            _context.next = 17;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](8);
            _context.t0.message = 'monitor信息更新失败！';
            context.throw(_context.t0);

          case 17:
            context.body = {
              code: 0,
              message: 'monitor信息更新成功!'
            };
            _context.next = 21;
            break;

          case 20:
            context.throw(new Error('没有此monitor!'));

          case 21:
            next();

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 13]]);
  }));
  return _updateItemController.apply(this, arguments);
}

var _default = updateItemController;
exports.default = _default;
//# sourceMappingURL=updateItem.js.map