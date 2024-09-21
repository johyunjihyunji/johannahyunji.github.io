"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[293,173,150,398,695,120,738],{4057:function(e,t,a){a.r(t);var n=a(6540),r=a(7581),l=a(7694),i=a(5536);const c=r.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;t.default=function(){return n.createElement(c,null,n.createElement(l.default,null),n.createElement(i.default,null))}},7694:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(4506),r=a(6540),l=a.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var i=function(){const{0:e,1:t}=(0,r.useState)(["Los Angeles, CA"]),a=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,r.useEffect)((()=>{const e=setInterval((()=>{t((e=>{const t=e.length;return t<a.length?[].concat((0,n.A)(e),[a[t]]):e}))}),2e3);return()=>clearInterval(e)}),[a]),r.createElement("div",{className:"container"},r.createElement("div",{className:"video-text-wrapper"},r.createElement("div",{className:"video-container"},r.createElement("img",{src:l,alt:"profile gif",style:{maxWidth:"40vw"}})),r.createElement("div",{className:"text-container"},r.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},r.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),r.createElement("br",null),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," is a designer, multimedia artist, and engineer "),r.createElement("br",null),r.createElement("span",null," based in "),e.map(((t,a)=>r.createElement(r.Fragment,{key:a},r.createElement("span",{className:`location ${a<e.length-1?"crossed":" "} ${a===e.length-1&&"Where Now ?"===t?"red-question-mark":""}`},t),a<e.length-1&&r.createElement("span",{className:"space"},"   ")))),r.createElement("br",null),r.createElement("br",null),r.createElement("span",null," passionate about fashion soup and oranges"),r.createElement("br",null)))))}},3501:function(e,t,a){a.r(t);var n=a(6540),r=a(7581),l=a(5884);const i=r.Ay.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`,c=r.Ay.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${e=>`rotate(${e.rotation}deg)`};

  &:hover {
    transform: scale(1.2) ${e=>`rotate(${e.rotation}deg)`};
  }
`,s=r.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;t.default=()=>{const{0:e,1:t}=(0,n.useState)([]),a=(0,n.useMemo)((()=>[{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1},{src:l.A,speed:1,direction:1},{src:l.A,speed:4,direction:-1},{src:l.A,speed:2,direction:1},{src:l.A,speed:3,direction:-1}]),[]);return(0,n.useEffect)((()=>{const e=Array(a.length).fill(0);t(e);const n=setInterval((()=>{t((e=>e.map(((e,t)=>{const{speed:n,direction:r}=a[t];return(e+n*r)%360}))))}),30);return()=>clearInterval(n)}),[a]),n.createElement(i,null,a.map(((t,a)=>n.createElement(c,{key:a,rotation:e[a]},n.createElement(s,{src:t.src,alt:`Lobster ${a+1}`})))))}},5536:function(e,t,a){a.r(t);var n=a(6540),r=a(7581),l=a(2532),i=a(4810);const c=r.Ay.div`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  position: relative;
`,s=r.Ay.nav`
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
`,o=(0,r.Ay)(i.N_)`
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
`;t.default=()=>n.createElement(c,null,n.createElement(s,null,n.createElement(o,{to:"/Projects/Yelp"},n.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:a(1399)})),n.createElement(o,{to:"/Projects/ESnetMRDP"},n.createElement(l.S,{src:"../../../static/ESnetMRDPThumbnail.png",alt:"ESNet MRDP",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:a(4098)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:a(1399)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:a(1399)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(l.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:a(1399)}))))},156:function(e,t,a){a.r(t);var n=a(6540),r=a(7581),l=a(3501);const i=r.Ay.footer`
  color: #FF1700;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: 100px;
  margin-bottom: 100px;
`,c=r.Ay.p`
  margin: 0;
  font-size: 16px;
  color: #FF1700;
`;t.default=()=>{const e=(new Date).getFullYear();return n.createElement(i,null,n.createElement(l.default,null),n.createElement(c,{style:{fontFamily:"'Inter', sans-serif"}},"© ",e," Johanna Lee"))}},1162:function(e,t,a){a.r(t);var n=a(6540),r=a(7581),l=a(5884),i=a(4810);const c=r.Ay.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  font-size: 20px;
  fontFamily: "'Inter', sans-serif";
  margin-right: 2vw;
`,s=r.Ay.img`
  height: 80px; /* Adjust logo size */
`,o=r.Ay.div`
  display: flex;
  gap: 20px; /* Space between menu items */
`,d=r.Ay.a`
  color: #FF1700;
  text-decoration: none; /* Remove underline */
  font-family: 'Inter', sans-serif;
  
  &:hover {
    text-decoration: underline; /* Add underline on hover */
  }
`;t.default=()=>n.createElement(c,null,n.createElement(i.N_,{to:"/"},n.createElement(s,{src:l.A,alt:"Logo"})),n.createElement(o,null,n.createElement(d,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"About"),n.createElement(d,{href:"https://forms.monday.com/forms/72de8dcb9fa0ba969f5c6f71de2c7dde?r=use1"},"Resume")))},9639:function(e,t,a){a.r(t);var n=a(6540),r=a(1162),l=a(156),i=a(4057);t.default=function(e){let{children:t}=e;return n.createElement(n.Fragment,null,n.createElement(r.default,null),n.createElement("main",null,t||n.createElement(i.default,null),"  "),n.createElement(l.default,null))}},5884:function(e,t,a){t.A=a.p+"static/lopster-9c5d51d72547f351d3074957f0a0e510.png"},1399:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR42lVUW0tUURQ+3h8MukCFQURP4UNl1Ng4xytO5iUzJUMwlPLyYhmTGirazdCszPJeYZGVYkpTYzTNaDPq3JybU8pgkQXlQ/bQb/hae5+N2cPirL324tvfunxHCtf4EC67EK6ZI/OTOejsoS+ZzHy/uHMJ30nmJt8n7r0il8V9kDiYbKWDTUmWLSLRrvgMSDMjjPkiVxa5nIBNiVNMCtd41yV4ECHPkrk5a8X3kjnI7OLeRuZay1XYugSohzH0Ka+wC6IcSn4EWRixCUtwIor8UPqGqR3kOxGipofJohJsPK6U7BZVsZJ5mVbxggMbUizYkWHEpjQzNqaasD39HTanTyMmy4LdOUZs0VqwM2sSu7LMiE610qMOUeFayUpzWZnSYQ+u9k1DV6dDZn4RLjY24869DhjevsKThx24XFuJ8spijOmHMWMzoEBngnTAj6gkwVAZioezY32RVE70jQXQN9CGhpoqnC8vQWNVCRb9Fjy+VY+zGfvRlZeM4FIAX787UdJogRTnIUDRQ5n30MknxJouHZpB//gnGKcMaDhdiPrCXLSWFmPpgx6m4X70VGgRzJSx+mIUv/+soOwGAeyzE6BdTJ+X7OfrwKYpqdzE8COszkl09vbC+GYEn4OzWPHqsbryBQv6Ecxn5+BHaRF+BSZQfp3aFOcjQM/ankp8aeUZvhpSwhxa7hvwsl2HZ+2NcJmfY9nYCuPANZgM45iencS3wV7oW+rx+nYZTp0ZJBLziEq0cQyGtQbIJhWaPI+m6laMHY2F/mYNlld/wv3+KUzdF9DdWofRoS5MjT1Az91mTHRV4HjZIw4YyQDZ4ssMkMmJS8/DKatzOpGfdwna7FpknbyC5NwmJKUWIE1binSKHcmshvZYHXLyzmGPdgiSZkERAleR/99QlCk5EKKaouHYIMVPQzpIa6Gaw9bYCkTvbaO18iMk3kxmpfgsQtVWsdDrpcd/BDbxgpvTj0xiXxc1m9ogB5Byog0xml6EyIsUJznSXUSim8vwP+nxteGLzdTCaHuFDL3iTLIjkIzCDmxL6IMkBxVNcxCvWGYhPY3yt/kLWoiS0LXsoaYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png","srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/4e4d4/YelpThumbnail.png 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/2c67b/YelpThumbnail.png 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/c2d17/YelpThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/f6ea0/YelpThumbnail.webp 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/b5535/YelpThumbnail.webp 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/f5c71/YelpThumbnail.webp 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/0d27e/YelpThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')},4098:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADR0lEQVR42m2SWUwTURSGbyml7YCKu6VUweXBRHGNikosJIgoFVxwefHViG/GmPii8cFXY4xCUHF9AaMPLtEEmU5npjMIgnEhisZYxUhLFxmCxqAwv2emBUSd5OS/d+65X/5z7mHMnwnm52Cq8Mead1LYae1EGu2t/qmkU+CV72Gn8gFVyjtUKl2oVsJYFDhMeQwWOmdJgHMcZIYNk4UC5ATKMUlYiqJgowkoEE9ig3gV+5Q4qoIh7FDeY48SgyewPwWcPA60EMhiwgxnVqyVLmGX+hEFwdOokJ/Dp7xGnnQAnJCPjdJN2r9CeVDFYuno+D1Dx0s2oBxs/pm0Tscy8RQOyIPwCHvAWjKQwc9KtqGF8lo42Hk30oXplGtP3U9VmKRbqcQlKAxeQbmioLj1IXLb9sHTuhc2dTaYYgMLOigIqFCohtJesJOJLExo2+imhJq9V4miSn2N6sanWFd7HFnn7Jh21gVXXT7c9QuQUz8fc+rmwVWbB1d9PmzN1DOB+xuYadpeI9ehWo1gp/QW22qOoKysEmWlu+H1VqC42IeSEp+pRng3VcBbvBXZTS4wyQEL/8d0jALT/dnIlX2Y9qAUF5qv4ef3YYRjMUQTX9EXT6A3GkckFkc8HofWr+HZyxeYeScXTMwg4D8OOfOl0gL08y7DZfUKjG/o1xBGRkag6zpGv65wFG2f+xAOf8GMOx4C2lOvPOaQG3tyq5gNds+Ci8EGvAv1IdTTg95wGEM/fkD9+IVAEfQOfEMkruHT50/k0JN0ODY23MTBThOzTIcNhkMylRjox8C3QQwP/8KbvgSEcAJyrB9DdNZrOnSngP8p2dA0cRLYfQfO363Fh84QVP8TtAee4k1nN6KhCHreR9DwqB1yRze6OjvgubUQjNo08VF4Tie6bqrg1N2PF+grG9frK24UYvn11Vh5Y52h+opra/X1TUV6YdMqffOtg3rN7Va96MEh3cLb6G4mBTH8xGAikSWyK5Gaa0dyiGUqRaY5kxjmqJXY0vES+W01yGutwcK2Y7ArS2CVaOhFR/Ke6EwqUTVyqCWV0yxG8NzA0sAJvVLpRmmwGXMD+wdXS2f6c4XtWo7g09wUjGdmLpWpjTF4TvsNDK+nAb0FC8kAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png","srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/4e4d4/ESnetMRDPThumbnail.png 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/2c67b/ESnetMRDPThumbnail.png 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/099ef/ESnetMRDPThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/f6ea0/ESnetMRDPThumbnail.webp 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/b5535/ESnetMRDPThumbnail.webp 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/f5c71/ESnetMRDPThumbnail.webp 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/9d9de/ESnetMRDPThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-index-js-4b554ab226cd5c473d3e.js.map