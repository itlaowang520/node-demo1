"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _index = require("../index");

var _mongodb = require("mongodb");

var collectionName = 'hospital';

var getList = function () {
  var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _index.getCollection)(collectionName).find().sort({
              'updateTime': -1
            }).toArray());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getList() {
    return _ref.apply(this, arguments);
  };
}();

var addItem = function () {
  var _ref2 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
    var data,
        newData,
        _args2 = arguments;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            newData = (0, _objectSpread2.default)({}, data);
            newData.creatTime = new Date().getTime();
            newData.updateTime = new Date().getTime();
            return _context2.abrupt("return", (0, _index.getCollection)(collectionName).insertOne(newData));

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addItem() {
    return _ref2.apply(this, arguments);
  };
}();

var deleteItem = function () {
  var _ref3 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee3() {
    var param,
        _args3 = arguments;
    return _regenerator.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            param = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
            return _context3.abrupt("return", (0, _index.getCollection)(collectionName).findOneAndDelete(param));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteItem() {
    return _ref3.apply(this, arguments);
  };
}();

var deleteItemById = function () {
  var _ref4 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee4(id) {
    return _regenerator.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", deleteItem({
              _id: (0, _mongodb.ObjectId)(id)
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteItemById(_x) {
    return _ref4.apply(this, arguments);
  };
}();

var getItemById = function () {
  var _ref5 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee5(id) {
    return _regenerator.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            return _context5.abrupt("return", (0, _index.getCollection)(collectionName).findOne({
              _id: (0, _mongodb.ObjectId)(id)
            }));

          case 1:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getItemById(_x2) {
    return _ref5.apply(this, arguments);
  };
}();

var updateItem = function () {
  var _ref6 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee6() {
    var param,
        newData,
        _args6 = arguments;
    return _regenerator.default.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            param = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : {};
            newData = _args6.length > 1 && _args6[1] !== undefined ? _args6[1] : {};
            newData.updateTime = new Date().getTime();
            return _context6.abrupt("return", (0, _index.getCollection)(collectionName).findOneAndUpdate(param, {
              $set: newData
            }));

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function updateItem() {
    return _ref6.apply(this, arguments);
  };
}();

var updateItemById = function () {
  var _ref7 = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee7(id, newData) {
    return _regenerator.default.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            return _context7.abrupt("return", updateItem({
              _id: (0, _mongodb.ObjectId)(id)
            }, newData));

          case 1:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateItemById(_x3, _x4) {
    return _ref7.apply(this, arguments);
  };
}();

var MonitorConfigModel = {
  getList: getList,
  addItem: addItem,
  deleteItemById: deleteItemById,
  updateItemById: updateItemById,
  getItemById: getItemById
};
var _default = MonitorConfigModel;
exports.default = _default;
//# sourceMappingURL=index.js.map