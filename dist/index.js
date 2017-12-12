(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mo"] = factory();
	else
		root["mo"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

var xd = __webpack_require__(7);

var helper = _extends({}, xd);

module.exports = helper;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 数字类
 */

var helper = __webpack_require__(0);
var util = __webpack_require__(3);
var MoBase = __webpack_require__(2);

var MoNumber = function (_MoBase) {
  _inherits(MoNumber, _MoBase);

  function MoNumber(input) {
    _classCallCheck(this, MoNumber);

    /* 默认属性 */
    var _this = _possibleConstructorReturn(this, (MoNumber.__proto__ || Object.getPrototypeOf(MoNumber)).call(this));

    _this.props = {
      sign: null, // 符号
      numerator: null, // 分子
      denominator: null // 分母
    };

    if (input instanceof MoNumber) {
      _this.setProp({
        sign: input.props.sign,
        numerator: input.props.numerator,
        denominator: input.props.denominator
      });
    } else {
      switch (helper.getType(input)) {
        case 'object':
          var options = input;
          if (!_this._checkNumsLegal(options.numerator, options.denominator)) return _possibleConstructorReturn(_this);
          _this._initNum(options.numerator, options.denominator, options.sign);
          break;

        case 'number':
        case 'string':
        default:
          if (!_this._checkNumsLegal(input)) return _possibleConstructorReturn(_this);
          _this._initNum(input);
      }
    }
    return _this;
  }

  /* 检查数字是否合法 */


  _createClass(MoNumber, [{
    key: '_checkNumsLegal',
    value: function _checkNumsLegal() {
      for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
        nums[_key] = arguments[_key];
      }

      if (helper.isArr(nums[0])) nums = nums[0];

      return nums.every(function (num) {
        return util.checkNumLegal(num);
      });
    }

    /* 初始化数字 */

  }, {
    key: '_initNum',
    value: function _initNum(numerator) {
      var denominator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      numerator = util.parseNum(numerator);
      denominator = util.parseNum(denominator);

      this._handleSign(numerator, denominator, sign);

      numerator = util.dropSign(numerator);
      denominator = util.dropSign(denominator);

      this._handleFraction(numerator, denominator, this.props.sign);
    }

    /* 处理正负 */

  }, {
    key: '_handleSign',
    value: function _handleSign(numerator, denominator, sign) {
      sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign));

      this.setProp({ sign: sign });
    }

    /* 处理分数 */

  }, {
    key: '_handleFraction',
    value: function _handleFraction(numerator, denominator, sign) {
      var decimalDigit = Math.max(util.getDecimalDigit(numerator), util.getDecimalDigit(denominator));

      numerator = helper.multiply(numerator, 10, decimalDigit);
      denominator = helper.multiply(denominator, 10, decimalDigit);

      var greatestCommonDivisor = util.getGreatestCommonDivisor(numerator, denominator);

      numerator = numerator / greatestCommonDivisor;
      denominator = denominator / greatestCommonDivisor;

      var infinityProcResult = this._handleInfinity(numerator, denominator, sign);

      numerator = infinityProcResult.numerator;
      denominator = infinityProcResult.denominator;
      sign = infinityProcResult.sign;

      this.setProp({ numerator: numerator, denominator: denominator, sign: sign });
    }

    /* 处理零、无穷大等极端情况 */

  }, {
    key: '_handleInfinity',
    value: function _handleInfinity(numerator, denominator, sign) {
      if (util.isZero(numerator) && util.isZero(denominator)) {
        numerator = 1;
        denominator = 1;

        if (sign === 'zero') sign = util.getNumsSign(numerator, denominator);else sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign));
      } else if (util.isInfinity(numerator) && util.isInfinity(denominator)) {
        numerator = 1;
        denominator = 1;
        sign = util.getNumsSign();
      } else {
        if (util.isZero(denominator)) numerator *= Infinity;
        if (util.isInfinity(numerator)) {
          denominator = 1;

          if (sign === 'zero') sign = util.getNumsSign(numerator, denominator);else sign = util.getNumsSign(numerator, denominator, util.signStrToNum(sign));
        }
        if (util.isInfinity(denominator)) numerator = 0;
        if (util.isZero(numerator)) {
          denominator = 1;
          sign = 'zero';
        }
      }

      return { numerator: numerator, denominator: denominator, sign: sign };
    }

    /* 获取值 */

  }, {
    key: 'getVal',
    value: function getVal() {
      var _props = this.props,
          sign = _props.sign,
          numerator = _props.numerator,
          denominator = _props.denominator;


      return numerator / denominator * util.signStrToNum(sign);
    }

    /* 判断是否为正 */

  }, {
    key: 'isPositive',
    value: function isPositive() {
      return this.props.sign === 'positive';
    }

    /* 判断是否为负 */

  }, {
    key: 'isNegative',
    value: function isNegative() {
      return this.props.sign === 'negative';
    }

    /* 判断是否为零 */

  }, {
    key: 'isZero',
    value: function isZero() {
      return this.props.sign === 'zero';
    }

    /* 判断是否整数 */

  }, {
    key: 'isInteger',
    value: function isInteger() {
      return this.props.denominator === 1 && !util.isInfinity(this.props.numerator);
    }

    /* 判断是否分数 */

  }, {
    key: 'isDecimal',
    value: function isDecimal() {
      return this.props.denominator !== 1;
    }

    /* 判断是否相等 */

  }, {
    key: 'isEqual',
    value: function isEqual(input) {
      var target = new MoNumber(input);

      return this.props.sign === target.props.sign && this.props.numerator === target.props.numerator && this.props.denominator === target.props.denominator;
    }

    /* 判断是否不相等 */

  }, {
    key: 'isNotEqual',
    value: function isNotEqual(input) {
      var target = new MoNumber(input);

      return this.props.sign !== target.props.sign || this.props.numerator !== target.props.numerator || this.props.denominator !== target.props.denominator;
    }

    /* 获取绝对值 */

  }, {
    key: 'getAbsoluteVal',
    value: function getAbsoluteVal() {
      var options = _extends({}, this.props);
      var signMap = {
        positive: 'positive',
        negative: 'positive',
        zero: 'zero'
      };

      options.sign = signMap[options.sign] || options.sign;

      return new MoNumber(options);
    }

    /* 获取相反数 */

  }, {
    key: 'getOppositeNum',
    value: function getOppositeNum() {
      var options = _extends({}, this.props);
      var signMap = {
        positive: 'negative',
        negative: 'positive',
        zero: 'zero'
      };

      options.sign = signMap[options.sign] || options.sign;

      return new MoNumber(options);
    }

    /* 获取倒数 */

  }, {
    key: 'getReciprocal',
    value: function getReciprocal() {
      var options = _extends({}, this.props);

      options.numerator = this.props.denominator;
      options.denominator = this.props.numerator;
      options.sign = this.props.sign;

      var infinityProcResult = this._handleInfinity(options.numerator, options.denominator, options.sign);

      options.numerator = infinityProcResult.numerator;
      options.denominator = infinityProcResult.denominator;
      options.sign = infinityProcResult.sign;

      return new MoNumber(options);
    }

    /* 加法 */

  }, {
    key: 'add',
    value: function add(input) {
      var target = new MoNumber(input);
      var denominator = util.getLowestCommonMultiple(this.props.denominator, target.props.denominator);
      var thisNumerator = this.props.numerator * (denominator / this.props.denominator) * util.signStrToNum(this.props.sign);
      var targetNumerator = target.props.numerator * (denominator / target.props.denominator) * util.signStrToNum(target.props.sign);
      var numerator = thisNumerator + targetNumerator;
      var infinityProcResult = this._handleInfinity(numerator, denominator);

      numerator = infinityProcResult.numerator;
      denominator = infinityProcResult.denominator;

      return new MoNumber({ numerator: numerator, denominator: denominator });
    }

    /* 减法：加法的逆运算 */

  }, {
    key: 'minus',
    value: function minus(input) {
      var target = new MoNumber(input);

      return this.add(target.getOppositeNum());
    }

    /* 乘法 */

  }, {
    key: 'multiply',
    value: function multiply(input) {
      var target = new MoNumber(input);
      var numerator = this.props.numerator * target.props.numerator;
      var denominator = this.props.denominator * target.props.denominator;
      var sign = util.getNumsSign(util.signStrToNum(this.props.sign), util.signStrToNum(target.props.sign));
      var infinityProcResult = this._handleInfinity(numerator, denominator, sign);

      numerator = infinityProcResult.numerator;
      denominator = infinityProcResult.denominator;
      sign = infinityProcResult.sign;

      return new MoNumber({ sign: sign, numerator: numerator, denominator: denominator });
    }

    /* 除法：乘法的逆运算 */

  }, {
    key: 'devide',
    value: function devide(input) {
      var target = new MoNumber(input);

      return this.multiply(target.getReciprocal());
    }

    /* 乘方（幂、指数运算） */

  }, {
    key: 'power',
    value: function power(input) {
      var exponent = util.parseNum(input);
      var numerator = Math.pow(this.props.numerator, exponent);
      var denominator = Math.pow(this.props.denominator, exponent);
      var sign = util.getNumsSign(new Array(exponent).fill(util.signStrToNum(this.props.sign)));
      var infinityProcResult = this._handleInfinity(numerator, denominator, sign);

      numerator = infinityProcResult.numerator;
      denominator = infinityProcResult.denominator;
      sign = infinityProcResult.sign;

      return new MoNumber({ sign: sign, numerator: numerator, denominator: denominator });
    }
  }]);

  return MoNumber;
}(MoBase);

module.exports = MoNumber;

/***/ }),
/* 2 */
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * 功能方法
 */

var helper = __webpack_require__(0);

/* 正则规则 */
var rules = {
  number: /^[+-]?[\s]*([\d\s]+\.?[\d\s]*|Infinity)[\s]*$/, // 数字 或 字符串类型数字
  infinity: /^[+-]?[\s]*Infinity[\s]*$/, // 无穷大
  zero: /^[+-]?0$/, // 零
  positive: /^\+?[^-]/, // 正数
  negative: /^-/, // 负数
  sign: /^[+-]?/, // 符号
  integer: /^\d+$/, // 整数
  decimal: /^\d+\.\d+$/, // 小数
  decimalDigit: /^\d+\.(\d+)$/ // 小数位数


  /* 符号对应关系 */
};var signStrNumMap = {
  positive: 1,
  negative: -1,
  zero: 0
};

var util = {

  /* 将输入数字转化为数字类型 */
  parseNum: function parseNum(inputNum) {
    var num = void 0;

    switch (helper.getType(inputNum)) {
      case 'number':
      case 'Infinity':
        num = inputNum;
        break;

      case 'string':
        num = helper.toNum(inputNum.replace(/\s/g, ''));
        break;
    }

    return num;
  },


  /* 将输入数字转化为字符串类型 */
  parseNumStr: function parseNumStr(inputNum) {
    return helper.toStr(this.parseNum(inputNum));
  },


  /* 检查数字是否合法 */
  checkNumLegal: function checkNumLegal(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return rules.number.test(numStr);
  },


  /* 获取符号对应数字 */
  signStrToNum: function signStrToNum(inputStr) {
    return signStrNumMap[inputStr];
  },


  /* 获取符号对应字符串 */
  signNumToStr: function signNumToStr(inputNum) {
    var num = this.parseNum(inputNum);
    var targetStr = void 0;

    helper.forEachObj(signStrNumMap, function (signNum, signStr) {
      if (num === signNum) targetStr = signStr;
    });

    return targetStr;
  },


  /* 判断符号：零、正、负 */
  getSign: function getSign(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    if (rules.zero.test(numStr)) {
      return 'zero';
    } else if (rules.positive.test(numStr)) {
      return 'positive';
    } else if (rules.negative.test(numStr)) {
      return 'negative';
    }
  },


  /* 判断多个数字合并后的符号 */
  getNumsSign: function getNumsSign() {
    var _this = this;

    for (var _len = arguments.length, inputNums = Array(_len), _key = 0; _key < _len; _key++) {
      inputNums[_key] = arguments[_key];
    }

    if (helper.isArr(inputNums[0])) inputNums = inputNums[0];

    var sign = void 0;
    var signs = inputNums.map(function (inputNum) {
      return _this.getSign(inputNum);
    });

    if (signs.includes('zero')) sign = 'zero';else sign = this.signNumToStr(helper.multiply(1, -1, helper.countArrItem(signs, 'negative')));

    return sign;
  },


  /* 去掉符号 */
  dropSign: function dropSign(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return helper.toNum(numStr.replace(rules.sign, ''));
  },


  /* 判断是否无限大 */
  isInfinity: function isInfinity(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return rules.infinity.test(numStr);
  },


  /* 判断是否为零 */
  isZero: function isZero(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return this.getSign(numStr) === 'zero';
  },


  /* 判断是否为正 */
  isPositive: function isPositive(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return this.getSign(numStr) === 'positive';
  },


  /* 判断是否为负 */
  isNegative: function isNegative(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return this.getSign(numStr) === 'negative';
  },


  /* 判断是否整数 */
  isInteger: function isInteger(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return rules.integer.test(numStr);
  },


  /* 判断是否为小数 */
  isDecimal: function isDecimal(inputNum) {
    var numStr = this.parseNumStr(inputNum);

    return rules.decimal.test(numStr);
  },


  /* 获取小数位数 */
  getDecimalDigit: function getDecimalDigit(inputNum) {
    var numStr = this.parseNumStr(inputNum);
    var match = numStr.match(rules.decimalDigit);

    return helper.toBool(match) ? match[1].length : 0;
  },


  /* 获取因数 */
  getDivisor: function getDivisor(inputNum) {
    var num = Math.abs(this.parseNum(inputNum));
    var divisor = [];
    var i = 2;

    if (this.isInfinity(num)) return divisor;

    while (i <= num) {
      if (i === num) {
        divisor.push(i);
        i++;
      } else if (num % i === 0) {
        divisor.push(i);
        num /= i;
      } else {
        i++;
      }
    }

    return divisor;
  },


  /* 获取最大公因数（公约数） */
  getGreatestCommonDivisor: function getGreatestCommonDivisor() {
    var _this2 = this;

    for (var _len2 = arguments.length, inputNums = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      inputNums[_key2] = arguments[_key2];
    }

    if (helper.isArr(inputNums[0])) inputNums = inputNums[0];

    var divisors = inputNums.filter(function (num) {
      return !_this2.isInfinity(num);
    }).map(function (num) {
      return _this2.getDivisor(num);
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
  getLowestCommonMultiple: function getLowestCommonMultiple() {
    var _this3 = this;

    for (var _len3 = arguments.length, inputNums = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      inputNums[_key3] = arguments[_key3];
    }

    if (helper.isArr(inputNums[0])) inputNums = inputNums[0];
    if (inputNums.findIndex(function (num) {
      return _this3.isInfinity(num);
    }) > -1) return Infinity;

    var divisors = inputNums.map(function (num) {
      return _this3.getDivisor(num);
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

module.exports = util;

/***/ }),
/* 4 */
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
var MoBase = __webpack_require__(2);
var MoNumber = __webpack_require__(1);

var MoDot = function (_MoBase) {
  _inherits(MoDot, _MoBase);

  function MoDot(input) {
    _classCallCheck(this, MoDot);

    /* 默认属性 */
    var _this = _possibleConstructorReturn(this, (MoDot.__proto__ || Object.getPrototypeOf(MoDot)).call(this));

    _this.props = {
      x: null,
      y: null,
      z: null
    };

    if (input instanceof MoDot) {
      _this.setProp({
        x: input.props.x,
        y: input.props.y,
        z: input.props.z
      });
    } else {
      switch (helper.getType(input)) {
        case 'object':
          var props = input;
          _this.setProp({
            x: props.x,
            y: props.y,
            z: props.z
          });
          break;

        case 'array':
          var _input = _slicedToArray(input, 3),
              x = _input[0],
              y = _input[1],
              z = _input[2];

          _this._initDot(x, y, z);
          break;
      }
    }
    return _this;
  }

  /* 初始化点 */


  _createClass(MoDot, [{
    key: '_initDot',
    value: function _initDot(x, y) {
      var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

      this.setProp({ x: x, y: y, z: z });
    }
  }]);

  return MoDot;
}(MoBase);

module.exports = MoDot;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Math Object 入口文件
 */

var config = __webpack_require__(6);
var helper = __webpack_require__(0);
var util = __webpack_require__(3);
var MoNumber = __webpack_require__(1);
var MoDot = __webpack_require__(4);
var MoLine = __webpack_require__(8);
var moFraction = __webpack_require__(9);

/* 返回 math object 对象 */

var mo = function mo() {
  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(MoNumber, [null].concat(params)))();
};

mo.Number = function () {
  for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    params[_key2] = arguments[_key2];
  }

  return new (Function.prototype.bind.apply(MoNumber, [null].concat(params)))();
};
mo.Dot = function () {
  for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    params[_key3] = arguments[_key3];
  }

  return new (Function.prototype.bind.apply(MoDot, [null].concat(params)))();
};
mo.Line = function () {
  for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    params[_key4] = arguments[_key4];
  }

  return new (Function.prototype.bind.apply(MoLine, [null].concat(params)))();
};

mo.fraction = moFraction;

/* 功能方法 */

helper.forEachObj(util, function (func, name) {
  mo[name] = func;
});

module.exports = mo;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 配置文件
 */

var ENV = "prod";
var DEV = 'dev';
var PROD = 'prod';

var config = {
  isDev: function isDev() {
    return ENV === DEV;
  },
  isNotDev: function isNotDev() {
    return ENV !== DEV;
  }
};

module.exports = config;

/***/ }),
/* 7 */
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(config) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 构造类
 * 
 */

var XdModule = function () {
  function XdModule() {
    var funcs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, XdModule);

    this.funcs = funcs;
    this.outputModule = {};

    this.injectFuncs();
    this.freezeFuncs();

    return this.outputModule;
  }

  _createClass(XdModule, [{
    key: 'injectFuncs',
    value: function injectFuncs() {
      var _this = this;

      Object.keys(this.funcs).forEach(function (key, index) {
        _this['outputModule'][key] = function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          if (args[0] === undefined) args = [];
          var copyArgs = args.map(function (i, k) {
            if (typeof i === 'function') return i;else return JSON.parse(JSON.stringify(i));
          });
          if (copyArgs.length) {
            for (var i = copyArgs.length - 1; i > 0; i--) {
              copyArgs.splice(i, 0, ',');
            }
          }
          return function () {
            try {
              var result = _this['funcs'][key].apply(_this.outputModule, args);
              if (config.showTrace()) {
                var _console;

                var infoMsg = ['[trace] ' + key];
                if (copyArgs.length) {
                  infoMsg = [infoMsg[0] + ' | params >'].concat(_toConsumableArray(copyArgs));
                }
                infoMsg = [].concat(_toConsumableArray(infoMsg), ['| result >', result]);
                (_console = console).info.apply(_console, _toConsumableArray(infoMsg));
              }
              return result;
            } catch (e) {
              if (config.showErr()) {
                var _console2;

                var errMsg = ['[error] ' + key];
                if (copyArgs.length) {
                  errMsg = [errMsg[0] + ' | params >'].concat(_toConsumableArray(copyArgs));
                }
                (_console2 = console).error.apply(_console2, _toConsumableArray(errMsg));
              }
              return null;
            }
          }();
        };
      });
    }
  }, {
    key: 'freezeFuncs',
    value: function freezeFuncs() {
      Object.freeze(this.outputModule);
    }
  }]);

  return XdModule;
}();

module.exports = XdModule;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * 类型模块
                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                               */

var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdType = new _2.default({

  /* 通用类型判断 */
  getType: function getType(obj) {
    if (Number.isNaN(obj)) return 'NaN';
    if (typeof obj === 'number' && !Number.isFinite(obj)) return 'Infinity';
    if (obj === null) return String(obj);else if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);else return Object.prototype.toString.call(obj).toLowerCase().match(/\[\s*object\s*([^\]]*)\s*\]/)[1];
  },


  /* 类型判断 */
  isStr: function isStr(obj) {
    return this.getType(obj) === 'string';
  },
  isNum: function isNum(obj) {
    return this.getType(obj) === 'number';
  },
  isArr: function isArr(obj) {
    return this.getType(obj) === 'array';
  },
  isObj: function isObj(obj) {
    return this.getType(obj) === 'object';
  },
  isFunc: function isFunc(obj) {
    return this.getType(obj) === 'function';
  },
  isRegExp: function isRegExp(obj) {
    return this.getType(obj) === 'regexp';
  },
  isBool: function isBool(obj) {
    return this.getType(obj) === 'boolean';
  },
  isDate: function isDate(obj) {
    return this.getType(obj) === 'date';
  },
  isNull: function isNull(obj) {
    return this.getType(obj) === 'null';
  },
  isUndefined: function isUndefined(obj) {
    return this.getType(obj) === 'undefined';
  },


  /* 类型转换 */
  toStr: function toStr(obj) {
    return obj.toString();
  },
  toNum: function toNum(obj) {
    return Number(obj);
  },
  toBool: function toBool(obj) {
    return !!obj;
  },
  objToArr: function objToArr(obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  }
});

module.exports = xdType;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 配置文件
 *
 * 
 */

var ENV = "prod";
var DEV = 'dev';
var PROD = 'prod';
var SHOW_TRACE = true;
var SHOW_ERROR = true;

var config = {
  isDev: function isDev() {
    return ENV === DEV;
  },
  isNotDev: function isNotDev() {
    return ENV !== DEV;
  },
  showTrace: function showTrace() {
    return this.isDev() && !!SHOW_TRACE;
  },
  showErr: function showErr() {
    return this.isDev() && !!SHOW_ERROR;
  }
};

module.exports = config;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 数组模块
 * 用作 Lodash / underscore 以外的补充
 *
 * 
 */

var xdArray = new _2.default({
  getArrLen: function getArrLen(arr) {
    return arr.length;
  },
  isArrEmpty: function isArrEmpty(arr) {
    return !this.getArrLen(arr);
  },
  countArrItem: function countArrItem(arr, item) {
    return arr.filter(function (i) {
      return i === item;
    }).length;
  },
  addArrUniqItem: function addArrUniqItem(arr, item) {
    if (!arr.includes(item)) arr.push(item);
    return arr;
  },
  removeArrItem: function removeArrItem(arr, item) {
    if (arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },
  toggleArrItem: function toggleArrItem(arr, item) {
    var index = arr.indexOf(item);
    if (index === -1) arr.push(item);else arr.splice(index, 1);
    return arr;
  },
  sortArr: function sortArr(arr) {
    var order = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'asc';

    var targetArr = arr.sort();
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
  getArrSample: function getArrSample(arr) {
    var arrLen = this.getArrLen(arr);
    var randomIndex = Math.floor(Math.random() * arrLen);
    return arr[randomIndex];
  },
  shuffleArr: function shuffleArr(arr) {
    var copyArr = JSON.parse(JSON.stringify(arr));
    var targetArr = [];
    while (copyArr.length) {
      var randomIndex = Math.floor(Math.random() * copyArr.length);
      targetArr.push(copyArr[randomIndex]);
      copyArr.splice(randomIndex, 1);
    }
    return targetArr;
  },
  getArrRepeatedItems: function getArrRepeatedItems(arr, times) {
    var counter = {};
    arr.forEach(function (item) {
      var key = JSON.stringify(item);
      if (_type2.default.isUndefined(counter[key])) counter[key] = 1;else counter[key]++;
    });
    var targetArr = [];
    switch (_type2.default.getType(times)) {
      case 'number':
      case 'string':
        times = _type2.default.toNum(times);
        Object.keys(counter).forEach(function (key) {
          if (counter[key] === times) targetArr.push(JSON.parse(key));
        });
        break;
      case 'function':
        Object.keys(counter).forEach(function (key) {
          if (times(counter[key])) targetArr.push(JSON.parse(key));
        });
        break;
      default:
        Object.keys(counter).forEach(function (key) {
          targetArr.push(JSON.parse(key));
        });
    }
    return targetArr;
  },
  uniqArr: function uniqArr(arr) {
    return this.getArrRepeatedItems(arr);
  },
  unionArr: function unionArr() {
    var _this = this;

    var tmpArr = [];

    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr);
  },
  intersectArr: function intersectArr() {
    var _this2 = this;

    var tmpArr = [];

    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this2.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr, arr.length);
  },
  complementArr: function complementArr() {
    var _this3 = this;

    var tmpArr = [];

    for (var _len3 = arguments.length, arr = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      arr[_key3] = arguments[_key3];
    }

    arr.forEach(function (singleArr) {
      tmpArr = tmpArr.concat(_this3.uniqArr(singleArr));
    });
    return this.getArrRepeatedItems(tmpArr, 1);
  }
});

module.exports = xdArray;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdDevice = new _2.default({
  getUserAgent: function getUserAgent() {
    return window.navigator.userAgent;
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
}); /**
     * 设备类型模块
     *
     * 
     */

module.exports = xdDevice;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /**
                                                                                                                                                                                                     * 函数模块
                                                                                                                                                                                                     *
                                                                                                                                                                                                     * 
                                                                                                                                                                                                     */

var xdFunction = new _2.default({
  execFunc: function execFunc(func) {
    if (_type2.default.isFunc(func)) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return func.apply(undefined, _toConsumableArray(args));
    } else {
      return null;
    }
  }
});

module.exports = xdFunction;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 格式模块
 *
 * 
 */

var xdMask = new _2.default({
  mobileMask: function mobileMask(mobile) {
    mobile = _type2.default.toStr(mobile);
    return '' + mobile.slice(0, 3) + '*'.repeat(4) + mobile.slice(-4);
  },
  emailMask: function emailMask(email) {
    var emailArray = email.split('@');
    if (emailArray[0].length > 4) email = emailArray[0].slice(0, -4) + '****@' + emailArray[1];else email = '' + emailArray[0].charAt(0) + '*'.repeat(emailArray[0].length - 1) + '@' + emailArray[1];
    return email;
  },
  idNumMask: function idNumMask(id) {
    id = _type2.default.toStr(id);
    var start = 3;
    var end = -4;
    var reduce = 7;
    if (id.length <= 4) {
      return '' + id.slice(0, 1) + '*'.repeat(id.length - 1);
    } else {
      if (id.length > 4 && id.length <= 8) {
        start = 1;
        end = -2;
        reduce = 3;
      }
      return '' + id.slice(0, start) + '*'.repeat(id.length - reduce) + id.slice(end);
    }
  }
});

module.exports = xdMask;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 算术模块
 *
 * 
 */

var NUM_1000 = 1000;
var NUM_1024 = 1024;

var xdMath = new _2.default({
  sum: function sum() {
    for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
      arr[_key] = arguments[_key];
    }

    if (_type2.default.isArr(arr[0])) arr = arr[0];
    return arr.reduce(function (acc, val) {
      return acc + _type2.default.toNum(val);
    });
  },
  mean: function mean() {
    for (var _len2 = arguments.length, arr = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      arr[_key2] = arguments[_key2];
    }

    if (_type2.default.isArr(arr[0])) arr = arr[0];
    var sum = this.sum(arr);
    var count = arr.length;
    return sum / count;
  },
  multiply: function multiply(numA, numB) {
    var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return _type2.default.toNum(numA) * Math.pow(numB, _type2.default.toNum(times));
  },
  multiply1k: function multiply1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.multiply(num, 1000, times);
  },
  multiply1024: function multiply1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.multiply(num, 1024, times);
  },
  devide: function devide(numA, numB) {
    var times = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    return _type2.default.toNum(numA) / Math.pow(numB, _type2.default.toNum(times));
  },
  devide1k: function devide1k(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.devide(num, 1000, times);
  },
  devide1024: function devide1024(num) {
    var times = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

    return this.devide(num, 1024, times);
  },


  /* 补零 */
  fillZero: function fillZero(num, width) {
    var direction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'left';

    num = _type2.default.toStr(num);
    var len = num.length;
    if (len >= width) return num;else {
      if (direction === 'right') return '' + num + '0'.repeat(width - len);else return '' + '0'.repeat(width - len) + num;
    }
  }
});

module.exports = xdMath;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 对象模块
 *
 * 
 */

var xdObject = new _2.default({
  getObjLen: function getObjLen(obj) {
    return Object.keys(obj).length;
  },
  hasObjKey: function hasObjKey(obj, key) {
    return !_type2.default.isUndefined(obj[key]);
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
      callback(obj[key], key);
    });
    return keys.length;
  }
});

module.exports = xdObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdString = new _2.default({
  getStrLen: function getStrLen(str) {
    return str.length;
  },
  capitalize: function capitalize(str) {
    return str.replace(/\b[a-z]/g, function (s) {
      return s.toUpperCase();
    });
  },
  kebabCase: function kebabCase(strs) {
    return strs.map(function (str) {
      return str;
    }).join('-');
  },
  camelCase: function camelCase(strs) {
    var _this = this;

    return strs.map(function (str, index) {
      return index ? _this.capitalize(str) : str;
    }).join('');
  },
  capitalCamelCase: function capitalCamelCase(strs) {
    var _this2 = this;

    return strs.map(function (str) {
      return _this2.capitalize(str);
    }).join('');
  }
}); /**
     * 字符串模块
     *
     * 
     */

module.exports = xdString;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 支持模块
 *
 * 
 */

var xdSupport = new _2.default({
  sseSupport: function sseSupport() {
    return !_type2.default.isUndefined(window.EventSource);
  }
});

module.exports = xdSupport;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var xdUrl = new _2.default({
  buildQueryStr: function buildQueryStr(data) {
    var queries = [];
    Object.keys(data).forEach(function (key, index) {
      queries.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    });
    return queries.join('&');
  },
  getQueryParams: function getQueryParams() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window.location.search;

    var urlArray = void 0;
    var resultObj = {};
    if (!url) urlArray = [];else if (url.charAt(0) === '?') urlArray = url.slice(1).split('&');else urlArray = url.split('&');
    urlArray.forEach(function (item, key) {
      var array = item.split('=');
      resultObj[array[0]] = array[1];
    });
    return resultObj;
  }
}); /**
     * url模块
     *
     * 
     */

module.exports = xdUrl;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * 入口文件
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

var _modules = __webpack_require__(0);

var _modules2 = _interopRequireDefault(_modules);

var _array = __webpack_require__(3);

var _array2 = _interopRequireDefault(_array);

var _device = __webpack_require__(4);

var _device2 = _interopRequireDefault(_device);

var _function = __webpack_require__(5);

var _function2 = _interopRequireDefault(_function);

var _mask = __webpack_require__(6);

var _mask2 = _interopRequireDefault(_mask);

var _math = __webpack_require__(7);

var _math2 = _interopRequireDefault(_math);

var _object = __webpack_require__(8);

var _object2 = _interopRequireDefault(_object);

var _string = __webpack_require__(9);

var _string2 = _interopRequireDefault(_string);

var _support = __webpack_require__(10);

var _support2 = _interopRequireDefault(_support);

var _type = __webpack_require__(1);

var _type2 = _interopRequireDefault(_type);

var _url = __webpack_require__(11);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var xd = _extends({}, _array2.default, _device2.default, _function2.default, _mask2.default, _math2.default, _object2.default, _string2.default, _support2.default, _type2.default, _url2.default);

var xdOverview = new _modules2.default({
  chain: function chain() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (args.length < 2) return args[0];
    var major = args.shift();
    args.forEach(function (ring) {
      var func = void 0;
      var params = void 0;
      if (_type2.default.isArr(ring)) {
        func = ring.shift();
        params = [major].concat(_toConsumableArray(ring));
      } else {
        func = ring;
        params = [major];
      }
      if (xd[func] !== undefined) {
        func = xd[func].bind(xd);
      }
      major = func.apply(undefined, _toConsumableArray(params));
    });
    return major;
  }
});

xd = _extends({}, xd, xdOverview);

Object.freeze(xd);

module.exports = xd;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * 直线类
 */

var helper = __webpack_require__(0);
var MoBase = __webpack_require__(2);
var MoNumber = __webpack_require__(1);
var MoDot = __webpack_require__(4);

var MoLine = function (_MoBase) {
  _inherits(MoLine, _MoBase);

  function MoLine() {
    _classCallCheck(this, MoLine);

    /* 默认属性 */
    var _this = _possibleConstructorReturn(this, (MoLine.__proto__ || Object.getPrototypeOf(MoLine)).call(this));

    _this.props = {
      slope: null, // 斜率
      intercept: null // 截距
    };

    for (var _len = arguments.length, inputs = Array(_len), _key = 0; _key < _len; _key++) {
      inputs[_key] = arguments[_key];
    }

    if (inputs[0] instanceof MoLine) {
      _this.setProp({
        slope: inputs[0].props.slope,
        intercept: inputs[0].props.intercept
      });
    } else if (inputs[0] instanceof MoDot) {
      var dots = inputs;

      _this._initLine(dots);
    } else {
      switch (helper.getType(inputs[0])) {
        case 'object':
          var props = inputs[0];
          _this.setProp({
            slope: props.slope,
            intercept: props.intercept
          });
          break;

        case 'array':
          var _dots = inputs;
          _this._initLine(_dots);
          break;
      }
    }
    return _this;
  }

  /* 初始化直线 */


  _createClass(MoLine, [{
    key: '_initLine',
    value: function _initLine(dots) {
      var dotA = new MoDot(dots[0]);
      var dotB = new MoDot(dots[1]);

      var slope = new MoNumber(dotA.props.y).minus(dotB.props.y).devide(new MoNumber(dotA.props.x).minus(dotB.props.x));

      var intercept = new MoNumber(dotA.props.y).minus(new MoNumber(dotA.props.x).multiply(slope));

      this.setProp({ slope: slope, intercept: intercept });
    }

    /* 判断是否经过点 */

  }, {
    key: 'throughDot',
    value: function throughDot(input) {
      var dot = new MoDot(input);

      return new MoNumber(dot.props.x).multiply(this.props.slope).add(this.props.intercept).isEqual(dot.props.y);
    }

    /* 判断是否与线相交 */

  }, {
    key: 'intersectLine',
    value: function intersectLine() {
      for (var _len2 = arguments.length, inputs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        inputs[_key2] = arguments[_key2];
      }

      var line = new (Function.prototype.bind.apply(MoLine, [null].concat(inputs)))();

      return this.props.slope.isNotEqual(line.props.slope);
    }

    /* 判断是否与线平行 */

  }, {
    key: 'parallelLine',
    value: function parallelLine() {
      for (var _len3 = arguments.length, inputs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        inputs[_key3] = arguments[_key3];
      }

      var line = new (Function.prototype.bind.apply(MoLine, [null].concat(inputs)))();

      return this.props.slope.isEqual(line.props.slope) && this.props.intercept.isNotEqual(line.props.intercept);
    }
  }]);

  return MoLine;
}(MoBase);

module.exports = MoLine;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * 分数函数，返回数字类
 */

var helper = __webpack_require__(0);
var MoNumber = __webpack_require__(1);

/**
 * @param ({sign, numerator, denominator}) 或 (numerator, denominator)
 * @return MoNumber 数字类
 */
var moFraction = function moFraction() {
  if (helper.isObj(arguments.length <= 0 ? undefined : arguments[0])) {
    var options = arguments.length <= 0 ? undefined : arguments[0];

    return new MoNumber(options);
  } else {
    var numerator = helper.isUndefined(arguments.length <= 0 ? undefined : arguments[0]) ? 1 : arguments.length <= 0 ? undefined : arguments[0];
    var denominator = helper.isUndefined(arguments.length <= 1 ? undefined : arguments[1]) ? 1 : arguments.length <= 1 ? undefined : arguments[1];

    return new MoNumber({ numerator: numerator, denominator: denominator });
  }
};

module.exports = moFraction;

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map