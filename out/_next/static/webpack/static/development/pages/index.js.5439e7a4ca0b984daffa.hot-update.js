webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/IndexAnimation.js":
/*!**************************************!*\
  !*** ./components/IndexAnimation.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _static_images_Joy_8065_01_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/images/Joy_8065-01.svg */ "./static/images/Joy_8065-01.svg");
/* harmony import */ var _static_images_Joy_8065_01_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_Joy_8065_01_svg__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\Santa and the Mrs of West Texas\\website\\satm\\satm\\components\\IndexAnimation.js";




var IndexAnimationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "IndexAnimation__IndexAnimationDiv",
  componentId: "rakni8-0"
})(["position:absolute;top:15vh;left:10vw;background:rgba(192,19,19,0.7);border:1vmax double rgba(7,80,8,1);border-radius:2vmax;font-weight:800;#borderdiv{margin:1vmax;border-radius:0.5vmax;}.animatedDiv{color:black;width:40vw;font-size:3.5vw;padding-left:5vw;padding-bottom:1vh;font-family:\"Mr Dafoe\",cursive;}.bringingJoy{}.permianBasin{}"]);
var config = {
  mass: 5,
  tension: 2000,
  friction: 5000
};

function IndexAnimation() {
  var indexWordProps1 = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: config,
    opacity: 1,
    from: {
      opacity: 0
    }
  });
  var indexWordProps2 = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__["useSpring"])({
    config: config,
    opacity: 1,
    delay: 2000,
    from: {
      opacity: 0
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IndexAnimationDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "borderdiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "animatedDiv bringingJoy",
    style: indexWordProps1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Bringing Joy & Presents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "animatedDiv permianBasin",
    style: indexWordProps2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "to the Permian Basin")));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexAnimation);

/***/ })

})
//# sourceMappingURL=index.js.5439e7a4ca0b984daffa.hot-update.js.map