webpackHotUpdate("static\\development\\pages\\contact.js",{

/***/ "./components/LetterToSanta.js":
/*!*************************************!*\
  !*** ./components/LetterToSanta.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HowBehavedChecked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HowBehavedChecked */ "./components/HowBehavedChecked.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/Radio/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\Santa and the Mrs of West Texas\\website\\satm\\satm\\components\\LetterToSanta.js";






function LetterToSanta() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      howBehaved = _useState2[0],
      setHowBehaved = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: "naughty",
    onChange: function onChange(event) {
      return setHowBehaved(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Naughty"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: "nice",
    onChange: function onChange(event) {
      return setHowBehaved(event.target.value);
    },
    label: "Nice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Nice"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: "veryNice",
    onChange: function onChange(event) {
      return setHowBehaved(event.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Very Nice"), howBehaved === "naughty" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HowBehavedChecked__WEBPACK_IMPORTED_MODULE_2__["NaughtyChecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), howBehaved === "nice" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HowBehavedChecked__WEBPACK_IMPORTED_MODULE_2__["NiceChecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), howBehaved === "veryNice" && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_HowBehavedChecked__WEBPACK_IMPORTED_MODULE_2__["VeryNiceChecked"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (LetterToSanta);

/***/ })

})
//# sourceMappingURL=contact.js.44f951da57aea38ec162.hot-update.js.map