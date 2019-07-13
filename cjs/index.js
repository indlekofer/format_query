"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(obj) {
  var parts = [];

  for (var i in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, i) && typeof obj[i] !== 'undefined') {
      parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
    }
  }

  return parts.join('&');
};

exports["default"] = _default;