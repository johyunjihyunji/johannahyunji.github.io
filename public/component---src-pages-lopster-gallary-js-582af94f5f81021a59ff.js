"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[775],{3307:function(e,t,r){r.r(t);var i=r(7294),o=r(5086);const c=o.ZP.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,n=o.ZP.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,s=o.ZP.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,i.useState)([]),r=(0,i.useMemo)((()=>[{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1}]),[]);return(0,i.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const i=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:i,direction:o}=r[t];return(e+i*o)%360}))))}),30);return()=>clearInterval(i)}),[r]),i.createElement(c,null,r.map(((t,r)=>i.createElement(n,{key:r,rotation:e[r]},i.createElement(s,{src:t.src,alt:`Lobster ${r+1}`})))))}}}]);
//# sourceMappingURL=component---src-pages-lopster-gallary-js-582af94f5f81021a59ff.js.map