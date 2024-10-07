"use strict";
exports.id = 150;
exports.ids = [150];
exports.modules = {

/***/ 1944:
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
;// CONCATENATED MODULE: ./static/jo.png
/* harmony default export */ const jo = ("/static/jo-93a71f902540a3da3f8f5c67e309d1d5.png");
;// CONCATENATED MODULE: ./src/pages/Components/IntroductionSlide.js
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

/***/ })

};
;
//# sourceMappingURL=component---src-pages-components-introduction-slide-js.js.map