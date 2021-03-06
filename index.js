(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mo"] = factory();
	else
		root["Mo"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 帮助方法
 */

var xd = __webpack_require__(4);

var helper = _extends({}, xd);

module.exports = helper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 基础类
 */

var helper = __webpack_require__(0);

var MoBase = function () {
  function MoBase() {
    _classCallCheck(this, MoBase);

    /* 默认属性 */
    this.props = {};
  }

  /* 更新属性 */


  _createClass(MoBase, [{
    key: 'setProp',
    value: function setProp(props) {
      var _this = this;

      helper.forEachObj(props, function (value, prop) {
        _this.props[prop] = value;
      });
    }
  }]);

  return MoBase;
}();

module.exports = MoBase;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 矢量类
 */

var helper = __webpack_require__(0);
var MoBase = __webpack_require__(1);

var MoVector = function (_MoBase) {
  _inherits(MoVector, _MoBase);

  function MoVector(input) {
    _classCallCheck(this, MoVector);

    /* 默认属性 */
    var _this = _possibleConstructorReturn(this, (MoVector.__proto__ || Object.getPrototypeOf(MoVector)).call(this));

    _this.props = {
      x: null,
      y: null,
      z: null
    };

    switch (helper.getType(input)) {
      case 'object':
        {
          var x = input.x,
              y = input.y,
              z = input.z;

          _this._init(x, y, z);
          break;
        }

      case 'array':
        {
          var _input = _slicedToArray(input, 3),
              _x = _input[0],
              _y = _input[1],
              _z = _input[2];

          _this._init(_x, _y, _z);
          break;
        }
    }
    return _this;
  }

  /* 初始化 */


  _createClass(MoVector, [{
    key: '_init',
    value: function _init(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      x = helper.toNum(x);
      y = helper.toNum(y);
      z = helper.toNum(z);

      this.setProp({ x: x, y: y, z: z });
    }

    /* 预处理 */

  }, {
    key: 'mergeVector',


    /* 合并矢量 */
    value: function mergeVector(vector) {
      vector = MoVector.initVector(vector);

      return new MoVector({
        x: this.props.x + vector.props.x,
        y: this.props.y + vector.props.y,
        z: this.props.z + vector.props.z
      });
    }

    /* 获取方向相反的矢量 */

  }, {
    key: 'getOppositeVector',
    value: function getOppositeVector() {
      return new MoVector({
        x: this.props.x * -1,
        y: this.props.y * -1,
        z: this.props.z * -1
      });
    }

    /* 获取平面内垂直的矢量 */

  }, {
    key: 'getVerticalVector',
    value: function getVerticalVector() {
      var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'z';
      var clockwise = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var axes = [];
      var newProps = {};

      switch (axis) {
        case 'x':
          axes = ['y', 'z'];
          break;

        case 'y':
          axes = ['z', 'x'];
          break;

        case 'z':
          axes = ['x', 'y'];
          break;
      }

      newProps[axes[0]] = this.props[axes[1]];
      newProps[axes[1]] = this.props[axes[0]];
      newProps[axis] = this.props[axis];

      if (clockwise) newProps[axes[1]] *= -1;else newProps[axes[0]] *= -1;

      return new MoVector({
        x: newProps.x,
        y: newProps.y,
        z: newProps.z
      });
    }
  }], [{
    key: 'initVector',
    value: function initVector(input) {
      return input instanceof MoVector ? input : new MoVector(input);
    }
  }]);

  return MoVector;
}(MoBase);

module.exports = MoVector;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * Math Object 入口文件
 */

var helper = __webpack_require__(0);
var utils = __webpack_require__(5);
var MoPoint = __webpack_require__(6);
var MoVector = __webpack_require__(2);

var Mo = _extends({}, utils);

Mo.Point = function () {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(MoPoint, [null].concat(params)))();
};
Mo.Vector = function () {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(MoVector, [null].concat(params)))();
};

module.exports = Mo;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["xd"] = factory();
	else
		root["xd"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * 类型模块
 *
 * 
 */

var xdType = {
  getType: function getType(obj) {
    if (Number.isNaN(obj)) return 'nan';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },
  isBool: function isBool(obj) {
    return this.getType(obj) === 'boolean';
  },
  isStr: function isStr(obj) {
    return this.getType(obj) === 'string';
  },
  isNum: function isNum(obj) {
    return this.getType(obj) === 'number';
  },
  isInfinity: function isInfinity(obj) {
    return this.getType(obj) === 'infinity';
  },
  isReg: function isReg(obj) {
    return this.getType(obj) === 'regexp';
  },
  isDate: function isDate(obj) {
    return this.getType(obj) === 'date';
  },
  isNull: function isNull(obj) {
    return this.getType(obj) === 'null';
  },
  isObj: function isObj(obj) {
    return this.getType(obj) === 'object';
  },
  isArr: function isArr(obj) {
    return this.getType(obj) === 'array';
  },
  isFunc: function isFunc(obj) {
    return this.getType(obj) === 'function';
  },
  isDef: function isDef(obj) {
    return this.getType(obj) !== 'undefined';
  },
  isUndef: function isUndef(obj) {
    return this.getType(obj) === 'undefined';
  },
  toBool: function toBool(obj) {
    return !!obj;
  },
  toStr: function toStr(obj) {
    return String(obj);
  },
  toNum: function toNum(obj) {
    return Number(obj);
  },
  objToArr: function objToArr(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
};

module.exports = xdType;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 数组模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdArray = {
  isArrEmpty: function isArrEmpty(arr) {
    return !arr.length;
  },
  isArrEqual: function isArrEqual(arrA, arrB) {
    return JSON.stringify(arrA) === JSON.stringify(arrB);
  },
  cloneArr: function cloneArr(arr) {
    return JSON.parse(JSON.stringify(arr));
  },
  countArrItem: function countArrItem(arr, item) {
    return arr.filter(function (i) {
      return i === item;
    }).length;
  },
  addArrUniqItem: function addArrUniqItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (!arr.includes(item)) arr.push(item);
    });

    return arr;
  },
  removeArrItem: function removeArrItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);
    });

    return arr;
  },
  toggleArrItem: function toggleArrItem(arr, items) {
    if (!xdType.isArr(items)) items = [items];

    items.forEach(function (item) {
      if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);else arr.push(item);
    });

    return arr;
  },
  getArrFirstItem: function getArrFirstItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var result = [];

    for (var i = 0; i < num; i++) {
      result.push(arr[i]);
    }

    return result.length === 1 ? result[0] : result;
  },
  getArrLastItem: function getArrLastItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var result = [];

    for (var i = arr.length - num; i < arr.length; i++) {
      result.push(arr[i]);
    }

    return result.length === 1 ? result[0] : result;
  },
  getArrGreatestItem: function getArrGreatestItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var sortedArr = this.sortArr(arr, 'desc');

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrLeastItem: function getArrLeastItem(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    var sortedArr = this.sortArr(arr);

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrGreatestItemBy: function getArrGreatestItemBy(arr, field) {
    var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var sortedArr = this.sortArrBy(arr, field, 'desc');

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrLeastItemBy: function getArrLeastItemBy(arr, field) {
    var num = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var sortedArr = this.sortArrBy(arr, field);

    return this.getArrFirstItem(sortedArr, num);
  },
  getArrRepeatedItem: function getArrRepeatedItem(arr, times) {
    var counter = new Map();

    arr.forEach(function (item) {
      var key = item;
      var count = void 0;

      if (counter.has(key)) count = counter.get(key) + 1;else count = 1;
      counter.set(key, count);
    });

    var targetArr = [];

    switch (xdType.getType(times)) {
      case 'number':
      case 'string':
        times = xdType.toNum(times);
        counter.forEach(function (count, key) {
          if (count === times) targetArr.push(key);
        });
        break;

      case 'function':
        counter.forEach(function (count, key) {
          if (times(count)) targetArr.push(key);
        });
        break;

      default:
        counter.forEach(function (count, key) {
          targetArr.push(key);
        });
    }

    return targetArr;
  },
  uniqArr: function uniqArr(arr) {
    return this.getArrRepeatedItem(arr);
  },
  unionArr: function unionArr() {
    var _this = this;

    var tmpArr = [];

    for (var _len = arguments.length, arrs = Array(_len), _key = 0; _key < _len; _key++) {
      arrs[_key] = arguments[_key];
    }

    arrs.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this.uniqArr(singleArr));
    });

    return this.getArrRepeatedItem(tmpArr);
  },
  intersectArr: function intersectArr() {
    var _this2 = this;

    var tmpArr = [];

    for (var _len2 = arguments.length, arrs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arrs[_key2] = arguments[_key2];
    }

    arrs.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this2.uniqArr(singleArr));
    });

    return this.getArrRepeatedItem(tmpArr, arrs.length);
  },
  sortArr: function sortArr(arr) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    var targetArr = void 0;
    var isItemsAllNum = arr.every(function (item) {
      return xdType.isNum(item);
    });

    if (isItemsAllNum) targetArr = arr.sort(function (a, b) {
      return a - b;
    });else targetArr = arr.sort();

    if (order === 'desc') targetArr = targetArr.reverse();

    return targetArr;
  },
  sortArrBy: function sortArrBy(arr, field) {
    var order = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';

    var targetArr = arr.sort(function (itemA, itemB) {
      if (itemA[field] > itemB[field]) return 1;else if (itemA[field] < itemB[field]) return -1;else return 0;
    });

    if (order === 'desc') targetArr = targetArr.reverse();

    return targetArr;
  },
  shuffleArr: function shuffleArr(arr) {
    var indexArr = arr.map(function (item, key) {
      return key;
    });
    var targetArr = [];

    while (indexArr.length > 0) {
      var randomIndex = Math.floor(Math.random() * indexArr.length);

      targetArr.push(arr[indexArr[randomIndex]]);
      indexArr.splice(randomIndex, 1);
    }

    return targetArr;
  },
  getArrSample: function getArrSample(arr) {
    var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.getArrFirstItem(this.shuffleArr(arr), num);
  }
};

module.exports = xdArray;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 对象模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdObject = {
  getObjLen: function getObjLen(obj) {
    return Object.keys(obj).length;
  },
  hasObjKey: function hasObjKey(obj, key) {
    return xdType.isDef(obj[key]);
  },
  isObjEmpty: function isObjEmpty(obj) {
    return !this.getObjLen(obj);
  },
  isObjEqual: function isObjEqual(objA, objB) {
    return JSON.stringify(objA) === JSON.stringify(objB);
  },
  cloneObj: function cloneObj(obj) {
    return JSON.parse(JSON.stringify(obj));
  },
  forEachObj: function forEachObj(obj, callback) {
    var keys = Object.keys(obj);

    keys.forEach(function (key) {
      callback(obj[key], key, obj);
    });

    return keys.length;
  },
  mapObj: function mapObj(obj, callback) {
    var keys = Object.keys(obj);

    return keys.map(function (key) {
      return callback(obj[key], key, obj);
    });
  }
};

module.exports = xdObject;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 链式操作模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdChain = {
  chain: function chain() {
    var _this = this;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length <= 1) return args[0];

    var major = args.shift();

    args.forEach(function (ring) {
      var func = void 0;
      var params = void 0;

      if (xdType.isArr(ring)) {
        func = ring.shift();
        params = [major].concat(_toConsumableArray(ring));
      } else {
        func = ring;
        params = [major];
      }

      if (xdType.isFunc(_this[func])) {
        func = _this[func].bind(_this);
      }

      major = func.apply(undefined, _toConsumableArray(params));
    });

    return major;
  }
};

module.exports = xdChain;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 设备类型模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdDevice = {
  getUserAgent: function getUserAgent() {
    return xdType.isDef(window) ? window.navigator.userAgent : '';
  },
  isMobile: function isMobile() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/mobile/i.test(userAgent)
    );
  },
  isPhone: function isPhone() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return this.isMobile(userAgent) && !this.isPad(userAgent);
  },
  isPad: function isPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/pad/i.test(userAgent)
    );
  },
  isAndroid: function isAndroid() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/Android/i.test(userAgent)
    );
  },
  isiOS: function isiOS() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return this.isiPhone(userAgent) || this.isiPad(userAgent) || this.isiPod(userAgent);
  },
  isiPhone: function isiPhone() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPhone/.test(userAgent) && !/iPod/.test(userAgent)
    );
  },
  isiPad: function isiPad() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPad/.test(userAgent)
    );
  },
  isiPod: function isiPod() {
    var userAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getUserAgent();

    return (/iPod/.test(userAgent)
    );
  }
};

module.exports = xdDevice;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 函数模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdFunction = {
  safelyRun: function safelyRun(func) {
    var result = null;

    if (xdType.isFunc(func)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      result = func.apply(undefined, _toConsumableArray(args));
    }

    return result;
  }
};

module.exports = xdFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * 算术模块
 *
 * 
 */

var xdType = __webpack_require__(0);
var xdArr = __webpack_require__(1);

var xdMath = {
  getSum: function getSum() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result + xdType.toNum(num);
    });
  },
  getProduct: function getProduct() {
    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    return arr.reduce(function (result, num) {
      return result * xdType.toNum(num);
    });
  },
  getMean: function getMean() {
    for (var _len3 = arguments.length, arr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    var sum = this.getSum(arr);
    var count = arr.length;

    return sum / count;
  },
  getMedium: function getMedium() {
    for (var _len4 = arguments.length, arr = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      arr[_key4] = arguments[_key4];
    }

    if (xdType.isArr(arr[0])) arr = arr[0];

    var sortedArr = xdArr.sortArr(arr);
    var result = void 0;

    if (sortedArr.length % 2) {
      result = sortedArr[(sortedArr.length - 1) / 2];
    } else {
      var mediumA = sortedArr[sortedArr.length / 2 - 1];
      var mediumB = sortedArr[sortedArr.length / 2];
      result = this.getMean(mediumA, mediumB);
    }

    return result;
  },
  getRandom: function getRandom(range) {
    var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    var random = this.map(Math.random(), [0, 1], range);

    return decimal === -1 ? random : random.toFixed(decimal);
  },
  mapRange: function mapRange(num, rangeA, rangeB) {
    num = xdType.toNum(num);

    var _rangeA$map = rangeA.map(xdType.toNum),
        _rangeA$map2 = _slicedToArray(_rangeA$map, 2),
        startA = _rangeA$map2[0],
        endA = _rangeA$map2[1];

    var _rangeB$map = rangeB.map(xdType.toNum),
        _rangeB$map2 = _slicedToArray(_rangeB$map, 2),
        startB = _rangeB$map2[0],
        endB = _rangeB$map2[1];

    return startB + (num - startA) / (endA - startA) * (endB - startB);
  }
};

module.exports = xdMath;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 字符串模块
 *
 * 
 */

var xdType = __webpack_require__(0);

var xdString = {
  _preProcessStringModulesParams: function _preProcessStringModulesParams() {
    var strs = [];
    var force = false;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (xdType.isArr(args[0])) {
      strs = args[0];
      if (xdType.isDef(args[1])) force = args[1];
    } else {
      if (xdType.isBool(args[args.length - 1])) {
        force = args[args.length - 1];
        args.pop();
      }
      strs = args;
    }

    return { strs: strs, force: force };
  },
  isStrEmpty: function isStrEmpty(str) {
    return !str.length;
  },
  capitalize: function capitalize(str) {
    var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (force) str = str.toLowerCase();
    return str.replace(/\b[a-z]/g, function (s) {
      return s.toUpperCase();
    });
  },
  camelCase: function camelCase() {
    var _this = this;

    var _preProcessStringModu = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu.strs,
        force = _preProcessStringModu.force;

    return strs.map(function (str, index) {
      if (force) str = str.toLowerCase();
      return index ? _this.capitalize(str) : str;
    }).join('');
  },
  capitalCamelCase: function capitalCamelCase() {
    var _this2 = this;

    var _preProcessStringModu2 = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu2.strs,
        force = _preProcessStringModu2.force;

    return strs.map(function (str) {
      if (force) str = str.toLowerCase();
      return _this2.capitalize(str);
    }).join('');
  },
  kebabCase: function kebabCase() {
    var _preProcessStringModu3 = this._preProcessStringModulesParams.apply(this, arguments),
        strs = _preProcessStringModu3.strs,
        force = _preProcessStringModu3.force;

    if (force) strs = strs.map(function (str) {
      return str.toLowerCase();
    });
    return strs.join('-');
  },
  fillZero: function fillZero(num) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    var numText = xdType.toStr(num);
    var result = void 0;

    switch (direction) {
      case 'left':
        result = numText.padStart(width, '0');
        break;

      case 'right':
        result = numText.padEnd(width, '0');
        break;
    }

    return result;
  }
};

module.exports = xdString;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * url模块
 *
 * 
 */

var xdObj = __webpack_require__(2);
var xdType = __webpack_require__(0);

var xdUrl = {
  buildQueryStr: function buildQueryStr(queryObj) {
    var queryArr = [];

    xdObj.forEachObj(queryObj, function (val, key) {
      queryArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    });

    return queryArr.length ? '?' + queryArr.join('&') : '';
  },
  getQueryParam: function getQueryParam(url) {
    var queryArr = void 0;
    var queryObj = {};

    if (!url && xdType.isDef(window)) url = window.location.search;

    if (!url) queryArr = [];else if (url.startsWith('?')) queryArr = url.slice(1).split('&');else queryArr = url.split('&');

    queryArr.forEach(function (item) {
      var _item$split = item.split('='),
          _item$split2 = _slicedToArray(_item$split, 2),
          key = _item$split2[0],
          val = _item$split2[1];

      queryObj[key] = xdType.isNum(xdType.toNum(val)) ? xdType.toNum(val) : val;
    });

    return queryObj;
  }
};

module.exports = xdUrl;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 入口文件
 *
 * 
 */

var xdArray = __webpack_require__(1);
var xdChain = __webpack_require__(3);
var xdDevice = __webpack_require__(4);
var xdFunction = __webpack_require__(5);
var xdMath = __webpack_require__(6);
var xdObject = __webpack_require__(2);
var xdString = __webpack_require__(7);
var xdType = __webpack_require__(0);
var xdUrl = __webpack_require__(8);

var xd = _extends({}, xdArray, xdChain, xdDevice, xdFunction, xdMath, xdObject, xdString, xdType, xdUrl);

module.exports = xd;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 功能方法
 */

var helper = __webpack_require__(0);

var utils = {

  /* 获取相反数 */
  getOpposite: function getOpposite(num) {
    return helper.toNum(num) * -1;
  },


  /* 获取倒数 */
  getReciprocal: function getReciprocal(num) {
    return 1 / helper.toNum(num);
  },


  /* 获取因数 */
  getDivisors: function getDivisors(num) {
    num = Math.abs(helper.toNum(num));
    var divisors = [];
    var i = 2;

    if (Number.isFinite(num)) {
      while (i <= num) {
        // 第五百个质数：3571
        if (i > 3571) {
          divisors.push(num);
          break;
        } else if (i === num) {
          divisors.push(i);
          break;
        }

        if (num % i === 0) {
          divisors.push(i);
          num /= i;
        } else {
          i++;
        }
      }
    }

    return divisors;
  },


  /* 获取最大公因数 */
  getGreatestCommonDivisor: function getGreatestCommonDivisor() {
    var _this = this;

    for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
      nums[_key] = arguments[_key];
    }

    if (helper.isArr(nums[0])) nums = nums[0];

    var divisors = nums.filter(function (num) {
      return Number.isFinite(num);
    }).map(function (num) {
      return _this.getDivisors(num);
    });
    var commonDivisors = [];

    helper.intersectArr.apply(helper, _toConsumableArray(divisors)).forEach(function (num) {
      var counts = divisors.map(function (arr) {
        return helper.countArrItem(arr, num);
      });
      commonDivisors.push.apply(commonDivisors, _toConsumableArray(new Array(Math.min.apply(Math, _toConsumableArray(counts))).fill(num)));
    });

    return commonDivisors.length ? commonDivisors.reduce(function (sum, val) {
      return sum * val;
    }) : 1;
  },


  /* 获取最小公倍数 */
  getLeastCommonMultiple: function getLeastCommonMultiple() {
    var _this2 = this;

    for (var _len2 = arguments.length, nums = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      nums[_key2] = arguments[_key2];
    }

    if (helper.isArr(nums[0])) nums = nums[0];
    if (nums.findIndex(function (num) {
      return !Number.isFinite(num);
    }) > -1) return Infinity;

    var divisors = nums.map(function (num) {
      return _this2.getDivisors(num);
    });
    var allDivisors = [];

    helper.unionArr.apply(helper, _toConsumableArray(divisors)).forEach(function (num) {
      var counts = divisors.map(function (arr) {
        return helper.countArrItem(arr, num);
      });
      allDivisors.push.apply(allDivisors, _toConsumableArray(new Array(Math.max.apply(Math, _toConsumableArray(counts))).fill(num)));
    });

    return allDivisors.length ? allDivisors.reduce(function (sum, val) {
      return sum * val;
    }) : 1;
  }
};

module.exports = utils;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 点类
 */

var helper = __webpack_require__(0);
var MoBase = __webpack_require__(1);
var MoVector = __webpack_require__(2);

var MoPoint = function (_MoBase) {
  _inherits(MoPoint, _MoBase);

  function MoPoint(input) {
    _classCallCheck(this, MoPoint);

    /* 默认属性 */
    var _this = _possibleConstructorReturn(this, (MoPoint.__proto__ || Object.getPrototypeOf(MoPoint)).call(this));

    _this.props = {
      x: null,
      y: null,
      z: null
    };

    switch (helper.getType(input)) {
      case 'object':
        {
          var x = input.x,
              y = input.y,
              z = input.z;

          _this._init(x, y, z);
          break;
        }

      case 'array':
        {
          var _input = _slicedToArray(input, 3),
              _x = _input[0],
              _y = _input[1],
              _z = _input[2];

          _this._init(_x, _y, _z);
          break;
        }
    }
    return _this;
  }

  /* 初始化 */


  _createClass(MoPoint, [{
    key: '_init',
    value: function _init(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      x = helper.toNum(x);
      y = helper.toNum(y);
      z = helper.toNum(z);

      this.setProp({ x: x, y: y, z: z });
    }

    /* 预处理 */

  }, {
    key: 'getDistanceByPoint',


    /* 获取点到点的距离 */
    value: function getDistanceByPoint(point) {
      point = MoPoint.initPoint(point);

      return Math.pow(Math.pow(this.props.x - point.props.x, 2) + Math.pow(this.props.y - point.props.y, 2) + Math.pow(this.props.z - point.props.z, 2), 0.5);
    }

    /* 根据矢量获取给定距离的点 */

  }, {
    key: 'getPointByVector',
    value: function getPointByVector(vector, distance) {
      vector = MoVector.initVector(vector);
      distance = helper.toNum(distance);

      // (ax)2+(bx)2+(cx)2=y2
      var unit = Math.pow(Math.pow(distance, 2) / (Math.pow(vector.props.x, 2) + Math.pow(vector.props.y, 2) + Math.pow(vector.props.z, 2)), 0.5);

      if (!Number.isFinite(unit)) unit = 0;

      return new MoPoint({
        x: this.props.x + vector.props.x * unit,
        y: this.props.y + vector.props.y * unit,
        z: this.props.z + vector.props.z * unit
      });
    }

    /* 根据点获取给定比例的点 */

  }, {
    key: 'getPointByPoint',
    value: function getPointByPoint(point, ratio) {
      point = MoPoint.initPoint(point);
      ratio = helper.toNum(ratio);

      return new MoPoint({
        x: this.props.x * (1 - ratio) + point.props.x * ratio,
        y: this.props.y * (1 - ratio) + point.props.y * ratio,
        z: this.props.z * (1 - ratio) + point.props.z * ratio
      });
    }

    /* 根据点获取中点 */

  }, {
    key: 'getMiddlePointByPoint',
    value: function getMiddlePointByPoint(point) {
      return this.getPointByPoint(point, 0.5);
    }

    /* 根据点获取连线两侧的点 */

  }, {
    key: 'getPointsBesideConnection',
    value: function getPointsBesideConnection(point, firstRatio, secondRatio) {
      point = MoPoint.initPoint(point);
      var specificPoint = this.getPointByPoint(point, firstRatio);
      var distance = this.getDistanceByPoint(point);
      var vector = this.getVectorByPoint(point);
      var verticalVector = vector.getVerticalVector();
      var oppositeVector = verticalVector.getOppositeVector();

      return [specificPoint.getPointByVector(verticalVector, distance * secondRatio), specificPoint.getPointByVector(oppositeVector, distance * secondRatio)];
    }

    /* 根据点获取中点两侧的点 */

  }, {
    key: 'getPointsBesideMiddlePoint',
    value: function getPointsBesideMiddlePoint(point, ratio) {
      return this.getPointsBesideConnection(point, 0.5, ratio);
    }

    /* 根据点获取矢量 */

  }, {
    key: 'getVectorByPoint',
    value: function getVectorByPoint(point) {
      point = MoPoint.initPoint(point);

      return new MoVector({
        x: point.props.x - this.props.x,
        y: point.props.y - this.props.y,
        z: point.props.z - this.props.z
      });
    }
  }], [{
    key: 'initPoint',
    value: function initPoint(input) {
      return input instanceof MoPoint ? input : new MoPoint(input);
    }
  }]);

  return MoPoint;
}(MoBase);

module.exports = MoPoint;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map