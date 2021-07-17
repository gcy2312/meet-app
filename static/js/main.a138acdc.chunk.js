(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{222:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);n(217);var a=n(0),r=n.n(a),i=n(72),s=n.n(i),o=(n(222),n(29)),c=n.n(o),l=n(56),u=n(26),d=n(35),h=n(27),p=n(28),f=(n(224),n(225),n(208)),m=n(57),b=n(3),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(d.a)(n,[{key:"showMore",value:function(){this.setState({showMore:!this.state.showMore})}},{key:"showText",value:function(){return this.state.showMore?"Hide Event Details":"Show Event Details"}},{key:"description",value:function(e){return!0===this.state.showMore?Object(b.jsxs)("div",{className:"event-details",children:[Object(b.jsx)("h6",{children:"About the event: "}),Object(b.jsx)("p",{id:"event-description",children:Object(b.jsx)("em",{children:e.description})}),Object(b.jsx)("a",{href:e.htmlLink,color:"secondary",className:"event-link",target:"_blank",rel:"noreferrer",children:"See event details on Google Calendar"})]}):""}},{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime);return Object(b.jsx)("div",{className:"event mb-2",children:Object(b.jsxs)(m.a,{className:"event-card",id:"event-card",children:[Object(b.jsx)(m.a.Title,{id:"card-title",children:t.summary}),Object(b.jsxs)(m.a.Subtitle,{id:"card-subtitle",children:["Creator: ",t.creator.email]}),Object(b.jsxs)(m.a.Text,{id:"card-text",children:["Start Time: ",n.toLocaleString(),"(local time)"]}),Object(b.jsxs)(m.a.Text,{id:"card-location",children:["Location: ",t.location]}),Object(b.jsx)("br",{}),!0===this.state.showMore&&Object(b.jsx)(m.a.Text,{id:"card-details",className:"EventDetails",children:this.description(t)}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(f.a,{variant:"link",id:"link",className:"details-btn",onClick:function(){e.showMore()},children:this.showText()})})]})})}}]),n}(a.Component),j=n(403),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"EventList",children:Object(b.jsx)(j.a,{container:!0,spacing:2,children:e.map((function(e){return Object(b.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,children:Object(b.jsx)("li",{children:Object(b.jsx)(v,{event:e})},e.id)},e.id)}))})})})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{className:"alert-message",style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#72c5d9",a}return n}(x),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#e985ee",a}return n}(x),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#aba7e3",a}return n}(x),k=n(396),S=n(406),T=n.p+"static/media/buildings.619381f0.png",N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(null,e.props.numberDisplayed)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(w,{id:"info-alert",text:this.state.infoText}),Object(b.jsxs)(k.a,{className:"mb-3 align-center",children:[Object(b.jsx)(k.a.Prepend,{children:Object(b.jsx)("img",{id:"cityImg",alt:"",src:T,width:"35",height:"35",fluid:"true"})}),Object(b.jsx)(S.a,{placeholder:"Filter events by city","aria-label":"Search for events by city","aria-describedby":"basic-addon1",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(b.jsxs)("ul",{className:"suggestions w-100 flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{className:"matchSuggestion",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{className:"seeAll",onClick:function(){e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={numberDisplayed:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({numberDisplayed:"",errorText:"Please select a number between 1 and 32"}):(e.setState({numberDisplayed:n,errorText:""}),void e.props.updateEvents(n))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.numberDisplayed;return Object(b.jsxs)("div",{className:"NumberOfEvents ",children:[Object(b.jsxs)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:[Object(b.jsx)("input",{type:"number",className:"event-number-input rounded text-align-center",value:e,onChange:this.handleInputChanged}),Object(b.jsx)("span",{className:"pe-2",children:"Events displayed: "})]}),Object(b.jsx)("div",{className:"d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(y,{text:this.state.errorText})})]})}}]),n}(a.Component),Z=n(21),D=n(397),E=n(405),M=n(197),A=n(25),W=n(101),J=n(81),I=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(Z.a)(n,2),i=r[0],s=r[1];Object(a.useEffect)((function(){s((function(){return["React","JavaScript","Node","jQuery","AngularJS","Angular"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return 0!==e.value}))}))}),[t]);var o=["#44ddd1","#eb85ee","#9daee0","#28857d","#6e6089","#61b0c5"];return Object(b.jsx)(D.a,{height:300,children:Object(b.jsxs)(E.a,{children:[Object(b.jsxs)(M.a,{data:i,cx:"50%",cy:"50%",innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:[Object(b.jsx)(A.a,{value:"Total: ".concat(t.length),offset:0,position:"center",fill:o[0]}),i.map((function(e,t){return Object(b.jsx)(W.a,{fill:o[t],stroke:o[t]},"cell-".concat(t))}))]}),Object(b.jsx)(J.a,{verticalAlign:"top",align:"center"})]})})},L=n(207),B=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),R=n(131),q=n.n(R),U=n(84),F=n.n(U),H=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return i=e.sent,s=i.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&P(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(e){var t=e.map((function(e){return e.location}));return Object(L.a)(new Set(t))},_=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return F.a.done(),e.abrupt("return",B);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),F.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,z();case 10:if(!(n=e.sent)){e.next=20;break}return G(),a="https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,q.a.get(a);case 16:return(r=e.sent).data&&(i=Y(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(i))),F.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},P=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n.p+"static/media/MeetAppLogo.79bd045a.png",K=n(132),X=n(106),Q=n(202),$=n(401),ee=n(402),te=n(203),ne=n(204),ae=n(85),re=n(209),ie=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberDisplayed:32,currentCity:"all",warningText:""},e.updateEvents=function(t,n){e.mounted=!0;var a=e.state,r=a.currentCity,i=a.numberDisplayed;t?_().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,i);e.mounted&&e.setState({events:a,locations:n.locations,currentCity:t})})):_().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);e.mounted&&e.setState({events:a,locations:t.locations,numberDisplayed:n})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.mounted=!0,t=this.state.numberDisplayed,navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently using the app offline. Events may be out of date."}),this.mounted&&_().then((function(e){n.mounted&&n.setState({events:e.slice(0,t),locations:Y(e)})}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.events,a=e.numberDisplayed,r=e.warningText;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{id:"warning-text",text:r}),Object(b.jsxs)(Q.a,{fluid:!0,children:[Object(b.jsxs)(K.a,{className:"search-logo justify-content-md-center",children:[Object(b.jsx)(X.a,{xs:12,children:Object(b.jsx)("img",{src:V,alt:"logo",className:"logo-web"})}),Object(b.jsx)("br",{}),Object(b.jsxs)(X.a,{xs:12,md:12,children:[Object(b.jsx)("br",{}),Object(b.jsx)("h6",{id:"city-header",children:"Check out upcoming Web Development events near you!!!"}),Object(b.jsx)("br",{}),Object(b.jsx)(N,{locations:t,updateEvents:this.updateEvents}),Object(b.jsx)(C,{updateEvents:this.updateEvents,numberDisplayed:a}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)(D.a,{height:300,children:Object(b.jsxs)($.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(b.jsx)(ee.a,{}),Object(b.jsx)(te.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(ne.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(b.jsx)(ae.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(re.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(b.jsx)(I,{events:n})]}),Object(b.jsx)("br",{}),Object(b.jsx)(K.a,{children:Object(b.jsx)(X.a,{md:12,children:Object(b.jsx)("div",{children:Object(b.jsx)(g,{events:n})})})})]})]})}}]),n}(a.Component),se=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,407)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},le=n(205);s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");se?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):oe(t,e)}))}}(),ce(),le.config("9ee9d281bc2f4fb1bb68acedbc083fc6").install()}},[[383,1,2]]]);
//# sourceMappingURL=main.a138acdc.chunk.js.map