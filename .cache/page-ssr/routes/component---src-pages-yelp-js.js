exports.id = "component---src-pages-yelp-js";
exports.ids = ["component---src-pages-yelp-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


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

/***/ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.applyTrailingSlashOption = void 0;
const endsWithSuffixes = (suffixes, input) => {
  for (const suffix of suffixes) {
    if (input.endsWith(suffix)) return true;
  }
  return false;
};
const suffixes = [`.html`, `.json`, `.js`, `.map`, `.txt`, `.xml`, `.pdf`];
const applyTrailingSlashOption = (input, option = `always`) => {
  if (input === `/`) return input;
  const hasTrailingSlash = input.endsWith(`/`);
  if (endsWithSuffixes(suffixes, input)) {
    return input;
  }
  if (option === `always`) {
    return hasTrailingSlash ? input : `${input}/`;
  }
  if (option === `never`) {
    return hasTrailingSlash ? input.slice(0, -1) : input;
  }
  return input;
};
exports.applyTrailingSlashOption = applyTrailingSlashOption;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContext = void 0;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
exports.ScrollContext = _scrollHandler.ScrollHandler;
var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");
exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;
var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));
var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));
var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";
var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);
  function ScrollHandler() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();
    _this._isTicking = false;
    _this._latestKnownScrollY = 0;
    _this.scrollListener = function () {
      _this._latestKnownScrollY = window.scrollY;
      if (!_this._isTicking) {
        _this._isTicking = true;
        requestAnimationFrame(_this._saveScroll.bind((0, _assertThisInitialized2.default)(_this)));
      }
    };
    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };
    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));
      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };
    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;
      if (!shouldUpdateScroll) {
        return true;
      }

      // Hack to allow accessing this._stateStorage.
      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };
    return _this;
  }
  var _proto = ScrollHandler.prototype;
  _proto._saveScroll = function _saveScroll() {
    var key = this.props.location.key || null;
    if (key) {
      this._stateStorage.save(this.props.location, key, this._latestKnownScrollY);
    }
    this._isTicking = false;
  };
  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
      key = _this$props$location.key,
      hash = _this$props$location.hash;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /** If a hash is present in the browser url as the component mounts (i.e. the user is navigating
     * from an external website) then scroll to the hash instead of any previously stored scroll
     * position. */
    if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    } else if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
      hash = _this$props$location2.hash,
      key = _this$props$location2.key;
    var scrollPosition;
    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    /**  There are two pieces of state: the browser url and
     * history state which keeps track of scroll position
     * Native behaviour prescribes that we ought to restore scroll position
     * when a user navigates back in their browser (this is the `POP` action)
     * Currently, reach router has a bug that prevents this at https://github.com/reach/router/issues/228
     * So we _always_ stick to the url as a source of truth — if the url
     * contains a hash, we scroll to it
     */

    if (hash) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };
  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };
  return ScrollHandler;
}(React.Component);
exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";
var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}
  var _proto = SessionStorage.prototype;
  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);
    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to access sessionStorage; sessionStorage is not available.");
      }
      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }
      return 0;
    }
  };
  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);
    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }
      if (true) {
        console.warn("[gatsby-react-router-scroll] Unable to save state in sessionStorage; sessionStorage is not available.");
      }
    }
  };
  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };
  return SessionStorage;
}();
exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;
var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");
var _react = __webpack_require__(/*! react */ "react");
var _reachRouter = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
function useScrollRestoration(identifier) {
  var location = (0, _reachRouter.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)(null);
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, [location.key]);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./.cache/context-utils.js":
/*!*********************************!*\
  !*** ./.cache/context-utils.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createServerOrClientContext: () => (/* binding */ createServerOrClientContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


// Ensure serverContext is not created more than once as React will throw when creating it more than once
// https://github.com/facebook/react/blob/dd2d6522754f52c70d02c51db25eb7cbd5d1c8eb/packages/react/src/ReactServerContext.js#L101
const createServerContext = (name, defaultValue = null) => {
  /* eslint-disable no-undef */
  if (!globalThis.__SERVER_CONTEXT) {
    globalThis.__SERVER_CONTEXT = {};
  }
  if (!globalThis.__SERVER_CONTEXT[name]) {
    globalThis.__SERVER_CONTEXT[name] = react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext(name, defaultValue);
  }
  return globalThis.__SERVER_CONTEXT[name];
};
function createServerOrClientContext(name, defaultValue) {
  if ((react__WEBPACK_IMPORTED_MODULE_0___default().createServerContext)) {
    return createServerContext(name, defaultValue);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultValue);
}


/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

const emitter = (0,mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cleanPath: () => (/* binding */ cleanPath),
/* harmony export */   findMatchPath: () => (/* binding */ findMatchPath),
/* harmony export */   findPath: () => (/* binding */ findPath),
/* harmony export */   grabMatchParams: () => (/* binding */ grabMatchParams),
/* harmony export */   setMatchPaths: () => (/* binding */ setMatchPaths)
/* harmony export */ });
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
/* harmony import */ var _redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redirect-utils.js */ "./.cache/redirect-utils.js");




const pathCache = new Map();
let matchPaths = [];
const trimPathname = rawPathname => {
  let newRawPathname = rawPathname;
  const queryIndex = rawPathname.indexOf(`?`);
  if (queryIndex !== -1) {
    const [path, qs] = rawPathname.split(`?`);
    newRawPathname = `${path}?${encodeURIComponent(qs)}`;
  }
  const pathname = decodeURIComponent(newRawPathname);

  // Remove the pathPrefix from the pathname.
  const trimmedPathname = (0,_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname, decodeURIComponent(""))
  // Remove any hashfragment
  .split(`#`)[0];
  return trimmedPathname;
};
function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith(`/`) || path.startsWith(`https://`) || path.startsWith(`http://`)) {
    return path;
  }
  // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router
  return new URL(path, window.location.href + (window.location.href.endsWith(`/`) ? `` : `/`)).pathname;
}

/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */
const setMatchPaths = value => {
  matchPaths = value;
};

/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */
const findMatchPath = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);
  }
  return null;
};

/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */
const grabMatchParams = rawPathname => {
  const trimmedPathname = cleanPath(rawPathname);
  const pickPaths = matchPaths.map(({
    path,
    matchPath
  }) => {
    return {
      path: matchPath,
      originalPath: path
    };
  });
  const path = (0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_0__.pick)(pickPaths, trimmedPathname);
  if (path) {
    return path.params;
  }
  return {};
};

// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
const findPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }
  const redirect = (0,_redirect_utils_js__WEBPACK_IMPORTED_MODULE_3__.maybeGetBrowserRedirect)(rawPathname);
  if (redirect) {
    return findPath(redirect.toPath);
  }
  let foundPath = findMatchPath(trimmedPathname);
  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }
  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};

/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */
const cleanPath = rawPathname => {
  const trimmedPathname = trimPathname(absolutify(rawPathname));
  let foundPath = trimmedPathname;
  if (foundPath === `/index.html`) {
    foundPath = `/`;
  }
  foundPath = (0,_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.Link),
/* harmony export */   PageRenderer: () => (/* reexport default from dynamic */ _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default.a),
/* harmony export */   Script: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.Script),
/* harmony export */   ScriptStrategy: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.ScriptStrategy),
/* harmony export */   Slice: () => (/* reexport safe */ _slice__WEBPACK_IMPORTED_MODULE_5__.Slice),
/* harmony export */   StaticQuery: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQuery),
/* harmony export */   StaticQueryContext: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.StaticQueryContext),
/* harmony export */   collectedScriptsByPage: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.collectedScriptsByPage),
/* harmony export */   graphql: () => (/* binding */ graphql),
/* harmony export */   navigate: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.navigate),
/* harmony export */   parsePath: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.parsePath),
/* harmony export */   prefetchPathname: () => (/* binding */ prefetchPathname),
/* harmony export */   scriptCache: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCache),
/* harmony export */   scriptCallbackCache: () => (/* reexport safe */ gatsby_script__WEBPACK_IMPORTED_MODULE_6__.scriptCallbackCache),
/* harmony export */   useScrollRestoration: () => (/* reexport safe */ gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__.useScrollRestoration),
/* harmony export */   useStaticQuery: () => (/* reexport safe */ _static_query__WEBPACK_IMPORTED_MODULE_4__.useStaticQuery),
/* harmony export */   withAssetPrefix: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withAssetPrefix),
/* harmony export */   withPrefix: () => (/* reexport safe */ gatsby_link__WEBPACK_IMPORTED_MODULE_3__.withPrefix)
/* harmony export */ });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/dist/index.modern.mjs");
/* harmony import */ var _static_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./static-query */ "./.cache/static-query.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slice */ "./.cache/slice.js");
/* harmony import */ var gatsby_script__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gatsby-script */ "./node_modules/gatsby-script/dist/index.modern.mjs");

const prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_0__["default"].enqueue;
function graphql() {
  throw new Error(`It appears like Gatsby is misconfigured. Gatsby related \`graphql\` calls ` + `are supposed to only be evaluated at compile time, and then compiled away. ` + `Unfortunately, something went wrong and the query was left in the compiled code.\n\n` + `Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.`);
}








/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseLoader: () => (/* binding */ BaseLoader),
/* harmony export */   PageResourceStatus: () => (/* binding */ PageResourceStatus),
/* harmony export */   ProdLoader: () => (/* binding */ ProdLoader),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getSliceResults: () => (/* binding */ getSliceResults),
/* harmony export */   getStaticQueryResults: () => (/* binding */ getStaticQueryResults),
/* harmony export */   publicLoader: () => (/* binding */ publicLoader),
/* harmony export */   setLoader: () => (/* binding */ setLoader)
/* harmony export */ });
/* harmony import */ var react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-server-dom-webpack */ "./node_modules/gatsby/node_modules/react-server-dom-webpack/index.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");





/**
 * Available resource loading statuses
 */
const PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: `error`,
  /**
   * Resources loaded successfully
   */
  Success: `success`
};
const preferDefault = m => m && m.default || m;
const stripSurroundingSlashes = s => {
  s = s[0] === `/` ? s.slice(1) : s;
  s = s.endsWith(`/`) ? s.slice(0, -1) : s;
  return s;
};
const createPageDataUrl = rawPath => {
  const [path, maybeSearch] = rawPath.split(`?`);
  const fixedPath = path === `/` ? `index` : stripSurroundingSlashes(path);
  return `${""}/page-data/${fixedPath}/page-data.json${maybeSearch ? `?${maybeSearch}` : ``}`;
};

/**
 * Utility to check the path that goes into doFetch for e.g. potential malicious intentions.
 * It checks for "//" because with this you could do a fetch request to a different domain.
 */
const shouldAbortFetch = rawPath => rawPath.startsWith(`//`);
function doFetch(url, method = `GET`) {
  return new Promise(resolve => {
    const req = new XMLHttpRequest();
    req.open(method, url, true);
    req.onreadystatechange = () => {
      if (req.readyState == 4) {
        resolve(req);
      }
    };
    req.send(null);
  });
}
const doesConnectionSupportPrefetch = () => {
  if (`connection` in navigator && typeof navigator.connection !== `undefined`) {
    if ((navigator.connection.effectiveType || ``).includes(`2g`)) {
      return false;
    }
    if (navigator.connection.saveData) {
      return false;
    }
  }
  return true;
};

// Regex that matches common search crawlers
const BOT_REGEX = /bot|crawler|spider|crawling/i;
const toPageResources = (pageData, component = null, head) => {
  var _pageData$slicesMap;
  const page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath,
    staticQueryHashes: pageData.staticQueryHashes,
    getServerDataError: pageData.getServerDataError,
    slicesMap: (_pageData$slicesMap = pageData.slicesMap) !== null && _pageData$slicesMap !== void 0 ? _pageData$slicesMap : {}
  };
  return {
    component,
    head,
    json: pageData.result,
    page
  };
};
function waitForResponse(response) {
  return new Promise(resolve => {
    try {
      const result = response.readRoot();
      resolve(result);
    } catch (err) {
      if (Object.hasOwnProperty.call(err, `_response`) && Object.hasOwnProperty.call(err, `_status`)) {
        setTimeout(() => {
          waitForResponse(response).then(resolve);
        }, 200);
      } else {
        throw err;
      }
    }
  });
}
class BaseLoader {
  constructor(loadComponent, matchPaths) {
    this.inFlightNetworkRequests = new Map();
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //     staticQueryHashes
    //   },
    //   staticQueryResults
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.staticQueryDb = {};
    this.pageDataDb = new Map();
    this.partialHydrationDb = new Map();
    this.slicesDataDb = new Map();
    this.sliceInflightDb = new Map();
    this.slicesDb = new Map();
    this.isPrefetchQueueRunning = false;
    this.prefetchQueued = [];
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.setMatchPaths)(matchPaths);
  }
  memoizedGet(url) {
    let inFlightPromise = this.inFlightNetworkRequests.get(url);
    if (!inFlightPromise) {
      inFlightPromise = doFetch(url, `GET`);
      this.inFlightNetworkRequests.set(url, inFlightPromise);
    }

    // Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    return inFlightPromise.then(response => {
      this.inFlightNetworkRequests.delete(url);
      return response;
    }).catch(err => {
      this.inFlightNetworkRequests.delete(url);
      throw err;
    });
  }
  setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner(`disableCorePrefetching`).some(a => a);
  }
  fetchPageDataJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.path === undefined) {
            throw new Error(`not a valid pageData response`);
          }
          const maybeSearch = pagePath.split(`?`)[1];
          if (maybeSearch && !jsonPayload.path.includes(maybeSearch)) {
            jsonPayload.path += `?${maybeSearch}`;
          }
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: jsonPayload
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPageDataJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  fetchPartialHydrationJson(loadObj) {
    const {
      pagePath,
      retries = 0
    } = loadObj;
    const url = createPageDataUrl(pagePath).replace(`.json`, `-rsc.json`);
    return this.memoizedGet(url).then(req => {
      const {
        status,
        responseText
      } = req;

      // Handle 200
      if (status === 200) {
        try {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Success,
            payload: responseText
          });
        } catch (err) {
          // continue regardless of error
        }
      }

      // Handle 404
      if (status === 404 || status === 200) {
        // If the request was for a 404/500 page and it doesn't exist, we're done
        if (pagePath === `/404.html` || pagePath === `/500.html`) {
          return Object.assign(loadObj, {
            status: PageResourceStatus.Error
          });
        }

        // Need some code here to cache the 404 request. In case
        // multiple loadPageDataJsons result in 404s
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/404.html`,
          notFound: true
        }));
      }

      // handle 500 response (Unrecoverable)
      if (status === 500) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          pagePath: `/500.html`,
          internalServerError: true
        }));
      }

      // Handle everything else, including status === 0, and 503s. Should retry
      if (retries < 3) {
        return this.fetchPartialHydrationJson(Object.assign(loadObj, {
          retries: retries + 1
        }));
      }

      // Retried 3 times already, result is an error.
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    });
  }
  loadPageDataJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDataDb.has(pagePath)) {
      const pageData = this.pageDataDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPageDataJson({
      pagePath
    }).then(pageData => {
      this.pageDataDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadPartialHydrationJson(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.partialHydrationDb.has(pagePath)) {
      const pageData = this.partialHydrationDb.get(pagePath);
      if (true) {
        return Promise.resolve(pageData);
      }
    }
    return this.fetchPartialHydrationJson({
      pagePath
    }).then(pageData => {
      this.partialHydrationDb.set(pagePath, pageData);
      return pageData;
    });
  }
  loadSliceDataJson(sliceName) {
    if (this.slicesDataDb.has(sliceName)) {
      const jsonPayload = this.slicesDataDb.get(sliceName);
      return Promise.resolve({
        sliceName,
        jsonPayload
      });
    }
    const url = `${""}/slice-data/${sliceName}.json`;
    return doFetch(url, `GET`).then(res => {
      const jsonPayload = JSON.parse(res.responseText);
      this.slicesDataDb.set(sliceName, jsonPayload);
      return {
        sliceName,
        jsonPayload
      };
    });
  }
  findMatchPath(rawPath) {
    return (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findMatchPath)(rawPath);
  }

  // TODO check all uses of this and whether they use undefined for page resources not exist
  loadPage(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const page = this.pageDb.get(pagePath);
      if (true) {
        if (page.error) {
          return Promise.resolve({
            error: page.error,
            status: page.status
          });
        }
        return Promise.resolve(page.payload);
      }
    }
    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }
    const loadDataPromises = [this.loadAppData(), this.loadPageDataJson(pagePath)];
    if (false) {}
    const inFlightPromise = Promise.all(loadDataPromises).then(allData => {
      const [appDataResponse, pageDataResponse, rscDataResponse] = allData;
      if (pageDataResponse.status === PageResourceStatus.Error || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.status) === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }
      let pageData = pageDataResponse.payload;
      const {
        componentChunkName,
        staticQueryHashes: pageStaticQueryHashes = [],
        slicesMap = {}
      } = pageData;
      const finalResult = {};
      const dedupedSliceNames = Array.from(new Set(Object.values(slicesMap)));
      const loadSlice = slice => {
        if (this.slicesDb.has(slice.name)) {
          return this.slicesDb.get(slice.name);
        } else if (this.sliceInflightDb.has(slice.name)) {
          return this.sliceInflightDb.get(slice.name);
        }
        const inFlight = this.loadComponent(slice.componentChunkName).then(component => {
          return {
            component: preferDefault(component),
            sliceContext: slice.result.sliceContext,
            data: slice.result.data
          };
        });
        this.sliceInflightDb.set(slice.name, inFlight);
        inFlight.then(results => {
          this.slicesDb.set(slice.name, results);
          this.sliceInflightDb.delete(slice.name);
        });
        return inFlight;
      };
      return Promise.all(dedupedSliceNames.map(sliceName => this.loadSliceDataJson(sliceName))).then(slicesData => {
        const slices = [];
        const dedupedStaticQueryHashes = [...pageStaticQueryHashes];
        for (const {
          jsonPayload,
          sliceName
        } of Object.values(slicesData)) {
          slices.push({
            name: sliceName,
            ...jsonPayload
          });
          for (const staticQueryHash of jsonPayload.staticQueryHashes) {
            if (!dedupedStaticQueryHashes.includes(staticQueryHash)) {
              dedupedStaticQueryHashes.push(staticQueryHash);
            }
          }
        }
        const loadChunkPromises = [Promise.all(slices.map(loadSlice)), this.loadComponent(componentChunkName, `head`)];
        if (true) {
          loadChunkPromises.push(this.loadComponent(componentChunkName));
        }

        // In develop we have separate chunks for template and Head components
        // to enable HMR (fast refresh requires single exports).
        // In production we have shared chunk with both exports. Double loadComponent here
        // will be deduped by webpack runtime resulting in single request and single module
        // being loaded for both `component` and `head`.
        // get list of components to get
        const componentChunkPromises = Promise.all(loadChunkPromises).then(components => {
          const [sliceComponents, headComponent, pageComponent] = components;
          finalResult.createdAt = new Date();
          for (const sliceComponent of sliceComponents) {
            if (!sliceComponent || sliceComponent instanceof Error) {
              finalResult.status = PageResourceStatus.Error;
              finalResult.error = sliceComponent;
            }
          }
          if ( true && (!pageComponent || pageComponent instanceof Error)) {
            finalResult.status = PageResourceStatus.Error;
            finalResult.error = pageComponent;
          }
          let pageResources;
          if (finalResult.status !== PageResourceStatus.Error) {
            finalResult.status = PageResourceStatus.Success;
            if (pageDataResponse.notFound === true || (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.notFound) === true) {
              finalResult.notFound = true;
            }
            pageData = Object.assign(pageData, {
              webpackCompilationHash: appDataResponse ? appDataResponse.webpackCompilationHash : ``
            });
            if (typeof (rscDataResponse === null || rscDataResponse === void 0 ? void 0 : rscDataResponse.payload) === `string`) {
              pageResources = toPageResources(pageData, null, headComponent);
              pageResources.partialHydration = rscDataResponse.payload;
              const readableStream = new ReadableStream({
                start(controller) {
                  const te = new TextEncoder();
                  controller.enqueue(te.encode(rscDataResponse.payload));
                },
                pull(controller) {
                  // close on next read when queue is empty
                  controller.close();
                },
                cancel() {}
              });
              return waitForResponse((0,react_server_dom_webpack__WEBPACK_IMPORTED_MODULE_0__.createFromReadableStream)(readableStream)).then(result => {
                pageResources.partialHydration = result;
                return pageResources;
              });
            } else {
              pageResources = toPageResources(pageData, pageComponent, headComponent);
            }
          }

          // undefined if final result is an error
          return pageResources;
        });

        // get list of static queries to get
        const staticQueryBatchPromise = Promise.all(dedupedStaticQueryHashes.map(staticQueryHash => {
          // Check for cache in case this static query result has already been loaded
          if (this.staticQueryDb[staticQueryHash]) {
            const jsonPayload = this.staticQueryDb[staticQueryHash];
            return {
              staticQueryHash,
              jsonPayload
            };
          }
          return this.memoizedGet(`${""}/page-data/sq/d/${staticQueryHash}.json`).then(req => {
            const jsonPayload = JSON.parse(req.responseText);
            return {
              staticQueryHash,
              jsonPayload
            };
          }).catch(() => {
            throw new Error(`We couldn't load "${""}/page-data/sq/d/${staticQueryHash}.json"`);
          });
        })).then(staticQueryResults => {
          const staticQueryResultsMap = {};
          staticQueryResults.forEach(({
            staticQueryHash,
            jsonPayload
          }) => {
            staticQueryResultsMap[staticQueryHash] = jsonPayload;
            this.staticQueryDb[staticQueryHash] = jsonPayload;
          });
          return staticQueryResultsMap;
        });
        return Promise.all([componentChunkPromises, staticQueryBatchPromise]).then(([pageResources, staticQueryResults]) => {
          let payload;
          if (pageResources) {
            payload = {
              ...pageResources,
              staticQueryResults
            };
            finalResult.payload = payload;
            _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`onPostLoadPageResources`, {
              page: payload,
              pageResources: payload
            });
          }
          this.pageDb.set(pagePath, finalResult);
          if (finalResult.error) {
            return {
              error: finalResult.error,
              status: finalResult.status
            };
          }
          return payload;
        })
        // when static-query fail to load we throw a better error
        .catch(err => {
          return {
            error: err,
            status: PageResourceStatus.Error
          };
        });
      });
    });
    inFlightPromise.then(() => {
      this.inFlightDb.delete(pagePath);
    }).catch(error => {
      this.inFlightDb.delete(pagePath);
      throw error;
    });
    this.inFlightDb.set(pagePath, inFlightPromise);
    return inFlightPromise;
  }

  // returns undefined if the page does not exists in cache
  loadPageSync(rawPath, options = {}) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    if (this.pageDb.has(pagePath)) {
      const pageData = this.pageDb.get(pagePath);
      if (pageData.payload) {
        return pageData.payload;
      }
      if (options !== null && options !== void 0 && options.withErrorDetails) {
        return {
          error: pageData.error,
          status: pageData.status
        };
      }
    }
    return undefined;
  }
  shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    }

    // Don't prefetch if this is a crawler bot
    if (navigator.userAgent && BOT_REGEX.test(navigator.userAgent)) {
      return false;
    }

    // Check if the page exists.
    if (this.pageDb.has(pagePath)) {
      return false;
    }
    return true;
  }
  prefetch(pagePath) {
    if (!this.shouldPrefetch(pagePath)) {
      return {
        then: resolve => resolve(false),
        abort: () => {}
      };
    }
    if (this.prefetchTriggered.has(pagePath)) {
      return {
        then: resolve => resolve(true),
        abort: () => {}
      };
    }
    const defer = {
      resolve: null,
      reject: null,
      promise: null
    };
    defer.promise = new Promise((resolve, reject) => {
      defer.resolve = resolve;
      defer.reject = reject;
    });
    this.prefetchQueued.push([pagePath, defer]);
    const abortC = new AbortController();
    abortC.signal.addEventListener(`abort`, () => {
      const index = this.prefetchQueued.findIndex(([p]) => p === pagePath);
      // remove from the queue
      if (index !== -1) {
        this.prefetchQueued.splice(index, 1);
      }
    });
    if (!this.isPrefetchQueueRunning) {
      this.isPrefetchQueueRunning = true;
      setTimeout(() => {
        this._processNextPrefetchBatch();
      }, 3000);
    }
    return {
      then: (resolve, reject) => defer.promise.then(resolve, reject),
      abort: abortC.abort.bind(abortC)
    };
  }
  _processNextPrefetchBatch() {
    const idleCallback = window.requestIdleCallback || (cb => setTimeout(cb, 0));
    idleCallback(() => {
      const toPrefetch = this.prefetchQueued.splice(0, 4);
      const prefetches = Promise.all(toPrefetch.map(([pagePath, dPromise]) => {
        // Tell plugins with custom prefetching logic that they should start
        // prefetching this path.
        if (!this.prefetchTriggered.has(pagePath)) {
          this.apiRunner(`onPrefetchPathname`, {
            pathname: pagePath
          });
          this.prefetchTriggered.add(pagePath);
        }

        // If a plugin has disabled core prefetching, stop now.
        if (this.prefetchDisabled) {
          return dPromise.resolve(false);
        }
        return this.doPrefetch((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pagePath)).then(() => {
          if (!this.prefetchCompleted.has(pagePath)) {
            this.apiRunner(`onPostPrefetchPathname`, {
              pathname: pagePath
            });
            this.prefetchCompleted.add(pagePath);
          }
          dPromise.resolve(true);
        });
      }));
      if (this.prefetchQueued.length) {
        prefetches.then(() => {
          setTimeout(() => {
            this._processNextPrefetchBatch();
          }, 3000);
        });
      } else {
        this.isPrefetchQueueRunning = false;
      }
    });
  }
  doPrefetch(pagePath) {
    const pageDataUrl = createPageDataUrl(pagePath);
    if (false) {} else {
      return (0,_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])(pageDataUrl, {
        crossOrigin: `anonymous`,
        as: `fetch`
      }).then(() =>
      // This was just prefetched, so will return a response from
      // the cache instead of making another request to the server
      this.loadPageDataJson(pagePath));
    }
  }
  hovering(rawPath) {
    this.loadPage(rawPath);
  }
  getResourceURLsForPathname(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDataDb.get(pagePath);
    if (page) {
      const pageResources = toPageResources(page.payload);
      return [...createComponentUrls(pageResources.page.componentChunkName), createPageDataUrl(pagePath)];
    } else {
      return null;
    }
  }
  isPageNotFound(rawPath) {
    const pagePath = (0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(rawPath);
    const page = this.pageDb.get(pagePath);
    return !page || page.notFound;
  }
  loadAppData(retries = 0) {
    return this.memoizedGet(`${""}/page-data/app-data.json`).then(req => {
      const {
        status,
        responseText
      } = req;
      let appData;
      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return this.loadAppData(retries + 1);
      }

      // Handle 200
      if (status === 200) {
        try {
          const jsonPayload = JSON.parse(responseText);
          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error(`not a valid app-data response`);
          }
          appData = jsonPayload;
        } catch (err) {
          // continue regardless of error
        }
      }
      return appData;
    });
  }
}
const createComponentUrls = componentChunkName => (window.___chunkMapping[componentChunkName] || []).map(chunk => "" + chunk);
class ProdLoader extends BaseLoader {
  constructor(asyncRequires, matchPaths, pageData) {
    const loadComponent = (chunkName, exportType = `components`) => {
      if (true) {
        exportType = `components`;
      }
      if (!asyncRequires[exportType][chunkName]) {
        throw new Error(`We couldn't find the correct component chunk with the name "${chunkName}"`);
      }
      return asyncRequires[exportType][chunkName]()
      // loader will handle the case when component is error
      .catch(err => err);
    };
    super(loadComponent, matchPaths);
    if (pageData) {
      this.pageDataDb.set((0,_find_path__WEBPACK_IMPORTED_MODULE_3__.findPath)(pageData.path), {
        pagePath: pageData.path,
        payload: pageData,
        status: `success`
      });
    }
  }
  doPrefetch(pagePath) {
    return super.doPrefetch(pagePath).then(result => {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }
      const pageData = result.payload;
      const chunkName = pageData.componentChunkName;
      const componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_1__["default"])).then(() => pageData);
    });
  }
  loadPageDataJson(rawPath) {
    return super.loadPageDataJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
  loadPartialHydrationJson(rawPath) {
    return super.loadPartialHydrationJson(rawPath).then(data => {
      if (data.notFound) {
        if (shouldAbortFetch(rawPath)) {
          return data;
        }
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, `HEAD`).then(req => {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          }

          // if HEAD request wasn't 200, return notFound result
          // and show 404 page
          return data;
        });
      }
      return data;
    });
  }
}
let instance;
const setLoader = _loader => {
  instance = _loader;
};
const publicLoader = {
  enqueue: rawPath => instance.prefetch(rawPath),
  // Real methods
  getResourceURLsForPathname: rawPath => instance.getResourceURLsForPathname(rawPath),
  loadPage: rawPath => instance.loadPage(rawPath),
  // TODO add deprecation to v4 so people use withErrorDetails and then we can remove in v5 and change default behaviour
  loadPageSync: (rawPath, options = {}) => instance.loadPageSync(rawPath, options),
  prefetch: rawPath => instance.prefetch(rawPath),
  isPageNotFound: rawPath => instance.isPageNotFound(rawPath),
  hovering: rawPath => instance.hovering(rawPath),
  loadAppData: () => instance.loadAppData()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (publicLoader);
function getStaticQueryResults() {
  if (instance) {
    return instance.staticQueryDb;
  } else {
    return {};
  }
}
function getSliceResults() {
  if (instance) {
    return instance.slicesDb;
  } else {
    return {};
  }
}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pathAndSearch => {
  if (pathAndSearch === undefined) {
    return pathAndSearch;
  }
  let [path, search = ``] = pathAndSearch.split(`?`);
  if (search) {
    search = `?` + search;
  }
  if (path === `/`) {
    return `/` + search;
  }
  if (path.charAt(path.length - 1) === `/`) {
    return path.slice(0, -1) + search;
  }
  return path + search;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const support = function (feature) {
  if (typeof document === `undefined`) {
    return false;
  }
  const fakeLink = document.createElement(`link`);
  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === `function`) {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }
  return false;
};
const linkPrefetchStrategy = function (url, options) {
  return new Promise((resolve, reject) => {
    if (typeof document === `undefined`) {
      reject();
      return;
    }
    const link = document.createElement(`link`);
    link.setAttribute(`rel`, `prefetch`);
    link.setAttribute(`href`, url);
    Object.keys(options).forEach(key => {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    const parentElement = document.getElementsByTagName(`head`)[0] || document.getElementsByName(`script`)[0].parentNode;
    parentElement.appendChild(link);
  });
};
const xhrPrefetchStrategy = function (url) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(`GET`, url, true);
    req.onload = () => {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };
    req.send(null);
  });
};
const supportedPrefetchStrategy = support(`prefetch`) ? linkPrefetchStrategy : xhrPrefetchStrategy;
const preFetched = {};
const prefetch = function (url, options) {
  return new Promise(resolve => {
    if (preFetched[url]) {
      resolve();
      return;
    }
    supportedPrefetchStrategy(url, options).then(() => {
      resolve();
      preFetched[url] = true;
    }).catch(() => {}); // 404s are logged to the console anyway
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/***/ ((module) => {

const preferDefault = m => m && m.default || m;
if (false) {} else if (false) {} else {
  module.exports = () => null;
}

/***/ }),

/***/ "./.cache/redirect-utils.js":
/*!**********************************!*\
  !*** ./.cache/redirect-utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   maybeGetBrowserRedirect: () => (/* binding */ maybeGetBrowserRedirect)
/* harmony export */ });
/* harmony import */ var _redirects_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirects.json */ "./.cache/redirects.json");


// Convert to a map for faster lookup in maybeRedirect()

const redirectMap = new Map();
const redirectIgnoreCaseMap = new Map();
_redirects_json__WEBPACK_IMPORTED_MODULE_0__.forEach(redirect => {
  if (redirect.ignoreCase) {
    redirectIgnoreCaseMap.set(redirect.fromPath, redirect);
  } else {
    redirectMap.set(redirect.fromPath, redirect);
  }
});
function maybeGetBrowserRedirect(pathname) {
  let redirect = redirectMap.get(pathname);
  if (!redirect) {
    redirect = redirectIgnoreCaseMap.get(pathname.toLowerCase());
  }
  return redirect;
}

/***/ }),

/***/ "./.cache/slice.js":
/*!*************************!*\
  !*** ./.cache/slice.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slice: () => (/* binding */ Slice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slice_server_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice/server-slice */ "./.cache/slice/server-slice.js");
/* harmony import */ var _slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slice/inline-slice */ "./.cache/slice/inline-slice.js");
/* harmony import */ var _slice_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slice/context */ "./.cache/slice/context.js");
"use client";





function Slice(props) {
  if (true) {
    // we use sliceName internally, so remap alias to sliceName
    const internalProps = {
      ...props,
      sliceName: props.alias
    };
    delete internalProps.alias;
    delete internalProps.__renderedByLocation;
    const slicesContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_slice_context__WEBPACK_IMPORTED_MODULE_3__.SlicesContext);

    // validate props
    const propErrors = validateSliceProps(props);
    if (Object.keys(propErrors).length) {
      throw new SlicePropsError(slicesContext.renderEnvironment === `browser`, internalProps.sliceName, propErrors, props.__renderedByLocation);
    }
    if (slicesContext.renderEnvironment === `server`) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_server_slice__WEBPACK_IMPORTED_MODULE_1__.ServerSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `browser`) {
      // in the browser, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `engines` || slicesContext.renderEnvironment === `dev-ssr`) {
      // if we're in SSR, we'll just render the component as is
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_slice_inline_slice__WEBPACK_IMPORTED_MODULE_2__.InlineSlice, internalProps);
    } else if (slicesContext.renderEnvironment === `slices`) {
      // we are not yet supporting nested slices

      let additionalContextMessage = ``;

      // just in case generating additional contextual information fails, we still want the base message to show
      // and not show another cryptic error message
      try {
        additionalContextMessage = `\n\nSlice component "${slicesContext.sliceRoot.name}" (${slicesContext.sliceRoot.componentPath}) tried to render <Slice alias="${props.alias}"/>`;
      } catch {
        // don't need to handle it, we will just skip the additional context message if we fail to generate it
      }
      throw new Error(`Nested slices are not supported.${additionalContextMessage}\n\nSee https://gatsbyjs.com/docs/reference/built-in-components/gatsby-slice#nested-slices`);
    } else {
      throw new Error(`Slice context "${slicesContext.renderEnvironment}" is not supported.`);
    }
  } else {}
}
class SlicePropsError extends Error {
  constructor(inBrowser, sliceName, propErrors, renderedByLocation) {
    const errors = Object.entries(propErrors).map(([key, value]) => `not serializable "${value}" type passed to "${key}" prop`).join(`, `);
    const name = `SlicePropsError`;
    let stack = ``;
    let message = ``;
    if (inBrowser) {
      // They're just (kinda) kidding, I promise... You can still work here <3
      //   https://www.gatsbyjs.com/careers/
      const fullStack = react__WEBPACK_IMPORTED_MODULE_0___default().__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactDebugCurrentFrame.getCurrentStack();

      // remove the first line of the stack trace
      const stackLines = fullStack.trim().split(`\n`).slice(1);
      stackLines[0] = stackLines[0].trim();
      stack = `\n` + stackLines.join(`\n`);
      message = `Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
    } else {
      // we can't really grab any extra info outside of the browser, so just print what we can
      message = `${name}: Slice "${sliceName}" was passed props that are not serializable (${errors}).`;
      const stackLines = new Error().stack.trim().split(`\n`).slice(2);
      stack = `${message}\n${stackLines.join(`\n`)}`;
    }
    super(message);
    this.name = name;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, SlicePropsError);
    }
    if (renderedByLocation) {
      this.forcedLocation = {
        ...renderedByLocation,
        functionName: `Slice`
      };
    }
  }
}
const validateSliceProps = (props, errors = {}, seenObjects = [], path = null) => {
  // recursively validate all props
  for (const [name, value] of Object.entries(props)) {
    if (value === undefined || value === null || !path && name === `children`) {
      continue;
    }
    const propPath = path ? `${path}.${name}` : name;
    if (typeof value === `function`) {
      errors[propPath] = typeof value;
    } else if (typeof value === `object` && seenObjects.indexOf(value) <= 0) {
      seenObjects.push(value);
      validateSliceProps(value, errors, seenObjects, propPath);
    }
  }
  return errors;
};

/***/ }),

/***/ "./.cache/slice/context.js":
/*!*********************************!*\
  !*** ./.cache/slice/context.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SlicesContext: () => (/* binding */ SlicesContext),
/* harmony export */   SlicesMapContext: () => (/* binding */ SlicesMapContext),
/* harmony export */   SlicesPropsContext: () => (/* binding */ SlicesPropsContext),
/* harmony export */   SlicesResultsContext: () => (/* binding */ SlicesResultsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SlicesResultsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesMapContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});
const SlicesPropsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({});


/***/ }),

/***/ "./.cache/slice/inline-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/inline-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InlineSlice: () => (/* binding */ InlineSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");


const InlineSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesMapContext);
  const slicesResultsMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.SlicesResultsContext);
  const concreteSliceName = slicesMap[sliceName];
  const slice = slicesResultsMap.get(concreteSliceName);
  if (!slice) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(slice.component, Object.assign({
    sliceContext: slice.sliceContext,
    data: slice.data
  }, sliceProps), children);
};

/***/ }),

/***/ "./.cache/slice/server-slice-renderer.js":
/*!***********************************************!*\
  !*** ./.cache/slice/server-slice-renderer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSliceRenderer: () => (/* binding */ ServerSliceRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const ServerSliceRenderer = ({
  sliceId,
  children
}) => {
  const contents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
    id: `${sliceId}-1`
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
    id: `${sliceId}-1`
  })];
  if (children) {
    // if children exist, we split the slice into a before and after piece
    // see renderSlices in render-html
    contents.push(children);
    contents.push(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-start`, {
      id: `${sliceId}-2`
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(`slice-end`, {
      id: `${sliceId}-2`
    }));
  }
  return contents;
};

/***/ }),

/***/ "./.cache/slice/server-slice.js":
/*!**************************************!*\
  !*** ./.cache/slice/server-slice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSlice: () => (/* binding */ ServerSlice)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-core-utils/create-content-digest */ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./.cache/slice/context.js");
/* harmony import */ var _server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-slice-renderer */ "./.cache/slice/server-slice-renderer.js");




const getSliceId = (sliceName, sliceProps) => {
  if (!Object.keys(sliceProps).length) {
    return sliceName;
  }
  const propsString = (0,gatsby_core_utils_create_content_digest__WEBPACK_IMPORTED_MODULE_1__.createContentDigest)(sliceProps);
  return `${sliceName}-${propsString}`;
};
const ServerSlice = ({
  sliceName,
  allowEmpty,
  children,
  ...sliceProps
}) => {
  const slicesMap = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesMapContext);
  const slicesProps = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.SlicesPropsContext);
  const concreteSliceName = slicesMap[sliceName];
  if (!concreteSliceName) {
    if (allowEmpty) {
      return null;
    } else {
      throw new Error(`Slice "${concreteSliceName}" for "${sliceName}" slot not found`);
    }
  }
  const sliceId = getSliceId(concreteSliceName, sliceProps);

  // set props on context object for static-entry to return
  let sliceUsage = slicesProps[sliceId];
  if (!sliceUsage) {
    slicesProps[sliceId] = sliceUsage = {
      props: sliceProps,
      sliceName: concreteSliceName,
      hasChildren: !!children
    };
  } else {
    if (children) {
      sliceUsage.hasChildren = true;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_server_slice_renderer__WEBPACK_IMPORTED_MODULE_3__.ServerSliceRenderer, {
    sliceId: sliceId
  }, children);
};

/***/ }),

/***/ "./.cache/static-query.js":
/*!********************************!*\
  !*** ./.cache/static-query.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticQuery: () => (/* binding */ StaticQuery),
/* harmony export */   StaticQueryContext: () => (/* binding */ StaticQueryContext),
/* harmony export */   useStaticQuery: () => (/* binding */ useStaticQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context-utils */ "./.cache/context-utils.js");



const StaticQueryContext = (0,_context_utils__WEBPACK_IMPORTED_MODULE_1__.createServerOrClientContext)(`StaticQuery`, {});
function StaticQueryDataRenderer({
  staticQueryData,
  data,
  query,
  render
}) {
  const finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Loading (StaticQuery)"));
}
let warnedAboutStaticQuery = false;

// TODO(v6): Remove completely
const StaticQuery = props => {
  const {
    data,
    query,
    render,
    children
  } = props;
  if ( true && !warnedAboutStaticQuery) {
    console.warn(`The <StaticQuery /> component is deprecated and will be removed in Gatsby v6. Use useStaticQuery instead. Refer to the migration guide for more information: https://gatsby.dev/migrating-4-to-5/#staticquery--is-deprecated`);
    warnedAboutStaticQuery = true;
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryContext.Consumer, null, staticQueryData => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StaticQueryDataRenderer, {
    data: data,
    query: query,
    render: render || children,
    staticQueryData: staticQueryData
  }));
};
StaticQuery.propTypes = {
  data: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  query: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
  render: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)
};
const useStaticQuery = query => {
  var _context$query;
  if (typeof (react__WEBPACK_IMPORTED_MODULE_0___default().useContext) !== `function` && "development" === `development`) {
    // TODO(v5): Remove since we require React >= 18
    throw new Error(`You're likely using a version of React that doesn't support Hooks\n` + `Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.`);
  }
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(StaticQueryContext);

  // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction
  if (isNaN(Number(query))) {
    throw new Error(`useStaticQuery was called with a string but expects to be called using \`graphql\`. Try this:

import { useStaticQuery, graphql } from 'gatsby';

useStaticQuery(graphql\`${query}\`);
`);
  }
  if ((_context$query = context[query]) !== null && _context$query !== void 0 && _context$query.data) {
    return context[query].data;
  } else {
    throw new Error(`The result of this StaticQuery could not be fetched.\n\n` + `This is likely a bug in Gatsby and if refreshing the page does not fix it, ` + `please open an issue in https://github.com/gatsbyjs/gatsby/issues`);
  }
};


/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stripPrefix)
/* harmony export */ });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */

function stripPrefix(str, prefix = ``) {
  if (!prefix) {
    return str;
  }
  if (str === prefix) {
    return `/`;
  }
  if (str.startsWith(`${prefix}/`)) {
    return str.slice(prefix.length);
  }
  return str;
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/Components/Footer.js":
/*!**********************************!*\
  !*** ./src/Components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LopsterGallary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LopsterGallary */ "./src/Components/LopsterGallary.js");
/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Home.css */ "./src/style/Home.css");
/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_Home_css__WEBPACK_IMPORTED_MODULE_2__);




// Style

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['Los Angeles, CA']);
  const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const modelRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', 'Where Now?'];
    const interval = setInterval(() => {
      setLocations(prevLocations => {
        const currentIndex = prevLocations.length;
        if (currentIndex < allLocations.length) {
          return [...prevLocations, allLocations[currentIndex]];
        }
        return prevLocations;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "FooterContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LopsterGallary__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bottom-text",
    style: {
      color: '#282828'
    }
  }, "based in", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), locations.map((location, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    key: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: `location ${index < locations.length - 1 ? 'crossed' : ' '} ${index === locations.length - 1 && location === 'Where Now?' ? 'red-question-mark' : ''}`
  }, location), index < locations.length - 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "space"
  }, "\xA0 \xA0")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "FooterText"
  }, "designed, drawn, and coded by Jo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "\xA9 ", currentYear, " Johanna Lee"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/Components/Header.js":
/*!**********************************!*\
  !*** ./src/Components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/lopster.png */ "./static/lopster.png");
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/Home.css */ "./src/style/Home.css");
/* harmony import */ var _style_Home_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_Home_css__WEBPACK_IMPORTED_MODULE_3__);




// Style

const Header = () => {
  const {
    0: rotation,
    1: setRotation
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setRotation(scrollTop / 14);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("nav", {
    className: "LeftNavContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "topnav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/",
    className: "LogoContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "Logo",
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    alt: "Logo",
    style: {
      transform: `rotate(${rotation}deg)`
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "Menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "MenuItem",
    href: "https://www.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=643%3A255&node-id=643-256&viewport=-54%2C317%2C0.37&t=DPXVv0wSZ5qJFlzM-1&scaling=min-zoom&content-scaling=fixed"
  }, "R\xE9sum\xE9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "MenuItem",
    href: "https://www.linkedin.com/in/johannaleehyunji/"
  }, "LinkedIn")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "MenuItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "MenuItem",
    href: "/#projects"
  }, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "MenuItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "MenuItem",
    href: "/Playground"
  }, "Playground")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: scrollToTop,
    className: "scroll-to-top-btn"
  }, "\u2191"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/Components/LopsterGallary.js":
/*!******************************************!*\
  !*** ./src/Components/LopsterGallary.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/lopster.png */ "./static/lopster.png");
/* harmony import */ var _style_Lopster_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/Lopster.css */ "./src/style/Lopster.css");
/* harmony import */ var _style_Lopster_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_Lopster_css__WEBPACK_IMPORTED_MODULE_2__);



const LopsterGallery = () => {
  const {
    0: rotations,
    1: setRotations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: screenWidth,
    1: setScreenWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(typeof window !== 'undefined' ? window.innerWidth : 0);
  const images = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => [{
    id: 1,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 10,
    direction: 1
  }, {
    id: 2,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 9,
    direction: -1
  }, {
    id: 3,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 14,
    direction: 1
  }, {
    id: 4,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 8,
    direction: -1
  }, {
    id: 5,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 13,
    direction: 1
  }, {
    id: 9,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 7,
    direction: 1
  }, {
    id: 6,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 10,
    direction: -1
  }, {
    id: 7,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 8,
    direction: 1
  }, {
    id: 8,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 9,
    direction: -1
  }, {
    id: 9,
    src: _static_lopster_png__WEBPACK_IMPORTED_MODULE_1__["default"],
    speed: 7,
    direction: 1
  }], []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const initialRotations = Array(images.length).fill(0);
    setRotations(initialRotations);
    const interval = setInterval(() => {
      setRotations(prevRotations => prevRotations.map((rotation, index) => {
        const {
          speed,
          direction
        } = images[index];
        return (rotation + speed * direction + 360) % 360; // Ensure positive rotation
      }));
    }, 50); // Adjust for desired speed

    return () => clearInterval(interval);
  }, [images]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "LopGalleryContainer"
  }, images.slice(0, screenWidth < 768 ? 4 : 8).map((image, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    key: image.id,
    className: "LopImageItem",
    style: {
      animationDuration: `${image.speed}s`,
      transform: `rotate(${rotations[index]}deg)`
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    className: "LopImage",
    src: image.src,
    alt: `Lobster ${index + 1}`
  }))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LopsterGallery);

/***/ }),

/***/ "./src/pages/Yelp.js?export=default":
/*!******************************************!*\
  !*** ./src/pages/Yelp.js?export=default ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _style_Project_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/Project.css */ "./src/style/Project.css");
/* harmony import */ var _style_Project_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_Project_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/Header */ "./src/Components/Header.js");
/* harmony import */ var _Components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Footer */ "./src/Components/Footer.js");


// import App from '../index';



function Yelp() {
  const scrollToProblemSolving1 = () => {
    var _problemSolvingRef$cu;
    (_problemSolvingRef$cu = problemSolvingRef.current) === null || _problemSolvingRef$cu === void 0 ? void 0 : _problemSolvingRef$cu.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const scrollToProblemSolving2 = () => {
    var _problemSolvingRef$cu2;
    (_problemSolvingRef$cu2 = problemSolvingRef.current) === null || _problemSolvingRef$cu2 === void 0 ? void 0 : _problemSolvingRef$cu2.scrollIntoView({
      behavior: 'smooth'
    });
  };
  const imageRefs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const setupImageZoom = container => {
      if (!container) return;
      const image = container.querySelector('.slidepng');
      const handleMouseMove = e => {
        const {
          left,
          top,
          width,
          height
        } = container.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
        image.style.transform = 'scale(1.5)';
      };
      const handleMouseLeave = () => {
        image.style.transformOrigin = 'center center';
        image.style.transform = 'scale(1)';
      };
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    };
    const cleanupFunctions = imageRefs.current.map(container => setupImageZoom(container));
    return () => {
      cleanupFunctions.forEach(cleanup => cleanup && cleanup());
    };
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "header-image"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/2025_headers/Artboard 61.png",
    alt: "Project Header",
    style: {
      borderRadius: '20px',
      border: '1.2px solid #000000'
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/396129457.json */ "./.cache/caches/gatsby-plugin-image/396129457.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "project-title"
  }, "Yelp Home Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "project-summary"
  }, "Developed video ad concepts and brand design system for Yelp Home Services performance marketing."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "info-title"
  }, "Role"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "info-content"
  }, "Creative Design Consultant")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "info-title"
  }, "Timeline"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "info-content"
  }, "Jan 2024 - June 2024")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "info-title"
  }, "Team"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "info-content"
  }, "UMA Design Team", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Yelp Marketing Team")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "info-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "info-title"
  }, "Skills"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "info-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag"
  }, "Performance Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag"
  }, "Content Ideation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag"
  }, "Consumer Survey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "tag"
  }, "Brand Design System")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Project Scope"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Yelp Home Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "My team focused on promoting ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Yelp's Home Services"), ", which ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "connects consumers with trusted professionals for various home improvement tasks.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "By leveraging Yelp's pre-established extensive food businesses review platform, the project aims to broaden the scope of Yelp's recognition and enhance visibility for these home service providers."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpClientReveal.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    style: {
      marginTop: '23px',
      borderRadius: '10px'
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1668783713.json */ "./.cache/caches/gatsby-plugin-image/1668783713.json")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "photoDescription"
  }, "Yelp Client Reveal!"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      textAlign: 'left',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'left'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph",
    style: {
      justifyContent: 'flex-start'
    }
  }, "There are two project scopes assigned by Yelp's team:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "1. Performance Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Deliver Performance Marketing ideations for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Home Services project"), " to enhance engagement ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, " among Gen Z, millennials, and young homeowners "), " needing home services."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#0075A2',
    onMouseLeave: e => e.currentTarget.style.color = "black",
    onClick: scrollToProblemSolving
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph",
    style: {
      marginRight: "5px"
    }
  }, "Jump to Solutions!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CornerRightDown, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "2. Brand Design System"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Establish a robust ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "graphic design system"), " that reinforces brand consistency and strengthens connection with three distinct audiences: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Consumers, Local Businesses, and Brand stakeholders"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: 'none'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#0075A2',
    onMouseLeave: e => e.currentTarget.style.color = "black",
    onClick: scrollToProblemSolving
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph",
    style: {
      marginRight: "5px"
    }
  }, "Jump to Solutions!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CornerRightDown, {
    size: 24
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "User Research"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "what"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Preliminary Research"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "We did an initial research on marketing ad trends and content preferences for different user groups: Gen Z, Millennials, and Gen X/Homeowners")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpPreliminaryResearch.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1230991409.json */ "./.cache/caches/gatsby-plugin-image/1230991409.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "photoDescription",
    style: {
      fontStyle: 'italic'
    }
  }, "For a closer look, hover over any image to expand it!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#E00707"
    }
  }, "SWOT Analysis"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpSwot.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3729994675.json */ "./.cache/caches/gatsby-plugin-image/3729994675.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "User Survey"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "We conducted a user survey to collect insights regarding ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Yelp sentiments, problem spaces/needs in home services, and preferences in ad content. "), "There was a total of 163 respondents primarily in their early 20s.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Yelp & Home Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpUserSurvey1.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3893352754.json */ "./.cache/caches/gatsby-plugin-image/3893352754.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Advertisement Content"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpUserSurvey2.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2448776246.json */ "./.cache/caches/gatsby-plugin-image/2448776246.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "A/B Testing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "My team conducted", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, " A/B testing with 21 participants."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Each participant is shown a pair of video advertisements under the themes of ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "storytelling, demonstration, and humor"), " and then asked to provide feedback. The purpose is to gather insights on which advertisement version performs better based on viewer feedback.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "table",
    style: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      diplay: 'flex',
      flexDirection: 'column',
      flex: '1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Storytelling"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/watch?v=1d9V8xVzxBA"
  }, "On CloudTec")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/watch?v=37lI299U1bA&ab_channel=Tinder"
  }, "Tinder")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      diplay: 'flex',
      flexDirection: 'column',
      flex: '1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Demonstration"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/watch?v=7oBZ8sBjdyQ&ab_channel=Pepsi"
  }, "Pepsi")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://www.youtube.com/watch?v=u3ybWiEUaUU"
  }, "Starbucks")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      diplay: 'flex',
      flexDirection: 'column',
      flex: '1'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Humor"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://youtu.be/nLwML2PagbY?feature=shared"
  }, "Mercedes-Benz")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "https://youtube.com/shorts/gUB_1BD8oJo?si=JrGiFPvahm8S5DSd"
  }, "Burger King"))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "User Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpABTesting.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/228322184.json */ "./.cache/caches/gatsby-plugin-image/228322184.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "User Personas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Based off of the preliminary research, user surveys, and A/B testing, our team developed 3 user personas representative of each user group we are studying.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "User Insights"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707",
      marginLeft: '20px',
      fontSize: '1.2rem',
      textAlign: 'left'
    }
  }, "User Group 1: Gen Z"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpUserPersona1.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/992024277.json */ "./.cache/caches/gatsby-plugin-image/992024277.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707",
      marginLeft: '20px',
      fontSize: '1.2rem',
      textAlign: 'left'
    }
  }, "User Group 2: Millennials"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpUserPersona2.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3529446193.json */ "./.cache/caches/gatsby-plugin-image/3529446193.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707",
      marginLeft: '20px',
      fontSize: '1.2rem',
      textAlign: 'left'
    }
  }, "User Group 3: Gen X / Homeowners"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpUserPersona4.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3457193981.json */ "./.cache/caches/gatsby-plugin-image/3457193981.json")
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, " Solution 1:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "Performance Marketing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "For performance marketing content ideation, we delivered ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "story boards for 3 different ad video concepts:"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/VideoConceptDirection.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/116016356.json */ "./.cache/caches/gatsby-plugin-image/116016356.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "photoDescription",
    style: {
      fontStyle: 'italic'
    }
  }, "For a closer look, hover over any image to expand it!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      textAlign: 'left',
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#E00707",
      textAlign: 'center'
    }
  }, " Grow with Yelp "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "\u201CGrow with Yelp\u201D"), " is a storytelling-based advertisement that showcases how Yelp is able to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "continuously provide"), " the tools one needs throughout their ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "different stages of life.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/GrowWithYelp.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/813295459.json */ "./.cache/caches/gatsby-plugin-image/813295459.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "We aim to ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "grow brand loyalty within the younger generation. "), "As young users face new responsibilities, they should view Yelp as a go-to app they are already familiar with. It repositions Yelp as ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "an everyday lifestyle tool rather than just a food review app."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "photoDescription",
    style: {
      fontStyle: 'italic'
    }
  }, "For a closer look, hover over any image to expand it!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      textAlign: 'left',
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#E00707",
      textAlign: 'center'
    }
  }, "Yelp Demo"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "This is an advertisement designed to highlight the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "diverse services"), " available in Yelp\u2019s home service."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/Demo.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1532996831.json */ "./.cache/caches/gatsby-plugin-image/1532996831.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "The purpose is to demonstrate how Yelp makes ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "home management easier"), " and more efficient. This advertisement aims to position Yelp as a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "trusted resource in home management and improvement."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "photoDescription",
    style: {
      fontStyle: 'italic'
    }
  }, "For a closer look, hover over any image to expand it!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection",
    style: {
      textAlign: 'left',
      padding: '30px 30px 30px 30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#E00707",
      textAlign: 'center'
    }
  }, "Yelp for Help"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "\"Yelp for Help\" aims to solidify Yelp's brand identity as the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "ultimate go-to resource for quick and reliable assistance.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpForHelp.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1114307673.json */ "./.cache/caches/gatsby-plugin-image/1114307673.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Through engaging typography transitions, the video ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "captures the fast-paced lifestyle of younger audiences"), ". This concept ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "positions Yelp as a verb"), " synonymous with seeking help and recommendations.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Solution 2: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), " Brand Design System"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Consumer"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Yelp for consumers should:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Be the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "most visually appealing"), ", targeting a broad audience with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "eye-catching design"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Utilize a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "wide color palette"), " with strong pops of red to expand the Yelp brand beyond food. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Use diverse shapes"), " while maintaining order, establishing Yelp as both refreshingly fun and reliable.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Design System Direction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/DesignSystemDirectionConsumers.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/995600375.json */ "./.cache/caches/gatsby-plugin-image/995600375.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Mockups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpForConsumers1.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/942445241.json */ "./.cache/caches/gatsby-plugin-image/942445241.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "          ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpForConsumers2.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/547398062.json */ "./.cache/caches/gatsby-plugin-image/547398062.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpForConsumers3.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/413040491.json */ "./.cache/caches/gatsby-plugin-image/413040491.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/yelpposter.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    style: {
      width: '60%'
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/386459095.json */ "./.cache/caches/gatsby-plugin-image/386459095.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Business"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Yelp for business should:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Be ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "minimalistic and straightforward,"), " targeting local businesses viewing Yelp as a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "growth opportunity within a community-based"), " platform."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Utilize a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "minimal color palette"), " featuring strong reds and secondary blues to establish a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "professional"), " tone that businesses can identify with. "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "Simple forms and relatable imagery"), " fosters trust and familiarity with Yelp among businesses.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Design System Direction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/DesignSystemDirectionLocalBusiness.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3638255115.json */ "./.cache/caches/gatsby-plugin-image/3638255115.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Mockups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBusiness2.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1664411752.json */ "./.cache/caches/gatsby-plugin-image/1664411752.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBusiness1.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3116466266.json */ "./.cache/caches/gatsby-plugin-image/3116466266.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBusiness3.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2930725601.json */ "./.cache/caches/gatsby-plugin-image/2930725601.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Brand"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "Yelp for brands should:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "bold and memorable, "), " targeting large brands that can leverage Yelp\u2019s platform for ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "targeted advertising.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Use a ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "limited color palette"), " primarily red paired with some whites and blacks, to enhance ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "boldness and fun."), " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "Incorporate", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "singular shapes, greater white space, "), " and limited image content to create memorable grand gestures.")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "boxsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Design System Direction"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/DesignSystemDirectionBrand.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2612012717.json */ "./.cache/caches/gatsby-plugin-image/2612012717.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Mockups"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBrands1.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2728077885.json */ "./.cache/caches/gatsby-plugin-image/2728077885.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBrands2.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2664848104.json */ "./.cache/caches/gatsby-plugin-image/2664848104.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "boxsection-title",
    style: {
      color: "#FF1A1A"
    }
  }, "Graphic Templates"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "slidepng-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "team-photo",
    ref: el => imageRefs.current.push(el)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    src: "../../static/yelp/YelpBrands3.png",
    alt: "Project Header",
    placeholder: "blurred",
    layout: "constrained",
    className: "slidepng",
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1872271449.json */ "./.cache/caches/gatsby-plugin-image/1872271449.json")
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "section"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "section-title"
  }, "Reflection"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subsection"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Designing Branding System"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "The biggest challenge was creating a branding system for Yelp that ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "remained cohesive under the main brand while catering to different target groups. "), " Took trial and error to successfully differentiate the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", {
    className: "subsection-title",
    style: {
      color: "#E00707"
    }
  }, "Video Concept Ideation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "paragraph"
  }, "I particularly enjoyed the video concept ideation and storyboard mock-ups stage, given my experience in personal video content creation. This project offered a new perspective as I approached ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("b", null, "video creation from a marketing standpoint, "), "contrasting to catering personal memories and experiences."))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Yelp);

/***/ }),

/***/ "./node_modules/gatsby/node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-server-dom-webpack.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "react");

function createStringDecoder() {
  return new TextDecoder();
}
var decoderOptions = {
  stream: true
};
function readPartialStringChunk(decoder, buffer) {
  return decoder.decode(buffer, decoderOptions);
}
function readFinalStringChunk(decoder, buffer) {
  return decoder.decode(buffer);
}

function parseModel(response, json) {
  return JSON.parse(json, response._fromJSON);
}

// eslint-disable-next-line no-unused-vars
function resolveModuleReference(bundlerConfig, moduleData) {
  if (bundlerConfig) {
    return bundlerConfig[moduleData.id][moduleData.name];
  }

  return moduleData;
} // The chunk cache contains all the chunks we've preloaded so far.
// If they're still pending they're a thenable. This map also exists
// in Webpack but unfortunately it's not exposed so we have to
// replicate it in user space. null means that it has already loaded.

var chunkCache = new Map(); // Start preloading the modules since we might need them soon.
// This function doesn't suspend.

function preloadModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry === undefined) {
      var thenable = __webpack_require__.e(chunkId);

      var resolve = chunkCache.set.bind(chunkCache, chunkId, null);
      var reject = chunkCache.set.bind(chunkCache, chunkId);
      thenable.then(resolve, reject);
      chunkCache.set(chunkId, thenable);
    }
  }
} // Actually require the module or suspend if it's not yet ready.
// Increase priority if necessary.

function requireModule(moduleData) {
  var chunks = moduleData.chunks;

  for (var i = 0; i < chunks.length; i++) {
    var chunkId = chunks[i];
    var entry = chunkCache.get(chunkId);

    if (entry !== null) {
      // We assume that preloadModule has been called before.
      // So we don't expect to see entry being undefined here, that's an error.
      // Let's throw either an error or the Promise.
      throw entry;
    }
  }

  var moduleExports = __webpack_require__(moduleData.id);

  if (moduleData.name === '*') {
    // This is a placeholder value that represents that the caller imported this
    // as a CommonJS module as is.
    return moduleExports;
  }

  if (moduleData.name === '') {
    // This is a placeholder value that represents that the caller accessed the
    // default property of this if it was an ESM interop module.
    return moduleExports.__esModule ? moduleExports.default : moduleExports;
  }

  return moduleExports[moduleData.name];
}

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types.
var REACT_ELEMENT_TYPE = Symbol.for('react.element');
var REACT_LAZY_TYPE = Symbol.for('react.lazy');
var REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for('react.default_value');

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

var ContextRegistry = ReactSharedInternals.ContextRegistry;
function getOrCreateServerContext(globalName) {
  if (!ContextRegistry[globalName]) {
    ContextRegistry[globalName] = React.createServerContext(globalName, REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED);
  }

  return ContextRegistry[globalName];
}

var PENDING = 0;
var RESOLVED_MODEL = 1;
var RESOLVED_MODULE = 2;
var INITIALIZED = 3;
var ERRORED = 4;

function Chunk(status, value, response) {
  this._status = status;
  this._value = value;
  this._response = response;
}

Chunk.prototype.then = function (resolve) {
  var chunk = this;

  if (chunk._status === PENDING) {
    if (chunk._value === null) {
      chunk._value = [];
    }

    chunk._value.push(resolve);
  } else {
    resolve();
  }
};

function readChunk(chunk) {
  switch (chunk._status) {
    case INITIALIZED:
      return chunk._value;

    case RESOLVED_MODEL:
      return initializeModelChunk(chunk);

    case RESOLVED_MODULE:
      return initializeModuleChunk(chunk);

    case PENDING:
      // eslint-disable-next-line no-throw-literal
      throw chunk;

    default:
      throw chunk._value;
  }
}

function readRoot() {
  var response = this;
  var chunk = getChunk(response, 0);
  return readChunk(chunk);
}

function createPendingChunk(response) {
  return new Chunk(PENDING, null, response);
}

function createErrorChunk(response, error) {
  return new Chunk(ERRORED, error, response);
}

function createInitializedChunk(response, value) {
  return new Chunk(INITIALIZED, value, response);
}

function wakeChunk(listeners) {
  if (listeners !== null) {
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }
  }
}

function triggerErrorOnChunk(chunk, error) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var erroredChunk = chunk;
  erroredChunk._status = ERRORED;
  erroredChunk._value = error;
  wakeChunk(listeners);
}

function createResolvedModelChunk(response, value) {
  return new Chunk(RESOLVED_MODEL, value, response);
}

function createResolvedModuleChunk(response, value) {
  return new Chunk(RESOLVED_MODULE, value, response);
}

function resolveModelChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODEL;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function resolveModuleChunk(chunk, value) {
  if (chunk._status !== PENDING) {
    // We already resolved. We didn't expect to see this.
    return;
  }

  var listeners = chunk._value;
  var resolvedChunk = chunk;
  resolvedChunk._status = RESOLVED_MODULE;
  resolvedChunk._value = value;
  wakeChunk(listeners);
}

function initializeModelChunk(chunk) {
  var value = parseModel(chunk._response, chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}

function initializeModuleChunk(chunk) {
  var value = requireModule(chunk._value);
  var initializedChunk = chunk;
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
} // Report that any missing chunks in the model is now going to throw this
// error upon read. Also notify any pending promises.


function reportGlobalError(response, error) {
  response._chunks.forEach(function (chunk) {
    // If this chunk was already resolved or errored, it won't
    // trigger an error but if it wasn't then we need to
    // because we won't be getting any new data to resolve it.
    triggerErrorOnChunk(chunk, error);
  });
}

function createElement(type, key, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: null,
    props: props,
    // Record the component responsible for creating this element.
    _owner: null
  };

  {
    // We don't really need to add any of these but keeping them for good measure.
    // Unfortunately, _store is enumerable in jest matchers so for equality to
    // work, I need to keep it or make _store non-enumerable in the other file.
    element._store = {};
    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: true // This element has already been validated on the server.

    });
    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: null
    });
  }

  return element;
}

function createLazyChunkWrapper(chunk) {
  var lazyType = {
    $$typeof: REACT_LAZY_TYPE,
    _payload: chunk,
    _init: readChunk
  };
  return lazyType;
}

function getChunk(response, id) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunk = createPendingChunk(response);
    chunks.set(id, chunk);
  }

  return chunk;
}

function parseModelString(response, parentObject, value) {
  switch (value[0]) {
    case '$':
      {
        if (value === '$') {
          return REACT_ELEMENT_TYPE;
        } else if (value[1] === '$' || value[1] === '@') {
          // This was an escaped string value.
          return value.substring(1);
        } else {
          var id = parseInt(value.substring(1), 16);
          var chunk = getChunk(response, id);
          return readChunk(chunk);
        }
      }

    case '@':
      {
        var _id = parseInt(value.substring(1), 16);

        var _chunk = getChunk(response, _id); // We create a React.lazy wrapper around any lazy values.
        // When passed into React, we'll know how to suspend on this.


        return createLazyChunkWrapper(_chunk);
      }
  }

  return value;
}
function parseModelTuple(response, value) {
  var tuple = value;

  if (tuple[0] === REACT_ELEMENT_TYPE) {
    // TODO: Consider having React just directly accept these arrays as elements.
    // Or even change the ReactElement type to be an array.
    return createElement(tuple[1], tuple[2], tuple[3]);
  }

  return value;
}
function createResponse(bundlerConfig) {
  var chunks = new Map();
  var response = {
    _bundlerConfig: bundlerConfig,
    _chunks: chunks,
    readRoot: readRoot
  };
  return response;
}
function resolveModel(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createResolvedModelChunk(response, model));
  } else {
    resolveModelChunk(chunk, model);
  }
}
function resolveProvider(response, id, contextName) {
  var chunks = response._chunks;
  chunks.set(id, createInitializedChunk(response, getOrCreateServerContext(contextName).Provider));
}
function resolveModule(response, id, model) {
  var chunks = response._chunks;
  var chunk = chunks.get(id);
  var moduleMetaData = parseModel(response, model);
  var moduleReference = resolveModuleReference(response._bundlerConfig, moduleMetaData); // TODO: Add an option to encode modules that are lazy loaded.
  // For now we preload all modules as early as possible since it's likely
  // that we'll need them.

  preloadModule(moduleReference);

  if (!chunk) {
    chunks.set(id, createResolvedModuleChunk(response, moduleReference));
  } else {
    resolveModuleChunk(chunk, moduleReference);
  }
}
function resolveSymbol(response, id, name) {
  var chunks = response._chunks; // We assume that we'll always emit the symbol before anything references it
  // to save a few bytes.

  chunks.set(id, createInitializedChunk(response, Symbol.for(name)));
}
function resolveError(response, id, message, stack) {
  // eslint-disable-next-line react-internal/prod-error-codes
  var error = new Error(message);
  error.stack = stack;
  var chunks = response._chunks;
  var chunk = chunks.get(id);

  if (!chunk) {
    chunks.set(id, createErrorChunk(response, error));
  } else {
    triggerErrorOnChunk(chunk, error);
  }
}
function close(response) {
  // In case there are any remaining unresolved chunks, they won't
  // be resolved now. So we need to issue an error to those.
  // Ideally we should be able to early bail out if we kept a
  // ref count of pending chunks.
  reportGlobalError(response, new Error('Connection closed.'));
}

function processFullRow(response, row) {
  if (row === '') {
    return;
  }

  var tag = row[0]; // When tags that are not text are added, check them here before
  // parsing the row as text.
  // switch (tag) {
  // }

  var colon = row.indexOf(':', 1);
  var id = parseInt(row.substring(1, colon), 16);
  var text = row.substring(colon + 1);

  switch (tag) {
    case 'J':
      {
        resolveModel(response, id, text);
        return;
      }

    case 'M':
      {
        resolveModule(response, id, text);
        return;
      }

    case 'P':
      {
        resolveProvider(response, id, text);
        return;
      }

    case 'S':
      {
        resolveSymbol(response, id, JSON.parse(text));
        return;
      }

    case 'E':
      {
        var errorInfo = JSON.parse(text);
        resolveError(response, id, errorInfo.message, errorInfo.stack);
        return;
      }

    default:
      {
        throw new Error("Error parsing the data. It's probably an error code or network corruption.");
      }
  }
}

function processStringChunk(response, chunk, offset) {
  var linebreak = chunk.indexOf('\n', offset);

  while (linebreak > -1) {
    var fullrow = response._partialRow + chunk.substring(offset, linebreak);
    processFullRow(response, fullrow);
    response._partialRow = '';
    offset = linebreak + 1;
    linebreak = chunk.indexOf('\n', offset);
  }

  response._partialRow += chunk.substring(offset);
}
function processBinaryChunk(response, chunk) {

  var stringDecoder = response._stringDecoder;
  var linebreak = chunk.indexOf(10); // newline

  while (linebreak > -1) {
    var fullrow = response._partialRow + readFinalStringChunk(stringDecoder, chunk.subarray(0, linebreak));
    processFullRow(response, fullrow);
    response._partialRow = '';
    chunk = chunk.subarray(linebreak + 1);
    linebreak = chunk.indexOf(10); // newline
  }

  response._partialRow += readPartialStringChunk(stringDecoder, chunk);
}

function createFromJSONCallback(response) {
  return function (key, value) {
    if (typeof value === 'string') {
      // We can't use .bind here because we need the "this" value.
      return parseModelString(response, this, value);
    }

    if (typeof value === 'object' && value !== null) {
      return parseModelTuple(response, value);
    }

    return value;
  };
}

function createResponse$1(bundlerConfig) {
  // NOTE: CHECK THE COMPILER OUTPUT EACH TIME YOU CHANGE THIS.
  // It should be inlined to one object literal but minor changes can break it.
  var stringDecoder =  createStringDecoder() ;
  var response = createResponse(bundlerConfig);
  response._partialRow = '';

  {
    response._stringDecoder = stringDecoder;
  } // Don't inline this call because it causes closure to outline the call above.


  response._fromJSON = createFromJSONCallback(response);
  return response;
}

function startReadingFromStream(response, stream) {
  var reader = stream.getReader();

  function progress(_ref) {
    var done = _ref.done,
        value = _ref.value;

    if (done) {
      close(response);
      return;
    }

    var buffer = value;
    processBinaryChunk(response, buffer);
    return reader.read().then(progress, error);
  }

  function error(e) {
    reportGlobalError(response, e);
  }

  reader.read().then(progress, error);
}

function createFromReadableStream(stream, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  startReadingFromStream(response, stream);
  return response;
}

function createFromFetch(promiseForResponse, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  promiseForResponse.then(function (r) {
    startReadingFromStream(response, r.body);
  }, function (e) {
    reportGlobalError(response, e);
  });
  return response;
}

function createFromXHR(request, options) {
  var response = createResponse$1(options && options.moduleMap ? options.moduleMap : null);
  var processedLength = 0;

  function progress(e) {
    var chunk = request.responseText;
    processStringChunk(response, chunk, processedLength);
    processedLength = chunk.length;
  }

  function load(e) {
    progress();
    close(response);
  }

  function error(e) {
    reportGlobalError(response, new TypeError('Network error'));
  }

  request.addEventListener('progress', progress);
  request.addEventListener('load', load);
  request.addEventListener('error', error);
  request.addEventListener('abort', error);
  request.addEventListener('timeout', error);
  return response;
}

exports.createFromFetch = createFromFetch;
exports.createFromReadableStream = createFromReadableStream;
exports.createFromXHR = createFromXHR;
  })();
}


/***/ }),

/***/ "./node_modules/gatsby/node_modules/react-server-dom-webpack/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/react-server-dom-webpack/index.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-server-dom-webpack.development.js */ "./node_modules/gatsby/node_modules/react-server-dom-webpack/cjs/react-server-dom-webpack.development.js");
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/node-object-hash/dist/hasher.js":
/*!******************************************************!*\
  !*** ./node_modules/node-object-hash/dist/hasher.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var objectSorter_1 = __importDefault(__webpack_require__(/*! ./objectSorter */ "./node_modules/node-object-hash/dist/objectSorter.js"));
var crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
/**
 * Default hash algorithm
 */
var DEFAULT_ALG = 'sha256';
/**
 * Default hash string enoding
 */
var DEFAULT_ENC = 'hex';
/**
 * Hasher constructor
 * @param options hasher options
 * @return hasher instance
 */
function hasher(options) {
    if (options === void 0) { options = {}; }
    var sortObject = (0, objectSorter_1.default)(options);
    /**
     * Object hash function
     * @param obj object to hash
     * @param opts hasher options
     * @returns hash string
     */
    function hashObject(obj, opts) {
        if (opts === void 0) { opts = {}; }
        var alg = opts.alg || options.alg || DEFAULT_ALG;
        var enc = opts.enc || options.enc || DEFAULT_ENC;
        var sorted = sortObject(obj);
        return crypto_1.default.createHash(alg).update(sorted).digest(enc);
    }
    return {
        hash: hashObject,
        sort: sortObject,
        sortObject: sortObject,
    };
}
module.exports = hasher;
//# sourceMappingURL=hasher.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/objectSorter.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/objectSorter.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
var str = __importStar(__webpack_require__(/*! ./stringifiers */ "./node_modules/node-object-hash/dist/stringifiers.js"));
/**
 * Object sorter consturctor
 * @param options object transformation options
 * @return function that transforms object to strings
 */
function objectSorter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign({ sort: true, coerce: true, trim: false }, options), sort = _a.sort, coerce = _a.coerce, trim = _a.trim;
    var stringifiers = {
        unknown: function _unknown(obj) {
            var _a, _b;
            // `unknonw` - is a typo, saved for backward compatibility
            var constructorName = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknonw';
            var objectName = typeof obj.toString === 'function' ? obj.toString() : 'unknown';
            return "<:" + constructorName + ">:" + objectName;
        },
    };
    var sortOptions = {
        array: typeof sort === 'boolean' ? sort : sort.array,
        typedArray: typeof sort === 'boolean' ? false : sort.typedArray,
        object: typeof sort === 'boolean' ? sort : sort.object,
        set: typeof sort === 'boolean' ? sort : sort.set,
        map: typeof sort === 'boolean' ? sort : sort.map,
    };
    var coerceOptions = {
        boolean: typeof coerce === 'boolean' ? coerce : coerce.boolean,
        number: typeof coerce === 'boolean' ? coerce : coerce.number,
        bigint: typeof coerce === 'boolean' ? coerce : coerce.bigint,
        string: typeof coerce === 'boolean' ? coerce : coerce.string,
        undefined: typeof coerce === 'boolean' ? coerce : coerce.undefined,
        null: typeof coerce === 'boolean' ? coerce : coerce.null,
        symbol: typeof coerce === 'boolean' ? coerce : coerce.symbol,
        function: typeof coerce === 'boolean' ? coerce : coerce.function,
        date: typeof coerce === 'boolean' ? coerce : coerce.date,
        set: typeof coerce === 'boolean' ? coerce : coerce.set,
    };
    var trimOptions = {
        string: typeof trim === 'boolean' ? trim : trim.string,
        function: typeof trim === 'boolean' ? trim : trim.function,
    };
    stringifiers.hashable = str._hashable.bind(stringifiers);
    if (trimOptions.string) {
        stringifiers.string = coerceOptions.string
            ? str._stringTrimCoerce.bind(stringifiers)
            : str._stringTrim.bind(stringifiers);
    }
    else {
        stringifiers.string = coerceOptions.string
            ? str._stringCoerce.bind(stringifiers)
            : str._string.bind(stringifiers);
    }
    stringifiers.number = coerceOptions.number
        ? str._numberCoerce.bind(stringifiers)
        : str._number.bind(stringifiers);
    stringifiers.bigint = coerceOptions.bigint
        ? str._bigIntCoerce.bind(stringifiers)
        : str._bigInt.bind(stringifiers);
    stringifiers.boolean = coerceOptions.boolean
        ? str._booleanCoerce.bind(stringifiers)
        : str._boolean.bind(stringifiers);
    stringifiers.symbol = coerceOptions.symbol
        ? str._symbolCoerce.bind(stringifiers)
        : str._symbol.bind(stringifiers);
    stringifiers.undefined = coerceOptions.undefined
        ? str._undefinedCoerce.bind(stringifiers)
        : str._undefined.bind(stringifiers);
    stringifiers.null = coerceOptions.null
        ? str._nullCoerce.bind(stringifiers)
        : str._null.bind(stringifiers);
    if (trimOptions.function) {
        stringifiers.function = coerceOptions.function
            ? str._functionTrimCoerce.bind(stringifiers)
            : str._functionTrim.bind(stringifiers);
    }
    else {
        stringifiers.function = coerceOptions.function
            ? str._functionCoerce.bind(stringifiers)
            : str._function.bind(stringifiers);
    }
    stringifiers.date = coerceOptions.date
        ? str._dateCoerce.bind(stringifiers)
        : str._date.bind(stringifiers);
    stringifiers.array = sortOptions.array
        ? str._arraySort.bind(stringifiers)
        : str._array.bind(stringifiers);
    stringifiers.typedarray = sortOptions.typedArray
        ? str._typedArraySort.bind(stringifiers)
        : str._typedArray.bind(stringifiers);
    if (sortOptions.set) {
        stringifiers.set = coerceOptions.set
            ? str._setSortCoerce.bind(stringifiers)
            : str._setSort.bind(stringifiers);
    }
    else {
        stringifiers.set = coerceOptions.set
            ? str._setCoerce.bind(stringifiers)
            : str._set.bind(stringifiers);
    }
    stringifiers.object = sortOptions.object
        ? str._objectSort.bind(stringifiers)
        : str._object.bind(stringifiers);
    stringifiers.map = sortOptions.map
        ? str._mapSort.bind(stringifiers)
        : str._map.bind(stringifiers);
    /**
     * Serializes object to string
     * @param obj object
     */
    function objectToString(obj) {
        return stringifiers[(0, typeGuess_1.guessType)(obj)](obj);
    }
    return objectToString;
}
module.exports = objectSorter;
//# sourceMappingURL=objectSorter.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/stringifiers.js":
/*!************************************************************!*\
  !*** ./node_modules/node-object-hash/dist/stringifiers.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * @private
 * @inner
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._mapSort = exports._map = exports._objectSort = exports._object = exports._setCoerce = exports._set = exports._setSort = exports._setSortCoerce = exports._typedArray = exports._typedArraySort = exports._array = exports._arraySort = exports._date = exports._dateCoerce = exports._functionTrim = exports._functionTrimCoerce = exports._function = exports._functionCoerce = exports._null = exports._nullCoerce = exports._undefined = exports._undefinedCoerce = exports._symbol = exports._symbolCoerce = exports._boolean = exports._booleanCoerce = exports._bigInt = exports._bigIntCoerce = exports._number = exports._numberCoerce = exports._stringTrim = exports._stringTrimCoerce = exports._string = exports._stringCoerce = exports._hashable = exports.PREFIX = void 0;
var typeGuess_1 = __webpack_require__(/*! ./typeGuess */ "./node_modules/node-object-hash/dist/typeGuess.js");
/**
 * Prefixes that used when type coercion is disabled
 */
exports.PREFIX = {
    string: '<:s>',
    number: '<:n>',
    bigint: '<:bi>',
    boolean: '<:b>',
    symbol: '<:smbl>',
    undefined: '<:undf>',
    null: '<:null>',
    function: '<:func>',
    array: '',
    date: '<:date>',
    set: '<:set>',
    map: '<:map>',
};
/**
 * Converts Hashable to string
 * @private
 * @param obj object to convert
 * @returns object string representation
 */
function _hashable(obj) {
    return obj.toHashableString();
}
exports._hashable = _hashable;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringCoerce(obj) {
    return obj;
}
exports._stringCoerce = _stringCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _string(obj) {
    return exports.PREFIX.string + ':' + obj;
}
exports._string = _string;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrimCoerce(obj) {
    return obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrimCoerce = _stringTrimCoerce;
/**
 * Converts string to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _stringTrim(obj) {
    return exports.PREFIX.string + ':' + obj.replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ').trim();
}
exports._stringTrim = _stringTrim;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _numberCoerce(obj) {
    return obj.toString();
}
exports._numberCoerce = _numberCoerce;
/**
 * Converts number to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _number(obj) {
    return exports.PREFIX.number + ":" + obj;
}
exports._number = _number;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigIntCoerce(obj) {
    return obj.toString();
}
exports._bigIntCoerce = _bigIntCoerce;
/**
 * Converts BigInt to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _bigInt(obj) {
    return exports.PREFIX.bigint + ":" + obj.toString();
}
exports._bigInt = _bigInt;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _booleanCoerce(obj) {
    return obj ? '1' : '0';
}
exports._booleanCoerce = _booleanCoerce;
/**
 * Converts boolean to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _boolean(obj) {
    return exports.PREFIX.boolean + ':' + obj.toString();
}
exports._boolean = _boolean;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbolCoerce() {
    return exports.PREFIX.symbol;
}
exports._symbolCoerce = _symbolCoerce;
/**
 * Converts symbol to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _symbol(obj) {
    return exports.PREFIX.symbol + ':' + obj.toString();
}
exports._symbol = _symbol;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefinedCoerce() {
    return '';
}
exports._undefinedCoerce = _undefinedCoerce;
/**
 * Converts undefined to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _undefined() {
    return exports.PREFIX.undefined;
}
exports._undefined = _undefined;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _nullCoerce() {
    return '';
}
exports._nullCoerce = _nullCoerce;
/**
 * Converts null to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _null() {
    return exports.PREFIX.null;
}
exports._null = _null;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionCoerce(obj) {
    return obj.name + '=>' + obj.toString();
}
exports._functionCoerce = _functionCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _function(obj) {
    return exports.PREFIX.function + ':' + obj.name + '=>' + obj.toString();
}
exports._function = _function;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrimCoerce(obj) {
    return (obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrimCoerce = _functionTrimCoerce;
/**
 * Converts function to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _functionTrim(obj) {
    return (exports.PREFIX.function +
        ':' +
        obj.name +
        '=>' +
        obj
            .toString()
            .replace(/(\s+|\t|\r\n|\n|\r)/gm, ' ')
            .trim());
}
exports._functionTrim = _functionTrim;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _dateCoerce(obj) {
    return obj.toISOString();
}
exports._dateCoerce = _dateCoerce;
/**
 * Converts date to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _date(obj) {
    return exports.PREFIX.date + ':' + obj.toISOString();
}
exports._date = _date;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _arraySort(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .sort()
            .toString() +
        ']');
}
exports._arraySort = _arraySort;
/**
 * Converts array to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _array(obj) {
    var stringifiers = this;
    return ('[' +
        obj
            .map(function (item) {
            return stringifiers[(0, typeGuess_1.guessType)(item)](item);
        })
            .toString() +
        ']');
}
exports._array = _array;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArraySort(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .sort()
            .toString() +
        ']');
}
exports._typedArraySort = _typedArraySort;
/**
 * Converts TypedArray to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _typedArray(obj) {
    var stringifiers = this;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    var values = Array.prototype.slice.call(obj);
    return ('[' +
        values
            .map(function (num) {
            return stringifiers[(0, typeGuess_1.guessType)(num)](num);
        })
            .toString() +
        ']');
}
exports._typedArray = _typedArray;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSortCoerce(obj) {
    return _arraySort.call(this, Array.from(obj));
}
exports._setSortCoerce = _setSortCoerce;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setSort(obj) {
    return exports.PREFIX.set + ":" + _arraySort.call(this, Array.from(obj));
}
exports._setSort = _setSort;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _set(obj) {
    return exports.PREFIX.set + ":" + _array.call(this, Array.from(obj));
}
exports._set = _set;
/**
 * Converts set to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _setCoerce(obj) {
    return _array.call(this, Array.from(obj));
}
exports._setCoerce = _setCoerce;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _object(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj);
    var objArray = [];
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._object = _object;
/**
 * Converts object to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _objectSort(obj) {
    var stringifiers = this;
    var keys = Object.keys(obj).sort();
    var objArray = [];
    for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var val = obj[key];
        var valT = (0, typeGuess_1.guessType)(val);
        objArray.push(key + ':' + stringifiers[valT](val));
    }
    return '{' + objArray.toString() + '}';
}
exports._objectSort = _objectSort;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _map(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.join(';') + ']';
}
exports._map = _map;
/**
 * Converts map to string
 * @private
 * @param obj object to convert
 * @return object string representation
 */
function _mapSort(obj) {
    var stringifiers = this;
    var arr = Array.from(obj);
    var mapped = [];
    for (var _i = 0, arr_2 = arr; _i < arr_2.length; _i++) {
        var item = arr_2[_i];
        var _a = item, key = _a[0], value = _a[1];
        mapped.push([
            stringifiers[(0, typeGuess_1.guessType)(key)](key),
            stringifiers[(0, typeGuess_1.guessType)(value)](value),
        ]);
    }
    return '[' + mapped.sort().join(';') + ']';
}
exports._mapSort = _mapSort;
//# sourceMappingURL=stringifiers.js.map

/***/ }),

/***/ "./node_modules/node-object-hash/dist/typeGuess.js":
/*!*********************************************************!*\
  !*** ./node_modules/node-object-hash/dist/typeGuess.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.guessType = exports.guessObjectType = exports.TYPE_MAP = void 0;
/**
 * Type mapping rules.
 */
exports.TYPE_MAP = {
    Array: 'array',
    Int8Array: 'typedarray',
    Uint8Array: 'typedarray',
    Uint8ClampedArray: 'typedarray',
    Int16Array: 'typedarray',
    Uint16Array: 'typedarray',
    Int32Array: 'typedarray',
    Uint32Array: 'typedarray',
    Float32Array: 'typedarray',
    Float64Array: 'typedarray',
    BigUint64Array: 'typedarray',
    BigInt64Array: 'typedarray',
    Buffer: 'typedarray',
    Map: 'map',
    Set: 'set',
    Date: 'date',
    String: 'string',
    Number: 'number',
    BigInt: 'bigint',
    Boolean: 'boolean',
    Object: 'object',
};
/**
 * Guess object type
 * @param obj analyzed object
 * @return object type
 */
function guessObjectType(obj) {
    var _a, _b;
    if (obj === null) {
        return 'null';
    }
    if (instanceOfHashable(obj)) {
        return 'hashable';
    }
    var type = (_b = (_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : 'unknown';
    return exports.TYPE_MAP[type] || 'unknown';
}
exports.guessObjectType = guessObjectType;
/**
 * Guess variable type
 * @param obj analyzed variable
 * @return variable type
 */
function guessType(obj) {
    var type = typeof obj;
    return type !== 'object' ? type : guessObjectType(obj);
}
exports.guessType = guessType;
/**
 * Identify if object is instance of Hashable interface
 * @param object analyzed variable
 * @return true if object has toHashableString property and this property is function
 * otherwise return false
 */
function instanceOfHashable(object) {
    return typeof object.toHashableString === 'function';
}
//# sourceMappingURL=typeGuess.js.map

/***/ }),

/***/ "./src/style/Home.css":
/*!****************************!*\
  !*** ./src/style/Home.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "./src/style/Lopster.css":
/*!*******************************!*\
  !*** ./src/style/Lopster.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./src/style/Project.css":
/*!*******************************!*\
  !*** ./src/style/Project.css ***!
  \*******************************/
/***/ (() => {



/***/ }),

/***/ "./static/lopster.png":
/*!****************************!*\
  !*** ./static/lopster.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/static/lopster-102787b83fb889e09b9d6c512829bf56.png");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ ((module) => {

function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, setPrototypeOf(t, o);
}
module.exports = _inheritsLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ ((module) => {

function _setPrototypeOf(t, e) {
  return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/gatsby-core-utils/dist/create-content-digest.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/gatsby-core-utils/dist/create-content-digest.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContentDigest: () => (/* binding */ createContentDigest)
/* harmony export */ });
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ "crypto");
/* harmony import */ var node_object_hash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-object-hash */ "./node_modules/node-object-hash/dist/hasher.js");


const hasher = node_object_hash__WEBPACK_IMPORTED_MODULE_1__({
  coerce: false,
  alg: `md5`,
  enc: `hex`,
  sort: {
    map: true,
    object: true,
    array: false,
    set: false
  }
});
const hashPrimitive = input => crypto__WEBPACK_IMPORTED_MODULE_0__.createHash(`md5`).update(input).digest(`hex`);

/**
 * Hashes an input using md5 hash of hexadecimal digest.
 *
 * @param input The input to encrypt
 * @return The content digest
 */

const createContentDigest = input => {
  if (typeof input === `object` && !Buffer.isBuffer(input)) {
    return hasher.hash(input);
  }
  return hashPrimitive(input);
};

/***/ }),

/***/ "./node_modules/gatsby-link/dist/index.modern.mjs":
/*!********************************************************!*\
  !*** ./node_modules/gatsby-link/dist/index.modern.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ E),
/* harmony export */   navigate: () => (/* binding */ g),
/* harmony export */   parsePath: () => (/* binding */ a),
/* harmony export */   withAssetPrefix: () => (/* binding */ v),
/* harmony export */   withPrefix: () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gatsbyjs/reach-router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-page-utils/apply-trailing-slash-option */ "./node_modules/gatsby-page-utils/dist/apply-trailing-slash-option.js");
"use client"
;function i(){return i=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i.apply(this,arguments)}function a(t){let e=t||"/",n="",r="";const o=e.indexOf("#");-1!==o&&(r=e.slice(o),e=e.slice(0,o));const s=e.indexOf("?");return-1!==s&&(n=e.slice(s),e=e.slice(0,s)),{pathname:e,search:"?"===n?"":n,hash:"#"===r?"":r}}const c=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=t=>{if("string"==typeof t)return!(t=>c.test(t))(t)},p=()=> true? true?"":0:0,h=()=> true? true?"":0:0;function f(t,e=p()){var n;if(!l(t))return t;if(t.startsWith("./")||t.startsWith("../"))return t;const r=null!=(n=null!=e?e:h())?n:"/";return`${null!=r&&r.endsWith("/")?r.slice(0,-1):r}${t.startsWith("/")?t:`/${t}`}`}const u=t=>null==t?void 0:t.startsWith("/"),_=()=> true?"always":0;function d(t,e){const{pathname:n,search:r,hash:o}=a(t);return`${(0,gatsby_page_utils_apply_trailing_slash_option__WEBPACK_IMPORTED_MODULE_2__.applyTrailingSlashOption)(n,e)}${r}${o}`}const m=(t,e)=>"number"==typeof t?t:l(t)?u(t)?function(t){const e=f(t),n=_();return"always"===n||"never"===n?d(e,n):e}(t):function(t,e){if(u(t))return t;const r=_(),o=(0,_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.resolve)(t,e);return"always"===r||"never"===r?d(o,r):o}(t,e):t,y=["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace","_location"];function v(t){return f(t,h())}const b={activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_3__.string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_3__.object,partiallyActive:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool};function w(t){/*#__PURE__*/return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Location,null,({location:n})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(P,i({},t,{_location:n})))}class P extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(t){super(t),this.defaultGetProps=({isPartiallyCurrent:t,isCurrent:e})=>(this.props.partiallyActive?t:e)?{className:[this.props.className,this.props.activeClassName].filter(Boolean).join(" "),style:i({},this.props.style,this.props.activeStyle)}:null;let e=!1;"undefined"!=typeof window&&window.IntersectionObserver&&(e=!0),this.state={IOSupported:e},this.abortPrefetch=null,this.handleRef=this.handleRef.bind(this)}_prefetch(){let t=window.location.pathname+window.location.search;this.props._location&&this.props._location.pathname&&(t=this.props._location.pathname+this.props._location.search);const e=a(m(this.props.to,t)),n=e.pathname+e.search;if(t!==n)return ___loader.enqueue(n)}componentWillUnmount(){if(!this.io)return;const{instance:t,el:e}=this.io;this.abortPrefetch&&this.abortPrefetch.abort(),t.unobserve(e),t.disconnect()}handleRef(t){this.props.innerRef&&Object.prototype.hasOwnProperty.call(this.props.innerRef,"current")?this.props.innerRef.current=t:this.props.innerRef&&this.props.innerRef(t),this.state.IOSupported&&t&&(this.io=((t,e)=>{const n=new window.IntersectionObserver(n=>{n.forEach(n=>{t===n.target&&e(n.isIntersecting||n.intersectionRatio>0)})});return n.observe(t),{instance:n,el:t}})(t,t=>{t?this.abortPrefetch=this._prefetch():this.abortPrefetch&&this.abortPrefetch.abort()}))}render(){const t=this.props,{to:n,getProps:r=this.defaultGetProps,onClick:s,onMouseEnter:c,state:p,replace:h,_location:f}=t,u=function(t,e){if(null==t)return{};var n,r,o={},s=Object.keys(t);for(r=0;r<s.length;r++)e.indexOf(n=s[r])>=0||(o[n]=t[n]);return o}(t,y); false||l(n)||console.warn(`External link ${n} was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links`);const _=m(n,f.pathname);return l(_)?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_gatsbyjs_reach_router__WEBPACK_IMPORTED_MODULE_1__.Link,i({to:_,state:p,getProps:r,innerRef:this.handleRef,onMouseEnter:t=>{c&&c(t);const e=a(_);___loader.hovering(e.pathname+e.search)},onClick:t=>{if(s&&s(t),!(0!==t.button||this.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){t.preventDefault();let e=h;const n=encodeURI(_)===f.pathname;"boolean"!=typeof h&&n&&(e=!0),window.___navigate(_,{state:p,replace:e})}return!0}},u)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a",i({href:_},u))}}P.propTypes=i({},b,{onClick:prop_types__WEBPACK_IMPORTED_MODULE_3__.func,to:prop_types__WEBPACK_IMPORTED_MODULE_3__.string.isRequired,replace:prop_types__WEBPACK_IMPORTED_MODULE_3__.bool,state:prop_types__WEBPACK_IMPORTED_MODULE_3__.object});const E=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((t,n)=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(w,i({innerRef:n},t))),g=(t,e)=>{window.___navigate(m(t,window.location.pathname),e)};
//# sourceMappingURL=index.modern.mjs.map


/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1114307673.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1114307673.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAACbElEQVR42k1STWgTQRj9aJLu/O1sdzfZbbdNWmzUKgpqhSI0rYLWY73Ei9STCNKTJ+lJ8OZBvXuz4EX01psHQUQEzxqoNtlZt/nZxP7aJq0242xF8cEMfN+895j53sCLYjEBCuFw9unO9JSsnju7u4WRFFriQa0/U9y+dFHWr87sb1+bleHJsXcVgBO+pu0LSrsBwdLvTW3WDeNI7HEfoAdkvCnUOX/2w3Fk1bLabYRkPZV42BrJ3pTz83JrYeHn3tycjPL5jw2AMzXP67YKU/J7oSDrrrvTBBiLPQ693gAk4yLAqUeVZKJTSSaFQGjvG0H3BMOzvm3t+q6zWkbadiXZsxTq+jFfZ6uBweuiz4iEzlZqGoz8M/wLA8DMAvYuIBieoOCqViIPoHkA9hUAZzqT6Xddl6p+0gbwRgGyEwAjwwB98D9WHMdt2rb3AeOh9xYevA2Qep4zzGVV+4QMlLK2183ntWW1hI29EgbvtYlyS6dzZsz9nEsPCKUPlLbazzIQ6GxT6HpbMNoWhOxHfagQMLZYY1Qqw401xmRAtFsh1u60KJUqjI2q6oUGX1w12aTS/vINvuNz/cCn9Cs0DS4brtttWJZc41y2OJmJdPqy47iyYZodaVqyyfl8yzLudl1XRul0p53OyIiSVxsGvbyuNJHnHazbadnQ9SoIgj5VCF4pM1r2Ga0Ijs/7BD3xKYnKGJUEJeshR9cDm99Qr1jzCS6p2zRCzh6LtDEuuO5XGP2iggoCnb6FQYCheMCnKHUnVTDxXAcA0qMIZdXnyh1XARRVQCoIPa5j7lH8Z9aK2nvIQygXn40DGL8BIYnnSYLSosYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/fd63ca579a433f456c3197d9a795c829/2f8fc/YelpForHelp.png","srcSet":"/static/fd63ca579a433f456c3197d9a795c829/ce499/YelpForHelp.png 1216w,\\n/static/fd63ca579a433f456c3197d9a795c829/90c34/YelpForHelp.png 2432w,\\n/static/fd63ca579a433f456c3197d9a795c829/2f8fc/YelpForHelp.png 4863w","sizes":"(min-width: 4863px) 4863px, 100vw"},"sources":[{"srcSet":"/static/fd63ca579a433f456c3197d9a795c829/50f45/YelpForHelp.webp 1216w,\\n/static/fd63ca579a433f456c3197d9a795c829/413ff/YelpForHelp.webp 2432w,\\n/static/fd63ca579a433f456c3197d9a795c829/beb6a/YelpForHelp.webp 4863w","type":"image/webp","sizes":"(min-width: 4863px) 4863px, 100vw"}]},"width":4863,"height":2193}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/116016356.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/116016356.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAACE4AAAhOAFFljFgAAABXUlEQVR42pVSv0/CQBh9tHhVkB+2FqwSMPgDY4iLMbK5a0LYmVjYiKM68V+4OrkwOruYOOhu4mLi4uzk4GR97X3VUsTol7x+l+vdu/feHQDUiAqhMFmp4DNstext113nsCprV4hS9H+s9oFVNodIE2b8ny8b/F7Pfel0nCsgcwfkOT/DaQO6K+np8IBHpRoczBNlwsaUOgaKROMU2DwC6qKyEtvnhOTvSm24mrAimEsqDNTdtts5UZWWbnypiteZPiEgzBI56WOEr/1+4brZLJ9T2U0m4z0xvxOgIPtygnx4SFXLd5P5JbPcZX57wNIOyZjRcv2bMA4DvmWtlbWqkthNJRW+dbvePW1zaB0As/5PtxvVs1JbkmFNgp5Y/DEYWJeetzjkiwhsX7AfUq04i6CjetDXHj0Bc4plg4/QYkj2Aq3y5mz6LULbLgqy+GuR0PzV5n9rNEmYwpQDPgHYhDJ8jTdJgQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/12eed88f6a38bb1bde42eaf8c9bacd7b/852e8/VideoConceptDirection.png","srcSet":"/static/12eed88f6a38bb1bde42eaf8c9bacd7b/d40a6/VideoConceptDirection.png 1221w,\\n/static/12eed88f6a38bb1bde42eaf8c9bacd7b/cc5e0/VideoConceptDirection.png 2441w,\\n/static/12eed88f6a38bb1bde42eaf8c9bacd7b/852e8/VideoConceptDirection.png 4882w","sizes":"(min-width: 4882px) 4882px, 100vw"},"sources":[{"srcSet":"/static/12eed88f6a38bb1bde42eaf8c9bacd7b/de6a8/VideoConceptDirection.webp 1221w,\\n/static/12eed88f6a38bb1bde42eaf8c9bacd7b/e9902/VideoConceptDirection.webp 2441w,\\n/static/12eed88f6a38bb1bde42eaf8c9bacd7b/f33c9/VideoConceptDirection.webp 4882w","type":"image/webp","sizes":"(min-width: 4882px) 4882px, 100vw"}]},"width":4882,"height":2739}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1230991409.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1230991409.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/0lEQVR42i1Ry2rbUBBV131t+ktZBIeQBOLgyODk07pIS1cJXbgUmhYCdWKwnBAS+SVZb0tXsl5+RZavND0OvTAM5zBzzsxcQfj/SBDevOadnbdFpWLR4SGVtRqn/X0q9/Y0qlRkqlaJGo2Cjo+Jdnc9OjiQgKkURU71OtHRkSsQ0ftyOv2A/BHxbnZx8Wldrf7koigX5+f3m1pNBm7mJyeXG1HscXC8XpeBrzenp1/52VmfNxpdhJyL4rVAYRhyxqJQUaYbxhYURX8pjh9Sw0iCwYDNLSuhJJEK8JnrpkvLYkvHSYowfObT6a+Vbc9fHMdDJDljz0IZBCZErVTTTO77jFBEQdBGo5eMx8bSND1wLcTvteOwF9s2EFtOyj2vubKsAIPoEPayyaQroHk41/XRwjSHGYph0MTEN7Gi6JGiDBJV1XGSPyvH+bE1CIfDQTga6TBsYZCr9WRiOY+PfWAd27UEOM1iVZ37/X6aaNoaZBuCvXg8zlJdf+UK338qgqCDCfJIVVPkDFiB4A0m5Gqnk8BsDaxsJ7yDSztznLvcdbsQ/IJbfEehhKLbuWF0YXBZMPZt43n3ELoFlpCb6P2M/IDcAtfdbifgA8pgNCKv1ytwbMIHPBVxbIInCBYwoDKKtNz3ZaxOuFWBW1MeBC7NZhItFrS0bb6tpzR1/wHXKhCRfuyLnwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/ced8ed4ac4aa825cff51c02cb50577ce/17603/YelpPreliminaryResearch.png","srcSet":"/static/ced8ed4ac4aa825cff51c02cb50577ce/06564/YelpPreliminaryResearch.png 835w,\\n/static/ced8ed4ac4aa825cff51c02cb50577ce/5f477/YelpPreliminaryResearch.png 1669w,\\n/static/ced8ed4ac4aa825cff51c02cb50577ce/17603/YelpPreliminaryResearch.png 3338w","sizes":"(min-width: 3338px) 3338px, 100vw"},"sources":[{"srcSet":"/static/ced8ed4ac4aa825cff51c02cb50577ce/a6c2a/YelpPreliminaryResearch.webp 835w,\\n/static/ced8ed4ac4aa825cff51c02cb50577ce/60cb8/YelpPreliminaryResearch.webp 1669w,\\n/static/ced8ed4ac4aa825cff51c02cb50577ce/13e30/YelpPreliminaryResearch.webp 3338w","type":"image/webp","sizes":"(min-width: 3338px) 3338px, 100vw"}]},"width":3338,"height":1358}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1532996831.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1532996831.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAACxLAAAsSwGlPZapAAAC5ElEQVR42kWRbUiTURTHz5LtefY8m5vvzk2nNrFSy1gpBs4W5uTJjb74IXQqRqWI1dSyHDZKGkmiJIFYfUnoQ9qLLxSk4ktayUwTS3zbdHNZTnSpJJmotztTvPC755z/Pfd/4R6w01ydk8NG3/aHrk2I/JATQDH9Y+ZR8flsVJ2Vudl6o3j+4dSIdCxT+3UgQ4tGqx+goVPK9lmAA9NCwV+zh3D9l0aNZs+oKsG15nhUCWKxUONJ5XpP9FGEAJLNS0t17zKyUNOx46hdqVwuT9OEVzHM5G0mBZUkM6g2KakX90VPxZ1A3frSDUtOLlqgqJptwwmaTF/ksCcreDxTncB9GDfKx2aspReysydOq1SDBYWFHQZNYsDn3p76weGh4abm5hFdqb7WChBipSmThab6MRMzNFm4bQh+fjRwuWISIFAAIPwvggdGjAnGCFxCaFycb3xERGBCKuMfrtHwseTGBZDs9IkwxPbNFg6EVVPsI2VCUmrM03opGUYaIg45zCQmHoyXy0UtitiwviiZ5K4HHZkXEOD1BED6BT80jt/IJkFaRkLgC+zxiYDgFR74gCXi0MpYVNSGDeCtY3K8xnD5CqpITl59qdWaW4139Ca1+neb0bjcERW5NsAj9TZv78lRifiP2V+EvtPkYztFNtrc+Vs2Hn/FLqAcsGg0bq02NKCfAB8ddtuzLl0BehUTi7pTUuarNCkVlWoNqr2Us1GdpEKmuNjyBbl8rv9mCbLm56NlT0G9kyI714OCkFMavLnkK0RgKb7ebmtr+zAtFt23D/Tr8nRX+2IUis7coqKGylv6tDctLR1L8462J3VP3xefZdIdLHhuIYiuaYLos1LkNQuXuGfmcPrMbHanjSZeA3h6ivFQJBAa6vp8GuOPNz8c+TKZjPChKH+c+55LkHtflMvZOPcBPni5zjGumgsiEQW41zUoXHIDXKZ7E051MxgM+3DC2om7sHZw26kB7WmwW/8DKscU4Z3jdC8AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/8921fc3f67c7ce486427d263005b4422/9627c/Demo.png","srcSet":"/static/8921fc3f67c7ce486427d263005b4422/bec83/Demo.png 1663w,\\n/static/8921fc3f67c7ce486427d263005b4422/2d790/Demo.png 3325w,\\n/static/8921fc3f67c7ce486427d263005b4422/9627c/Demo.png 6650w","sizes":"(min-width: 6650px) 6650px, 100vw"},"sources":[{"srcSet":"/static/8921fc3f67c7ce486427d263005b4422/3b42a/Demo.webp 1663w,\\n/static/8921fc3f67c7ce486427d263005b4422/90fca/Demo.webp 3325w,\\n/static/8921fc3f67c7ce486427d263005b4422/eb74d/Demo.webp 6650w","type":"image/webp","sizes":"(min-width: 6650px) 6650px, 100vw"}]},"width":6650,"height":3183.9999999999995}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1664411752.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1664411752.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAACaUlEQVR42m3PXUhTcRgG8Lev6YUVlgZBSHkRXQRdeBF1YR9qqFQI1XIu20bNGbbZ5pxnzvmRKJZCDtG0Bn5HZliGGjUPmuIwI9MsJLU58UyUQomalJ6zpzmri/SBl/fq//s/L5E3Uomkg9HrobmRuqxLT/cYDAZPhncbjUaP0ZTpMRgZTxrDeAxaLZ9x9AgUURFjBGzKJ9qXQ3SwQCQ6sI1oB60OUaalhC2vLcXDJ/f5pv5ejE6O4vu8C0mFWTC3NKLrxzzaZqfw3OUQ2h0fUPCo3ul9tmV3AAWFEAWGEm0PIwraSrTTByqzUzr7B3sw8HaY77XZMDv+GV9GBhAWcRjxd26ifqgPlRWFqCvLE2o+DYJprPaBRf7+ISUi0f4y71T4+YXG/QVvZUlY95Qdw/YOfpJtx+JIJwbvKdFsOg1LgwnFd7Wo151HcfwJoaJSBcaSvAJuDg6mAO8OpFXIb+UTH1gkPsR+cwxjbmaadznG8HPpF6ZG2vDeZsabJjN6WipRfe0UzJdiBGuuHOLLkT6QVrOB/o8+eg+7MDsBzi3wM/Nf4V5cwthHOx5YVXjRxuBxkQKy6HBUaS4I3dZUmHOUzn9tiDauQWWxe9mF8XfgO18tufvsAgCBmxgSWstVQm+rTnjZqBS00kihLPH4cretFHUtBuefE9dvqFLsYquKZahNTuKf5mrwrO42aix6NFu1eM2mo6tBjZiIkzgbFSfkW0qgyQv3gsfWP1kikadelJ4ZjZfEzikVsumkq4mcTBrL6a7IOROj43LyrnPZRg0nladwMqV2Wq1hXGLxuZmEhMQ0tdqypuVv+pFIhXJfBScAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/cbc11270e38b0e6a0210371f2bd550e5/90276/YelpBusiness2.png","srcSet":"/static/cbc11270e38b0e6a0210371f2bd550e5/aeb8a/YelpBusiness2.png 1235w,\\n/static/cbc11270e38b0e6a0210371f2bd550e5/f1445/YelpBusiness2.png 2471w,\\n/static/cbc11270e38b0e6a0210371f2bd550e5/90276/YelpBusiness2.png 4941w","sizes":"(min-width: 4941px) 4941px, 100vw"},"sources":[{"srcSet":"/static/cbc11270e38b0e6a0210371f2bd550e5/3dd78/YelpBusiness2.webp 1235w,\\n/static/cbc11270e38b0e6a0210371f2bd550e5/1ec07/YelpBusiness2.webp 2471w,\\n/static/cbc11270e38b0e6a0210371f2bd550e5/faebc/YelpBusiness2.webp 4941w","type":"image/webp","sizes":"(min-width: 4941px) 4941px, 100vw"}]},"width":4941,"height":2144}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1668783713.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1668783713.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAABuvAAAbrwFeGpEcAAACqklEQVR42gGfAmD9AHBqZnx2c4uFgZmTjaefmLSrpL2zq720q8vAts3BtszCtsi9sb+1q7OqoKqil4mFf3d2c3JxbWNiX2dlXQB0bmqAe3eQi4afmZOtpp66sarFu7LLwbbRyL3OxbrJwbbFvLC+tKq1rKGtpZmKh4F4d3VzcXBkY2JqZ2IAd3Jtg356kYyHoJqUq6SeurCqwrqzy8XAwLaqwLetubOtu7Wvv7astq2hq6aYjImCd3d2c3JyZWVlbGplAHdyboN/e5CLhp2Ykqefmr2yrnpvaoqDhIeAg31sYo18cIFyaYd3bJ6ViXRhVWtrZ3V1dHBvcWRkZm1qZgB1cW+BfXmNiISYlI+jnZeSi4htY1lCQ1IkNmV0b3RtWUxsYVxzYFdiWE46KiRcTj9ycG1qam1hYGNqaGQAdnFvgHt4ioWCmZSPpaCaWFlYUkc+Rzo5NC86XVZTW05KgHhzvbWzk4eJXEgyiWQ2Z19ZY2VqXVxga2llAGBeX2ZlZ2xrbnZ2eWBfXyIhIQ8ODSgjI6Gcn3l0dpuYnZuUlIqAhXJtdDYwLh8bGktMTVtcYjc4Ojs5NwBITVROU1tXXGVWXGcdHyQMDQ48MipGQDx4dXx+e4NbV1lQS0g/P0I0Oj4iJykMCwxARUo+QkcgHB0TExUAR0xRTVJZVltjVVxlP0ZQJy03Pjs+Pz9ELCwuOTk/MjY8Ojo9PkJKQk9YRlBTKCkqU1VWVlFQSC0lQT01AEFESUNHTEVJT0BGTTlASkRJUVFRUVZSUGBbWWlmYn16dkpFQDVFWU1fc3t3a4R8bpOBYHNfQ2xWRWlmZgAXFxgXFxgWFhYWFhdZVVOCfXarpp2ej3ufiXGvopm2q6StpZ2Vko+koJ+spZ2blIuimo9iaHNpb3pqZmdi7x7sFFHrpgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg","srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/6e816/YelpClientReveal.jpg 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/af85c/YelpClientReveal.jpg 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg 2734w","sizes":"(min-width: 2734px) 2734px, 100vw"},"sources":[{"srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/aa42b/YelpClientReveal.webp 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/8ae20/YelpClientReveal.webp 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/fdd4d/YelpClientReveal.webp 2734w","type":"image/webp","sizes":"(min-width: 2734px) 2734px, 100vw"}]},"width":2734,"height":1537}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1872271449.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1872271449.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAAB+0lEQVR42l1SyY7aQBTkmhxz4s9GI+aaRImSSInmmhzyGZy4cEGIYzSHYRkhjG2Mhx0JBovNLGa12Qx0+6XaTA7hSaWnbverrq5ywDQMr9fpeNZs5nGU67rcNE0+GAwYOi0WC7tWqwVVVU0Oh0NyHIeh6Hw+/4fj8egRKrAdDmhtDsk9HsWawEmTyYQw7Im+Xq+d6XQajEajyWw2S/V6nTUaDbpGpVK5EEqq+rtUqfzSNe0nBr8eDodPu93uM4gEvmy32/c49zYcDj9FIhEqFAoMaukakiR5QnkAz8k363Wp1WpJnU7nCci8It3tdrPAHxC/i8fj6UQiQbquM03T6BqyLAvLKACPCIqEB7RcLsm2bdpsNqJ7Yg+eOcJDtGQTT1MVhUGlr0r0f4T5fP5CCBIurAMJhxo+Go24ZVl8NpsxcRnWdjqdDp5Op2QfoZTLZQa/qFqtUqlUomKx6ENRlAshbhZm+un2ej3e7/dFwnw8HjMRCtY2Dgfx/bENIk2WT/rzM4dCbhgG3+/3HD7zDdL3Q8GGny4UEFTRfD73AZXearUS3VGUWpBBIY1N2lhTdnBdOmBO/C6ihGU1kbJlUeDh4eEeRn/LZDI/crncByi6RSChV9y12+2bWCz2JpVK3ejN5r1cKHw3Xl4+gucWHocEEFoIcyG239/9BVVYcJqvuhtSAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/71f118d44ae014ebc208717a8b853def/88209/YelpBrands3.png","srcSet":"/static/71f118d44ae014ebc208717a8b853def/65144/YelpBrands3.png 1241w,\\n/static/71f118d44ae014ebc208717a8b853def/9fdec/YelpBrands3.png 2481w,\\n/static/71f118d44ae014ebc208717a8b853def/88209/YelpBrands3.png 4962w","sizes":"(min-width: 4962px) 4962px, 100vw"},"sources":[{"srcSet":"/static/71f118d44ae014ebc208717a8b853def/af8e0/YelpBrands3.webp 1241w,\\n/static/71f118d44ae014ebc208717a8b853def/884fc/YelpBrands3.webp 2481w,\\n/static/71f118d44ae014ebc208717a8b853def/fad73/YelpBrands3.webp 4962w","type":"image/webp","sizes":"(min-width: 4962px) 4962px, 100vw"}]},"width":4962,"height":2186}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/228322184.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/228322184.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAACE4AAAhOAFFljFgAAABm0lEQVR42jWRP2sUURTFf2rM7Oz8y8zuZHbCbFaXxYVAtFjEkGYKowZUxCIfwCZ+B5tpDCgmjZhCQYSATUAQCyGVXSoLC3srsYifwee5u9ni8B733HvuuffycT1J78Zkbo1Fw/cJl90Gvmu4+HlMtO771e4wTVxTL7g5t8Ol4zXC5YCi26achHRdzcLvB2WbV9eLIIZsD4pD6N+H9NjEJdiUSgh7OekwIU0TYPHrCM+4k6IIXuNdfQ/Dx7Bcw9LZuBNhxEtYWYHOE8gbEdbNit6WtG8rruRwDNEnFf4aJEsSVh3BO7k/bNHfFKeQ92975HEkhyV0M5BRfMPcxWmF/wKqh3K/A70fEnRVNV1HM6B1U82eQ6mGvSPjJprIBHMFVjWqZrLu8TclO8eFNznhU48rBjnUEETzZh+UY0buSfCWGm5B4upBixMJ7sLqjZlY26xPl6+iLxr5mQpsJY9mfOvn+X4Pquk0+daM6+vfsXvwdzuL/9wpAmfQlaao89CK3GYnchNd2HDOn1lMnL3718KuYW8U5vaebsTZf9uobERl1pi7AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/d6ce95c601154b231330a94063d9b0bd/928e3/YelpABTesting.png","srcSet":"/static/d6ce95c601154b231330a94063d9b0bd/1ee06/YelpABTesting.png 1260w,\\n/static/d6ce95c601154b231330a94063d9b0bd/d58b2/YelpABTesting.png 2520w,\\n/static/d6ce95c601154b231330a94063d9b0bd/928e3/YelpABTesting.png 5040w","sizes":"(min-width: 5040px) 5040px, 100vw"},"sources":[{"srcSet":"/static/d6ce95c601154b231330a94063d9b0bd/776c1/YelpABTesting.webp 1260w,\\n/static/d6ce95c601154b231330a94063d9b0bd/24e80/YelpABTesting.webp 2520w,\\n/static/d6ce95c601154b231330a94063d9b0bd/7d4ec/YelpABTesting.webp 5040w","type":"image/webp","sizes":"(min-width: 5040px) 5040px, 100vw"}]},"width":5040,"height":1788.9999999999998}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2448776246.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2448776246.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAACE4AAAhOAFFljFgAAACH0lEQVR42k2Sy08TURSHr4rWVkutEqPRhS78azQ10YmmARYEki6ARWMNLGrsC4QUKD5qGxZs0I0KkbDALnhEYhqsAdoUWgtNMxnJ0MnQMi9mmnFyPbcMiZN8uTn35n753XMGMdksxeVyT3iGeVQtlag/W1tPSc0C9VLpMT44cOmyfF8D8P7+Q8xxD37Mzl5HCN21WCx3yGpyE5EPLgwbHDcip9PvjHI5igUhogtCGB8eDsHZK6zrQWlq6gsBG0aQ7O1tbNyDq1ftdvs1WFuBS8Bl4CxSaToo12ovBbc7pyYSMxjjQb6/f0VdXo5hnn/xF2Ov1te3osEenD2DlAG2WCSJWq1W6y0iBi4CVuA8atB0SK3XA2J7e15NJj+AYFBzufb0+fkErlYDtYGBlOTxpBWfbwmEzzHDhNRKhTz1is1muwGrA3CSGriAdIYJNoiwszMnTUx8EgqFYZGifktzc0mlWBxqUFRB6u7OyCdC33/CNofDQUQtzWQInWlCEhKh0tGRbYTDXxup1FsFJEo8/lFbWIjLbnf+uKsrc+z1Lsmi6CfC+smT2yAhGYTNfLKlKTagJzpJ2NubliYnP6tra6+Fnp5fyvT0jLa4+F7weH4KXu93ye//Jq6uvjFoOmz20Gn20GkOhAzmHII+hYCIuL09drSzE1UqlRF2fT1Wy+ejwu7uaDWTifGbm+NHUEvl8qjBspHThOZvcxs4nXbLP7IKUgAEU2WhAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/81098385b8771834b93a86f6ef0ef416/001e3/YelpUserSurvey2.png","srcSet":"/static/81098385b8771834b93a86f6ef0ef416/9c7a6/YelpUserSurvey2.png 1243w,\\n/static/81098385b8771834b93a86f6ef0ef416/c6ac0/YelpUserSurvey2.png 2486w,\\n/static/81098385b8771834b93a86f6ef0ef416/001e3/YelpUserSurvey2.png 4971w","sizes":"(min-width: 4971px) 4971px, 100vw"},"sources":[{"srcSet":"/static/81098385b8771834b93a86f6ef0ef416/8b180/YelpUserSurvey2.webp 1243w,\\n/static/81098385b8771834b93a86f6ef0ef416/de70e/YelpUserSurvey2.webp 2486w,\\n/static/81098385b8771834b93a86f6ef0ef416/49354/YelpUserSurvey2.webp 4971w","type":"image/webp","sizes":"(min-width: 4971px) 4971px, 100vw"}]},"width":4971,"height":2108}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2612012717.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2612012717.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/ElEQVR42l2SwU8TURDGh7ZI1VpasLUstVRiNqElZoHgxRjkxgVP9tDExBue9rC9eGwCJ8A/gDV68mBsNGhPJhy66Km3SmqTntgDJpQ0bkO6Ye12Gee9XZLal3yZedk3v/fNvAUACJD8XhyBoZXL5fyiKN6OxWIh2t4ihfnZSiWwghhAyhHRx87Ja2tjrOYaiSVBkm8YWKFCFi3LylDhN5LmkMzT08OWKGo7E5OHGWnh+1I2+4gX0A2jnkP/gNOrHEqlErsQTNN8RjB0aLHY03U0w2F8JQj9qeWH+GB+XubAFwBp6iVGaZQ04ekmuBcxIIcTI/jXMDad8/N3f05O9j6Xy+rm+vredjz+9uPs/dc/UqkoII7AG4BkxoWEhhQcdIidTh77fW5ROzjAfP45phaX8MO9WRunBbQEocAdPga4Ow4QGRj4uOeSA4vFIp8httvTdqv1nsDlerW6ryiFL8tPVvd3JekrJpOfLhOJuau5s1YFcKEMOOlBb7CPqqry1rvdrmTbdrXvOEfY69XQMH4aFxc1Y2urhtHoEc7MrHLaLkAc3BmGPUjIi/89Cr3yU3TXJVoWOmdn+LvTwW6h0MdIBDGdfsmBKzRDDzjl6Q4p4TlnLfsURbnO/rNGoyHqur7YbDalVr0uNY+PpV+attDOZufUjY1RWZbH/gG5buWYKAhnLQAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/aefc04a984fd74f48e1bd93b83f9728c/91277/DesignSystemDirectionBrand.png","srcSet":"/static/aefc04a984fd74f48e1bd93b83f9728c/6c643/DesignSystemDirectionBrand.png 839w,\\n/static/aefc04a984fd74f48e1bd93b83f9728c/4d6c4/DesignSystemDirectionBrand.png 1677w,\\n/static/aefc04a984fd74f48e1bd93b83f9728c/91277/DesignSystemDirectionBrand.png 3354w","sizes":"(min-width: 3354px) 3354px, 100vw"},"sources":[{"srcSet":"/static/aefc04a984fd74f48e1bd93b83f9728c/b7857/DesignSystemDirectionBrand.webp 839w,\\n/static/aefc04a984fd74f48e1bd93b83f9728c/ec590/DesignSystemDirectionBrand.webp 1677w,\\n/static/aefc04a984fd74f48e1bd93b83f9728c/aaefb/DesignSystemDirectionBrand.webp 3354w","type":"image/webp","sizes":"(min-width: 3354px) 3354px, 100vw"}]},"width":3354,"height":1478}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2664848104.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2664848104.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAABYlAAAWJQFJUiTwAAABt0lEQVR42iWQu04bURCG/Q6koKFKKiQ6JGpeIDwB6VJAgStwEyMewYmLNLGrYJwQyJpcREgciC8gByKBjTBkvZbWcBZ82Xi8u8eydtfnz/F6pBn9Gs18+mdCDufQr69hHB+DnZxAzeXA8nnUjnI4zxW8oe9DRnQwGKy7rotKpeKdX1ygcnmJel2Dqv5FuVxG9eoKcgYhS5Z/2Sw6MzNoz8+jOTmJh9lZtGU2V9c8X4gASETrI9Hn3DObTTiOjTt2j2r1BrbVA2MGuMPHwO7+PvStFFpfP+Fs4hH06WkYc3O4XVnx/OEwAFoS6Eu30rFnt9qyNUS2+Acbr3fQo46EG7BtG6Ee54JKvwW9eSmcb+/EwfNloT9+IlpTU+J+ackNDgZeSIfRkcgXCu7Pw0NRKpVERlFE9fsP4XTbQtNqgktWiLoEo9GAxW7xoNbA9AYMVYVZr4Npmtfv98cOLSv4YSSy5j1bXEQ4HMbC0wXEN6I42NtGMf9r/ENV1Si1labdzB7tKAopmUygP37+QpvpdOf09GwEXDVNM1IoFhGLxTqv4nFKJBKUTCbprdx9v/2BUpspumOM/gNbyYu06NJPAwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/86fb8b9471832c97f138e0e1df122342/9abd1/YelpBrands2.png","srcSet":"/static/86fb8b9471832c97f138e0e1df122342/76554/YelpBrands2.png 860w,\\n/static/86fb8b9471832c97f138e0e1df122342/97366/YelpBrands2.png 1721w,\\n/static/86fb8b9471832c97f138e0e1df122342/9abd1/YelpBrands2.png 3441w","sizes":"(min-width: 3441px) 3441px, 100vw"},"sources":[{"srcSet":"/static/86fb8b9471832c97f138e0e1df122342/17af1/YelpBrands2.webp 860w,\\n/static/86fb8b9471832c97f138e0e1df122342/fb4e1/YelpBrands2.webp 1721w,\\n/static/86fb8b9471832c97f138e0e1df122342/506a3/YelpBrands2.webp 3441w","type":"image/webp","sizes":"(min-width: 3441px) 3441px, 100vw"}]},"width":3441,"height":1024}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2728077885.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2728077885.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAACSUlEQVR42mNgAIL29nbBWbNmySxbtkwqKSkJiLOlQOxZixfL1Pf3CzBAQb2amki7vLhCh5KkXIekoNwELSW5PA4OuXQGBoUKKSlhmDqGAwcOznv19OnPt29ev7x+/fqbG9evvnnx+vXLd5cu/Ty+efMMmLqVWvKrjuor/T+gp/ThoLHa530aMp8vJ4R9uFOQ9n+ZlvwiuIE3b9xec+X+h//Hbrz+8+Lt+/9v9m75/3fSxD//Z83+f3XRomUwdTv0lLZ8LM36/6Sx8s/tcJ//d6J8/29YuujPjm3b/u+c1L8GbuCqjvo1y1fs+L/5xN3fO3du+defkPDvp53d7//WNv8vlZfDDdykp7zlaUbM/ytR/r/PmKj/u1Nf8W/N6hW/O+sr/u8/sB9h4IH9h9ZcvHjl/6r+7j9LOur+T/Rw/P/f1u7Pf2Pj/1fb2+EG7tSS3fLC0ej/NUvtP5cVBf7fLsn5/+Te7T+Lelv/L126dDVMHc+SZSv3Hz974f/exUv+HJk45f+e1vb/J9o7/lydMu3/golTdgHVsDOUdvL22Zgf2+xo8X+Fg+WflZaG/7eWFv7fuW7l3572jv89fRP3S0pKcjFER0fz+bl4moT5BBpFpWQaB2TmGcc2tRt61DQZ2lbVG3mHhhqn+aRxJSX58YYC5SPKawxji2oMwwqqjEJTsgxC41MM6utbDKJCo4z9/Px4wU4sY2CQmcLAIL+ZgUF6LQODmBYDAxtQmAWIWYGYCeaVXgYGoS4GBuVuoNpVQDZUHqYOpIcRAPRUDV6ufkjGAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/67c41678487117f4650695ea27cc6f2b/33bd0/YelpBrands1.png","srcSet":"/static/67c41678487117f4650695ea27cc6f2b/dfa36/YelpBrands1.png 865w,\\n/static/67c41678487117f4650695ea27cc6f2b/8ce31/YelpBrands1.png 1730w,\\n/static/67c41678487117f4650695ea27cc6f2b/33bd0/YelpBrands1.png 3460w","sizes":"(min-width: 3460px) 3460px, 100vw"},"sources":[{"srcSet":"/static/67c41678487117f4650695ea27cc6f2b/f22b4/YelpBrands1.webp 865w,\\n/static/67c41678487117f4650695ea27cc6f2b/69abd/YelpBrands1.webp 1730w,\\n/static/67c41678487117f4650695ea27cc6f2b/66554/YelpBrands1.webp 3460w","type":"image/webp","sizes":"(min-width: 3460px) 3460px, 100vw"}]},"width":3460,"height":1456}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2930725601.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2930725601.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAABrElEQVR42j2RuU7DQBCG/U48BS/AO6DUHIKGCnFINDRIHC1CFNCgkBSWkAIShSHOZSe+kmycKM5lYufyHsOsQbG0mtXY+/mbfxVCCNi2DdVqFTRNE61WC6IoyiRJ4gI+WEW73QbPslg4GkGtVrtbLpe38t18PmeLxUJWwB74nkeVcrkMX5oGtmWBruvpYQlkjKVAzrmYhCEMfJ/x1QqI799hLwVa+BPP86Ber8NwOJTnqGI6DlQQVmk0oPDxIVzXhdlslqGUroGyCiGYrGiyBpqmyeT3CIZutwvT6ZQqUxz1R1UhfH+HkBCxQPUZGsZRlAJTFmPAKWX/Y66BhmEwCZNx9fv9P8PR9zcfvL3xMSGMYAZeswkNx9kuGobdwDyDyUSC5Fr9G96g/bXc93q9JAgChrmzMAw5ApdKhIC404EV59APAkEQYup6xnh6cmuPj9BRVYEhAWaxHhkvKjXEcVNDueTFxHFMlYqqnjufn6eJEIfY2Ht9fj7UcrkN/erqoHl/f0FeXs4GDw9HrFDYQbMjBG6WSqUtzO8ym82e5PP542KxuD8ej/cxw91fUOXym2cxg6AAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/e0b3f3cea68fdb5648270521142c7fd7/b83ed/YelpBusiness3.png","srcSet":"/static/e0b3f3cea68fdb5648270521142c7fd7/e4495/YelpBusiness3.png 841w,\\n/static/e0b3f3cea68fdb5648270521142c7fd7/3d579/YelpBusiness3.png 1682w,\\n/static/e0b3f3cea68fdb5648270521142c7fd7/b83ed/YelpBusiness3.png 3363w","sizes":"(min-width: 3363px) 3363px, 100vw"},"sources":[{"srcSet":"/static/e0b3f3cea68fdb5648270521142c7fd7/45352/YelpBusiness3.webp 841w,\\n/static/e0b3f3cea68fdb5648270521142c7fd7/e1985/YelpBusiness3.webp 1682w,\\n/static/e0b3f3cea68fdb5648270521142c7fd7/ce296/YelpBusiness3.webp 3363w","type":"image/webp","sizes":"(min-width: 3363px) 3363px, 100vw"}]},"width":3363,"height":1243}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3116466266.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3116466266.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAACqklEQVR42m1SbUhTURg+UXcrTbTvtNBaUiSkRB8/VrKySJH8IUYU/UiI+SPRnM3EjBmKOqf7UDPzOxhTnFZUSE1d22IzzdQkIdCKIMotU0Lv1XV3z97uuRv+8oWHc7jPfR/O874PevH02afu7h64Ic/y9fY+AbOpcxAFS6PRZLx1ukBVct9/t7gY2+x20Ol0lwinj4mJaBSJ4hpEosOVYrGE/xQWjtAW9OF5Hw1+P7Ach4Gv0dHRGZ4Uk6amxiYF9nHAYo7jKRZjP3R1dd0inFQqDeMPIhTL4yCPXTy2I3vrY3ZxfgHm5jx4haHB4XCsCtblKu8sjk3CX4bmGJrxMSteMJmMguCUTLZ5VizeB6GhO38htANCQiKBvLC9owk368pAW6PD1qEJ0D9s+8n/v4k0VaurizxuD/z+s8At0cu+JYaBlvb2IsK1xMVtbaCo+PMIRR9DKDKZRyIPpC0r9JZkX4PLF5Nxac0DkOcWfJPJYjaSpgq1Wjnh7IdXpkfcj6/T7MzUOFSX31MQTiKRhActHwha3s8jGuXlK2ltXQNkZlzAqWmpID17bma6NkewXFlerpgcfAk9FYXckKWPnR4bhqqifMHy7fj40JsI7c7i53adP2sDY1qHFCo9rSyth1MnjuOkM0mQcDLxS0pKrCBoqKpSLLucMP/xM6cfYFj38DgYCwsEweyoqG05FHU0m6KOKCgq4XTglRGoRd+8WKuqh5yrmVgjl8OVtPRpFBsQ1Ks1eV63G9wM5lT9XtbzfRY6O9pyA1s+RLa8J4i9gl2yZZfLSZO4sP+8QmxGRoZXt2wwGBQYk8SAEBtyMZkCsbHZbBvQWtXa1vHeOfQOLK8tnHPACp1GY58wC76USmW6xdIP1jd2v9Xm4OwOB2i12gzCmc3m9WsJ/gc04mFBzqQb1wAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/9ca87ec4084218fb22432148ac7991a9/c5804/YelpBusiness1.png","srcSet":"/static/9ca87ec4084218fb22432148ac7991a9/93f0e/YelpBusiness1.png 752w,\\n/static/9ca87ec4084218fb22432148ac7991a9/ea829/YelpBusiness1.png 1504w,\\n/static/9ca87ec4084218fb22432148ac7991a9/c5804/YelpBusiness1.png 3007w","sizes":"(min-width: 3007px) 3007px, 100vw"},"sources":[{"srcSet":"/static/9ca87ec4084218fb22432148ac7991a9/f1a41/YelpBusiness1.webp 752w,\\n/static/9ca87ec4084218fb22432148ac7991a9/97c8d/YelpBusiness1.webp 1504w,\\n/static/9ca87ec4084218fb22432148ac7991a9/1e3ff/YelpBusiness1.webp 3007w","type":"image/webp","sizes":"(min-width: 3007px) 3007px, 100vw"}]},"width":3007,"height":1430}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3457193981.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3457193981.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAACE4AAAhOAFFljFgAAACpElEQVR42i2SS27UQBCGfQouwCUQLFhwAbhBxI4lsIIFYsES8RBCggOwgAUEEggZhVECSrIIjyBI4nlkxp6HX93YMx6P7Rl3989vKZZ+VVtVXV31VVmY4Rzi5DXEzwqyJUxS3rTOPiTJdcSxSwH//mnMZoCU3dLzGvPBALLT0RREq4WISh1HW5hO36H1Ek9Xzqu9h5c1pgcoE1xDML6KokDhB2bGy6k7MHygTtxXQdBMXRfe8Yn2j20Etl2fMWOMhehX1n12AbfuPjD3Vi4pfL0BneWryLJGJSV821ZRuwvR6ZizSvs6DJvLMELY7ui418MyCKgQVRQxoW/r7NUVfGu8xeGbOxrfbsPMil0j5W8jBErfX1LVglbzny2zR9HIhiPEvf6Ctpo4TpUNh0QmlxYmqclPNuH7Y4jeT424C0yyHYjwSX2RWmPgOttdQxQ1eH7BCu9nrrvFJB/Icj0fjdb52Ef631sYjaAGHoYHB0hOWhqSnHx/bxmGP1L6Mt/PyauY2XaukkRrKe2F531OTk8h2u15aNvF1HEKCFmwq9wy37/DNL9gsbWFantbY3cXaLX2l3F8RF5YkMuCjMoBhzKfQ5Ehq2xymCg8T9c+Wigha77GMrxURgJFv4/cdTWyee3YXwrxt3IcsB1TcjiFEAZ5Dn02FFYDstP1tKeOi4qJWb2yeDDTvmMI3hC8QprW4HfI5DHXY2PpeavUe7a5qsLwE33Pte9vVmGI+LRX1euUj8dq4TFhkgiLLSAdDFGviBJCI+XyTtJ92W4fekdHCI6PS3JajP/8KWtuTNhmlc16ycsg0BUnX9VLrxQQikcWAyRfi1WtKJK0Ofdtg8D34m63nA+HCdueZINBMu33c8YfUu90FJXsQtDGRDBSk8k9XLx4/j9puxIkzVfrLwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/ed86173533a56134307acb63cac99be4/4d2b8/YelpUserPersona4.png","srcSet":"/static/ed86173533a56134307acb63cac99be4/dac65/YelpUserPersona4.png 1383w,\\n/static/ed86173533a56134307acb63cac99be4/76c7c/YelpUserPersona4.png 2767w,\\n/static/ed86173533a56134307acb63cac99be4/4d2b8/YelpUserPersona4.png 5533w","sizes":"(min-width: 5533px) 5533px, 100vw"},"sources":[{"srcSet":"/static/ed86173533a56134307acb63cac99be4/d84b1/YelpUserPersona4.webp 1383w,\\n/static/ed86173533a56134307acb63cac99be4/cc724/YelpUserPersona4.webp 2767w,\\n/static/ed86173533a56134307acb63cac99be4/22c16/YelpUserPersona4.webp 5533w","type":"image/webp","sizes":"(min-width: 5533px) 5533px, 100vw"}]},"width":5533,"height":3006}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3529446193.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3529446193.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAACE4AAAhOAFFljFgAAACpElEQVR42i1SO2/TYBT1n2BH4kewdOkvYEBiY0DMLAgkBhCwMAILAgYkkJBYEFIaCRo1DFWhjRQaoGpqx02a2I5fsV0/4ldsf9/hfimWjq++17n3nnskAJcQhp+gDSoYso+4vCv9/+D7txAEMwLH+XmDJAHtTVaWtZ1qGnxVbQjcG424qyg8mc2YhDj+jJ9v0b5xuTm5v8Gg91BnuA7HvIa8QGE7PNV1viQwzxOEs8Z1u5XjIDw7Y9F0ing2g4hiT8L0d5I9usqfPrjHX93caPDhNliat7Bcdmo/gC0rjXc6hq2MeGnbQEgVLxZdBOdYGgbL5nMIpIaBZrEgQk2u+bNN9L+8w/j9Q4aPd4C0OKA2/4iMqW5Ule3UhWVVtAfCmC0WHUEezbRVrGl1ouk1yVBT9bWEKGblYQd/B7/gTBQGZwzE6R489wU8r0P6btHFNmGL1tsU31Cix7lp7hSm2cp0vU1kbUok7rQkzA3G5haswQCJesoQhIBp9qiCw8SykMhyTvoVmePkTRDQeTBamebXcDJBoKrZQlEK0rAgsjUk1u8z/r2LitDs7jL82AMUtVf5/jENDCXpRASoPI8jTcEupt7lpCG1y1LSjxKuNaxdFxLzfbai6eWTM+Q0dvGIHvRK1z3mUYQyDFk2GoFa5CiKNSGjKZeWDW88Xk85uyDlpeMwiSzQUMk8oQ0SvhFVUel7lO15ZdvblWW1GscROor4jfz4mlEsTAvhdEoD0chWRlOSPCxJAqn2PBZrOip3IcCQ50AU9SjjoX1ywq3hMDOOjvKDnZ3MleWGmeZItEwJ1i1X1CaLIgbxed5LiX4xVZOThzIy7pLWQvhuMZ/3yflIptOciMqj/f3CGQ6Rq6pM5y0IkwdBQsQZ932TfPsEm5tX/gHE2RClyCxFRgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/52183e70489b36a0de1a9bda715eebdf/c67ec/YelpUserPersona2.png","srcSet":"/static/52183e70489b36a0de1a9bda715eebdf/576b0/YelpUserPersona2.png 1384w,\\n/static/52183e70489b36a0de1a9bda715eebdf/76c7c/YelpUserPersona2.png 2767w,\\n/static/52183e70489b36a0de1a9bda715eebdf/c67ec/YelpUserPersona2.png 5534w","sizes":"(min-width: 5534px) 5534px, 100vw"},"sources":[{"srcSet":"/static/52183e70489b36a0de1a9bda715eebdf/66b40/YelpUserPersona2.webp 1384w,\\n/static/52183e70489b36a0de1a9bda715eebdf/cc724/YelpUserPersona2.webp 2767w,\\n/static/52183e70489b36a0de1a9bda715eebdf/0cecb/YelpUserPersona2.webp 5534w","type":"image/webp","sizes":"(min-width: 5534px) 5534px, 100vw"}]},"width":5534,"height":3006}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3638255115.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3638255115.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAAB/klEQVR42oWRT2sTYRDGp/lTS9I0TbfVWiW5aOOpov0AS0qjn2C9WOjJgELtxRyUwgpe9BgEbUGs5+AxVAQbigWVsEiIQqFFaym2xBS2xU1is+/u47zpBosHHfgxAzvvM/PsEBF10T8imUxG4vF4jMsQ08/0MH4mQLoeIEBmXyaTCU7ruvxGCSbODPwtpnMj0y1rIcQ9AO8cx1m2hVg5tOor4vtOEVeuvkc0+hia5r+l6700RhTm/t5jk4+mE7EY2pOlsG3bH1gQrusKmWEfAlvrDsYvAYOD22AXicXFHpohGuLHCtPn2Qp7BPlZl+7ZME0z1Wg0nluW9bRqWvPGpjWvr+JJeerOC4SD12TPw0wmSteJznJ9ko6ET3nbtm1qWt6vqnogn8/7bVuU5GIN2xXbBy5uvAbOzO055vnLwPDQDkZGlPaGHKc9MckwE/Psy//ny83kTsimerN5U7RaxXqzVfhaayw9eussjeacwkdVK0KJ3Jc92Ww2QhpRlOuIt1knS+vdx4/i7O4+cKo/PrvVagm1PQO1NQPrr0q/JlOfnJjyDKoa0ORRtD+H6ODrZGlVHkUKwjRXYdtw9/cFDn4CtQ2gUuCjXAQUZRPnBvrGFxZC9L9gwVA6PRVefllIbFUqk9/K5Yk2hjGxsfYm9eXu7XT5wtioFJudnu3/DQJ6/62n46fMAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/997ca5e149987d0ca4d6f28b366c89ba/a2514/DesignSystemDirectionLocalBusiness.png","srcSet":"/static/997ca5e149987d0ca4d6f28b366c89ba/1b7b2/DesignSystemDirectionLocalBusiness.png 1258w,\\n/static/997ca5e149987d0ca4d6f28b366c89ba/f4f8b/DesignSystemDirectionLocalBusiness.png 2516w,\\n/static/997ca5e149987d0ca4d6f28b366c89ba/a2514/DesignSystemDirectionLocalBusiness.png 5031w","sizes":"(min-width: 5031px) 5031px, 100vw"},"sources":[{"srcSet":"/static/997ca5e149987d0ca4d6f28b366c89ba/09204/DesignSystemDirectionLocalBusiness.webp 1258w,\\n/static/997ca5e149987d0ca4d6f28b366c89ba/b61ef/DesignSystemDirectionLocalBusiness.webp 2516w,\\n/static/997ca5e149987d0ca4d6f28b366c89ba/e163c/DesignSystemDirectionLocalBusiness.webp 5031w","type":"image/webp","sizes":"(min-width: 5031px) 5031px, 100vw"}]},"width":5031,"height":2206}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3729994675.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3729994675.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABaElEQVR42nVSPU/CUBS9lEpb+gGlthWoVDBOmjgZowuTEzMrhoWFpAwsBJow+hv4C/wJB/+Di7uJCQuDrs976S22BJucvPvyzj3v9NwHDoDpKUoHAE4REkKGI59YLqUzABfLC4TJ3BNEIUf8HA7djzi+xrKmAQSQNBWOiW6j6GodRS0sPeQ2cG0iqghtb+R7PG58xfEtlgaTCDo7yAn/jEatl17PhuRiNAwldqnsuZvBoLmZTu/pJhXgHNcyC+opSQixW7eTycMbimJpG0lECjv7i0nMZrZYrS7J9p1pOk++r3dd1+gHgSb6/eIO3a4sUFwsFu33+bxO8dzouv/oOOZzGKqvdM5ccJKAPbTjY3hGbhAkkgKbOrZdQbIjUud8dlgbqqrSb9Q5P4uzkQ6nbFlWjQfh8aRl5srZvCmrNj+HgPfa4fOhHDm3EEERkYkK80tZwSLfRlD/ezIkWE8GVmURgwdYzvb9AhSMSQE+dNY6AAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/13fc68fba9eb5378fabb854b86bb1a72/5a612/YelpSwot.png","srcSet":"/static/13fc68fba9eb5378fabb854b86bb1a72/178a1/YelpSwot.png 831w,\\n/static/13fc68fba9eb5378fabb854b86bb1a72/e7363/YelpSwot.png 1661w,\\n/static/13fc68fba9eb5378fabb854b86bb1a72/5a612/YelpSwot.png 3322w","sizes":"(min-width: 3322px) 3322px, 100vw"},"sources":[{"srcSet":"/static/13fc68fba9eb5378fabb854b86bb1a72/b6200/YelpSwot.webp 831w,\\n/static/13fc68fba9eb5378fabb854b86bb1a72/f79ed/YelpSwot.webp 1661w,\\n/static/13fc68fba9eb5378fabb854b86bb1a72/5d675/YelpSwot.webp 3322w","type":"image/webp","sizes":"(min-width: 3322px) 3322px, 100vw"}]},"width":3322,"height":1453}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/386459095.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/386459095.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAYAAACQjC21AAAACXBIWXMAABYlAAAWJQFJUiTwAAAEJklEQVR42lVU2W4iVxDt38tjPmOSh3kf2VIcL8p4kccbXmOP9wUbGzBm84IxW7M1S9PQzdI0jcGAHSkj5fmkqhFS8lC6zeXeU6dOnVtCIBCAz+eDx+OB1+uFy+3G9fW1FTc3N3C7XHBRuGmfw+l0wnN7a52/u7uD3++37t3SHp8THh8fEQqFEA6HrTUWiyKZTCKdSiEjSZAKBeTzORQLeVrzyOVykPIycvkCRFGEl8iMwJiABch/FOgiH66Uy9D1BppmC69VDb16DZ3BAK3+AO/9Pvq9Ht6MHN5eG6hW67gjpgw2qkoIBoMWM4nYlAmsrqkQyypcrTd0t7bw49MvKHQHeGh28MPQMWhU0U58hllxQlF1YueyZLi6usLl5eUQ8P7+Hs/Pz0hSmZqi4Lms4UxpoGLqeKnmUO4aUN/eESbQTKcP88GJVkaEWq9b+jPgxcUFzs7OhoDcmNGaTaeQUzUkqg0kjAqcRh7xVxUZs4MbtY4wARuL39AkNtW2CTGRsMhw2efn5xBGXWZAXsWkiJpShimX8a5pqBLQU+sDH5lpfAR/wkD8Dd2GjjaxU1UV6XTakisWi1nNERiEQblsBhWTaVSKSTRzAdSaDYhGFfGmjrriRS21DjlvR6oiQ61pkGUZ3NRoNGr1gS0k8MeoZL/fh3hSgpo6wlvoV0SaCk5rGTwaKoLE8r73Dxy6gu/5J8S0InLZLOxUOpfrcDiGTWGrcBZmykZNkCZFpYT7Yh7++itKaghm8U/oWQkN2wpqezvwqVUkyAnpVBLbOzvY39/H3t4eduhbYBNHIhGLLrs/JSaQUiqwF8oI6n28SpvoPPyMZjSC2twctP09eCsaXkoK0qS3bX0dm5ub2NjYgM1mg8BAo4Y4iXoyToCqjBM1BkejiIZyjr+inxE0Ogi0O7hQYtiVXiCqCiUXsWZbs4BWVlawvLwM4b9vlDWIx+MoyQXEIg+Q6mVoZOaSXoNMZZaKMqRSEdH0FVQ5jHRGwvb2FtaJ5dLSEhYWFiCMng2Lek7GjBCgLmXR2dzC34YBhWzj1zv4oOfYK5fQabTRTUyild1GrqiSmU9xeHhIwNtYXV2FwEDscmZ3cnJi+SlCNnBSg26ItfvWTZYKwkEP3+mi355bSn5JuodRJNtc2O2w24ev5ODgAAKzYyAO7hZ7ig3Kevzx9SuWloel/P7lC1Zoz7Zus/aZCE8fBjk6OsLx8fEQkC3DZZ+enmJ3d5eeUYimjQ7TNNGjydLr9xCjzsvkhG6rBbPdRss00KY1k8lg8duilXxtbc3SUuA5+PT0ZFmGszDjQMAPH5ncmnVUoueORhSx5nnHzWMCHpLEfmnH9PS0FZOTk5iZmYHA05YNzcEXmCWLy1m5c/Pz85gj/81TzM7OWpempqYwMTHxvxgfH8fY2Bj+BchIwsvzB0syAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/89dd1d7df89901f19ef470a1ab65bb7d/88f25/yelpposter.png","srcSet":"/static/89dd1d7df89901f19ef470a1ab65bb7d/2a858/yelpposter.png 376w,\\n/static/89dd1d7df89901f19ef470a1ab65bb7d/781f2/yelpposter.png 752w,\\n/static/89dd1d7df89901f19ef470a1ab65bb7d/88f25/yelpposter.png 1504w","sizes":"(min-width: 1504px) 1504px, 100vw"},"sources":[{"srcSet":"/static/89dd1d7df89901f19ef470a1ab65bb7d/c4753/yelpposter.webp 376w,\\n/static/89dd1d7df89901f19ef470a1ab65bb7d/b3ba5/yelpposter.webp 752w,\\n/static/89dd1d7df89901f19ef470a1ab65bb7d/29f2a/yelpposter.webp 1504w","type":"image/webp","sizes":"(min-width: 1504px) 1504px, 100vw"}]},"width":1504,"height":1424.0000000000002}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3893352754.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3893352754.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAACE4AAAhOAFFljFgAAACO0lEQVR42jWRTWgTURSFb40Z8zOpHfInQcVFVlK6yaa1AWsr1JBJJhRSushCKXFjd0VoC2VARS3pLlDqstBFcSWlkJWgVYiIEJM2HVOZxqZNmUg6ajITMsk0z/dSHTh8F96b8+49FzS/P4aSyaedtbX4awDDY7vdQwM4AIBGCPVIgvBQLhReyMfHvCJJi0iSFpp7e4t6uTyPZJk/yuUG8N3LTqfzCuYl0DguiQtoTkzMq8GgD5d2u9nswTRhQ0O7UllHipJtpdO7uiBkO4ryWZ2b+61vb+8iVRWkXC5CDN1u9w1MBjSWfXkaCMQxn5dZlnTmomma0IgNL7ZE8VX75ORDLR4/UpeWBL1YfKtOTVW0zc00fujjz3w+QKbxeDzXMG2AOK4PjY2N1EdH3aTTmwAUz/MXSN3tsFhcb2Qy+8rKSqmxsSE2M5nsr0RCUlKpfPPbvognuEfuRqNRM0YPdLzeXrS6OoSWlx1dE5xj9+BcIIviQKnRuF1DaLiBhen/g9BQCws/6P9ar7vIyPhjMHtBGx9/Vp2dndYmJ5/UfD7HNIDbhnMkGRJDYWvrljg4GPrEMMEUQPAdQOA7wB2skQLA3TcAJG+X+Zy90P6/FI5bUCMRspQ+xmS6TvIgGZ4dHHxBMzNI6e8/qxqN6JSmkcwwqGqxtDtWKypZLA/Idr0AV0mWoIdC91E4nNDD4Uc8AMnO+U+2bgQ7O8PtWCwie73socEQOqSorn5QFFumqMh7k4ksw2nFXZJ//gIv3QmjbLGWQwAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/0b99b734ba01f1a79efd68f0bfdf8429/48ab5/YelpUserSurvey1.png","srcSet":"/static/0b99b734ba01f1a79efd68f0bfdf8429/51843/YelpUserSurvey1.png 1250w,\\n/static/0b99b734ba01f1a79efd68f0bfdf8429/4b23e/YelpUserSurvey1.png 2500w,\\n/static/0b99b734ba01f1a79efd68f0bfdf8429/48ab5/YelpUserSurvey1.png 4999w","sizes":"(min-width: 4999px) 4999px, 100vw"},"sources":[{"srcSet":"/static/0b99b734ba01f1a79efd68f0bfdf8429/973fa/YelpUserSurvey1.webp 1250w,\\n/static/0b99b734ba01f1a79efd68f0bfdf8429/b595e/YelpUserSurvey1.webp 2500w,\\n/static/0b99b734ba01f1a79efd68f0bfdf8429/64084/YelpUserSurvey1.webp 4999w","type":"image/webp","sizes":"(min-width: 4999px) 4999px, 100vw"}]},"width":4999,"height":2073}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/396129457.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/396129457.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","backgroundColor":"#f83838","images":{"fallback":{"src":"/static/c0b10cd2dfa21e4e2bace1e7d3b48583/70779/Artboard%2061.png","srcSet":"/static/c0b10cd2dfa21e4e2bace1e7d3b48583/a24a4/Artboard%2061.png 601w,\\n/static/c0b10cd2dfa21e4e2bace1e7d3b48583/679b5/Artboard%2061.png 1201w,\\n/static/c0b10cd2dfa21e4e2bace1e7d3b48583/70779/Artboard%2061.png 2402w","sizes":"(min-width: 2402px) 2402px, 100vw"},"sources":[{"srcSet":"/static/c0b10cd2dfa21e4e2bace1e7d3b48583/a3cc2/Artboard%2061.webp 601w,\\n/static/c0b10cd2dfa21e4e2bace1e7d3b48583/ae91f/Artboard%2061.webp 1201w,\\n/static/c0b10cd2dfa21e4e2bace1e7d3b48583/1c39a/Artboard%2061.webp 2402w","type":"image/webp","sizes":"(min-width: 2402px) 2402px, 100vw"}]},"width":2402,"height":601}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/413040491.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/413040491.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB0ElEQVR42i2Ry27TQBSG/Ugs2PAuRKJmyYpNVaosW9QNEi9RkVW86SakkpWI2KFOK1+Jc7ETX+Ibjh3bIQFs5nAmMNJIc2bmfPP//zC73Q622y1kWUaKooDD4RCaptnyfb+J47jBAZqmtZfLJXc8HmG/38PacczUdVkiCPBTEMju4YEEQQBRFJUMBYZhSAuCUMCm0DCMExDrpq5rUBSlbds2R2F5noPrumYahmwuipBZFu0js9kMdF0vGarqP52kaQr4QOh53gmI8BMQ1bXxMkfPe70eyLJspnnOfq8qsByHbDYbIiJckqR/CrGZ2iZUAT4QotUW1g0A0EnPT0C6liYT+CpJ5nw+Z9e2DaqikNVqRabTKRVWMmVZ/kFokyRJjSqhqiofM3yJ8zcq/RXjHlq+xBi6JSqyLQtUVf2Gts9cz4OBKNaD4bAejUagqGrO0KDniwXIj4/EWa8pMIyDoKUbRjPs9xviOGC7bhtB3ESWwR+PIVosZpbvswlm7w0GpEgSUqA717IqBn/wxvG8C1PTzpMouvxxPL75wvPPut3uzafb2/fyeHyFil5wHPeq0+l87N/dXZuG8fozzz/n7+8/ZE9PF5jEeVaW73RBePsXziXg2MQttI8AAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/6a5bb43f39be43dc2b22559883447cd1/a6f97/YelpForConsumers3.png","srcSet":"/static/6a5bb43f39be43dc2b22559883447cd1/1bf37/YelpForConsumers3.png 843w,\\n/static/6a5bb43f39be43dc2b22559883447cd1/71932/YelpForConsumers3.png 1685w,\\n/static/6a5bb43f39be43dc2b22559883447cd1/a6f97/YelpForConsumers3.png 3370w","sizes":"(min-width: 3370px) 3370px, 100vw"},"sources":[{"srcSet":"/static/6a5bb43f39be43dc2b22559883447cd1/7e313/YelpForConsumers3.webp 843w,\\n/static/6a5bb43f39be43dc2b22559883447cd1/50210/YelpForConsumers3.webp 1685w,\\n/static/6a5bb43f39be43dc2b22559883447cd1/0bb03/YelpForConsumers3.webp 3370w","type":"image/webp","sizes":"(min-width: 3370px) 3370px, 100vw"}]},"width":3370,"height":1243}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/547398062.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/547398062.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAACV0lEQVR42m2RXUhTYRjHX+3DQSYqlEGkFpQggYFFYZgXfV8ImcpslSmV2fJzRZ6dbSxdOYpoX86wG8GiQrqIgi4KnNvFmlDQTdHFhMwjeTPP9GxzH+ecf+85s5vwgT/Pn4fn/+N9eQihda219ZONZTHAMBkjw8gms1lmTBbZzBhltqtLNrKsbKIyms3ivZ4edDY2/VByNkJ2HyFkJ7XFVEVUBcqc+P3+AGjFBEGMxWJYWVlBLJFATOmRCOKKV+aCICl7M8HgLI3ltufnb9tPSAn1hWvQQhXom572K4uRSETko1HwS0uIzs1BoMBoIg4hHkdChWaBwVAoTGM5fXl5ew4TUk799jXYVhV4/9FQoOnGGVzqPS3efqBDB9uItr5zMNtuYZjRwqpvxq8vE8Dic8nmT8Iy/nEWFDhZUFD8QqMpe5r99iaqjSrQwOoDNaf2oq6xXGzqqcbJC/twqH4Xjp4txfGaIhw7WIKZ9yzE7xZJ+2oZ110UCJK7g2jKKgmprMi+UoGWqkC7nQkMX63FgLZSHLbUof3KCdQ3VEN3uQoNFytQVXsAvnc2LH8blFonedx0f1CBhJRpaHwLldI3rIkQ7+OhQJjpAGdoS7/1dEpjr+9K429M0uhLvWSxt0jndS3S1ymvhPmxzMNAHIMTvjD+hderqSmfeuXlVEpMyRmISEJY5cH9+Q2e57G6mkQ6lUI6ncwe5XNIuXLOurDmZq2hu7v/p8c1suh84p53ONyc2zXKuZxezjvyjGqMc7k8nMPp4dzu0XmqhX7DnQWa67VarZv/B/4FyI9f9GoWwTkAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/11f1c76e988e7abb5df46bc93a2ea2b5/a3f87/YelpForConsumers2.png","srcSet":"/static/11f1c76e988e7abb5df46bc93a2ea2b5/907dd/YelpForConsumers2.png 1237w,\\n/static/11f1c76e988e7abb5df46bc93a2ea2b5/efdc2/YelpForConsumers2.png 2474w,\\n/static/11f1c76e988e7abb5df46bc93a2ea2b5/a3f87/YelpForConsumers2.png 4948w","sizes":"(min-width: 4948px) 4948px, 100vw"},"sources":[{"srcSet":"/static/11f1c76e988e7abb5df46bc93a2ea2b5/8f81a/YelpForConsumers2.webp 1237w,\\n/static/11f1c76e988e7abb5df46bc93a2ea2b5/03c49/YelpForConsumers2.webp 2474w,\\n/static/11f1c76e988e7abb5df46bc93a2ea2b5/e1b50/YelpForConsumers2.webp 4948w","type":"image/webp","sizes":"(min-width: 4948px) 4948px, 100vw"}]},"width":4948,"height":2144}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/813295459.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/813295459.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAACE4AAAhOAFFljFgAAACdUlEQVR42i2QW0iTARTHj7t9fnPuq6xNaO6zYRQV9DD0oageKhMpp0JJF30xEjHC0qyENFFwWmb6kDXzUiZjJUvTtbI15wVdmpOlNmfzNqc20Uhx5VI4fUsP/Dj8/+c8/cDFZf+27A7zzmwPwgmApyMvarsnMjNwKGgbOndJNR25Oe/0CgUOJyfjJAv0kwBqR0IC1sXFYuvV1G77meiK+YbX2CuTebtCJSvgZbOwKTxi3S0W41+A54vWAYtHVYnv9+3H+WBx48yC21j3uAKdSiUuslmmXwBad3Y21j+rQsf4mGX17p0aHBxEa0zsWv/BAwjjAn5OPUnc6yGJonkZHW0uVqZ0SUMe1JBEST9FxXcZPlzKKSst0qemFI76cy8MAJzTnU94qP70scjS2Z78vbY2xnTyRHmzSFRokIVmQVRYGIGIrFwAFiD47QAQUDS9JeJilPAYAOcsAA8BuP/vG0PKACimJ+VMz2Qeg5AG8Pf9Q2vM6ek6hcJtO3rEOwNQ4iIJ3UBS4tLL8HBPx/VrlV/1OnX74UOe3qTEFUcg/9Vo5PEn9oJ8zwgtXbbvFOt/BBDF05RwdUoodE9TAVMwZO5BVX7B+lJ6Ov5hHC4ECiwTZeWounUbZ+dmGxHXjcaGBrRWVeGcWGT6eSNdi04nDkeewm9791hWeZwalEhwOUS6thIchGD78vlNdfPbFnN8nMkFkOYQkCW6zAxDtUbT5ugzZ83ZbXnapiaj+lGp0UoSeW6V6qb1ymVTGx1i6BOL7jsJTtool905xmG1OPk8jc8Jh4G9iR9DIANFAWxlNuFz5ssMAeBzJpf7vPE3bxteEf02/cI/zwYWcs4/gggAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/c77dbfdaa4edf37410a0403bf6c8fc4e/86587/GrowWithYelp.png","srcSet":"/static/c77dbfdaa4edf37410a0403bf6c8fc4e/e44e7/GrowWithYelp.png 1245w,\\n/static/c77dbfdaa4edf37410a0403bf6c8fc4e/7a2ab/GrowWithYelp.png 2490w,\\n/static/c77dbfdaa4edf37410a0403bf6c8fc4e/86587/GrowWithYelp.png 4980w","sizes":"(min-width: 4980px) 4980px, 100vw"},"sources":[{"srcSet":"/static/c77dbfdaa4edf37410a0403bf6c8fc4e/eeff7/GrowWithYelp.webp 1245w,\\n/static/c77dbfdaa4edf37410a0403bf6c8fc4e/86257/GrowWithYelp.webp 2490w,\\n/static/c77dbfdaa4edf37410a0403bf6c8fc4e/869bc/GrowWithYelp.webp 4980w","type":"image/webp","sizes":"(min-width: 4980px) 4980px, 100vw"}]},"width":4980,"height":2090}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/942445241.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/942445241.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAACE4AAAhOAFFljFgAAACnElEQVR42nWSXUiTYRTHT9m2zKktnESJViMX2jZq86rYWiYalfmBF0pQDhL2SqWsIgWbHzANG5OkyXAEMeaFEJFRCqJzH0qiRd4EVpt5tz5I5/zau/d9T887q4uwB34cnvN/zuGc8xzQHpHNnZJK8aRYHNcSW5ibO1E1OJgE5FgsllJfYBLb2jq4puZm1jPhRavVWsNrndnZkm6hMM8uFMpdBCehFkAKr/SFq2GjET/WXWfDhlp8rdUGQalM4YP6+vqoeIxGmmMZRKQJODAwcJfXKJ1OrAPIUgKkqAEEeQBC4haB32CI4dQUrnp8LIYWcJoyBomQSNhb33BraXYOl2Ob8bX1DXqDZtDldt3hNbtCIekVCBQGgAPkmkqQJKxHrWa4snJcaaY4rChFr6YgDCUlaXzQg/Z209dQEL8tLsQjP77TmysRdNrtZl7TkQqJOUQ4TNhP2EcQg1el2lzr6MClyDyLrY3ol+d9ATPFPwZbV8vNZe8orr9sZ3C0kV5/O4n9TQ33eC0gl6fOikQyT3JyVtVWuzsJOyCgKYhGp8cxjD9ZtFswcPRYCExXEi33XDNQMVsrLr7oYeafddGc04aOmvOJGV7OSd+rAsjPB5DtBsgmrhzCQfCqNVHuRj2udt5n8VIx+lUnQlC09SlPqk9T4aZKHLK2MUG/k6a7r2LrRX1iho46tYCYpH8QwIymILKkP4sfyspZrKjEdxrN5z8J7Q+rjGtzj3Bxxscsf3pOcwuP0dFSf5vXPGbzLtjuPFUqokP6M9hfUsy+P1eIrvzjpMKiREKrtYei6Ti/LX/Xxu12b1XocAi2TSjNyHiTmZaOEqGISU3eg5kZmSODvxfbZDJdGB4ewbFxDzfmGWd8Pj/abLZqXjP/p8JfXzVBDBM2/3wAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/68933674e97836ecf2fe2ca015aaa288/30f6a/YelpForConsumers1.png","srcSet":"/static/68933674e97836ecf2fe2ca015aaa288/82d50/YelpForConsumers1.png 1126w,\\n/static/68933674e97836ecf2fe2ca015aaa288/023aa/YelpForConsumers1.png 2251w,\\n/static/68933674e97836ecf2fe2ca015aaa288/30f6a/YelpForConsumers1.png 4502w","sizes":"(min-width: 4502px) 4502px, 100vw"},"sources":[{"srcSet":"/static/68933674e97836ecf2fe2ca015aaa288/c0535/YelpForConsumers1.webp 1126w,\\n/static/68933674e97836ecf2fe2ca015aaa288/8ba49/YelpForConsumers1.webp 2251w,\\n/static/68933674e97836ecf2fe2ca015aaa288/9f92a/YelpForConsumers1.webp 4502w","type":"image/webp","sizes":"(min-width: 4502px) 4502px, 100vw"}]},"width":4502,"height":2145}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/992024277.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/992024277.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAACE4AAAhOAFFljFgAAACoklEQVR42i1Su07cQBT1T+QL0vAXiAKJLkW+IB9AE0qKpI8gkVIkHWWaNAsSD2UlikUKEiAeAi37Aq/XHr/NYq8f2DNzcoxi6WrG4zvnHJ9zDQBv8PT0C1dXNYbDCEXx0fj/IIo+8JuJONZIEok0Bc8mL0IcLiwL0WgkWTocDrXf7+vUNJWBLPuNnR18X1qSJysrChcXqJrmPRznHcoSpefpzLJ0OrU0wVpAU/p+t7AdBMORCocjtJVNp+A5DFxfp8nqqv6ytaW3l5cl1tehiqJDoiMZxRD9vuRFqhlrGQSgWhNB0G38AMnkQT2bJuaPJvKZDU1CA4NBU6ytYXxwAHtzU2FjA1T2F1F8VXse5qZZU12TWbNah2GrcIwwPEISoxLuC3uaynUbAjYkaQz6ovL9fbiTCcKTE0UCIM978P2vrxejaJe197omySE9/UmQT/TxTy1E58Vx9qTn7WE+36P6jgHbVtXUgnN+jvlgoHgI+ndaed5FattYCFFkjlPmnlc0nqeUaQ4IuB+QOLi/z71+v0wmk7Lx/ZKWlIY6O1O620XDksfHCr0ecH9/WifJLVlRh6FitatuyaTjmFTa1dwXQqiaXsowQhP4UOwzVBSpF5pZPjygmE4Vxwa8cFr5/q1+fkZFwKr97jgaQkCnqalct9sGFE8mKpvNQA9BC7SKY2VQqpw/PuqFNdOpZUmG0RrfU76/LV33kI0djsNu7bodenXAhH8orm1ADKxpR4qByRZUZ1lsNFRQOA4jj1tlioGAv3rKxgtxd6fdu7t8dnNTPFxe5vRNsmeAOOq2Q14KV7WT0ISRgpRgkN8MSn9eTKdFJUTOfUZ1bTDd0rbP4vEYuW0X4va2Cmh+PBq1pH32dF7DS5KU4DnfHQr5jJWVt/8AraAQPMFn1ScAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/62f24e0738b4a34af4ac788dd6979f85/c67ec/YelpUserPersona1.png","srcSet":"/static/62f24e0738b4a34af4ac788dd6979f85/576b0/YelpUserPersona1.png 1384w,\\n/static/62f24e0738b4a34af4ac788dd6979f85/76c7c/YelpUserPersona1.png 2767w,\\n/static/62f24e0738b4a34af4ac788dd6979f85/c67ec/YelpUserPersona1.png 5534w","sizes":"(min-width: 5534px) 5534px, 100vw"},"sources":[{"srcSet":"/static/62f24e0738b4a34af4ac788dd6979f85/66b40/YelpUserPersona1.webp 1384w,\\n/static/62f24e0738b4a34af4ac788dd6979f85/cc724/YelpUserPersona1.webp 2767w,\\n/static/62f24e0738b4a34af4ac788dd6979f85/0cecb/YelpUserPersona1.webp 5534w","type":"image/webp","sizes":"(min-width: 5534px) 5534px, 100vw"}]},"width":5534,"height":3006}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/995600375.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/995600375.json ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAACE4AAAhOAFFljFgAAACGklEQVR42m2SS2gTURSGbztNM2rSmkzek8hofUTQMDRLH5GAQhRxUQKuLEIJTbNQqItuZDYFhdpFQKiikIW70GwUq22TnQtrFhbqoxVpbSGI2KStlVCTzPzembkFhV74OHdx7se55xxCCOmi2ChWsseJRqOWcDgsuN1uG8uzUziSz3ME2I3tSRpTqZRFfyNQfJQDewmVXI7XY3EbkZnNxtTLXz+K5fWFIj7PlnApVoLTVUIgUGr4Q2eNByCkQyGknZhw5P87Gc/n9+nxxfrv/tIOUNhcU9/XFkCF0OQINJe7hVAImijeNoSPef7QEUI89Opi1bopXoqD0qYoSqeeV6lg//LPrdGvterT5crSRHPywSP1xrWJuiQ9qTmdY5/sdsEQ3rNapaOmRGASgcl1uDyrsLWxdRPNP0BDVTEzCSRPoxk/j6p0uFXjOKzx/B1DaDNlQcpBJnSy5nfrFWazWWNYwGpP/XutsL1Rn9bmZ6cwcOHVzsUzr6vHjk9/s1qfL1osEUM4bA7DzuhidDBIrF8xhkJGED33cOVN9W2yjL4Tc6pLfKeKgTKCwTJEcU6TpJiRd4sQif4pQEw8rIcOViFJjptfttzH9b5nq8D8VRXxHmgODxDwAT6fCr8f8Hozu5uhN51ne9j5T9R3qk3frXQ67RjJZIRTd7/EcoXRKytj8cTHk3JiUZYTS7J8+UNvb3x4cNCTHBqy/QWlu84PKNiMRgAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/static/cc88bdd380ee8ca80922714d1cf3a1aa/14e27/DesignSystemDirectionConsumers.png","srcSet":"/static/cc88bdd380ee8ca80922714d1cf3a1aa/c46c6/DesignSystemDirectionConsumers.png 1253w,\\n/static/cc88bdd380ee8ca80922714d1cf3a1aa/970b6/DesignSystemDirectionConsumers.png 2505w,\\n/static/cc88bdd380ee8ca80922714d1cf3a1aa/14e27/DesignSystemDirectionConsumers.png 5010w","sizes":"(min-width: 5010px) 5010px, 100vw"},"sources":[{"srcSet":"/static/cc88bdd380ee8ca80922714d1cf3a1aa/92090/DesignSystemDirectionConsumers.webp 1253w,\\n/static/cc88bdd380ee8ca80922714d1cf3a1aa/27b1a/DesignSystemDirectionConsumers.webp 2505w,\\n/static/cc88bdd380ee8ca80922714d1cf3a1aa/90af3/DesignSystemDirectionConsumers.webp 5010w","type":"image/webp","sizes":"(min-width: 5010px) 5010px, 100vw"}]},"width":5010,"height":2207}');

/***/ }),

/***/ "./.cache/redirects.json":
/*!*******************************!*\
  !*** ./.cache/redirects.json ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = [];

/***/ })

};
;
//# sourceMappingURL=component---src-pages-yelp-js.js.map