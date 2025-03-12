"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 515:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Components_Footer)
});

// EXTERNAL MODULE: external "/Users/johannalee/repos/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(5912);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./static/lopster.png
var lopster = __webpack_require__(5884);
;// ./src/Components/LopsterGallary.js
const LopsterGallery=()=>{const{0:rotations,1:setRotations}=(0,index_js_.useState)([]);const{0:screenWidth,1:setScreenWidth}=(0,index_js_.useState)(typeof window!=='undefined'?window.innerWidth:0);const images=(0,index_js_.useMemo)(()=>[{id:1,src:lopster/* default */.A,speed:10,direction:1},{id:2,src:lopster/* default */.A,speed:9,direction:-1},{id:3,src:lopster/* default */.A,speed:14,direction:1},{id:4,src:lopster/* default */.A,speed:8,direction:-1},{id:5,src:lopster/* default */.A,speed:13,direction:1},{id:9,src:lopster/* default */.A,speed:7,direction:1},{id:6,src:lopster/* default */.A,speed:10,direction:-1},{id:7,src:lopster/* default */.A,speed:8,direction:1},{id:8,src:lopster/* default */.A,speed:9,direction:-1},{id:9,src:lopster/* default */.A,speed:7,direction:1}],[]);(0,index_js_.useEffect)(()=>{const initialRotations=Array(images.length).fill(0);setRotations(initialRotations);const interval=setInterval(()=>{setRotations(prevRotations=>prevRotations.map((rotation,index)=>{const{speed,direction}=images[index];return(rotation+speed*direction+360)%360;// Ensure positive rotation
}));},50);// Adjust for desired speed
return()=>clearInterval(interval);},[images]);(0,index_js_.useEffect)(()=>{const handleResize=()=>setScreenWidth(window.innerWidth);window.addEventListener('resize',handleResize);return()=>window.removeEventListener('resize',handleResize);},[]);return/*#__PURE__*/index_js_default().createElement("div",{className:"LopGalleryContainer"},images.slice(0,screenWidth<768?4:8).map((image,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:image.id,className:"LopImageItem",style:{animationDuration:`${image.speed}s`,transform:`rotate(${rotations[index]}deg)`}},/*#__PURE__*/index_js_default().createElement("img",{className:"LopImage",src:image.src,alt:`Lobster ${index+1}`}))));};/* harmony default export */ const LopsterGallary = (LopsterGallery);
;// ./src/Components/Footer.js
// Style
const Footer=()=>{const currentYear=new Date().getFullYear();const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);const mountRef=(0,index_js_.useRef)(null);const modelRef=(0,index_js_.useRef)(null);(0,index_js_.useEffect)(()=>{const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','Where Now?'];const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;});},2000);return()=>clearInterval(interval);},[]);return/*#__PURE__*/index_js_default().createElement("div",{className:"FooterContainer"},/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement(LopsterGallary,null),/*#__PURE__*/index_js_default().createElement("div",{className:"bottom-text",style:{color:'#282828'}},"based in",/*#__PURE__*/index_js_default().createElement("br",null),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':' '} ${index===locations.length-1&&location==='Where Now?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0 \xA0")))),/*#__PURE__*/index_js_default().createElement("div",{className:"FooterText"},"designed, drawn, and coded by Jo"),/*#__PURE__*/index_js_default().createElement("p",null,"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const Components_Footer = (Footer);

/***/ }),

/***/ 8340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5912);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5884);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
// Style
const Header=()=>{const{0:rotation,1:setRotation}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const handleScroll=()=>{const scrollTop=window.scrollY;setRotation(scrollTop/14);};window.addEventListener('scroll',handleScroll);return()=>{window.removeEventListener('scroll',handleScroll);};},[]);const scrollToTop=()=>{window.scrollTo({top:0,behavior:'smooth'});};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav",{className:"LeftNavContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"topnav"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/",className:"LogoContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"Logo",src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,alt:"Logo",style:{transform:`rotate(${rotation}deg)`}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",{className:"Menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://www.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=643%3A255&node-id=643-256&viewport=-54%2C317%2C0.37&t=DPXVv0wSZ5qJFlzM-1&scaling=min-zoom&content-scaling=fixed"},"R\xE9sum\xE9")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://www.linkedin.com/in/johannaleehyunji/"},"LinkedIn")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"MenuItem"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"/#projects"},"Projects")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",{className:"MenuItem"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"/Playground"},"Playground")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{onClick:scrollToTop,className:"scroll-to-top-btn"},"\u2191"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ 4756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5912);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4722);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8340);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4366);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4699);
function Waymo(){const{scrollY}=(0,framer_motion__WEBPACK_IMPORTED_MODULE_3__/* .useViewportScroll */ .N)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__/* .StaticImage */ .iS,{src:"../../static/2025_headers/Artboard 151.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:'20px',border:'1.2px solid #000000'},__imageData:__webpack_require__(2798)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"project-title"},"Waymo UI and Brand Revamp"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"project-summary"},"Redesigned Waymo's UI and brand to appeal to younger audience in preparation for their transition to a commercial entity and San Francisco launch."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Role"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"UI/UX Design Consultant")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Timeline"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Jan 2023 - June 2023")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Team"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"UMA Design Team, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Waymo's Design Team")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Skills"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"User Flow"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Figma"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Prototyping"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Wireframing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Brand Design"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Ad Campaign Mockup"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"tag"},"Competitor Research")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Project Scope"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{fontSize:'3rem'}},"Waymo"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null)," A self-driving technology company was transitioning from an ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"R&D-focused firm to a commercial entity"),", which required a comprehensive reevaluation of its overall user experience and brand identity."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#0077FF'}},"1. UI Redesign of Waymo's Homepage"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"Conducted ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"comprehensive competitive brand analysis")," to inform the redesign of ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"interactive UI/UX modules,")," aimed at enhancing Waymo's commercial appeal and targeting the next generation."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#0077FF'}},"2. Brand Design System"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"Provide a proposal for how Waymo should evolve two core components of its ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"brand identity to appeal to younger audiences (Gen Z), recommending brand personality and photography style.")))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__/* .motion */ .P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{textAlign:'center',color:'#5a5a5a'}},"this page is under construction!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph",style:{textAlign:'center'}},"please reach out to ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{backgroundColor:'rgba(30, 33, 0, 0.2)',fontWeight:'570'}},"johannalee@berkeley.edu")," to learn more about this project!"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Waymo);

/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-102787b83fb889e09b9d6c512829bf56.png");

/***/ }),

/***/ 2798:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAAA5klEQVR42n2QO0/DQBCE709ENLFzvju/ogQh5WliOwlCDo8GCVEAUhACpaCiRUoRSiQafvHH+QJlXIx2NbuamV1hTE4TtM7xvDG+P3G9McXfrEDbKjsZrcsf4skT3ThHNIvNSJIFq9UjVfVAHM8dZ8K9qG6Pubh55mSxoZeW1qBA1K6HoNSMKCrZ7b7Zbr+cmKrNLK/bU7z3F+b3a4a9MyJrXO+L//hNdTC4YjS6JrTixs8cf/SxofO6JtEl/eOKMCwdL5TaJzmEOpWUU2SQoey/5PCc1ucb6vaOvizdJWm6dJcEwSm/LEueGzYN7TsAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/d53540e2fb7c3c0c5b7c7cb4451f367b/12eae/Artboard%20151.png","srcSet":"/static/d53540e2fb7c3c0c5b7c7cb4451f367b/5551e/Artboard%20151.png 600w,\\n/static/d53540e2fb7c3c0c5b7c7cb4451f367b/a5079/Artboard%20151.png 1200w,\\n/static/d53540e2fb7c3c0c5b7c7cb4451f367b/12eae/Artboard%20151.png 2400w","sizes":"(min-width: 2400px) 2400px, 100vw"},"sources":[{"srcSet":"/static/d53540e2fb7c3c0c5b7c7cb4451f367b/14f51/Artboard%20151.webp 600w,\\n/static/d53540e2fb7c3c0c5b7c7cb4451f367b/d48b7/Artboard%20151.webp 1200w,\\n/static/d53540e2fb7c3c0c5b7c7cb4451f367b/8762e/Artboard%20151.webp 2400w","type":"image/webp","sizes":"(min-width: 2400px) 2400px, 100vw"}]},"width":2400,"height":601}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-waymo-js.js.map