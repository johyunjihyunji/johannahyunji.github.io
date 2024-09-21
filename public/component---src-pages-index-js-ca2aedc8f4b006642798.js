"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293,309,339,173,150,398],{4101:function(e,t,n){n.r(t);var r=n(6540),a=n(7581),l=n(3501);const s=a.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,c=a.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return r.createElement(s,null,r.createElement(l.default,null),r.createElement(c,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},6143:function(e,t,n){n.r(t);var r=n(6540),a=n(7581),l=n(5884),s=n(4810);const c=a.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,o=a.Ay.img`
  height: 80px; /* Adjust logo size */
`,i=a.Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`,d=a.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>r.createElement(c,null,r.createElement(s.N_,{to:"/"},r.createElement(o,{src:l.A,alt:"Logo"})),r.createElement(i,null,r.createElement(d,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),r.createElement(d,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},4057:function(e,t,n){n.r(t);var r=n(6540),a=n(7581),l=n(7694),s=n(5536);const c=a.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;t.default=function(){return r.createElement(c,null,r.createElement(l.default,null),r.createElement(s.default,null))}},7694:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(4506),a=n(6540),l=n.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var s=function(){const{0:e,1:t}=(0,a.useState)(["Los Angeles, CA"]),n=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,a.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<n.length?[].concat((0,r.A)(e),[n[t]]):e}))}),2e3);return()=>clearInterval(e)}),[n]),a.createElement("div",{className:"container"},a.createElement("div",{className:"video-text-wrapper"},a.createElement("div",{className:"video-container"},a.createElement("img",{src:l,alt:"profile gif",style:{maxWidth:"40vw"}})),a.createElement("div",{className:"text-container"},a.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},a.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," is a designer, multimedia artist, and engineer "),a.createElement("br",null),a.createElement("span",null," based in "),e.map(((t,n)=>a.createElement(a.Fragment,{key:n},a.createElement("span",{className:`location ${n<e.length-1?"crossed":" "} ${n===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),n<e.length-1&&a.createElement("span",{className:"space"},"   ")))),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," passionate about fashion soup and oranges"),a.createElement("br",null)))))}},3501:function(e,t,n){n.r(t);var r=n(6540),a=n(7581),l=n(5884);const s=a.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,c=a.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,o=a.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,r.useState)([]),n=(0,r.useMemo)((()=>[{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1}]),[]);return(0,r.useEffect)((()=>{const e=Array(n.length).fill(0);t(e);const r=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:r,direction:a}=n[t];return(e+r*a)%360}))))}),30);return()=>clearInterval(r)}),[n]),r.createElement(s,null,n.map(((t,n)=>r.createElement(c,{key:n,rotation:e[n]},r.createElement(o,{src:t.src,alt:`Lobster ${n+1}`})))))}},9639:function(e,t,n){n.r(t);var r=n(6540),a=n(6143),l=n(4101),s=n(4057);t.default=function(e){let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(a.default,null),r.createElement("main",null,t||r.createElement(s.default,null),"  "),r.createElement(l.default,null))}},5884:function(e,t,n){t.A=n.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-ca2aedc8f4b006642798.js.map