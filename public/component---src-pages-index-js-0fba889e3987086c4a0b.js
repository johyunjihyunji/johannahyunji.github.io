"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678,146,752,979,775],{1209:function(e,t,n){n.r(t);var a=n(7294),r=n(5086);const l=r.ZP.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`,c=r.ZP.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return a.createElement(l,null,a.createElement(c,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},2402:function(e,t,n){n.r(t);var a=n(7294),r=n(5086);const l=r.ZP.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,c=r.ZP.img`
  height: 100px; /* Adjust logo size */
`,o=r.ZP.nav`
  display: flex;
  gap: 20px; /* Space between menu items */
`,i=r.ZP.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>a.createElement(l,null,a.createElement(c,{src:"./../../favicon.ico",alt:"Logo"})," ",a.createElement(o,null,a.createElement(i,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),a.createElement(i,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},8932:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var a=n(5785),r=n(7294),l=n.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var c=function(){const{0:e,1:t}=(0,r.useState)(["Los Angeles, CA"]),n=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,r.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<n.length?[].concat((0,a.Z)(e),[n[t]]):e}))}),2e3);return()=>clearInterval(e)}),[n]),r.createElement("div",{className:"container"},r.createElement("div",{className:"video-text-wrapper"},r.createElement("div",{className:"video-container"},r.createElement("img",{src:l,alt:"profile gif",style:{maxWidth:"40vw"}})),r.createElement("div",{className:"text-container"},r.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},r.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," is a designer, multimedia artist, and engineer "),r.createElement("br",null),r.createElement("span",null," based in "),e.map(((t,n)=>r.createElement(r.Fragment,{key:n},r.createElement("span",{className:`location ${n<e.length-1?"crossed":" "} ${n===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),n<e.length-1&&r.createElement("span",{className:"space"},"   ")))),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," passionate about fashion soup and oranges"),r.createElement("br",null)))))}},3307:function(e,t,n){n.r(t);var a=n(7294),r=n(5086);const l=r.ZP.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,c=r.ZP.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,o=r.ZP.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,a.useState)([]),n=(0,a.useMemo)((()=>[{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1}]),[]);return(0,a.useEffect)((()=>{const e=Array(n.length).fill(0);t(e);const a=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:a,direction:r}=n[t];return(e+a*r)%360}))))}),30);return()=>clearInterval(a)}),[n]),a.createElement(l,null,n.map(((t,n)=>a.createElement(c,{key:n,rotation:e[n]},a.createElement(o,{src:t.src,alt:`Lobster ${n+1}`})))))}},6558:function(e,t,n){n.r(t);var a=n(7294),r=n(5086),l=n(2402),c=n(8932),o=n(5259),i=n(3307),s=n(1209);const d=r.ZP.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`,m=r.ZP.div`
  flex: 1; /* This allows the content to grow and push the footer down */
`;t.default=function(){return a.createElement(d,null,a.createElement(m,null,a.createElement(l.default,null),a.createElement(c.default,null),a.createElement(o.default,null),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement(i.default,null)),a.createElement(s.default,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0fba889e3987086c4a0b.js.map