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
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\Santa and the Mrs of West Texas\\website\\satm\\satm\\components\\IndexAnimation.js";



var IndexAnimationDiv = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "IndexAnimation__IndexAnimationDiv",
  componentId: "rakni8-0"
})(["font-family:\"Romanesco\",cursive;position:absolute;top:15vh;left:10vw;background:rgba(0,255,0,0.7);border-radius:0.5vmax;#borderdiv{border:solid 0.1vmax rgba(255,0,0,1);margin:1vmax;border-radius:0.3vmax;}.animatedDiv{color:black;width:40vw;font-size:5vw;padding-left:5vw;padding-bottom:1vh;}.bringingJoy{}.permianBasin{}"]);
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
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "borderdiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "animatedDiv bringingJoy",
    style: indexWordProps1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Bringing Joy & Presents"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
    className: "animatedDiv permianBasin",
    style: indexWordProps2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "to the Permian Pasin")));
}

/* harmony default export */ __webpack_exports__["default"] = (IndexAnimation);

/***/ })

})
//# sourceMappingURL=index.js.35c3793ae0bbda4dc09a.hot-update.js.map