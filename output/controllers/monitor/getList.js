"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _monitor = _interopRequireDefault(require("../../models/monitor"));

var _querystring = _interopRequireDefault(require("querystring"));

var _utils = require("../../utils/utils");

var _appFunc = _interopRequireDefault(require("../../utils/appFunc"));

var url = require('url');

function getMonitorListController(_x, _x2) {
  return _getMonitorListController.apply(this, arguments);
}

function _getMonitorListController() {
  _getMonitorListController = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    var list, params, pageSize, pageNo, count;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            list = [], params = _querystring.default.parse(url.parse(context.request.url).query) || {}, pageSize = params.pageSize, pageNo = params.pageNo;
            _context.prev = 1;
            _context.next = 4;
            return _monitor.default.getList();

          case 4:
            list = _context.sent;
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](1);
            _context.t0.message = '获取Monitor列表失败！';
            context.throw(_context.t0);

          case 11:
            if (params.taskName) {
              list = list.filter(function (item) {
                return item.taskName === params.taskName;
              });
            }

            count = list.length;

            if (!_appFunc.default.isEmptyObject(params)) {
              list = (0, _utils.pageFormatter)(list, pageSize, pageNo);
            }

            context.body = {
              list: list,
              totalCount: count,
              pageNo: Number(pageNo),
              pageSize: Number(pageSize)
            };
            next();

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 7]]);
  }));
  return _getMonitorListController.apply(this, arguments);
}

var _default = getMonitorListController;
exports.default = _default;
//# sourceMappingURL=getList.js.map