// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* template */
var __vue_template__ = __webpack_require__(1)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\weex-learn\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["message"]
  }, [_vm._v("这是什么？what?好烦哦")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "C:\\Users\\Administrator\\Desktop\\weex-learn\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  },
  "gologin": {
    "height": "40",
    "width": "200",
    "backgroundColor": "#FFC0CB"
  },
  "logintext": {
    "color": "#0000FF"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //
//
//
//
//
//
//
//
//
//
//
//
//

var _HelloWorld = __webpack_require__(0);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _util = __webpack_require__(7);

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = weex.requireModule('storage');
exports.default = {
	name: 'App',
	components: {
		HelloWorld: _HelloWorld2.default
	},
	data: function data() {
		return {
			logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png',
			bundleUrl: "",
			result: ""
		};
	},
	mounted: function mounted() {
		console.log(weex, 'weex');
		var bundleUrl = weex.config.bundleUrl;
		this.bundleUrl = bundleUrl;
		console.log(bundleUrl, 'bundleUrl');
		var arrNew = bundleUrl.split("/");
		console.log(arrNew, 'arr');
		bundleUrl = arrNew.splice(2, 1);
		var http = arrNew.splice(0, 1);
		bundleUrl = bundleUrl[0];
		console.log(bundleUrl, 'bundleUrl');
		storage.setItem("bundleUrl", bundleUrl, function (e) {
			console.log('e');
		});
	},

	methods: {
		getJumpBaseUrl: function getJumpBaseUrl(toUrl) {
			var bundleUrl = weex.config.bundleUrl;
			var isnav = true;
			bundleUrl = new String(bundleUrl);
			var nativeBase;
			var native;
			var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;
			var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
			if (isAndroidAssets) {
				nativeBase = 'file://assets/dist/';
				native = nativeBase + toUrl + ".js";
			} else if (isiOSAssets) {
				nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
				native = nativeBase + toUrl + ".js";
			} else {
				var host = 'localhost:8081';
				var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
				if (matches && matches.length >= 2) {
					host = matches[1];
				}
				//此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
				if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object') {
					nativeBase = 'http://' + host + '/';
				} else {
					nativeBase = 'http://' + host + '/';
				}
				native = nativeBase + toUrl + ".html";
			}
			return native;
		},
		goLogin: function goLogin() {
			console.log(weex);
			this.result = this.getJumpBaseUrl("page/login");
			_util2.default.navigatorPush(this.result, "true");
			// storage.getItem("bundleUrl", e => {
			// 	if (e.result === "success") {
			// 		let baseUrl = e.data;
			// 		let result = baseUrl + "/page/login.html";
			// 		console.log(result, 'result');
			// 		if (weex.config.env.platform === "Web") {
			// 			util.navigatorPush('./page/login.html', "true");
			// 		} else {
			// 			this.result = 'fille://assets/dist/page/login.html';
			// 			util.navigatorPush("fille://assets/dist/page/login.html", "true");
			// 		}
			// 	} else {
			// 		console.log(e, 'e')
			// 	}
			// });
		}
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


/** 
 * 工具函数
 * */
var navigator = weex.requireModule('navigator');
var util = {
  /**
   * 时间戳转时间字符串(毫秒和秒通用)
   * @param {*} timestamp 
   * @param {*} temp 要转成字符串的格式 
   */
  navigatorPush: function navigatorPush(name, animatedState) {

    navigator.push({
      url: name,
      animated: animatedState
    });
  }
};
exports.default = util;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('image', {
    staticClass: ["logo"],
    attrs: {
      "src": _vm.logo
    }
  }), _c('text', [_vm._v(_vm._s(_vm.bundleUrl))]), _c('text', {
    staticClass: ["greeting"]
  }, [_vm._v("suigang demo")]), _c('HelloWorld'), _c('text', [_vm._v(_vm._s(_vm.result))]), _c('div', {
    staticClass: ["gologin"],
    on: {
      "click": _vm.goLogin
    }
  }, [_c('text', {
    staticClass: ["logintext"]
  }, [_vm._v("跳转登录页")])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);