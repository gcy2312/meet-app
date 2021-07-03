(this["webpackJsonpmeet-app"]=this["webpackJsonpmeet-app"]||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);n(37);var a=n(0),r=n.n(a),s=n(33),o=n.n(s),i=(n(42),n(8)),c=n(9),u=n(11),l=n(10),d=(n(43),n(44),n(36)),h=n(13),p=n(16),m=n(14),f=n(1),b=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={showMore:!1},e}return Object(c.a)(n,[{key:"showMore",value:function(){this.setState({showMore:!this.state.showMore})}},{key:"showText",value:function(){return this.state.showMore?"Hide Event Details":"Show Event Details"}},{key:"description",value:function(e){return this.state.showMore?e.description:""}},{key:"render",value:function(){var e=this,t=this.props.event;return Object(f.jsx)("div",{className:"event mb-2",children:Object(f.jsx)(p.a,{className:"justify-content-md-center",children:Object(f.jsx)(m.a,{md:12,children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(h.a.Title,{children:t.summary}),Object(f.jsxs)(h.a.Subtitle,{children:[Object(f.jsx)("b",{children:"Creator: "}),t.creator.email]}),Object(f.jsxs)(h.a.Text,{children:[Object(f.jsx)("b",{children:"Start Time: "}),t.start.dateTime]}),Object(f.jsxs)(h.a.Text,{children:[Object(f.jsx)("b",{children:"Location: "}),t.location]}),!0===this.state.showMore&&Object(f.jsx)(h.a.Text,{className:"EventDetails",children:this.description(t)}),Object(f.jsx)("br",{}),Object(f.jsx)(d.a,{variant:"primary",className:"details-btn",onClick:function(){e.showMore()},children:this.showText()})]})})})})}}]),n}(a.Component),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Upcoming Events: "}),Object(f.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(f.jsx)("li",{children:Object(f.jsx)(b,{event:e})},e.id)}))})]})}}]),n}(a.Component),j=n(15),g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));e.setState({query:n,suggestions:a})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberDisplayed)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return Object(f.jsx)("div",{className:"CitySearch",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(j.a.Label,{children:"Filter Events By City"}),Object(f.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(f.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(f.jsx)("li",{className:"matchSuggestion",onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(f.jsx)("li",{className:"seeAll",onClick:function(){e.handleItemClicked("all")},children:Object(f.jsx)("b",{children:"See all cities"})},"all")]})]})})}}]),n}(a.Component),w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={numberDisplayed:32},e.handleInputChanged=function(t){var n=t.target.value;e.setState({numberDisplayed:n}),e.props.updateNumberOfEvents(t.target.value)},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this.state.numberDisplayed;return Object(f.jsx)(p.a,{children:Object(f.jsx)(m.a,{md:3,children:Object(f.jsx)("div",{className:"NumberOfEvents",children:Object(f.jsxs)(j.a,{children:[Object(f.jsx)(j.a.Label,{htmlFor:"numberDisplayed",children:"Events Displayed/Page"}),Object(f.jsx)("br",{}),Object(f.jsx)("input",{type:"number",className:"event-number-input",value:e,onChange:this.handleInputChanged})]})})})})}}]),n}(a.Component),y=n(12),O=n.n(y),x=n(17),k=n(35),S=JSON.parse(JSON.stringify([{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}])),T=n(22),C=n.n(T),E=n(19),N=n.n(E),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},M=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},D=function(){var e=Object(x.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",S);case 4:return e.next=6,J();case 6:if(!(t=e.sent)){e.next=16;break}return M(),n="https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,C.a.get(n);case 12:return(a=e.sent).data&&(r=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),N.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(x.a)(O.a.mark((function e(){var t,n,a,r,s,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,D(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&q(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://gtkmwuoeuc.execute-api.us-east-1.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberDisplayed:32,currentCity:"all"},e.updateEvents=function(t,n){I().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.mounted&&e.setState({events:r.slice(0,n),currentCity:t})}))},e}return Object(c.a)(n,[{key:"updateNumberOfEvents",value:function(e){this.setState({numberDisplayed:e});var t=this.state.currentCity;this.updateEvents(t,e)}},{key:"componentDidMount",value:function(){var e=this,t=this.state.numberDisplayed;this.mounted=!0,I().then((function(n){e.mounted&&e.setState({events:n.slice(0,t),locations:Z(n)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Meet Up"}),Object(f.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents,updateNumberOfEvents:this.updateNumberOfEvents}),Object(f.jsx)(w,{updateNumberOfEvents:function(t){return e.updateNumberOfEvents(t)}}),Object(f.jsx)(v,{events:this.state.events})]})}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,70)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))},W=n(34);o.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),B(),W.config("9ee9d281bc2f4fb1bb68acedbc083fc6").install()}},[[68,1,2]]]);
//# sourceMappingURL=main.75f810c0.chunk.js.map