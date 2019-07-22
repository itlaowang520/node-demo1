"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _index = _interopRequireDefault(require("../utils/logger/index"));

function _default(context) {
  _index.default.info('hello!');

  context.body = {
    message: 'hello world!'
  };
}

;
//# sourceMappingURL=index.js.map