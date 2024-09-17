"use strict";
exports.id = 75;
exports.ids = [75];
exports.modules = {

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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-project-slide-js.js.map