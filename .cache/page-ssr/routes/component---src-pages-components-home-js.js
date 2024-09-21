"use strict";
exports.id = 173;
exports.ids = [173,150];
exports.modules = {

/***/ 4057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7131);
/* harmony import */ var _IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7694);
/* harmony import */ var _ProjectSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5536);
// Style
//Landing Page
const AppContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;function Home(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectSlide__WEBPACK_IMPORTED_MODULE_2__["default"],null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 7694:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_IntroductionSlide)
});

// EXTERNAL MODULE: external "/Users/johannalee/repo/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1725);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./joprofile.gif
/* harmony default export */ const joprofile = ("/static/joprofile-db529395c907b63f733b8a53633da5ba.gif");
;// CONCATENATED MODULE: ./src/pages/Components/IntroductionSlide.js
// We'll create this CSS file next
function IntroductionSlide(){// CROSSOUTANIMINATION
const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','Where Now ?'];(0,index_js_.useEffect)(()=>{const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;// Stop adding after all locations are added
});},2000);// Change location every 4 seconds
return()=>clearInterval(interval);},[allLocations]);return/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-text-wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-container"},/*#__PURE__*/index_js_default().createElement("img",{src:joprofile,alt:"profile gif",style:{maxWidth:'40vw'}})),/*#__PURE__*/index_js_default().createElement("div",{className:"text-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:'4.3vw'}},"Johanna"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," is a designer, multimedia artist, and engineer "),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," based in "),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':' '} ${index===locations.length-1&&location==='Where Now ?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0 \xA0"))),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," passionate about fashion soup and oranges"),/*#__PURE__*/index_js_default().createElement("br",null)))));}/* harmony default export */ const Components_IntroductionSlide = (IntroductionSlide);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-home-js.js.map