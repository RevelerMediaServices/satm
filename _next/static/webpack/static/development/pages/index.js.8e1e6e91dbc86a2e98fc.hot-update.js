webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Navbar1.js":
/*!*******************************!*\
  !*** ./components/Navbar1.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navbar1; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/images/logo.png */ "./static/images/logo.png");
/* harmony import */ var _static_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\Santa and the Mrs of West Texas\\website\\satm\\satm\\components\\Navbar1.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var NavBarDiv = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "Navbar1__NavBarDiv",
  componentId: "sc-1gjvm54-0"
})([".navbar-nav{float:none;margin:0 auto;display:block;text-align:center;a{font-weight:800;font-size:200%;}}.navbar-nav > li{display:block;float:none;}@media (min-width:768px){.navbar-nav{float:none;margin:0 auto;display:block;text-align:center;}.navbar-nav > li{display:inline-block;float:none;}}.customButtonWidth{width:10vw;}.customButtonGroup{background-color:rgba(0,88,0,0.7);}.navlinkColor{color:#cc0000;text-shadow:-3px -3px 0 #000,3px -3px 0 #000,-3px 3px 0 #000,3px 3px 0 #000;}"]);

var Navbar1 =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar1, _Component);

  function Navbar1(props) {
    var _this;

    _classCallCheck(this, Navbar1);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Navbar1).call(this, props));
    _this.toggleNavbar = _this.toggleNavbar.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = {
      collapsed: true
    };
    return _this;
  }

  _createClass(Navbar1, [{
    key: "toggleNavbar",
    value: function toggleNavbar() {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavBarDiv, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
        color: "faded",
        expand: "lg",
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarBrand"], {
        href: "/",
        className: "navbarBrandLogo mr-auto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["NavbarToggler"], {
        onClick: this.toggleNavbar,
        className: "mr-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
        isOpen: !this.state.collapsed,
        navbar: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
        navbar: true,
        className: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
        className: "btn-group-sm rounded-left customButtonGroup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        class: "btn btn-outline-danger navbar-btn btn customButtonWidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        href: "/",
        as: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link navlinkColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "Home"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        class: "btn btn-outline-danger navbar-btn customButtonWidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        prefetch: true,
        href: "/about",
        as: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link navlinkColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, "About"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        class: "btn btn-outline-danger navbar-btn customButtonWidth",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        prefetch: true,
        href: "/calendar",
        as: "/calendar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link navlinkColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Calendar"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        type: "button",
        class: "btn btn-outline-danger navbar-btn customButtonWidth rounded-right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        prefetch: true,
        href: "/contact",
        as: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link navlinkColor",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, "Contact"))))))));
    }
  }]);

  return Navbar1;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=index.js.8e1e6e91dbc86a2e98fc.hot-update.js.map