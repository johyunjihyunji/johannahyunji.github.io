"use strict";
exports.id = 490;
exports.ids = [490];
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

/***/ 1186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5912);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4699);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8340);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(515);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5884);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(123);
const pageVariants={initial:{opacity:0,y:"100%"},animate:{opacity:1,y:0},exit:{opacity:0,y:"-100%"}};const pageTransition={duration:0.8};const ArtGallery=()=>{const{0:flippedStates,1:setFlippedStates}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([false,false,false,false,false,false,false,false,false,false]);const{0:aspectRatios,1:setAspectRatios}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const artworks=[{src:"../../1x/Artboard 1_2.png",title:"Dreamy Landscape",description:"A surreal vista of floating islands and cosmic skies."},{src:"../../1x/Artboard 1.png",title:"Abstract Emotions",description:"A vibrant explosion of colors representing human feelings."},{src:"../../1x/catalina.jpg",title:"Dreamy Landscape",description:"A surreal vista of floating islands and cosmic skies."},{src:"../../1x/IMG_1079.JPG",title:"Digital Dystopia",description:"A futuristic cityscape with a touch of cyberpunk aesthetics."},{src:"../../1x/JOPOSTER.jpg",title:"Abstract Emotions",description:"A vibrant explosion of colors representing human feelings."},{src:"../../1x/catalina2.jpg",title:"Abstract Emotions",description:"A vibrant explosion of colors representing human feelings."},{src:"../../1x/glade.jpg",title:"Digital Dystopia",description:"A futuristic cityscape with a touch of cyberpunk aesthetics."},{src:"../../1x/jeju.jpg",title:"Dreamy Landscape",description:"A surreal vista of floating islands and cosmic skies."},{src:"../../1x/JOPOSTER.jpg",title:"Abstract Emotions",description:"A vibrant explosion of colors representing human feelings."},{src:"../../1x/love.jpg",title:"Digital Dystopia",description:"A futuristic cityscape with a touch of cyberpunk aesthetics."}];const handleFlip=index=>{setFlippedStates(prevStates=>{const newStates=[...prevStates];newStates[index]=!newStates[index];return newStates;});};const loadImage=src=>{return new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img.height/img.width);img.onerror=reject;img.src=src;});};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const loadAllImages=async()=>{const ratios=await Promise.all(artworks.map(artwork=>loadImage(artwork.src)));setAspectRatios(ratios);};loadAllImages();},[]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("style",null,`
          @keyframes meshAnimation {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }
          
          html {
            margin: 0;
            padding: 0;
          }

          .grain {
            position: fixed;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;
            opacity: 0.5;
            z-index: 0;
          }

          .grain::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
            opacity: 0.25;
          }
        `),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__/* .motion */ .P.div,{variants:pageVariants,initial:"initial",animate:"animate",exit:"exit",transition:pageTransition,className:"art-gallery",style:{background:`
            radial-gradient(circle at 00% 20%, #fe5204 0%, transparent 20%),
            radial-gradient(circle at 60% 90%, #4eaa63 0%, transparent 18%),
            radial-gradient(circle at 90% 90%, #3443bb 2%, transparent 30%),
            radial-gradient(circle at 80% 30%, #fcee9c 10%, transparent 20%),
            radial-gradient(circle at 80% 10%, #f85f72 0%, transparent 30%)
          `,backgroundSize:'400% 400%',animation:'meshAnimation 14s ease infinite',minHeight:'100vh',padding:'3rem',margin:'0px'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"grain"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",{style:{color:"#fe5204",textAlign:'center',marginBottom:'2rem',fontFamily:'AlexRoss',fontSize:'5rem'}}," WElcome To the LObSTER pArk"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{display:'flex',flexDirection:'row',width:'100%',gap:'4vw',marginBottom:'5rem'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{width:'7rem',display:'flex',flexDirection:'column',alignContent:'center',justifyContent:'center'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"Logo",src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,alt:"Logo",style:{margin:'0',padding:'0'}})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:'1rem',fontFamily:'cousine',textAlign:'center',margin:'0',padding:'0',color:'#ffff'}},"Home")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{fontFamily:'cousine',fontSize:'1rem'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:'1.2rem'}},"\uD83D\uDEDD Playground Rules: "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ol",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{fontFamily:"cousine-bold"}},"Dream Wildly:")," No limits here!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{fontFamily:"cousine-bold"}},"Experiment:")," design, learn, and iterate!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",{style:{fontFamily:"cousine-bold"}},"Respect the Space:")," Keep it tidy, keep it beautiful, keep it creative.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:'1rem',fontFamily:'cousine-italic'}},"* This play area is designed for children 5+"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:'1rem',fontFamily:'cousine-italic'}},"* Click art to learn more"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{fontSize:'4rem',fontFamily:'cousine-italic',textAlign:'center',display:'flex',width:'100%',justifyContent:'center',color:'white'}},"coming soon...")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ArtGallery);

/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-102787b83fb889e09b9d6c512829bf56.png");

/***/ })

};
;
//# sourceMappingURL=component---src-pages-playground-js.js.map