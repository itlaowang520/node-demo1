"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _winston = require("winston");

var _database = _interopRequireDefault(require("../../models/database"));

var collectionName = 'logs';

var TransportMongoDB = function (_Transport) {
  (0, _inherits2.default)(TransportMongoDB, _Transport);

  function TransportMongoDB() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, TransportMongoDB);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TransportMongoDB).call(this));
    _this.host = options.host;
    _this.dbName = options.dbName;
    _this.port = options.port;
    _this.database = new _database.default({
      dbName: _this.dbName,
      host: _this.host,
      port: _this.port
    });

    _this.database.initDatabase();

    return _this;
  }

  (0, _createClass2.default)(TransportMongoDB, [{
    key: "log",
    value: function log(info, callback) {
      var db = this.database.getDB();

      if (!db) {
        return;
      }

      db.collection(collectionName).insertOne({
        level: info[Symbol.for('level')],
        message: info.message,
        timestamp: info.timestamp
      }).then(function () {
        if (callback instanceof Function) {
          callback();
        }
      }).catch(function (error) {
        console.error(error);
      });
    }
  }]);
  return TransportMongoDB;
}(_winston.Transport);

exports.default = TransportMongoDB;
//# sourceMappingURL=transportMongoDB.js.map