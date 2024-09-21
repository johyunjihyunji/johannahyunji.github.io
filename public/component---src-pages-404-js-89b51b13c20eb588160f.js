"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[125,398],{3331:function(e,t,r){r.r(t);var n=r(6540),s=r(7581),o=r(3501);const c=s.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`,i=s.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(c,null,n.createElement(o.default,null),n.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},3501:function(e,t,r){r.r(t);var n=r(6540),s=r(7581),o=r(5884);const c=s.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,i=s.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,a=s.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),r=(0,n.useMemo)((()=>[{src:o.A,speed:2,direction:1},{src:o.A,speed:3,direction:-1},{src:o.A,speed:1,direction:1},{src:o.A,speed:4,direction:-1},{src:o.A,speed:2,direction:1},{src:o.A,speed:3,direction:-1},{src:o.A,speed:1,direction:1},{src:o.A,speed:4,direction:-1},{src:o.A,speed:2,direction:1},{src:o.A,speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(r.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:s}=r[t];return(e+n*s)%360}))))}),30);return()=>clearInterval(n)}),[r]),n.createElement(c,null,r.map(((t,r)=>n.createElement(i,{key:r,rotation:e[r]},n.createElement(a,{src:t.src,alt:`Lobster ${r+1}`})))))}},5884:function(e,t,r){t.A=r.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-89b51b13c20eb588160f.js.map