"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _monitor = _interopRequireDefault(require("../../models/monitor"));

var _appFunc = _interopRequireDefault(require("../../utils/appFunc"));

function addMonitorItemController(_x, _x2) {
  return _addMonitorItemController.apply(this, arguments);
}

function _addMonitorItemController() {
  _addMonitorItemController = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    var newDatas;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (_appFunc.default.isEmptyObject(context.request.body)) {
              context.throw('添加Monitor失败，参数信息为空！');
            }

            if (!context.request.body.taskName) {
              context.throw('添加Monitor失败，taskName为空！');
            }

            if (!context.request.body.uptime) {
              context.throw('添加Monitor失败，uptime为空！');
            }

            if (!context.request.body.memberNum) {
              context.throw('添加Monitor失败，memberNum为空！');
            }

            if (!context.request.body.status || !context.request.body.status === 0) {
              context.throw('添加Monitor失败，status为空！');
            }

            newDatas = context.request.body;
            _context.prev = 6;
            _context.next = 9;
            return _monitor.default.addItem(newDatas);

          case 9:
            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](6);
            _context.t0.message = '添加Monitor失败！';
            context.throw(_context.t0);

          case 15:
            context.body = {
              code: 0,
              message: '添加成功'
            };
            next();

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[6, 11]]);
  }));
  return _addMonitorItemController.apply(this, arguments);
}

var _default = addMonitorItemController;
exports.default = _default;
//# sourceMappingURL=addItem.js.map