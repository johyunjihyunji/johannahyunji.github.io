"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[398],{3501:function(e,t,r){r.r(t);var s=r(6540),n=r(7581),i=r(5884);const c=n.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,o=n.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,a=n.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,s.useState)([]),r=(0,s.useMemo)((()=>[{src:i.A,speed:2,direction:1},{src:i.A,speed:3,direction:-1},{src:i.A,speed:1,direction:1},{src:i.A,speed:4,direction:-1},{src:i.A,speed:2,direction:1},{src:i.A,speed:3,direction:-1},{src:i.A,speed:1,direction:1},{src:i.A,speed:4,direction:-1},{src:i.A,speed:2,direction:1},{src:i.A,speed:3,direction:-1}]),[]);return(0,s.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const s=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:s,direction:n}=r[t];return(e+s*n)%360}))))}),30);return()=>clearInterval(s)}),[r]),s.createElement(c,null,r.map(((t,r)=>s.createElement(o,{key:r,rotation:e[r]},s.createElement(a,{src:t.src,alt:`Lobster ${r+1}`})))))}},5884:function(e,t,r){t.A=r.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"}}]);
//# sourceMappingURL=component---src-pages-components-lopster-gallary-js-0d98851bc1435eac954f.js.map