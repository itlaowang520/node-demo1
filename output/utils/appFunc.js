"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = _interopRequireDefault(require("./logger/index"));

var _default = {
  isEmptyObject: function isEmptyObject(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
      return !obj.length;
    }

    if (Object.prototype.toString.call(obj) === '[object Object]') {
      for (var t in obj) {
        return false;
      }

      return true;
    }

    return !obj;
  },
  parseQueryString: function parseQueryString(url) {
    var regUrl = /\?([\w\W]+)$/,
        arrUrl = regUrl.exec(url),
        result = {};

    if (arrUrl && arrUrl[1]) {
      var paramString = arrUrl[1],
          params = paramString.split('&');

      for (var i = 0; i < params.length; i++) {
        var param = params[i].split('=');

        if (param.length > 2) {
          param[1] += '=';
        }

        result[param[0]] = param[1];
      }

      return result;
    }

    return result;
  },
  serializeObject: function serializeObject(obj) {
    if (Object.prototype.toString.call(obj) !== '[object Object]') return obj;
    var resultArray = [],
        separator = '&';

    for (var prop in obj) {
      if (Object.prototype.toString.call(obj[prop]) === '[object Array]') {
        var toPush = [];

        for (var i = 0; i < obj[prop].length; i++) {
          toPush.push(prop + '=' + obj[prop][i]);
        }

        resultArray.push(toPush.join(separator));
      } else {
        resultArray.push(prop + '=' + obj[prop]);
      }
    }

    return resultArray.join(separator);
  },
  log: function log(content) {
    _index.default.info("".concat(content));
  }
};
exports.default = _default;
//# sourceMappingURL=appFunc.js.map