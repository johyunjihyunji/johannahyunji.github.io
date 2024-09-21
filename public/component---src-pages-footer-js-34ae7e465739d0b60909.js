"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[120,398],{3501:function(e,t,r){r.r(t);var n=r(6540),o=r(7581),s=r(5884);const i=o.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,c=o.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,a=o.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),r=(0,n.useMemo)((()=>[{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1},{src:s.A,speed:1,direction:1},{src:s.A,speed:4,direction:-1},{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1},{src:s.A,speed:1,direction:1},{src:s.A,speed:4,direction:-1},{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:o}=r[t];return(e+n*o)%360}))))}),30);return()=>clearInterval(n)}),[r]),n.createElement(i,null,r.map(((t,r)=>n.createElement(c,{key:r,rotation:e[r]},n.createElement(a,{src:t.src,alt:`Lobster ${r+1}`})))))}},156:function(e,t,r){r.r(t);var n=r(6540),o=r(7581),s=r(3501);const i=o.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,c=o.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(i,null,n.createElement(s.default,null),n.createElement(c,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},5884:function(e,t,r){t.A=r.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"}}]);
//# sourceMappingURL=component---src-pages-footer-js-34ae7e465739d0b60909.js.map