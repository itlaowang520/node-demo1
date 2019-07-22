"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pageFormatter = void 0;

var pageFormatter = function pageFormatter(list, pageSize, pageNo) {
  return list.slice((pageNo - 1) * pageSize, pageNo * pageSize);
};

exports.pageFormatter = pageFormatter;
//# sourceMappingURL=utils.js.map