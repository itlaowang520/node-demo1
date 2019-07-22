"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _monitor = _interopRequireDefault(require("../../models/monitor"));

function deleteItemController(_x, _x2) {
  return _deleteItemController.apply(this, arguments);
}

function _deleteItemController() {
  _deleteItemController = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    var deleteResult;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!context.request.body.monitorId) {
              context.throw(new Error('缺少monitorId'));
            }

            _context.prev = 1;
            _context.next = 4;
            return _monitor.default.deleteItemById(context.request.body.monitorId);

          case 4:
            deleteResult = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            _context.t0.message = '删除monitor失败！';
            context.throw(_context.t0);

          case 11:
            if (deleteResult.value) {
              context.body = {
                code: 0,
                message: '删除成功'
              };
            } else {
              context.throw(new Error('没有此monitor!'));
            }

            next();

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _deleteItemController.apply(this, arguments);
}

var _default = deleteItemController;
exports.default = _default;
//# sourceMappingURL=delItem.js.map