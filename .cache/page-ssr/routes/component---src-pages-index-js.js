"use strict";
exports.id = 293;
exports.ids = [293,309,339,173,150,398];
exports.modules = {

/***/ 4101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LopsterGallary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3501);
// Style
const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer",{className:"FooterContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"FooterText",style:{fontFamily:"'Inter', sans-serif"}},"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 6143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5884);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
// src/Header.js
// Style
const Header=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header",{className:"HeaderContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"Logo",src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,alt:"Logo"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 4057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7694);
/* harmony import */ var _ProjectSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5536);
// Style
//Landing Page
function Home(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"AppContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectSlide__WEBPACK_IMPORTED_MODULE_2__["default"],null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

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
function IntroductionSlide(){const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);(0,index_js_.useEffect)(()=>{const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','Where Now ?'];const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;});},2000);return()=>clearInterval(interval);},[]);// Empty dependency array
return/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-text-wrapper"},/*#__PURE__*/index_js_default().createElement("div",{className:"video-container"},/*#__PURE__*/index_js_default().createElement("img",{src:joprofile,alt:"profile gif",style:{maxWidth:'40vw'}})),/*#__PURE__*/index_js_default().createElement("div",{className:"text-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:'4.3vw'}},"Johanna"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," is a designer and engineer "),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," based in "),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':' '} ${index===locations.length-1&&location==='Where Now ?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0 \xA0"))),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("span",null," passionate about x y and z"),/*#__PURE__*/index_js_default().createElement("br",null)))));}/* harmony default export */ const Components_IntroductionSlide = (IntroductionSlide);

/***/ }),

/***/ 3501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7131);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5884);
const GalleryContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping for multiple rows
`;const ImageItem=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.div`
  margin: 10px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${props=>`rotate(${props.$rotation}deg)`};

  &:hover {
    transform: ${props=>`scale(1.2) rotate(${props.$rotation}deg)`};
  }
`;const Image=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;const LopsterGallery=()=>{const{0:rotations,1:setRotations}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const images=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:1,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:4,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:1,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:4,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1}],[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const initialRotations=Array(images.length).fill(0);setRotations(initialRotations);const interval=setInterval(()=>{setRotations(prevRotations=>prevRotations.map((rotation,index)=>{const{speed,direction}=images[index];return(rotation+speed*direction+360)%360;// Ensure positive rotation
}));},50);// Adjust for desired speed
return()=>clearInterval(interval);},[images]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GalleryContainer,null,images.map((image,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageItem,{$rotation:rotations[index],key:index},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image,{src:image.src,alt:`Lobster ${index+1}`}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LopsterGallery);

/***/ }),

/***/ 9639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6143);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4101);
/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4057);
//Header & Footer
//Landing Page
function App({children}){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("main",null,children||/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Home__WEBPACK_IMPORTED_MODULE_3__["default"],null),"  "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__["default"],null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-9c5d51d72547f351d3074957f0a0e510.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map