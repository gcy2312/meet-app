(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{223:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},367:function(e,t,n){},385:function(e,t,n){"use strict";n.r(t);n(218);var a=n(0),r=n.n(a),c=n(72),i=n.n(c),o=(n(223),n(29)),s=n.n(o),l=n(56),u=n(26),d=n(35),h=n(27),p=n(28),m=(n(225),n(226),n(208)),f=n(57),b=n(2),j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(d.a)(n,[{key:"showMore",value:function(){this.setState({showMore:!this.state.showMore})}},{key:"showText",value:function(){return this.state.showMore?"Hide Event Details":"Show Event Details"}},{key:"description",value:function(e){return!0===this.state.showMore?Object(b.jsxs)("div",{className:"event-details",children:[Object(b.jsx)("h6",{children:"About the event: "}),Object(b.jsx)("p",{id:"event-description",children:Object(b.jsx)("em",{children:e.description})}),Object(b.jsx)("a",{href:e.htmlLink,color:"secondary",className:"event-link",target:"_blank",rel:"noreferrer",children:"See event details on Google Calendar"})]}):""}},{key:"render",value:function(){var e=this,t=this.props.event,n=new Date(t.start.dateTime);return Object(b.jsx)("div",{className:"event mb-2",children:Object(b.jsxs)(f.a,{className:"event-card",id:"event-card",children:[Object(b.jsx)(f.a.Title,{id:"card-title",children:t.summary}),Object(b.jsxs)(f.a.Subtitle,{id:"card-subtitle",children:["Creator: ",t.creator.email]}),Object(b.jsxs)(f.a.Text,{id:"card-text",children:["Start Time: ",n.toLocaleString(),"(local time)"]}),Object(b.jsxs)(f.a.Text,{id:"card-location",children:["Location: ",t.location]}),Object(b.jsx)("br",{}),!0===this.state.showMore&&Object(b.jsx)(f.a.Text,{id:"card-details",className:"EventDetails",children:this.description(t)}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(m.a,{variant:"link",id:"link",className:"details-btn",onClick:function(){e.showMore()},children:this.showText()})})]})})}}]),n}(a.Component),v=n(404),g=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{className:"EventList",children:Object(b.jsx)(v.a,{container:!0,spacing:2,children:e.map((function(e){return Object(b.jsx)(v.a,{item:!0,xs:12,sm:12,md:6,children:Object(b.jsx)("li",{children:Object(b.jsx)(j,{event:e})},e.id)},e.id)}))})})})}}]),n}(a.Component),x=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Alert",children:Object(b.jsx)("p",{className:"alert-message",style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#72c5d9",a}return n}(x),O=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#e985ee",a}return n}(x),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="#aba7e3",a}return n}(x),k=n(397),S=n(407),T=n.p+"static/media/buildings.619381f0.png",N=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:!1,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1,infoText:""}),e.props.updateEvents(t,e.props.numberDisplayed)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"CitySearch",children:[Object(b.jsx)(w,{id:"info-alert",text:this.state.infoText}),Object(b.jsxs)(k.a,{className:"mb-3 align-center",children:[Object(b.jsx)(k.a.Prepend,{children:Object(b.jsx)("img",{id:"cityImg",alt:"",src:T,width:"35",height:"35",fluid:"true"})}),Object(b.jsx)(S.a,{placeholder:"Filter events by city","aria-label":"Search for events by city","aria-describedby":"basic-addon1",type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}})]}),Object(b.jsxs)("ul",{className:"suggestions w-100 flex-column align-items-center",style:this.state.showSuggestions?{display:"flex"}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(b.jsx)("li",{className:"matchSuggestion",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(b.jsx)("li",{className:"seeAll",onClick:function(){e.handleItemClicked("all")},children:Object(b.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(a.Component),C=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={numberDisplayed:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;return n<1||n>32?e.setState({numberDisplayed:"",errorText:"Please select a number between 1 and 32"}):(e.setState({numberDisplayed:n,errorText:""}),void e.props.updateNumberOfEvents(t.target.value))},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.numberDisplayed;return Object(b.jsxs)("div",{className:"NumberOfEvents ",children:[Object(b.jsxs)("div",{className:"py-3 d-flex flex-row-reverse align-items-center",children:[Object(b.jsx)("input",{type:"number",className:"event-number-input rounded text-align-center",value:e,onChange:this.handleInputChanged}),Object(b.jsx)("span",{className:"pe-2",children:"Events displayed: "})]}),Object(b.jsx)("div",{className:"d-flex flex-row-reverse align-items-center",children:Object(b.jsx)(O,{text:this.state.errorText})})]})}}]),n}(a.Component),Z=n(21),E=n(398),W=n(406),A=n(197),M=n(25),D=n(101),J=n(81),L=function(e){var t=e.events,n=Object(a.useState)([]),r=Object(Z.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){i((function(){return["React","JavaScript","Node","jQuery","AngularJS"].map((function(e){var n=t.filter((function(t){return t.summary.split(" ").includes(e)})).length;return{name:e,value:n}})).filter((function(e){return 0!==e.value}))}))}),[t]);var o=["#44ddd1","#eb85ee","#9daee0","#28857d","#6e6089"];return Object(b.jsx)(E.a,{height:300,children:Object(b.jsxs)(W.a,{children:[Object(b.jsxs)(A.a,{data:c,cx:300,cy:200,innerRadius:60,outerRadius:80,fill:"#8884d8",paddingAngle:5,dataKey:"value",label:function(e){var t=e.percent;return"".concat((100*t).toFixed(0),"%")},children:[Object(b.jsx)(M.a,{value:"Total: ".concat(t.length),offset:0,position:"center",fill:o[0]}),c.map((function(e,t){return Object(b.jsx)(D.a,{fill:o[t],stroke:o[t]},"cell-".concat(t))}))]}),Object(b.jsx)(J.a,{verticalAlign:"bottom",align:"center"})]})})};n(367);var I=function(e){return e.showWelcomeScreen?Object(b.jsxs)("div",{className:"WelcomeScreen",align:"center",children:[Object(b.jsx)("h1",{id:"welcome-header",children:"Welcome to MeetApp"}),Object(b.jsx)("br",{}),Object(b.jsx)("h4",{id:"welcome-text",children:"Check out upcoming events around the world for full-stack developers"}),Object(b.jsx)("br",{}),Object(b.jsx)("div",{className:"button_cont",align:"center",children:Object(b.jsxs)("div",{className:"google-btn",children:[Object(b.jsx)("div",{className:"google-icon-wrapper",children:Object(b.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\r\no.svg",alt:"Google sign-in"})}),Object(b.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",className:"btn-text",children:Object(b.jsx)("b",{children:"Sign in with google"})})]})}),Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://gcy2312.github.io/meet-app/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},B=n(207),R=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-21T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-21T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),U=n(131),q=n.n(U),F=n(84),_=n.n(F),H=function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,H(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,q.a.get("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return c=e.sent,i=c.data.authUrl,e.abrupt("return",window.location.href=i);case 20:return e.abrupt("return",r&&V(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(e){var t=e.map((function(e){return e.location}));return Object(B.a)(new Set(t))},P=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return _.a.done(),e.abrupt("return",R);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),_.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,G();case 10:if(!(n=e.sent)){e.next=20;break}return Y(),a="https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+n,e.next=16,q.a.get(a);case 16:return(r=e.sent).data&&(c=z(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(c))),_.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},V=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=n.p+"static/media/MeetAppLogo.79bd045a.png",X=n(132),Q=n(106),$=n(202),ee=n(402),te=n(403),ne=n(203),ae=n(204),re=n(85),ce=n(209),ie=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberDisplayed:32,currentCity:"all",warningText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){P().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(", ").shift(),number:t}}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,a,r,c,i=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=this.state.numberDisplayed,n=localStorage.getItem("access_token"),e.next=5,H(n);case 5:if(!e.sent.error){e.next=9;break}e.t0=!1,e.next=10;break;case 9:e.t0=!0;case 10:a=e.t0,r=new URLSearchParams(window.location.search),c=r.get("code"),this.setState({showWelcomeScreen:!(c||a)}),navigator.onLine?this.setState({warningText:""}):this.setState({warningText:"You are currently using the app offline. Events may be out of date."}),(c||a)&&this.mounted&&P().then((function(e){i.mounted&&i.setState({events:e.slice(0,t),locations:z(e)})}));case 16:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"updateNumberOfEvents",value:function(e){this.setState({numberDisplayed:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.locations,a=(t.numberOfEvents,t.events),r=t.warningText,c=t.showWelcomeScreen;return void 0===c?Object(b.jsx)("div",{className:"App"}):Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(y,{id:"warning-text",text:r}),Object(b.jsxs)($.a,{fluid:!0,children:[Object(b.jsxs)(X.a,{className:"justify-content-md-center",children:[Object(b.jsx)(Q.a,{xs:12,children:Object(b.jsx)("img",{src:K,alt:"logo",className:"logo-web"})}),Object(b.jsx)("br",{}),Object(b.jsxs)(Q.a,{xs:12,md:12,children:[Object(b.jsx)("br",{}),Object(b.jsx)("h5",{id:"city-header",children:"Check out upcoming Web Development events near you!!!"}),Object(b.jsx)("br",{}),Object(b.jsx)(N,{locations:n,updateEvents:this.updateEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(b.jsx)(C,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(b.jsx)("br",{})]})]}),Object(b.jsxs)("div",{className:"data-vis-wrapper",children:[Object(b.jsx)(E.a,{height:300,children:Object(b.jsxs)(ee.a,{margin:{top:20,right:20,bottom:20,left:20},children:[Object(b.jsx)(te.a,{}),Object(b.jsx)(ne.a,{type:"category",dataKey:"city",name:"city"}),Object(b.jsx)(ae.a,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),Object(b.jsx)(re.a,{cursor:{strokeDasharray:"3 3"}}),Object(b.jsx)(ce.a,{data:this.getData(),fill:"#8884d8"})]})}),Object(b.jsx)(L,{events:a})]}),Object(b.jsx)("br",{}),Object(b.jsx)(X.a,{children:Object(b.jsx)(Q.a,{md:12,children:Object(b.jsx)("div",{className:"eventList-container h-75 overflow-scroll",children:Object(b.jsx)(g,{events:a})})})})]}),Object(b.jsx)(I,{showWelcomeScreen:c,getAccessToken:function(){G()}})]})}}]),n}(a.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,408)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},ue=n(205);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ie,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet-app",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet-app","/service-worker.js");oe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):se(t,e)}))}}(),le(),ue.config("9ee9d281bc2f4fb1bb68acedbc083fc6").install()}},[[385,1,2]]]);
//# sourceMappingURL=main.26115202.chunk.js.map