(window.webpackJsonptssmadeeasy=window.webpackJsonptssmadeeasy||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),i=n(2),s=n(1),l=function e(t,n){Object(s.a)(this,e),this.p1=t,this.p2=n,this.d1=t.x-t.x,this.d2=n.y-n.y,this.alpha=Math.atan2(this.d1,this.d2),this.r=Math.sqrt(Math.pow(this.d1,2)+Math.pow(this.d2,2))},h=n(5),u=function(){function e(t,n){Object(s.a)(this,e),this.x=t,this.y=n}return Object(h.a)(e,[{key:"toLin",value:function(){return[this.x,this.y].join(",")}}]),e}();function d(e){var t=e.children;return a.a.createElement("svg",{style:{border:"1px solid black"},onMouseMove:function(e){},width:"100%",height:"800px"},t)}var m=function(e){var t=e.r,n=void 0===t?10:t,r=e.coords,o=(r=void 0===r?{x:0,y:0}:r).x,c=r.y;return a.a.createElement("circle",{r:n,cx:o,cy:c,stroke:"green",strokeWidth:"1",fill:"none"})},y=function(e){var t=e.w,n=e.h,r=e.coords,o=(r=void 0===r?{x:0,y:0}:r).x,c=r.y;return a.a.createElement("rect",{width:t,height:n,x:o,y:c,style:{fill:"none",strokeWidth:1,stroke:"rgb(0,0,0)"}})},p=function(e){var t=e.w,n=e.coords;return a.a.createElement(y,{w:t,h:t,coords:n})},w=function(e,t){return{x:t.x+e/2,y:t.y+e/2}},x=function(e){var t=e.w,n=e.coords,r=w(t,n);return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,{r:Math.sqrt(2)*t/2,coords:r}),a.a.createElement(m,{r:t/2,coords:r}),a.a.createElement(m,{r:Math.sqrt(2)*t,coords:n}),a.a.createElement(m,{r:Math.sqrt(2)*t,coords:w(t,r)}),a.a.createElement(p,{w:t,coords:n}))},f=function(e){return a.a.createElement("line",{x1:"303",y1:"50",x2:"140",y2:"208",stroke:"orange",strokeWidth:"1"})},v=function(e){var t=e.c1,n=e.c2,r=new l(t,n),o=r.p1.x-r.r*Math.cos(r.alpha),c=r.p1.y+r.r*Math.sin(r.alpha),i=r.p2.x-r.r*Math.cos(r.alpha),s=r.p2.y+r.r*Math.sin(r.alpha),h=[[r.x1,r.y1].join(","),[r.x2,r.y2].join(","),[i,s].join(","),[o,c].join(",")].join(" ");return a.a.createElement("polygon",{points:h,style:{fill:"none",stroke:"purple",strokeWidth:1}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement((function(e){var t=Object(r.useState)(144),n=Object(i.a)(t,2),o=n[0],c=n[1],s=Object(r.useState)(156),l=Object(i.a)(s,2),h=l[0],m=l[1],y=function(e,t){var n=Number(e.target.value);console.log(n),t(n)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{type:"range",min:0,max:200,onChange:function(e){return y(e,c)},value:o}),a.a.createElement("input",{type:"range",min:0,max:200,onChange:function(e){return y(e,m)},value:h,style:{marginTop:"50px",transform:"rotate(270deg)"}}),a.a.createElement(d,null,a.a.createElement(x,{r:25,w:53,coords:{x:250,y:50}}),a.a.createElement(x,{r:25,w:53,coords:{x:o,y:h}}),a.a.createElement(f,null),a.a.createElement(v,{c1:new u(50,70),c2:new u(100,90)})))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(11)}},[[6,1,2]]]);
//# sourceMappingURL=main.ea4542e4.chunk.js.map