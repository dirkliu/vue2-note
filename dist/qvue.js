(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.qvue = global.qvue || {}, global.qvue.js = {})));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Dep = // static count
  function Dep() {
    _classCallCheck(this, Dep);

    this.id = ++this.constructor.count;
  };

  function defineReactive(obj, key) {
    var dep = new Dep();
    Object.defineProperty(obj, key, {
      get: function get() {
        return obj[key];
      },
      set: function set() {
        obj[key] = value;
      }
    });
  }

  exports.defineReactive = defineReactive;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
