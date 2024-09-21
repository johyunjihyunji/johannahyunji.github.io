"use strict";
exports.id = 882;
exports.ids = [882,309,339,173,150,398,293];
exports.modules = {

/***/ 4101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7131);
/* harmony import */ var _LopsterGallary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3501);
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
`;const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FooterText,{style:{fontFamily:"'Inter', sans-serif"}},"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ 6143:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7131);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5884);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
// src/Header.js
const HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`;const Logo=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.img`
  height: 80px; /* Adjust logo size */
`;const Menu=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`;const MenuItem=styled_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;const Header=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(HeaderContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Logo,{src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,alt:"Logo"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Menu,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(MenuItem,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

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

/***/ 422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4722);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
function Yelp(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/YelpHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:'10px'},__imageData:__webpack_require__(2828)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Role"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Creative Design Consultant")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Skills"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Performance Marketing",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Content Ideation",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"User Survey and AB Testings",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Brand Design System",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"User Persona")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Timeline"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Jan 2024 - June 2024")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Team"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"UMA Design Team:",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Background"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Yelp Home Services"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"UMA Design"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"collaborate with clients spanning diverse industries."))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Project Scope"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Yelp Home Services"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers."))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Yelp);

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

/***/ }),

/***/ 2828:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR42hWQXWsTURRF+zd8qBE0ltgWQ5pkJjOJY0nDpNFWsEmDNaUWTaMSSiFYTGoQbEAU/bnOzP2Yuzx9WC+Hy9r77rXcC6zbjciDQPAxvof2qqhanay2I9RIvTqp75OGIckdzYik4ZP1eujbH+jRKebNEBu/YM3Nv1u3/EYex9iwiWm20FURlSvCUxE1SO6EIvrn+SQSkDRC0rrcogh1PESfjDBBA9t9KcLrpXWrW1x3nzx6jnm2i+4PUOML1Pk5avYF9WkqLQPS0Rn6z1/S/pDk8BVZp4PaizHjz9jXR+Qn70QYH1iWN7jBMW6xkONb7Nc5ZvVTvrNCzReo9x/I/DpKmuhfv8kODskGEiqtzEjeTybYJxu42UyE00vLqI+bfsTdXJMPjjChJ1v66FAksqnyBF92rVRQW5vo7W30ZgnzuIgtbQgl8sI6rlwW4dXCcjqGyQzXP8NFXfL2Prbdw0R72FYH22xLQAuzIxuXq9Kmgi1ukT8S0YMi+fpD3P0C7l6B/zPAMnz+FruqAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png","srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/e0957/YelpHeader.png 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/e54a2/YelpHeader.png 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/64838/YelpHeader.webp 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/10ef5/YelpHeader.webp 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/42982/YelpHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-yelp-js.js.map