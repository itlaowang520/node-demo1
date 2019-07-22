"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _winston = require("winston");

var _config = _interopRequireDefault(require("../../models/config"));

var _transportMongoDB = _interopRequireDefault(require("./transportMongoDB"));

var combine = _winston.format.combine,
    timestamp = _winston.format.timestamp,
    json = _winston.format.json,
    prettyPrint = _winston.format.prettyPrint,
    colorize = _winston.format.colorize,
    simple = _winston.format.simple;
var transportHelpers = [new _winston.transports.Console({
  format: simple()
}), new _transportMongoDB.default({
  host: _config.default.host,
  port: _config.default.port,
  dbName: _config.default.dbName
})];
var logger = (0, _winston.createLogger)({
  level: 'info',
  format: combine(colorize(), json(), timestamp({
    format: 'YY-MM-DD HH:mm:ss'
  }), prettyPrint()),
  transports: transportHelpers,
  exceptionHandlers: transportHelpers.concat([new _winston.transports.File({
    filename: 'log/exceptions.log'
  })])
});
var _default = logger;
exports.default = _default;
//# sourceMappingURL=index.js.map