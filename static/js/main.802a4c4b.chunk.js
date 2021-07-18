(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{222:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},366:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);n(217);var a=n(0),r=n.n(a),c=n(67),i=n.n(c),o=(n(222),n(15)),s=(n(223),n(224),n(208)),l=n(52),u=n(2);function d(e){var t=e.event,n=Object(a.useState)(!1),r=Object(o.a)(n,2),c=r[0],i=r[1],d=new Date(t.start.dateTime);return Object(u.jsx)("div",{className:"event mb-2",children:Object(u.jsxs)(l.a,{className:"event-card",id:"event-card",children:[Object(u.jsx)(l.a.Title,{id:"card-title",children:t.summary}),Object(u.jsxs)(l.a.Subtitle,{id:"card-subtitle",children:["Creator: ",t.creator.email]}),Object(u.jsxs)(l.a.Text,{id:"card-text",children:["Start Time: ",d.toLocaleString(),"(local time)"]}),Object(u.jsxs)(l.a.Text,{id:"card-location",children:["Location: ",t.location]}),Object(u.jsx)("br",{}),c&&Object(u.jsx)(l.a.Text,{id:"card-details",className:"EventDetails",children:function(e){return Object(u.jsxs)("div",{className:"event-details",children:[Object(u.jsx)("h6",{children:"About the event: "}),Object(u.jsx)("p",{id:"event-description",children:Object(u.jsx)("em",{children:e.description})}),Object(u.jsx)("a",{href:e.htmlLink,color:"secondary",className:"event-link",target:"_blank",rel:"noreferrer",children:"See event details on Google Calendar"})]})}(t)}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:Object(u.jsx)(s.a,{variant:"link",id:"link",className:"details-btn",onClick:function(){return i(!c)},children:c?"Hide Details":"Show Details"})})]})})}var h=n(404);function b(e){var t=e.events;return Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:"EventList",children:Object(u.jsx)(h.a,{container:!0,spacing:2,children:t.map((function(e){return Object(u.jsx)(h.a,{item:!0,xs:12,sm:12,md:6,children:Object(u.jsx)("li",{children:Object(u.jsx)(d,{event:e})},e.id)},e.id)}))})})})}var f=n(77),j=n(182),m=n(78),p=n(83),v=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(j.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Alert",children:Object(u.jsx)("p",{className:"alert-message",style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),g=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).color="#72c5d9",a}return n}(v),O=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).color="#e985ee",a}return n}(v),x=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).color="#aba7e3",a}return n}(v),w=n(397),y=n(407),k=n.p+"static/media/buildings.619381f0.png";function S(e){var t=e.locations,n=e.setCurrentCity,r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],s=c[1],l=Object(a.useState)(!1),d=Object(o.a)(l,2),h=d[0],b=d[1],f=Object(a.useState)(""),j=Object(o.a)(f,2),m=j[0],p=j[1],v=Object(a.useState)([]),O=Object(o.a)(v,2),x=O[0],S=O[1],T=function(e){var n=e?t.filter((function(t){return t.toUpperCase().includes(e.toUpperCase())})):t;0===n.length?p("We cannot find the city you are looking for. Please try another city."):p(""),S(n),s(e)},N=function(e){T(e),b(!1),n(e)};return Object(a.useEffect)((function(){S(t)}),[t]),Object(u.jsxs)("div",{className:"CitySearch",children:[Object(u.jsx)(g,{id:"info-alert",text:m}),Object(u.jsxs)(w.a,{className:"mb-3 align-center",children:[Object(u.jsx)(w.a.Prepend,{children:Object(u.jsx)("img",{id:"cityImg",alt:"",src:k,width:"35",height:"35",fluid:"true"})}),Object(u.jsx)(y.a,{placeholder:"Filter events by city","aria-label":"Search for events by city","aria-describedby":"basic-addon1",type:"text",className:"city",value:i,onChange:function(e){return T(e.target.value)},onFocus:function(){return b(!0)},onBlur:function(e){return!(t=e).relatedTarget||t.relatedTarget.className,void b(!1);var t}})]}),Object(u.jsxs)("ul",{className:"suggestions w-100 flex-column align-items-center",style:h?{display:"flex"}:{display:"none"},children:[x.map((function(e){return Object(u.jsx)("li",{className:"matchSuggestion",onClick:function(){return N(e)},children:e},e)})),Object(u.jsx)("li",{className:"seeAll",onClick:function(){return N("")},children:Object(u.jsx)("b",{children:"See all cities"})},"all")]})]})}function T(e){var t=e.numberDisplayed,n=e.setNumberDisplayed,r=Object(a.useState)(""),c=Object(o.a)(r,2),i=c[0],s=c[1];return Object(u.jsxs)("div",{className:"NumberOfEvents ",children:[Object(u.jsxs)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:[Object(u.jsx)("input",{type:"number",className:"event-number-input rounded text-align-center",value:t,onChange:function(e){return function(e){s("");var t=parseInt(e.target.value);t?t<1||!Number.isInteger(t)?s("Please enter a number between 1 and 32."):n(t):n("")}(e)}}),Object(u.jsx)("span",{className:"pe-2",children:"Events displayed: "})]}),Object(u.jsx)("div",{className:"d-flex flex-row-reverse align-items-center",children:Object(u.jsx)(O,{text:i})})]})}var N=n(398),Z=n(406),C=n(197),W=n(25),A=n(100),E=n(76),J=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){i((function(){return["React","JavaScript","Node","jQuery","AngularJS","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return 0!==e.value}))}))}),[t]);var s=["#44ddd1","#eb85ee","#9daee0","#28857d","#6e6089","#61b0c5"];return Object(u.jsx)(N.a,{height:300,children:Object(u.jsxs)(Z.a,{children:[Object(u.jsxs)(C.a,{data:c,cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:[Object(u.jsx)(W.a,{value:"Total: ".concat(t.length),offset:0,position:"center",fill:s[0]}),c.map((function(e,t){return Object(u.jsx)(A.a,{fill:s[t],stroke:s[t]},"cell-".concat(t))}))]}),Object(u.jsx)(E.a,{verticalAlign:"top",align:"center"})]})})};n(366);var D=n(207),L=n(33),M=n.n(L),B=n(81),I=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),R=n(130),U=n.n(R),F=n(82),q=n.n(F),H=function(){var e=Object(B.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(B.a)(M.a.mark((function e(){var t,n,a,r,c,i;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,U.a.get("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,i=c.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&P(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.map((function(e){return e.location}));return Object(D.a)(new Set(t))},_=function(){var e=Object(B.a)(M.a.mark((function e(){var t,n,a,r,c;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",I);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,z();case 10:if(!(n=e.sent)){e.next=20;break}return G(),a="https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,U.a.get(a);case 16:return(r=e.sent).data&&(c=Y(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(c))),q.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},P=function(){var e=Object(B.a)(M.a.mark((function e(t){var n,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n.p+"static/media/MeetAppLogo.79bd045a.png",K=n(131),X=n(105),Q=n(202),$=n(402),ee=n(403),te=n(203),ne=n(204),ae=n(84),re=n(209);function ce(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),s=i[0],l=i[1],d=Object(a.useState)([]),h=Object(o.a)(d,2),f=h[0],j=h[1],m=Object(a.useState)(""),p=Object(o.a)(m,2),v=p[0],g=p[1],O=Object(a.useState)(""),w=Object(o.a)(O,2),y=w[0],k=w[1],Z=Object(a.useState)(32),C=Object(o.a)(Z,2),W=C[0],A=C[1],E=function(){navigator.onLine?k(""):k("You are currently using the app offline. Events may be out of date.")};Object(a.useEffect)((function(){E(),_().then((function(e){r(e),j(e),l(Y(e))}))}),[]),Object(a.useEffect)((function(){E();var e=(""===v?n:n.filter((function(e){return e.location===v}))).slice(0,W||32);j(e)}),[v,W,n]);return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{id:"warning-text",text:y}),Object(u.jsxs)(Q.a,{fluid:!0,children:[Object(u.jsxs)(K.a,{className:"justify-content-md-center",children:[Object(u.jsx)(X.a,{xs:12,children:Object(u.jsx)("img",{src:V,alt:"logo",className:"logo-web"})}),Object(u.jsx)("br",{}),Object(u.jsxs)(X.a,{xs:12,md:12,children:[Object(u.jsx)("br",{}),Object(u.jsx)("h5",{id:"city-header",children:"Check out upcoming Web Development events near you!!!"}),Object(u.jsx)("br",{}),Object(u.jsx)(S,{locations:s,setCurrentCity:g}),Object(u.jsx)(T,{numberDisplayed:W,setNumberDisplayed:A}),Object(u.jsx)("br",{})]})]}),Object(u.jsxs)("div",{className:"data-vis-wrapper",children:[Object(u.jsx)(N.a,{height:300,children:Object(u.jsxs)($.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(u.jsx)(ee.a,{}),Object(u.jsx)(te.a,{type:"category",dataKey:"city",name:"city"}),Object(u.jsx)(ne.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(u.jsx)(ae.a,{cursor:{strokeDasharray:"3 3"}}),Object(u.jsx)(re.a,{data:s.map((function(e){var t=n.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}})),fill:"#8884d8"})]})}),Object(u.jsx)(J,{events:n})]}),Object(u.jsx)("br",{}),Object(u.jsx)(K.a,{children:Object(u.jsx)(X.a,{md:12,children:Object(u.jsx)("div",{className:"eventList-container h-75 overflow-scroll",children:Object(u.jsx)(b,{events:f})})})})]})]})}var ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,408)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},le=n(205);i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ce,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}(),se(),le.config("9ee9d281bc2f4fb1bb68acedbc083fc6").install()}},[[384,1,2]]]);
//# sourceMappingURL=main.802a4c4b.chunk.js.map