(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{109:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var o=new XMLHttpRequest;for(var a in o.open(t.method||"get",e,!0),t.headers)o.setRequestHeader(a,t.headers[a]);function s(){var e,t=[],n=[],r={};return o.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(o,a,s){t.push(a=a.toLowerCase()),n.push([a,s]),r[a]=(e=r[a])?e+","+s:s}),{ok:2==(o.status/100|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:s,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}o.withCredentials="include"==t.credentials,o.onload=function(){n(s())},o.onerror=r,o.send(t.body||null)})}},149:function(e,t,n){e.exports=window.fetch||(window.fetch=n(109).default||n(109))},270:function(e,t,n){"use strict";var r=n(17),o=n(20),a=n(60),s=n.n(a),u=n(0),i=n.n(u),c=n(1),l=n.n(c),f=n(4),p=n.n(f),d=n(5),h=l.a.oneOfType([l.a.number,l.a.string]),m=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),push:Object(d.d)(h,'Please use the prop "order"'),pull:Object(d.d)(h,'Please use the prop "order"'),order:h,offset:h})]),b={tag:d.h,xs:m,sm:m,md:m,lg:m,xl:m,className:l.a.string,cssModule:l.a.object,widths:l.a.array},y={tag:"div",widths:["xs","sm","md","lg","xl"]},v=function(e,t,n){return!0===n||""===n?e?"col":"col-"+t:"auto"===n?e?"col-auto":"col-"+t+"-auto":e?"col-"+n:"col-"+t+"-"+n},w=function(e){var t=e.className,n=e.cssModule,a=e.widths,u=e.tag,c=Object(o.a)(e,["className","cssModule","widths","tag"]),l=[];a.forEach(function(t,r){var o=e[t];if(delete c[t],o||""===o){var a=!r;if(s()(o)){var u,i=a?"-":"-"+t+"-",f=v(a,t,o.size);l.push(Object(d.e)(p()(((u={})[f]=o.size||""===o.size,u["order"+i+o.order]=o.order||0===o.order,u["offset"+i+o.offset]=o.offset||0===o.offset,u)),n))}else{var h=v(a,t,o);l.push(h)}}}),l.length||l.push("col");var f=Object(d.e)(p()(t,l),n);return i.a.createElement(u,Object(r.a)({},c,{className:f}))};w.propTypes=b,w.defaultProps=y,t.a=w},60:function(e,t){e.exports=function(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}},70:function(e,t,n){e.exports=n(168)},929:function(e,t,n){__NEXT_REGISTER_PAGE("/home",function(){return e.exports=n(930),{page:e.exports.default}})},930:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return g});var r=n(70),o=n.n(r),a=n(0),s=n.n(a),u=(n(149),n(47)),i=n(14),c=n(43),l=n.n(c),f=n(965),p=n(270);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t,n,r,o,a,s){try{var u=e[a](s),i=u.value}catch(e){return void n(e)}u.done?t(i):Promise.resolve(i).then(r,o)}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=i.a.div.withConfig({displayName:"home__HomeDiv",componentId:"sc-1t3lh8k-0"})(["height:85vh;h1{color:red;}"]),g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,y(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,a["Component"]),n=t,r=[{key:"render",value:function(){var e=this.props.data.articles.filter(function(e){return-1!==e.title.indexOf("qui")});return s.a.createElement(u.a,null,s.a.createElement(w,null,s.a.createElement(l.a,{config:{title:"Santa & the Mrs of West Texas",description:"Santa and Mrs Claus services for West Texas"}}),s.a.createElement(f.a,null,s.a.createElement(p.a,null,s.a.createElement("ul",null,this.props.data.articles.map(function(e,t){return s.a.createElement("li",{key:t},e.title)})," ")),s.a.createElement(p.a,null,s.a.createElement("ul",null,e.map(function(e,t){return s.a.createElement("li",{key:t}," ",e.title," ")}))))))}}],i=[{key:"getInitialProps",value:function(){var e,t=(e=o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://newsapi.org/v2/everything?q=christmas&from=2019-01-26&sortBy=publishedAt&apiKey=37b82fead6954eb48711defd794b1f68");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",{data:n});case 7:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function s(e){h(a,r,o,s,u,"next",e)}function u(e){h(a,r,o,s,u,"throw",e)}s(void 0)})});return function(){return t.apply(this,arguments)}}()}],r&&m(n.prototype,r),i&&m(n,i),t}()}},[[929,1,0]]]);