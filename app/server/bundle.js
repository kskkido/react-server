module.exports =
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
/******/ 	// webpack-livereload-plugin
/******/ 	(function() {
/******/ 	  if (typeof window === "undefined") { return };
/******/ 	  var id = "webpack-livereload-plugin-script";
/******/ 	  if (document.getElementById(id)) { return; }
/******/ 	  var el = document.createElement("script");
/******/ 	  el.id = id;
/******/ 	  el.async = true;
/******/ 	  el.src = "//" + location.hostname + ":35729/livereload.js";
/******/ 	  document.getElementsByTagName("head")[0].appendChild(el);
/******/ 	}());
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(2);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(3);

var _common = __webpack_require__(4);

var _common2 = _interopRequireDefault(_common);

var _ = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IS_DEV = _.env.NODE_ENV === 'DEVELOPMENT';

var app = (0, _express2.default)().use(_express2.default.static('app/public')).get('*', function (req, res) {
  res.send('\n        <!DOCTYPE html>\n        <head>\n          <title>Universal Reacl</title>\n          <script src=\'/bundle.js\' defer></script>\n        </head>\n        <body>\n          <h1>LOL</h1>\n          <div id=\'root\'>' + (0, _server.renderToString)(_react2.default.createElement(_common2.default, null)) + '</div>\n        </body>\n      </html>\n    ');
}).listen(_.port, function () {
  console.log('Server is listening on', _.port);
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {

      return _react2.default.createElement(
        "div",
        { className: "app" },
        "HELLO"
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _require = __webpack_require__(6),
    env = _require.env,
    pkg = __webpack_require__(7);

if (env.NODE_ENV === undefined) {
  Object.assign(env, { NODE_ENV: 'DEVELOPMENT' });
}

module.exports = {
  get port() {
    return env.PORT || 1337;
  },
  get name() {
    return pkg.name;
  },
  get url() {
    return env.BASE_URL || 'http://localhost:' + module.exports.port;
  },
  get root() {
    return __dirname;
  },
  package: pkg,
  env: env
};
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("process");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = {"name":"serverside","version":"1.0.0","description":"","main":"index.js","scripts":{"test":"echo \"Error: no test specified\" && exit 1","start-dev":"NODE_ENV=DEVELOPMENT webpack -w & NODE_ENV=DEVELOPMENT nodemon app/server/bundle.js","start-prod":"NODE_ENV=PRODUCTION webpack & NODE_ENV=PRODUCTION node app/server/bundle.js"},"keywords":[],"author":"","license":"ISC","devDependencies":{"autoprefixer":"^7.1.6","babel-core":"^6.26.0","babel-loader":"^7.1.2","babel-preset-env":"^1.6.1","babel-preset-react":"^6.24.1","babel-preset-react-app":"^3.0.3","compression-webpack-plugin":"^1.0.1","css-loader":"^0.28.7","extract-text-webpack-plugin":"^3.0.1","file-loader":"^1.1.5","postcss-loader":"^2.0.8","style-loader":"^0.19.0","url-loader":"^0.6.2","webpack":"^3.8.1","webpack-dev-middleware":"^1.12.0","webpack-hot-middleware":"^2.20.0","webpack-livereload-plugin":"^1.0.0","webpack-node-externals":"^1.6.0"},"dependencies":{"body-parser":"^1.18.2","express":"^4.16.2","morgan":"^1.9.0","ramda":"^0.25.0","react":"^16.0.0","react-dom":"^16.0.0"}}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map