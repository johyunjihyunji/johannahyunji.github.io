"use strict";
exports.id = 497;
exports.ids = [497,309,339,173,150,398,293];
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

/***/ 4751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4722);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9639);
function Broke(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_index__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"header-image"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/BrokeHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:'10px'},__imageData:__webpack_require__(830)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Role"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Product Design Lead")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Skills"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"UX Research",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"UI/UX Design, Wireframing, and Mockups",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Brand Design System",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Timeline"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"July 2023 - August 2023")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"info-item"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"info-title"},"Team"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"info-content"},"Johanna Lee (Design Lead)",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Mizuho Li (Team Lead)",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Amabel Bernabe (Marketing Lead)",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Nagib Afani (Product Lead)",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),"Heinrich Lau (Technology Lead)"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Background"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"Sutardja Center for Entrepreneurship & Technoology"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"The ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Sutardja Center for Entrepreneurship & Technology (SCET)")," at UC Berkeley offers a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Certificate in Entrepreneurship and Technology")," designed to equip students with essential skills for innovation and leadership. This program provides undergraduate and graduate students the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"opportunity to build networks, develop their startups,")," and enhance their collaboration and communication abilities through hands-on projects and coursework.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"European Innovation Academy"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"The ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"European Innovation Academy (EIA)")," offers a dynamic three-week startup program in Porto, Portugal, where students from diverse backgrounds collaborate in ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"multidisciplinary teams to develop innovative product ideas.")," Guided by industry mentors from leading companies like Google and TikTok, participants gain hands-on experience in ideation, prototyping, and pitching to investors. This immersive program empowers aspiring entrepreneurs to enhance their skills and build valuable connections within a global network of innovators.")))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Project Scope"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"team-photo",style:{flex:'1',maxWidth:'40%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/BrokeTeam.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{marginTop:'25px',borderRadius:'2px'},__imageData:__webpack_require__(6606)})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection",style:{flex:'1',maxWidth:'60%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#551c6a'}},"Broke"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"Broke")," is product developed during the Sutardja Center for Entrepreneurship & Technoology Certificate program during European Innovation Academy portion of the program. I teamed up with 4 other passionate travellers to identify and solve problems under \"travel accessbility.\"",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#551c6a'}},"Problem Space"),"Through 17 interviews and 200+ survey results, we identified the following painpoints: financial constraints, lack of budgeting knowledge, uncertainty in planing, limited access to travel resources",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"How might we make traveling more accessible to middle to low income young adults?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#551c6a'}},"Ideation"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"We recognized a common aspiration among individuals to explore their dream destinations. The primary insight stemmed from the understanding that financial barriers, particularly for middle to low-income young adults, often hinder these travel ambitions. The goal was to create a solution that not only identified the pain points but addressed them comprehensively, making travel more accessible and enjoyable."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"Personalized Budgeting"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"Real Time Progress Tracking"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"Secure Transaction Platform"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li",null,"User Friendly Interface"))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"section"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2",{className:"section-title"},"Reflection"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"flex-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"subsection",style:{maxWidth:'60%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}},"First End to End Product Design Experience"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"My project aimed to design for a ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"niche group of lab researchers,"),". shifting my focus from previous GenZ targeted marketing projects. I aimed to create a UX that prioritized versatility and approachability, leading to a redesign of the website's user flow, which simplified navigation by ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b",null,"consolidating two-page operations into a efficient single-page experience"),"."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3",{className:"subsection-title",style:{color:'#5a5a5a'}}," Leveraging Design and CS background:"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"paragraph"},"Leading a design project for the first time was both challenging and rewarding. I discovered that my background in computer science not only provided a strong foundation but also facilitated effective communication within a cross-functional team. I found myself adept at articulating ideas in diverse languages tailored for different stakeholders. This project served as the catalyst for my burgeoning interest in a career path in product design, and I aspire to further contribute to its success in the future.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"team-photo",style:{flex:'1',maxWidth:'40%'}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/BrokeFirstTeamPhoto.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{marginTop:'40px',borderRadius:'10px'},__imageData:__webpack_require__(3131)}))))));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Broke);

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

/***/ 3131:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAWlLgKoFE//EABkQAAIDAQAAAAAAAAAAAAAAAAABAgMSFP/aAAgBAQABBQKxyLJyVe2dLLJ6Nn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwFH/8QAHRAAAQMFAQAAAAAAAAAAAAAAABESMQECMkFRgf/aAAgBAQAGPwKjPS52XCCBU0Qf/8QAGxAAAwEBAAMAAAAAAAAAAAAAAREhADFhkdH/2gAIAQEAAT8hj8usUjAKDxxnDWLAF95p6juN/W//2gAMAwEAAgADAAAAEEPP/8QAFhEBAQEAAAAAAAAAAAAAAAAAABFh/9oACAEDAQE/EEx//8QAFhEBAQEAAAAAAAAAAAAAAAAAAAFh/9oACAECAQE/EKmX/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAITFBUXH/2gAIAQEAAT8QshJ6JGgJbW5EE2yAD7EtUaKtQ1eB4eoqBCQypzeGqyE//9k="},"images":{"fallback":{"src":"/static/1ffcbde80af269312fbeff14e4505c77/e472d/BrokeFirstTeamPhoto.jpg","srcSet":"/static/1ffcbde80af269312fbeff14e4505c77/4550a/BrokeFirstTeamPhoto.jpg 321w,\\n/static/1ffcbde80af269312fbeff14e4505c77/404e8/BrokeFirstTeamPhoto.jpg 642w,\\n/static/1ffcbde80af269312fbeff14e4505c77/e472d/BrokeFirstTeamPhoto.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/1ffcbde80af269312fbeff14e4505c77/ece64/BrokeFirstTeamPhoto.webp 321w,\\n/static/1ffcbde80af269312fbeff14e4505c77/a408f/BrokeFirstTeamPhoto.webp 642w,\\n/static/1ffcbde80af269312fbeff14e4505c77/6e61a/BrokeFirstTeamPhoto.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":839}');

/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAByklEQVR42g3Pv08TcRzG8Vt0cHE0/gVqQkDFNiXUIgQktVR6J6IBIVYRJrTWGpAYF9MBOzlhosJgiA4YtdVExWqCFX9RfrTc945w9ICiUqX8GEh0evsdPnm21/N5lJ3JXexI7mbP2F6OfCnDP+Hh4rSH3tkG+oWfAeFj2FR5ZtYzatQxbnqZNKvQxVEWjGrywsWqqGRN5oY4hLIvtZ8D4yW4vpbilVjb1HFCM7XcnFSJZRq5b/gYSqvEzTrezdXyfsrLZ1kojEoWRBV5w8mqUcGa7mRDP4jSnglwPqNxKXuCy9kmblmnuRLXaOg6h9Z9Fq2jmfCdJoLdAcJ9jYR7Aww/OUbOdmHpbgmWUxAOiqKcTVGCMrgUZXAxygP7OvesHh4uh7j99gJaV5D2SCvBSDNXo2foCKlc61OJ3DhFLFZPWq6xTQ8rwklBfliUuamXoYj1V+jFBBOFIT78HOBlvp8RO8JjM8zTXCeJxVZGptsYtfykLB8fsyf59L0GPVuNbdSwIrHfhpt1UcGWfhjl7/YM/7bTFLbiiD+PSP26y5vlHhJLEZ5bnbyYb+G11ULS9DE25+WbvOy8G9N0kxMefhgOCbok6JCTS/kPQkJLNlyl46oAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/bc2aca2664967c88303be0a641451848/44bb2/BrokeHeader.png","srcSet":"/static/bc2aca2664967c88303be0a641451848/e0957/BrokeHeader.png 360w,\\n/static/bc2aca2664967c88303be0a641451848/f8fb9/BrokeHeader.png 720w,\\n/static/bc2aca2664967c88303be0a641451848/44bb2/BrokeHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/bc2aca2664967c88303be0a641451848/64838/BrokeHeader.webp 360w,\\n/static/bc2aca2664967c88303be0a641451848/9f8a3/BrokeHeader.webp 720w,\\n/static/bc2aca2664967c88303be0a641451848/f8be8/BrokeHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":400}');

/***/ }),

/***/ 6606:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAbCAYAAAB836/YAAAACXBIWXMAABYlAAAWJQFJUiTwAAAHYElEQVR42iWVaVCUVxaG++eMM4ljGKNiTDRu6LhlNCYoiIIKKCBg0+w0IEs32CyyiE03DbJKA4ILAWz2RTZZBBTZsVEQRQEVHMlgKlphnJrNmUpN1ZjymWtyq746t7669dT7nnvOuZLyDAX1VzLJTUsiOkxFbFQsCkUMfvJIvL1O4i4Lx9EpEDtbdxzspBzYY4PVV5Y4Hz6E3PUIHvZWaKICyUsKRev9BZKS5ACaK9IpytERHRyKl08E2bml9PTeZXb2W35Y+CtTT+Z4ND3Ly4XX3OmqIC9Bga+9Dbs2bMTxgDnnEpXok08R4bwVyWl/V2oKtJQV6FC6uZFyJpX36927dz/Ht+9+4v3uHW95++MCPz6/zpvhs7w2phMsdeb4ISsM5RXoi1rw2LcOSXSQP1V1rdRdSCdMHFCr4vnvT//jH2/+yb/+82/+LuLrV3/i5cxdFl7M8OxeE7fLIrhXl0CAswOhISraJl5zoeE2bnsEMMLfm8rWLi5kpxDj64O3WwA6nR6t9hwadSY6TToRIUrCgkKJUUUS5utBoKsjITInZHaH0Z3NRV9ajzbjAlKLDUhOejrQUJ1PVelFcjKzuNeaxdxwHtMDWTwy6nk8kM3jm9FMtJ5kvEWFsV5Jb1UQ/Vfj6bleQnNXJ7dGbqPPOY/M4nNhWX6ckbt9jN7uprqqkidVGt4MxfNqVMPUg/PM9cby/VAsf+6K59ueGKY64n+GT/dkMtTXTHmRjuEHQ+Tps5Du+ewXhb09Ddzub6emppJHLRm8NBbyfKCYZ4MFTHbmc/9aqshZJEOVidy4rKIzR84dYyNdnQ1cSgmjs6eLNF0ybuarRA69nRga7qC3u57aGgP3hNLZZw+ZnLrD04lBRu8NMDLczthQK4MDrfR0VAqr1UKVkZvXm7hSmEOX8Q5JGh2yvQIYLrPl1o1aBnqbqK2+QndbM09nnjI9McadwW4eiWjsbae/rYrR4V66mw101hYyfv8uXdcaMVRW0DL6GLUAuu/9BIlCakNDVS793VepqysXCtr5y8uXzE9NYhzo4dmjhzzs78Yo7E0O99PbVElXfTnzczMYjf0YyspoH5/hdIIWT4v3QNf9VJWk0iNUNjfXcb2jjcbaep5MjPPqbwt8N/eMFzMP+G7hBXOPHzA7PcbU7CTzP7xgdGSA2tZ2rj+c54xah5elAAY57uGbPJHs1gpu3Gij+KwafaA347c6GRMWv3/+hPu3+xhur+VGfS3F+rN0VhXTdCmX4c5mqptauDY6S1REDF4WK5HID+8kPzOejo4Wbt7spixPT31+Di/n56k4l87caB+XNWfobjCgU6mIdHfBkJNOofY0U4MtFIkcVveNExoYjOdeUyRuFmYkn/KmokTP1UJR4LmpFJxNorWukbYCPRN3jeRHh1Odf47shCg8bA6Qe7mCvtYqAaynoXeQeuNjTvj44bdf1KG7AKrDpRRfSMGQlURxmhqDsFWSlUG5OgQfNx88pN4cPOgobGqozAgX40rJ5GAzw7XnKDEUU9djxN9NSoDNml8UqsOkFBakUapP43JaAmX5kVzJTCY93JcD+w6wwsySQ/ZS+iqSROGn05Qfz4P2HFpSQ1FHKCirbyDAxYFg27VIXM3XE+Fry6WLWRRnpdCkCaQ9LYiC00qSoj3ZvmsvOoULI425NOTFUJYSzK2rOUx3ZNGYEkCsSkleQQ6eR21QHFmP5Njuz1HKrMjXnyE+2J1SH3MunrAjUSHjcrIXPs4HaL8UyVhNAjq5nZjKh4jydyFC7kCiuzVeHm5oktQ4W5ujPLoRic3WVYS67SM/K5oghy+RmW9Gbr2d5FBbKtICGG8/L2Cn6TPEc/GUlOwQO1wP72Hbxg34WH7BEQdbwsNOYPv1DpQOZkistqzEz2E3yfEBeFlvI9jRAk/rXZyLcqVUAKfvtDNer2Hiej4XYj0pjJFyRunOUftDuDraE6JQIDvuyMHdWwk5IhTu22zKvi2r8XGwJtjJgnxtGJogKaUZShoLVKJLRhhvShdzsZwSjT+GBBnVJWmoE2PwdRdPgJMj+7/eieX2jSgcNiPZvMqE1b/7AMtN63HZs4WMGH+0IcepPh9LW1GMGA794kZzGeupoEw8aJeinblSnEVcrAoHW2u2mJmxbdXHfLXWlBP2Arh9jQnLf7uITaZLcfxyHYnBx0iL9KH6kpbmy/HcunufkZtiaLQUU5ByitT3JSbaThUWhK2NNX/8wybWLfsIsxXiW7NMAD9bwooPF/GpyWJ2rjMlSu5MapKWom8KxE070tA3QU1DI70C6K+MwtJ8Bxlxvmij/UiKlLP+01VsWWnC2o8Xs2ixCZJNS3/Dqo8+ZP2yxeww+wS5p5S4ICdSU7XI3Y9QVH6VDP151PEqTsdGckJ2kADxP8z/OCrvg0KVKRuWC+Dy3/PBEgE0XbKINUsXY7XZhFj/wyTGReJxeBthchfiVAHoszOIE62mUgYSrfAj3O8YSl8nQnyckdpb4CQqYttqU5Yu/oBf/XoR/wd26VGs33FX6gAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/9f15602f90e2e192e945f79260dde313/4419e/BrokeTeam.png","srcSet":"/static/9f15602f90e2e192e945f79260dde313/65b66/BrokeTeam.png 279w,\\n/static/9f15602f90e2e192e945f79260dde313/6e5e0/BrokeTeam.png 557w,\\n/static/9f15602f90e2e192e945f79260dde313/4419e/BrokeTeam.png 1114w","sizes":"(min-width: 1114px) 1114px, 100vw"},"sources":[{"srcSet":"/static/9f15602f90e2e192e945f79260dde313/44e76/BrokeTeam.webp 279w,\\n/static/9f15602f90e2e192e945f79260dde313/a2a99/BrokeTeam.webp 557w,\\n/static/9f15602f90e2e192e945f79260dde313/da732/BrokeTeam.webp 1114w","type":"image/webp","sizes":"(min-width: 1114px) 1114px, 100vw"}]},"width":1114,"height":1492}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-projects-broke-js.js.map