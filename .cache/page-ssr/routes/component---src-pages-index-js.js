"use strict";
exports.id = 293;
exports.ids = [293,309,339,173,150,398,695,497];
exports.modules = {

/***/ 2729:
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ 4722:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iS: () => (/* binding */ Z)
/* harmony export */ });
/* unused harmony exports GatsbyImage, MainImage, Placeholder, generateImageData, getImage, getImageData, getLowResolutionImageURL, getSrc, getSrcSet, withArtDirection */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2729);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);}return e;},n.apply(this,arguments);}function o(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)t.indexOf(a=n[i])>=0||(r[a]=e[a]);return r;}var s=(/* unused pure expression or super */ null && ([.25,.5,1,2])),l=(/* unused pure expression or super */ null && ([750,1080,1366,1920])),u=(/* unused pure expression or super */ null && ([320,654,768,1024,1366,1600,1920,2048,2560,3440,3840,4096])),d=800,c=800,h=(/* unused pure expression or super */ null && (4/3)),g=function(e){return console.warn(e);},p=function(e,t){return e-t;},m=function(e,t){switch(t){case"constrained":return"(min-width: "+e+"px) "+e+"px, 100vw";case"fixed":return e+"px";case"fullWidth":return"100vw";default:return;}},f=function(e){return e.map(function(e){return e.src+" "+e.width+"w";}).join(",\n");};function v(e){var t=e.lastIndexOf(".");if(-1!==t){var a=e.slice(t+1);if("jpeg"===a)return"jpg";if(3===a.length||4===a.length)return a;}}function w(e){var t=e.layout,i=void 0===t?"constrained":t,r=e.width,o=e.height,s=e.sourceMetadata,l=e.breakpoints,u=e.aspectRatio,d=e.formats,g=void 0===d?["auto","webp"]:d;return g=g.map(function(e){return e.toLowerCase();}),i=a(i),r&&o?n({},e,{formats:g,layout:i,aspectRatio:r/o}):(s.width&&s.height&&!u&&(u=s.width/s.height),"fullWidth"===i?(r=r||s.width||l[l.length-1],o=o||Math.round(r/(u||h))):(r||(r=o&&u?o*u:s.width?s.width:o?Math.round(o/h):c),u&&!o?o=Math.round(r/u):u||(u=r/o)),n({},e,{width:r,height:o,aspectRatio:u,layout:i,formats:g}));}function y(e,t){var a;return void 0===t&&(t=20),null==(a=(0,(e=w(e)).generateImageSource)(e.filename,t,Math.round(t/e.aspectRatio),e.sourceMetadata.format||"jpg",e.fit,e.options))?void 0:a.src;}function b(e){var t,a=(e=w(e)).pluginName,i=e.sourceMetadata,r=e.generateImageSource,o=e.layout,u=e.fit,d=e.options,h=e.width,p=e.height,y=e.filename,b=e.reporter,S=void 0===b?{warn:g}:b,N=e.backgroundColor,x=e.placeholderURL;if(a||S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'),"function"!=typeof r)throw new Error("generateImageSource must be a function");i&&(i.width||i.height)?i.format||(i.format=v(y)):i={width:h,height:p,format:(null==(t=i)?void 0:t.format)||v(y)||"auto"};var I=new Set(e.formats);(0===I.size||I.has("auto")||I.has(""))&&(I.delete("auto"),I.delete(""),I.add(i.format)),I.has("jpg")&&I.has("png")&&(S.warn("["+a+"] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"),I.delete("jpg"===i.format?"png":"jpg"));var W=function(e){var t=e.filename,a=e.layout,i=void 0===a?"constrained":a,r=e.sourceMetadata,o=e.reporter,u=void 0===o?{warn:g}:o,d=e.breakpoints,h=void 0===d?l:d,p=Object.entries({width:e.width,height:e.height}).filter(function(e){var t=e[1];return"number"==typeof t&&t<1;});if(p.length)throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are "+p.map(function(e){return e.join(": ");}).join(", "));return"fixed"===i?function(e){var t=e.filename,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.reporter,d=void 0===u?{warn:g}:u,h=a.width/a.height,p=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i?r||(r=Math.round(i/h)):i=r?Math.round(r*h):c;var f=i;if(a.width<i||a.height<r){var v=a.width<i?"width":"height";d.warn("\nThe requested "+v+' "'+("width"===v?i:r)+'px" for the image '+t+" was larger than the actual image "+v+" of "+a[v]+"px. If possible, replace the current image with a larger one."),"width"===v?(i=a.width,r=Math.round(i/h)):i=(r=a.height)*h;}return{sizes:p.filter(function(e){return e>=1;}).map(function(e){return Math.round(e*i);}).filter(function(e){return e<=a.width;}),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}(e):"constrained"===i?E(e):"fullWidth"===i?E(n({breakpoints:h},e)):(u.warn("No valid layout was provided for the image at "+t+". Valid image layouts are fixed, fullWidth, and constrained. Found "+i),{sizes:[r.width],presentationWidth:r.width,presentationHeight:r.height,aspectRatio:r.width/r.height,unscaledWidth:r.width});}(n({},e,{sourceMetadata:i})),j={sources:[]},R=e.sizes;R||(R=m(W.presentationWidth,o)),I.forEach(function(e){var t=W.sizes.map(function(t){var i=r(y,t,Math.round(t/W.aspectRatio),e,u,d);if(null!=i&&i.width&&i.height&&i.src&&i.format)return i;S.warn("["+a+"] The resolver for image "+y+" returned an invalid value.");}).filter(Boolean);if("jpg"===e||"png"===e||"auto"===e){var i=t.find(function(e){return e.width===W.unscaledWidth;})||t[0];i&&(j.fallback={src:i.src,srcSet:f(t),sizes:R});}else{var n;null==(n=j.sources)||n.push({srcSet:f(t),sizes:R,type:"image/"+e});}});var _={images:j,layout:o,backgroundColor:N};switch(x&&(_.placeholder={fallback:x}),o){case"fixed":_.width=W.presentationWidth,_.height=W.presentationHeight;break;case"fullWidth":_.width=1,_.height=1/W.aspectRatio;break;case"constrained":_.width=e.width||W.presentationWidth||1,_.height=(_.width||1)/W.aspectRatio;}return _;}var k=function(e){return Array.from(new Set([1].concat(e))).sort(p);};function E(e){var t,a=e.sourceMetadata,i=e.width,r=e.height,n=e.fit,o=void 0===n?"cover":n,l=e.outputPixelDensities,u=e.breakpoints,c=e.layout,h=a.width/a.height,g=k(void 0===l?s:l);if(i&&r){var m=M(a,{width:i,height:r,fit:o});i=m.width,r=m.height,h=m.aspectRatio;}i=i&&Math.min(i,a.width),r=r&&Math.min(r,a.height),i||r||(r=(i=Math.min(d,a.width))/h),i||(i=r*h);var f=i;return(a.width<i||a.height<r)&&(i=a.width,r=a.height),i=Math.round(i),(null==u?void 0:u.length)>0?(t=u.filter(function(e){return e<=a.width;})).length<u.length&&!t.includes(a.width)&&t.push(a.width):t=(t=g.map(function(e){return Math.round(e*i);})).filter(function(e){return e<=a.width;}),"constrained"!==c||t.includes(i)||t.push(i),{sizes:t=t.sort(p),aspectRatio:h,presentationWidth:f,presentationHeight:Math.round(f/h),unscaledWidth:i};}function M(e,t){var a=e.width/e.height,i=t.width,r=t.height;switch(t.fit){case"fill":i=t.width?t.width:e.width,r=t.height?t.height:e.height;break;case"inside":var n=t.width?t.width:Number.MAX_SAFE_INTEGER,o=t.height?t.height:Number.MAX_SAFE_INTEGER;i=Math.min(n,Math.round(o*a)),r=Math.min(o,Math.round(n/a));break;case"outside":var s=t.width?t.width:0,l=t.height?t.height:0;i=Math.max(s,Math.round(l*a)),r=Math.max(l,Math.round(s/a));break;default:t.width&&!t.height&&(i=t.width,r=Math.round(t.width/a)),t.height&&!t.width&&(i=Math.round(t.height*a),r=t.height);}return{width:i,height:r,aspectRatio:i/r};}var S=(/* unused pure expression or super */ null && (["baseUrl","urlBuilder","sourceWidth","sourceHeight","pluginName","formats","breakpoints","options"])),N=(/* unused pure expression or super */ null && (["images","placeholder"]));function x(){return true&&true;}var I=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src);}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData);}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage);}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData;},W=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.src;},j=function(e){var t,a,i;return null==(t=I(e))||null==(a=t.images)||null==(i=a.fallback)?void 0:i.srcSet;};function R(e){var t,a=e.baseUrl,i=e.urlBuilder,r=e.sourceWidth,s=e.sourceHeight,l=e.pluginName,d=void 0===l?"getImageData":l,c=e.formats,h=void 0===c?["auto"]:c,g=e.breakpoints,p=e.options,m=o(e,S);return null!=(t=g)&&t.length||"fullWidth"!==m.layout&&"FULL_WIDTH"!==m.layout||(g=u),b(n({},m,{pluginName:d,generateImageSource:function(e,t,a,r){return{width:t,height:a,format:r,src:i({baseUrl:e,width:t,height:a,options:p,format:r})};},filename:a,formats:h,breakpoints:g,sourceMetadata:{width:r,height:s,format:"auto"}}));}function _(e,t){var a,i,r,s=e.images,l=e.placeholder,u=n({},o(e,N),{images:n({},s,{sources:[]}),placeholder:l&&n({},l,{sources:[]})});return t.forEach(function(t){var a,i=t.media,r=t.image;i?(r.layout!==e.layout&&"development"==="production"&&0,(a=u.images.sources).push.apply(a,r.images.sources.map(function(e){return n({},e,{media:i});}).concat([{media:i,srcSet:r.images.fallback.srcSet}])),u.placeholder&&u.placeholder.sources.push({media:i,srcSet:r.placeholder.fallback})): false&&0;}),(a=u.images.sources).push.apply(a,s.sources),null!=l&&l.sources&&(null==(i=u.placeholder)||(r=i.sources).push.apply(r,l.sources)),u;}var A,O=["src","srcSet","loading","alt","shouldLoad"],T=["fallback","sources","shouldLoad"],z=function(t){var a=t.src,i=t.srcSet,r=t.loading,s=t.alt,l=void 0===s?"":s,u=t.shouldLoad,d=o(t,O);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",n({},d,{decoding:"async",loading:r,src:u?a:void 0,"data-src":u?void 0:a,srcSet:u?i:void 0,"data-srcset":u?void 0:i,alt:l}));},L=function(t){var a=t.fallback,i=t.sources,r=void 0===i?[]:i,s=t.shouldLoad,l=void 0===s||s,u=o(t,T),d=u.sizes||(null==a?void 0:a.sizes),c=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z,n({},u,a,{sizes:d,shouldLoad:l}));return r.length?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture",null,r.map(function(t){var a=t.media,i=t.srcSet,r=t.type;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source",{key:a+"-"+r+"-"+i,type:r,media:a,srcSet:l?i:void 0,"data-srcset":l?void 0:i,sizes:d});}),c):c;};z.propTypes={src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool},L.displayName="Picture",L.propTypes={alt:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,shouldLoad:prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({src:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string}),sources:prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired}),prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({media:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,type:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,sizes:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,srcSet:prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired})]))};var q=["fallback"],C=function(t){var a=t.fallback,i=o(t,q);return a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},i,{fallback:{src:a},"aria-hidden":!0,alt:""})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",n({},i));};C.displayName="Placeholder",C.propTypes={fallback:prop_types__WEBPACK_IMPORTED_MODULE_2__.string,sources:null==(A=L.propTypes)?void 0:A.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null;}};var D=function(t){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},t)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L,n({},t,{shouldLoad:!0}))));};D.displayName="MainImage",D.propTypes=L.propTypes;var P=["children"],H=function(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"module",dangerouslySetInnerHTML:{__html:'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'}});},F=function(t){var a=t.layout,i=t.width,r=t.height;return"fullWidth"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{"aria-hidden":!0,style:{paddingTop:r/i*100+"%"}}):"constrained"===a?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{style:{maxWidth:i,display:"block"}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+r+"'%20width='"+i+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null;},B=function(a){var i=a.children,r=o(a,P);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F,n({},r)),i,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H,null));},G=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],V=["style","className"],U=function(e){return e.replace(/\n/g,"");},X=function(t){var a=t.as,i=void 0===a?"div":a,r=t.className,s=t.class,l=t.style,u=t.image,d=t.loading,c=void 0===d?"lazy":d,h=t.imgClassName,g=t.imgStyle,p=t.backgroundColor,m=t.objectFit,f=t.objectPosition,v=o(t,G);if(!u)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(r=s),g=n({objectFit:m,objectPosition:f,backgroundColor:p},g);var w=u.width,y=u.height,b=u.layout,k=u.images,E=u.placeholder,M=u.backgroundColor,S=function(e,t,a){var i={},r="gatsby-image-wrapper";return x()||(i.position="relative",i.overflow="hidden"),"fixed"===a?(i.width=e,i.height=t):"constrained"===a&&(x()||(i.display="inline-block",i.verticalAlign="top"),r="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:r,"data-gatsby-image-wrapper":"",style:i};}(w,y,b),N=S.style,I=S.className,W=o(S,V),j={fallback:void 0,sources:[]};return k.fallback&&(j.fallback=n({},k.fallback,{srcSet:k.fallback.srcSet?U(k.fallback.srcSet):void 0})),k.sources&&(j.sources=k.sources.map(function(e){return n({},e,{srcSet:U(e.srcSet)});})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i,n({},W,{style:n({},N,l,{backgroundColor:p}),className:I+(r?" "+r:"")}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B,{layout:b,width:w,height:y},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C,n({},function(e,t,a,i,r,o,s,l){var u={};o&&(u.backgroundColor=o,"fixed"===a?(u.width=i,u.height=r,u.backgroundColor=o,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),s&&(u.objectFit=s),l&&(u.objectPosition=l);var d=n({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:n({opacity:1,transition:"opacity 500ms linear"},u)});return x()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d;}(E,0,b,w,y,M,m,f))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D,n({"data-gatsby-image-ssr":"",className:h},v,function(e,t,a,i,r){return void 0===r&&(r={}),x()||(r=n({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},r)),n({},a,{loading:i,shouldLoad:e,"data-main-image":"",style:n({},r,{opacity:0})});}("eager"===c,0,j,c,g)))));},Y=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],Z=function(t){return function(a){var i=a.src,r=a.__imageData,s=a.__error,l=o(a,Y);return s&&console.warn(s),r?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t,n({image:r},l)):(console.warn("Image not loaded",i),s||"development"!=="production"||0,null);};}(X),J=function(e,t){return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t].concat([].slice.call(arguments,2))):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.");},K=new Set(["fixed","fullWidth","constrained"]),Q={src:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,alt:function(e,t,a){return e.alt||""===e.alt?prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()),[e,t,a].concat([].slice.call(arguments,3))):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');},width:J,height:J,sizes:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),layout:function(e){if(void 0!==e.layout&&!K.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');}};Z.displayName="StaticImage",Z.propTypes=Q;

/***/ }),

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
const Footer=()=>{const currentYear=new Date().getFullYear();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("footer",{className:"FooterContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p",{className:"FooterText"},"\xA9 ",currentYear," Johanna Lee"));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

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
const Header=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header",{className:"HeaderContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"Logo",src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,alt:"Logo"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Menu"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://www.linkedin.com/in/johannaleehyunji/"},"LinkedIn"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"MenuItem",href:"https://drive.google.com/file/d/19jYAuiv4JhnaoI4WNHnzY0a5nQN8mown/view?usp=sharing"},"Resume")));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

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

/***/ }),

/***/ 3501:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5884);
const LopsterGallery=()=>{const{0:rotations,1:setRotations}=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);const images=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>[{id:1,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:10,direction:1},{id:2,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:9,direction:-1},{id:3,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:14,direction:1},{id:4,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:8,direction:-1},{id:5,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:13,direction:1},{id:6,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:10,direction:-1},{id:7,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:8,direction:1},{id:8,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:9,direction:-1},{id:9,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:7,direction:1},{id:10,src:_static_lopster_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,speed:5,direction:-1}],[]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{const initialRotations=Array(images.length).fill(0);setRotations(initialRotations);const interval=setInterval(()=>{setRotations(prevRotations=>prevRotations.map((rotation,index)=>{const{speed,direction}=images[index];return(rotation+speed*direction+360)%360;// Ensure positive rotation
}));},50);// Adjust for desired speed
return()=>clearInterval(interval);},[images]);return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"LopGalleryContainer"},images.map((image,index)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{key:image.id,className:"LopImageItem",style:{animationDuration:`${image.speed}s`,transform:`rotate(${rotations[index]}deg)`}},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img",{className:"LopImage",src:image.src,alt:`Lobster ${index+1}`}))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LopsterGallery);

/***/ }),

/***/ 5536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4722);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(123);
const ProjectSlide=()=>{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"GalleryContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav",{className:"ScrollingInnerContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/Yelp"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/YelpThumbnail.png",alt:"YelpThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(5769)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Data Analysis, Visualization"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"Yelp Project"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/ESNetMRDP"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/ESnetMRDPThumbnail.png",alt:"ESnetMRDPThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(8175)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Data Analysis, Visualization"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"Yelp Project"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/Broke"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/BrokeThumbnail.png",alt:"BrokeThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(1031)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Network, Data Management"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"ESNet MRDP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/Waymo"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/WaymoThumbnail.png",alt:"WaymoThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(7951)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Network, Data Management"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"ESNet MRDP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/SiaPartners"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/SiaPartnersMetaThumbnail.png",alt:"SiaPartnersMetaThumbnail",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(6645)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Network, Data Management"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"ESNet MRDP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",{className:"ImageItem",href:"https://www.youtube.com/@johannalee8172/videos"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/Youtube.png",alt:"yelp",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(3273)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Network, Data Management"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"ESNet MRDP"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link,{className:"ImageItem",to:"/Projects/Yelp"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_2__/* .StaticImage */ .iS,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred"// Optional placeholder
,layout:"constrained"// Layout options
,height:350// Desired width
,style:{borderRadius:'5px'},__imageData:__webpack_require__(5769)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"ImageOverlay"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Tags"},"Network, Data Management"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"Title"},"ESNet MRDP")))));};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectSlide);

/***/ }),

/***/ 9639:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1725);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1944);
/* harmony import */ var _Components_ProjectSlide__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5536);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6143);
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4101);
// Style
//Landing Page
//Header & Footer
function Home(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"AppContainer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_IntroductionSlide__WEBPACK_IMPORTED_MODULE_1__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_ProjectSlide__WEBPACK_IMPORTED_MODULE_2__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],null));}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 5884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-9c5d51d72547f351d3074957f0a0e510.png");

/***/ }),

/***/ 5769:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR42lVUW0tUURQ+3h8MukCFQURP4UNl1Ng4xytO5iUzJUMwlPLyYhmTGirazdCszPJeYZGVYkpTYzTNaDPq3JybU8pgkQXlQ/bQb/hae5+N2cPirL324tvfunxHCtf4EC67EK6ZI/OTOejsoS+ZzHy/uHMJ30nmJt8n7r0il8V9kDiYbKWDTUmWLSLRrvgMSDMjjPkiVxa5nIBNiVNMCtd41yV4ECHPkrk5a8X3kjnI7OLeRuZay1XYugSohzH0Ka+wC6IcSn4EWRixCUtwIor8UPqGqR3kOxGipofJohJsPK6U7BZVsZJ5mVbxggMbUizYkWHEpjQzNqaasD39HTanTyMmy4LdOUZs0VqwM2sSu7LMiE610qMOUeFayUpzWZnSYQ+u9k1DV6dDZn4RLjY24869DhjevsKThx24XFuJ8spijOmHMWMzoEBngnTAj6gkwVAZioezY32RVE70jQXQN9CGhpoqnC8vQWNVCRb9Fjy+VY+zGfvRlZeM4FIAX787UdJogRTnIUDRQ5n30MknxJouHZpB//gnGKcMaDhdiPrCXLSWFmPpgx6m4X70VGgRzJSx+mIUv/+soOwGAeyzE6BdTJ+X7OfrwKYpqdzE8COszkl09vbC+GYEn4OzWPHqsbryBQv6Ecxn5+BHaRF+BSZQfp3aFOcjQM/ankp8aeUZvhpSwhxa7hvwsl2HZ+2NcJmfY9nYCuPANZgM45iencS3wV7oW+rx+nYZTp0ZJBLziEq0cQyGtQbIJhWaPI+m6laMHY2F/mYNlld/wv3+KUzdF9DdWofRoS5MjT1Az91mTHRV4HjZIw4YyQDZ4ssMkMmJS8/DKatzOpGfdwna7FpknbyC5NwmJKUWIE1binSKHcmshvZYHXLyzmGPdgiSZkERAleR/99QlCk5EKKaouHYIMVPQzpIa6Gaw9bYCkTvbaO18iMk3kxmpfgsQtVWsdDrpcd/BDbxgpvTj0xiXxc1m9ogB5Byog0xml6EyIsUJznSXUSim8vwP+nxteGLzdTCaHuFDL3iTLIjkIzCDmxL6IMkBxVNcxCvWGYhPY3yt/kLWoiS0LXsoaYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/852f0082528fa271dc1d789ac74b9d97/a58f3/YelpThumbnail.png","srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/26c7d/YelpThumbnail.png 117w,\\n/static/852f0082528fa271dc1d789ac74b9d97/f1aa4/YelpThumbnail.png 234w,\\n/static/852f0082528fa271dc1d789ac74b9d97/a58f3/YelpThumbnail.png 467w,\\n/static/852f0082528fa271dc1d789ac74b9d97/3f5ae/YelpThumbnail.png 934w","sizes":"(min-width: 467px) 467px, 100vw"},"sources":[{"srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/06fe1/YelpThumbnail.webp 117w,\\n/static/852f0082528fa271dc1d789ac74b9d97/2d022/YelpThumbnail.webp 234w,\\n/static/852f0082528fa271dc1d789ac74b9d97/54814/YelpThumbnail.webp 467w,\\n/static/852f0082528fa271dc1d789ac74b9d97/4246e/YelpThumbnail.webp 934w","type":"image/webp","sizes":"(min-width: 467px) 467px, 100vw"}]},"width":467,"height":350}');

/***/ }),

/***/ 6645:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAEEklEQVR42iXUa0yTZxTAcZRLiEt2X2QoU0q42RZRYVwLKxepgIjIlDm84GSSghM2E2XKHE6YYpmZijKYyEVAUAKaBVYNyNwmUT7MzRBDokaZSlgcFMTS8vZ9/3vMPpzkfHl+OSfPOccJrwhJ8YlEWZqEEpOCkvYhyidGlOIClO9KkJtMyN0mHAN1OIbqkR7WIf3TxqylHrtVxGwzNkc1NqVORC1OLIySFFW0ANMEmI6clo28/QvkL/ciH6vA0VyNo+c00sB5pKHzzD5sxT7Whd3Siu1FCzb7BQEKTBa50iDAd0MlFoeiaBMEuBJlbSbkFcCBXXD6EFw8Cf0ibjfDg2aUsXPIUx3ItkYcsw2iwnMCrBLgGQFWC3C+AL3CkdWrICaVyTUbeLotn6d7ChitLGW0vpLRSyae9NXw5FY1T+6c4u/hOkYeHGdkpIoXM2exy8eZcfzAjHxCgG+HSCwIwxFogPhMPlb54+TkxDwXV1zmzMVZ5C7Oc3F3c8PN1RV3dzdemeeOq6szzs4u9Jj3AbVM22qYkU4K8A2NhEcwSkAcxBrYpF2G8ZtyCksOsL/CROWP9eQYC1D5qwnUBBEeHkagWosuOorICB0dnfkCPMpzawVWe6kAXw2WmB8CAaLl6NUUfpBEQ/+vlBTk0NHTw33LNO0/mwnWLGFTTi7rUxJIjFhGnjGP3NwdXOzIE+BhpqbLeWHd/xLU/g++bFmfhjEylq6BAZqOFHPmWBnm6qMY83IJUi8hPTOLrZtXYYjWoA0KwnuRis7OTwV4kCnLV0xP7RbgWwJcEApBSZC0BmNsImeuDtLWfYuq6iaiYmJ53dODlNVryFipR2/QolF7oVa9x+KFi7h8aQs4djH5zMjz8a0v5zBSwjcOJWw9pG8hV7eKw5fvUGe+S9vvj9lWepY5b3qydmUsqfoosjPiCdf64OPri0oTSnureGcvwDK6ncmxjwQYoJNYLqqLy4INm9mhT6b+5hjme2D6aYi0fafwDH6fYB8PIpYF8nXJ5+zZnc9yjR8eHgtob06F6WwmHmUyOZIswJAkCV06SspWpLxCtsQbyCkuJXdvGX46A6qwaLyXrkDtH4DWz5c4vZ6EuHi8PTx55zVP2hrFdv2bwsS9BCbvRQpQt04iIRtl3U5Gi8u5WW7i6qFy+qoquXGhnhvdzdy83sbgYBe/DTTSd+0EfX2VXP/lIH1X9vLnQCGTDxKxDMdguRsiwIQMieRsyBLzlP8ZlJdBSy1cF6s2fAXG+2G2F5Rr4jc7RdQhO75HmilCsmzG+jhZYGFMDC1n4i8/ASZtlEjLgewi5KI9OL4Vl6VBXBZzC44/zEiPepkdvyIuSy8ztnas1hoxHiamnu3E8ngjlvsGUdkKgWkYv72Y/wCj3iRQKDaJQQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/2487c4a77a02886978b3fd60f6c0a0bf/a58f3/SiaPartnersMetaThumbnail.png","srcSet":"/static/2487c4a77a02886978b3fd60f6c0a0bf/26c7d/SiaPartnersMetaThumbnail.png 117w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/6f090/SiaPartnersMetaThumbnail.png 234w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/a58f3/SiaPartnersMetaThumbnail.png 467w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/6f3ef/SiaPartnersMetaThumbnail.png 934w","sizes":"(min-width: 467px) 467px, 100vw"},"sources":[{"srcSet":"/static/2487c4a77a02886978b3fd60f6c0a0bf/06fe1/SiaPartnersMetaThumbnail.webp 117w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/47764/SiaPartnersMetaThumbnail.webp 234w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/54814/SiaPartnersMetaThumbnail.webp 467w,\\n/static/2487c4a77a02886978b3fd60f6c0a0bf/26a0b/SiaPartnersMetaThumbnail.webp 934w","type":"image/webp","sizes":"(min-width: 467px) 467px, 100vw"}]},"width":467,"height":350}');

/***/ }),

/***/ 1031:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAD0ElEQVR42k2UW0ybZRzGv6tFlxjjhZfTC2NcOJYWSgsUmbCRGWO8cRripZqdgjOLqHEum6jDbDNuDsHMDZljUAqBgd04lEM7hFIoh9J+LQU5lI7DaKEchpsz/ny/thdePHn/efO9z/v83+95/lLEm03EmxmHUmcI6GK1nBHf07PhTyfs0xH2asWawaY/539nDPE6BylGoI5DqVUCGjYn09n2p7EhDv8dUNFVmctn2iKOG/Zx2vAuQyY9OzMprHuUc+kCKdFViqlJj0MXJYsIFcujmcz0JzFn1/I4qOH6iTd4WzrF+8+UUCR9zu0L+TwJZghCnbg0K3qxIkgQZkXlrss61jzZbAll/r4cJn12qqsqaTNbCExd4sdjeeRLJzi0u5iDUjG3fyjgr9lEVsdVhCfUhFzJgtSgEGrZ9KWwM53Eo1kNj6Zfwd2bQ2g1wui9Pwlvb7MwU0P5JwUcyf6ZU29V8F5CGTXn9CxNl2CqPobZ+BFzYyWsClIpImuZd77JH+YiWm8cxG8vwtN3gLtGB8Zvzcw+djIfqOJicT77XyjjUOrXFL54hqpvXmNp0Urg/izjC7OMei08GNUiLTkT8I1fZcLrx9LVwdr6PJ2mQpaX7jMXXGF54x8WF2o5+2E2z4tW9+46yh7pKNfL9uN31eHsbqfZLdM5WEtoXI+0MpLEsP00K5vNPKGFxVA97cYDuOQx+t0zDHhWkV0VfHk4l6ekj9nzdDHPSsf55bsCbLZKzBYzPZ5BbPZq8Z5qRaEa10gpy1tNrGzdYCncQEf969gGHXT3O2m908to/3lKT+YiSUd4bvdhdkkfUHu5EFPHRcptLVzrNtH4+wXxx/cpCpMZc5whEGpgIVxNcMUoCAsxtzTgHbDid44w3FeJuyuBhqsabv2UQtO1ZAL2LFp6rnDT3sittu9pb/+KNbcw9rJCOHSWBzvN7PxrFC03Ym3Kw2Gto6elkcZfaxns+YK1iQQeTuvY8mt4OJVKSH6Vtrrz4oIrNFRV09l0ibCcKVoeTsPnLmVs7CadrZeZmTfiseUxdS8VV1cKnp50Ao6Y8ddlETHh1w1htZA7i77Oenyjc3Q1DTFg/U3YJlt5w714XeVMuhcxVVjxTbrw9RmEinRhVJWIYIYgyIhHS+RVTovGc82jxXk3GUudCotRjac3OZoWSRkADvM7WFvPcafmU6zmkyyN6YXZ9bF8y1nxSKrjgyCu1pMjFKsEtNHhEZFTBYRtlLgFhxPx9r4kIpdIcOhloUiokxWS1NjHUYWKMkEua6LkG4Jc6SDi08Xq6Aww8B8eTWrJWhxY8QAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/7376e/BrokeThumbnail.png","srcSet":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/26c7d/BrokeThumbnail.png 117w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/2a083/BrokeThumbnail.png 233w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/7376e/BrokeThumbnail.png 466w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/51866/BrokeThumbnail.png 932w","sizes":"(min-width: 466px) 466px, 100vw"},"sources":[{"srcSet":"/static/a637219d9d9a15a7fac1fad79d3e7ef2/06fe1/BrokeThumbnail.webp 117w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/ea21e/BrokeThumbnail.webp 233w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/43046/BrokeThumbnail.webp 466w,\\n/static/a637219d9d9a15a7fac1fad79d3e7ef2/37470/BrokeThumbnail.webp 932w","type":"image/webp","sizes":"(min-width: 466px) 466px, 100vw"}]},"width":466,"height":350}');

/***/ }),

/***/ 8175:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADbElEQVR42nWUa0wUVxTH7y6osC/UKki2JQuKxEcxxvpBQSFK1AjiC2ujfXzyk0ljYtrSEGPWsPiI8XNbE43VusWKDyAg2Z3ZmX0IVKmKaSMWowg6LOA+gvGxi/ffMzNVNqa9yT/nzNyZX/7n3AcziGbosiA1Z0ImKYNkgpGe08WZFG2oCLRgR+ghtgbvkf7CzpCCInkvmMhoPgtsEvZWNpqchizfEtilaorFKAv8hm3BPiyRnSgNnMLu0ChqgvdRE+rHrlAYDumzf4E2FWiCKqNo1Z15TWAeI1ZKP2Kn/zGWSvXY4r+NrYG7mOf7ChahEGXyeXp3F9X+m1gkfwejYJ2s7F2igqm8qcE8sK4ZKL5Zj89vj+OjGzVgnekwdn1AMUNXVybSumfDGJyhtSW1SqY6Y+JU2MSPURo8gw2nT2G580sUHVqNVc7v4ThYjPyGQsw7vJC0GAWuRXC4FqDAWYSck3kwSOROSAHqJZup2c3Y1RlG5b5aVK3fjnVlm1BWWo7yFRuxtmQzKkhrS6qxhlReUoWKpVuwbE8pDH6zDhQskyUzMRMrQz+hytuPE1evYWxkBANPFQwpYQwqCh4rTzUNkJ6MDCM8qmBMieHbK3VgbQzpkjXVoUUDTpOzYWlbjWMdJ6GOCf4G/zWiz19AfjSo5S7hCFiLCrS923bs7d5Ll2nJmxl95MKDgQhu9d3HMLlTwmEkk0kMReMYio/jz5EoWnt6gVdAg3j0/4C0caXp2uQhTwNexBMYHFYQiUQQiUYxQcDT3b1ov/cIY4kJJJKvNYf1nsNgrUwzo/cwFShnaUCnp57qBUafjSEai+NZJIpkIoHXHPj75Ruc7VfgGxzWgE6PSwdKWe85pFVKo8bars3BNz/XwtsqwP1rIy40NqHp4hW0t3XAJ0n44/cbuNDSgR+aWnGnsxe1vxygvmfTv6kOBTOnB85EM8/2OLjj8gKe687nH7oLket2wO6ei5xzeXzOuQJOOc9tzOGfXNzNv7jUw1dd3c9ndszmBtHKdY6JM4NMDmWiU2QyXQhBOnrXSYEMpAVmgfnTYO/chs09fZjf9bWmhd11MF9fjCnBXJqnkyJbJxlkM0b1x9RIpyZmFCj3muLFch1Xb5N1gXbkSZ+OL5ePR+2+ypjdV0XaFGNeRt+aNekMVabYP1MmwiCp6+9NAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/f91444af258f8b39e3334ac6f5699ed9/7376e/ESnetMRDPThumbnail.png","srcSet":"/static/f91444af258f8b39e3334ac6f5699ed9/26c7d/ESnetMRDPThumbnail.png 117w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/2a083/ESnetMRDPThumbnail.png 233w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/7376e/ESnetMRDPThumbnail.png 466w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/51866/ESnetMRDPThumbnail.png 932w","sizes":"(min-width: 466px) 466px, 100vw"},"sources":[{"srcSet":"/static/f91444af258f8b39e3334ac6f5699ed9/06fe1/ESnetMRDPThumbnail.webp 117w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/ea21e/ESnetMRDPThumbnail.webp 233w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/43046/ESnetMRDPThumbnail.webp 466w,\\n/static/f91444af258f8b39e3334ac6f5699ed9/37470/ESnetMRDPThumbnail.webp 932w","type":"image/webp","sizes":"(min-width: 466px) 466px, 100vw"}]},"width":466,"height":350}');

/***/ }),

/***/ 3273:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADsElEQVR42lWSW2xUVRSGN73MmdOZzuXMOTPTGy0ttJXa+41OW1Ij0UqAqCRGRAyWakiQKqYIWtrQ1MTa+GDEJxJNDDUhGkKiaI1U8Ta9g5XUUqSJl0igPkDUBGyTw+c6Y2v04c/Ofljf+tbaW5mmYYeCXjsUMu2sLNMuKYrYNfURO9ASsP2tQdv9cNAuj/ntZ0LpdnvYZ7eZHrsio9D2ZjfYoWihbYYzbMsK2R6vYQeNkK38Zh45G17go3ermPu6lD+mmzhzoRj1hU7yOS/qW50n+lwQVCxmJkNY0XfXLlTTNJ7Yl6iqITq7dnL6+Foqy6IozSinec9JFn+K8ed8FfzQwuB0IeozN6lnPagxnV1HNAgobi8DjxVuRzVfxNM8jqqYpuu1PrhZw9bWLFSKv5wdB/r5a/5ufpupgLkYb57PE6CGa1iA4252d7sSwMXMpATwnXX3oBpHSWv+SoCj7OwcYHG+jM2bMlFJvio6el/mzs+lLMzUweUW+qfWJAy1YRl5PI0nlw1XgO8XbJSRz+NumpCRp3hg71vculLHlvvEcJWvkp6Bw/BLCddnagXYzNHJ1ahhB+gY6ux56f+GH+Q3iuEEWuMYqnqc2O4T/D5Xz7b7xTA5UM4rrz8nwGIxlB1ejnFkMluAGu7hNNSETluXAP2KJQcYUXy8pl6AcbSmOKomTuVjg9y8VLcCrGDgWKcAy8RwgwA30jWZmzB0JwzTaHNG/g/wkwRwClfTFKp2iopHT3FjtkmAzqOI4atvOIbrWfiuBmYb6B7PQX2q4XGAE2k85QDl29zKEWCG4kxBnQBHBDgqhiPU7BjkxsyyofJWcahPdnh1Pdd+rIdfm+m5JI/yjYZ2Vpdvo9F2MBVSxNAvQI/iwwxnh2P/jFw9Rm27AK82sHWzrConL5/Phx+H0VJu74vAs9nE2310H9I5OlLA4Qv5nDiZS+8+jY4OFy/uV2zrKCKp5ZxAL5JTfZpTjZukLsqDJRaquCDI0HvFXHm7iCWfShg4NtTq3JGuXK/n2kId3jkfajaNVfNuVDwD171DAvyeLRW9LBmKuJ5MYzCAMgyTQMAiO8uiOhrioWiAp8PpHFwrls8X0N+zjt6eQswDAbz7/fj3puN7JAt/wXZ8ua1kRotYbZkEIxYhSwxN08SJA/aZFrrEJUk2JKkGKS4DzR3C1C0st0XYJdFDWIYu8WCEggSXGWHJv0BLulhyRpYTlXtUukYjcpeYYUlkJRamFZY6J1aiLsEwTf4GIsBHxXtFH1UAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/d442fc4d24554bd73bc438fa545ac233/a58f3/Youtube.png","srcSet":"/static/d442fc4d24554bd73bc438fa545ac233/26c7d/Youtube.png 117w,\\n/static/d442fc4d24554bd73bc438fa545ac233/f1aa4/Youtube.png 234w,\\n/static/d442fc4d24554bd73bc438fa545ac233/a58f3/Youtube.png 467w,\\n/static/d442fc4d24554bd73bc438fa545ac233/3f5ae/Youtube.png 934w","sizes":"(min-width: 467px) 467px, 100vw"},"sources":[{"srcSet":"/static/d442fc4d24554bd73bc438fa545ac233/06fe1/Youtube.webp 117w,\\n/static/d442fc4d24554bd73bc438fa545ac233/2d022/Youtube.webp 234w,\\n/static/d442fc4d24554bd73bc438fa545ac233/54814/Youtube.webp 467w,\\n/static/d442fc4d24554bd73bc438fa545ac233/4246e/Youtube.webp 934w","type":"image/webp","sizes":"(min-width: 467px) 467px, 100vw"}]},"width":467,"height":350}');

/***/ }),

/***/ 7951:
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAD+UlEQVR42k2U6U9cZRTG79w7KxSGYR0YGBiGdYAZdgYY2tJ2phTosC8FKW1ZAgND2JrSlqZWq0GrtNWSpsYYbKrpkhhtVLBCCVBs1TQmTUzkgzH+B373w88X0MQPT85J3pvffZ5z7nslVdIE+tIVEry/YKzawuB+jt69jr58Rz+Ifk3UTXTuLbSlq2hKNkRdR1f6VNRNlKJlVAVfE+99hbFyGUkV1S0Ofsbo+hRDYgBN/Djq+BEUcwA5Nij6IdRxw2jjg4TbpzCmzxJqO4vOOobGMi6eH0SKHSJ2/0uM5atI6uhmJPt9PLWX+PzOu0yOjmDLKaHM58fjaybP7SXD6SYtM5vi0mJq/A30BsYZuTTHxNUPuXL7Lof9Z5BiLqN2fbYDbEHKeMzR9pu8fPKQuSuXsToq8NR14W08TUl1C+mFR/A0nqfy+BTWbA9xiXaSbDby3R46B0ao8PYgJbyNOl8AlcgOpNw17GUz3HjzHIG+PmJSXJQc8FNQWUda/kEBKac5+Jjx63/SfeEn9vc8wlE9S0JWHSGmZHT7UpFsC8jOR0hyZAOS63sxm9PExewTb07DbHPiLD1CurMKm8ON2V5M6/h3jF7b5tTrr2g7/yuN07/hP/sHrtp30IQkIaXOo7juCaBJRC5Yx5DUjV6RCAmLINqaTXpexa7MtlziUsvwDixRH1imdmSdlukfOXHuhQBvk1YxhlqfIIC3BPDBjsM2pMJnKPGd6HaAIREYQizYM4uxZhYRZbGLaD4qXluitO2+qI9xdzzk8OAzaoKvSHDUCocpArgggLuR/cLhKkpCK2pJIjbLhqPjGFZnMRFRdhRtNJHJ5Rztu0P1ma/w9K5SeXKF6sEXHBrYIsKSK2YogLb3/4vcKoB7DrUqSWzQgrOlirLxVjJ6j9PU3kygfxh3hZcTQ9P0X1ygKbiIb3iDsvYHhEYlogtN3l3Kvw73ZqixdO1GDtXp0alk9AY9169N8/zLBfrfGsbR20hBXT0NHZ30B/uYnb+Kr3MQbVicSJIuIn8ggPfFTTGJyIUr4ma0IovIsqymyJHBvTcm+P3uHINd7aTkuTjQc4zK2S7cs6co6G7C1+EnI8eFPjQGsyUHKfna/yK7NgjLDGCKMdHbcJTtL27y97NF/nr6MRd76gnRGQhXNIRqZayFKZQEanAHW8g7WU9SVgqRpjQR+TbK7ndorEFKW8Ts28TR8C2Huteo6XlCTfcSVc3fEOaYR5N1HX3uLfTZorfNo7W9h8n9Ean9q0Qd/EQsdEwAb6Bk3xZAQxFyuFi9WfwELJNI0VNCY3uKnUZOnEZJmhG6IDSFYhU1eQY5fgJV5CSq2FHk6C5kYyNyXC//ACNIGxwAtvd/AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/68afead962e826100603f38c3e73adfd/a58f3/WaymoThumbnail.png","srcSet":"/static/68afead962e826100603f38c3e73adfd/26c7d/WaymoThumbnail.png 117w,\\n/static/68afead962e826100603f38c3e73adfd/f1aa4/WaymoThumbnail.png 234w,\\n/static/68afead962e826100603f38c3e73adfd/a58f3/WaymoThumbnail.png 467w,\\n/static/68afead962e826100603f38c3e73adfd/3f5ae/WaymoThumbnail.png 934w","sizes":"(min-width: 467px) 467px, 100vw"},"sources":[{"srcSet":"/static/68afead962e826100603f38c3e73adfd/06fe1/WaymoThumbnail.webp 117w,\\n/static/68afead962e826100603f38c3e73adfd/2d022/WaymoThumbnail.webp 234w,\\n/static/68afead962e826100603f38c3e73adfd/54814/WaymoThumbnail.webp 467w,\\n/static/68afead962e826100603f38c3e73adfd/4246e/WaymoThumbnail.webp 934w","type":"image/webp","sizes":"(min-width: 467px) 467px, 100vw"}]},"width":467,"height":350}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map