(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{212:function(e,t,n){},214:function(e,t,n){},215:function(e,t,n){},358:function(e,t,n){},376:function(e,t,n){"use strict";n.r(t);n(207);var a=n(0),r=n.n(a),o=n(69),i=n.n(o),s=(n(212),n(28)),c=n.n(s),l=n(56),u=n(25),d=n(32),h=n(26),p=n(27),m=(n(214),n(215),n(200)),f=n(51),b=n(2),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(d.a)(n,[{key:"showMore",value:function(){this.setState({showMore:!this.state.showMore})}},{key:"showText",value:function(){return this.state.showMore?"Hide Event Details":"Show Event Details"}},{key:"description",value:function(e){return!0===this.state.showMore?Object(b.jsxs)("div",{className:"event-details",children:[Object(b.jsx)("h6",{children:"About the event: "}),Object(b.jsx)("p",{id:"event-description",children:Object(b.jsx)("em",{children:e.description})}),Object(b.jsx)("a",{href:e.htmlLink,color:"secondary",className:"event-link",target:"_blank",rel:"noreferrer",children:"See event details on Google Calendar"})]}):""}},{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime);return Object(b.jsx)("div",{className:"event mb-2",children:Object(b.jsxs)(f.a,{className:"event-card",id:"event-card",children:[Object(b.jsx)(f.a.Title,{id:"card-title",children:t.summary}),Object(b.jsxs)(f.a.Subtitle,{id:"card-subtitle",children:["Creator: ",t.creator.email]}),Object(b.jsxs)(f.a.Text,{id:"card-text",children:["Start Time: ",n.toLocaleString(),"(local time)"]}),Object(b.jsxs)(f.a.Text,{id:"card-location",children:["Location: ",t.location]}),Object(b.jsx)("br",{}),!0===this.state.showMore&&Object(b.jsx)(f.a.Text,{id:"card-details",className:"EventDetails",children:this.description(t)}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(m.a,{variant:"link",id:"link",className:"details-btn",onClick:function(){e.showMore()},children:this.showText()})})]})})}}]),n}(a.Component),j=n(397),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"EventList",children:Object(b.jsx)(j.a,{container:!0,spacing:2,children:e.map((function(e){return Object(b.jsx)(j.a,{item:!0,xs:12,sm:12,md:6,children:Object(b.jsx)("li",{children:Object(b.jsx)(v,{event:e})},e.id)},e.id)}))})})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{className:"alert-message",style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#72c5d9",a}return n}(w),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#e985ee",a}return n}(w),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#aba7e3",a}return n}(w),k=n(390),S=n(399),T=n.p+"static/media/buildings.619381f0.png",N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.numberDisplayed)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(x,{id:"info-alert",text:this.state.infoText}),Object(b.jsxs)(k.a,{className:"mb-3 align-center",children:[Object(b.jsx)(k.a.Prepend,{children:Object(b.jsx)("img",{id:"cityImg",alt:"",src:T,width:"35",height:"35",fluid:"true"})}),Object(b.jsx)(S.a,{placeholder:"Filter events by city","aria-label":"Search for events by city","aria-describedby":"basic-addon1",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(b.jsxs)("ul",{className:"suggestions w-100 flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{className:"matchSuggestion",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{className:"seeAll",onClick:function(){e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberDisplayed:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({numberDisplayed:"",errorText:"Please select a number between 1 and 32"}):(e.setState({numberDisplayed:n,errorText:""}),void e.props.updateNumberOfEvents(t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.numberDisplayed;return Object(b.jsxs)("div",{className:"NumberOfEvents ",children:[Object(b.jsxs)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:[Object(b.jsx)("input",{type:"number",className:"event-number-input rounded text-align-center",value:e,onChange:this.handleInputChanged}),Object(b.jsx)("span",{className:"pe-2",children:"Events displayed: "})]}),Object(b.jsx)("div",{className:"d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(O,{text:this.state.errorText})})]})}}]),n}(a.Component),Z=n(391),W=n(392),E=n(396),M=n(192),A=n(193),D=n(199),I=function(e){var t=e.locations,n=e.events;return Object(b.jsx)(Z.a,{height:400,children:Object(b.jsxs)(W.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(b.jsx)(E.a,{strokeDasharray:"3 3"}),Object(b.jsx)(M.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(A.a,{type:"number",dataKey:"number",name:"number of events",allowDecimals:!1}),Object(b.jsx)(D.a,{data:t.map((function(e){var t=n.filter((function(e){return e.location})).length;return{city:e.split(", ").shift(),number:t}})),fill:"#8884d8"})]})})};n(358);var L=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",align:"center",children:[Object(b.jsx)("h1",{id:"welcome-header",children:"Welcome to MeetApp"}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{id:"welcome-text",children:"Check out upcoming events around the world for full-stack developers"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{className:"google-btn",children:[Object(b.jsx)("div",{className:"google-icon-wrapper",children:Object(b.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://gcy2312.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},J=n(198),B=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),U=n(125),q=n.n(U),R=n(81),F=n.n(R),_=function(){var e=Object(l.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,_(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,i=o.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&Y(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(e){var t=e.map((function(e){return e.location}));return Object(J.a)(new Set(t))},z=function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(F.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return F.a.done(),e.abrupt("return",B);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),F.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,H();case 10:if(!(n=e.sent)){e.next=20;break}return P(),a="https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,q.a.get(a);case 16:return(r=e.sent).data&&(o=G(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),F.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Y=function(){var e=Object(l.a)(c.a.mark((function e(t){var n,a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=n.p+"static/media/MeetAppLogo.79bd045a.png",X=n(195),K=n(126),Q=n(194),$=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberDisplayed:32,currentCity:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){z().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(c.a.mark((function e(){var t,n,a,r,o,i=this;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=this.state.numberDisplayed,n=localStorage.getItem("access_token"),e.next=5,_(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,r=new URLSearchParams(window.location.search),o=r.get("code"),this.setState({showWelcomeScreen:!(o||a)}),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently using the app offline. Events may be out of date."}),(o||a)&&this.mounted&&z().then((function(e){i.mounted&&i.setState({events:e.slice(0,t),locations:G(e)})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateNumberOfEvents",value:function(e){this.setState({numberDisplayed:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.locations,a=t.events,r=t.showWelcomeScreen;return void 0===this.state.showWelcomeScreen?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(y,{id:"warning-text",text:this.state.warningText}),Object(b.jsx)(Q.a,{fluid:!0,children:Object(b.jsxs)(X.a,{className:"justify-content-md-center",children:[Object(b.jsx)(K.a,{xs:12,children:Object(b.jsx)("img",{src:V,alt:"logo",className:"logo-web"})}),Object(b.jsx)("br",{}),Object(b.jsxs)(K.a,{xs:12,md:12,children:[Object(b.jsx)("br",{}),Object(b.jsx)("h5",{id:"city-header",children:"Check out upcoming Web Development events near you!!!"}),Object(b.jsx)("br",{}),Object(b.jsx)(N,{locations:n,updateEvents:this.updateEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(b.jsx)(C,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{children:Object(b.jsx)(I,{locations:n,events:a})}),Object(b.jsx)("div",{children:Object(b.jsx)(g,{events:a})})]})}),Object(b.jsx)(L,{showWelcomeScreen:r,getAccessToken:function(){H()}})]})}}]),n}(a.Component),ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,400)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),o(e),i(e)}))},ae=n(196);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):te(t,e)}))}}(),ne(),ae.config("9ee9d281bc2f4fb1bb68acedbc083fc6").install()}},[[376,1,2]]]);
//# sourceMappingURL=main.202f2553.chunk.js.map