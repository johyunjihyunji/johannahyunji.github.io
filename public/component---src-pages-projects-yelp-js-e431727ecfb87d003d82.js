"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[882,309,339,173,150,398,293],{4101:function(e,t,n){n.r(t);var a=n(6540),r=n(7581),s=n(3501);const l=r.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,i=r.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return a.createElement(l,null,a.createElement(s.default,null),a.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},6143:function(e,t,n){n.r(t);var a=n(6540),r=n(7581),s=n(5884),l=n(4810);const i=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,c=r.Ay.img`
  height: 80px; /* Adjust logo size */
`,o=r.Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`,m=r.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>a.createElement(i,null,a.createElement(l.N_,{to:"/"},a.createElement(c,{src:s.A,alt:"Logo"})),a.createElement(o,null,a.createElement(m,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),a.createElement(m,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},4057:function(e,t,n){n.r(t);var a=n(6540),r=n(7581),s=n(7694),l=n(5536);const i=r.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;t.default=function(){return a.createElement(i,null,a.createElement(s.default,null),a.createElement(l.default,null))}},7694:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(4506),r=n(6540),s=n.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var l=function(){const{0:e,1:t}=(0,r.useState)(["Los Angeles, CA"]),n=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,r.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<n.length?[].concat((0,a.A)(e),[n[t]]):e}))}),2e3);return()=>clearInterval(e)}),[n]),r.createElement("div",{className:"container"},r.createElement("div",{className:"video-text-wrapper"},r.createElement("div",{className:"video-container"},r.createElement("img",{src:s,alt:"profile gif",style:{maxWidth:"40vw"}})),r.createElement("div",{className:"text-container"},r.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},r.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," is a designer, multimedia artist, and engineer "),r.createElement("br",null),r.createElement("span",null," based in "),e.map(((t,n)=>r.createElement(r.Fragment,{key:n},r.createElement("span",{className:`location ${n<e.length-1?"crossed":" "} ${n===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),n<e.length-1&&r.createElement("span",{className:"space"},"   ")))),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," passionate about fashion soup and oranges"),r.createElement("br",null)))))}},3501:function(e,t,n){n.r(t);var a=n(6540),r=n(7581),s=n(5884);const l=r.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,i=r.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,c=r.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,a.useState)([]),n=(0,a.useMemo)((()=>[{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1},{src:s.A,speed:1,direction:1},{src:s.A,speed:4,direction:-1},{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1},{src:s.A,speed:1,direction:1},{src:s.A,speed:4,direction:-1},{src:s.A,speed:2,direction:1},{src:s.A,speed:3,direction:-1}]),[]);return(0,a.useEffect)((()=>{const e=Array(n.length).fill(0);t(e);const a=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:a,direction:r}=n[t];return(e+a*r)%360}))))}),30);return()=>clearInterval(a)}),[n]),a.createElement(l,null,n.map(((t,n)=>a.createElement(i,{key:n,rotation:e[n]},a.createElement(c,{src:t.src,alt:`Lobster ${n+1}`})))))}},422:function(e,t,n){n.r(t);var a=n(6540),r=n(2532),s=n(9639);t.default=function(){return a.createElement(s.default,null,a.createElement("div",{className:"container"},a.createElement("div",{className:"header-image"},a.createElement(r.S,{src:"../../../static/YelpHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:n(2828)})),a.createElement("div",{className:"info-row"},a.createElement("div",{className:"info-item"},a.createElement("h3",{className:"info-title"},"Role"),a.createElement("p",{className:"info-content"},"Creative Design Consultant")),a.createElement("div",{className:"info-item"},a.createElement("h3",{className:"info-title"},"Skills"),a.createElement("p",{className:"info-content"},"Performance Marketing",a.createElement("br",null),"Content Ideation",a.createElement("br",null),"User Survey and AB Testings",a.createElement("br",null),"Brand Design System",a.createElement("br",null),"User Persona")),a.createElement("div",{className:"info-item"},a.createElement("h3",{className:"info-title"},"Timeline"),a.createElement("p",{className:"info-content"},"Jan 2024 - June 2024")),a.createElement("div",{className:"info-item"},a.createElement("h3",{className:"info-title"},"Team"),a.createElement("p",{className:"info-content"},"UMA Design Team:",a.createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),a.createElement("div",{className:"section"},a.createElement("h2",{className:"section-title"},"Background"),a.createElement("div",{className:"flex-container"},a.createElement("div",{className:"subsection"},a.createElement("h3",{className:"subsection-title",style:{color:"#5a5a5a"}},"Yelp Home Services"),a.createElement("p",{className:"paragraph"},a.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",a.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",a.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),a.createElement("div",{className:"subsection"},a.createElement("h3",{className:"subsection-title",style:{color:"#5a5a5a"}},"UMA Design"),a.createElement("p",{className:"paragraph"},a.createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",a.createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",a.createElement("b",null,"collaborate with clients spanning diverse industries."))))),a.createElement("div",{className:"section"},a.createElement("h2",{className:"section-title"},"Project Scope"),a.createElement("div",{className:"flex-container"},a.createElement("div",{className:"subsection"},a.createElement("h3",{className:"subsection-title",style:{color:"#5a5a5a"}},"Yelp Home Services"),a.createElement("p",{className:"paragraph"},a.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",a.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",a.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers."))))))}},9639:function(e,t,n){n.r(t);var a=n(6540),r=n(6143),s=n(4101),l=n(4057);t.default=function(e){let{children:t}=e;return a.createElement(a.Fragment,null,a.createElement(r.default,null),a.createElement("main",null,t||a.createElement(l.default,null),"  "),a.createElement(s.default,null))}},5884:function(e,t,n){t.A=n.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"},2828:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR42hWQXWsTURRF+zd8qBE0ltgWQ5pkJjOJY0nDpNFWsEmDNaUWTaMSSiFYTGoQbEAU/bnOzP2Yuzx9WC+Hy9r77rXcC6zbjciDQPAxvof2qqhanay2I9RIvTqp75OGIckdzYik4ZP1eujbH+jRKebNEBu/YM3Nv1u3/EYex9iwiWm20FURlSvCUxE1SO6EIvrn+SQSkDRC0rrcogh1PESfjDBBA9t9KcLrpXWrW1x3nzx6jnm2i+4PUOML1Pk5avYF9WkqLQPS0Rn6z1/S/pDk8BVZp4PaizHjz9jXR+Qn70QYH1iWN7jBMW6xkONb7Nc5ZvVTvrNCzReo9x/I/DpKmuhfv8kODskGEiqtzEjeTybYJxu42UyE00vLqI+bfsTdXJMPjjChJ1v66FAksqnyBF92rVRQW5vo7W30ZgnzuIgtbQgl8sI6rlwW4dXCcjqGyQzXP8NFXfL2Prbdw0R72FYH22xLQAuzIxuXq9Kmgi1ukT8S0YMi+fpD3P0C7l6B/zPAMnz+FruqAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png","srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/e0957/YelpHeader.png 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/e54a2/YelpHeader.png 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/64838/YelpHeader.webp 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/10ef5/YelpHeader.webp 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/42982/YelpHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}')}}]);
//# sourceMappingURL=component---src-pages-projects-yelp-js-e431727ecfb87d003d82.js.map