"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[173,150,695],{4057:function(e,a,t){t.r(a);var n=t(6540),l=t(7581),i=t(7694),r=t(5536);const s=l.Ay.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;a.default=function(){return n.createElement(s,null,n.createElement(i.default,null),n.createElement(r.default,null))}},7694:function(e,a,t){t.r(a),t.d(a,{default:function(){return r}});var n=t(4506),l=t(6540),i=t.p+"static/joprofile-db529395c907b63f733b8a53633da5ba.gif";var r=function(){const{0:e,1:a}=(0,l.useState)(["Los Angeles, CA"]),t=["Los Angeles, CA","Seoul, Korea","Vientiane, Laos","Berkeley, CA","Where Now ?"];return(0,l.useEffect)((()=>{const e=setInterval((()=>{a((e=>{const a=e.length;return a<t.length?[].concat((0,n.A)(e),[t[a]]):e}))}),2e3);return()=>clearInterval(e)}),[t]),l.createElement("div",{className:"container"},l.createElement("div",{className:"video-text-wrapper"},l.createElement("div",{className:"video-container"},l.createElement("img",{src:i,alt:"profile gif",style:{maxWidth:"40vw"}})),l.createElement("div",{className:"text-container"},l.createElement("div",{className:"animation-container",style:{fontFamily:"'Inter', sans-serif"}},l.createElement("span",{style:{fontFamily:"'IkeaFont', sans-serif",fontSize:"4.3vw"}},"Johanna"),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("span",null," is a designer, multimedia artist, and engineer "),l.createElement("br",null),l.createElement("span",null," based in "),e.map(((a,t)=>l.createElement(l.Fragment,{key:t},l.createElement("span",{className:`location ${t<e.length-1?"crossed":" "} ${t===e.length-1&&"Where Now ?"===a?"red-question-mark":""}`},a),t<e.length-1&&l.createElement("span",{className:"space"},"   ")))),l.createElement("br",null),l.createElement("br",null),l.createElement("span",null," passionate about fashion soup and oranges"),l.createElement("br",null)))))}},5536:function(e,a,t){t.r(a);var n=t(6540),l=t(7581),i=t(2532),r=t(4810);const s=l.Ay.div`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  position: relative;
`,c=l.Ay.nav`
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
`,o=(0,l.Ay)(r.N_)`
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
`;a.default=()=>n.createElement(s,null,n.createElement(c,null,n.createElement(o,{to:"/Projects/Yelp"},n.createElement(i.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:t(1399)})),n.createElement(o,{to:"/Projects/ESnetMRDP"},n.createElement(i.S,{src:"../../../static/ESnetMRDPThumbnail.png",alt:"ESNet MRDP",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:t(4098)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(i.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:t(1399)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(i.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:t(1399)})),n.createElement(o,{to:"/Projects/Yelp"},n.createElement(i.S,{src:"../../../static/YelpThumbnail.png",alt:"yelp",placeholder:"blurred",layout:"constrained",height:300,style:{borderRadius:"5px"},__imageData:t(1399)}))))},1399:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADKUlEQVR42lVUW0tUURQ+3h8MukCFQURP4UNl1Ng4xytO5iUzJUMwlPLyYhmTGirazdCszPJeYZGVYkpTYzTNaDPq3JybU8pgkQXlQ/bQb/hae5+N2cPirL324tvfunxHCtf4EC67EK6ZI/OTOejsoS+ZzHy/uHMJ30nmJt8n7r0il8V9kDiYbKWDTUmWLSLRrvgMSDMjjPkiVxa5nIBNiVNMCtd41yV4ECHPkrk5a8X3kjnI7OLeRuZay1XYugSohzH0Ka+wC6IcSn4EWRixCUtwIor8UPqGqR3kOxGipofJohJsPK6U7BZVsZJ5mVbxggMbUizYkWHEpjQzNqaasD39HTanTyMmy4LdOUZs0VqwM2sSu7LMiE610qMOUeFayUpzWZnSYQ+u9k1DV6dDZn4RLjY24869DhjevsKThx24XFuJ8spijOmHMWMzoEBngnTAj6gkwVAZioezY32RVE70jQXQN9CGhpoqnC8vQWNVCRb9Fjy+VY+zGfvRlZeM4FIAX787UdJogRTnIUDRQ5n30MknxJouHZpB//gnGKcMaDhdiPrCXLSWFmPpgx6m4X70VGgRzJSx+mIUv/+soOwGAeyzE6BdTJ+X7OfrwKYpqdzE8COszkl09vbC+GYEn4OzWPHqsbryBQv6Ecxn5+BHaRF+BSZQfp3aFOcjQM/ankp8aeUZvhpSwhxa7hvwsl2HZ+2NcJmfY9nYCuPANZgM45iencS3wV7oW+rx+nYZTp0ZJBLziEq0cQyGtQbIJhWaPI+m6laMHY2F/mYNlld/wv3+KUzdF9DdWofRoS5MjT1Az91mTHRV4HjZIw4YyQDZ4ssMkMmJS8/DKatzOpGfdwna7FpknbyC5NwmJKUWIE1binSKHcmshvZYHXLyzmGPdgiSZkERAleR/99QlCk5EKKaouHYIMVPQzpIa6Gaw9bYCkTvbaO18iMk3kxmpfgsQtVWsdDrpcd/BDbxgpvTj0xiXxc1m9ogB5Byog0xml6EyIsUJznSXUSim8vwP+nxteGLzdTCaHuFDL3iTLIjkIzCDmxL6IMkBxVNcxCvWGYhPY3yt/kLWoiS0LXsoaYAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png","srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/4e4d4/YelpThumbnail.png 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/2c67b/YelpThumbnail.png 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/6addd/YelpThumbnail.png 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/c2d17/YelpThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/852f0082528fa271dc1d789ac74b9d97/f6ea0/YelpThumbnail.webp 100w,\\n/static/852f0082528fa271dc1d789ac74b9d97/b5535/YelpThumbnail.webp 200w,\\n/static/852f0082528fa271dc1d789ac74b9d97/f5c71/YelpThumbnail.webp 400w,\\n/static/852f0082528fa271dc1d789ac74b9d97/0d27e/YelpThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')},4098:function(e){e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADR0lEQVR42m2SWUwTURSGbyml7YCKu6VUweXBRHGNikosJIgoFVxwefHViG/GmPii8cFXY4xCUHF9AaMPLtEEmU5npjMIgnEhisZYxUhLFxmCxqAwv2emBUSd5OS/d+65X/5z7mHMnwnm52Cq8Mead1LYae1EGu2t/qmkU+CV72Gn8gFVyjtUKl2oVsJYFDhMeQwWOmdJgHMcZIYNk4UC5ATKMUlYiqJgowkoEE9ig3gV+5Q4qoIh7FDeY48SgyewPwWcPA60EMhiwgxnVqyVLmGX+hEFwdOokJ/Dp7xGnnQAnJCPjdJN2r9CeVDFYuno+D1Dx0s2oBxs/pm0Tscy8RQOyIPwCHvAWjKQwc9KtqGF8lo42Hk30oXplGtP3U9VmKRbqcQlKAxeQbmioLj1IXLb9sHTuhc2dTaYYgMLOigIqFCohtJesJOJLExo2+imhJq9V4miSn2N6sanWFd7HFnn7Jh21gVXXT7c9QuQUz8fc+rmwVWbB1d9PmzN1DOB+xuYadpeI9ehWo1gp/QW22qOoKysEmWlu+H1VqC42IeSEp+pRng3VcBbvBXZTS4wyQEL/8d0jALT/dnIlX2Y9qAUF5qv4ef3YYRjMUQTX9EXT6A3GkckFkc8HofWr+HZyxeYeScXTMwg4D8OOfOl0gL08y7DZfUKjG/o1xBGRkag6zpGv65wFG2f+xAOf8GMOx4C2lOvPOaQG3tyq5gNds+Ci8EGvAv1IdTTg95wGEM/fkD9+IVAEfQOfEMkruHT50/k0JN0ODY23MTBThOzTIcNhkMylRjox8C3QQwP/8KbvgSEcAJyrB9DdNZrOnSngP8p2dA0cRLYfQfO363Fh84QVP8TtAee4k1nN6KhCHreR9DwqB1yRze6OjvgubUQjNo08VF4Tie6bqrg1N2PF+grG9frK24UYvn11Vh5Y52h+opra/X1TUV6YdMqffOtg3rN7Va96MEh3cLb6G4mBTH8xGAikSWyK5Gaa0dyiGUqRaY5kxjmqJXY0vES+W01yGutwcK2Y7ArS2CVaOhFR/Ke6EwqUTVyqCWV0yxG8NzA0sAJvVLpRmmwGXMD+wdXS2f6c4XtWo7g09wUjGdmLpWpjTF4TvsNDK+nAb0FC8kAAAAASUVORK5CYII="},"images":{"fallback":{"src":"/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png","srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/4e4d4/ESnetMRDPThumbnail.png 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/2c67b/ESnetMRDPThumbnail.png 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/6addd/ESnetMRDPThumbnail.png 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/099ef/ESnetMRDPThumbnail.png 800w","sizes":"(min-width: 400px) 400px, 100vw"},"sources":[{"srcSet":"/static/877b7561f09fce46bc9eb6245ff02da1/f6ea0/ESnetMRDPThumbnail.webp 100w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/b5535/ESnetMRDPThumbnail.webp 200w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/f5c71/ESnetMRDPThumbnail.webp 400w,\\n/static/877b7561f09fce46bc9eb6245ff02da1/9d9de/ESnetMRDPThumbnail.webp 800w","type":"image/webp","sizes":"(min-width: 400px) 400px, 100vw"}]},"width":400,"height":300}')}}]);
//# sourceMappingURL=component---src-pages-components-home-js-3619083d70c34fb4681d.js.map