(this["webpackJsonpinternational-trading-app"]=this["webpackJsonpinternational-trading-app"]||[]).push([[0],{111:function(e,t,a){},115:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},218:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(20),i=a.n(n),l=(a(93),a(11)),o=a(221),r=a(220),j=a(36),d=a.n(j),b=(a(111),a(1));var m=function(e){var t=Object(s.useState)(null),a=Object(l.a)(t,2),c=a[0],n=a[1],i=Object(s.useState)(!1),j=Object(l.a)(i,2),m=j[0],u=j[1],h=Object(s.useState)({}),x=Object(l.a)(h,2),O=x[0],g=x[1],p=Object(s.useState)(),v=Object(l.a)(p,2),f=v[0],N=v[1];return console.log(O),Object(s.useEffect)((function(){var e="http://api.exchangeratesapi.io/v1/latest?access_key=9e206f87340f24fb2691d006f69fa15c&symbols=XAU,XAG,USD,ILS,GBP,BTC";console.log({url:e}),d.a.get(e).then((function(e){var t,a,s;console.log(e),g(null===(t=e.data)||void 0===t?void 0:t.rates),N(new Date(1e3*(null===(a=e.data)||void 0===a?void 0:a.timestamp)).toLocaleString("en-GB",{timeZone:"UTC"})),console.log(null===(s=e.data)||void 0===s?void 0:s.timestamp),u(!0)}),(function(e){u(!0),n(e)}))}),[]),c?Object(b.jsxs)("div",{children:["Error: ",c.message]}):m?Object(b.jsx)("div",{children:Object(b.jsxs)(o.a,{collapseOnSelect:!0,bg:"light",variant:"light",sticky:"top",className:"navbar",children:[Object(b.jsxs)(r.a,{className:"item-container",children:[Object(b.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-center",children:[Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/fluency/50/000000/gold-bars.png",width:"25",height:"25",className:"d-inline-block align-top"}),"   GOLD",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.XAU.toFixed(6)})]}),Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/dotty/50/000000/gold-bars.png",width:"25",height:"25",className:"d-inline-block align-top"}),"   SILVER",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.XAG.toFixed(6)})]}),Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/ios-filled/50/000000/exchange-dollar.png",width:"25",height:"25",className:"d-inline-block align-top"}),"   USD/EUR",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.USD.toFixed(6)})]}),Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/ios-glyphs/50/000000/shekel.png",width:"25",height:"25",className:"d-inline-block align-center"}),"   ILS/EUR",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.ILS.toFixed(6)})]}),Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/ios-filled/50/000000/exchange-pound.png",width:"25",height:"25",className:"d-inline-block align-center"}),"   GBP/EUR",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.GBP.toFixed(6)})]}),Object(b.jsxs)(o.a.Text,{className:"bar-items",children:[Object(b.jsx)("img",{alt:"",src:"https://img.icons8.com/ios-filled/50/000000/exchange-bitcoin.png",width:"25",height:"25",className:"d-inline-block align-center"}),"   BTC/EUR",Object(b.jsx)("br",{}),Object(b.jsx)("b",{children:O.BTC.toFixed(6)})]})]})]}),Object(b.jsxs)(o.a.Text,{className:"update",children:["Updated: ",f]})]})}):Object(b.jsx)("div",{children:"Loading..."})},u=a(222),h=a.p+"static/media/temp-logo.4abb3801.png",x=a(23);a(115);function O(){return Object(b.jsx)("div",{className:"navbar-container",children:Object(b.jsx)(o.a,{collapseOnSelect:!0,expand:"sm",bg:"dark",variant:"dark",sticky:"top",className:"navbar",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(x.b,{to:"/",children:Object(b.jsxs)(o.a.Brand,{className:"logo",children:[Object(b.jsx)("img",{alt:"",src:h,width:"30",height:"30",className:"d-inline-block align-top"})," ","Metal Trade"]})}),Object(b.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(o.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsx)(u.a,{className:"me-auto"}),Object(b.jsxs)(u.a,{children:[Object(b.jsx)(o.a.Text,{children:Object(b.jsx)(x.b,{className:"link",to:"/about",children:"About"})}),Object(b.jsx)(o.a.Text,{children:Object(b.jsx)(x.b,{className:"link",to:"/contact",children:"Contact"})})]})]})]})})})}var g=a(87),p=a(41);a(212);var v=function(){var e=Object(s.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(!1),i=Object(l.a)(n,2),o=i[0],r=i[1],j=["09","10","11","12","13","14","15"],m=Object(s.useState)([]),u=Object(l.a)(m,2),h=u[0],x=u[1];Object(s.useEffect)((function(){j.map((function(e){var t="http://api.exchangeratesapi.io/v1/2021-08-".concat(e,"?access_key=9e206f87340f24fb2691d006f69fa15c&symbols=XAU,XAG");console.log({url:t}),d.a.get(t).then((function(e){console.log(null===e||void 0===e?void 0:e.data),r(!0),x((function(t){return[].concat(Object(g.a)(t),[null===e||void 0===e?void 0:e.data])}))}),(function(e){r(!0),c(e)}))}))}),[]),console.log(h);var O=h.sort((function(e,t){return new Date(e.date)-new Date(t.date)}));console.log(O);var v=function(e){return O[e].rates.XAG/O[e].rates.XAU};if(a)return Object(b.jsxs)("div",{children:["Error: ",a.message]});if(!o||O.length<j.length)return Object(b.jsx)("div",{children:"Loading..."});console.log(p.b),p.b.global.defaultFontColor="#FFFFFF";var f={labels:[O[0].date,O[1].date,O[2].date,O[3].date,O[4].date,O[5].date,O[6].date],datasets:[{label:"Gold/Silver Ratio",data:[v(0),v(1),v(2),v(3),v(4),v(5),v(6)],lineTension:.3,borderColor:["rgba(192, 192, 192, 0.9)"],backgroundColor:["rgba(255, 206, 86, 0.5)"],pointBackgroundColor:"rgba(255, 206, 86, 0.9)",pointBorderColor:"rgba(255, 206, 86, 0.6)",fill:!0,scaleFontColor:"#FFFFFF",fontColor:"#FFFFFF"}]};return Object(b.jsxs)("div",{className:"chart",children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)("span",{className:"gold",children:"Gold"}),"-",Object(b.jsx)("span",{className:"silver",children:"Silver"})," Chart"]}),Object(b.jsx)(p.a,{data:f,options:{title:{display:!1,text:"Gold-Silver Ratio Chart",align:"start",position:"top",fontSize:18},scales:{yAxes:[{tics:{min:0,max:10,stepSize:5},gridLines:{color:"#505050"}}],xAxes:[{tics:{min:0,max:7,stepSize:1},gridLines:{color:"#505050"}}]},plugins:{tooltips:{mode:"index",intersect:!1},legend:{title:{position:"start"}},title:{display:!0,text:"Gold-Silver Ratio Chart",align:"start",position:"top",fontSize:18},hover:{mode:"index",intersect:!1}}}})]})};a(213);function f(){return Object(b.jsxs)("p",{className:"footer",children:[Object(b.jsx)("span",{children:"\xa9"}),"2021 Metal Trade Inc."]})}a(214);var N=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("header",{children:[Object(b.jsx)(m,{}),Object(b.jsx)(O,{})]}),Object(b.jsx)("div",{className:"content-container",children:Object(b.jsx)(v,{})}),Object(b.jsx)("footer",{children:Object(b.jsx)(f,{})})]})},S=a.p+"static/media/gold.4e67e365.jpg",C=a.p+"static/media/silver.9e2dbfdd.jpg",F=a.p+"static/media/piggy-bank.d319764a.jpg";a(215);var y=a(9),k=a(2),T=a(86);a(216);var L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),s(e),c(e),n(e),i(e)}))},U=(a(217),a(6));i.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(x.a,{basename:"/international-trading-app",children:Object(b.jsxs)(U.c,{children:[Object(b.jsx)(U.a,{path:"/contact",component:function(){var e=Object(s.useState)(!1),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)({fullName:"",subject:"",email:"",message:""}),i=Object(l.a)(n,2),o=i[0],r=i[1],j=Object(s.useState)(""),d=Object(l.a)(j,2),m=d[0],u=d[1],h=Object(s.useState)(""),x=Object(l.a)(h,2),g=x[0],p=x[1],v=function(e){r(Object(k.a)(Object(k.a)({},o),{},Object(y.a)({},e.target.name,e.target.value)))};return a?Object(b.jsxs)("div",{className:"Contact",children:[Object(b.jsx)("header",{children:Object(b.jsx)(O,{})}),Object(b.jsx)("div",{className:"content-container",children:Object(b.jsx)("h2",{className:"thankyou",children:"Thank you for contacting us!"})}),Object(b.jsx)("footer",{children:Object(b.jsx)(f,{})})]}):Object(b.jsxs)("div",{className:"Contact",children:[Object(b.jsx)("header",{children:Object(b.jsx)(O,{})}),Object(b.jsxs)("div",{className:"Contact-container",children:[Object(b.jsx)("h3",{children:"Contact Us"}),Object(b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){var e="",t="";return o.fullName&&o.subject&&o.email&&o.message||(e="Please fill in all fields before submitting"),o.email.includes("@")&&o.email.includes(".")||(t="Please type in a valid email address"),!e&&!t||(p(e),u(t),!1)}()&&(Object(T.a)("service_64s8yr9","template_f6l50t7",o,"user_B05CYKmn6juHchJw25Cwj").then((function(e){console.log("SUCCESS!",e.status,e.text)})).catch((function(e){console.log("FAILED...",e)})),r({fullName:"",subject:"",email:"",message:""}),u(""),p(""),c(!0))},children:[Object(b.jsxs)("div",{className:"formLine",children:[Object(b.jsx)("label",{children:"Full Name:"}),Object(b.jsx)("input",{id:"fullName",name:"fullName",type:"text",placeholder:"Please enter name",value:o.fullName,onChange:function(e){return v(e)}})]}),Object(b.jsxs)("div",{className:"formLine",children:[Object(b.jsx)("label",{children:"Email:"}),Object(b.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Please enter email address",value:o.email,onChange:function(e){return v(e)}})]}),Object(b.jsx)("div",{className:"errorMsg",children:m}),Object(b.jsxs)("div",{className:"formLine",children:[Object(b.jsx)("label",{children:"Subject:"}),Object(b.jsx)("input",{id:"subject",name:"subject",type:"text",placeholder:"Please enter message subject",value:o.subject,onChange:function(e){return v(e)}})]}),Object(b.jsxs)("div",{className:"formLine",children:[Object(b.jsx)("label",{children:"Message:"}),Object(b.jsx)("textarea",{id:"message",name:"message",type:"text",placeholder:"Please enter the your message",value:o.message,onChange:function(e){return v(e)},rows:"6"})]}),Object(b.jsx)("div",{className:"errorMsg",children:g}),Object(b.jsx)("button",{type:"submit",className:"submitBtn",value:"Send",children:"Submit"})]})]}),Object(b.jsx)("footer",{children:Object(b.jsx)(f,{})})]})}}),Object(b.jsx)(U.a,{path:"/about",component:function(){return Object(b.jsxs)("div",{className:"About",children:[Object(b.jsx)("header",{children:Object(b.jsx)(O,{})}),Object(b.jsxs)("div",{className:"About-container",children:[Object(b.jsxs)("div",{className:"text",children:[Object(b.jsx)("h3",{children:"About Metal Trade"}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(b.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),Object(b.jsxs)("div",{className:"images",children:[Object(b.jsx)("img",{src:S,alt:"gold bars"}),Object(b.jsx)("img",{src:C,alt:"silver coins"})]}),Object(b.jsx)("img",{className:"bottomImg",src:F,alt:"piggi bank"})]}),Object(b.jsx)("footer",{children:Object(b.jsx)(f,{})})]})}}),Object(b.jsx)(U.a,{path:"/",component:N})]})})}),document.getElementById("root")),L()},93:function(e,t,a){}},[[218,1,2]]]);
//# sourceMappingURL=main.b8cc5d5e.chunk.js.map