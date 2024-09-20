/*! For license information please see component---src-pages-index-js-8d4585ed0ec095bc5562.js.LICENSE.txt */
"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678,146,752,979,775,1],{1209:function(e,t,r){r.r(t);var n=r(7294),a=r(5086),o=r(3307);const l=a.ZP.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`,i=a.ZP.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(l,null,n.createElement(o.default,null),n.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},2402:function(e,t,r){r.r(t);var n=r(7294),a=r(5086);const o=a.ZP.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,l=a.ZP.img`
  height: 100px; /* Adjust logo size */
`,i=a.ZP.nav`
  display: flex;
  gap: 20px; /* Space between menu items */
`,c=a.ZP.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>n.createElement(o,null,n.createElement("a",{href:"/"},n.createElement(l,{src:"./../../favicon.ico",alt:"Logo"})),n.createElement(i,null,n.createElement(c,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),n.createElement(c,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},8932:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(5785),a=r(7294),o=r.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var l=function(){const{0:e,1:t}=(0,a.useState)(["Los Angeles, CA"]),r=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,a.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<r.length?[].concat((0,n.Z)(e),[r[t]]):e}))}),2e3);return()=>clearInterval(e)}),[r]),a.createElement("div",{className:"container"},a.createElement("div",{className:"video-text-wrapper"},a.createElement("div",{className:"video-container"},a.createElement("img",{src:o,alt:"profile gif",style:{maxWidth:"40vw"}})),a.createElement("div",{className:"text-container"},a.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},a.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," is a designer, multimedia artist, and engineer "),a.createElement("br",null),a.createElement("span",null," based in "),e.map(((t,r)=>a.createElement(a.Fragment,{key:r},a.createElement("span",{className:`location ${r<e.length-1?"crossed":" "} ${r===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),r<e.length-1&&a.createElement("span",{className:"space"},"   ")))),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," passionate about fashion soup and oranges"),a.createElement("br",null)))))}},3307:function(e,t,r){r.r(t);var n=r(7294),a=r(5086);const o=a.ZP.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,l=a.ZP.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,i=a.ZP.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),r=(0,n.useMemo)((()=>[{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:a}=r[t];return(e+n*a)%360}))))}),30);return()=>clearInterval(n)}),[r]),n.createElement(o,null,r.map(((t,r)=>n.createElement(l,{key:r,rotation:e[r]},n.createElement(i,{src:t.src,alt:`Lobster ${r+1}`})))))}},6069:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var n=r(7294),a=r.t(n,2),o=r(5086),l=r(3935),i=r.t(l,2),c=r(2599);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}const u=n.createContext(null);const d=n.createContext(null);const m=n.createContext(null);const p=n.createContext(null);const h=n.createContext({outlet:null,matches:[],isDataRoute:!1});const f=n.createContext(null);function v(){return null!=n.useContext(p)}function g(){return v()||(0,c.J0)(!1),n.useContext(p).location}function E(e,t,r,a){v()||(0,c.J0)(!1);let{navigator:o}=n.useContext(m),{matches:l}=n.useContext(h),i=l[l.length-1],u=i?i.params:{},d=(i&&i.pathname,i?i.pathnameBase:"/");i&&i.route;let f,E=g();if(t){var x;let e="string"==typeof t?(0,c.cP)(t):t;"/"===d||(null==(x=e.pathname)?void 0:x.startsWith(d))||(0,c.J0)(!1),f=e}else f=E;let y=f.pathname||"/",b=y;if("/"!==d){let e=d.replace(/^\//,"").split("/");b="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=(0,c.fp)(e,{pathname:b});let R=P(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},u,e.params),pathname:(0,c.RQ)([d,o.encodeLocation?o.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:(0,c.RQ)([d,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),l,r,a);return t&&R?n.createElement(p.Provider,{value:{location:s({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:c.aU.Pop}},R):R}function x(){let e=function(){var e;let t=n.useContext(f),r=S(R.UseRouteError),a=C(R.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[a]}(),t=(0,c.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:o},r):null,null)}const y=n.createElement(x,null);class b extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(h.Provider,{value:this.props.routeContext},n.createElement(f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function w(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(u);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(h.Provider,{value:t},a)}function P(e,t,r,a){var o;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var l;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(l=a)&&l.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let i=e,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=i.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||(0,c.J0)(!1),i=i.slice(0,Math.min(i.length,e+1))}let u=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let n=0;n<i.length;n++){let e=i[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=n),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){u=!0,i=d>=0?i.slice(0,d+1):[i[0]];break}}}return i.reduceRight(((e,a,o)=>{let l,c=!1,m=null,p=null;var h;r&&(l=s&&a.route.id?s[a.route.id]:void 0,m=a.route.errorElement||y,u&&(d<0&&0===o?(h="route-fallback",!1||_[h]||(_[h]=!0),c=!0,p=null):d===o&&(c=!0,p=a.route.hydrateFallbackElement||null)));let f=t.concat(i.slice(0,o+1)),v=()=>{let t;return t=l?m:c?p:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(w,{match:a,routeContext:{outlet:e,matches:f,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(b,{location:r.location,revalidation:r.revalidation,component:m,error:l,children:v(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):v()}),null)}var R=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(R||{});function S(e){let t=n.useContext(d);return t||(0,c.J0)(!1),t}function C(e){let t=function(e){let t=n.useContext(h);return t||(0,c.J0)(!1),t}(),r=t.matches[t.matches.length-1];return r.route.id||(0,c.J0)(!1),r.route.id}const _={};a.startTransition;function k(e){(0,c.J0)(!1)}function F(e){let{basename:t="/",children:r=null,location:a,navigationType:o=c.aU.Pop,navigator:l,static:i=!1,future:u}=e;v()&&(0,c.J0)(!1);let d=t.replace(/^\/*/,"/"),h=n.useMemo((()=>({basename:d,navigator:l,static:i,future:s({v7_relativeSplatPath:!1},u)})),[d,u,l,i]);"string"==typeof a&&(a=(0,c.cP)(a));let{pathname:f="/",search:g="",hash:E="",state:x=null,key:y="default"}=a,b=n.useMemo((()=>{let e=(0,c.Zn)(f,d);return null==e?null:{location:{pathname:e,search:g,hash:E,state:x,key:y},navigationType:o}}),[d,f,g,E,x,y,o]);return null==b?null:n.createElement(m.Provider,{value:h},n.createElement(p.Provider,{children:r,value:b}))}function j(e){let{children:t,location:r}=e;return E(U(t),r)}new Promise((()=>{}));class A extends n.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,t){console.error("<Await> caught the following error during render",e,t)}render(){let{children:e,errorElement:t,resolve:r}=this.props,a=null,o=AwaitRenderStatus.pending;if(r instanceof Promise)if(this.state.error){AwaitRenderStatus.error;let e=this.state.error;Promise.reject().catch((()=>{})),Object.defineProperty(a,"_tracked",{get:()=>!0}),Object.defineProperty(a,"_error",{get:()=>e})}else r._tracked?(r,"_error"in a?AwaitRenderStatus.error:"_data"in a?AwaitRenderStatus.success:AwaitRenderStatus.pending):(AwaitRenderStatus.pending,Object.defineProperty(r,"_tracked",{get:()=>!0}),r.then((e=>Object.defineProperty(r,"_data",{get:()=>e})),(e=>Object.defineProperty(r,"_error",{get:()=>e}))));else AwaitRenderStatus.success,Promise.resolve(),Object.defineProperty(a,"_tracked",{get:()=>!0}),Object.defineProperty(a,"_data",{get:()=>r});if(o===AwaitRenderStatus.error&&a._error instanceof c.X3)throw neverSettledPromise;if(o===AwaitRenderStatus.error&&!t)throw a._error;if(o===AwaitRenderStatus.error)return n.createElement(AwaitContext.Provider,{value:a,children:t});if(o===AwaitRenderStatus.success)return n.createElement(AwaitContext.Provider,{value:a,children:e});throw a}}function U(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,a)=>{if(!n.isValidElement(e))return;let o=[...t,a];if(e.type===n.Fragment)return void r.push.apply(r,U(e.props.children,o));e.type!==k&&(0,c.J0)(!1),e.props.index&&e.props.children&&(0,c.J0)(!1);let l={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=U(e.props.children,o)),r.push(l)})),r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(q){}new Map;const Z=a.startTransition;i.flushSync,a.useId;function D(e){let{basename:t,children:r,future:a,window:o}=e,l=n.useRef();null==l.current&&(l.current=(0,c.lX)({window:o,v5Compat:!0}));let i=l.current,[s,u]=n.useState({action:i.action,location:i.location}),{v7_startTransition:d}=a||{},m=n.useCallback((e=>{d&&Z?Z((()=>u(e))):u(e)}),[u,d]);return n.useLayoutEffect((()=>i.listen(m)),[i,m]),n.createElement(F,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i,future:a})}"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;var L,B;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(L||(L={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(B||(B={}));var J=r(2402),I=r(1209),N=r(8932),O=r(5259),T=r(8555);const z=o.ZP.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`,M=o.ZP.div`
  flex: 1; /* This allows the content to grow and push the footer down */
`;var $=function(){return n.createElement(D,null,n.createElement(z,null,n.createElement(M,null,n.createElement(J.default,null),n.createElement(j,null,n.createElement(k,{path:"/",element:n.createElement(n.Fragment,null,n.createElement(N.default,null),n.createElement(O.default,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null))}),n.createElement(k,{path:"./projects/Yelp",element:n.createElement(T.default,null)}))),n.createElement(I.default,null)))}},8555:function(e,t,r){r.r(t);var n=r(7294),a=r(5086),o=r(2402),l=r(1209);const i=a.ZP.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,c=a.ZP.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 30px;
`,s=a.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,u=a.ZP.div`
  flex: 1;
  margin-right: 20px;
`,d=a.ZP.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,m=a.ZP.p`
  font-size: 16px;
`,p=a.ZP.div`
  margin-bottom: 40px;
`,h=a.ZP.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,f=a.ZP.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,v=a.ZP.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;t.default=function(){return n.createElement("div",null,n.createElement(o.default,null),n.createElement(i,null,n.createElement(c,{src:"path_to_your_header_image.jpg",alt:"Project Header"}),n.createElement(s,null,n.createElement(u,null,n.createElement(d,null,"Role"),n.createElement(m,null,"Lead Product Designer")),n.createElement(u,null,n.createElement(d,null,"Skills"),n.createElement(m,null,"UX Design, UI Design, Prototyping")),n.createElement(u,null,n.createElement(d,null,"Timeline"),n.createElement(m,null,"Jan 2023 - June 2023")),n.createElement(u,null,n.createElement(d,null,"Team"),n.createElement(m,null,"5 members"))),n.createElement(p,null,n.createElement(h,null,"Background"),n.createElement(f,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),n.createElement(v,{src:"path_to_your_team_photo.jpg",alt:"Team Photo"})),n.createElement(p,null,n.createElement(h,null,"Reflection"),n.createElement(f,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),n.createElement(l.default,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-8d4585ed0ec095bc5562.js.map