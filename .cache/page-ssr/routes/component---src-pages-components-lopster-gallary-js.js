exports.id = "component---src-pages-components-lopster-gallary-js";
exports.ids = ["component---src-pages-components-lopster-gallary-js"];
exports.modules = {

/***/ "./src/pages/Components/LopsterGallary.js?export=default":
/*!***************************************************************!*\
  !*** ./src/pages/Components/LopsterGallary.js?export=default ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../static/lopster.png */ "./static/lopster.png");
/* harmony import */ var _style_Lopster_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Lopster.css */ "./src/pages/style/Lopster.css");
/* harmony import */ var _style_Lopster_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_Lopster_css__WEBPACK_IMPORTED_MODULE_2__);



const LopsterGallery = () => {
  const {
    0: rotations,
    1: setRotations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const images = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    id: 1,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 10,
    direction: 1
  }, {
    id: 2,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 9,
    direction: -1
  }, {
    id: 3,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 14,
    direction: 1
  }, {
    id: 4,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 8,
    direction: -1
  }, {
    id: 5,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 13,
    direction: 1
  }, {
    id: 6,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 10,
    direction: -1
  }, {
    id: 7,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 8,
    direction: 1
  }, {
    id: 8,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 9,
    direction: -1
  }, {
    id: 9,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 7,
    direction: 1
  }, {
    id: 10,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 5,
    direction: -1
  }], []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initialRotations = Array(images.length).fill(0);
    setRotations(initialRotations);
    const interval = setInterval(() => {
      setRotations(prevRotations => prevRotations.map((rotation, index) => {
        const {
          speed,
          direction
        } = images[index];
        return (rotation + speed * direction + 360) % 360; // Ensure positive rotation
      }));
    }, 50); // Adjust for desired speed

    return () => clearInterval(interval);
  }, [images]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "LopGalleryContainer"
  }, images.map((image, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: image.id,
    className: "LopImageItem",
    style: {
      animationDuration: `${image.speed}s`,
      transform: `rotate(${rotations[index]}deg)`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "LopImage",
    src: image.src,
    alt: `Lobster ${index + 1}`
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LopsterGallery);

/***/ }),

/***/ "./src/pages/style/Lopster.css":
/*!*************************************!*\
  !*** ./src/pages/style/Lopster.css ***!
  \*************************************/
/***/ (() => {



/***/ }),

/***/ "./static/lopster.png":
/*!****************************!*\
  !*** ./static/lopster.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-9c5d51d72547f351d3074957f0a0e510.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-lopster-gallary-js.js.map