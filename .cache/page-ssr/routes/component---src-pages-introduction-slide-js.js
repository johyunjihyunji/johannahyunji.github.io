"use strict";
exports.id = 979;
exports.ids = [979];
exports.modules = {

/***/ 8932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_IntroductionSlide)
});

// EXTERNAL MODULE: external "/Users/johannalee/repo/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(9025);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./joprofile.gif
/* harmony default export */ const joprofile = ("/static/joprofile-db529395c907b63f733b8a53633da5ba.gif");
;// CONCATENATED MODULE: ./src/pages/IntroductionSlide.js
// We'll create this CSS file next
function IntroductionSlide(){// CROSSOUTANIMINATION
const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','?'];(0,index_js_.useEffect)(()=>{const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;// Stop adding after all locations are added
});},2000);// Change location every 4 seconds
return()=>clearInterval(interval);},[allLocations]);return/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-text-wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-container"},/*#__PURE__*/index_js_default().createElement("img",{src:joprofile,alt:"profile gif",style:{maxWidth:'40vw'}})),/*#__PURE__*/index_js_default().createElement("div",{className:"text-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'100px',fontWeight:700,color:'#00BE09'}},"Jo"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'100px',fontWeight:700}},"hanna Lee"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," a designer and engineer based in "),/*#__PURE__*/index_js_default().createElement("br",null),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':''} ${index===locations.length-1&&location==='?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0"))),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," studying CS and design innovation "),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," at University of California Berkeley")))));}/* harmony default export */ const pages_IntroductionSlide = (IntroductionSlide);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-introduction-slide-js.js.map