(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"a":[{"hour":6,"forecast":1,"temperature":5,"rainDrop":0,"windDir":68,"windSpeed":4,"pressure":1019},{"hour":7,"forecast":2,"temperature":5,"rainDrop":0,"windDir":90,"windSpeed":7,"pressure":1017},{"hour":8,"forecast":3,"temperature":6,"rainDrop":2,"windDir":68,"windSpeed":7,"pressure":1018},{"hour":9,"forecast":3,"temperature":7,"rainDrop":1,"windDir":68,"windSpeed":7,"pressure":1019},{"hour":10,"forecast":1,"temperature":9,"rainDrop":0,"windDir":45,"windSpeed":11,"pressure":1019},{"hour":11,"forecast":2,"temperature":10,"rainDrop":0,"windDir":113,"windSpeed":11,"pressure":1017},{"hour":12,"forecast":2,"temperature":11,"rainDrop":0,"windDir":135,"windSpeed":14,"pressure":1018},{"hour":13,"forecast":2,"temperature":8,"rainDrop":0,"windDir":158,"windSpeed":17,"pressure":1008},{"hour":14,"forecast":1,"temperature":8,"rainDrop":0,"windDir":180,"windSpeed":20,"pressure":1000},{"hour":15,"forecast":2,"temperature":8,"rainDrop":0,"windDir":203,"windSpeed":26,"pressure":1010},{"hour":16,"forecast":3,"temperature":9,"rainDrop":2,"windDir":225,"windSpeed":19,"pressure":1008},{"hour":17,"forecast":3,"temperature":10,"rainDrop":1,"windDir":248,"windSpeed":29,"pressure":1008},{"hour":18,"forecast":1,"temperature":11,"rainDrop":0,"windDir":270,"windSpeed":30,"pressure":1000},{"hour":19,"forecast":2,"temperature":11,"rainDrop":0,"windDir":293,"windSpeed":36,"pressure":1010},{"hour":20,"forecast":3,"temperature":11,"rainDrop":1,"windDir":313,"windSpeed":35,"pressure":1008},{"hour":21,"forecast":3,"temperature":10,"rainDrop":2,"windDir":336,"windSpeed":21,"pressure":1008},{"hour":22,"forecast":6,"temperature":10,"rainDrop":4,"windDir":90,"windSpeed":17,"pressure":1000},{"hour":23,"forecast":6,"temperature":9,"rainDrop":6,"windDir":23,"windSpeed":19,"pressure":1010},{"hour":0,"forecast":6,"temperature":9,"rainDrop":9,"windDir":45,"windSpeed":11,"pressure":1008},{"hour":1,"forecast":6,"temperature":9,"rainDrop":4,"windDir":68,"windSpeed":5,"pressure":1008},{"hour":2,"forecast":6,"temperature":8,"rainDrop":2,"windDir":90,"windSpeed":10,"pressure":1000},{"hour":3,"forecast":5,"temperature":7,"rainDrop":0,"windDir":113,"windSpeed":16,"pressure":1010},{"hour":4,"forecast":4,"temperature":6,"rainDrop":0,"windDir":135,"windSpeed":9,"pressure":1008},{"hour":5,"forecast":1,"temperature":6,"rainDrop":0,"windDir":158,"windSpeed":10,"pressure":1008},{"hour":6,"forecast":2,"temperature":5,"rainDrop":0,"windDir":135,"windSpeed":11,"pressure":1010},{"hour":7,"forecast":2,"temperature":5,"rainDrop":0,"windDir":113,"windSpeed":18,"pressure":1008},{"hour":8,"forecast":2,"temperature":5,"rainDrop":0,"windDir":203,"windSpeed":14,"pressure":1008},{"hour":9,"forecast":2,"temperature":6,"rainDrop":0,"windDir":225,"windSpeed":20,"pressure":1008},{"hour":10,"forecast":2,"temperature":5,"rainDrop":0,"windDir":270,"windSpeed":10,"pressure":1010},{"hour":11,"forecast":2,"temperature":5,"rainDrop":0,"windDir":270,"windSpeed":15,"pressure":1008},{"hour":12,"forecast":1,"temperature":5,"rainDrop":0,"windDir":313,"windSpeed":16,"pressure":1008}]}')},,,,function(e,r,t){e.exports=t(27)},,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),c=t(8),i=t.n(c),o=(t(14),t(15),function(e){return n.a.createElement("div",{className:"label-section",style:{height:e.height}},e.children)}),s=function(){return n.a.createElement("div",{className:"label"},n.a.createElement(o,{height:"3.3%"},"Dzie\u0144"),n.a.createElement(o,{height:"6.1%"},"Godzina"),n.a.createElement(o,{height:"7.2%"},"Prognoza"),n.a.createElement(o,{height:"24%"},"Temperatura"),n.a.createElement(o,{height:"12.9%"},"Opady"),n.a.createElement(o,{height:"12.9%"},"Kierunek wiatru"),n.a.createElement(o,{height:"10.6%"},"Pr\u0119dko\u015b\u0107 wiatru"),n.a.createElement(o,{height:"21.6%"},"Ci\u015bnienie"))},u=t(2),l=t(1),p=(t(16),t(5)),m=function(){var e=Object(a.useState)(!1),r=Object(l.a)(e,2),t=r[0],c=r[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),s=o[0],m=o[1],d=Object(a.useState)(null),f=Object(l.a)(d,2),h=f[0],w=f[1],D=Object(a.useState)([]),E=Object(l.a)(D,2),S=E[0],v=E[1],y=Object(a.useState)([]),g=Object(l.a)(y,2),N=g[0],O=g[1],j=Object(a.useRef)(),x=Object(a.useRef)(),M=Object(a.useRef)(),L=p.a.map((function(e){return e.pressure})),k=p.a.map((function(e){return e.temperature})),P={max:Math.max.apply(Math,Object(u.a)(L)),min:Math.min.apply(Math,Object(u.a)(L))},W={max:Math.max.apply(Math,Object(u.a)(k)),min:Math.min.apply(Math,Object(u.a)(k))},B=function(e,r,t){e.lineWidth=2,e.strokeStyle="".concat(t);for(var a=0;a<r.length;a++)e.beginPath(),a!==r.length-1&&(e.moveTo(r[a].getBoundingClientRect().x-134,r[a].getBoundingClientRect().y+5),e.lineTo(r[a+1].getBoundingClientRect().x-134,r[a+1].getBoundingClientRect().y+5)),e.stroke()},C=function(e){j.current.style.scrollBehavior="smooth",M.current.style.left="".concat(100*j.current.scrollLeft/j.current.scrollWidth,"%"),"left-arrow"===e.currentTarget.className?j.current.scrollLeft%140===0?(j.current.scrollLeft-=140,w(j.current.scrollLeft)):(j.current.scrollLeft-=j.current.scrollLeft%140,w(j.current.scrollLeft)):"right-arrow"===e.currentTarget.className&&(j.current.scrollLeft%140===0?(j.current.scrollLeft+=140,w(j.current.scrollLeft)):(j.current.scrollLeft+=140-j.current.scrollLeft%140,w(j.current.scrollLeft)))};return Object(a.useEffect)((function(){document.querySelectorAll(".t").forEach((function(e){return v((function(r){return[].concat(Object(u.a)(r),[e])}))})),document.querySelectorAll(".p").forEach((function(e){return O((function(r){return[].concat(Object(u.a)(r),[e])}))})),M.current.style.width="".concat(83*j.current.clientWidth/j.current.scrollWidth,"%")}),[]),Object(a.useEffect)((function(){var e=document.getElementById("canv");e.width=j.current.scrollWidth,e.height=j.current.scrollHeight;var r=e.getContext("2d");B(r,S,"#f9d348"),B(r,N,"#000000")}),[S,N]),n.a.createElement("div",{className:"weather",ref:j},n.a.createElement("canvas",{id:"canv"}),n.a.createElement("div",{className:"touchpad",onMouseDown:function(e){return function(e){j.current.style.scrollBehavior="auto",c(!0),m(e.clientX),x.current.style.opacity="1"}(e)},onMouseMove:function(e){return function(e){return M.current.style.left="".concat(100*j.current.scrollLeft/j.current.scrollWidth,"%"),t?j.current.scrollLeft=h+(s-e.clientX):null}(e)},onMouseUp:function(){return c(!1),m(null),w(j.current.scrollLeft),void setTimeout((function(){return x.current.style.opacity="0"}),500)}},n.a.createElement("div",{className:"left-arrow",onClick:function(e){return C(e)}},n.a.createElement("i",{className:"fas fa-caret-down"})),n.a.createElement("div",{className:"right-arrow",onClick:function(e){return C(e)}},n.a.createElement("i",{className:"fas fa-caret-down"})),n.a.createElement("div",{className:"scroll-bar",ref:x},n.a.createElement("div",{className:"bar",ref:M}))),p.a.map((function(e,r){return n.a.createElement(b,{key:r,tomorrow:0===e.hour,forecast:e,temperature:W,pressure:P})})))},d=(t(17),t(18),function(e){var r=e.tomorrow;return n.a.createElement("div",{className:"forecast-bar_day"},r?"Jutro":"")}),f=(t(19),function(e){var r=e.hour;return n.a.createElement("div",{className:"forecast-bar_hour"},r<10?"0".concat(r,":00"):"".concat(r,":00"))}),h=(t(20),t(7),function(e){var r=e.forecast;return n.a.createElement("div",{className:"forecast-bar_forecast"},function(){switch(r){case 1:return n.a.createElement("i",{className:"wi wi-day-sunny"});case 2:return n.a.createElement("i",{className:"wi wi-cloud"});case 3:return n.a.createElement("i",{className:"wi wi-rain"});case 4:return n.a.createElement("i",{className:"wi wi-night-clear"});case 5:return n.a.createElement("i",{className:"wi wi-night-alt-cloudy"});case 6:return n.a.createElement("i",{className:"wi wi-night-alt-hail"});default:return n.a.createElement("i",{className:"wi wi-day-sunny"})}}())}),w=(t(21),function(e){var r=e.temperature,t=e.minMax,c=Object(a.useState)(t.max-t.min),i=Object(l.a)(c,1)[0],o=Object(a.useState)(t.max-r),s=Object(l.a)(o,1)[0];return n.a.createElement("div",{className:"forecast-bar_temperature"},n.a.createElement("div",{className:"temperature",style:{transform:"translateY(".concat(10*s-i/2,"px)")}},n.a.createElement("div",null,"".concat(r,"\xb0")),n.a.createElement("i",{style:{position:"absolute",top:"50px",fontSize:".8rem",zIndex:99},className:"fas fa-circle t"})))}),D=(t(22),function(e){var r=e.rainDrop;return n.a.createElement("div",{className:"forecast-bar_rain-drop"},n.a.createElement("div",{className:"rain-height",style:{bottom:2*r}},0===r?"":"".concat(r,",0 mm")),n.a.createElement("div",{className:"rain",style:{height:2*r}}))}),E=(t(23),function(e){var r=e.windDir;return n.a.createElement("div",{className:"forecast-bar_wind-dir"},n.a.createElement("i",{style:{transform:"rotate(".concat(r,"deg)")},className:"fas fa-long-arrow-alt-up"}),n.a.createElement("div",{className:"direction"},0===r||23===r||336===r?"Po\u0142udniowy":45===r||68===r?"Pd. - Zach.":90===r?"Zachodni":113===r||135===r?"Pn. - Zach.":158===r||180===r||203===r?"P\xf3\u0142nocny":225===r||248===r?"Pn. - Wsch.":270===r?"Wschodni":293===r||313===r?"Pd. - Wsch.":void 0))}),S=(t(24),function(e){var r=e.windSpeed;return n.a.createElement("div",{className:"forecast-bar_wind-speed"},n.a.createElement("div",{className:"wind-strength"},r<=15?"S\u0142aby":r>15&&r<=25?"Umiar.":r>25?"Silny":void 0),"".concat(r," km/h"))}),v=(t(25),function(e){var r=e.pressure,t=e.minMax,c=Object(a.useState)(t.max-t.min),i=Object(l.a)(c,1)[0],o=Object(a.useState)(t.max-r),s=Object(l.a)(o,1)[0];return n.a.createElement("div",{className:"forecast-bar_pressure"},n.a.createElement("div",{className:"pressure",style:{transform:"translateY(".concat(s-i/2,"px)")}},n.a.createElement("div",null,"".concat(r," hPa")),n.a.createElement("i",{style:{fontSize:".8rem",zIndex:99},className:"fas fa-circle p"})))}),b=function(e){var r=e.tomorrow,t=e.forecast,a=e.pressure,c=e.temperature;return n.a.createElement("div",{className:"forecast-bar"},n.a.createElement(d,{tomorrow:r}),n.a.createElement(f,{hour:t.hour}),n.a.createElement(h,{forecast:t.forecast}),n.a.createElement(w,{temperature:t.temperature,minMax:c}),n.a.createElement(D,{rainDrop:t.rainDrop}),n.a.createElement(E,{windDir:t.windDir}),n.a.createElement(S,{windSpeed:t.windSpeed}),n.a.createElement(v,{pressure:t.pressure,minMax:a}))},y=function(){return n.a.createElement("div",{className:"main"},n.a.createElement(s,null),n.a.createElement(m,null))};t(26);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.a9ee9a3a.chunk.js.map