(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{100:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;i(n(0));var a=i(n(1)),r=n(35),o=i(n(51));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(e){var t,n;function i(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).handleEnter=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEnter",0,n)},t.handleEntering=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntering",0,n)},t.handleEntered=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onEntered",0,n)},t.handleExit=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExit",1,n)},t.handleExiting=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExiting",1,n)},t.handleExited=function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];return t.handleLifecycle("onExited",1,n)},t}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var s=i.prototype;return s.handleLifecycle=function(e,t,n){var o,i=this.props.children,s=a.default.Children.toArray(i)[t];s.props[e]&&(o=s.props)[e].apply(o,n),this.props[e]&&this.props[e]((0,r.findDOMNode)(this))},s.render=function(){var e=this.props,t=e.children,n=e.in,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["children","in"]),i=a.default.Children.toArray(t),s=i[0],l=i[1];return delete r.onEnter,delete r.onEntering,delete r.onEntered,delete r.onExit,delete r.onExiting,delete r.onExited,a.default.createElement(o.default,r,n?a.default.cloneElement(s,{key:"first",onEnter:this.handleEnter,onEntering:this.handleEntering,onEntered:this.handleEntered}):a.default.cloneElement(l,{key:"second",onEnter:this.handleExit,onEntering:this.handleExiting,onEntered:this.handleExited}))},i}(a.default.Component);s.propTypes={};var l=s;t.default=l,e.exports=t.default},101:function(e,t,n){"use strict";t.__esModule=!0,t.getChildMapping=r,t.mergeChildMappings=o,t.getInitialChildMapping=function(e,t){return r(e.children,function(n){return(0,a.cloneElement)(n,{onExited:t.bind(null,n),in:!0,appear:i(n,"appear",e),enter:i(n,"enter",e),exit:i(n,"exit",e)})})},t.getNextChildMapping=function(e,t,n){var s=r(e.children),l=o(t,s);return Object.keys(l).forEach(function(r){var o=l[r];if((0,a.isValidElement)(o)){var c=r in t,u=r in s,p=t[r],f=(0,a.isValidElement)(p)&&!p.props.in;!u||c&&!f?u||!c||f?u&&c&&(0,a.isValidElement)(p)&&(l[r]=(0,a.cloneElement)(o,{onExited:n.bind(null,o),in:p.props.in,exit:i(o,"exit",e),enter:i(o,"enter",e)})):l[r]=(0,a.cloneElement)(o,{in:!1}):l[r]=(0,a.cloneElement)(o,{onExited:n.bind(null,o),in:!0,exit:i(o,"exit",e),enter:i(o,"enter",e)})}}),l};var a=n(1);function r(e,t){var n=Object.create(null);return e&&a.Children.map(e,function(e){return e}).forEach(function(e){n[e.key]=function(e){return t&&(0,a.isValidElement)(e)?t(e):e}(e)}),n}function o(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var a,r=Object.create(null),o=[];for(var i in e)i in t?o.length&&(r[i]=o,o=[]):o.push(i);var s={};for(var l in t){if(r[l])for(a=0;a<r[l].length;a++){var c=r[l][a];s[r[l][a]]=n(c)}s[l]=n(l)}for(a=0;a<o.length;a++)s[o[a]]=n(o[a]);return s}function i(e,t,n){return null!=n[t]?n[t]:e.props[t]}},21:function(e,t){e.exports="/satm//_next/static/images/logo-4b350ae4a6299b6b2226719c887a350b.png"},23:function(e,t,n){"use strict";var a=s(n(95)),r=s(n(100)),o=s(n(51)),i=s(n(48));function s(e){return e&&e.__esModule?e:{default:e}}e.exports={Transition:i.default,TransitionGroup:o.default,ReplaceTransition:r.default,CSSTransition:a.default}},236:function(e,t,n){__NEXT_REGISTER_PAGE("/about",function(){return e.exports=n(237),{page:e.exports.default}})},237:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(53);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"About Reveler Media Services"),r.a.createElement("p",null,"Reveler Media Service")))}},48:function(e,t,n){"use strict";t.__esModule=!0,t.default=t.EXITING=t.ENTERED=t.ENTERING=t.EXITED=t.UNMOUNTED=void 0;var a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}return t.default=e,t}(n(0)),r=s(n(1)),o=s(n(35)),i=n(49);n(50);function s(e){return e&&e.__esModule?e:{default:e}}var l="unmounted";t.UNMOUNTED=l;var c="exited";t.EXITED=c;var u="entering";t.ENTERING=u;var p="entered";t.ENTERED=p;t.EXITING="exiting";var f=function(e){var t,n;function a(t,n){var a;a=e.call(this,t,n)||this;var r,o=n.transitionGroup,i=o&&!o.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(r=c,a.appearStatus=u):r=p:r=t.unmountOnExit||t.mountOnEnter?l:c,a.state={status:r},a.nextCallback=null,a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.getChildContext=function(){return{transitionGroup:null}},a.getDerivedStateFromProps=function(e,t){return e.in&&t.status===l?{status:c}:null},i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==u&&n!==p&&(t=u):n!==u&&n!==p||(t="exiting")}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!=typeof a&&(e=a.exit,t=a.enter,n=a.appear),{exit:e,enter:t,appear:n}},i.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t){this.cancelNextCallback();var n=o.default.findDOMNode(this);t===u?this.performEnter(n,e):this.performExit(n)}else this.props.unmountOnExit&&this.state.status===c&&this.setState({status:l})},i.performEnter=function(e,t){var n=this,a=this.props.enter,r=this.context.transitionGroup?this.context.transitionGroup.isMounting:t,o=this.getTimeouts();t||a?(this.props.onEnter(e,r),this.safeSetState({status:u},function(){n.props.onEntering(e,r),n.onTransitionEnd(e,o.enter,function(){n.safeSetState({status:p},function(){n.props.onEntered(e,r)})})})):this.safeSetState({status:p},function(){n.props.onEntered(e)})},i.performExit=function(e){var t=this,n=this.props.exit,a=this.getTimeouts();n?(this.props.onExit(e),this.safeSetState({status:"exiting"},function(){t.props.onExiting(e),t.onTransitionEnd(e,a.exit,function(){t.safeSetState({status:c},function(){t.props.onExited(e)})})})):this.safeSetState({status:c},function(){t.props.onExited(e)})},i.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},i.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},i.onTransitionEnd=function(e,t,n){this.setNextCallback(n),e?(this.props.addEndListener&&this.props.addEndListener(e,this.nextCallback),null!=t&&setTimeout(this.nextCallback,t)):setTimeout(this.nextCallback,0)},i.render=function(){var e=this.state.status;if(e===l)return null;var t=this.props,n=t.children,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(t,["children"]);if(delete a.in,delete a.mountOnEnter,delete a.unmountOnExit,delete a.appear,delete a.enter,delete a.exit,delete a.timeout,delete a.addEndListener,delete a.onEnter,delete a.onEntering,delete a.onEntered,delete a.onExit,delete a.onExiting,delete a.onExited,"function"==typeof n)return n(e,a);var o=r.default.Children.only(n);return r.default.cloneElement(o,a)},a}(r.default.Component);function d(){}f.contextTypes={transitionGroup:a.object},f.childContextTypes={transitionGroup:function(){}},f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:d,onEntering:d,onEntered:d,onExit:d,onExiting:d,onExited:d},f.UNMOUNTED=0,f.EXITED=1,f.ENTERING=2,f.ENTERED=3,f.EXITING=4;var h=(0,i.polyfill)(f);t.default=h},49:function(e,t,n){"use strict";function a(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function r(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function o(e,t){try{var n=this.props,a=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}function i(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,i=null,s=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?i="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(i="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?s="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(s="UNSAFE_componentWillUpdate"),null!==n||null!==i||null!==s){var l=e.displayName||e.name,c="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+l+" uses "+c+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==i?"\n  "+i:"")+(null!==s?"\n  "+s:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=a,t.componentWillReceiveProps=r),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=o;var u=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var a=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;u.call(this,e,t,a)}}return e}n.r(t),n.d(t,"polyfill",function(){return i}),a.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0},50:function(e,t,n){"use strict";t.__esModule=!0,t.classNamesShape=t.timeoutsShape=void 0;var a;(a=n(0))&&a.__esModule;t.timeoutsShape=null;t.classNamesShape=null},51:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=s(n(0)),r=s(n(1)),o=n(49),i=n(101);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=Object.values||function(e){return Object.keys(e).map(function(t){return e[t]})},p=function(e){var t,n;function a(t,n){var a,r=(a=e.call(this,t,n)||this).handleExited.bind(c(c(a)));return a.state={handleExited:r,firstRender:!0},a}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.getChildContext=function(){return{transitionGroup:{isMounting:!this.appeared}}},o.componentDidMount=function(){this.appeared=!0,this.mounted=!0},o.componentWillUnmount=function(){this.mounted=!1},a.getDerivedStateFromProps=function(e,t){var n=t.children,a=t.handleExited;return{children:t.firstRender?(0,i.getInitialChildMapping)(e,a):(0,i.getNextChildMapping)(e,n,a),firstRender:!1}},o.handleExited=function(e,t){var n=(0,i.getChildMapping)(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState(function(t){var n=l({},t.children);return delete n[e.key],{children:n}}))},o.render=function(){var e=this.props,t=e.component,n=e.childFactory,a=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["component","childFactory"]),o=u(this.state.children).map(n);return delete a.appear,delete a.enter,delete a.exit,null===t?o:r.default.createElement(t,a,o)},a}(r.default.Component);p.childContextTypes={transitionGroup:a.default.object.isRequired},p.propTypes={},p.defaultProps={component:"div",childFactory:function(e){return e}};var f=(0,o.polyfill)(p);t.default=f,e.exports=t.default},52:function(e,t,n){e.exports=n(94)},53:function(e,t,n){"use strict";var a=n(1),r=n.n(a),o=n(52),i=n.n(o),s=n(18),l=n.n(s),c=n(3),u=n(5),p=n(0),f=n.n(p),d=n(6),h=n.n(d),m=n(2),g={light:f.a.bool,dark:f.a.bool,inverse:Object(m.d)(f.a.bool,'Please use the prop "dark"'),full:f.a.bool,fixed:f.a.string,sticky:f.a.string,color:f.a.string,role:f.a.string,tag:m.h,className:f.a.string,cssModule:f.a.object,toggleable:Object(m.d)(f.a.oneOfType([f.a.bool,f.a.string]),'Please use the prop "expand"'),expand:f.a.oneOfType([f.a.bool,f.a.string])},E={xs:"sm",sm:"md",md:"lg",lg:"xl"},v=function(e){var t,n=e.toggleable,a=e.expand,o=e.className,i=e.cssModule,s=e.light,l=e.dark,p=e.inverse,f=e.fixed,d=e.sticky,g=e.color,v=e.tag,b=Object(u.a)(e,["toggleable","expand","className","cssModule","light","dark","inverse","fixed","sticky","color","tag"]),y=Object(m.e)(h()(o,"navbar",function(e){return!1!==e&&(!0===e||"xs"===e?"navbar-expand":"navbar-expand-"+e)}(a)||function(e){return void 0!==e&&"xl"!==e&&(!1===e?"navbar-expand":"navbar-expand-"+(!0===e?"sm":E[e]||e))}(n),((t={"navbar-light":s,"navbar-dark":p||l})["bg-"+g]=g,t["fixed-"+f]=f,t["sticky-"+d]=d,t)),i);return r.a.createElement(v,Object(c.a)({},b,{className:y}))};v.propTypes=g,v.defaultProps={tag:"nav",expand:!1};var b=v,y={tag:m.h,className:f.a.string,cssModule:f.a.object},x=function(e){var t=e.className,n=e.cssModule,a=e.tag,o=Object(u.a)(e,["className","cssModule","tag"]),i=Object(m.e)(h()(t,"navbar-brand"),n);return r.a.createElement(a,Object(c.a)({},o,{className:i}))};x.propTypes=y,x.defaultProps={tag:"a"};var N=x,O={tag:m.h,type:f.a.string,className:f.a.string,cssModule:f.a.object,children:f.a.node},_=function(e){var t=e.className,n=e.cssModule,a=e.children,o=e.tag,i=Object(u.a)(e,["className","cssModule","children","tag"]),s=Object(m.e)(h()(t,"navbar-toggler"),n);return r.a.createElement(o,Object(c.a)({},i,{className:s}),a||r.a.createElement("span",{className:Object(m.e)("navbar-toggler-icon",n)}))};_.propTypes=O,_.defaultProps={tag:"button",type:"button"};var j=_,S=n(40),C=n(22);function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){T(e,t,n[t])})}return e}var w,k=n(23),P=M({},k.Transition.propTypes,{isOpen:f.a.bool,children:f.a.oneOfType([f.a.arrayOf(f.a.node),f.a.node]),tag:m.h,className:f.a.node,navbar:f.a.bool,cssModule:f.a.object,innerRef:f.a.oneOfType([f.a.func,f.a.string,f.a.object])}),D=M({},k.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:m.c.Collapse}),A=((w={})[m.b.ENTERING]="collapsing",w[m.b.ENTERED]="collapse show",w[m.b.EXITING]="collapsing",w[m.b.EXITED]="collapse",w);function R(e){return e.scrollHeight}var U=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach(function(e){n[e]=n[e].bind(Object(C.a)(Object(C.a)(n)))}),n}Object(S.a)(t,e);var n=t.prototype;return n.onEntering=function(e,t){this.setState({height:R(e)}),this.props.onEntering(e,t)},n.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},n.onExit=function(e){this.setState({height:R(e)}),this.props.onExit(e)},n.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},n.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},n.render=function(){var e=this,t=this.props,n=t.tag,a=t.isOpen,o=t.className,i=t.navbar,s=t.cssModule,l=t.children,p=(t.innerRef,Object(u.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),f=this.state.height,d=Object(m.g)(p,m.a),g=Object(m.f)(p,m.a);return r.a.createElement(k.Transition,Object(c.a)({},d,{in:a,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),function(t){var a=function(e){return A[e]||"collapse"}(t),u=Object(m.e)(h()(o,a,i&&"navbar-collapse"),s),p=null===f?null:{height:f};return r.a.createElement(n,Object(c.a)({},g,{style:M({},g.style,p),className:u,ref:e.props.innerRef}),l)})},t}(a.Component);U.propTypes=P,U.defaultProps=D;var I=U,W={tabs:f.a.bool,pills:f.a.bool,vertical:f.a.oneOfType([f.a.bool,f.a.string]),horizontal:f.a.string,justified:f.a.bool,fill:f.a.bool,navbar:f.a.bool,card:f.a.bool,tag:m.h,className:f.a.string,cssModule:f.a.object},L=function(e){var t=e.className,n=e.cssModule,a=e.tabs,o=e.pills,i=e.vertical,s=e.horizontal,l=e.justified,p=e.fill,f=e.navbar,d=e.card,g=e.tag,E=Object(u.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),v=Object(m.e)(h()(t,f?"navbar-nav":"nav",!!s&&"justify-content-"+s,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(i),{"nav-tabs":a,"card-header-tabs":d&&a,"nav-pills":o,"card-header-pills":d&&o,"nav-justified":l,"nav-fill":p}),n);return r.a.createElement(g,Object(c.a)({},E,{className:v}))};L.propTypes=W,L.defaultProps={tag:"ul",vertical:!1};var G=L,F={tag:m.h,active:f.a.bool,className:f.a.string,cssModule:f.a.object},X=function(e){var t=e.className,n=e.cssModule,a=e.active,o=e.tag,i=Object(u.a)(e,["className","cssModule","active","tag"]),s=Object(m.e)(h()(t,"nav-item",!!a&&"active"),n);return r.a.createElement(o,Object(c.a)({},i,{className:s}))};X.propTypes=F,X.defaultProps={tag:"li"};var B=X,V=n(14),J=n(21),z=n.n(J);function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var Y=V.a.div.withConfig({displayName:"Navbar1__NavBarDiv",componentId:"sc-1gjvm54-0"})([".navbar-nav{float:none;margin:0 auto;display:block;text-align:center;}.navbar-nav > li{display:block;float:none;}@media (min-width:768px){.navbar-nav{float:none;margin:0 auto;display:block;text-align:center;}.navbar-nav > li{display:inline-block;float:none;}}.navbarBrandLogo{img{width:5vw;margin-left:5vw;}}"]),Z=function(e){function t(e){var n,a,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),a=this,(n=!(r=q(t).call(this,e))||"object"!==H(r)&&"function"!=typeof r?K(a):r).toggleNavbar=n.toggleNavbar.bind(K(K(n))),n.state={collapsed:!0},n}var n,o,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,a["Component"]),n=t,(o=[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(b,{color:"faded",light:!0,expand:"lg"},r.a.createElement(N,{href:"/",className:"navbarBrandLogo mr-auto"},r.a.createElement("img",{src:z.a,alt:"Santa & the Mrs of West Texas Logo"})),r.a.createElement(j,{onClick:this.toggleNavbar,className:"mr-2"}),r.a.createElement(I,{isOpen:!this.state.collapsed,navbar:!0},r.a.createElement(G,{navbar:!0},r.a.createElement(B,null,r.a.createElement(l.a,{href:"/"},r.a.createElement("a",{className:"nav-link"},"Home"))),r.a.createElement(B,null,r.a.createElement(l.a,{href:"/about"},r.a.createElement("a",{className:"nav-link"},"About")))))))}}])&&$(n.prototype,o),i&&$(n,i),t}(),ee=V.a.div.withConfig({displayName:"Layout__LayoutDiv",componentId:"sc-1s258ep-0"})([""]);t.a=function(e){return r.a.createElement(ee,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"Santa & the Mrs of West Texas"),r.a.createElement("meta",{property:"og:title",content:"Santa & the Mrs of West Texas"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"Generate a Canonical Pague URL"}),r.a.createElement("meta",{property:"og:image",content:z.a}),r.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",integrity:"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",crossOrigin:"anonymous"})),r.a.createElement(Z,null),r.a.createElement("div",{className:"container"},e.children))}},95:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;!function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};a.get||a.set?Object.defineProperty(t,n,a):t[n]=e[n]}t.default=e}(n(0));var a=s(n(96)),r=s(n(99)),o=s(n(1)),i=s(n(48));n(50);function s(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var c=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,a.default)(e,t)})},u=function(e,t){return e&&t&&t.split(" ").forEach(function(t){return(0,r.default)(e,t)})},p=function(e){var t,n;function a(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onEnter=function(e,n){var a=t.getClassNames(n?"appear":"enter").className;t.removeClasses(e,"exit"),c(e,a),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.getClassNames(n?"appear":"enter").activeClassName;t.reflowAndAddClass(e,a),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.getClassNames("enter").doneClassName;t.removeClasses(e,n?"appear":"enter"),c(e,a),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.getClassNames("exit").className;t.removeClasses(e,"appear"),t.removeClasses(e,"enter"),c(e,n),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.getClassNames("exit").activeClassName;t.reflowAndAddClass(e,n),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.getClassNames("exit").doneClassName;t.removeClasses(e,"exit"),c(e,n),t.props.onExited&&t.props.onExited(e)},t.getClassNames=function(e){var n=t.props.classNames,a="string"!=typeof n?n[e]:n+"-"+e;return{className:a,activeClassName:"string"!=typeof n?n[e+"Active"]:a+"-active",doneClassName:"string"!=typeof n?n[e+"Done"]:a+"-done"}},t}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var r=a.prototype;return r.removeClasses=function(e,t){var n=this.getClassNames(t),a=n.className,r=n.activeClassName,o=n.doneClassName;a&&u(e,a),r&&u(e,r),o&&u(e,o)},r.reflowAndAddClass=function(e,t){t&&(e&&e.scrollTop,c(e,t))},r.render=function(){var e=l({},this.props);return delete e.classNames,o.default.createElement(i.default,l({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(o.default.Component);p.propTypes={};var f=p;t.default=f,e.exports=t.default},96:function(e,t,n){"use strict";var a=n(97);t.__esModule=!0,t.default=function(e,t){e.classList?e.classList.add(t):(0,r.default)(e,t)||("string"==typeof e.className?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))};var r=a(n(98));e.exports=t.default},97:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},98:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")},e.exports=t.default},99:function(e,t,n){"use strict";function a(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}e.exports=function(e,t){e.classList?e.classList.remove(t):"string"==typeof e.className?e.className=a(e.className,t):e.setAttribute("class",a(e.className&&e.className.baseVal||"",t))}}},[[236,1,0]]]);