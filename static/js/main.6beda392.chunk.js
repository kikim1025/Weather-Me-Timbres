(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(57)},36:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),c=a.n(o),i=a(2),l=a(10),s=a(25),u="546ba1f0f55cbd23dfb475edd7960340",p="GET_DATA",m={};var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object.assign({},e,{lat:t.lat,lon:t.lon,temp:t.temp,name:t.name,weather:t.weather});default:return e}},d=Object(l.c)(h,Object(l.a)(s.a)),b=a(4),f=a(5),w=a(8),v=a(6),j=a(7),O=(a(36),function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page--weather"},r.a.createElement("div",{className:"slot"},"Latitude: ",this.props.lat),r.a.createElement("div",{className:"slot"},"Longitude: ",this.props.lon),r.a.createElement("div",{className:"slot"},"Location: ",this.props.name),r.a.createElement("div",{className:"slot"},"Weather: ",this.props.weather),r.a.createElement("div",{className:"slot"},"Temperature: ",this.props.temp,"F"))}}]),t}(r.a.Component)),g=Object(i.b)(function(e){return{lat:e.lat,lon:e.lon,temp:e.temp,name:e.name,weather:e.weather}})(O),E=a(26),y=a.n(E);a(56);var k=function(e){function t(){var e,a;Object(b.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(w.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={alert:!1},a.handleLocate=function(){a.setState({alert:!a.state.alert}),a.props.getData()},a}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page--intro"},r.a.createElement("button",{id:"button",onClick:this.handleLocate},"Current Weather"),r.a.createElement("div",{id:"alert"},this.state.alert?"If the browser prompt appears, please allow permission for location for weather analysis":"Please click the button to request weather data"))}}]),t}(r.a.Component),N=Object(i.b)(null,function(e){return{getData:function(){return e(function(e){return navigator.geolocation.getCurrentPosition(function(t){var a=t.coords.latitude,n=t.coords.longitude;y.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&APPID=").concat(u,"&units=imperial")).then(function(t){e({type:p,lat:Number(a.toFixed(2)),lon:Number(n.toFixed(2)),temp:t.data.main.temp,name:t.data.name,weather:t.data.weather[0].main})})})})}}})(k),C=function(e){function t(){return Object(b.a)(this,t),Object(w.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"page"},this.props.weather?r.a.createElement(g,null):r.a.createElement(N,null))}}]),t}(n.Component),L=Object(i.b)(function(e){return{weather:e.weather}})(C);c.a.render(r.a.createElement(i.a,{store:d},r.a.createElement(L,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.6beda392.chunk.js.map