"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[146,775],{1209:function(e,t,r){r.r(t);var n=r(7294),o=r(5086),i=r(3307);const c=o.ZP.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`,a=o.ZP.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(c,null,n.createElement(i.default,null),n.createElement(a,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},3307:function(e,t,r){r.r(t);var n=r(7294),o=r(5086);const i=o.ZP.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,c=o.ZP.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,a=o.ZP.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),r=(0,n.useMemo)((()=>[{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:o}=r[t];return(e+n*o)%360}))))}),30);return()=>clearInterval(n)}),[r]),n.createElement(i,null,r.map(((t,r)=>n.createElement(c,{key:r,rotation:e[r]},n.createElement(a,{src:t.src,alt:`Lobster ${r+1}`})))))}}}]);
//# sourceMappingURL=component---src-pages-footer-js-6979fdff76d2b0199255.js.map