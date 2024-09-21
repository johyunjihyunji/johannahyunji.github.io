"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293,150,398,695,120,738,912,938,882],{7694:function(e,t,A){A.r(t),A.d(t,{default:function(){return r}});var a=A(4506),n=A(6540),l=A.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var r=function(){const{0:e,1:t}=(0,n.useState)(["Los Angeles, CA"]),A=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,n.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<A.length?[].concat((0,a.A)(e),[A[t]]):e}))}),2e3);return()=>clearInterval(e)}),[A]),n.createElement("div",{className:"container"},n.createElement("div",{className:"video-text-wrapper"},n.createElement("div",{className:"video-container"},n.createElement("img",{src:l,alt:"profile gif",style:{maxWidth:"40vw"}})),n.createElement("div",{className:"text-container"},n.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},n.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement("span",null," is a designer, multimedia artist, and engineer "),n.createElement("br",null),n.createElement("span",null," based in "),e.map(((t,A)=>n.createElement(n.Fragment,{key:A},n.createElement("span",{className:`location ${A<e.length-1?"crossed":" "} ${A===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),A<e.length-1&&n.createElement("span",{className:"space"},"   ")))),n.createElement("br",null),n.createElement("br",null),n.createElement("span",null," passionate about fashion soup and oranges"),n.createElement("br",null)))))}},3501:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(5884);const r=n.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,i=n.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${e=>`rotate(${e.rotation}deg)`};
  }
`,c=n.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,a.useState)([]),A=(0,a.useMemo)((()=>[{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1}]),[]);return(0,a.useEffect)((()=>{const e=Array(A.length).fill(0);t(e);const a=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:a,direction:n}=A[t];return(e+a*n)%360}))))}),30);return()=>clearInterval(a)}),[A]),a.createElement(r,null,A.map(((t,A)=>a.createElement(i,{key:A,rotation:e[A]},a.createElement(c,{src:t.src,alt:`Lobster ${A+1}`})))))}},5536:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(2532),r=A(4976);const i=n.Ay.div`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  position: relative;
`,c=n.Ay.div`
  display: inline-block;
  animation: scroll-left 20s linear infinite; /* Adjust speed here */
  
  &:hover {
    animation-play-state: paused; /* Pause on hover */
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0); /* Start from the original position */
    }
    100% {
      transform: translateX(-50%); /* Move to left by half of the container */
    }
  }
`,s=(0,n.Ay)(r.N_)`
  display: inline-block;
  height: 300px;
  margin-right: 20px;
  margin-left: 20px;
  transition: all 0.3s ease; // Smooth transition for all changes
  position: relative; // Add this
  z-index: 1; // Add this

  &:hover {
    z-index: 2; // Ensure hovered item is on top
    margin-left: 30px; // Increased margin
    margin-right: 30px; // Increased margin

    img {
      transform: scale(1.2); // Scale the image instead of the container
    }
  }

  img {
    transition: transform 0.3s ease; // Smooth transition for image scaling
  }
`;t.default=()=>a.createElement(i,null,a.createElement(c,null,a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)})),a.createElement(s,{to:"/Projects/ESnetMRDP"},a.createElement(l.S,{src:"../../../static/ESnetMRDPThumbnail.png",alt:"ESNet MRDP",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(4098)})),a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)})),a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)})),a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)})),a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)})),a.createElement(s,{to:"/Projects/Yelp"},a.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:A(1399)}))))},156:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(3501);const r=n.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,i=n.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return a.createElement(r,null,a.createElement(l.default,null),a.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},1162:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(5884),r=A(4976);const i=n.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,c=n.Ay.img`
  height: 80px; /* Adjust logo size */
`,s=n.Ay.nav`
  display: flex;
  gap: 20px; /* Space between menu items */
`,o=n.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>a.createElement(i,null,a.createElement(r.N_,{to:"/"},a.createElement(c,{src:l.A,alt:"Logo"})),a.createElement(s,null,a.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),a.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},6072:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(7694),r=A(5536);const i=n.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;t.default=function(){return a.createElement(i,null,a.createElement(l.default,null),a.createElement(r.default,null))}},8542:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(2532);const r=n.Ay.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
`,i=n.Ay.div`
  width: 100%;
  object-fit: cover;
  margin-bottom: 30px;
`,c=n.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: right;
`,s=n.Ay.div`
  flex: 1;
  margin-right: 20px;
`,o=n.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,d=n.Ay.p`
  font-size: 16px;
`,m=n.Ay.div`
  margin-bottom: 40px;
`,p=n.Ay.h2`
  font-size: 24px;
  margin-bottom: 20px;

`,b=n.Ay.div`
  flex: '1';
  max-width: '50%;
`,E=n.Ay.h3`
  font-size: 20px;
`,g=n.Ay.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,u=n.Ay.a`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`,f=n.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;t.default=function(){return a.createElement(r,null,a.createElement(i,null,a.createElement(l.S,{src:"../../../static/YelpHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(3563)})),a.createElement(c,null,a.createElement(s,null,a.createElement(o,null,"Role"),a.createElement(d,null,"Creative Design Consultant")),a.createElement(s,null,a.createElement(o,null,"Skills"),a.createElement(d,null,"Performance Marketing",a.createElement("br",null),"Content Ideation",a.createElement("br",null),"User Survey and AB Testings",a.createElement("br",null),"Brand Design System",a.createElement("br",null),"User Persona")),a.createElement(s,null,a.createElement(o,null,"Timeline"),a.createElement(d,null,"Jan 2024 - June 2024")),a.createElement(s,null,a.createElement(o,null,"Team"),a.createElement(d,null,"UMA Design Team:",a.createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),a.createElement(m,null,a.createElement(p,null,"Background"),a.createElement(f,null,a.createElement(b,null,a.createElement(E,{style:{color:"#5a5a5a"}},"Yelp Home Services"),a.createElement(g,null,a.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",a.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",a.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),a.createElement(b,null,a.createElement(E,{style:{color:"#5a5a5a"}},"UMA Design"),a.createElement(g,null,a.createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",a.createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",a.createElement("b",null,"collaborate with clients spanning diverse industries."))))),a.createElement(m,null,a.createElement(p,null,"Project Scope"),a.createElement(f,null,a.createElement(u,{style:{flex:"1",maxWidth:"40%"}},a.createElement(l.S,{src:"../../../static/YelpFinal.jpeg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(7077)})),a.createElement(b,{style:{maxWidth:"60%"}},a.createElement(E,{style:{color:"#FF1A1A"}},"Performance Marketing"),a.createElement(g,null,"Deliver Performance Marketing ideations for ",a.createElement("b",null,"Home Services project")," to enhance engagement ",a.createElement("b",null," among Gen Z, millennials, and young homeowners ")," needing home services"),a.createElement(E,{style:{color:"#FF1A1A"}},"Brand Design System"),a.createElement(g,null,"Establish a robust ",a.createElement("b",null,"graphic design system")," that reinforces brand consistency and strengthens connection with three distinct audiences: ",a.createElement("b",null,"Consumers, Local Businesses, and Brand stakeholders"),"."),a.createElement("br",null),a.createElement(g,null,"<---","During our ",a.createElement("b",null,"final deliverable")," with Yelp's marketing team :)")))),a.createElement(m,null,a.createElement(p,null,"Reflection"),a.createElement(f,null,a.createElement(b,{style:{maxWidth:"50%"}},a.createElement(E,{style:{color:"#5a5a5a"}},"Designing Branding System:"),a.createElement(g,null,"The biggest challenge was creating a branding system for Yelp that remained cohesive under the main brand while catering to different target groups. Took trial and error to successfully differentiate the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience."),a.createElement(E,{style:{color:"#5a5a5a"}},"Video Concept Ideation and Storyboarding:"),a.createElement(g,null,"I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint, contrasting to catering personal memories and experiences.")),a.createElement(u,{style:{flex:"1",maxWidth:"50%"}},a.createElement(l.S,{src:"../../../static/YelpClientReveal.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(1921)})))))}},422:function(e,t,A){A.r(t);var a=A(6540),n=A(7581),l=A(2532);const r=n.Ay.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
`,i=n.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,c=n.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: right;
`,s=n.Ay.div`
  flex: 1;
  margin-right: 20px;
`,o=n.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,d=n.Ay.p`
  font-size: 16px;
`,m=n.Ay.div`
  margin-bottom: 40px;
`,p=n.Ay.h2`
  font-size: 24px;
  margin-bottom: 20px;

`,b=n.Ay.div`
  flex: '1';
  max-width: '50%;
`,E=n.Ay.h3`
  font-size: 20px;
`,g=n.Ay.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,u=n.Ay.a`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`,f=n.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;t.default=function(){return a.createElement(r,null,a.createElement(i,null,a.createElement(l.S,{src:"../../../static/YelpHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(2828)})),a.createElement(c,null,a.createElement(s,null,a.createElement(o,null,"Role"),a.createElement(d,null,"Creative Design Consultant")),a.createElement(s,null,a.createElement(o,null,"Skills"),a.createElement(d,null,"Performance Marketing",a.createElement("br",null),"Content Ideation",a.createElement("br",null),"User Survey and AB Testings",a.createElement("br",null),"Brand Design System",a.createElement("br",null),"User Persona")),a.createElement(s,null,a.createElement(o,null,"Timeline"),a.createElement(d,null,"Jan 2024 - June 2024")),a.createElement(s,null,a.createElement(o,null,"Team"),a.createElement(d,null,"UMA Design Team:",a.createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),a.createElement(m,null,a.createElement(p,null,"Background"),a.createElement(f,null,a.createElement(b,null,a.createElement(E,{style:{color:"#5a5a5a"}},"Yelp Home Services"),a.createElement(g,null,a.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",a.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",a.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),a.createElement(b,null,a.createElement(E,{style:{color:"#5a5a5a"}},"UMA Design"),a.createElement(g,null,a.createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",a.createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",a.createElement("b",null,"collaborate with clients spanning diverse industries."))))),a.createElement(m,null,a.createElement(p,null,"Project Scope"),a.createElement(f,null,a.createElement(u,{style:{flex:"1",maxWidth:"40%"}},a.createElement(l.S,{src:"../../../static/YelpFinal.jpeg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(3167)})),a.createElement(b,{style:{maxWidth:"60%"}},a.createElement(E,{style:{color:"#FF1A1A"}},"Performance Marketing"),a.createElement(g,null,"Deliver Performance Marketing ideations for ",a.createElement("b",null,"Home Services project")," to enhance engagement ",a.createElement("b",null," among Gen Z, millennials, and young homeowners ")," needing home services"),a.createElement(E,{style:{color:"#FF1A1A"}},"Brand Design System"),a.createElement(g,null,"Establish a robust ",a.createElement("b",null,"graphic design system")," that reinforces brand consistency and strengthens connection with three distinct audiences: ",a.createElement("b",null,"Consumers, Local Businesses, and Brand stakeholders"),"."),a.createElement("br",null),a.createElement(g,null,"<---","During our ",a.createElement("b",null,"final deliverable")," with Yelp's marketing team :)")))),a.createElement(m,null,a.createElement(p,null,"Reflection"),a.createElement(f,null,a.createElement(b,{style:{maxWidth:"50%"}},a.createElement(E,{style:{color:"#5a5a5a"}},"Designing Branding System:"),a.createElement(g,null,"The biggest challenge was creating a branding system for Yelp that remained cohesive under the main brand while catering to different target groups. Took trial and error to successfully differentiate the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience."),a.createElement(E,{style:{color:"#5a5a5a"}},"Video Concept Ideation and Storyboarding:"),a.createElement(g,null,"I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint, contrasting to catering personal memories and experiences.")),a.createElement(u,{style:{flex:"1",maxWidth:"50%"}},a.createElement(l.S,{src:"../../../static/YelpClientReveal.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:A(537)})))))}},9639:function(e,t,A){A.r(t);var a=A(6540),n=A(4976),l=A(7767),r=A(1162),i=A(156),c=A(6072),s=A(422),o=A(8542);t.default=function(){return a.createElement(n.Kd,null,a.createElement(r.default,null),a.createElement(l.BV,null,a.createElement(l.qh,{path:"/",element:a.createElement(c.default,null)}),a.createElement(l.qh,{path:"/Projects/Yelp",element:a.createElement(s.default,null)}),a.createElement(l.qh,{path:"/Projects/ESNetMRDP",element:a.createElement(o.default,null)})),a.createElement(i.default,null))}},5884:function(e,t,A){t.A=A.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"},537:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFWiviM0D//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQLqEVrjruso9tzSEDP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEAAgMBAAAAAAAAAAAAAAAAITEBERJh/9oACAEBAAY/AvU6Wz1KlP/EABkQAAMBAQEAAAAAAAAAAAAAAAABIRExYf/aAAgBAQABPyG91uIUZ5+aPSoQIJEFPDdjp//aAAwDAQACAAMAAAAQnz//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QFX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QMX//xAAbEAEAAwADAQAAAAAAAAAAAAABABExIUFhUf/aAAgBAQABPxAAFMqjYFK8HZ7kOwD8YTQgDxWwJDm91AU6Op//2Q=="},"images":{"fallback":{"src":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg","srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/6e816/YelpClientReveal.jpg 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/af85c/YelpClientReveal.jpg 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg 2734w","sizes":"(min-width: 2734px) 2734px, 100vw"},"sources":[{"srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/aa42b/YelpClientReveal.webp 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/8ae20/YelpClientReveal.webp 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/fdd4d/YelpClientReveal.webp 2734w","type":"image/webp","sizes":"(min-width: 2734px) 2734px, 100vw"}]},"width":2734,"height":1537}')},3167:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdYRrieEiP8A/8QAGhABAQEAAwEAAAAAAAAAAAAAAQIAAwQRE//aAAgBAQABBQImkoqT1x2qNXO0fd3/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHxAAAgAFBQAAAAAAAAAAAAAAAAECERIxMlFxg5Pi/9oACAEBAAY/As11k6k+M8kqINDGFbFj/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFR0WH/2gAIAQEAAT8hKOydeoCZL4oRzzn58lBYzVPsrmhFbewoMT//2gAMAwEAAgADAAAAEHg//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EE5N/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/ENR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAQSExUbHR/9oACAEBAAE/EEeIFBg4MHfeL7QG2iMjHZ1MRQIL24OsApVQA9MScKApl8o26wBLQDmfM//Z"},"images":{"fallback":{"src":"/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg","srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/b0c3e/YelpFinal.jpg 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8b3ff/YelpFinal.jpg 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/4625e/YelpFinal.webp 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8c30b/YelpFinal.webp 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/f4976/YelpFinal.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":1964}')},1399:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR42lVUW0tUURQ+3h8MukCFQURP4UNl1Ng4xytO5iUzJUMwlPLyYhmTGirazdCszPJeYZGVYkpTYzTNaDPq3JybU8pgkQXlQ/bQb/hae5+N2cPirL324tvfunxHCtf4EC67EK6ZI/OTOejsoS+ZzHy/uHMJ30nmJt8n7r0il8V9kDiYbKWDTUmWLSLRrvgMSDMjjPkiVxa5nIBNiVNMCtd41yV4ECHPkrk5a8X3kjnI7OLeRuZay1XYugSohzH0Ka+wC6IcSn4EWRixCUtwIor8UPqGqR3kOxGipofJohJsPK6U7BZVsZJ5mVbxggMbUizYkWHEpjQzNqaasD39HTanTyMmy4LdOUZs0VqwM2sSu7LMiE610qMOUeFayUpzWZnSYQ+u9k1DV6dDZn4RLjY24869DhjevsKThx24XFuJ8spijOmHMWMzoEBngnTAj6gkwVAZioezY32RVE70jQXQN9CGhpoqnC8vQWNVCRb9Fjy+VY+zGfvRlZeM4FIAX787UdJogRTnIUDRQ5n30MknxJouHZpB//gnGKcMaDhdiPrCXLSWFmPpgx6m4X70VGgRzJSx+mIUv/+soOwGAeyzE6BdTJ+X7OfrwKYpqdzE8COszkl09vbC+GYEn4OzWPHqsbryBQv6Ecxn5+BHaRF+BSZQfp3aFOcjQM/ankp8aeUZvhpSwhxa7hvwsl2HZ+2NcJmfY9nYCuPANZgM45iencS3wV7oW+rx+nYZTp0ZJBLziEq0cQyGtQbIJhWaPI+m6laMHY2F/mYNlld/wv3+KUzdF9DdWofRoS5MjT1Az91mTHRV4HjZIw4YyQDZ4ssMkMmJS8/DKatzOpGfdwna7FpknbyC5NwmJKUWIE1binSKHcmshvZYHXLyzmGPdgiSZkERAleR/99QlCk5EKKaouHYIMVPQzpIa6Gaw9bYCkTvbaO18iMk3kxmpfgsQtVWsdDrpcd/BDbxgpvTj0xiXxc1m9ogB5Byog0xml6EyIsUJznSXUSim8vwP+nxteGLzdTCaHuFDL3iTLIjkIzCDmxL6IMkBxVNcxCvWGYhPY3yt/kLWoiS0LXsoaYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png","srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/4e4d4/YelpThumbnail.png 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/2c67b/YelpThumbnail.png 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/c2d17/YelpThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/f6ea0/YelpThumbnail.webp 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/b5535/YelpThumbnail.webp 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/f5c71/YelpThumbnail.webp 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/0d27e/YelpThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')},4098:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADR0lEQVR42m2SWUwTURSGbyml7YCKu6VUweXBRHGNikosJIgoFVxwefHViG/GmPii8cFXY4xCUHF9AaMPLtEEmU5npjMIgnEhisZYxUhLFxmCxqAwv2emBUSd5OS/d+65X/5z7mHMnwnm52Cq8Mead1LYae1EGu2t/qmkU+CV72Gn8gFVyjtUKl2oVsJYFDhMeQwWOmdJgHMcZIYNk4UC5ATKMUlYiqJgowkoEE9ig3gV+5Q4qoIh7FDeY48SgyewPwWcPA60EMhiwgxnVqyVLmGX+hEFwdOokJ/Dp7xGnnQAnJCPjdJN2r9CeVDFYuno+D1Dx0s2oBxs/pm0Tscy8RQOyIPwCHvAWjKQwc9KtqGF8lo42Hk30oXplGtP3U9VmKRbqcQlKAxeQbmioLj1IXLb9sHTuhc2dTaYYgMLOigIqFCohtJesJOJLExo2+imhJq9V4miSn2N6sanWFd7HFnn7Jh21gVXXT7c9QuQUz8fc+rmwVWbB1d9PmzN1DOB+xuYadpeI9ehWo1gp/QW22qOoKysEmWlu+H1VqC42IeSEp+pRng3VcBbvBXZTS4wyQEL/8d0jALT/dnIlX2Y9qAUF5qv4ef3YYRjMUQTX9EXT6A3GkckFkc8HofWr+HZyxeYeScXTMwg4D8OOfOl0gL08y7DZfUKjG/o1xBGRkag6zpGv65wFG2f+xAOf8GMOx4C2lOvPOaQG3tyq5gNds+Ci8EGvAv1IdTTg95wGEM/fkD9+IVAEfQOfEMkruHT50/k0JN0ODY23MTBThOzTIcNhkMylRjox8C3QQwP/8KbvgSEcAJyrB9DdNZrOnSngP8p2dA0cRLYfQfO363Fh84QVP8TtAee4k1nN6KhCHreR9DwqB1yRze6OjvgubUQjNo08VF4Tie6bqrg1N2PF+grG9frK24UYvn11Vh5Y52h+opra/X1TUV6YdMqffOtg3rN7Va96MEh3cLb6G4mBTH8xGAikSWyK5Gaa0dyiGUqRaY5kxjmqJXY0vES+W01yGutwcK2Y7ArS2CVaOhFR/Ke6EwqUTVyqCWV0yxG8NzA0sAJvVLpRmmwGXMD+wdXS2f6c4XtWo7g09wUjGdmLpWpjTF4TvsNDK+nAb0FC8kAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png","srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/4e4d4/ESnetMRDPThumbnail.png 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/2c67b/ESnetMRDPThumbnail.png 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/099ef/ESnetMRDPThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/f6ea0/ESnetMRDPThumbnail.webp 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/b5535/ESnetMRDPThumbnail.webp 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/f5c71/ESnetMRDPThumbnail.webp 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/9d9de/ESnetMRDPThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')},1921:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFWiviM0D//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQLqEVrjruso9tzSEDP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEAAgMBAAAAAAAAAAAAAAAAITEBERJh/9oACAEBAAY/AvU6Wz1KlP/EABkQAAMBAQEAAAAAAAAAAAAAAAABIRExYf/aAAgBAQABPyG91uIUZ5+aPSoQIJEFPDdjp//aAAwDAQACAAMAAAAQnz//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QFX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QMX//xAAbEAEAAwADAQAAAAAAAAAAAAABABExIUFhUf/aAAgBAQABPxAAFMqjYFK8HZ7kOwD8YTQgDxWwJDm91AU6Op//2Q=="},"images":{"fallback":{"src":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg","srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/6e816/YelpClientReveal.jpg 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/af85c/YelpClientReveal.jpg 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg 2734w","sizes":"(min-width: 2734px) 2734px, 100vw"},"sources":[{"srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/aa42b/YelpClientReveal.webp 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/8ae20/YelpClientReveal.webp 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/fdd4d/YelpClientReveal.webp 2734w","type":"image/webp","sizes":"(min-width: 2734px) 2734px, 100vw"}]},"width":2734,"height":1537}')},3563:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR42hWQXWsTURRF+zd8qBE0ltgWQ5pkJjOJY0nDpNFWsEmDNaUWTaMSSiFYTGoQbEAU/bnOzP2Yuzx9WC+Hy9r77rXcC6zbjciDQPAxvof2qqhanay2I9RIvTqp75OGIckdzYik4ZP1eujbH+jRKebNEBu/YM3Nv1u3/EYex9iwiWm20FURlSvCUxE1SO6EIvrn+SQSkDRC0rrcogh1PESfjDBBA9t9KcLrpXWrW1x3nzx6jnm2i+4PUOML1Pk5avYF9WkqLQPS0Rn6z1/S/pDk8BVZp4PaizHjz9jXR+Qn70QYH1iWN7jBMW6xkONb7Nc5ZvVTvrNCzReo9x/I/DpKmuhfv8kODskGEiqtzEjeTybYJxu42UyE00vLqI+bfsTdXJMPjjChJ1v66FAksqnyBF92rVRQW5vo7W30ZgnzuIgtbQgl8sI6rlwW4dXCcjqGyQzXP8NFXfL2Prbdw0R72FYH22xLQAuzIxuXq9Kmgi1ukT8S0YMi+fpD3P0C7l6B/zPAMnz+FruqAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png","srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/e0957/YelpHeader.png 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/e54a2/YelpHeader.png 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/64838/YelpHeader.webp 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/10ef5/YelpHeader.webp 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/42982/YelpHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}')},7077:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdYRrieEiP8A/8QAGhABAQEAAwEAAAAAAAAAAAAAAQIAAwQRE//aAAgBAQABBQImkoqT1x2qNXO0fd3/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHxAAAgAFBQAAAAAAAAAAAAAAAAECERIxMlFxg5Pi/9oACAEBAAY/As11k6k+M8kqINDGFbFj/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFR0WH/2gAIAQEAAT8hKOydeoCZL4oRzzn58lBYzVPsrmhFbewoMT//2gAMAwEAAgADAAAAEHg//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EE5N/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/ENR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAQSExUbHR/9oACAEBAAE/EEeIFBg4MHfeL7QG2iMjHZ1MRQIL24OsApVQA9MScKApl8o26wBLQDmfM//Z"},"images":{"fallback":{"src":"/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg","srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/b0c3e/YelpFinal.jpg 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8b3ff/YelpFinal.jpg 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/4625e/YelpFinal.webp 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8c30b/YelpFinal.webp 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/f4976/YelpFinal.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":1964}')},2828:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR42hWQXWsTURRF+zd8qBE0ltgWQ5pkJjOJY0nDpNFWsEmDNaUWTaMSSiFYTGoQbEAU/bnOzP2Yuzx9WC+Hy9r77rXcC6zbjciDQPAxvof2qqhanay2I9RIvTqp75OGIckdzYik4ZP1eujbH+jRKebNEBu/YM3Nv1u3/EYex9iwiWm20FURlSvCUxE1SO6EIvrn+SQSkDRC0rrcogh1PESfjDBBA9t9KcLrpXWrW1x3nzx6jnm2i+4PUOML1Pk5avYF9WkqLQPS0Rn6z1/S/pDk8BVZp4PaizHjz9jXR+Qn70QYH1iWN7jBMW6xkONb7Nc5ZvVTvrNCzReo9x/I/DpKmuhfv8kODskGEiqtzEjeTybYJxu42UyE00vLqI+bfsTdXJMPjjChJ1v66FAksqnyBF92rVRQW5vo7W30ZgnzuIgtbQgl8sI6rlwW4dXCcjqGyQzXP8NFXfL2Prbdw0R72FYH22xLQAuzIxuXq9Kmgi1ukT8S0YMi+fpD3P0C7l6B/zPAMnz+FruqAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png","srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/e0957/YelpHeader.png 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/e54a2/YelpHeader.png 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/64838/YelpHeader.webp 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/10ef5/YelpHeader.webp 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/42982/YelpHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4cda5b571144aa4c3661.js.map