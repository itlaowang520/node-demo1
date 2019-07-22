"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCollection = exports.getDB = exports.initDatabase = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _database = _interopRequireDefault(require("./database"));

var database;

var initDatabase = function () {
  var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(config) {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!database) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            database = new _database.default(config);
            _context.next = 5;
            return database.initDatabase();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function initDatabase(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.initDatabase = initDatabase;

var getDB = function getDB() {
  return database.getDB();
};

exports.getDB = getDB;

var getCollection = function getCollection(collectionName) {
  return getDB().collection(collectionName);
};

exports.getCollection = getCollection;
//# sourceMappingURL=index.js.map