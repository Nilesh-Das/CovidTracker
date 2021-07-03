(this.webpackJsonpCovidTracker=this.webpackJsonpCovidTracker||[]).push([[0],{111:function(e,t,n){},113:function(e,t,n){},115:function(e,t,n){},116:function(e,t,n){},215:function(e,t,n){},216:function(e,t,n){},220:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(10),r=n.n(a),s=(n(111),n(20)),i=n.n(s),o=n(32),l=n(13),u=(n(113),n(249)),d=n(260),j=n(100),b=n(17),h=n.n(b),f=n(259),O=n(248),p=(n(76),n(3)),x={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:200},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:600},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:1e3}},v=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},m=function(e){return e?"+".concat(h()(e).format("0.0a")):"+0"},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e,n){return Object(p.jsx)("div",{children:Object(p.jsx)(f.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:x[t].hex,fillColor:x[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*x[t].multiplier,children:Object(p.jsx)(O.a,{children:Object(p.jsxs)("div",{className:"info-container",children:[Object(p.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(p.jsx)("div",{className:"info-name",children:e.country}),Object(p.jsxs)("div",{className:"info-confirmed",children:["Cases: ",h()(e.cases).format("0,0")]}),Object(p.jsxs)("div",{className:"info-recovered",children:["Recovered: ",h()(e.recovered).format("0,0")]}),Object(p.jsxs)("div",{className:"info-deaths",children:["Deaths: ",h()(e.deaths).format("0,0")]})]})})})},n)}))};n(115);var y=function(e){var t=e.countries,n=e.casesType,c=e.center,a=e.zoom;return Object(p.jsx)("div",{className:"map-container",children:Object(p.jsxs)(u.a,{center:c,zoom:a,doubleClickZoom:!0,scrollWheelZoom:!0,children:[Object(p.jsx)(d.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),g(t,n)]})})},w=n(256),C=n(257),k=n(258),N=n(250),_=n(254),S=n(28),I=n(255);n(116);var R=function(e){var t=e.title,n=e.cases,c=e.total,a=e.active,r=e.isRed,s=Object(S.a)(e,["title","cases","total","active","isRed"]);return Object(p.jsx)(N.a,{onClick:s.onClick,className:"infoBox ".concat(a&&"infoBox--selected"," ").concat(r&&"infoBox--red"),children:Object(p.jsxs)(_.a,{children:[Object(p.jsx)(I.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(p.jsx)("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green"),children:n}),Object(p.jsxs)(I.a,{className:"infoBox__total",color:"textSecondary",children:[c," Total"]})]})})},A=n(97),B={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return h()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{parser:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,n){return h()(e).format("0a")}}}]}},D=function(e,t){var n,c=[];for(var a in e.cases){if(n){var r={x:a,y:e[t][a]-n};c.push(r)}n=e[t][a]}return c};var T=function(e){var t=e.casesType,n=Object(c.useState)({}),a=Object(l.a)(n,2),r=a[0],s=a[1];return Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var n=D(e,t);s(n)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(p.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(p.jsx)(A.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:B})})};n(215);var L=function(e){var t=e.countries;return Object(p.jsx)("div",{className:"table-wrapper",children:Object(p.jsxs)("table",{children:[Object(p.jsx)("thead",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:"Countries"}),Object(p.jsx)("th",{children:"Cases"})]})}),Object(p.jsx)("tbody",{children:t.map((function(e,t){return Object(p.jsxs)("tr",{children:[Object(p.jsx)("td",{children:e.country}),Object(p.jsx)("td",{children:Object(p.jsx)("strong",{children:h()(e.cases).format("0,0")})})]},t)}))})]})})},U=(n(216),n(44)),z=(n(221),n(217),n(98)),W=n(99);U.a.initializeApp({apiKey:"AIzaSyAulNgNxgWjadotcq7RtNWUIx19cDXkoXs",authDomain:"hello-firebase-65ab9.firebaseapp.com",projectId:"hello-firebase-65ab9",storageBucket:"hello-firebase-65ab9.appspot.com",messagingSenderId:"759050800189",appId:"1:759050800189:web:9662fd03d1e9c682c86e54"});var E=U.a.auth(),M=U.a.firestore();function F(){return Object(p.jsxs)("div",{className:"signIn",children:[Object(p.jsx)("button",{className:"sign-in-button",onClick:function(){var e=new U.a.auth.GoogleAuthProvider;E.signInWithPopup(e)},children:"Sign in with Google"}),Object(p.jsx)("p",{children:"Do not violate the community guidelines or you will be banned for life!"})]})}function V(){return E.currentUser&&Object(p.jsx)("button",{className:"sign-out",onClick:function(){return E.signOut()},children:"Sign Out"})}function q(){var e=Object(c.useRef)(),t=M.collection("messages"),n=t.orderBy("createdAt").limit(25),a=Object(W.a)(n,{idField:"id"}),r=Object(l.a)(a,1)[0],s=Object(c.useState)(""),u=Object(l.a)(s,2),d=u[0],j=u[1],b=function(){var n=Object(o.a)(i.a.mark((function n(c){var a,r,s;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.preventDefault(),a=E.currentUser,r=a.uid,s=a.photoURL,n.next=4,t.add({text:d,createdAt:U.a.firestore.FieldValue.serverTimestamp(),uid:r,photoURL:s});case 4:j(""),e.current.scrollIntoView({behavior:"smooth"});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(p.jsxs)("div",{children:[Object(p.jsxs)("main",{children:[r&&r.map((function(e){return Object(p.jsx)(G,{message:e},e.id)})),Object(p.jsx)("span",{ref:e})]}),Object(p.jsxs)("form",{onSubmit:b,children:[Object(p.jsx)("input",{value:d,onChange:function(e){return j(e.target.value)},placeholder:"say something nice"}),Object(p.jsx)("button",{type:"submit",disabled:!d,children:"\ud83d\udd4a\ufe0f"})]})]})}function G(e){var t=e.message,n=t.text,c=t.uid,a=t.photoURL,r=c===E.currentUser.uid?"sent":"received";return Object(p.jsxs)("div",{className:"message ".concat(r),children:[Object(p.jsx)("img",{src:a||"https://i.pinimg.com/originals/51/f6/fb/51f6fb256629fc755b8870c801092942.png",alt:"Avatar"}),Object(p.jsx)("p",{children:n})]})}var J=function(){var e=Object(z.a)(E),t=Object(l.a)(e,1)[0];return Object(p.jsxs)("div",{className:"Chat",children:[Object(p.jsxs)("header",{children:[Object(p.jsx)("h2",{children:"Live Chat with Community"}),Object(p.jsx)("h1",{children:"\u269b\ufe0f\ud83d\udd25\ud83d\udcac"}),Object(p.jsx)(V,{})]}),Object(p.jsx)("section",{children:t?Object(p.jsx)(q,{}):Object(p.jsx)(F,{})})]})},P=function(){var e=Object(c.useState)("worldwide"),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),s=Object(l.a)(r,2),u=s[0],d=s[1],j=Object(c.useState)([]),b=Object(l.a)(j,2),f=b[0],O=b[1],x=Object(c.useState)([]),g=Object(l.a)(x,2),S=g[0],I=g[1],A=Object(c.useState)([]),B=Object(l.a)(A,2),D=B[0],U=B[1],z=Object(c.useState)("cases"),W=Object(l.a)(z,2),E=W[0],M=W[1],F=Object(c.useState)({lat:15.4542,lng:18.7322}),V=Object(l.a)(F,2),q=V[0],G=V[1],P=Object(c.useState)(2),X=Object(l.a)(P,2),Y=X[0],Z=X[1];Object(c.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){d(e)}))}),[]),Object(c.useEffect)((function(){(function(){var e=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),n=v(e);O(t),I(e),U(n)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var K=function(){var e=Object(o.a)(i.a.mark((function e(t){var n,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.target.value,c="worldwide"===n?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(n),"worldwide"!==n){e.next=7;break}return e.next=5,fetch(c).then((function(e){return e.json()})).then((function(e){a("worldwide"),d(e),G({lat:15.4542,lng:18.7322}),Z(2)}));case 5:e.next=9;break;case 7:return e.next=9,fetch(c).then((function(e){return e.json()})).then((function(e){a(n),d(e),G([e.countryInfo.lat,e.countryInfo.long]),Z(4)}));case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsxs)("div",{className:"app__left",children:[Object(p.jsxs)("div",{className:"app__header",children:[Object(p.jsx)("h1",{children:"COVID-19 Tracker"}),Object(p.jsx)(w.a,{className:"app__dropdown",children:Object(p.jsxs)(C.a,{variant:"outlined",value:n,onChange:K,children:[Object(p.jsx)(k.a,{value:"worldwide",children:"Worldwide"},"worldwide"),f.map((function(e){return Object(p.jsx)(k.a,{value:e.value,children:e.name},e.name)}))]})})]}),Object(p.jsxs)("div",{className:"app__stats",children:[Object(p.jsx)(R,{onClick:function(e){return M("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===E,cases:m(u.todayCases),total:h()(u.cases).format("0.0a")}),Object(p.jsx)(R,{onClick:function(e){return M("recovered")},title:"Recovered",active:"recovered"===E,cases:m(u.todayRecovered),total:h()(u.recovered).format("0.0a")}),Object(p.jsx)(R,{onClick:function(e){return M("deaths")},title:"Deaths",isRed:!0,active:"deaths"===E,cases:m(u.todayDeaths),total:h()(u.deaths).format("0.0a")})]}),Object(p.jsx)(y,{countries:S,casesType:E,center:q,zoom:Y}),Object(p.jsx)(J,{})]}),Object(p.jsx)(N.a,{className:"app__right",children:Object(p.jsx)(_.a,{children:Object(p.jsxs)("div",{className:"app__information",children:[Object(p.jsxs)("h3",{children:["Worldwide new ",E]}),Object(p.jsx)(T,{casesType:E}),Object(p.jsx)("h3",{children:"Live Cases by Country"}),Object(p.jsx)(L,{countries:D})]})})})]})};r.a.render(Object(p.jsx)(P,{}),document.getElementById("root"))}},[[220,1,2]]]);
//# sourceMappingURL=main.a0c6460c.chunk.js.map