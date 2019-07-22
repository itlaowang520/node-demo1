"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _koa = _interopRequireDefault(require("koa"));

var _routers = _interopRequireDefault(require("./routers"));

var _models = require("./models");

var _koaBodyparser = _interopRequireDefault(require("koa-bodyparser"));

var _config = _interopRequireDefault(require("./models/config"));

var _koa2Cors = _interopRequireDefault(require("koa2-cors"));

var _logger = _interopRequireDefault(require("./utils/logger"));

var port = 3009;
var app = new _koa.default();
process.on('unhandledRejection', function (err) {
  _logger.default.error(err);
});
app.use((0, _koa2Cors.default)({
  origin: '*',
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'token', 'X-Requested-With']
}));
app.use(function (context, next) {
  _logger.default.info("".concat(context.method, " ").concat(context.href, " ").concat(context.headers['content-type'], " ").concat(context.headers['user-agent'], " ").concat(context.headers.token || ''));

  return next();
});
app.use(function () {
  var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(context, next) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return next();

          case 3:
            _context.next = 10;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context["catch"](0);

            _logger.default.error("".concat(_context.t0.stack));

            context.status = 200;
            context.body = {
              errcode: _context.t0.code || -1,
              result: {
                message: _context.t0.message
              }
            };

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 5]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.use((0, _koaBodyparser.default)({
  jsonLimit: '50mb',
  enableTypes: ['json', 'form', 'multipart']
}));
app.use(_routers.default.routes());
app.use(_routers.default.allowedMethods());
app.use(function (context, next) {
  if (context.body) {
    if (context.body.errcode === undefined) {
      context.body = {
        errcode: 0,
        result: context.body
      };
    }

    context.set('Content-Type', 'application/json');
    context.body = JSON.stringify(context.body);
  }

  return next();
});
(0, _models.initDatabase)(_config.default).then(startServer).catch(function (err) {
  _logger.default.error(err);
});

function startServer() {
  app.listen(port, function () {
    _logger.default.info("server listening on ".concat(port, "..."));
  });
}
//# sourceMappingURL=index.js.map