exports.id = "component---src-pages-components-introduction-slide-js";
exports.ids = ["component---src-pages-components-introduction-slide-js"];
exports.modules = {

/***/ "./src/pages/Components/IntroductionSlide.js?export=default":
/*!******************************************************************!*\
  !*** ./src/pages/Components/IntroductionSlide.js?export=default ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_CrossoutAnimation_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/CrossoutAnimation.css */ "./src/pages/style/CrossoutAnimation.css");
/* harmony import */ var _style_CrossoutAnimation_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_CrossoutAnimation_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_VideoWithText_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/VideoWithText.css */ "./src/pages/style/VideoWithText.css");
/* harmony import */ var _style_VideoWithText_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_VideoWithText_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _joprofile_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../joprofile.gif */ "./joprofile.gif");

 // We'll create this CSS file next


function IntroductionSlide() {
  // CROSSOUTANIMINATION
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Los Angeles, CA']);
  const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', 'Where Now ?'];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const interval = setInterval(() => {
      setLocations(prevLocations => {
        const currentIndex = prevLocations.length;
        if (currentIndex < allLocations.length) {
          return [...prevLocations, allLocations[currentIndex]];
        }
        return prevLocations; // Stop adding after all locations are added
      });
    }, 2000); // Change location every 4 seconds

    return () => clearInterval(interval);
  }, [allLocations]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-text-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "video-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: _joprofile_gif__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "profile gif",
    style: {
      maxWidth: '40vw'
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "animation-container",
    style: {
      fontFamily: "'Inter', sans-serif"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    style: {
      fontFamily: "'IkeaFont', sans-serif",
      fontSize: '4.3vw'
    }
  }, "Johanna"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " is a designer, multimedia artist, and engineer "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " based in "), locations.map((location, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `location ${index < locations.length - 1 ? 'crossed' : ' '} ${index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : ''}`
  }, location), index < locations.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "space"
  }, "\xA0 \xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, " passionate about fashion soup and oranges"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null)))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntroductionSlide);

/***/ }),

/***/ "./src/pages/style/CrossoutAnimation.css":
/*!***********************************************!*\
  !*** ./src/pages/style/CrossoutAnimation.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "./src/pages/style/VideoWithText.css":
/*!*******************************************!*\
  !*** ./src/pages/style/VideoWithText.css ***!
  \*******************************************/
/***/ (() => {



/***/ }),

/***/ "./joprofile.gif":
/*!***********************!*\
  !*** ./joprofile.gif ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/joprofile-db529395c907b63f733b8a53633da5ba.gif");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-introduction-slide-js.js.map