(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{42:function(e,t,n){e.exports=n(71)},47:function(e,t,n){},48:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(47),n(48),n(19)),l=n(36),u=n.n(l),i=function(e){return e.dob.split("-").slice(0,2).join("-")};function m(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)([]),c=Object(s.a)(o,2),l=c[0],m=c[1],f=Object(a.useState)([]),h=Object(s.a)(f,2),d=h[0],b=h[1],p=Object(a.useState)(null),v=Object(s.a)(p,2),g=v[0],E=v[1],O=Object(a.useState)(!1),j=Object(s.a)(O,2),k=j[0],w=j[1];return Object(a.useEffect)((function(){w(!0),u.a.get("https://yalantis-react-school-api.yalantis.com/api/task0/users").then((function(e){var t;if(r(e.data),null===(t=e.data)||void 0===t?void 0:t.length){var a=function(e){var t=new Set;return e.forEach((function(e){t.add(i(e))})),Array.from(t).sort()}(e.data),o=function(e,t){var n=[];return e.forEach((function(e){n.push({month:e,color:"",users:[]})})),t.forEach((function(e){var t=i(e);n.find((function(n){n.month===t&&n.users.push({name:"".concat(e.firstName," ").concat(e.lastName)})}))})),n.forEach((function(e){e.color=function(e){var t,n=e.length;switch(!0){case 0<=n&&n<=2:t="#cccccc";break;case 3<=n&&n<=6:t="#b3b3ff";break;case 7<=n&&n<=10:t="#80ff80";break;default:t="#ff9999"}return t}(e.users)})),n}(a,e.data);b(o),m(a)}return w(!1),{users:n}})).catch((function(e){E(e),w(!1)}))}),[]),{users:n,error:g,loading:k,months:l,usersPerMonth:d}}var f=n(91);function h(){return r.a.createElement(f.a,{disableShrink:!0})}var d=n(11),b=n(95),p=n(94),v=n(93),g=Object(d.a)((function(e){return{tooltip:{backgroundColor:"#f5f5f9",color:"rgba(0, 0, 0, 0.87)",maxWidth:150,fontSize:e.typography.pxToRem(12),border:"1px solid #dadde9"}}}))(p.a);function E(e){var t=e.month,n=e.color,a=e.users,o=a.map((function(e){return r.a.createElement("p",{key:e.name},e.name)}));return r.a.createElement("div",null,r.a.createElement(g,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{color:"inherit"},"Users were born:"),a.length&&o)},r.a.createElement(b.a,{style:{backgroundColor:n,margin:"0.1rem"}},t)))}var O=function(){var e=m(),t=e.error,n=e.loading,a=e.usersPerMonth;return t?(console.log(t),r.a.createElement("div",{className:"App"},r.a.createElement("h2",null,"Something went wrong..."))):r.a.createElement("div",{className:"App"},n?r.a.createElement(h,null):r.a.createElement("div",{className:"months"},r.a.createElement("h2",null,"LIST OF MONTHS:"),a.length&&a.map((function(e){return r.a.createElement(E,{key:e.month,month:e.month,color:e.color,users:e.users})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.2e3edf25.chunk.js.map