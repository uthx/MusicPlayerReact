(this["webpackJsonpreact-player"]=this["webpackJsonpreact-player"]||[]).push([[0],{16:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),r=c.n(n),o=c(10),i=c.n(o),s=c(3),l=c(6),u=(c(16),c(5)),d=c(4),p=function(e,t){if(e){var c=t.current.play();void 0!==c&&c.then((function(e){t.current.play()}))}},b=function(e){var t=e.currentSong,c=e.setIsPlaying,r=e.isPlaying,o=e.audioRef,i=e.songInfo,l=e.setSongInfo,b=e.songs,j=e.setCurrentSong,h=e.setSongs;Object(n.useEffect)((function(){var e=b.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{active:!0}):Object(s.a)(Object(s.a)({},e),{},{active:!1})}));h(e)}),[t]);var m=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},f=function(e){var c=b.findIndex((function(e){return e.id===t.id})),a=g(c,e,b.length);j(b[a]),p(r,o)},g=function(e,t,c){return"skipBack"===t?e-1<0?c-1:e-1:(e+1)%c},O={transform:"translateX(".concat(i.animationPercentage,"%)")},v={background:"linear-gradient(to right, ".concat(t.color[0]," , ").concat(t.color[1],")")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:m(i.currentTime)}),Object(a.jsxs)("div",{className:"track",style:v,children:[Object(a.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,type:"range",onChange:function(e){o.current.currentTime=e.target.value,l(Object(s.a)(Object(s.a)({},i),{},{currentTime:e.target.value}))}}),Object(a.jsx)("div",{className:"animate-track",style:O})]}),Object(a.jsx)("p",{children:i.duration?m(i.duration):"0.00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(u.a,{className:"skip-back",onClick:function(){return f("skipBack")},icon:d.a,size:"2x"}),Object(a.jsx)(u.a,{className:"play",onClick:function(){r?(o.current.pause(),c(!r)):(o.current.play(),c(!r))},icon:r?d.d:d.e,size:"2x"}),Object(a.jsx)(u.a,{className:"skip-forward",onClick:function(){return f("skipForward")},icon:d.b,size:"2x"})]})]})},j=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},h=function(e){var t=e.song,c=e.setCurrentSong,n=e.songs,r=e.audioRef,o=e.isPlaying,i=e.setSongs;return Object(a.jsxs)("div",{className:"library-songs ".concat(t.active?"selected":""),onClick:function(){c(t);var e=n.map((function(e){return e.id===t.id?Object(s.a)(Object(s.a)({},e),{},{active:!0}):Object(s.a)(Object(s.a)({},e),{},{active:!1})}));i(e),p(o,r)},children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,c=e.setCurrentSong,n=e.audioRef,r=e.isPlaying,o=e.setSongs,i=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"lib",children:t.map((function(e){return Object(a.jsx)(h,{songs:t,song:e,setCurrentSong:c,audioRef:n,isPlaying:r,setSongs:o},e.id)}))})]})},f=function(e){var t=e.setLibraryStatus,c=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Waves"}),Object(a.jsxs)("button",{onClick:function(){return t(!c)},children:["Library",Object(a.jsx)(u.a,{icon:d.c})]})]})},g=c(24);var O=function(){return[{name:"ny90",cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",artist:"Ezzy",audio:"https://mp3.chillhop.com/serve.php/?mp3=9331",color:["#2C2F66","#803530"],id:Object(g.a)(),active:!0},{name:"Far From Home",cover:"https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",artist:"Toonorth",audio:"https://mp3.chillhop.com/serve.php/?mp3=8127",color:["#2C2F66","#803530"],id:Object(g.a)(),active:!1},{name:"Going Back",cover:"https://chillhop.com/wp-content/uploads/2020/10/737bb830d34592344eb4a2a1d2c006cdbfc811d9-1024x1024.jpg",artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=10310",color:["#335561","#293660"],id:Object(g.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["#5368A3","#FEE476"],id:Object(g.a)(),active:!1},{name:"Sleepover",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano,JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10130",color:["#7A668D","#936C8C"],id:Object(g.a)(),active:!1},{name:"Imagination",cover:"https://chillhop.com/wp-content/uploads/2020/07/24bd0da848d9718fd19af104ff5c0b11f914cb25-1024x1024.jpg",artist:"Montell Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=9332",color:["#EAB4A1","#AD455E"],id:Object(g.a)(),active:!1},{name:"Hereafter",cover:"https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg",artist:"Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=11770",color:["#5368A3","#FEE476"],id:Object(g.a)(),active:!1},{name:"Sleepover",cover:"https://chillhop.com/wp-content/uploads/2020/09/09fb436604242df99f84b9f359acb046e40d2e9e-1024x1024.jpg",artist:"Nymano,JK the Sage",audio:"https://mp3.chillhop.com/serve.php/?mp3=10130",color:["#7A668D","#936C8C"],id:Object(g.a)(),active:!1}]};var v=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(O()),c=Object(l.a)(t,2),r=c[0],o=c[1],i=Object(n.useState)(r[0]),u=Object(l.a)(i,2),d=u[0],p=u[1],h=Object(n.useState)(!1),g=Object(l.a)(h,2),v=g[0],x=g[1],S=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),y=Object(l.a)(S,2),k=y[0],C=y[1],N=Object(n.useState)(!1),w=Object(l.a)(N,2),P=w[0],F=w[1],T=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),n=Math.round(c),r=Math.round(a/n*100);C(Object(s.a)(Object(s.a)({},k),{},{currentTime:t,duration:c,animationPercentage:r}))};return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{libraryStatus:P,setLibraryStatus:F}),Object(a.jsx)(j,{currentSong:d}),Object(a.jsx)(b,{currentSong:d,isPlaying:v,setIsPlaying:x,audioRef:e,songInfo:k,setSongInfo:C,songs:r,setCurrentSong:p,setSongs:o}),Object(a.jsx)(m,{songs:r,setCurrentSong:p,audioRef:e,isPlaying:v,setSongs:o,libraryStatus:P}),Object(a.jsx)("audio",{src:d.audio,onTimeUpdate:T,ref:e,onLoadedMetadata:T})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,25)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),r(e),o(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(v,{})}),document.getElementById("root")),x()}},[[22,1,2]]]);
//# sourceMappingURL=main.2683ef3d.chunk.js.map