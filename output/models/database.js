"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _mongodb = require("mongodb");

var Database = function () {
  function Database(_ref) {
    var host = _ref.host,
        port = _ref.port,
        dbName = _ref.dbName;
    (0, _classCallCheck2.default)(this, Database);
    this.host = host;
    this.port = port;
    this.dbName = dbName;
    this.db = undefined;
  }

  (0, _createClass2.default)(Database, [{
    key: "initDatabase",
    value: function () {
      var _initDatabase = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
        var url, client;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.db) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", Promise.resolve(this.db));

              case 2:
                url = "".concat(this.host, ":").concat(this.port);
                _context.prev = 3;
                _context.next = 6;
                return _mongodb.MongoClient.connect(url, {
                  useNewUrlParser: true
                });

              case 6:
                client = _context.sent;
                this.db = client.db(this.dbName);
                return _context.abrupt("return", this.db);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                throw _context.t0;

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11]]);
      }));

      function initDatabase() {
        return _initDatabase.apply(this, arguments);
      }

      return initDatabase;
    }()
  }, {
    key: "getDB",
    value: function getDB() {
      return this.db;
    }
  }]);
  return Database;
}();

exports.default = Database;
//# sourceMappingURL=database.js.map