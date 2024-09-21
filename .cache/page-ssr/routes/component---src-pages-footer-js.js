"use strict";
exports.id = 120;
exports.ids = [120,398];
exports.modules = {

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
  justify-content: center; /* Center the content horizontally */
`;const ImageItem=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${props=>`rotate(${props.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${props=>`rotate(${props.rotation}deg)`};
  }
`;const Image=styled_components__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;const LopsterGallery=()=>{const{0:rotations,1:setRotations}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);// Image list with speed and direction
const images=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},// clockwise
{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1},// counterclockwise
{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:1,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:4,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:1,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:4,direction:-1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:2,direction:1},{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,speed:3,direction:-1}// Add more images as needed
],[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{// Initialize rotations for each image
const initialRotations=Array(images.length).fill(0);setRotations(initialRotations);const interval=setInterval(()=>{setRotations(prevRotations=>prevRotations.map((rotation,index)=>{const{speed,direction}=images[index];return(rotation+speed*direction)%360;// Update rotation based on speed and direction
}));},30);// Adjust this value to control overall rotation speed
return()=>clearInterval(interval);},[images]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(GalleryContainer,null,images.map((image,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ImageItem,{key:index,rotation:rotations[index]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Image,{src:image.src,alt:`Lobster ${index+1}`}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LopsterGallery);

/***/ }),

/***/ 156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7131);
/* harmony import */ var _Components_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3501);
const FooterContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`;const FooterText=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterText,{style:{fontFamily:"'Inter', sans-serif"}},"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

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
//# sourceMappingURL=component---src-pages-footer-js.js.map