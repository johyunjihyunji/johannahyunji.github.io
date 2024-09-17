"use strict";
exports.id = 678;
exports.ids = [678,555,979,75];
exports.modules = {

/***/ 1846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
const GridContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: minmax(50px, 1fr);
  pointer-events: none;
`;const GridCell=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
  background-color: rgba(0, 0, 255, ${props=>props.opacity});
  transition: background-color 0.1s ease;
`;const GridBackground=()=>{const{0:mousePosition,1:setMousePosition}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({x:0,y:0});const gridRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);if(typeof window==='undefined'){return null;// Render nothing or a loading state on the server
}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleMouseMove=event=>{setMousePosition({x:event.clientX,y:event.clientY});};window.addEventListener('mousemove',handleMouseMove);return()=>{window.removeEventListener('mousemove',handleMouseMove);};},[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const updateGrid=()=>{if(!gridRef.current)return;const cells=gridRef.current.childNodes;cells.forEach(cell=>{const rect=cell.getBoundingClientRect();const centerX=rect.left+rect.width/2;const centerY=rect.top+rect.height/2;const distance=Math.sqrt(Math.pow(mousePosition.x-centerX,2)+Math.pow(mousePosition.y-centerY,2));const maxDistance=200;// Adjust this value to change the size of the "spotlight"
const opacity=Math.max(0,1-distance/maxDistance);cell.style.backgroundColor=`rgba(0, 0, 255, ${opacity*0.5})`;});};updateGrid();},[mousePosition]);const createGrid=()=>{const cellsCount=Math.ceil(window.innerWidth/50*(window.innerHeight/50));return Array(cellsCount).fill().map((_,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GridCell,{key:index}));};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GridContainer,{ref:gridRef},createGrid());};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridBackground);

/***/ }),

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

/***/ }),

/***/ 5259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6950);
// src/Gallery.js
// Sample image URLs (replace these with your own images)
const images=['https://via.placeholder.com/150','https://via.placeholder.com/300x400','https://via.placeholder.com/400x300','https://via.placeholder.com/200','https://via.placeholder.com/250x400','https://via.placeholder.com/350x200','https://via.placeholder.com/300','https://via.placeholder.com/450x300','https://via.placeholder.com/300x250'];// Function to shuffle the images array
const shuffleArray=array=>{for(let i=array.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[array[i],array[j]]=[array[j],array[i]];}};const GalleryContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px; /* Space between items */
  padding: 20px;
  margin: 10vw 10vw
`;const GalleryItem=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP.div`
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &.square img {
    aspect-ratio: 1 / 1; /* Square */
    object-fit: cover;
  }

  &.horizontal img {
    aspect-ratio: 3 / 4; /* Horizontal rectangle */
    object-fit: cover;
  }

  &.vertical img {
    aspect-ratio: 4 / 3; /* Vertical rectangle */
    object-fit: cover;
  }
`;const getRandomSizeClass=()=>{const sizes=['square','horizontal','vertical'];return sizes[Math.floor(Math.random()*sizes.length)];};const ProjectSlide=()=>{// Shuffle images to randomize their order
shuffleArray(images);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GalleryContainer,null,images.map((src,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GalleryItem,{key:index,className:getRandomSizeClass()},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{src:src,alt:`Gallery item ${index+1}`}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSlide);

/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9025);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8932);
/* harmony import */ var _ProjectSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5259);
/* harmony import */ var _GridBackground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1846);
function Home(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GridBackground__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProjectSlide__WEBPACK_IMPORTED_MODULE_2__["default"],null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map