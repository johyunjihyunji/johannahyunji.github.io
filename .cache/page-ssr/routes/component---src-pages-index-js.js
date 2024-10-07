"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 7396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/johannalee/repo/johannahyunji.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1725);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// CONCATENATED MODULE: ./static/jo.png
/* harmony default export */ const jo = ("/static/jo-93a71f902540a3da3f8f5c67e309d1d5.png");
;// CONCATENATED MODULE: ./src/Components/IntroductionSlide.js
// We'll create this CSS file next
function IntroductionSlide(){const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);(0,index_js_.useEffect)(()=>{const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','Where Now ?'];const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;});},2000);return()=>clearInterval(interval);},[]);// Empty dependency array
return/*#__PURE__*/index_js_default().createElement("div",{className:"background"},/*#__PURE__*/index_js_default().createElement("div",{className:"top-text"},"passionate about fashion, apple cider, and travel"),/*#__PURE__*/index_js_default().createElement("div",{className:"text-container"},/*#__PURE__*/index_js_default().createElement("span",{className:"left-text"},"Designer"),/*#__PURE__*/index_js_default().createElement("span",{className:"center-text"},"Johanna Lee"),/*#__PURE__*/index_js_default().createElement("span",{className:"right-text"},"Engineer")),/*#__PURE__*/index_js_default().createElement("img",{className:"joImage",src:jo,alt:"profile gif"}),/*#__PURE__*/index_js_default().createElement("div",{className:"bottom-text"},"based in",/*#__PURE__*/index_js_default().createElement("br",null),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':' '} ${index===locations.length-1&&location==='Where Now ?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0 \xA0")))))//     <div className="container">
//     <div className="video-text-wrapper">
//       <div className="video-container">
//           <img src={profileGIF} alt="profile gif" style={{ maxWidth: '40vw' }} />
//       </div>
//       <div className="text-container">
//         <div className="animation-container" 
//         style={{
//                 fontFamily: "'Inter', sans-serif",
//             }}>
//             <span style={{
//                 fontFamily: "'IkeaFont', sans-serif",
//                 fontSize: '4vw',
//             }}>Johanna's
//             <br />
//             Portfolio
//             </span>
//             <br />
//             <br />
//             <br />
//             <span> Johanna Lee is a designer, engineer, and artist </span>
//             <br />
//             <span> based in </span>
//             {locations.map((location, index) => (
//                 <React.Fragment key={index}>
//                 <span 
//                     className={`location ${index < locations.length - 1 ? 'crossed' : ' '} ${
//                     index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : ''
//                     }`}
//                 >
//                     {location}
//                 </span>
//                 {index < locations.length - 1 && <span className="space">&nbsp; &nbsp;</span>}
//                 </React.Fragment>
//             ))}
//             <br />
//             <br />
//             <span> passionate about fashion, chai latte, and travel</span>
//             <br />
//         </div>
//       </div>
//     </div>
//   </div>
;}/* harmony default export */ const Components_IntroductionSlide = (IntroductionSlide);
;// CONCATENATED MODULE: ./static/lopster.png
/* harmony default export */ const lopster = ("/static/lopster-9c5d51d72547f351d3074957f0a0e510.png");
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// CONCATENATED MODULE: ./src/Components/Header.js
// src/Header.js
// Style
const Header=()=>{return/*#__PURE__*/index_js_default().createElement("header",{className:"HeaderContainer"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement("img",{className:"Logo",src:lopster,alt:"Logo"})),/*#__PURE__*/index_js_default().createElement("div",{className:"Menu"},/*#__PURE__*/index_js_default().createElement("a",{className:"MenuItem",href:"https://www.linkedin.com/in/johannaleehyunji/"},"LinkedIn"),/*#__PURE__*/index_js_default().createElement("a",{className:"MenuItem",href:"https://drive.google.com/file/d/19jYAuiv4JhnaoI4WNHnzY0a5nQN8mown/view?usp=sharing"},"Resume")));};/* harmony default export */ const Components_Header = (Header);
;// CONCATENATED MODULE: ./src/Components/LopsterGallary.js
const LopsterGallery=()=>{const{0:rotations,1:setRotations}=(0,index_js_.useState)([]);const images=(0,index_js_.useMemo)(()=>[{id:1,src:lopster,speed:10,direction:1},{id:2,src:lopster,speed:9,direction:-1},{id:3,src:lopster,speed:14,direction:1},{id:4,src:lopster,speed:8,direction:-1},{id:5,src:lopster,speed:13,direction:1},{id:6,src:lopster,speed:10,direction:-1},{id:7,src:lopster,speed:8,direction:1},{id:8,src:lopster,speed:9,direction:-1},{id:9,src:lopster,speed:7,direction:1},{id:10,src:lopster,speed:5,direction:-1}],[]);(0,index_js_.useEffect)(()=>{const initialRotations=Array(images.length).fill(0);setRotations(initialRotations);const interval=setInterval(()=>{setRotations(prevRotations=>prevRotations.map((rotation,index)=>{const{speed,direction}=images[index];return(rotation+speed*direction+360)%360;// Ensure positive rotation
}));},50);// Adjust for desired speed
return()=>clearInterval(interval);},[images]);return/*#__PURE__*/index_js_default().createElement("div",{className:"LopGalleryContainer"},images.map((image,index)=>/*#__PURE__*/index_js_default().createElement("div",{key:image.id,className:"LopImageItem",style:{animationDuration:`${image.speed}s`,transform:`rotate(${rotations[index]}deg)`}},/*#__PURE__*/index_js_default().createElement("img",{className:"LopImage",src:image.src,alt:`Lobster ${index+1}`}))));};/* harmony default export */ const LopsterGallary = (LopsterGallery);
;// CONCATENATED MODULE: ./src/Components/Footer.js
// Style
const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/index_js_default().createElement("footer",{className:"FooterContainer"},/*#__PURE__*/index_js_default().createElement(LopsterGallary,null),/*#__PURE__*/index_js_default().createElement("p",{className:"FooterText"},"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const Components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/pages/index.js
// Style
//Landing Page
// import ProjectSlide from '../Components/ProjectSlide';
//        //<ProjectSlide />
//Header & Footer
function Home(){return/*#__PURE__*/index_js_.createElement("div",null,/*#__PURE__*/index_js_.createElement(Components_Header,null),/*#__PURE__*/index_js_.createElement("div",{className:"AppContainer"},/*#__PURE__*/index_js_.createElement(Components_IntroductionSlide,null)),/*#__PURE__*/index_js_.createElement(Components_Footer,null));}/* harmony default export */ const pages = (Home);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map