"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[882,398,120,738],{3501:function(e,A,t){t.r(A);var n=t(6540),a=t(7581),l=t(5884);const r=a.Ay.div`
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
`,s=a.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;A.default=()=>{const{0:e,1:A}=(0,n.useState)([]),t=(0,n.useMemo)((()=>[{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(t.length).fill(0);A(e);const n=setInterval((()=>{A((e=>e.map(((e,A)=>{const{speed:n,direction:a}=t[A];return(e+n*a)%360}))))}),30);return()=>clearInterval(n)}),[t]),n.createElement(r,null,t.map(((A,t)=>n.createElement(i,{key:t,rotation:e[t]},n.createElement(s,{src:A.src,alt:`Lobster ${t+1}`})))))}},156:function(e,A,t){t.r(A);var n=t(6540),a=t(7581),l=t(3501);const r=a.Ay.footer`
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
`;A.default=()=>{const e=(new Date).getFullYear();return n.createElement(r,null,n.createElement(l.default,null),n.createElement(i,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},1162:function(e,A,t){t.r(A);var n=t(6540),a=t(7581),l=t(5884),r=t(4810);const i=a.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,s=a.Ay.img`
  height: 80px; /* Adjust logo size */
`,c=a.Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`,o=a.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;A.default=()=>n.createElement(i,null,n.createElement(r.N_,{to:"/"},n.createElement(s,{src:l.A,alt:"Logo"})),n.createElement(c,null,n.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),n.createElement(o,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},422:function(e,A,t){t.r(A);var n=t(6540),a=t(7581),l=t(2532),r=t(1162),i=t(156);const s=a.Ay.div`
  max-width: 80vw;
  margin: 0 auto;
  padding: 20px;
`,c=a.Ay.div`
  width: 100%;
  margin-bottom: 30px;
`,o=a.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  text-align: right;
`,d=a.Ay.div`
  flex: 1;
  margin-right: 20px;
`,m=a.Ay.h3`
  font-size: 18px;
  margin-bottom: 10px;
`,p=a.Ay.p`
  font-size: 16px;
`,E=a.Ay.div`
  margin-bottom: 40px;
`,u=a.Ay.h2`
  font-size: 24px;
  margin-bottom: 20px;

`,b=a.Ay.div`
  flex: '1';
  max-width: '50%;
`,g=a.Ay.h3`
  font-size: 20px;
`,f=a.Ay.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`,h=a.Ay.a`
  width: 100%;
  object-fit: cover;
  margin-bottom: 20px;
`,x=a.Ay.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;A.default=function(){return n.createElement("div",null,n.createElement(r.default,null),n.createElement(s,null,n.createElement(c,null,n.createElement(l.S,{src:"../../../static/YelpHeader.png",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:t(2828)})),n.createElement(o,null,n.createElement(d,null,n.createElement(m,null,"Role"),n.createElement(p,null,"Creative Design Consultant")),n.createElement(d,null,n.createElement(m,null,"Skills"),n.createElement(p,null,"Performance Marketing",n.createElement("br",null),"Content Ideation",n.createElement("br",null),"User Survey and AB Testings",n.createElement("br",null),"Brand Design System",n.createElement("br",null),"User Persona")),n.createElement(d,null,n.createElement(m,null,"Timeline"),n.createElement(p,null,"Jan 2024 - June 2024")),n.createElement(d,null,n.createElement(m,null,"Team"),n.createElement(p,null,"UMA Design Team:",n.createElement("br",null),"Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler"))),n.createElement(E,null,n.createElement(u,null,"Background"),n.createElement(x,null,n.createElement(b,null,n.createElement(g,{style:{color:"#5a5a5a"}},"Yelp Home Services"),n.createElement(f,null,n.createElement("b",null,"Yelp"),", founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. As part of this project, my team focused on promoting ",n.createElement("b",null,"Yelp's Home Services"),", which connects consumers with trusted professionals for various home improvement tasks. By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to ",n.createElement("b",null,"broaden the scope of Yelp's recognition and enhance visibility")," for these home service providers.")),n.createElement(b,null,n.createElement(g,{style:{color:"#5a5a5a"}},"UMA Design"),n.createElement(f,null,n.createElement("b",null,"Design Team at the Undergraduate Marketing Association")," is a creative group of individuals passionate about ",n.createElement("b",null,"visual storytelling and crafting impactful brand experiences"),". We are dedicated to pushing the boundaries of design and creating innovative marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we ",n.createElement("b",null,"collaborate with clients spanning diverse industries."))))),n.createElement(E,null,n.createElement(u,null,"Project Scope"),n.createElement(x,null,n.createElement(h,{style:{flex:"1",maxWidth:"40%"}},n.createElement(l.S,{src:"../../../static/YelpFinal.jpeg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:t(3167)})),n.createElement(b,{style:{maxWidth:"60%"}},n.createElement(g,{style:{color:"#FF1A1A"}},"Performance Marketing"),n.createElement(f,null,"Deliver Performance Marketing ideations for ",n.createElement("b",null,"Home Services project")," to enhance engagement ",n.createElement("b",null," among Gen Z, millennials, and young homeowners ")," needing home services"),n.createElement(g,{style:{color:"#FF1A1A"}},"Brand Design System"),n.createElement(f,null,"Establish a robust ",n.createElement("b",null,"graphic design system")," that reinforces brand consistency and strengthens connection with three distinct audiences: ",n.createElement("b",null,"Consumers, Local Businesses, and Brand stakeholders"),"."),n.createElement("br",null),n.createElement(f,null,"<---","During our ",n.createElement("b",null,"final deliverable")," with Yelp's marketing team :)")))),n.createElement(E,null,n.createElement(u,null,"Reflection"),n.createElement(x,null,n.createElement(b,{style:{maxWidth:"50%"}},n.createElement(g,{style:{color:"#5a5a5a"}},"Designing Branding System:"),n.createElement(f,null,"The biggest challenge was creating a branding system for Yelp that remained cohesive under the main brand while catering to different target groups. Took trial and error to successfully differentiate the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience."),n.createElement(g,{style:{color:"#5a5a5a"}},"Video Concept Ideation and Storyboarding:"),n.createElement(f,null,"I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint, contrasting to catering personal memories and experiences.")),n.createElement(h,{style:{flex:"1",maxWidth:"50%"}},n.createElement(l.S,{src:"../../../static/YelpClientReveal.jpg",alt:"Project Header",placeholder:"blurred",layout:"constrained",style:{borderRadius:"10px"},__imageData:t(537)}))))),n.createElement(i.default,null))}},5884:function(e,A,t){A.A=t.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"},537:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAFWiviM0D//xAAbEAACAgMBAAAAAAAAAAAAAAABAgADERITIv/aAAgBAQABBQLqEVrjruso9tzSEDP/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAaEAEAAgMBAAAAAAAAAAAAAAAAITEBERJh/9oACAEBAAY/AvU6Wz1KlP/EABkQAAMBAQEAAAAAAAAAAAAAAAABIRExYf/aAAgBAQABPyG91uIUZ5+aPSoQIJEFPDdjp//aAAwDAQACAAMAAAAQnz//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QFX//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8QMX//xAAbEAEAAwADAQAAAAAAAAAAAAABABExIUFhUf/aAAgBAQABPxAAFMqjYFK8HZ7kOwD8YTQgDxWwJDm91AU6Op//2Q=="},"images":{"fallback":{"src":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg","srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/6e816/YelpClientReveal.jpg 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/af85c/YelpClientReveal.jpg 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/ce9cb/YelpClientReveal.jpg 2734w","sizes":"(min-width: 2734px) 2734px, 100vw"},"sources":[{"srcSet":"/static/09c57b3d8c78d81e462b6d0cd9944dd7/aa42b/YelpClientReveal.webp 684w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/8ae20/YelpClientReveal.webp 1367w,\\n/static/09c57b3d8c78d81e462b6d0cd9944dd7/fdd4d/YelpClientReveal.webp 2734w","type":"image/webp","sizes":"(min-width: 2734px) 2734px, 100vw"}]},"width":2734,"height":1537}')},3167:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQBAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAACAAH/2gAMAwEAAhADEAAAAdYRrieEiP8A/8QAGhABAQEAAwEAAAAAAAAAAAAAAQIAAwQRE//aAAgBAQABBQImkoqT1x2qNXO0fd3/xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPwGH/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHxAAAgAFBQAAAAAAAAAAAAAAAAECERIxMlFxg5Pi/9oACAEBAAY/As11k6k+M8kqINDGFbFj/8QAGxABAAMAAwEAAAAAAAAAAAAAAQARITFR0WH/2gAIAQEAAT8hKOydeoCZL4oRzzn58lBYzVPsrmhFbewoMT//2gAMAwEAAgADAAAAEHg//8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAEDAQE/EE5N/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEh/9oACAECAQE/ENR//8QAHBABAQACAgMAAAAAAAAAAAAAAREAQSExUbHR/9oACAEBAAE/EEeIFBg4MHfeL7QG2iMjHZ1MRQIL24OsApVQA9MScKApl8o26wBLQDmfM//Z"},"images":{"fallback":{"src":"/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg","srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/b0c3e/YelpFinal.jpg 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8b3ff/YelpFinal.jpg 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/2b5af/YelpFinal.jpg 3024w","sizes":"(min-width: 3024px) 3024px, 100vw"},"sources":[{"srcSet":"/static/dadf82752109d70a9076b72f88f7ab4b/4625e/YelpFinal.webp 756w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/8c30b/YelpFinal.webp 1512w,\\n/static/dadf82752109d70a9076b72f88f7ab4b/f4976/YelpFinal.webp 3024w","type":"image/webp","sizes":"(min-width: 3024px) 3024px, 100vw"}]},"width":3024,"height":1964}')},2828:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABhklEQVR42hWQXWsTURRF+zd8qBE0ltgWQ5pkJjOJY0nDpNFWsEmDNaUWTaMSSiFYTGoQbEAU/bnOzP2Yuzx9WC+Hy9r77rXcC6zbjciDQPAxvof2qqhanay2I9RIvTqp75OGIckdzYik4ZP1eujbH+jRKebNEBu/YM3Nv1u3/EYex9iwiWm20FURlSvCUxE1SO6EIvrn+SQSkDRC0rrcogh1PESfjDBBA9t9KcLrpXWrW1x3nzx6jnm2i+4PUOML1Pk5avYF9WkqLQPS0Rn6z1/S/pDk8BVZp4PaizHjz9jXR+Qn70QYH1iWN7jBMW6xkONb7Nc5ZvVTvrNCzReo9x/I/DpKmuhfv8kODskGEiqtzEjeTybYJxu42UyE00vLqI+bfsTdXJMPjjChJ1v66FAksqnyBF92rVRQW5vo7W30ZgnzuIgtbQgl8sI6rlwW4dXCcjqGyQzXP8NFXfL2Prbdw0R72FYH22xLQAuzIxuXq9Kmgi1ukT8S0YMi+fpD3P0C7l6B/zPAMnz+FruqAAAAAElFTkSuQmCC"},"images":{"fallback":{"src":"/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png","srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/e0957/YelpHeader.png 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/e54a2/YelpHeader.png 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/8144b/YelpHeader.png 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3145e597bbe668e659dba0f25dcb838f/64838/YelpHeader.webp 360w,\\n/static/3145e597bbe668e659dba0f25dcb838f/10ef5/YelpHeader.webp 720w,\\n/static/3145e597bbe668e659dba0f25dcb838f/42982/YelpHeader.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":401}')}}]);
//# sourceMappingURL=component---src-pages-projects-yelp-js-7457a5b99e33f65bad23.js.map