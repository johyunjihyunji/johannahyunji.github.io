"use strict";
exports.id = 599;
exports.ids = [599];
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

/***/ 4923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_ESNetMRDP)
});

// EXTERNAL MODULE: external "/Users/johannalee/repos/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(5912);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/lucide-react/dist/esm/createLucideIcon.js + 3 modules
var createLucideIcon = __webpack_require__(9407);
;// ./node_modules/lucide-react/dist/esm/icons/link.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const __iconNode = [
  ["path", { d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71", key: "1cjeqo" }],
  ["path", { d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71", key: "19qd67" }]
];
const Link = (0,createLucideIcon/* default */.A)("Link", __iconNode);


//# sourceMappingURL=link.js.map

;// ./node_modules/lucide-react/dist/esm/icons/key-round.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const key_round_iconNode = [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t"
    }
  ],
  ["circle", { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" }]
];
const KeyRound = (0,createLucideIcon/* default */.A)("KeyRound", key_round_iconNode);


//# sourceMappingURL=key-round.js.map

;// ./node_modules/lucide-react/dist/esm/icons/message-circle.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */



const message_circle_iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = (0,createLucideIcon/* default */.A)("MessageCircle", message_circle_iconNode);


//# sourceMappingURL=message-circle.js.map

// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./src/Components/Header.js
var Header = __webpack_require__(8340);
// EXTERNAL MODULE: ./src/Components/Footer.js + 1 modules
var Footer = __webpack_require__(515);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.mjs + 14 modules
var use_viewport_scroll = __webpack_require__(4366);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs + 176 modules
var proxy = __webpack_require__(4699);
;// ./src/pages/ESNetMRDP.js
function ESNetMRDP(){const{scrollY}=(0,use_viewport_scroll/* useViewportScroll */.N)();const imageRefs=(0,index_js_.useRef)([]);const{0:slideIndex,1:setSlideIndex}=(0,index_js_.useState)(1);(0,index_js_.useEffect)(()=>{const setupImageZoom=container=>{if(!container)return;const image=container.querySelector('.slidepng');const handleMouseMove=e=>{const{left,top,width,height}=container.getBoundingClientRect();const x=(e.clientX-left)/width;const y=(e.clientY-top)/height;image.style.transformOrigin=`${x*100}% ${y*100}%`;image.style.transform='scale(1.5)';};const handleMouseLeave=()=>{image.style.transformOrigin='center center';image.style.transform='scale(1)';};container.addEventListener('mousemove',handleMouseMove);container.addEventListener('mouseleave',handleMouseLeave);return()=>{container.removeEventListener('mousemove',handleMouseMove);container.removeEventListener('mouseleave',handleMouseLeave);};};const cleanupFunctions=imageRefs.current.map(container=>setupImageZoom(container));return()=>{cleanupFunctions.forEach(cleanup=>cleanup&&cleanup());};},[]);const changeSlide=n=>{setSlideIndex(prevIndex=>{let newIndex=prevIndex+n;const slides=document.getElementsByClassName("slide");if(newIndex>slides.length)newIndex=1;if(newIndex<1)newIndex=slides.length;return newIndex;});};(0,index_js_.useEffect)(()=>{const slides=document.getElementsByClassName("slide");for(let i=0;i<slides.length;i++){slides[i].style.display="none";}if(slides[slideIndex-1]){slides[slideIndex-1].style.display="block";}},[slideIndex]);return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Header/* default */.A,null),/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("div",{className:"header-image"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/2025_headers/Artboard 61_1.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:'20px',border:'1.2px solid #000000'},__imageData:__webpack_require__(582)})),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"project-title"},"Modern Research Data Portal"),/*#__PURE__*/index_js_default().createElement("div",{className:"project-summary"},"Redesigned Data Transfer Portal: Streamlined data transfers, implemented customizable code features, and improved user experience."),/*#__PURE__*/index_js_default().createElement("div",{className:"info-row"},/*#__PURE__*/index_js_default().createElement("div",{className:"info-item"},/*#__PURE__*/index_js_default().createElement("h3",{className:"info-title"},"Role"),/*#__PURE__*/index_js_default().createElement("p",{className:"info-content"},"UX Design & Engineer Intern")),/*#__PURE__*/index_js_default().createElement("div",{className:"info-item"},/*#__PURE__*/index_js_default().createElement("h3",{className:"info-title"},"Timeline"),/*#__PURE__*/index_js_default().createElement("p",{className:"info-content"},"June 2024 - August 2024")),/*#__PURE__*/index_js_default().createElement("div",{className:"info-item"},/*#__PURE__*/index_js_default().createElement("h3",{className:"info-title"},"Team"),/*#__PURE__*/index_js_default().createElement("p",{className:"info-content"},"Johanna Lee",/*#__PURE__*/index_js_default().createElement("br",null),"James Kafader (Supervisor)",/*#__PURE__*/index_js_default().createElement("br",null),"Ken Miller (Client Point of Contact)")),/*#__PURE__*/index_js_default().createElement("div",{className:"info-item"},/*#__PURE__*/index_js_default().createElement("h3",{className:"info-title"},"Skills"),/*#__PURE__*/index_js_default().createElement("p",{className:"info-content"},/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Wireframing"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"User Flow"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Figma"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Prototyping"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"React"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Jinja"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Django"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Ansible"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Docker"),/*#__PURE__*/index_js_default().createElement("div",{className:"tag"},"Competitive Analysis"))))),/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("h2",{className:"section-title"},"Problem Space"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-container"},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Introduction"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"Energy Science Network (ESnet) is a ",/*#__PURE__*/index_js_default().createElement("b",null," high-performance network")," designed to support large-scale scientific research by ",/*#__PURE__*/index_js_default().createElement("b",null,"interconnecting")," the U.S. Department of Energy's national laboratory system. As part of ESNet's measurement and analysis team, I worked on the ",/*#__PURE__*/index_js_default().createElement("b",null,"Modern Research Data Portal")," as UX engineer intern."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#0075A2'}},"Modern Research Data Portal (MRDP)"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',gap:'20px'}},/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"An interface that improves ",/*#__PURE__*/index_js_default().createElement("b",null,"scientific data sharing")," by separating data management into three components: a",/*#__PURE__*/index_js_default().createElement("b",{style:{fontStyle:'italic'}}," portal server"),", a ",/*#__PURE__*/index_js_default().createElement("b",{style:{fontStyle:'italic'}},"high-performance network")," (Science DMZ), and a ",/*#__PURE__*/index_js_default().createElement("b",{style:{fontStyle:'italic'}},"data service")," (Globus).")),/*#__PURE__*/index_js_default().createElement("br",null))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection",style:{padding:'30px 30px 30px 30px'}},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title"},"Who is this for?"),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/stakeholders.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{height:'100%',marginBottom:'0px'},__imageData:__webpack_require__(7779)}),/*#__PURE__*/index_js_default().createElement("br",null))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Problem"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{color:'black',fontSize:'1.7rem',lineHeight:'1.3',fontWeight:'400'}},"Modern Research Data Portal's current interface and customization workflows are not user-friendly. We're ",/*#__PURE__*/index_js_default().createElement("b",null,"exploring solutions to simplify these processes"),", enabling research institutions to ",/*#__PURE__*/index_js_default().createElement("b",null,"easily manage and customize")," their data portals."),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"How might we simplify data portal user flow, customization, and management for ESnet partner research institutions through Modern Research Data Portal?"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",transition:"fill 0.3s"}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://mrdp.mooo.com",style:{display:"flex",alignItems:"center",textDecoration:'none'},onMouseEnter:e=>e.currentTarget.style.color="#50C5DB",onMouseLeave:e=>e.currentTarget.style.color="black"},/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginRight:"5px"}},"Sneak Peek: Check out MRDP live demo site!"),/*#__PURE__*/index_js_default().createElement(Link,{size:24}))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("h2",{className:"section-title"},"Problem Analysis"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-container"},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"UX Audit"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"I initiated the redesign process by performing a thorough ",/*#__PURE__*/index_js_default().createElement("b",null,"audit of the original MRDP interface"),", aiming to identify key areas for improvement, and then synthesized my findings into a ",/*#__PURE__*/index_js_default().createElement("b",null,"SWOT analysis"),"."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#0075A2'}}," Original Modern Research Data Portal"),/*#__PURE__*/index_js_default().createElement("div",{className:"slideshow-container",style:{marginTop:'60px',marginBottom:'60px'}},/*#__PURE__*/index_js_default().createElement("div",{className:"slide fade"},/*#__PURE__*/index_js_default().createElement("p",{className:"photoDescription"},"About / Landing Page"),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:"sli",src:"../../static/esnetmrdp/mrdpOG1.png",alt:"Slide 1",__imageData:__webpack_require__(9972)})),/*#__PURE__*/index_js_default().createElement("div",{className:"slide fade"},/*#__PURE__*/index_js_default().createElement("p",{className:"photoDescription"},"Transfer Page"),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:"sli",src:"../../static/esnetmrdp/mrdpOG2.png",alt:"Slide 2",__imageData:__webpack_require__(9303)})),/*#__PURE__*/index_js_default().createElement("div",{className:"slide fade"},/*#__PURE__*/index_js_default().createElement("p",{className:"photoDescription"},"MRDP Original Dataset Search Page"),/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{className:"sli",src:"../../static/esnetmrdp/mrdpOG3.png",alt:"Slide 3",__imageData:__webpack_require__(1058)})),/*#__PURE__*/index_js_default().createElement("a",{className:"prev",onClick:()=>changeSlide(-1)},"\u276E"),/*#__PURE__*/index_js_default().createElement("a",{className:"next",onClick:()=>changeSlide(1)},"\u276F")))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#0075A2'}}," SWOT Analysis"),/*#__PURE__*/index_js_default().createElement("div",{className:"slidepng-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo",ref:el=>imageRefs.current.push(el)},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/esnetaudit.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",className:"slidepng",__imageData:__webpack_require__(3669)}))))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Competitor Research"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"To gain a comprehensive understanding of industry standards, I conducted ",/*#__PURE__*/index_js_default().createElement("b",null,"competitive analysis,")," exploring numerous software tool landing pages and competitor interfaces. I then synthesized my findings into a ",/*#__PURE__*/index_js_default().createElement("b",null,"FigJam brainstorm, visually organizing key insights.")),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",transition:"fill 0.3s"}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.figma.com/board/MRZRkVkVs13bk74oygmytL/MRDP-Mockup-Brainstorm?node-id=0-1&t=nJYOGZvGlj3XXSmv-1",style:{display:"flex",alignItems:"center",textDecoration:'none'},onMouseEnter:e=>e.currentTarget.style.color="#50C5DB",onMouseLeave:e=>e.currentTarget.style.color="black"},/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginRight:"5px"}}," FigJam Board! "),/*#__PURE__*/index_js_default().createElement(Link,{size:24}))))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Interview with Client Point of Contact"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"In a meeting with our client point of contact, we discussed the current pain points of MRDP. He provided guidance on ",/*#__PURE__*/index_js_default().createElement("b",null,"UX design improvements and codebase restructuring"),"."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection",style:{textAlign:'left',display:'flex',flexDirection:'column',gap:'20px'}},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#0075A2',textAlign:'center'}},"Key Takeaways"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",marginRight:'10px'}},/*#__PURE__*/index_js_default().createElement(KeyRound,{color:"#50C5DB",size:48}),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginLeft:"20px"}},"MRDP needs a ",/*#__PURE__*/index_js_default().createElement("b",null,"proper landing page")," dedicated to customizable content catered to host institution or lab")),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",marginRight:'10px'}},/*#__PURE__*/index_js_default().createElement(KeyRound,{color:"#50C5DB",size:48}),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginLeft:"20px"}},"Common feature around other competitor interfaces is a ",/*#__PURE__*/index_js_default().createElement("b",null,"instruction page or section")," that guide first users")),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",marginRight:'10px'}},/*#__PURE__*/index_js_default().createElement(MessageCircle,{color:"#50C5DB",size:72}),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginLeft:"20px"}},"Focus on the Django version of the Globus data portal, using data.lsstdesc.org as an example. Similarly, our ",/*#__PURE__*/index_js_default().createElement("b",null,"data search functionality can be removed")," for now.")),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",marginRight:'10px'}},/*#__PURE__*/index_js_default().createElement(MessageCircle,{color:"#50C5DB",size:72}),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginLeft:"20px"}},"Implement ",/*#__PURE__*/index_js_default().createElement("b",null,"customization entrypoints")," to allow research institutions to add custom pages (e.g., \"Our Team\" or institution-specific pages) using Django template functionality.")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("h2",{className:"section-title"},"Problem Solving"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-container"},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Low-fidelity Mockups"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"I determined that the essential user needs of MRDP could be addressed through two pivotal pages, distilling the user flow to",/*#__PURE__*/index_js_default().createElement("b",null," the landing page and the transfer page. "),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("br",null),"The landing page was designed to act as a central hub, providing access to key information and functionalities, while the transfer page was structured to streamline and simplify the data transfer process."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection",style:{display:'flex',flexDirection:'column',gap:'20px'}},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#50C5DB'}},"Landing Page"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{textAlign:'left'}},"Using the comparative analysis, I redesigned landing page to incorporate:",/*#__PURE__*/index_js_default().createElement("ul",{className:"bullet-list"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Introduction Section")," to provide summary and login entry point"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Instruction Section")," that guides users to access the transfer page through logging in"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Featured Datasets Section")," to highlight from institute"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Customization section")," that include e.g., team or institution introductions"))),/*#__PURE__*/index_js_default().createElement("div",{className:"slidepng-container",style:{borderRadius:'0',justifyContent:'center'}},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo",ref:el=>imageRefs.current.push(el)},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/Landing Page - Low.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",className:"slidepng",style:{borderRadius:'0'},__imageData:__webpack_require__(2251)}))))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"boxsection",style:{textAlign:'left',display:'flex',flexDirection:'column',gap:'20px'}},/*#__PURE__*/index_js_default().createElement("h3",{className:"boxsection-title",style:{color:'#50C5DB',textAlign:'center'}},"Transfer Page"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"I merged the search and transfer page to streamline the ",/*#__PURE__*/index_js_default().createElement("b",null,"process of finding source and destination points, "),"taking inspiration from travel booking and cloud storage platforms."),/*#__PURE__*/index_js_default().createElement("div",{className:"slidepng-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo",ref:el=>imageRefs.current.push(el)},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/Transfer Page - Low 1.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",className:"slidepng",__imageData:__webpack_require__(3512)}))),/*#__PURE__*/index_js_default().createElement("p",null,/*#__PURE__*/index_js_default().createElement("b",{style:{color:'#766459',fontWeight:'700'}},"Transfer Steps:"),/*#__PURE__*/index_js_default().createElement("ol",{className:"bullet-list",style:{margin:'0'}},/*#__PURE__*/index_js_default().createElement("li",{style:{margin:'10px'}},"Once user logs in, users have the option to select the ",/*#__PURE__*/index_js_default().createElement("b",null,"source, destination, and dataset to transfer")),/*#__PURE__*/index_js_default().createElement("li",{style:{margin:'10px'}},"Source and destination search expands so that users can choose and scroll through"),/*#__PURE__*/index_js_default().createElement("li",{style:{margin:'10px'}},/*#__PURE__*/index_js_default().createElement("b",null,"Search engine")," allows users to filter through datasets and find an appropriate one"),/*#__PURE__*/index_js_default().createElement("li",{style:{margin:'10px'}},"Once selected, dataset should be added to the transfer queue "),/*#__PURE__*/index_js_default().createElement("li",{style:{margin:'10px'}},/*#__PURE__*/index_js_default().createElement("b",null,"Check transfer queue ")," as a final confirmation of ",/*#__PURE__*/index_js_default().createElement("b",null,"datasets to transfer")))))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"High-fidelity Mockups"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"Following client approval of the low-fidelity mockups and user flow, I proceeded to develop a high-fidelity prototype that showcased the customization capabilities of MRDP. This included a ",/*#__PURE__*/index_js_default().createElement("b",null,"detailed example featuring ESNet's branding"),", such as logos and color schemes, as well as tailored content to demonstrate how partner institutions could personalize their data portal experience."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"mockup-box"},/*#__PURE__*/index_js_default().createElement("div",{className:"slidepng-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo",ref:el=>imageRefs.current.push(el)},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/Final - Landing Page 2025.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",className:"slidepng",style:{border:'1px solid black'},__imageData:__webpack_require__(4660)}))),/*#__PURE__*/index_js_default().createElement("div",{className:"slidepng-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo",ref:el=>imageRefs.current.push(el)},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/Final - Transfer Page 2025.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",className:"slidepng",style:{border:'1px solid black'},__imageData:__webpack_require__(3785)}))))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Core Improvements"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},/*#__PURE__*/index_js_default().createElement("ul",{className:"bullet-list",style:{margin:'0'}},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Optimized Transfer Workflow:")," Streamlined the source-to-destination selection process, creating an intuitive transfer experience."),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Enabled Customization Access:")," Integrated clear entry points on the landing page, allowing partner institutions to easily tailor their portal's content."),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Enhanced File Navigation:")," Simplified dataset browsing within source nodes, improving user efficiency."),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Improved Directory Tracking:")," Implemented a breadcrumb trail, enabling users to easily navigate file locations."),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("b",null,"Organized Transfer Management:")," Introduced a transfer queue, providing clear visibility of selected files and transfer status, reducing errors."))))))),/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("h2",{className:"section-title"},"Final Deliverable"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-container"},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Development"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"During development, I focused on building a clean, digestible codebase ",/*#__PURE__*/index_js_default().createElement("b",null,"to simplify MRDP customization")," for research institutions."),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",transition:"fill 0.3s"}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/esnet/data-transfer-bootstrap/tree/esnet_branch",style:{display:"flex",alignItems:"center",textDecoration:'none'},onMouseEnter:e=>e.currentTarget.style.color="#50C5DB",onMouseLeave:e=>e.currentTarget.style.color="black"},/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginRight:"5px"}}," MRDP Github Repository! "),/*#__PURE__*/index_js_default().createElement(Link,{size:24}))),/*#__PURE__*/index_js_default().createElement("div",{style:{display:"flex",alignItems:"center",transition:"fill 0.3s"}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://mrdp.mooo.com",style:{display:"flex",alignItems:"center",textDecoration:'none'},onMouseEnter:e=>e.currentTarget.style.color="#50C5DB",onMouseLeave:e=>e.currentTarget.style.color="black"},/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph",style:{marginRight:"5px"}}," MRDP Example Deployment! "),/*#__PURE__*/index_js_default().createElement(Link,{size:24}))),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"This deployment was delivered to the Science Engagement Team in order to distribute to any ",/*#__PURE__*/index_js_default().createElement("b",null,"ESnet's partner administrators that requires MRDP.")))))),/*#__PURE__*/index_js_default().createElement("div",{className:"section"},/*#__PURE__*/index_js_default().createElement("h2",{className:"section-title"},"Reflection"),/*#__PURE__*/index_js_default().createElement("div",{className:"flex-container"},/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("div",{className:"team-photo"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/esnetmrdp/ESNetMRDPPresentation.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{marginTop:'40px',borderRadius:'10px'},__imageData:__webpack_require__(1510)}),/*#__PURE__*/index_js_default().createElement("p",{className:"photoDescription"},"Student Poster Session for Berkeley Lab Computing Sciences",/*#__PURE__*/index_js_default().createElement("br",null),"Presenting to ESNet Executive Director Inder Monga")))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"User Flow Redesign"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"My project aimed to design for a ",/*#__PURE__*/index_js_default().createElement("b",null,"niche group of lab researchers,")," shifting my focus from previous GenZ targeting design projects. I aimed to create a UX that prioritized versatility and approachability, leading to a redesign of the website's user flow, which simplified navigation by ",/*#__PURE__*/index_js_default().createElement("b",null,"consolidating two-page operations into a efficient single-page experience"),"."))),/*#__PURE__*/index_js_default().createElement(proxy/* motion */.P.div,{initial:{opacity:0,scale:0.9,y:20}// Initial state
,whileInView:{opacity:1,scale:1,y:0}// Animate state when in view
,viewport:{once:true}// Only animate once
,transition:{duration:0.3}// Animation duration
},/*#__PURE__*/index_js_default().createElement("div",{className:"subsection"},/*#__PURE__*/index_js_default().createElement("h3",{className:"subsection-title",style:{color:'#0075A2'}},"Balancing Usability and Developer Adaptability"),/*#__PURE__*/index_js_default().createElement("p",{className:"paragraph"},"Another focus was creating templates that ",/*#__PURE__*/index_js_default().createElement("b",null,"future developers could easily customize"),", ensuring that my design was both ",/*#__PURE__*/index_js_default().createElement("b",null,"user-friendly for end-users and adaptable for developers"),". This experience broadened my perspective on user experience design and highlighted the importance of balancing technical requirements with usability.")))))),/*#__PURE__*/index_js_default().createElement(Footer/* default */.A,null));}/* harmony default export */ const pages_ESNetMRDP = (ESNetMRDP);

/***/ }),

/***/ 9407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createLucideIcon)
});

// EXTERNAL MODULE: external "/Users/johannalee/repos/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(5912);
;// ./node_modules/lucide-react/dist/esm/shared/src/utils.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();


//# sourceMappingURL=utils.js.map

;// ./node_modules/lucide-react/dist/esm/defaultAttributes.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */

var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};


//# sourceMappingURL=defaultAttributes.js.map

;// ./node_modules/lucide-react/dist/esm/Icon.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const Icon = (0,index_js_.forwardRef)(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => {
    return (0,index_js_.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: mergeClasses("lucide", className),
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0,index_js_.createElement)(tag, attrs)),
        ...Array.isArray(children) ? children : [children]
      ]
    );
  }
);


//# sourceMappingURL=Icon.js.map

;// ./node_modules/lucide-react/dist/esm/createLucideIcon.js
/**
 * @license lucide-react v0.479.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */





const createLucideIcon = (iconName, iconNode) => {
  const Component = (0,index_js_.forwardRef)(
    ({ className, ...props }, ref) => (0,index_js_.createElement)(Icon, {
      ref,
      iconNode,
      className: mergeClasses(`lucide-${toKebabCase(iconName)}`, className),
      ...props
    })
  );
  Component.displayName = `${iconName}`;
  return Component;
};


//# sourceMappingURL=createLucideIcon.js.map


/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-102787b83fb889e09b9d6c512829bf56.png");

/***/ }),

/***/ 3785:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAvCAYAAADjNOpjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFMElEQVR42qVXSXMbRRTWLzZXikBCQgihoIADB6pyowiJbRJjoDjkQMWkCIF4gcjxImk8+77PyNrlj/d6RopsaSInTNWnfr19/fXr14tqphNga+8I+4dNNFoKZNWE44VvjZoT5Xj3zo94tPUXtn5/hidPtxGEKTrdwWvR7vRxOoN2pyfKa9+vPcS3d1dxd/UB7q1vgPPf3f9BpK/D+sbPWH2wibWHPxE28WDzF1Fee+/qDbz/4U1cufYRrpAtcK0ou3rjFj64/vEcuO7mJ5/h+s3buHHrU4Hbn38pOGqo+EajEXrdLvr9PgYDxgADsnu9HobDYVU31MbjMxQYCzARf1EU4fj4GLIsQ1EUqKoKSZJEPgiC6aBnZ0XfIj2rVvi235TQMAyhRNd1oSQMQ1H+avQiFXaZnlH9pGyOcEjyZ8HTGbELCJznAQJCFMfCHZxyPj89RW8sqM8TLvsmSqpwTiEXsKMZnufB932ROo4jUsZsp0v5kMksy4JpmiUs4U+XyEOaIofKqIwCBvsxpmnvbG+LdnOEb/qxXh6g0ylidY4wy1IxYpqmZGeFnSSUJrQIIZIkJiSiPo0jtNMEnTxFt50tXmXLciArGhRVpyDWcSKrUDSDAlkVNtexrVHZoWLiD8nGk2MNT5sm4nZvnjBN29ANF6bhUEw65EOyTYfKHFilrZHt2y7qdoo1KcfGSY6HUgY1yKdumBLGSQ7Hj9F0M9hBCsNP0SI7DBKcuClkL6WFS3BMZdwuDGLo1CbxI3JNPq8wIYWG6WG7QdMjpS3Vxk5Dg2172Jct7J9YcN0Qu00dMrVTrAA7TQMGHdDxIkIutKkDn+AOpZZT2J4XwaI817lkG3ZAxBGdzpGoZ3shYSIII2yrATQngmwXtk9T2jdC1AkBTXNXj6C6MTTCrhaKPkmlQhpRVgxYtk/TdyHJupimqtvQdIvIE1HOSnkWimZRGlVP2fFivLCJmDqqboIDJxeqjhxeIFoUWgyPFsbj1I/F3cPk1YQ0Wl0yhM80y8eBbMIngobmQDI8scpuSTZBJWEUZ4Xj3VA4nK9E1w2E7YoFmZSfB/fhvnOEvd4Ap6d0FXbeDNyH+/7vw2Hp8cXHVavZQrPRpNjzwft9OBwtxWAwFOkcYRjn+Mfg+ErofLPEk0ThZwkvEIUNp6bliUXg/a2WdZZdhNrCRVFtClR2NMUhd54Q2OXuccrdwnHK8CjouU1L0hYopKV/Yb5SqGimGJnJOJg5PaeQgnpCLp1oixVKNu/bQtFEBau6qJDzDLZ5kMWEyXkfsv/mFbpThVwvCGnQlqRWKQwLhaW6iwonqmYVFnXBcoXyjEJWNLvKvOrsQ67j7cdnaaUP+ThyhA+DqUKnwoeTfOVe3tNjqA5BNXBC6vj4YlJWNDnSmETVOEaNcsBo8V7u00Xe7Q/QI/Qp+vvlThjRu3DMl3yZ8juR63mHcFvuM5h5L752Lw/GdJJT24x2VlbaXHapvTz7jct7ezceY+V5ine2dKw8VrGynVHZ6FybSxFOvi71tTtj2O0hYSDs7ugSCqteVpd9cV1a4Vudh3neoTjKxOnboz8u3W5fgPOm61DA0+sgzRGnGdrt7lLUeC/u7R/j8bMd/Pb0Of7crePvfw/wsiHji/vf4KuNO/j613u482gd9VaTniDpNKAXocaVfFocNiTUDxp4Sf/5jpoydHpumLYF1WTY0O0iqL0Lt95F1PiHr8qQ7tgwyoqUwGV+wA+k4pEk8kvIpoST+3UKznO5x2lUYjkZE/4H7tfeyM5t6tUAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/8f7760162a9b1cf5305fc970d2492d1c/599f0/Final%20-%20Transfer%20Page%202025.png","srcSet":"/static/8f7760162a9b1cf5305fc970d2492d1c/1704f/Final%20-%20Transfer%20Page%202025.png 360w,\\n/static/8f7760162a9b1cf5305fc970d2492d1c/a9e1c/Final%20-%20Transfer%20Page%202025.png 720w,\\n/static/8f7760162a9b1cf5305fc970d2492d1c/599f0/Final%20-%20Transfer%20Page%202025.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/8f7760162a9b1cf5305fc970d2492d1c/3924d/Final%20-%20Transfer%20Page%202025.webp 360w,\\n/static/8f7760162a9b1cf5305fc970d2492d1c/32bb7/Final%20-%20Transfer%20Page%202025.webp 720w,\\n/static/8f7760162a9b1cf5305fc970d2492d1c/1e832/Final%20-%20Transfer%20Page%202025.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":3383}');

/***/ }),

/***/ 1058:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/1624f/mrdpOG3.png","srcSet":"/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/aeb79/mrdpOG3.png 400w,\\n/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/47126/mrdpOG3.png 800w,\\n/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/1624f/mrdpOG3.png 1600w","sizes":"(min-width: 1600px) 1600px, 100vw"},"sources":[{"srcSet":"/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/dff21/mrdpOG3.webp 400w,\\n/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/b2a35/mrdpOG3.webp 800w,\\n/static/1b3d4cb70a4a84cc5b5eb8c88d535e50/e9d78/mrdpOG3.webp 1600w","type":"image/webp","sizes":"(min-width: 1600px) 1600px, 100vw"}]},"width":1600,"height":900}');

/***/ }),

/***/ 582:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAYAAABFA8wzAAAACXBIWXMAAAsSAAALEgHS3X78AAABN0lEQVR42kWQ20oCURSGe8OO0IU648wO7QG66Q3qxiR6AC8qQoIgCJFISqg8jGF10Yk0yUYnDzOjjp0uvrZjh4uPf2026+djTegFhz+K7j8FGz1vI0p91PQDM+tJpuI7TK5t+/Pcxq6f0yNi2wT3rxAXHhP+4qhMLmunFtpZC+287b/1fBe9/I6SSBGNLiL0CKqio6pjFIkQEUKzcwTjW4jrr59Co0c4azIfSxJIZAhsZlFSdwj5p5Q8lg4M3HaL4ccng+EbfW+I5+NR77q0mw1WjsoEjP6vobSTNuETEy3X8Q218w5CziFjwHK6zP1jhWrdpGGa2I7Dq6RuuxzeVKjVnogdXxMoykJRdBjjynv1xmm4fi78GI4Kq5VHai8mTcui5zrsXd6Se7ZwpOmwbbGauSRoeHwDig410NlQD58AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/47db6722ca79aa657512f9b0a527b283/70779/Artboard%2061_1.png","srcSet":"/static/47db6722ca79aa657512f9b0a527b283/a24a4/Artboard%2061_1.png 601w,\\n/static/47db6722ca79aa657512f9b0a527b283/679b5/Artboard%2061_1.png 1201w,\\n/static/47db6722ca79aa657512f9b0a527b283/70779/Artboard%2061_1.png 2402w","sizes":"(min-width: 2402px) 2402px, 100vw"},"sources":[{"srcSet":"/static/47db6722ca79aa657512f9b0a527b283/a3cc2/Artboard%2061_1.webp 601w,\\n/static/47db6722ca79aa657512f9b0a527b283/ae91f/Artboard%2061_1.webp 1201w,\\n/static/47db6722ca79aa657512f9b0a527b283/1c39a/Artboard%2061_1.webp 2402w","type":"image/webp","sizes":"(min-width: 2402px) 2402px, 100vw"}]},"width":2402,"height":601}');

/***/ }),

/***/ 9972:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/3bafb9ac58292f151ca44b8be8c8449f/ab05e/mrdpOG1.png","srcSet":"/static/3bafb9ac58292f151ca44b8be8c8449f/4c798/mrdpOG1.png 400w,\\n/static/3bafb9ac58292f151ca44b8be8c8449f/948fb/mrdpOG1.png 800w,\\n/static/3bafb9ac58292f151ca44b8be8c8449f/ab05e/mrdpOG1.png 1600w","sizes":"(min-width: 1600px) 1600px, 100vw"},"sources":[{"srcSet":"/static/3bafb9ac58292f151ca44b8be8c8449f/2f986/mrdpOG1.webp 400w,\\n/static/3bafb9ac58292f151ca44b8be8c8449f/29a5b/mrdpOG1.webp 800w,\\n/static/3bafb9ac58292f151ca44b8be8c8449f/99c6d/mrdpOG1.webp 1600w","type":"image/webp","sizes":"(min-width: 1600px) 1600px, 100vw"}]},"width":1600,"height":895}');

/***/ }),

/***/ 9303:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/8508323deee8a88274fc90ad83b79436/63184/mrdpOG2.png","srcSet":"/static/8508323deee8a88274fc90ad83b79436/4c798/mrdpOG2.png 400w,\\n/static/8508323deee8a88274fc90ad83b79436/948fb/mrdpOG2.png 800w,\\n/static/8508323deee8a88274fc90ad83b79436/63184/mrdpOG2.png 1600w","sizes":"(min-width: 1600px) 1600px, 100vw"},"sources":[{"srcSet":"/static/8508323deee8a88274fc90ad83b79436/2f986/mrdpOG2.webp 400w,\\n/static/8508323deee8a88274fc90ad83b79436/29a5b/mrdpOG2.webp 800w,\\n/static/8508323deee8a88274fc90ad83b79436/d9b7e/mrdpOG2.webp 1600w","type":"image/webp","sizes":"(min-width: 1600px) 1600px, 100vw"}]},"width":1600,"height":896}');

/***/ }),

/***/ 4660:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAvCAYAAADjNOpjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGSklEQVR42rVW6W9bRRD3HwgI+BsQEh/4hEBtoZQeiEMCFQSiIiBERendtHwoUkSPtCJp09yx4/h+tt/zuy/f9rP9Y2bXz3GStqkKWPp5dmdn583OzsxOQjMczK/tIJnOIZtXUCprMCz3pZEwvAaOzNzE3PxjzD94hIcLy3DcEO1O/4XQavckxvPE71du4PyFy7hw+TouXp0Fz3+7dE3Qw8B7Ll+7iSs3/hDg/YljH5/CR5+cwYcnToPHR46fxDEaH2VK8+fhKOHEmc9x+rMvcerTL3D85Bkk8K9+owOcxHA4ggCtDft9XJ1fwQczs7j15x0hMBDrQ6JjDAaCXyyW8M3fWdzO2Yi6HYx4P8kKC4cj+aXlgoZXjnyLN87O4s1TPyGdK2F3nTCWW/Mi3NlW8cvDJH5+kESv3Zb2jmKFQym4lFPx+sxdvPruabz2/ldIFSqC3+128bBo0noZ604Xy94QjVYXnmFCLVfRbnd3jzztD1b764VreOe9E7j+1+JkxfEDvHU7g+/vbSFjBBjbi4gM6Q+GwrJ9CkcIwzohRKvVQhAE6LSa8D2fvt4WFi5tZTCXIYvCLh25j02zgUHUP3gp8cCybVRVDZUxyoSabiCKInFhdBu4b/QxZw6xUPXx9qKP8xsahq3GxH97FNZ0XdycWlZgaCpsQxe8fn/Xis5AbirpDs4tFvDDQg5KzRor3GchH80LG0iZAXacJkp1SqVej44V7TlSn8zNmnU8LNi4lfNhOOHBI8cuDWnvTLGPs5sOfsx30YhGe8KXrdA7Q+itAYpeG27YPPDBiYXsg1Ecb/vzYbzG4RUNR8/NncTLJNs0nqqw3iD/eXX4fgP1oI7A5zHRoEG378E0bVgE2/GFjERdyPKY97IOoZBPyfXPMF3oloe05kM1SYnF8FEuq1hOl7C0XUSlotEHfLHGMmnNg06U97IO1pVgs10vhEsMm4rt/UodilWHx3NCgxy/ZrQE6mSVaQcU8CHKTgP3SNZy63CcQOgYSQtH8Mjs9E4ea+tJpNNZbCV3kKXCsJMpYHVtC8lkGqnUDlLbWZQrNUE3NlLYJppMZVAsVeGTe0Rx4D+XvpLLl4VS3sBQNROFQpk251AoVlCp6gSDgt0hWUV8kHksW1VNOnJdHllWkx69Bz10e5GgEl10utO8rkCr3SF+X0Dy+E3pCh0vFTaH/YTCBocNOTyGH0ga1lsChuWIJ5LHHB4xlZAyjThsRL1zAxh0exbdlEeLnFJu2EKVfFQoKNjY3MY6IU8+ZX8KSsWXxwy+FJd0IPYhh0fYpLrXkbWP87NNPilWDKRpoyIuShMbYyVSsTL5yCRshIU08cky06bgNmwU6Cb1egeq4WI9ncf2Tk6ESJopdRhMGfwRhTqNMoEVYlqhR0es6C7yqo2iaom5Qlny5Mkqlggrq5vIZAvj+MyLECspVWEAZ46wcDTxIVlITvXJdw4FOedwk9qKAh3x8dKKACvlIM5ki+KIHKcchzr1RpyOexTyxKD0YbhBU8Dxm0JY1QwKXEMoYMpKajoXikCAlXEu7zlyRO8Fl/oeozemBH5PeG0wkA/8YDyOIpaPJCKJaNwA/L+BzQm+H3wUk45kkeOfJcP8xv56qFGIcG1jaFzjSAH7R6maSGfpZnMKPa2W9JklZSbyxlQ9lGFTR40XSbhmSZi2BPNMJxSvm27v8mM5sYf2so7JkW2a8JE2qVovVYPJJoNg0xOwTA/7SlWOjfHHWP4xyW5qgRjb0wo5sHXKZdORVIxjpY4MqafxdVtaXrMCoQPTFTtLOZsvqahqFhQqmOwrRob4RYXaE4rDsmZN3pQ0+bRUoQJLshXiu95UgeWbqlRrIpVi8AvHkPmqUmGoiHHMZ56iEF9U85rQMTkyB6vsYsfdLD/oFLwM7l6n13b5ci4bgKHQsduKPKMZGO1ZGL14YP+nmcIRziWf29ouVZgOPToMnmumAS8IEVBX5lND2mx2DkVCo8qxlszg/qMV3F14gsXVLSxtbCNF2fH1pXM4OzuD725fxMzcVWzlc3Ad2WXIzuIgErzI9S1NxXOLqnKKKvIOFVEOH02n0q8xdFR1UyiKw+lZSPAf1zVuRTiWBOU2RNS7kNqMULQaYn6IsonCOFgnsOP0YuqNcbgyVvgPHsK9ZYEfufwAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/cd3915d5a14954e5cb087ad517bf7e2a/599f0/Final%20-%20Landing%20Page%202025.png","srcSet":"/static/cd3915d5a14954e5cb087ad517bf7e2a/1704f/Final%20-%20Landing%20Page%202025.png 360w,\\n/static/cd3915d5a14954e5cb087ad517bf7e2a/a9e1c/Final%20-%20Landing%20Page%202025.png 720w,\\n/static/cd3915d5a14954e5cb087ad517bf7e2a/599f0/Final%20-%20Landing%20Page%202025.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/cd3915d5a14954e5cb087ad517bf7e2a/3924d/Final%20-%20Landing%20Page%202025.webp 360w,\\n/static/cd3915d5a14954e5cb087ad517bf7e2a/32bb7/Final%20-%20Landing%20Page%202025.webp 720w,\\n/static/cd3915d5a14954e5cb087ad517bf7e2a/1e832/Final%20-%20Landing%20Page%202025.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":3383}');

/***/ }),

/***/ 7779:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeklEQVR42mOwt7dn2b9/PxyHhoYyMzAwMCFjZHlj4zRWBhBwLbZjcC7xZ3AtsGaAAEYoDdZEPAA6AEhyMDgX+DO4ldQzuFfaAvmSQCwFNvTq1avynz59Cnr9+rX/mzdvQj58+KCswsDA3lmaLVUY6iZ04cJO7rdv33oA5QLfv38fsHz5cmWQI1hdi3UY3IvDGGxTFIF8kJgmEHMyPH/+vP/379//gRq+//z58z/Q4IUgiayoIHkQ/fThQ9dPnz+D5H//B4J3797VgxyaO3EbO4NjoT6DS649g3GoHFAIFBQsDE+ePJl09+7d/4cOHfp67969/0+fPl0M0uDn58cLooEudrl+/fr/Xbt2/bh9+/b/Bw8etYHERcwjVRk8yn0Z3MpcGbyqDMDBAQr/N2/eTvnw8eP/O3fufAd67T/QW0tBcs7OzsIgWz9//uwKFPt/7dq139+/f////uPHVpC8mk+RCINbURIwcioZXMo0IQFcz8Tw+PHTvPfv3j0GevUqEL8Eeq0aZFBhWpSurYacJDBIdIDiN4H4LhC/AvooCeLliewMLqWqbG5FGkkREVKtiaGiFbEBwgygZFLWv1xz5tJNItsWL+abOXMma319PVN9aCjb//8MjEB5ttaSPL3uijzT9oo8Y1dLSzFw4IPCzq0kmNWt2LgzI1S9OCnKrjQdGAzBHQu0I7qX/w/Mb1np7hKY4hsYX+AbFJ/mHRijA3JJWloaa1qoC39utAcfiPbIzWUHJzVQ2HmWxzH41FrC1IEcwhDQtlA4pKhjenB+U1C4f4JsYFi6vm9wsl5QVKZSaGgaP0Y6hCR8BgaXQnsGl+ImBo8SPeSEDQBlXB7fsoMyhAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/5af9d557f7fea5474a812da1b93e03a9/c9a93/stakeholders.png","srcSet":"/static/5af9d557f7fea5474a812da1b93e03a9/aa948/stakeholders.png 503w,\\n/static/5af9d557f7fea5474a812da1b93e03a9/7ab02/stakeholders.png 1006w,\\n/static/5af9d557f7fea5474a812da1b93e03a9/c9a93/stakeholders.png 2012w","sizes":"(min-width: 2012px) 2012px, 100vw"},"sources":[{"srcSet":"/static/5af9d557f7fea5474a812da1b93e03a9/25ab1/stakeholders.webp 503w,\\n/static/5af9d557f7fea5474a812da1b93e03a9/388d3/stakeholders.webp 1006w,\\n/static/5af9d557f7fea5474a812da1b93e03a9/83723/stakeholders.webp 2012w","type":"image/webp","sizes":"(min-width: 2012px) 2012px, 100vw"}]},"width":2012,"height":1051}');

/***/ }),

/***/ 3512:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAjCAYAAACU9ioYAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeElEQVR42p2WC0/qQBCF+///kgnRGHwDKggqgiIPBQEp9YnCXL7JPbWUGu91k5N9dc/OzJ6dbXB/f2/VatVub2/t5ubG0el0vkW3243R6/ViMDcejy2o1Wq2sbFh29vblsvlbHNz04rFopVKJa8LhYIdHBys4ejoyME3JycnXjebTQvu7u6cnV1arZaj3W5bo9Fwa+mPRiN7fHyMMZlMVvD8/GzT6dQGg4EFEJ2fn9vOzo7t7e3Z4eGh7e/v++6M0WZTQiOwRm73+32fpwYB1sE8HA7jQfqqAQuA4oVrl5eXbgixp8YjOAIC+fn5aYvFYgW/KbjuhCJQ/fHxYeVy2S4uLqxer7s119fXdnZ2ZldXVz5OzLRG69YIVegzCV5eXhyvr6/ep6aPV+ny9PT0RcgHImBR1oKkRfP53MF31DEhkqBAzMmiMbSH2Ak20uEQCDqgzRjS4oB0oJQoir4IqSGE7PT01I6Pj11G6O7t7c2tphbe398dxFvxdEK5DJgUZrNZvCjZTkIbKTwQOyGFD8Iw9DhQsxugTw2poE0VPxGuuAw7IkfQxIb64eHBY0RNnADfpyGXYwvTOky3/7U4YfJQKpWKny4ZCJAYuFpKGkoWCJt5aqCwkShiQu4qiYGTRTqkL26GNqHN7aGNEhjnFqEGNqKgiJiQmDHJAj5mZ/IcY5AB+khKc7SRGllnzUKCv7u760l2a2vLiUXIBoC2NsUTQHrLJMRCCADWkBAgIQzcGKxSdpar9AHqyHSZxbp+EOCSbg6kxJV52pByDdlAhGuHwuJ8Pu/Esog3Botxk7Ys5pSpsRTdrhHSQRJMcvGTkqGfBBapTZ7kZsWESWErDf22QLwibNzgOcUNrFDWJm0RDvQmjbaX1ldryziXKzb+y7FCiLlIhwMg4JyYyHjpGONbP7ClAqJwYvXO0Jq9oU3GGYRkFTI2Jwe4lyQFQkIWIbZkJN6U/nJjW8ytG85sEM2cfJFOXxBiFSIlq0CCxYyxERtjAfOMR9HU+qPQBuPQwqV3K9lGh5GVYbAMqeAyufC7dyaTMKtgORrFwp9U4AkW90jlZF1l5OTbQWbWq5h+AtJZ3A8FeXBvkQwBJ2Y6oDSSb7SgB4t5/1nSP4sOAzD2vyLHA8ISwAp70lVZIYt+gl4/J4RMlkGe/F3jrnKfs6A/2uRjz5/DH0Q3QObpzE3CAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/4ec22b98e5a82df6b8ca3ffd0f53100f/0aaf4/Transfer%20Page%20-%20Low%201.png","srcSet":"/static/4ec22b98e5a82df6b8ca3ffd0f53100f/76a78/Transfer%20Page%20-%20Low%201.png 563w,\\n/static/4ec22b98e5a82df6b8ca3ffd0f53100f/bc365/Transfer%20Page%20-%20Low%201.png 1126w,\\n/static/4ec22b98e5a82df6b8ca3ffd0f53100f/0aaf4/Transfer%20Page%20-%20Low%201.png 2251w","sizes":"(min-width: 2251px) 2251px, 100vw"},"sources":[{"srcSet":"/static/4ec22b98e5a82df6b8ca3ffd0f53100f/97b30/Transfer%20Page%20-%20Low%201.webp 563w,\\n/static/4ec22b98e5a82df6b8ca3ffd0f53100f/e9852/Transfer%20Page%20-%20Low%201.webp 1126w,\\n/static/4ec22b98e5a82df6b8ca3ffd0f53100f/8f08a/Transfer%20Page%20-%20Low%201.webp 2251w","type":"image/webp","sizes":"(min-width: 2251px) 2251px, 100vw"}]},"width":2251,"height":3942}');

/***/ }),

/***/ 2251:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAcCAYAAABh2p9gAAAACXBIWXMAAAsTAAALEwEAmpwYAAACwElEQVR42o2VyRLaMBBE+fRU5WtyyDH5C+DEvu/7YgwYm2XCk6uNMUtFVVOypFGrW5oZ5xqNhpVKJavX69ZsNp+Mtayl1/f7vdFut5up5crlsuXzeatWq9Zut63VaiUbu92us16vZ/1+39lgMLDhcOjWt9vtK+ByuXRAbOp0Om4TbOmjKErsfD474/t6vdp6vbbD4WDZlpvP5zYajRwTAMVSsrLflUrFHQgBAT4x5ERNpk3tcrk4g5V6MX3LUIAswnY2m9nxeEwcuCeuJQgCB7Tb7ZxPGIbfAXFEOheu19NBMOMQfAD1fd9Op9N7yUgYj8dWLBZd+PDahULBJpOJcwAcQDYDyPdXQE5EDjIEikw5e57nDD8Oh+lqtXKS38ahJOOMA+DpxjqbYYRpTP8RkAkY6aKRhMGUTczBTKDI/gioEOB+NpuNA4ItILVazQUwYwHQCzwNKFAHyCKhQdgonQAmzbgvGiAEt0IINZBQJt1hnSUMcST6YYkkmJE5GgNMFjHWXbIHlp7n3/vg+VFggEwcdG8w0ZzuFT+ReMTr3W8/tevlEAPKQWnGWIGsDJEh9fHKcWhF3m/zhj8t2v2NATEkEczIIO4oFgQ52UOMEvz0XD7MAEU+Cg6rX7bs/rBg++fBUDnKQwCKM3dGZeEAgHhtZU8YxpniXvhyB953LArXD0AABATbxWLhGPNQACId40G4jmy18f04RZNHSZeodMmCge5YveYEeDoF90O3cdjgoJPT6UXYULWn02mSbmlm9CoSSoYksJmgZcs6shUabGAMcx2aBnrKZZUoHkGZwjxjHcZBjBU6Uva2OKiEISltKgqY1sUOAtnK5ACZTP9LFNjfTLLTv4oEkNjj38wfjXBBoh7hkwEa57D3Kpm4494AUqr9T1O1eQHkFABhR/kimPlRkXKkm4x5GapIAmRnJf8DXWtuM9QdFWEAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/015e9733c2ea1937f9f87420725e7a88/92a45/Landing%20Page%20-%20Low.png","srcSet":"/static/015e9733c2ea1937f9f87420725e7a88/bafa4/Landing%20Page%20-%20Low.png 727w,\\n/static/015e9733c2ea1937f9f87420725e7a88/63df8/Landing%20Page%20-%20Low.png 1455w,\\n/static/015e9733c2ea1937f9f87420725e7a88/92a45/Landing%20Page%20-%20Low.png 2909w","sizes":"(min-width: 2909px) 2909px, 100vw"},"sources":[{"srcSet":"/static/015e9733c2ea1937f9f87420725e7a88/a4bc5/Landing%20Page%20-%20Low.webp 727w,\\n/static/015e9733c2ea1937f9f87420725e7a88/8708c/Landing%20Page%20-%20Low.webp 1455w,\\n/static/015e9733c2ea1937f9f87420725e7a88/d2936/Landing%20Page%20-%20Low.webp 2909w","type":"image/webp","sizes":"(min-width: 2909px) 2909px, 100vw"}]},"width":2909,"height":4004}');

/***/ }),

/***/ 1510:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQACBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABS59E5rsZH//EABwQAQACAQUAAAAAAAAAAAAAAAIBAxEAEhMhIv/aAAgBAQABBQIdFWzybTqH4FqwnOf/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Bp//EABsQAAICAwEAAAAAAAAAAAAAAAABAiEQQXKx/9oACAEBAAY/AkRUFW2X4KhdY//EABsQAQACAgMAAAAAAAAAAAAAAAEAESFRYaHx/9oACAEBAAE/ITQNTLonwimbLGQbUL3EaLR1xTi5/9oADAMBAAIAAwAAABB7H//EABcRAAMBAAAAAAAAAAAAAAAAAAABEYH/2gAIAQMBAT8QmiI//8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAR/9oACAECAQE/EBmt/8QAGxABAQADAAMAAAAAAAAAAAAAAREAITFBcYH/2gAIAQEAAT8QEL2ImHcogHAm1znjGxWFot4gAjK+mWeAQD5jQOgxoZ//2Q=="},"images":{"fallback":{"src":"/static/57d3163b6e76c7f15c19dfb00282e1af/44dcb/ESNetMRDPPresentation.jpg","srcSet":"/static/57d3163b6e76c7f15c19dfb00282e1af/66b2a/ESNetMRDPPresentation.jpg 2064w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/a1aea/ESNetMRDPPresentation.jpg 4128w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/44dcb/ESNetMRDPPresentation.jpg 8256w","sizes":"(min-width: 8256px) 8256px, 100vw"},"sources":[{"srcSet":"/static/57d3163b6e76c7f15c19dfb00282e1af/5d735/ESNetMRDPPresentation.webp 2064w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/4b44a/ESNetMRDPPresentation.webp 4128w,\\n/static/57d3163b6e76c7f15c19dfb00282e1af/c7522/ESNetMRDPPresentation.webp 8256w","type":"image/webp","sizes":"(min-width: 8256px) 8256px, 100vw"}]},"width":8256,"height":5504}');

/***/ }),

/***/ 3669:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAADiUlEQVR42m1TzW8aVxB/MR+7y/KxgJfFmADGdnAc5DZ1pWDV8iqxIdtgcOzqFTBrrwPVM8RdLIIRsV3pndIP5ZQjUqRKPeTAqbUqS1YPSD3kxNGnXCL1H9nOo/UtI430NPrNzG9mfg+hl38F0as/FESvQogO7egThq8tZ/zXIY9aDDcIo9eA/elP/6ewqNlsLokPCoon+fk85/MleJ6PLcqy26J0ghDiIGTZsWxZjnqrpTQajfso/UBxJlIpT2TmDsdxiUwmIwwG2PYfljjQ6SFe1LNZ8bi0lWju5pPMqfld9JduLULr9QCtVr3G8CPfbtcDP9Rwyqxq3o5emCFPtdla8XGKmqa309FF06x6j40tCZ22yooMjHw+X9Lv98fCkhQPwVsBtlRVxytgDE1IfGU+kwOBgDcYDKYURUkkwuG4j+NmWIzCRBhjGzoh+9Cp6HmOC3PfQ+e9r9fvVHLqgl7IzvQOSwkKjFTLsvd6xNczSgnDUPnKpjpZx7nAbn7Vv/d0PWjCFL+91sUewT503jy4zTpIEh+XgB2YZFnWrSGldmDFWQjdYgy73a6HHhsSEBYFQZgWRVFxuVxTLoTCsPe42+2eZHnopF5e2tpSpcpmbmFnY20eOs/Ro3KkWyt6WEdT0zhkWTYoLp+T0ixjVHqycXdfezhrQA6wTG6vLIVYnOUgalkTfWBAh0N+cH3tJBcXruLbtx7twwdOhZh2ecltjEa+zYuRi4xGDjrGwBtcv7oS2+//EQjkY8tyshyEuu8iAv09gt78LaOfL6OI6Y1pbzCwsWZsDAxJmcF7AZ2+U1xMhzfGRqTWBMPdONIbjTRazfvRVDKG5j+bRoIQAagMbrvJYzuswpVrR0cRtJgJQIgVDYG7/4dMUHC2b3RKKgv1XC5Q1laXDvJr89/m1fR2Vk239nCsR/Zi57WdOAZ2TDZnpDqFtVW5XHh4r1p8tPhsZz3ZOzQSHV0PHRuG1G5jATFQNBoVwm63DJcLRaPeANMU+ymUqvYBaIt9Pb3TEWkbM3Y8uzBcVVZBp2PtMWY3BgW/2FTVye3sSrrw+Kt7pY21uy8OSrfPm+C13fjZPp5myyagwzOyPVUoPFK+2VC/1NZW7j/XC3MncHmm1zbgGBE0ZsN0N6T2fr/v6MN/pBg734AGDcPgyfKygxUcLxyMEuKiDT3048uj4AtSmezAG0aFqbCTMf0X/XE5wC4oSCEAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/37804d6573182558ac749b7a4b69a554/5770e/esnetaudit.png","srcSet":"/static/37804d6573182558ac749b7a4b69a554/a6d0f/esnetaudit.png 701w,\\n/static/37804d6573182558ac749b7a4b69a554/e4e74/esnetaudit.png 1401w,\\n/static/37804d6573182558ac749b7a4b69a554/5770e/esnetaudit.png 2802w","sizes":"(min-width: 2802px) 2802px, 100vw"},"sources":[{"srcSet":"/static/37804d6573182558ac749b7a4b69a554/b0419/esnetaudit.webp 701w,\\n/static/37804d6573182558ac749b7a4b69a554/67495/esnetaudit.webp 1401w,\\n/static/37804d6573182558ac749b7a4b69a554/1425f/esnetaudit.webp 2802w","type":"image/webp","sizes":"(min-width: 2802px) 2802px, 100vw"}]},"width":2802,"height":1935}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-es-net-mrdp-js.js.map