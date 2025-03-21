"use strict";
exports.id = 692;
exports.ids = [692];
exports.modules = {

/***/ 2004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5912);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Import your CSS file
const PasswordInput=({onUnlock})=>{const{0:password,1:setPassword}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');const{0:error,1:setError}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);const handlePasswordChange=e=>{setPassword(e.target.value);};const handleSubmit=e=>{e.preventDefault();const correctPassword='yourpassword';// Change this to your desired password
if(password===correctPassword){onUnlock();}else{setError('Incorrect password');}};return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"password-container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"shushing-finger"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form",{onSubmit:handleSubmit,className:"password-form"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input",{type:"password",value:password,onChange:handlePasswordChange,placeholder:"Enter Password"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button",{type:"submit"},"Unlock"),error&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{style:{color:'red'}},error)));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PasswordInput);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-protection-js.js.map