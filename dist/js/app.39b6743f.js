(function(){"use strict";var e={1147:function(e,t,r){var a=r(9242),o=r(3396);const n={class:"row bg-light"},s={class:"col-auto"},l=(0,o._)("h1",null,"Welcome to Chris Porter's Vue portfolio",-1);function i(e,t,r,a,i,u){const c=(0,o.up)("NavBar");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",s,[l,(0,o.Wm)(c)])])}const u={class:"navbar navbar-expand-lg navbar-light bg-light"},c={class:"container-fluid border col-auto"},d={class:"row"},p={class:"container"};function m(e,t,r,a,n,s){const l=(0,o.up)("router-link"),i=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",u,[(0,o._)("div",c,[(0,o._)("div",d,[(0,o.Wm)(l,{class:"col-auto font-weight-bold",to:{name:"my-resume"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Resume")])),_:1}),(0,o.Wm)(l,{class:"col font-weight-bold",to:{name:"about-page"}},{default:(0,o.w5)((()=>[(0,o.Uk)("About")])),_:1}),(0,o.Wm)(l,{class:"col font-weight-bold",to:{name:"my-portfolio"}},{default:(0,o.w5)((()=>[(0,o.Uk)("Portfolio")])),_:1})])])]),(0,o._)("div",p,[(0,o.Wm)(i)])],64)}var f=r(4870),b=(0,o.aZ)({name:"NavBar",setup(){const e=(0,f.iH)("");return{selectedTab:e}}}),v=r(89);const h=(0,v.Z)(b,[["render",m]]);var g=h,y=(0,o.aZ)({name:"App",components:{NavBar:g},setup(){return{}}});const w=(0,v.Z)(y,[["render",i]]);var _=w,k=r(2483);const x={class:"mx-auto"},O=(0,o._)("h1",{class:"mx-auto"},"Resume",-1),I=(0,o._)("p",null,"A resume will go here",-1),Z=[O,I];function j(e,t,r,a,n,s){return(0,o.wg)(),(0,o.iD)("div",x,Z)}var P=(0,o.aZ)({name:"my-resume",setup(){}});const E=(0,v.Z)(P,[["render",j]]);var A=E;const W=(0,o._)("h1",{class:"mx-auto"},"About",-1),D=(0,o._)("p",{class:"mx-auto"}," My name is Chris Porter and I'm a former chef turned full stack web developer. Although a very different career path, there are still plenty of transferrable traits such as my ability to make decisions under pressure, and my ability to remain calm under pressure. I'm very personable, and fit in well with any team. I'm very professional, with a strong work ethic, but also like to bring a light heartedness to the table, to make work a little bit more enjoyable for everyone. I appreciate you taking the time to check out my portfolio and look forward to working with you! ",-1),C=[W,D];function N(e,t,r,a,n,s){return(0,o.wg)(),(0,o.iD)("div",null,C)}var R=(0,o.aZ)({name:"about-page",setup(){}});const S=(0,v.Z)(R,[["render",N]]);var T=S;const B=(0,o._)("div",null,[(0,o._)("h1",null,"Portfolio")],-1),H={class:"row"},U={class:"col-auto"},F={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},M=(0,o._)("div",{class:"carousel-indicators"},[(0,o._)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"0",class:"active","aria-current":"true","aria-label":"Slide 1"}),(0,o._)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"1","aria-label":"Slide 2"}),(0,o._)("button",{type:"button","data-bs-target":"#carouselExampleIndicators","data-bs-slide-to":"2","aria-label":"Slide 3"})],-1),V={class:"carousel-inner"},Y={class:"carousel-item active"},q=["src"],z={class:"carousel-item"},G=["src"],J={class:"carousel-item"},K=["src"],L=(0,o.uE)('<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button>',2);function Q(e,t,r,a,n,s){return(0,o.wg)(),(0,o.iD)(o.HY,null,[B,(0,o._)("div",H,[(0,o._)("div",U,[(0,o._)("div",F,[M,(0,o._)("div",V,[(0,o._)("div",Y,[(0,o._)("img",{class:"d-block w-100 h-100",src:e.bistro,alt:"First slide"},null,8,q)]),(0,o._)("div",z,[(0,o._)("img",{class:"d-block w-100 h-100",src:e.recipe,alt:"Second slide"},null,8,G)]),(0,o._)("div",J,[(0,o._)("img",{class:"d-block w-100 h-100",src:e.orale,alt:"Third slide"},null,8,K)])]),L])])])],64)}var X=(0,o.aZ)({name:"my-portfolio",setup(){return{bistro:"/pictures/bisto.jpg",orale:"/pictures/orale.jpeg",recipe:"/pictures/recipepantry.png"}}});const $=(0,v.Z)(X,[["render",Q]]);var ee=$;const te=[{name:"about-page",path:"/src/components/About.vue",component:T},{name:"my-portfolio",path:"/src/components/Portfolio.vue",component:ee},{name:"my-resume",path:"/src/components/Resume.vue",component:A}],re=k.p7({history:k.PO(),routes:te});(0,a.ri)(_).use(re).mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var n=t[a]={exports:{}};return e[a](n,n.exports,r),n.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,n){if(!a){var s=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],n=e[c][2];for(var l=!0,i=0;i<a.length;i++)(!1&n||s>=n)&&Object.keys(r.O).every((function(e){return r.O[e](a[i])}))?a.splice(i--,1):(l=!1,n<s&&(s=n));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,o,n]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,n,s=a[0],l=a[1],i=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)r.o(l,o)&&(r.m[o]=l[o]);if(i)var c=i(r)}for(t&&t(a);u<s.length;u++)n=s[u],r.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return r.O(c)},a=self["webpackChunkmy_vue_app"]=self["webpackChunkmy_vue_app"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(1147)}));a=r.O(a)})();
//# sourceMappingURL=app.39b6743f.js.map