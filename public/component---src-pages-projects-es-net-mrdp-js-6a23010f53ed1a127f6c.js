"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[938,309,339,173,150,398,293],{4101:function(e,t,A){A.r(t);var n=A(6540),a=A(7581),l=A(3501);const r=a.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,i=a.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(r,null,n.createElement(l.default,null),n.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},6143:function(e,t,A){A.r(t);var n=A(6540),a=A(7581),l=A(5884),r=A(4810);const i=a.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,c=a.Ay.img`
  height: 80px; /* Adjust logo size */
`,s=a.Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`,o=a.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>n.createElement(i,null,n.createElement(r.N_,{to:"/"},n.createElement(c,{src:l.A,alt:"Logo"})),n.createElement(s,null,n.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),n.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},4057:function(e,t,A){A.r(t);var n=A(6540),a=A(7581),l=A(7694),r=A(5536);const i=a.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;t.default=function(){return n.createElement(i,null,n.createElement(l.default,null),n.createElement(r.default,null))}},7694:function(e,t,A){A.r(t),A.d(t,{default:function(){return r}});var n=A(4506),a=A(6540),l=A.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var r=function(){const{0:e,1:t}=(0,a.useState)(["Los Angeles, CA"]),A=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,a.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<A.length?[].concat((0,n.A)(e),[A[t]]):e}))}),2e3);return()=>clearInterval(e)}),[A]),a.createElement("div",{className:"container"},a.createElement("div",{className:"video-text-wrapper"},a.createElement("div",{className:"video-container"},a.createElement("img",{src:l,alt:"profile gif",style:{maxWidth:"40vw"}})),a.createElement("div",{className:"text-container"},a.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},a.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),a.createElement("br",null),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," is a designer, multimedia artist, and engineer "),a.createElement("br",null),a.createElement("span",null," based in "),e.map(((t,A)=>a.createElement(a.Fragment,{key:A},a.createElement("span",{className:`location ${A<e.length-1?"crossed":" "} ${A===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),A<e.length-1&&a.createElement("span",{className:"space"},"   ")))),a.createElement("br",null),a.createElement("br",null),a.createElement("span",null," passionate about fashion soup and oranges"),a.createElement("br",null)))))}},3501:function(e,t,A){A.r(t);var n=A(6540),a=A(7581),l=A(5884);const r=a.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,i=a.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,c=a.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),A=(0,n.useMemo)((()=>[{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(A.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:a}=A[t];return(e+n*a)%360}))))}),30);return()=>clearInterval(n)}),[A]),n.createElement(r,null,A.map(((t,A)=>n.createElement(i,{key:A,rotation:e[A]},n.createElement(c,{src:t.src,alt:`Lobster ${A+1}`})))))}},8542:function(e,t,A){A.r(t);var n=A(6540),a=A(7581),l=A(2532),r=A(9639);const i=a.Ay.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
`,c=a.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,s=a.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: right;
`,o=a.Ay.div`
  flex: 1;
  margin-right: 20px;
`,d=a.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,m=a.Ay.p`
  font-size: 16px;
`,u=a.Ay.div`
  margin-bottom: 40px;
`,p=a.Ay.h2`
  font-size: 24px;
  margin-bottom: 20px;

`,E=a.Ay.div`
  flex: '1';
  max-width: '50%;
`,f=a.Ay.h3`
  font-size: 20px;
`,g=a.Ay.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,b=a.Ay.a`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`,h=a.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;t.default=function(){return n.createElement(r.default,null,n.createElement(i,null,n.createElement(c,null,n.createElement(l.S,{src:"../../../static/ESNetMRDPHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(7410)})),n.createElement(s,null,n.createElement(o,null,n.createElement(d,null,"Role"),n.createElement(m,null,"Creative Design Consultant")),n.createElement(o,null,n.createElement(d,null,"Skills"),n.createElement(m,null,"Performance Marketing",n.createElement("br",null),"Content Ideation",n.createElement("br",null),"User Survey and AB Testings",n.createElement("br",null),"Brand Design System",n.createElement("br",null),"User Persona")),n.createElement(o,null,n.createElement(d,null,"Timeline"),n.createElement(m,null,"Jan 2024 - June 2024")),n.createElement(o,null,n.createElement(d,null,"Team"),n.createElement(m,null,"UMA Design Team:",n.createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),n.createElement(u,null,n.createElement(p,null,"Background"),n.createElement(h,null,n.createElement(E,null,n.createElement(f,{style:{color:"#5a5a5a"}},"Yelp Home Services"),n.createElement(g,null,n.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",n.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",n.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),n.createElement(E,null,n.createElement(f,{style:{color:"#5a5a5a"}},"UMA Design"),n.createElement(g,null,n.createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",n.createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",n.createElement("b",null,"collaborate with clients spanning diverse industries."))))),n.createElement(u,null,n.createElement(p,null,"Project Scope"),n.createElement(h,null,n.createElement(b,{style:{flex:"1",maxWidth:"40%"}},n.createElement(l.S,{src:"../../../static/YelpFinal.jpeg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(7077)})),n.createElement(E,{style:{maxWidth:"60%"}},n.createElement(f,{style:{color:"#FF1A1A"}},"Performance Marketing"),n.createElement(g,null,"Deliver Performance Marketing ideations for ",n.createElement("b",null,"Home Services project")," to enhance engagement ",n.createElement("b",null," among Gen Z, millennials, and young homeowners ")," needing home services"),n.createElement(f,{style:{color:"#FF1A1A"}},"Brand Design System"),n.createElement(g,null,"Establish a robust ",n.createElement("b",null,"graphic design system")," that reinforces brand consistency and strengthens connection with three distinct audiences: ",n.createElement("b",null,"Consumers, Local Businesses, and Brand stakeholders"),"."),n.createElement("br",null),n.createElement(g,null,"<---","During our ",n.createElement("b",null,"final deliverable")," with Yelp's marketing team :)")))),n.createElement(u,null,n.createElement(p,null,"Reflection"),n.createElement(h,null,n.createElement(E,{style:{maxWidth:"50%"}},n.createElement(f,{style:{color:"#5a5a5a"}},"Designing Branding System:"),n.createElement(g,null,"The biggest challenge was creating a branding system for Yelp that remained cohesive under the main brand while catering to different target groups. Took trial and error to successfully differentiate the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience."),n.createElement(f,{style:{color:"#5a5a5a"}},"Video Concept Ideation and Storyboarding:"),n.createElement(g,null,"I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint, contrasting to catering personal memories and experiences.")),n.createElement(b,{style:{flex:"1",maxWidth:"50%"}},n.createElement(l.S,{src:"../../../static/YelpClientReveal.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(1921)}))))))}},9639:function(e,t,A){A.r(t);var n=A(6540),a=A(6143),l=A(4101),r=A(4057);t.default=function(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(a.default,null),n.createElement("main",null,t||n.createElement(r.default,null),"  "),n.createElement(l.default,null))}},5884:function(e,t,A){t.A=A.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"},1921:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFWiviM0D//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQLqEVrjruso9tzSEDP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEAAgMBAAAAAAAAAAAAAAAAITEBERJh/9oACAEBAAY/AvU6Wz1KlP/EABkQAAMBAQEAAAAAAAAAAAAAAAABIRExYf/aAAgBAQABPyG91uIUZ5+aPSoQIJEFPDdjp//aAAwDAQACAAMAAAAQnz//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QFX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QMX//xAAbEAEAAwADAQAAAAAAAAAAAAABABExIUFhUf/aAAgBAQABPxAAFMqjYFK8HZ7kOwD8YTQgDxWwJDm91AU6Op//2Q=="},"images":{"fallback":{"src":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg","srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/6e816/YelpClientReveal.jpg 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/af85c/YelpClientReveal.jpg 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg 2734w","sizes":"(min-width: 2734px) 2734px, 100vw"},"sources":[{"srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/aa42b/YelpClientReveal.webp 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/8ae20/YelpClientReveal.webp 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/fdd4d/YelpClientReveal.webp 2734w","type":"image/webp","sizes":"(min-width: 2734px) 2734px, 100vw"}]},"width":2734,"height":1537}')},7077:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdYRrieEiP8A/8QAGhABAQEAAwEAAAAAAAAAAAAAAQIAAwQRE//aAAgBAQABBQImkoqT1x2qNXO0fd3/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHxAAAgAFBQAAAAAAAAAAAAAAAAECERIxMlFxg5Pi/9oACAEBAAY/As11k6k+M8kqINDGFbFj/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFR0WH/2gAIAQEAAT8hKOydeoCZL4oRzzn58lBYzVPsrmhFbewoMT//2gAMAwEAAgADAAAAEHg//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EE5N/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/ENR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAQSExUbHR/9oACAEBAAE/EEeIFBg4MHfeL7QG2iMjHZ1MRQIL24OsApVQA9MScKApl8o26wBLQDmfM//Z"},"images":{"fallback":{"src":"/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg","srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/b0c3e/YelpFinal.jpg 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8b3ff/YelpFinal.jpg 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/4625e/YelpFinal.webp 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8c30b/YelpFinal.webp 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/f4976/YelpFinal.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":1964}')},7410:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVR42i2RXU/TcBjF+928Udv5JUz20mWgiQk3xAFGMDqcGPEbwC2JVyQmZG0HKJlb25Vu9IWupRuYQOAb/HhavXjyP+c55+L/nKNopodmXaCZgby+TEilX/AJqhkJn/JC9IoZl7jQ1V6Aaoi3H4lX/Nbkny5Y0b05zfE1urug7mTU7QXVYUrdzai5c5ns/8jeTqnZOUvhX5r+FbVRTrWctHxfDjOUDeuQNyenvP0z4OMk4N04YHf+QPvnCe+PHT6NfDpnDp3BOV/OYzadiCcrG1T3D9jN7+nGN+wkN3xNb9me3aG0ez9Y7h2xctqncxGx5cd8XzywfmiwdTyi68V8Hvp0xzHfwis27Yinqx9o7B3Q/uWx9ttjfeDRmWbsZPcoLfn6K3/OcnG6m9Byc3QnkQgS4bnEMaPpzYTn5U6X818H17Rk1xhl4k3R7ZiGnQmfoWjmlOdWxDMpoCLhq8alFBJK+EVJieykBCMssWYEZfhFWWq/KOhSsHDxVgrdinkEdcBtmjwGsREAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/47908197e6e240549a3cfa3cdbf59c78/8144b/ESNetMRDPHeader.png","srcSet":"/static/47908197e6e240549a3cfa3cdbf59c78/e0957/ESNetMRDPHeader.png 360w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/e54a2/ESNetMRDPHeader.png 720w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/8144b/ESNetMRDPHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/47908197e6e240549a3cfa3cdbf59c78/64838/ESNetMRDPHeader.webp 360w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/10ef5/ESNetMRDPHeader.webp 720w,\\n/static/47908197e6e240549a3cfa3cdbf59c78/42982/ESNetMRDPHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}')}}]);
//# sourceMappingURL=component---src-pages-projects-es-net-mrdp-js-6a23010f53ed1a127f6c.js.map