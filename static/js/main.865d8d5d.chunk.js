(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(5),r=c.n(i),a=c(3),j=c.n(a),d=c(6),l=c(4),h=(c(12),c(13),c(0));function b(e){var t=e.data;if("404"===t.cod)return Object(h.jsx)("h1",{children:t.message});var c="http://openweathermap.org/img/wn/"+t.weather[0].icon+"@4x.png";return Object(h.jsxs)("div",{className:"displayweather",children:[Object(h.jsxs)("div",{className:"maincard",children:[Object(h.jsxs)("span",{className:"cardtitle",children:[t.name,", ",t.sys.country,". Weather"]}),Object(h.jsxs)("span",{className:"cardsubtitle",children:["As of ",(new Date).toLocaleTimeString()]}),Object(h.jsxs)("h1",{children:[t.main.temp.toFixed(1),"C",Object(h.jsx)("sup",{children:"o"})]}),Object(h.jsxs)("div",{className:"central-box",children:[Object(h.jsx)("span",{className:"weather-main",children:t.weather[0].main}),Object(h.jsx)("img",{src:c,alt:t.weather[0].main+" weather icon",className:"weather-icon"}),Object(h.jsx)("span",{className:"weather-description",children:t.weather[0].description})]})]}),Object(h.jsxs)("div",{className:"weather-details",children:[Object(h.jsx)("div",{className:"weather-details-section",children:Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"High/Low: "})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.main.temp_max.toFixed(1)," / ",t.main.temp_min.toFixed(1)," C ",Object(h.jsx)("sup",{children:"o"})]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Humidity: "})}),Object(h.jsx)("td",{children:Object(h.jsx)("span",{children:t.main.humidity})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Pressure: "})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.main.pressure," hPa"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Visibility: "})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.visibility/1e3," Km"]})})]})]})})}),Object(h.jsx)("div",{className:"weather-details-section",children:Object(h.jsx)("table",{children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Wind: "})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[(18*t.wind.speed/5).toFixed(2)," Km/hr"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Wind Direction: "})}),Object(h.jsx)("td",{children:Object(h.jsxs)("span",{children:[t.wind.deg," ",Object(h.jsx)("sup",{children:"o"}),"deg"]})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Sunrise: "})}),Object(h.jsx)("td",{children:Object(h.jsx)("span",{children:new Date(1e3*t.sys.sunrise).toLocaleTimeString()})})]}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("h4",{children:"Sunset: "})}),Object(h.jsx)("td",{children:Object(h.jsx)("span",{children:new Date(1e3*t.sys.sunset).toLocaleTimeString()})})]})]})})})]})]})}function x(){var e="&appid=a565e52fcc30456984fa9b7447b89b23",t="https://api.openweathermap.org/data/2.5/weather?q=",c=Object(s.useState)("Belgrade"),n=Object(l.a)(c,2),i=n[0],r=n[1],a=Object(s.useState)(""),x=Object(l.a)(a,2),O=x[0],o=x[1];function m(e){r(e.target.value)}function u(e){return p.apply(this,arguments)}function p(){return(p=Object(d.a)(j.a.mark((function c(s){var n,r;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),""===i&&alert("Please enter City name"),c.next=4,fetch(t+i+"&units=metric"+e);case 4:return n=c.sent,c.next=7,n.json();case 7:r=c.sent,o(r),setTimeout((function(){document.querySelector("#city").value=""}),1e3);case 10:case"end":return c.stop()}}),c)})))).apply(this,arguments)}return Object(s.useEffect)((function(){var e=document.querySelector("#city"),t=document.querySelector(".getweather");e.value="Belgrade",t.click(),e.value=""}),[]),"404"===O.cod?(document.querySelector("#city").value="",setTimeout((function(){r(""),o("")}),1500),Object(h.jsxs)("div",{className:"weather",children:[Object(h.jsx)("h1",{className:"main",children:"Try again"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"city",children:"City"}),Object(h.jsx)("input",{type:"text",id:"city",name:"city",onChange:m}),Object(h.jsx)("button",{className:"getweather",onClick:u,children:"Submit"})]}),Object(h.jsx)("h1",{children:O.message})]})):Object(h.jsxs)("div",{className:"weather",children:[Object(h.jsx)("span",{className:"main",children:"Weather Today"}),Object(h.jsx)("br",{}),Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"city",children:"City"}),Object(h.jsx)("input",{type:"text",id:"city",name:"city",onChange:m}),Object(h.jsx)("button",{className:"getweather",onClick:u,children:"Submit"})]}),O&&Object(h.jsx)(b,{data:O})]})}var O=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(x,{})})};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.865d8d5d.chunk.js.map