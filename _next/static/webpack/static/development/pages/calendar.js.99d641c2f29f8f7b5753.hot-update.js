webpackHotUpdate("static\\development\\pages\\calendar.js",{

/***/ "./components/EventCalendar.js":
/*!*************************************!*\
  !*** ./components/EventCalendar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/lib/index.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-big-calendar/lib/css/react-big-calendar.css */ "./node_modules/react-big-calendar/lib/css/react-big-calendar.css");
/* harmony import */ var react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_big_calendar_lib_css_react_big_calendar_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\HC\\Desktop\\RevelerMusic\\RevelerMediaServices\\Client Work\\Santa and the Mrs of West Texas\\website\\satm\\satm\\components\\EventCalendar.js";



 // Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.

var localizer = react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default.a.momentLocalizer(moment__WEBPACK_IMPORTED_MODULE_2___default.a); // or globalizeLocalizer

var myEventsList = [{
  id: 6,
  title: "Meeting",
  start: new Date(2019, 0, 12, 10, 30, 0, 0),
  end: new Date(2019, 0, 12, 12, 30, 0, 0),
  desc: "Pre-meeting meeting, to prepare for the meeting"
}, {
  id: 7,
  title: "Interview",
  start: new Date(2019, 3, 12, 1, 30, 0, 0),
  end: new Date(2019, 3, 12, 2, 30, 0, 0),
  desc: "Pre-meeting meeting, to prepare for the meeting"
}, {
  id: 8,
  title: "Work Out",
  start: new Date(2019, 3, 12, 2, 30, 0, 0),
  end: new Date(2019, 3, 12, 4, 30, 0, 0),
  desc: "Pre-meeting meeting, to prepare for the meeting"
}];

var EventCalendar = function EventCalendar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_1___default.a, {
    localizer: localizer,
    events: myEventsList,
    startAccessor: "start",
    endAccessor: "end",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (EventCalendar);

/***/ })

})
//# sourceMappingURL=calendar.js.99d641c2f29f8f7b5753.hot-update.js.map