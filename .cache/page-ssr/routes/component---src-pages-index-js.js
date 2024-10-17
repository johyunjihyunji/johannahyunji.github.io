"use strict";
exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 7281:
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
;// ./static/jo.png
/* harmony default export */ const jo = ("/static/jo-93a71f902540a3da3f8f5c67e309d1d5.png");
;// ./src/Components/IntroductionSlide.js
// We'll create this CSS file next
function IntroductionSlide(){const{0:locations,1:setLocations}=(0,index_js_.useState)(['Los Angeles, CA']);(0,index_js_.useEffect)(()=>{const allLocations=['Los Angeles, CA','Seoul, Korea','Vientiane, Laos','Berkeley, CA','Where Now ?'];const interval=setInterval(()=>{setLocations(prevLocations=>{const currentIndex=prevLocations.length;if(currentIndex<allLocations.length){return[...prevLocations,allLocations[currentIndex]];}return prevLocations;});},2000);return()=>clearInterval(interval);},[]);// Empty dependency array
return/*#__PURE__*/index_js_default().createElement("div",{className:"background"},/*#__PURE__*/index_js_default().createElement("div",{className:"top-text",style:{color:'#282828'}},"passionate about fashion, apple cider, and travel"),/*#__PURE__*/index_js_default().createElement("div",{className:"text-container"},/*#__PURE__*/index_js_default().createElement("span",{className:"left-text",style:{color:'#282828'}},"Designer"),/*#__PURE__*/index_js_default().createElement("span",{className:"center-text",style:{color:'#000000'}},"Johanna Lee"),/*#__PURE__*/index_js_default().createElement("span",{className:"right-text",style:{color:'#282828'}},"Engineer")),/*#__PURE__*/index_js_default().createElement("img",{className:"joImage",src:jo,alt:"profile gif"}),/*#__PURE__*/index_js_default().createElement("div",{className:"bottom-text",style:{color:'#282828'}},"based in",/*#__PURE__*/index_js_default().createElement("br",null),locations.map((location,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,{key:index},/*#__PURE__*/index_js_default().createElement("span",{className:`location ${index<locations.length-1?'crossed':' '} ${index===locations.length-1&&location==='Where Now ?'?'red-question-mark':''}`},location),index<locations.length-1&&/*#__PURE__*/index_js_default().createElement("span",{className:"space"},"\xA0 \xA0")))))//     <div className="container">
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
// EXTERNAL MODULE: ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js
var gatsby_image_module = __webpack_require__(4722);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 11 modules
var gatsby_browser_entry = __webpack_require__(123);
;// ./src/Components/ProjectSlide.js
//import { Link } from 'react-router-dom';
const ProjectSlide=()=>{return/*#__PURE__*/index_js_default().createElement("div",{className:"GalleryContainer"},/*#__PURE__*/index_js_default().createElement("nav",{className:"ScrollingInnerContainer"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/SiaPartners"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/SiaPartnersMetaThumbnail.png",alt:"SiaPartnersMetaThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(9416)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Research"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Sia Partners"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Yelp"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/YelpThumbnail.png",alt:"YelpThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(8222)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.3)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.3)'}},"Performance Marketing"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Yelp"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/ESNetMRDP"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/ESnetMRDPThumbnail.png",alt:"ESnetMRDPThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(5094)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(0, 190, 9, 0.3)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(0, 190, 9, 0.3)'}},"React Front-end Dev"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Energy Science Network"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Broke"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/BrokeThumbnail.png",alt:"BrokeThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(7690)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(240, 215, 50, 0.5)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(240, 215, 50, 0.5)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Broke"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Waymo"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/WaymoThumbnail.png",alt:"WaymoThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(8725)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.4)'}},"UI Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.4)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Waymo"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/SiaPartners"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/SiaPartnersMetaThumbnail.png",alt:"SiaPartnersMetaThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(9416)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Research"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Sia Partners"))),/*#__PURE__*/index_js_default().createElement("a",{className:"ImageItem",href:"https://www.youtube.com/@johannalee8172/videos"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/Youtube.png",alt:"yelp",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(2860)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(128, 128, 128, 0.3)'}},"Video Editing"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(128, 128, 128, 0.3)'}},"Vlogs"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Youtube"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Yelp"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/YelpThumbnail.png",alt:"YelpThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(8222)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.3)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.3)'}},"Performance Marketing"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Yelp"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/ESNetMRDP"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/ESnetMRDPThumbnail.png",alt:"ESnetMRDPThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(5094)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(0, 190, 9, 0.3)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(0, 190, 9, 0.3)'}},"React Front-end Dev"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Energy Science Network"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Broke"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/BrokeThumbnail.png",alt:"BrokeThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(7690)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(240, 215, 50, 0.5)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(240, 215, 50, 0.5)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Broke"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/Waymo"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/WaymoThumbnail.png",alt:"WaymoThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(8725)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.4)'}},"UI Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(4, 56, 198, 0.4)'}},"Brand Design System"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Waymo"))),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{className:"ImageItem",to:"/SiaPartners"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/SiaPartnersMetaThumbnail.png",alt:"SiaPartnersMetaThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(9416)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Research"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(255, 23, 0, 0.3)'}},"UX Design"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Sia Partners"))),/*#__PURE__*/index_js_default().createElement("a",{className:"ImageItem",href:"https://www.youtube.com/@johannalee8172/videos"},/*#__PURE__*/index_js_default().createElement(gatsby_image_module/* StaticImage */.iS,{src:"../../static/Youtube.png",alt:"yelp",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:300// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(2860)}),/*#__PURE__*/index_js_default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(128, 128, 128, 0.3)'}},"Video Editing"),/*#__PURE__*/index_js_default().createElement("div",{className:"Tags",style:{backgroundColor:'rgba(128, 128, 128, 0.3)'}},"Vlogs"),/*#__PURE__*/index_js_default().createElement("div",{className:"Title"},"Youtube")))));};/* harmony default export */ const Components_ProjectSlide = (ProjectSlide);
// EXTERNAL MODULE: ./src/Components/Header.js
var Header = __webpack_require__(8340);
// EXTERNAL MODULE: ./src/Components/Footer.js + 1 modules
var Footer = __webpack_require__(515);
;// ./src/pages/index.js
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Style
//Landing Page
// //projects
// import Broke from './Broke';
// import ESNetMRDP from './ESNetMRDP';
// import SiaPartners from './SiaPartners';
// import Waymo from './Waymo';
// import Yelp from './Yelp';
//Header & Footer
function Home(){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Header/* default */.A,null),/*#__PURE__*/index_js_default().createElement("div",{className:"AppContainer"},/*#__PURE__*/index_js_default().createElement(Components_IntroductionSlide,null),/*#__PURE__*/index_js_default().createElement(Components_ProjectSlide,null)),/*#__PURE__*/index_js_default().createElement(Footer/* default */.A,null));}/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 7690:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAD0ElEQVR42k2UW0ybZRzGv6tFlxjjhZfTC2NcOJYWSgsUmbCRGWO8cRripZqdgjOLqHEum6jDbDNuDsHMDZljUAqBgd04lEM7hFIoh9J+LQU5lI7DaKEchpsz/ny/thdePHn/efO9z/v83+95/lLEm03EmxmHUmcI6GK1nBHf07PhTyfs0xH2asWawaY/539nDPE6BylGoI5DqVUCGjYn09n2p7EhDv8dUNFVmctn2iKOG/Zx2vAuQyY9OzMprHuUc+kCKdFViqlJj0MXJYsIFcujmcz0JzFn1/I4qOH6iTd4WzrF+8+UUCR9zu0L+TwJZghCnbg0K3qxIkgQZkXlrss61jzZbAll/r4cJn12qqsqaTNbCExd4sdjeeRLJzi0u5iDUjG3fyjgr9lEVsdVhCfUhFzJgtSgEGrZ9KWwM53Eo1kNj6Zfwd2bQ2g1wui9Pwlvb7MwU0P5JwUcyf6ZU29V8F5CGTXn9CxNl2CqPobZ+BFzYyWsClIpImuZd77JH+YiWm8cxG8vwtN3gLtGB8Zvzcw+djIfqOJicT77XyjjUOrXFL54hqpvXmNp0Urg/izjC7OMei08GNUiLTkT8I1fZcLrx9LVwdr6PJ2mQpaX7jMXXGF54x8WF2o5+2E2z4tW9+46yh7pKNfL9uN31eHsbqfZLdM5WEtoXI+0MpLEsP00K5vNPKGFxVA97cYDuOQx+t0zDHhWkV0VfHk4l6ekj9nzdDHPSsf55bsCbLZKzBYzPZ5BbPZq8Z5qRaEa10gpy1tNrGzdYCncQEf969gGHXT3O2m908to/3lKT+YiSUd4bvdhdkkfUHu5EFPHRcptLVzrNtH4+wXxx/cpCpMZc5whEGpgIVxNcMUoCAsxtzTgHbDid44w3FeJuyuBhqsabv2UQtO1ZAL2LFp6rnDT3sittu9pb/+KNbcw9rJCOHSWBzvN7PxrFC03Ym3Kw2Gto6elkcZfaxns+YK1iQQeTuvY8mt4OJVKSH6Vtrrz4oIrNFRV09l0ibCcKVoeTsPnLmVs7CadrZeZmTfiseUxdS8VV1cKnp50Ao6Y8ddlETHh1w1htZA7i77Oenyjc3Q1DTFg/U3YJlt5w714XeVMuhcxVVjxTbrw9RmEinRhVJWIYIYgyIhHS+RVTovGc82jxXk3GUudCotRjac3OZoWSRkADvM7WFvPcafmU6zmkyyN6YXZ9bF8y1nxSKrjgyCu1pMjFKsEtNHhEZFTBYRtlLgFhxPx9r4kIpdIcOhloUiokxWS1NjHUYWKMkEua6LkG4Jc6SDi08Xq6Aww8B8eTWrJWhxY8QAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/6addd/BrokeThumbnail.png","srcSet":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/4e4d4/BrokeThumbnail.png 100w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/2c67b/BrokeThumbnail.png 200w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/6addd/BrokeThumbnail.png 400w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/099ef/BrokeThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/f6ea0/BrokeThumbnail.webp 100w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/b5535/BrokeThumbnail.webp 200w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/f5c71/BrokeThumbnail.webp 400w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/9d9de/BrokeThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ }),

/***/ 5094:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADbElEQVR42nWUa0wUVxTH7y6osC/UKki2JQuKxEcxxvpBQSFK1AjiC2ujfXzyk0ljYtrSEGPWsPiI8XNbE43VusWKDyAg2Z3ZmX0IVKmKaSMWowg6LOA+gvGxi/ffMzNVNqa9yT/nzNyZX/7n3AcziGbosiA1Z0ImKYNkgpGe08WZFG2oCLRgR+ghtgbvkf7CzpCCInkvmMhoPgtsEvZWNpqchizfEtilaorFKAv8hm3BPiyRnSgNnMLu0ChqgvdRE+rHrlAYDumzf4E2FWiCKqNo1Z15TWAeI1ZKP2Kn/zGWSvXY4r+NrYG7mOf7ChahEGXyeXp3F9X+m1gkfwejYJ2s7F2igqm8qcE8sK4ZKL5Zj89vj+OjGzVgnekwdn1AMUNXVybSumfDGJyhtSW1SqY6Y+JU2MSPURo8gw2nT2G580sUHVqNVc7v4ThYjPyGQsw7vJC0GAWuRXC4FqDAWYSck3kwSOROSAHqJZup2c3Y1RlG5b5aVK3fjnVlm1BWWo7yFRuxtmQzKkhrS6qxhlReUoWKpVuwbE8pDH6zDhQskyUzMRMrQz+hytuPE1evYWxkBANPFQwpYQwqCh4rTzUNkJ6MDCM8qmBMieHbK3VgbQzpkjXVoUUDTpOzYWlbjWMdJ6GOCf4G/zWiz19AfjSo5S7hCFiLCrS923bs7d5Ll2nJmxl95MKDgQhu9d3HMLlTwmEkk0kMReMYio/jz5EoWnt6gVdAg3j0/4C0caXp2uQhTwNexBMYHFYQiUQQiUYxQcDT3b1ov/cIY4kJJJKvNYf1nsNgrUwzo/cwFShnaUCnp57qBUafjSEai+NZJIpkIoHXHPj75Ruc7VfgGxzWgE6PSwdKWe85pFVKo8bars3BNz/XwtsqwP1rIy40NqHp4hW0t3XAJ0n44/cbuNDSgR+aWnGnsxe1vxygvmfTv6kOBTOnB85EM8/2OLjj8gKe687nH7oLket2wO6ei5xzeXzOuQJOOc9tzOGfXNzNv7jUw1dd3c9ndszmBtHKdY6JM4NMDmWiU2QyXQhBOnrXSYEMpAVmgfnTYO/chs09fZjf9bWmhd11MF9fjCnBXJqnkyJbJxlkM0b1x9RIpyZmFCj3muLFch1Xb5N1gXbkSZ+OL5ePR+2+ypjdV0XaFGNeRt+aNekMVabYP1MmwiCp6+9NAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/f91444af258f8b39e3334ac6f5699ed9/6addd/ESnetMRDPThumbnail.png","srcSet":"/static/f91444af258f8b39e3334ac6f5699ed9/4e4d4/ESnetMRDPThumbnail.png 100w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/2c67b/ESnetMRDPThumbnail.png 200w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/6addd/ESnetMRDPThumbnail.png 400w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/099ef/ESnetMRDPThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/f91444af258f8b39e3334ac6f5699ed9/f6ea0/ESnetMRDPThumbnail.webp 100w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/b5535/ESnetMRDPThumbnail.webp 200w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/f5c71/ESnetMRDPThumbnail.webp 400w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/9d9de/ESnetMRDPThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ }),

/***/ 2860:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADsElEQVR42lWSW2xUVRSGN73MmdOZzuXMOTPTGy0ttJXa+41OW1Ij0UqAqCRGRAyWakiQKqYIWtrQ1MTa+GDEJxJNDDUhGkKiaI1U8Ta9g5XUUqSJl0igPkDUBGyTw+c6Y2v04c/Ofljf+tbaW5mmYYeCXjsUMu2sLNMuKYrYNfURO9ASsP2tQdv9cNAuj/ntZ0LpdnvYZ7eZHrsio9D2ZjfYoWihbYYzbMsK2R6vYQeNkK38Zh45G17go3ermPu6lD+mmzhzoRj1hU7yOS/qW50n+lwQVCxmJkNY0XfXLlTTNJ7Yl6iqITq7dnL6+Foqy6IozSinec9JFn+K8ed8FfzQwuB0IeozN6lnPagxnV1HNAgobi8DjxVuRzVfxNM8jqqYpuu1PrhZw9bWLFSKv5wdB/r5a/5ufpupgLkYb57PE6CGa1iA4252d7sSwMXMpATwnXX3oBpHSWv+SoCj7OwcYHG+jM2bMlFJvio6el/mzs+lLMzUweUW+qfWJAy1YRl5PI0nlw1XgO8XbJSRz+NumpCRp3hg71vculLHlvvEcJWvkp6Bw/BLCddnagXYzNHJ1ahhB+gY6ux56f+GH+Q3iuEEWuMYqnqc2O4T/D5Xz7b7xTA5UM4rrz8nwGIxlB1ejnFkMluAGu7hNNSETluXAP2KJQcYUXy8pl6AcbSmOKomTuVjg9y8VLcCrGDgWKcAy8RwgwA30jWZmzB0JwzTaHNG/g/wkwRwClfTFKp2iopHT3FjtkmAzqOI4atvOIbrWfiuBmYb6B7PQX2q4XGAE2k85QDl29zKEWCG4kxBnQBHBDgqhiPU7BjkxsyyofJWcahPdnh1Pdd+rIdfm+m5JI/yjYZ2Vpdvo9F2MBVSxNAvQI/iwwxnh2P/jFw9Rm27AK82sHWzrConL5/Phx+H0VJu74vAs9nE2310H9I5OlLA4Qv5nDiZS+8+jY4OFy/uV2zrKCKp5ZxAL5JTfZpTjZukLsqDJRaquCDI0HvFXHm7iCWfShg4NtTq3JGuXK/n2kId3jkfajaNVfNuVDwD171DAvyeLRW9LBmKuJ5MYzCAMgyTQMAiO8uiOhrioWiAp8PpHFwrls8X0N+zjt6eQswDAbz7/fj3puN7JAt/wXZ8ua1kRotYbZkEIxYhSwxN08SJA/aZFrrEJUk2JKkGKS4DzR3C1C0st0XYJdFDWIYu8WCEggSXGWHJv0BLulhyRpYTlXtUukYjcpeYYUlkJRamFZY6J1aiLsEwTf4GIsBHxXtFH1UAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/d442fc4d24554bd73bc438fa545ac233/6addd/Youtube.png","srcSet":"/static/d442fc4d24554bd73bc438fa545ac233/4e4d4/Youtube.png 100w,\\n/static/d442fc4d24554bd73bc438fa545ac233/2c67b/Youtube.png 200w,\\n/static/d442fc4d24554bd73bc438fa545ac233/6addd/Youtube.png 400w,\\n/static/d442fc4d24554bd73bc438fa545ac233/c2d17/Youtube.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/d442fc4d24554bd73bc438fa545ac233/f6ea0/Youtube.webp 100w,\\n/static/d442fc4d24554bd73bc438fa545ac233/b5535/Youtube.webp 200w,\\n/static/d442fc4d24554bd73bc438fa545ac233/f5c71/Youtube.webp 400w,\\n/static/d442fc4d24554bd73bc438fa545ac233/0d27e/Youtube.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ }),

/***/ 9416:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAEEklEQVR42iXUa0yTZxTAcZRLiEt2X2QoU0q42RZRYVwLKxepgIjIlDm84GSSghM2E2XKHE6YYpmZijKYyEVAUAKaBVYNyNwmUT7MzRBDokaZSlgcFMTS8vZ9/3vMPpzkfHl+OSfPOccJrwhJ8YlEWZqEEpOCkvYhyidGlOIClO9KkJtMyN0mHAN1OIbqkR7WIf3TxqylHrtVxGwzNkc1NqVORC1OLIySFFW0ANMEmI6clo28/QvkL/ciH6vA0VyNo+c00sB5pKHzzD5sxT7Whd3Siu1FCzb7BQEKTBa50iDAd0MlFoeiaBMEuBJlbSbkFcCBXXD6EFw8Cf0ibjfDg2aUsXPIUx3ItkYcsw2iwnMCrBLgGQFWC3C+AL3CkdWrICaVyTUbeLotn6d7ChitLGW0vpLRSyae9NXw5FY1T+6c4u/hOkYeHGdkpIoXM2exy8eZcfzAjHxCgG+HSCwIwxFogPhMPlb54+TkxDwXV1zmzMVZ5C7Oc3F3c8PN1RV3dzdemeeOq6szzs4u9Jj3AbVM22qYkU4K8A2NhEcwSkAcxBrYpF2G8ZtyCksOsL/CROWP9eQYC1D5qwnUBBEeHkagWosuOorICB0dnfkCPMpzawVWe6kAXw2WmB8CAaLl6NUUfpBEQ/+vlBTk0NHTw33LNO0/mwnWLGFTTi7rUxJIjFhGnjGP3NwdXOzIE+BhpqbLeWHd/xLU/g++bFmfhjEylq6BAZqOFHPmWBnm6qMY83IJUi8hPTOLrZtXYYjWoA0KwnuRis7OTwV4kCnLV0xP7RbgWwJcEApBSZC0BmNsImeuDtLWfYuq6iaiYmJ53dODlNVryFipR2/QolF7oVa9x+KFi7h8aQs4djH5zMjz8a0v5zBSwjcOJWw9pG8hV7eKw5fvUGe+S9vvj9lWepY5b3qydmUsqfoosjPiCdf64OPri0oTSnureGcvwDK6ncmxjwQYoJNYLqqLy4INm9mhT6b+5hjme2D6aYi0fafwDH6fYB8PIpYF8nXJ5+zZnc9yjR8eHgtob06F6WwmHmUyOZIswJAkCV06SspWpLxCtsQbyCkuJXdvGX46A6qwaLyXrkDtH4DWz5c4vZ6EuHi8PTx55zVP2hrFdv2bwsS9BCbvRQpQt04iIRtl3U5Gi8u5WW7i6qFy+qoquXGhnhvdzdy83sbgYBe/DTTSd+0EfX2VXP/lIH1X9vLnQCGTDxKxDMdguRsiwIQMieRsyBLzlP8ZlJdBSy1cF6s2fAXG+2G2F5Rr4jc7RdQhO75HmilCsmzG+jhZYGFMDC1n4i8/ASZtlEjLgewi5KI9OL4Vl6VBXBZzC44/zEiPepkdvyIuSy8ztnas1hoxHiamnu3E8ngjlvsGUdkKgWkYv72Y/wCj3iRQKDaJQQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/2487c4a77a02886978b3fd60f6c0a0bf/6addd/SiaPartnersMetaThumbnail.png","srcSet":"/static/2487c4a77a02886978b3fd60f6c0a0bf/4e4d4/SiaPartnersMetaThumbnail.png 100w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/2c67b/SiaPartnersMetaThumbnail.png 200w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/6addd/SiaPartnersMetaThumbnail.png 400w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/c2d17/SiaPartnersMetaThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/2487c4a77a02886978b3fd60f6c0a0bf/f6ea0/SiaPartnersMetaThumbnail.webp 100w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/b5535/SiaPartnersMetaThumbnail.webp 200w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/f5c71/SiaPartnersMetaThumbnail.webp 400w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/0d27e/SiaPartnersMetaThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ }),

/***/ 8725:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+UlEQVR42k2U6U9cZRTG79w7KxSGYR0YGBiGdYAZdgYY2tJ2phTosC8FKW1ZAgND2JrSlqZWq0GrtNWSpsYYbKrpkhhtVLBCCVBs1TQmTUzkgzH+B373w88X0MQPT85J3pvffZ5z7nslVdIE+tIVEry/YKzawuB+jt69jr58Rz+Ifk3UTXTuLbSlq2hKNkRdR1f6VNRNlKJlVAVfE+99hbFyGUkV1S0Ofsbo+hRDYgBN/Djq+BEUcwA5Nij6IdRxw2jjg4TbpzCmzxJqO4vOOobGMi6eH0SKHSJ2/0uM5atI6uhmJPt9PLWX+PzOu0yOjmDLKaHM58fjaybP7SXD6SYtM5vi0mJq/A30BsYZuTTHxNUPuXL7Lof9Z5BiLqN2fbYDbEHKeMzR9pu8fPKQuSuXsToq8NR14W08TUl1C+mFR/A0nqfy+BTWbA9xiXaSbDby3R46B0ao8PYgJbyNOl8AlcgOpNw17GUz3HjzHIG+PmJSXJQc8FNQWUda/kEBKac5+Jjx63/SfeEn9vc8wlE9S0JWHSGmZHT7UpFsC8jOR0hyZAOS63sxm9PExewTb07DbHPiLD1CurMKm8ON2V5M6/h3jF7b5tTrr2g7/yuN07/hP/sHrtp30IQkIaXOo7juCaBJRC5Yx5DUjV6RCAmLINqaTXpexa7MtlziUsvwDixRH1imdmSdlukfOXHuhQBvk1YxhlqfIIC3BPDBjsM2pMJnKPGd6HaAIREYQizYM4uxZhYRZbGLaD4qXluitO2+qI9xdzzk8OAzaoKvSHDUCocpArgggLuR/cLhKkpCK2pJIjbLhqPjGFZnMRFRdhRtNJHJ5Rztu0P1ma/w9K5SeXKF6sEXHBrYIsKSK2YogLb3/4vcKoB7DrUqSWzQgrOlirLxVjJ6j9PU3kygfxh3hZcTQ9P0X1ygKbiIb3iDsvYHhEYlogtN3l3Kvw73ZqixdO1GDtXp0alk9AY9169N8/zLBfrfGsbR20hBXT0NHZ30B/uYnb+Kr3MQbVicSJIuIn8ggPfFTTGJyIUr4ma0IovIsqymyJHBvTcm+P3uHINd7aTkuTjQc4zK2S7cs6co6G7C1+EnI8eFPjQGsyUHKfna/yK7NgjLDGCKMdHbcJTtL27y97NF/nr6MRd76gnRGQhXNIRqZayFKZQEanAHW8g7WU9SVgqRpjQR+TbK7ndorEFKW8Ts28TR8C2Huteo6XlCTfcSVc3fEOaYR5N1HX3uLfTZorfNo7W9h8n9Ean9q0Qd/EQsdEwAb6Bk3xZAQxFyuFi9WfwELJNI0VNCY3uKnUZOnEZJmhG6IDSFYhU1eQY5fgJV5CSq2FHk6C5kYyNyXC//ACNIGxwAtvd/AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/68afead962e826100603f38c3e73adfd/6addd/WaymoThumbnail.png","srcSet":"/static/68afead962e826100603f38c3e73adfd/4e4d4/WaymoThumbnail.png 100w,\\n/static/68afead962e826100603f38c3e73adfd/2c67b/WaymoThumbnail.png 200w,\\n/static/68afead962e826100603f38c3e73adfd/6addd/WaymoThumbnail.png 400w,\\n/static/68afead962e826100603f38c3e73adfd/c2d17/WaymoThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/68afead962e826100603f38c3e73adfd/f6ea0/WaymoThumbnail.webp 100w,\\n/static/68afead962e826100603f38c3e73adfd/b5535/WaymoThumbnail.webp 200w,\\n/static/68afead962e826100603f38c3e73adfd/f5c71/WaymoThumbnail.webp 400w,\\n/static/68afead962e826100603f38c3e73adfd/0d27e/WaymoThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ }),

/***/ 8222:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR42lVUW0tUURQ+3h8MukCFQURP4UNl1Ng4xytO5iUzJUMwlPLyYhmTGirazdCszPJeYZGVYkpTYzTNaDPq3JybU8pgkQXlQ/bQb/hae5+N2cPirL324tvfunxHCtf4EC67EK6ZI/OTOejsoS+ZzHy/uHMJ30nmJt8n7r0il8V9kDiYbKWDTUmWLSLRrvgMSDMjjPkiVxa5nIBNiVNMCtd41yV4ECHPkrk5a8X3kjnI7OLeRuZay1XYugSohzH0Ka+wC6IcSn4EWRixCUtwIor8UPqGqR3kOxGipofJohJsPK6U7BZVsZJ5mVbxggMbUizYkWHEpjQzNqaasD39HTanTyMmy4LdOUZs0VqwM2sSu7LMiE610qMOUeFayUpzWZnSYQ+u9k1DV6dDZn4RLjY24869DhjevsKThx24XFuJ8spijOmHMWMzoEBngnTAj6gkwVAZioezY32RVE70jQXQN9CGhpoqnC8vQWNVCRb9Fjy+VY+zGfvRlZeM4FIAX787UdJogRTnIUDRQ5n30MknxJouHZpB//gnGKcMaDhdiPrCXLSWFmPpgx6m4X70VGgRzJSx+mIUv/+soOwGAeyzE6BdTJ+X7OfrwKYpqdzE8COszkl09vbC+GYEn4OzWPHqsbryBQv6Ecxn5+BHaRF+BSZQfp3aFOcjQM/ankp8aeUZvhpSwhxa7hvwsl2HZ+2NcJmfY9nYCuPANZgM45iencS3wV7oW+rx+nYZTp0ZJBLziEq0cQyGtQbIJhWaPI+m6laMHY2F/mYNlld/wv3+KUzdF9DdWofRoS5MjT1Az91mTHRV4HjZIw4YyQDZ4ssMkMmJS8/DKatzOpGfdwna7FpknbyC5NwmJKUWIE1binSKHcmshvZYHXLyzmGPdgiSZkERAleR/99QlCk5EKKaouHYIMVPQzpIa6Gaw9bYCkTvbaO18iMk3kxmpfgsQtVWsdDrpcd/BDbxgpvTj0xiXxc1m9ogB5Byog0xml6EyIsUJznSXUSim8vwP+nxteGLzdTCaHuFDL3iTLIjkIzCDmxL6IMkBxVNcxCvWGYhPY3yt/kLWoiS0LXsoaYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png","srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/4e4d4/YelpThumbnail.png 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/2c67b/YelpThumbnail.png 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/c2d17/YelpThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/f6ea0/YelpThumbnail.webp 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/b5535/YelpThumbnail.webp 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/f5c71/YelpThumbnail.webp 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/0d27e/YelpThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map