"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[1,146,752,775],{1209:function(e,t,n){n.r(t);var r=n(7294),i=n(5086),a=n(3307);const o=i.ZP.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
`,l=i.ZP.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return r.createElement(o,null,r.createElement(a.default,null),r.createElement(l,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},2402:function(e,t,n){n.r(t);var r=n(7294),i=n(5086);const a=i.ZP.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,o=i.ZP.img`
  height: 100px; /* Adjust logo size */
`,l=i.ZP.nav`
  display: flex;
  gap: 20px; /* Space between menu items */
`,c=i.ZP.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>r.createElement(a,null,r.createElement("a",{href:"/"},r.createElement(o,{src:"./../../favicon.ico",alt:"Logo"})),r.createElement(l,null,r.createElement(c,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),r.createElement(c,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},3307:function(e,t,n){n.r(t);var r=n(7294),i=n(5086);const a=i.ZP.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,o=i.ZP.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,l=i.ZP.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,r.useState)([]),n=(0,r.useMemo)((()=>[{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1},{src:"./../../favicon.ico",speed:1,direction:1},{src:"./../../favicon.ico",speed:4,direction:-1},{src:"./../../favicon.ico",speed:2,direction:1},{src:"./../../favicon.ico",speed:3,direction:-1}]),[]);return(0,r.useEffect)((()=>{const e=Array(n.length).fill(0);t(e);const r=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:r,direction:i}=n[t];return(e+r*i)%360}))))}),30);return()=>clearInterval(r)}),[n]),r.createElement(a,null,n.map(((t,n)=>r.createElement(o,{key:n,rotation:e[n]},r.createElement(l,{src:t.src,alt:`Lobster ${n+1}`})))))}},8555:function(e,t,n){n.r(t);var r=n(7294),i=n(5086),a=n(2402),o=n(1209);const l=i.ZP.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`,c=i.ZP.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  margin-bottom: 30px;
`,s=i.ZP.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`,m=i.ZP.div`
  flex: 1;
  margin-right: 20px;
`,d=i.ZP.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,u=i.ZP.p`
  font-size: 16px;
`,p=i.ZP.div`
  margin-bottom: 40px;
`,f=i.ZP.h2`
  font-size: 24px;
  margin-bottom: 20px;
`,g=i.ZP.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,h=i.ZP.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
`;t.default=function(){return r.createElement("div",null,r.createElement(a.default,null),r.createElement(l,null,r.createElement(c,{src:"path_to_your_header_image.jpg",alt:"Project Header"}),r.createElement(s,null,r.createElement(m,null,r.createElement(d,null,"Role"),r.createElement(u,null,"Lead Product Designer")),r.createElement(m,null,r.createElement(d,null,"Skills"),r.createElement(u,null,"UX Design, UI Design, Prototyping")),r.createElement(m,null,r.createElement(d,null,"Timeline"),r.createElement(u,null,"Jan 2023 - June 2023")),r.createElement(m,null,r.createElement(d,null,"Team"),r.createElement(u,null,"5 members"))),r.createElement(p,null,r.createElement(f,null,"Background"),r.createElement(g,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),r.createElement(h,{src:"path_to_your_team_photo.jpg",alt:"Team Photo"})),r.createElement(p,null,r.createElement(f,null,"Reflection"),r.createElement(g,null,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))),r.createElement(o.default,null))}}}]);
//# sourceMappingURL=component---src-pages-projects-yelp-js-298579dbfb2a7361cd5d.js.map