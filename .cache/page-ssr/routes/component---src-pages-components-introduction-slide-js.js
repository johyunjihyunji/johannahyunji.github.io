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
/* harmony import */ var _static_jo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/jo.png */ "./static/jo.png");

 // We'll create this CSS file next


function IntroductionSlide() {
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Los Angeles, CA']);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', 'Where Now ?'];
    const interval = setInterval(() => {
      setLocations(prevLocations => {
        const currentIndex = prevLocations.length;
        if (currentIndex < allLocations.length) {
          return [...prevLocations, allLocations[currentIndex]];
        }
        return prevLocations;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "top-text"
  }, "passionate about fashion, apple cider, and travel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "left-text"
  }, "Designer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "center-text"
  }, "Johanna Lee"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "right-text"
  }, "Engineer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "joImage",
    src: _static_jo_png__WEBPACK_IMPORTED_MODULE_3__["default"],
    alt: "profile gif"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bottom-text"
  }, "based in", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), locations.map((location, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `location ${index < locations.length - 1 ? 'crossed' : ' '} ${index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : ''}`
  }, location), index < locations.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "space"
  }, "\xA0 \xA0")))))

  //     <div className="container">
  //     <div className="video-text-wrapper">
  //       <div className="video-container">
  //           <img src={profileGIF} alt="profile gif" style={{ maxWidth: '40vw' }} />
  //       </div>
  //       <div className="text-container">
  //         <div className="animation-container" 
  //         style={{
  //                 fontFamily: "'Inter', sans-serif",
  //             }}>
  //             <span style={{
  //                 fontFamily: "'IkeaFont', sans-serif",
  //                 fontSize: '4vw',
  //             }}>Johanna's
  //             <br />
  //             Portfolio
  //             </span>
  //             <br />
  //             <br />
  //             <br />
  //             <span> Johanna Lee is a designer, engineer, and artist </span>
  //             <br />
  //             <span> based in </span>
  //             {locations.map((location, index) => (
  //                 <React.Fragment key={index}>
  //                 <span 
  //                     className={`location ${index < locations.length - 1 ? 'crossed' : ' '} ${
  //                     index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : ''
  //                     }`}
  //                 >
  //                     {location}
  //                 </span>
  //                 {index < locations.length - 1 && <span className="space">&nbsp; &nbsp;</span>}
  //                 </React.Fragment>
  //             ))}
  //             <br />
  //             <br />
  //             <span> passionate about fashion, chai latte, and travel</span>
  //             <br />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  ;
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

/***/ "./static/jo.png":
/*!***********************!*\
  !*** ./static/jo.png ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/jo-93a71f902540a3da3f8f5c67e309d1d5.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-introduction-slide-js.js.map