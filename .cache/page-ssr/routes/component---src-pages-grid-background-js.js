"use strict";
exports.id = 555;
exports.ids = [555];
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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-grid-background-js.js.map