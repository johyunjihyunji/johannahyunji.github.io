"use strict";
exports.id = 938;
exports.ids = [938,309,339,173,150,398,293];
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

/***/ 8542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4722);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
function ESNetMRDP(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/ESNetMRDPHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:'10px'},__imageData:__webpack_require__(7410)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Role"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"UX Engineer Intern")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Skills"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"UI Engineering:")," React Development, Jinja Templating, Django Framework, Ansible, Docker",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"UX Redesign:")," UX Research, UX Interface Mockups, User Flow, Wireframing")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Timeline"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"June 2024 - August 2024")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Team"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Johanna Lee",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"James Kafader (Supervisor)",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Ken Miller (Client Point of Contact)"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Background"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Energy Science Network"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"The ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Energy Sciences Network")," is a high-performance network designed to support large-scale scientific research by ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"interconnecting the U.S. Department of Energy's national laboratory system"),". It facilitates the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"transfer of massive data sets")," generated by scientific experiments, enabling collaboration among researchers across various disciplines.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Lawrence Berkeley National Laboratory"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Lawrence Berkeley National Laboratory")," is a leading research facility located in Berkeley, California, established in 1931 and operated by the University of California. Funded by the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"U.S. Department of Energy"),", LBNL focuses on advancing scientific knowledge in areas such as ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"energy efficiency, environmental sustainability, and health."))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Project Scope"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"team-photo",style:{flex:'1',maxWidth:'40%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/ESNetMRDPScreenshot.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{marginTop:'25px',borderRadius:'2px'},__imageData:__webpack_require__(4486)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection",style:{flex:'1',maxWidth:'60%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#48C5DC'}},"Modern Research Data Portal"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"MRDP streamlines high-speed data transfer by enabling secure, reliable file transfers between authorized Globus source/destination points, browse datasets for transfers and monitor transfer progress. MRDP acceleartes research workflows and enhance collaboration by providing a centralized access point to facilitate data transfers."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#48C5DC'}},"Goal"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"Improving the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Modern Research Data Portal (MRDP)")," through UI/UX redesign and Django-based web development. Aiming to transform the MRDP codebase into a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"versatile, distributable, and customizable solution for various research institutions"),".")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Reflection"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection",style:{maxWidth:'60%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"User Flow Redesign:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"My project aimed to design for a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"niche group of lab researchers,"),". shifting my focus from previous GenZ targeted marketing projects. I aimed to create a UX that prioritized versatility and approachability, leading to a redesign of the website's user flow, which simplified navigation by ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"consolidating two-page operations into a efficient single-page experience"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Distributable and Customizable Codebase Development:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"Another focus was creating templates that ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"future developers could easily customize and distribute"),", ensuring that my design was both ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"user-friendly for end-users and adaptable for developers"),". This experience broadened my perspective on user experience design and highlighted the importance of balancing technical requirements with usability.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"team-photo",style:{flex:'1',maxWidth:'40%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/ESNetMRDPPresentation.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{marginTop:'40px',borderRadius:'10px'},__imageData:__webpack_require__(3253)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{href:"https://www.linkedin.com/posts/energysciencesnetwork_stem-summerstudents-interns-activity-7228803311460569089-k_iF?utm_source=share&utm_medium=member_desktop",style:{textAlign:'center',color:'#161616',textDecoration:'none',display:'block',fontSize:'14px'}},"Student Poster Session for Berkeley Lab Computing Sciences"))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ESNetMRDP);

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

/***/ 4486:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVR42qVSy07bQBTNZ+UhFlSoXbBHgj/opp/RJftKXbDrohs2FSCQQKlABVQwSbBJYmLnYccmPBLs+DF+nN7xJBZBLJA60tHcmblz7rlnprC6to6Vj5+wvPwBlcoSyuXKu1EqlVEsliguU1yiuIiCrDQhyze4Jszn61dr+Q3Mc+q1BmoESarh4kJCAf8x4jiGz6KFvUKapgDBCwIEjCGOIiRJkiVz8JjnZKALGShmhGpNwee9PzhSu6IA5QpCGpvbe9j6tQ+j18OldAVFoXbqDQwtK68eUbGJ42ASRti1n3HetVD9W4fU0rLzNFdIQ+noUHsDRKTScV34pJgT8KrpjPCH3MGXnWMcdww4iWAIPJ8QYEYjPOSkccTAiMz3fQK1H4Q0ewjDMCc8a+n4fnKF9t0T2m4A3fFnul54OCc0zSH6/QEM04RObfcNM1vbti18FK+A+r2Dn8YYh/07bFRl4V8S57QZIb/Q0TQ0my2oqgqrq2OoaxTfok2YTqe5Apak4N0ORo/4etLAt9MGPFecc2G5Qu6bS4aPyZMDa4yqPQHjHpKquc+pSIYXJ7gZTXCkWfjdteGThwst44UTU0retSh55CBJ3/5/D/TKT/T/HokoCtmCh/8ACIgYju2SbEIAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/387c971840543fb259d68a8b19aa0cda/aa74b/ESNetMRDPScreenshot.png","srcSet":"/static/387c971840543fb259d68a8b19aa0cda/01504/ESNetMRDPScreenshot.png 720w,\\n/static/387c971840543fb259d68a8b19aa0cda/bfc7e/ESNetMRDPScreenshot.png 1439w,\\n/static/387c971840543fb259d68a8b19aa0cda/aa74b/ESNetMRDPScreenshot.png 2878w","sizes":"(min-width: 2878px) 2878px, 100vw"},"sources":[{"srcSet":"/static/387c971840543fb259d68a8b19aa0cda/110ca/ESNetMRDPScreenshot.webp 720w,\\n/static/387c971840543fb259d68a8b19aa0cda/90f98/ESNetMRDPScreenshot.webp 1439w,\\n/static/387c971840543fb259d68a8b19aa0cda/28008/ESNetMRDPScreenshot.webp 2878w","type":"image/webp","sizes":"(min-width: 2878px) 2878px, 100vw"}]},"width":2878,"height":1618}');

/***/ }),

/***/ 7410:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVR42i2RXU/TcBjF+928Udv5JUz20mWgiQk3xAFGMDqcGPEbwC2JVyQmZG0HKJlb25Vu9IWupRuYQOAb/HhavXjyP+c55+L/nKNopodmXaCZgby+TEilX/AJqhkJn/JC9IoZl7jQ1V6Aaoi3H4lX/Nbkny5Y0b05zfE1urug7mTU7QXVYUrdzai5c5ns/8jeTqnZOUvhX5r+FbVRTrWctHxfDjOUDeuQNyenvP0z4OMk4N04YHf+QPvnCe+PHT6NfDpnDp3BOV/OYzadiCcrG1T3D9jN7+nGN+wkN3xNb9me3aG0ez9Y7h2xctqncxGx5cd8XzywfmiwdTyi68V8Hvp0xzHfwis27Yinqx9o7B3Q/uWx9ttjfeDRmWbsZPcoLfn6K3/OcnG6m9Byc3QnkQgS4bnEMaPpzYTn5U6X818H17Rk1xhl4k3R7ZiGnQmfoWjmlOdWxDMpoCLhq8alFBJK+EVJieykBCMssWYEZfhFWWq/KOhSsHDxVgrdinkEdcBtmjwGsREAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/47908197e6e240549a3cfa3cdbf59c78/8144b/ESNetMRDPHeader.png","srcSet":"/static/47908197e6e240549a3cfa3cdbf59c78/e0957/ESNetMRDPHeader.png 360w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/e54a2/ESNetMRDPHeader.png 720w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/8144b/ESNetMRDPHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/47908197e6e240549a3cfa3cdbf59c78/64838/ESNetMRDPHeader.webp 360w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/10ef5/ESNetMRDPHeader.webp 720w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/42982/ESNetMRDPHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}');

/***/ }),

/***/ 3253:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABS59E5rsZH//EABwQAQACAQUAAAAAAAAAAAAAAAIBAxEAEhMhIv/aAAgBAQABBQIdFWzybTqH4FqwnOf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Bp//EABsQAAICAwEAAAAAAAAAAAAAAAABAiEQQXKx/9oACAEBAAY/AkRUFW2X4KhdY//EABsQAQACAgMAAAAAAAAAAAAAAAEAESFRYaHx/9oACAEBAAE/ITQNTLonwimbLGQbUL3EaLR1xTi5/9oADAMBAAIAAwAAABB7H//EABcRAAMBAAAAAAAAAAAAAAAAAAABEYH/2gAIAQMBAT8QmiI//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EBmt/8QAGxABAQADAAMAAAAAAAAAAAAAAREAITFBcYH/2gAIAQEAAT8QEL2ImHcogHAm1znjGxWFot4gAjK+mWeAQD5jQOgxoZ//2Q=="},"images":{"fallback":{"src":"/static/57d3163b6e76c7f15c19dfb00282e1af/44dcb/ESNetMRDPPresentation.jpg","srcSet":"/static/57d3163b6e76c7f15c19dfb00282e1af/66b2a/ESNetMRDPPresentation.jpg 2064w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/a1aea/ESNetMRDPPresentation.jpg 4128w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/44dcb/ESNetMRDPPresentation.jpg 8256w","sizes":"(min-width: 8256px) 8256px, 100vw"},"sources":[{"srcSet":"/static/57d3163b6e76c7f15c19dfb00282e1af/5d735/ESNetMRDPPresentation.webp 2064w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/4b44a/ESNetMRDPPresentation.webp 4128w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/c7522/ESNetMRDPPresentation.webp 8256w","type":"image/webp","sizes":"(min-width: 8256px) 8256px, 100vw"}]},"width":8256,"height":5504}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-es-net-mrdp-js.js.map