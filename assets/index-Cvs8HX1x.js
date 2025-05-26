(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var qg={exports:{}},Il={},Kg={exports:{}},Z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),t0=Symbol.for("react.portal"),n0=Symbol.for("react.fragment"),r0=Symbol.for("react.strict_mode"),i0=Symbol.for("react.profiler"),s0=Symbol.for("react.provider"),o0=Symbol.for("react.context"),a0=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),u0=Symbol.for("react.memo"),c0=Symbol.for("react.lazy"),up=Symbol.iterator;function h0(t){return t===null||typeof t!="object"?null:(t=up&&t[up]||t["@@iterator"],typeof t=="function"?t:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qg=Object.assign,Xg={};function bi(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Gg}bi.prototype.isReactComponent={};bi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Yg(){}Yg.prototype=bi.prototype;function Ih(t,e,n){this.props=t,this.context=e,this.refs=Xg,this.updater=n||Gg}var Sh=Ih.prototype=new Yg;Sh.constructor=Ih;Qg(Sh,bi.prototype);Sh.isPureReactComponent=!0;var cp=Array.isArray,Jg=Object.prototype.hasOwnProperty,Ah={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function ey(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Jg.call(e,r)&&!Zg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:uo,type:t,key:s,ref:o,props:i,_owner:Ah.current}}function d0(t,e){return{$$typeof:uo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ch(t){return typeof t=="object"&&t!==null&&t.$$typeof===uo}function f0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var hp=/\/+/g;function Su(t,e){return typeof t=="object"&&t!==null&&t.key!=null?f0(""+t.key):e.toString(36)}function da(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case uo:case t0:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Su(o,0):r,cp(i)?(n="",t!=null&&(n=t.replace(hp,"$&/")+"/"),da(i,e,n,"",function(h){return h})):i!=null&&(Ch(i)&&(i=d0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(hp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",cp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Su(s,l);o+=da(s,e,n,u,i)}else if(u=h0(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Su(s,l++),o+=da(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $o(t,e,n){if(t==null)return t;var r=[],i=0;return da(t,r,"","",function(s){return e.call(n,s,i++)}),r}function p0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var it={current:null},fa={transition:null},m0={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:fa,ReactCurrentOwner:Ah};function ty(){throw Error("act(...) is not supported in production builds of React.")}Z.Children={map:$o,forEach:function(t,e,n){$o(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $o(t,function(){e++}),e},toArray:function(t){return $o(t,function(e){return e})||[]},only:function(t){if(!Ch(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Z.Component=bi;Z.Fragment=n0;Z.Profiler=i0;Z.PureComponent=Ih;Z.StrictMode=r0;Z.Suspense=l0;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0;Z.act=ty;Z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Jg.call(e,u)&&!Zg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:uo,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t){return t={$$typeof:o0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:s0,_context:t},t.Consumer=t};Z.createElement=ey;Z.createFactory=function(t){var e=ey.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:a0,render:t}};Z.isValidElement=Ch;Z.lazy=function(t){return{$$typeof:c0,_payload:{_status:-1,_result:t},_init:p0}};Z.memo=function(t,e){return{$$typeof:u0,type:t,compare:e===void 0?null:e}};Z.startTransition=function(t){var e=fa.transition;fa.transition={};try{t()}finally{fa.transition=e}};Z.unstable_act=ty;Z.useCallback=function(t,e){return it.current.useCallback(t,e)};Z.useContext=function(t){return it.current.useContext(t)};Z.useDebugValue=function(){};Z.useDeferredValue=function(t){return it.current.useDeferredValue(t)};Z.useEffect=function(t,e){return it.current.useEffect(t,e)};Z.useId=function(){return it.current.useId()};Z.useImperativeHandle=function(t,e,n){return it.current.useImperativeHandle(t,e,n)};Z.useInsertionEffect=function(t,e){return it.current.useInsertionEffect(t,e)};Z.useLayoutEffect=function(t,e){return it.current.useLayoutEffect(t,e)};Z.useMemo=function(t,e){return it.current.useMemo(t,e)};Z.useReducer=function(t,e,n){return it.current.useReducer(t,e,n)};Z.useRef=function(t){return it.current.useRef(t)};Z.useState=function(t){return it.current.useState(t)};Z.useSyncExternalStore=function(t,e,n){return it.current.useSyncExternalStore(t,e,n)};Z.useTransition=function(){return it.current.useTransition()};Z.version="18.3.1";Kg.exports=Z;var vt=Kg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0=vt,y0=Symbol.for("react.element"),_0=Symbol.for("react.fragment"),v0=Object.prototype.hasOwnProperty,E0=g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w0={key:!0,ref:!0,__self:!0,__source:!0};function ny(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)v0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:y0,type:t,key:s,ref:o,props:i,_owner:E0.current}}Il.Fragment=_0;Il.jsx=ny;Il.jsxs=ny;qg.exports=Il;var G=qg.exports,ry={exports:{}},yt={},iy={exports:{}},sy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,K){var Y=j.length;j.push(K);e:for(;0<Y;){var pe=Y-1>>>1,ae=j[pe];if(0<i(ae,K))j[pe]=K,j[Y]=ae,Y=pe;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var K=j[0],Y=j.pop();if(Y!==K){j[0]=Y;e:for(var pe=0,ae=j.length,Te=ae>>>1;pe<Te;){var en=2*(pe+1)-1,tn=j[en],nn=en+1,rn=j[nn];if(0>i(tn,Y))nn<ae&&0>i(rn,tn)?(j[pe]=rn,j[nn]=Y,pe=nn):(j[pe]=tn,j[en]=Y,pe=en);else if(nn<ae&&0>i(rn,Y))j[pe]=rn,j[nn]=Y,pe=nn;else break e}}return K}function i(j,K){var Y=j.sortIndex-K.sortIndex;return Y!==0?Y:j.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],f=1,g=null,y=3,A=!1,k=!1,D=!1,M=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(j){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=j)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function V(j){if(D=!1,S(j),!k)if(n(u)!==null)k=!0,qi(O);else{var K=n(h);K!==null&&Zt(V,K.startTime-j)}}function O(j,K){k=!1,D&&(D=!1,I(m),m=-1),A=!0;var Y=y;try{for(S(K),g=n(u);g!==null&&(!(g.expirationTime>K)||j&&!C());){var pe=g.callback;if(typeof pe=="function"){g.callback=null,y=g.priorityLevel;var ae=pe(g.expirationTime<=K);K=t.unstable_now(),typeof ae=="function"?g.callback=ae:g===n(u)&&r(u),S(K)}else r(u);g=n(u)}if(g!==null)var Te=!0;else{var en=n(h);en!==null&&Zt(V,en.startTime-K),Te=!1}return Te}finally{g=null,y=Y,A=!1}}var L=!1,E=null,m=-1,_=5,w=-1;function C(){return!(t.unstable_now()-w<_)}function P(){if(E!==null){var j=t.unstable_now();w=j;var K=!0;try{K=E(!0,j)}finally{K?T():(L=!1,E=null)}}else L=!1}var T;if(typeof v=="function")T=function(){v(P)};else if(typeof MessageChannel<"u"){var Ze=new MessageChannel,dr=Ze.port2;Ze.port1.onmessage=P,T=function(){dr.postMessage(null)}}else T=function(){M(P,0)};function qi(j){E=j,L||(L=!0,T())}function Zt(j,K){m=M(function(){j(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){k||A||(k=!0,qi(O))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Y=y;y=K;try{return j()}finally{y=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,K){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Y=y;y=j;try{return K()}finally{y=Y}},t.unstable_scheduleCallback=function(j,K,Y){var pe=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?pe+Y:pe):Y=pe,j){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Y+ae,j={id:f++,callback:K,priorityLevel:j,startTime:Y,expirationTime:ae,sortIndex:-1},Y>pe?(j.sortIndex=Y,e(h,j),n(u)===null&&j===n(h)&&(D?(I(m),m=-1):D=!0,Zt(V,Y-pe))):(j.sortIndex=ae,e(u,j),k||A||(k=!0,qi(O))),j},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(j){var K=y;return function(){var Y=y;y=K;try{return j.apply(this,arguments)}finally{y=Y}}}})(sy);iy.exports=sy;var T0=iy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I0=vt,gt=T0;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oy=new Set,Ms={};function Fr(t,e){wi(t,e),wi(t+"Capture",e)}function wi(t,e){for(Ms[t]=e,t=0;t<e.length;t++)oy.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ac=Object.prototype.hasOwnProperty,S0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,dp={},fp={};function A0(t){return ac.call(fp,t)?!0:ac.call(dp,t)?!1:S0.test(t)?fp[t]=!0:(dp[t]=!0,!1)}function C0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function R0(t,e,n,r){if(e===null||typeof e>"u"||C0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function st(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new st(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new st(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new st(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new st(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new st(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new st(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new st(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new st(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new st(t,5,!1,t.toLowerCase(),null,!1,!1)});var Rh=/[\-:]([a-z])/g;function Ph(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);je[e]=new st(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Rh,Ph);je[e]=new st(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Rh,Ph);je[e]=new st(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new st(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new st(t,1,!1,t.toLowerCase(),null,!0,!0)});function kh(t,e,n,r){var i=je.hasOwnProperty(e)?je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(R0(e,n,i,r)&&(n=null),r||i===null?A0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=I0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ho=Symbol.for("react.element"),Zr=Symbol.for("react.portal"),ei=Symbol.for("react.fragment"),Nh=Symbol.for("react.strict_mode"),lc=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),ly=Symbol.for("react.context"),Dh=Symbol.for("react.forward_ref"),uc=Symbol.for("react.suspense"),cc=Symbol.for("react.suspense_list"),Vh=Symbol.for("react.memo"),Vn=Symbol.for("react.lazy"),uy=Symbol.for("react.offscreen"),pp=Symbol.iterator;function os(t){return t===null||typeof t!="object"?null:(t=pp&&t[pp]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Au;function ps(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Cu=!1;function Ru(t,e){if(!t||Cu)return"";Cu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Cu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ps(t):""}function P0(t){switch(t.tag){case 5:return ps(t.type);case 16:return ps("Lazy");case 13:return ps("Suspense");case 19:return ps("SuspenseList");case 0:case 2:case 15:return t=Ru(t.type,!1),t;case 11:return t=Ru(t.type.render,!1),t;case 1:return t=Ru(t.type,!0),t;default:return""}}function hc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ei:return"Fragment";case Zr:return"Portal";case lc:return"Profiler";case Nh:return"StrictMode";case uc:return"Suspense";case cc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ly:return(t.displayName||"Context")+".Consumer";case ay:return(t._context.displayName||"Context")+".Provider";case Dh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vh:return e=t.displayName||null,e!==null?e:hc(t.type)||"Memo";case Vn:e=t._payload,t=t._init;try{return hc(t(e))}catch{}}return null}function k0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hc(e);case 8:return e===Nh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function N0(t){var e=cy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wo(t){t._valueTracker||(t._valueTracker=N0(t))}function hy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function mp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function dy(t,e){e=e.checked,e!=null&&kh(t,"checked",e,!1)}function fc(t,e){dy(t,e);var n=tr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&pc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function gp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pc(t,e,n){(e!=="number"||xa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ms=Array.isArray;function hi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function yp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ms(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function fy(t,e){var n=tr(e.value),r=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function _p(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function py(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?py(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qo,my=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qo=qo||document.createElement("div"),qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ws={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D0=["Webkit","ms","Moz","O"];Object.keys(ws).forEach(function(t){D0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ws[e]=ws[t]})});function gy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ws.hasOwnProperty(t)&&ws[t]?(""+e).trim():e+"px"}function yy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=gy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var V0=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yc(t,e){if(e){if(V0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function _c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vc=null;function xh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,di=null,fi=null;function vp(t){if(t=fo(t)){if(typeof Ec!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Pl(e),Ec(t.stateNode,t.type,e))}}function _y(t){di?fi?fi.push(t):fi=[t]:di=t}function vy(){if(di){var t=di,e=fi;if(fi=di=null,vp(t),e)for(t=0;t<e.length;t++)vp(e[t])}}function Ey(t,e){return t(e)}function wy(){}var Pu=!1;function Ty(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Ey(t,e,n)}finally{Pu=!1,(di!==null||fi!==null)&&(wy(),vy())}}function Fs(t,e){var n=t.stateNode;if(n===null)return null;var r=Pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var wc=!1;if(yn)try{var as={};Object.defineProperty(as,"passive",{get:function(){wc=!0}}),window.addEventListener("test",as,as),window.removeEventListener("test",as,as)}catch{wc=!1}function x0(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var Ts=!1,Oa=null,La=!1,Tc=null,O0={onError:function(t){Ts=!0,Oa=t}};function L0(t,e,n,r,i,s,o,l,u){Ts=!1,Oa=null,x0.apply(O0,arguments)}function M0(t,e,n,r,i,s,o,l,u){if(L0.apply(this,arguments),Ts){if(Ts){var h=Oa;Ts=!1,Oa=null}else throw Error(F(198));La||(La=!0,Tc=h)}}function Ur(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ep(t){if(Ur(t)!==t)throw Error(F(188))}function b0(t){var e=t.alternate;if(!e){if(e=Ur(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ep(i),t;if(s===r)return Ep(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Sy(t){return t=b0(t),t!==null?Ay(t):null}function Ay(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ay(t);if(e!==null)return e;t=t.sibling}return null}var Cy=gt.unstable_scheduleCallback,wp=gt.unstable_cancelCallback,F0=gt.unstable_shouldYield,U0=gt.unstable_requestPaint,Se=gt.unstable_now,j0=gt.unstable_getCurrentPriorityLevel,Oh=gt.unstable_ImmediatePriority,Ry=gt.unstable_UserBlockingPriority,Ma=gt.unstable_NormalPriority,z0=gt.unstable_LowPriority,Py=gt.unstable_IdlePriority,Sl=null,Wt=null;function B0(t){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:W0,$0=Math.log,H0=Math.LN2;function W0(t){return t>>>=0,t===0?32:31-($0(t)/H0|0)|0}var Ko=64,Go=4194304;function gs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ba(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=gs(l):(s&=o,s!==0&&(r=gs(s)))}else o=n&~i,o!==0?r=gs(o):s!==0&&(r=gs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bt(e),i=1<<n,r|=t[n],e&=~i;return r}function q0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function K0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bt(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=q0(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Ic(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ky(){var t=Ko;return Ko<<=1,!(Ko&4194240)&&(Ko=64),t}function ku(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bt(e),t[e]=n}function G0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var oe=0;function Ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dy,Mh,Vy,xy,Oy,Sc=!1,Qo=[],Bn=null,$n=null,Hn=null,Us=new Map,js=new Map,On=[],Q0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tp(t,e){switch(t){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":$n=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(e.pointerId)}}function ls(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=fo(e),e!==null&&Mh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function X0(t,e,n,r,i){switch(e){case"focusin":return Bn=ls(Bn,t,e,n,r,i),!0;case"dragenter":return $n=ls($n,t,e,n,r,i),!0;case"mouseover":return Hn=ls(Hn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Us.set(s,ls(Us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,ls(js.get(s)||null,t,e,n,r,i)),!0}return!1}function Ly(t){var e=Er(t.target);if(e!==null){var n=Ur(e);if(n!==null){if(e=n.tag,e===13){if(e=Iy(n),e!==null){t.blockedOn=e,Oy(t.priority,function(){Vy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function pa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ac(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vc=r,n.target.dispatchEvent(r),vc=null}else return e=fo(n),e!==null&&Mh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ip(t,e,n){pa(t)&&n.delete(e)}function Y0(){Sc=!1,Bn!==null&&pa(Bn)&&(Bn=null),$n!==null&&pa($n)&&($n=null),Hn!==null&&pa(Hn)&&(Hn=null),Us.forEach(Ip),js.forEach(Ip)}function us(t,e){t.blockedOn===e&&(t.blockedOn=null,Sc||(Sc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,Y0)))}function zs(t){function e(i){return us(i,t)}if(0<Qo.length){us(Qo[0],t);for(var n=1;n<Qo.length;n++){var r=Qo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Bn!==null&&us(Bn,t),$n!==null&&us($n,t),Hn!==null&&us(Hn,t),Us.forEach(e),js.forEach(e),n=0;n<On.length;n++)r=On[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<On.length&&(n=On[0],n.blockedOn===null);)Ly(n),n.blockedOn===null&&On.shift()}var pi=An.ReactCurrentBatchConfig,Fa=!0;function J0(t,e,n,r){var i=oe,s=pi.transition;pi.transition=null;try{oe=1,bh(t,e,n,r)}finally{oe=i,pi.transition=s}}function Z0(t,e,n,r){var i=oe,s=pi.transition;pi.transition=null;try{oe=4,bh(t,e,n,r)}finally{oe=i,pi.transition=s}}function bh(t,e,n,r){if(Fa){var i=Ac(t,e,n,r);if(i===null)Uu(t,e,r,Ua,n),Tp(t,r);else if(X0(i,t,e,n,r))r.stopPropagation();else if(Tp(t,r),e&4&&-1<Q0.indexOf(t)){for(;i!==null;){var s=fo(i);if(s!==null&&Dy(s),s=Ac(t,e,n,r),s===null&&Uu(t,e,r,Ua,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Uu(t,e,r,null,n)}}var Ua=null;function Ac(t,e,n,r){if(Ua=null,t=xh(r),t=Er(t),t!==null)if(e=Ur(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ua=t,null}function My(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j0()){case Oh:return 1;case Ry:return 4;case Ma:case z0:return 16;case Py:return 536870912;default:return 16}default:return 16}}var Un=null,Fh=null,ma=null;function by(){if(ma)return ma;var t,e=Fh,n=e.length,r,i="value"in Un?Un.value:Un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ma=i.slice(t,1<r?1-r:void 0)}function ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Xo(){return!0}function Sp(){return!1}function _t(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Xo:Sp,this.isPropagationStopped=Sp,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),e}var Fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uh=_t(Fi),ho=ye({},Fi,{view:0,detail:0}),eT=_t(ho),Nu,Du,cs,Al=ye({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==cs&&(cs&&t.type==="mousemove"?(Nu=t.screenX-cs.screenX,Du=t.screenY-cs.screenY):Du=Nu=0,cs=t),Nu)},movementY:function(t){return"movementY"in t?t.movementY:Du}}),Ap=_t(Al),tT=ye({},Al,{dataTransfer:0}),nT=_t(tT),rT=ye({},ho,{relatedTarget:0}),Vu=_t(rT),iT=ye({},Fi,{animationName:0,elapsedTime:0,pseudoElement:0}),sT=_t(iT),oT=ye({},Fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),aT=_t(oT),lT=ye({},Fi,{data:0}),Cp=_t(lT),uT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},cT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hT[t])?!!e[t]:!1}function jh(){return dT}var fT=ye({},ho,{key:function(t){if(t.key){var e=uT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?cT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pT=_t(fT),mT=ye({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=_t(mT),gT=ye({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),yT=_t(gT),_T=ye({},Fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),vT=_t(_T),ET=ye({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),wT=_t(ET),TT=[9,13,27,32],zh=yn&&"CompositionEvent"in window,Is=null;yn&&"documentMode"in document&&(Is=document.documentMode);var IT=yn&&"TextEvent"in window&&!Is,Fy=yn&&(!zh||Is&&8<Is&&11>=Is),Pp=" ",kp=!1;function Uy(t,e){switch(t){case"keyup":return TT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ti=!1;function ST(t,e){switch(t){case"compositionend":return jy(e);case"keypress":return e.which!==32?null:(kp=!0,Pp);case"textInput":return t=e.data,t===Pp&&kp?null:t;default:return null}}function AT(t,e){if(ti)return t==="compositionend"||!zh&&Uy(t,e)?(t=by(),ma=Fh=Un=null,ti=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fy&&e.locale!=="ko"?null:e.data;default:return null}}var CT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!CT[t.type]:e==="textarea"}function zy(t,e,n,r){_y(r),e=ja(e,"onChange"),0<e.length&&(n=new Uh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ss=null,Bs=null;function RT(t){Jy(t,0)}function Cl(t){var e=ii(t);if(hy(e))return t}function PT(t,e){if(t==="change")return e}var By=!1;if(yn){var xu;if(yn){var Ou="oninput"in document;if(!Ou){var Dp=document.createElement("div");Dp.setAttribute("oninput","return;"),Ou=typeof Dp.oninput=="function"}xu=Ou}else xu=!1;By=xu&&(!document.documentMode||9<document.documentMode)}function Vp(){Ss&&(Ss.detachEvent("onpropertychange",$y),Bs=Ss=null)}function $y(t){if(t.propertyName==="value"&&Cl(Bs)){var e=[];zy(e,Bs,t,xh(t)),Ty(RT,e)}}function kT(t,e,n){t==="focusin"?(Vp(),Ss=e,Bs=n,Ss.attachEvent("onpropertychange",$y)):t==="focusout"&&Vp()}function NT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Cl(Bs)}function DT(t,e){if(t==="click")return Cl(e)}function VT(t,e){if(t==="input"||t==="change")return Cl(e)}function xT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:xT;function $s(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ac.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function xp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Op(t,e){var n=xp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xp(n)}}function Hy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Wy(){for(var t=window,e=xa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xa(t.document)}return e}function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function OT(t){var e=Wy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hy(n.ownerDocument.documentElement,n)){if(r!==null&&Bh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Op(n,s);var o=Op(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var LT=yn&&"documentMode"in document&&11>=document.documentMode,ni=null,Cc=null,As=null,Rc=!1;function Lp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rc||ni==null||ni!==xa(r)||(r=ni,"selectionStart"in r&&Bh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),As&&$s(As,r)||(As=r,r=ja(Cc,"onSelect"),0<r.length&&(e=new Uh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ni)))}function Yo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ri={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Lu={},qy={};yn&&(qy=document.createElement("div").style,"AnimationEvent"in window||(delete ri.animationend.animation,delete ri.animationiteration.animation,delete ri.animationstart.animation),"TransitionEvent"in window||delete ri.transitionend.transition);function Rl(t){if(Lu[t])return Lu[t];if(!ri[t])return t;var e=ri[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qy)return Lu[t]=e[n];return t}var Ky=Rl("animationend"),Gy=Rl("animationiteration"),Qy=Rl("animationstart"),Xy=Rl("transitionend"),Yy=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Yy.set(t,e),Fr(e,[t])}for(var Mu=0;Mu<Mp.length;Mu++){var bu=Mp[Mu],MT=bu.toLowerCase(),bT=bu[0].toUpperCase()+bu.slice(1);ur(MT,"on"+bT)}ur(Ky,"onAnimationEnd");ur(Gy,"onAnimationIteration");ur(Qy,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Xy,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),FT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ys));function bp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,M0(r,e,void 0,t),t.currentTarget=null}function Jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;bp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;bp(i,l,h),s=u}}}if(La)throw t=Tc,La=!1,Tc=null,t}function he(t,e){var n=e[Vc];n===void 0&&(n=e[Vc]=new Set);var r=t+"__bubble";n.has(r)||(Zy(e,t,2,!1),n.add(r))}function Fu(t,e,n){var r=0;e&&(r|=4),Zy(n,t,r,e)}var Jo="_reactListening"+Math.random().toString(36).slice(2);function Hs(t){if(!t[Jo]){t[Jo]=!0,oy.forEach(function(n){n!=="selectionchange"&&(FT.has(n)||Fu(n,!1,t),Fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Jo]||(e[Jo]=!0,Fu("selectionchange",!1,e))}}function Zy(t,e,n,r){switch(My(e)){case 1:var i=J0;break;case 4:i=Z0;break;default:i=bh}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Uu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Er(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Ty(function(){var h=s,f=xh(n),g=[];e:{var y=Yy.get(t);if(y!==void 0){var A=Uh,k=t;switch(t){case"keypress":if(ga(n)===0)break e;case"keydown":case"keyup":A=pT;break;case"focusin":k="focus",A=Vu;break;case"focusout":k="blur",A=Vu;break;case"beforeblur":case"afterblur":A=Vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=nT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=yT;break;case Ky:case Gy:case Qy:A=sT;break;case Xy:A=vT;break;case"scroll":A=eT;break;case"wheel":A=wT;break;case"copy":case"cut":case"paste":A=aT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Rp}var D=(e&4)!==0,M=!D&&t==="scroll",I=D?y!==null?y+"Capture":null:y;D=[];for(var v=h,S;v!==null;){S=v;var V=S.stateNode;if(S.tag===5&&V!==null&&(S=V,I!==null&&(V=Fs(v,I),V!=null&&D.push(Ws(v,V,S)))),M)break;v=v.return}0<D.length&&(y=new A(y,k,null,n,f),g.push({event:y,listeners:D}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==vc&&(k=n.relatedTarget||n.fromElement)&&(Er(k)||k[_n]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(k=n.relatedTarget||n.toElement,A=h,k=k?Er(k):null,k!==null&&(M=Ur(k),k!==M||k.tag!==5&&k.tag!==6)&&(k=null)):(A=null,k=h),A!==k)){if(D=Ap,V="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=Rp,V="onPointerLeave",I="onPointerEnter",v="pointer"),M=A==null?y:ii(A),S=k==null?y:ii(k),y=new D(V,v+"leave",A,n,f),y.target=M,y.relatedTarget=S,V=null,Er(f)===h&&(D=new D(I,v+"enter",k,n,f),D.target=S,D.relatedTarget=M,V=D),M=V,A&&k)t:{for(D=A,I=k,v=0,S=D;S;S=Gr(S))v++;for(S=0,V=I;V;V=Gr(V))S++;for(;0<v-S;)D=Gr(D),v--;for(;0<S-v;)I=Gr(I),S--;for(;v--;){if(D===I||I!==null&&D===I.alternate)break t;D=Gr(D),I=Gr(I)}D=null}else D=null;A!==null&&Fp(g,y,A,D,!1),k!==null&&M!==null&&Fp(g,M,k,D,!0)}}e:{if(y=h?ii(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var O=PT;else if(Np(y))if(By)O=VT;else{O=NT;var L=kT}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(O=DT);if(O&&(O=O(t,h))){zy(g,O,n,f);break e}L&&L(t,y,h),t==="focusout"&&(L=y._wrapperState)&&L.controlled&&y.type==="number"&&pc(y,"number",y.value)}switch(L=h?ii(h):window,t){case"focusin":(Np(L)||L.contentEditable==="true")&&(ni=L,Cc=h,As=null);break;case"focusout":As=Cc=ni=null;break;case"mousedown":Rc=!0;break;case"contextmenu":case"mouseup":case"dragend":Rc=!1,Lp(g,n,f);break;case"selectionchange":if(LT)break;case"keydown":case"keyup":Lp(g,n,f)}var E;if(zh)e:{switch(t){case"compositionstart":var m="onCompositionStart";break e;case"compositionend":m="onCompositionEnd";break e;case"compositionupdate":m="onCompositionUpdate";break e}m=void 0}else ti?Uy(t,n)&&(m="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(m="onCompositionStart");m&&(Fy&&n.locale!=="ko"&&(ti||m!=="onCompositionStart"?m==="onCompositionEnd"&&ti&&(E=by()):(Un=f,Fh="value"in Un?Un.value:Un.textContent,ti=!0)),L=ja(h,m),0<L.length&&(m=new Cp(m,t,null,n,f),g.push({event:m,listeners:L}),E?m.data=E:(E=jy(n),E!==null&&(m.data=E)))),(E=IT?ST(t,n):AT(t,n))&&(h=ja(h,"onBeforeInput"),0<h.length&&(f=new Cp("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:h}),f.data=E))}Jy(g,e)})}function Ws(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ja(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fs(t,n),s!=null&&r.unshift(Ws(t,s,i)),s=Fs(t,e),s!=null&&r.push(Ws(t,s,i))),t=t.return}return r}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Fp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=Fs(n,s),u!=null&&o.unshift(Ws(n,u,l))):i||(u=Fs(n,s),u!=null&&o.push(Ws(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var UT=/\r\n?/g,jT=/\u0000|\uFFFD/g;function Up(t){return(typeof t=="string"?t:""+t).replace(UT,`
`).replace(jT,"")}function Zo(t,e,n){if(e=Up(e),Up(t)!==e&&n)throw Error(F(425))}function za(){}var Pc=null,kc=null;function Nc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,zT=typeof clearTimeout=="function"?clearTimeout:void 0,jp=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof jp<"u"?function(t){return jp.resolve(null).then(t).catch($T)}:Dc;function $T(t){setTimeout(function(){throw t})}function ju(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zs(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zs(e)}function Wn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function zp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ui=Math.random().toString(36).slice(2),Ht="__reactFiber$"+Ui,qs="__reactProps$"+Ui,_n="__reactContainer$"+Ui,Vc="__reactEvents$"+Ui,HT="__reactListeners$"+Ui,WT="__reactHandles$"+Ui;function Er(t){var e=t[Ht];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_n]||n[Ht]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=zp(t);t!==null;){if(n=t[Ht])return n;t=zp(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[Ht]||t[_n],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ii(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Pl(t){return t[qs]||null}var xc=[],si=-1;function cr(t){return{current:t}}function de(t){0>si||(t.current=xc[si],xc[si]=null,si--)}function ue(t,e){si++,xc[si]=t.current,t.current=e}var nr={},Ye=cr(nr),ut=cr(!1),Pr=nr;function Ti(t,e){var n=t.type.contextTypes;if(!n)return nr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function Ba(){de(ut),de(Ye)}function Bp(t,e,n){if(Ye.current!==nr)throw Error(F(168));ue(Ye,e),ue(ut,n)}function e_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,k0(t)||"Unknown",i));return ye({},n,r)}function $a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Pr=Ye.current,ue(Ye,t),ue(ut,ut.current),!0}function $p(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=e_(t,e,Pr),r.__reactInternalMemoizedMergedChildContext=t,de(ut),de(Ye),ue(Ye,t)):de(ut),ue(ut,n)}var un=null,kl=!1,zu=!1;function t_(t){un===null?un=[t]:un.push(t)}function qT(t){kl=!0,t_(t)}function hr(){if(!zu&&un!==null){zu=!0;var t=0,e=oe;try{var n=un;for(oe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}un=null,kl=!1}catch(i){throw un!==null&&(un=un.slice(t+1)),Cy(Oh,hr),i}finally{oe=e,zu=!1}}return null}var oi=[],ai=0,Ha=null,Wa=0,Et=[],wt=0,kr=null,hn=1,dn="";function yr(t,e){oi[ai++]=Wa,oi[ai++]=Ha,Ha=t,Wa=e}function n_(t,e,n){Et[wt++]=hn,Et[wt++]=dn,Et[wt++]=kr,kr=t;var r=hn;t=dn;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var s=32-bt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-bt(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function $h(t){t.return!==null&&(yr(t,1),n_(t,1,0))}function Hh(t){for(;t===Ha;)Ha=oi[--ai],oi[ai]=null,Wa=oi[--ai],oi[ai]=null;for(;t===kr;)kr=Et[--wt],Et[wt]=null,dn=Et[--wt],Et[wt]=null,hn=Et[--wt],Et[wt]=null}var mt=null,pt=null,fe=!1,xt=null;function r_(t,e){var n=It(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,mt=t,pt=Wn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,mt=t,pt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=It(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,mt=t,pt=null,!0):!1;default:return!1}}function Oc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(fe){var e=pt;if(e){var n=e;if(!Hp(t,e)){if(Oc(t))throw Error(F(418));e=Wn(n.nextSibling);var r=mt;e&&Hp(t,e)?r_(r,n):(t.flags=t.flags&-4097|2,fe=!1,mt=t)}}else{if(Oc(t))throw Error(F(418));t.flags=t.flags&-4097|2,fe=!1,mt=t}}}function Wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;mt=t}function ea(t){if(t!==mt)return!1;if(!fe)return Wp(t),fe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nc(t.type,t.memoizedProps)),e&&(e=pt)){if(Oc(t))throw i_(),Error(F(418));for(;e;)r_(t,e),e=Wn(e.nextSibling)}if(Wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pt=Wn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pt=null}}else pt=mt?Wn(t.stateNode.nextSibling):null;return!0}function i_(){for(var t=pt;t;)t=Wn(t.nextSibling)}function Ii(){pt=mt=null,fe=!1}function Wh(t){xt===null?xt=[t]:xt.push(t)}var KT=An.ReactCurrentBatchConfig;function hs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ta(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function qp(t){var e=t._init;return e(t._payload)}function s_(t){function e(I,v){if(t){var S=I.deletions;S===null?(I.deletions=[v],I.flags|=16):S.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=Qn(I,v),I.index=0,I.sibling=null,I}function s(I,v,S){return I.index=S,t?(S=I.alternate,S!==null?(S=S.index,S<v?(I.flags|=2,v):S):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function l(I,v,S,V){return v===null||v.tag!==6?(v=Gu(S,I.mode,V),v.return=I,v):(v=i(v,S),v.return=I,v)}function u(I,v,S,V){var O=S.type;return O===ei?f(I,v,S.props.children,V,S.key):v!==null&&(v.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vn&&qp(O)===v.type)?(V=i(v,S.props),V.ref=hs(I,v,S),V.return=I,V):(V=Ia(S.type,S.key,S.props,null,I.mode,V),V.ref=hs(I,v,S),V.return=I,V)}function h(I,v,S,V){return v===null||v.tag!==4||v.stateNode.containerInfo!==S.containerInfo||v.stateNode.implementation!==S.implementation?(v=Qu(S,I.mode,V),v.return=I,v):(v=i(v,S.children||[]),v.return=I,v)}function f(I,v,S,V,O){return v===null||v.tag!==7?(v=Cr(S,I.mode,V,O),v.return=I,v):(v=i(v,S),v.return=I,v)}function g(I,v,S){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Gu(""+v,I.mode,S),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ho:return S=Ia(v.type,v.key,v.props,null,I.mode,S),S.ref=hs(I,null,v),S.return=I,S;case Zr:return v=Qu(v,I.mode,S),v.return=I,v;case Vn:var V=v._init;return g(I,V(v._payload),S)}if(ms(v)||os(v))return v=Cr(v,I.mode,S,null),v.return=I,v;ta(I,v)}return null}function y(I,v,S,V){var O=v!==null?v.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return O!==null?null:l(I,v,""+S,V);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:return S.key===O?u(I,v,S,V):null;case Zr:return S.key===O?h(I,v,S,V):null;case Vn:return O=S._init,y(I,v,O(S._payload),V)}if(ms(S)||os(S))return O!==null?null:f(I,v,S,V,null);ta(I,S)}return null}function A(I,v,S,V,O){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(S)||null,l(v,I,""+V,O);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Ho:return I=I.get(V.key===null?S:V.key)||null,u(v,I,V,O);case Zr:return I=I.get(V.key===null?S:V.key)||null,h(v,I,V,O);case Vn:var L=V._init;return A(I,v,S,L(V._payload),O)}if(ms(V)||os(V))return I=I.get(S)||null,f(v,I,V,O,null);ta(v,V)}return null}function k(I,v,S,V){for(var O=null,L=null,E=v,m=v=0,_=null;E!==null&&m<S.length;m++){E.index>m?(_=E,E=null):_=E.sibling;var w=y(I,E,S[m],V);if(w===null){E===null&&(E=_);break}t&&E&&w.alternate===null&&e(I,E),v=s(w,v,m),L===null?O=w:L.sibling=w,L=w,E=_}if(m===S.length)return n(I,E),fe&&yr(I,m),O;if(E===null){for(;m<S.length;m++)E=g(I,S[m],V),E!==null&&(v=s(E,v,m),L===null?O=E:L.sibling=E,L=E);return fe&&yr(I,m),O}for(E=r(I,E);m<S.length;m++)_=A(E,I,m,S[m],V),_!==null&&(t&&_.alternate!==null&&E.delete(_.key===null?m:_.key),v=s(_,v,m),L===null?O=_:L.sibling=_,L=_);return t&&E.forEach(function(C){return e(I,C)}),fe&&yr(I,m),O}function D(I,v,S,V){var O=os(S);if(typeof O!="function")throw Error(F(150));if(S=O.call(S),S==null)throw Error(F(151));for(var L=O=null,E=v,m=v=0,_=null,w=S.next();E!==null&&!w.done;m++,w=S.next()){E.index>m?(_=E,E=null):_=E.sibling;var C=y(I,E,w.value,V);if(C===null){E===null&&(E=_);break}t&&E&&C.alternate===null&&e(I,E),v=s(C,v,m),L===null?O=C:L.sibling=C,L=C,E=_}if(w.done)return n(I,E),fe&&yr(I,m),O;if(E===null){for(;!w.done;m++,w=S.next())w=g(I,w.value,V),w!==null&&(v=s(w,v,m),L===null?O=w:L.sibling=w,L=w);return fe&&yr(I,m),O}for(E=r(I,E);!w.done;m++,w=S.next())w=A(E,I,m,w.value,V),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?m:w.key),v=s(w,v,m),L===null?O=w:L.sibling=w,L=w);return t&&E.forEach(function(P){return e(I,P)}),fe&&yr(I,m),O}function M(I,v,S,V){if(typeof S=="object"&&S!==null&&S.type===ei&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case Ho:e:{for(var O=S.key,L=v;L!==null;){if(L.key===O){if(O=S.type,O===ei){if(L.tag===7){n(I,L.sibling),v=i(L,S.props.children),v.return=I,I=v;break e}}else if(L.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Vn&&qp(O)===L.type){n(I,L.sibling),v=i(L,S.props),v.ref=hs(I,L,S),v.return=I,I=v;break e}n(I,L);break}else e(I,L);L=L.sibling}S.type===ei?(v=Cr(S.props.children,I.mode,V,S.key),v.return=I,I=v):(V=Ia(S.type,S.key,S.props,null,I.mode,V),V.ref=hs(I,v,S),V.return=I,I=V)}return o(I);case Zr:e:{for(L=S.key;v!==null;){if(v.key===L)if(v.tag===4&&v.stateNode.containerInfo===S.containerInfo&&v.stateNode.implementation===S.implementation){n(I,v.sibling),v=i(v,S.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=Qu(S,I.mode,V),v.return=I,I=v}return o(I);case Vn:return L=S._init,M(I,v,L(S._payload),V)}if(ms(S))return k(I,v,S,V);if(os(S))return D(I,v,S,V);ta(I,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,S),v.return=I,I=v):(n(I,v),v=Gu(S,I.mode,V),v.return=I,I=v),o(I)):n(I,v)}return M}var Si=s_(!0),o_=s_(!1),qa=cr(null),Ka=null,li=null,qh=null;function Kh(){qh=li=Ka=null}function Gh(t){var e=qa.current;de(qa),t._currentValue=e}function Mc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function mi(t,e){Ka=t,qh=li=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(qh!==t)if(t={context:t,memoizedValue:e,next:null},li===null){if(Ka===null)throw Error(F(308));li=t,Ka.dependencies={lanes:0,firstContext:t}}else li=li.next=t;return e}var wr=null;function Qh(t){wr===null?wr=[t]:wr.push(t)}function a_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qh(e)):(n.next=i.next,i.next=n),e.interleaved=n,vn(t,r)}function vn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var xn=!1;function Xh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,vn(t,n)}return i=r.interleaved,i===null?(e.next=e,Qh(r)):(e.next=i.next,i.next=e),r.interleaved=e,vn(t,n)}function ya(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lh(t,n)}}function Kp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ga(t,e,n,r){var i=t.updateQueue;xn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=t,D=l;switch(y=e,A=n,D.tag){case 1:if(k=D.payload,typeof k=="function"){g=k.call(A,g,y);break e}g=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=D.payload,y=typeof k=="function"?k.call(A,g,y):k,y==null)break e;g=ye({},g,y);break e;case 2:xn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=g):f=f.next=A,o|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Dr|=o,t.lanes=o,t.memoizedState=g}}function Gp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var po={},qt=cr(po),Ks=cr(po),Gs=cr(po);function Tr(t){if(t===po)throw Error(F(174));return t}function Yh(t,e){switch(ue(Gs,e),ue(Ks,t),ue(qt,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gc(e,t)}de(qt),ue(qt,e)}function Ai(){de(qt),de(Ks),de(Gs)}function u_(t){Tr(Gs.current);var e=Tr(qt.current),n=gc(e,t.type);e!==n&&(ue(Ks,t),ue(qt,n))}function Jh(t){Ks.current===t&&(de(qt),de(Ks))}var me=cr(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bu=[];function Zh(){for(var t=0;t<Bu.length;t++)Bu[t]._workInProgressVersionPrimary=null;Bu.length=0}var _a=An.ReactCurrentDispatcher,$u=An.ReactCurrentBatchConfig,Nr=0,ge=null,Re=null,xe=null,Xa=!1,Cs=!1,Qs=0,GT=0;function We(){throw Error(F(321))}function ed(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function td(t,e,n,r,i,s){if(Nr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_a.current=t===null||t.memoizedState===null?JT:ZT,t=n(r,i),Cs){s=0;do{if(Cs=!1,Qs=0,25<=s)throw Error(F(301));s+=1,xe=Re=null,e.updateQueue=null,_a.current=eI,t=n(r,i)}while(Cs)}if(_a.current=Ya,e=Re!==null&&Re.next!==null,Nr=0,xe=Re=ge=null,Xa=!1,e)throw Error(F(300));return t}function nd(){var t=Qs!==0;return Qs=0,t}function Bt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ge.memoizedState=xe=t:xe=xe.next=t,xe}function Rt(){if(Re===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=xe===null?ge.memoizedState:xe.next;if(e!==null)xe=e,Re=t;else{if(t===null)throw Error(F(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},xe===null?ge.memoizedState=xe=t:xe=xe.next=t}return xe}function Xs(t,e){return typeof e=="function"?e(t):e}function Hu(t){var e=Rt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var f=h.lane;if((Nr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,ge.lanes|=f,Dr|=f}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,jt(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Dr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wu(t){var e=Rt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);jt(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function c_(){}function h_(t,e){var n=ge,r=Rt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,rd(p_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Ys(9,f_.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(F(349));Nr&30||d_(n,e,i)}return i}function d_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f_(t,e,n,r){e.value=n,e.getSnapshot=r,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function g_(t){var e=vn(t,1);e!==null&&Ft(e,t,1,-1)}function Qp(t){var e=Bt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xs,lastRenderedState:t},e.queue=t,t=t.dispatch=YT.bind(null,ge,t),[e.memoizedState,t]}function Ys(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function y_(){return Rt().memoizedState}function va(t,e,n,r){var i=Bt();ge.flags|=t,i.memoizedState=Ys(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var i=Rt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&ed(r,o.deps)){i.memoizedState=Ys(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Ys(1|e,n,s,r)}function Xp(t,e){return va(8390656,8,t,e)}function rd(t,e){return Nl(2048,8,t,e)}function __(t,e){return Nl(4,2,t,e)}function v_(t,e){return Nl(4,4,t,e)}function E_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function w_(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,E_.bind(null,e,t),n)}function id(){}function T_(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I_(t,e){var n=Rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ed(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function S_(t,e,n){return Nr&21?(jt(n,e)||(n=ky(),ge.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function QT(t,e){var n=oe;oe=n!==0&&4>n?n:4,t(!0);var r=$u.transition;$u.transition={};try{t(!1),e()}finally{oe=n,$u.transition=r}}function A_(){return Rt().memoizedState}function XT(t,e,n){var r=Gn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},C_(t))R_(e,n);else if(n=a_(t,e,n,r),n!==null){var i=rt();Ft(n,t,r,i),P_(n,e,r)}}function YT(t,e,n){var r=Gn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(C_(t))R_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=a_(t,e,i,r),n!==null&&(i=rt(),Ft(n,t,r,i),P_(n,e,r))}}function C_(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function R_(t,e){Cs=Xa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function P_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lh(t,n)}}var Ya={readContext:Ct,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},JT={readContext:Ct,useCallback:function(t,e){return Bt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Xp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,va(4194308,4,E_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return va(4194308,4,t,e)},useInsertionEffect:function(t,e){return va(4,2,t,e)},useMemo:function(t,e){var n=Bt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=XT.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Bt();return t={current:t},e.memoizedState=t},useState:Qp,useDebugValue:id,useDeferredValue:function(t){return Bt().memoizedState=t},useTransition:function(){var t=Qp(!1),e=t[0];return t=QT.bind(null,t[1]),Bt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Bt();if(fe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Oe===null)throw Error(F(349));Nr&30||d_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Xp(p_.bind(null,r,s,t),[t]),r.flags|=2048,Ys(9,f_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bt(),e=Oe.identifierPrefix;if(fe){var n=dn,r=hn;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Qs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=GT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ZT={readContext:Ct,useCallback:T_,useContext:Ct,useEffect:rd,useImperativeHandle:w_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:I_,useReducer:Hu,useRef:y_,useState:function(){return Hu(Xs)},useDebugValue:id,useDeferredValue:function(t){var e=Rt();return S_(e,Re.memoizedState,t)},useTransition:function(){var t=Hu(Xs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:h_,useId:A_,unstable_isNewReconciler:!1},eI={readContext:Ct,useCallback:T_,useContext:Ct,useEffect:rd,useImperativeHandle:w_,useInsertionEffect:__,useLayoutEffect:v_,useMemo:I_,useReducer:Wu,useRef:y_,useState:function(){return Wu(Xs)},useDebugValue:id,useDeferredValue:function(t){var e=Rt();return Re===null?e.memoizedState=t:S_(e,Re.memoizedState,t)},useTransition:function(){var t=Wu(Xs)[0],e=Rt().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:h_,useId:A_,unstable_isNewReconciler:!1};function Dt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Ur(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Gn(t),s=mn(r,i);s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Ft(e,t,i,r),ya(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=rt(),i=Gn(t),s=mn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qn(t,s,i),e!==null&&(Ft(e,t,i,r),ya(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=rt(),r=Gn(t),i=mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=qn(t,i,r),e!==null&&(Ft(e,t,r,n),ya(e,t,r))}};function Yp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$s(n,r)||!$s(i,s):!0}function k_(t,e,n){var r=!1,i=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ct(e)?Pr:Ye.current,r=e.contextTypes,s=(r=r!=null)?Ti(t,i):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function Fc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Xh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ct(e)?Pr:Ye.current,i.context=Ti(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Ga(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ci(t,e){try{var n="",r=e;do n+=P0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function qu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var tI=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Za||(Za=!0,Qc=r),Uc(t,e)},n}function D_(t,e,n){n=mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uc(t,e),typeof r!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Zp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new tI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=mI.bind(null,t,e,n),e.then(t,t))}function em(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mn(-1,1),e.tag=2,qn(n,e,1))),n.lanes|=1),t)}var nI=An.ReactCurrentOwner,lt=!1;function nt(t,e,n,r){e.child=t===null?o_(e,null,n,r):Si(e,t.child,n,r)}function nm(t,e,n,r,i){n=n.render;var s=e.ref;return mi(e,i),r=td(t,e,n,r,s,i),n=nd(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(fe&&n&&$h(e),e.flags|=1,nt(t,e,r,i),e.child)}function rm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,V_(t,e,s,r,i)):(t=Ia(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$s,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Qn(s,r),t.ref=e.ref,t.return=e,e.child=t}function V_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($s(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,En(t,e,i)}return jc(t,e,n,r,i)}function x_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(ci,ft),ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ue(ci,ft),ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ue(ci,ft),ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ue(ci,ft),ft|=r;return nt(t,e,i,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jc(t,e,n,r,i){var s=ct(n)?Pr:Ye.current;return s=Ti(e,s),mi(e,i),n=td(t,e,n,r,s,i),r=nd(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(fe&&r&&$h(e),e.flags|=1,nt(t,e,n,i),e.child)}function im(t,e,n,r,i){if(ct(n)){var s=!0;$a(e)}else s=!1;if(mi(e,i),e.stateNode===null)Ea(t,e),k_(e,n,r),Fc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=ct(n)?Pr:Ye.current,h=Ti(e,h));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Jp(e,o,r,h),xn=!1;var y=e.memoizedState;o.state=y,Ga(e,r,o,i),u=e.memoizedState,l!==r||y!==u||ut.current||xn?(typeof f=="function"&&(bc(e,n,f,r),u=e.memoizedState),(l=xn||Yp(e,n,l,r,y,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,l_(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Dt(e.type,l),o.props=h,g=e.pendingProps,y=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ct(n)?Pr:Ye.current,u=Ti(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||y!==u)&&Jp(e,o,r,u),xn=!1,y=e.memoizedState,o.state=y,Ga(e,r,o,i);var k=e.memoizedState;l!==g||y!==k||ut.current||xn?(typeof A=="function"&&(bc(e,n,A,r),k=e.memoizedState),(h=xn||Yp(e,n,h,r,y,k,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return zc(t,e,n,r,s,i)}function zc(t,e,n,r,i,s){O_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&$p(e,n,!1),En(t,e,s);r=e.stateNode,nI.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Si(e,t.child,null,s),e.child=Si(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&$p(e,n,!0),e.child}function L_(t){var e=t.stateNode;e.pendingContext?Bp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bp(t,e.context,!1),Yh(t,e.containerInfo)}function sm(t,e,n,r,i){return Ii(),Wh(i),e.flags|=256,nt(t,e,n,r),e.child}var Bc={dehydrated:null,treeContext:null,retryLane:0};function $c(t){return{baseLanes:t,cachePool:null,transitions:null}}function M_(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ue(me,i&1),t===null)return Lc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ol(o,r,0,null),t=Cr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$c(n),e.memoizedState=Bc,t):sd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return rI(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Qn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Qn(l,s):(s=Cr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$c(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bc,r}return s=t.child,t=s.sibling,r=Qn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sd(t,e){return e=Ol({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function na(t,e,n,r){return r!==null&&Wh(r),Si(e,t.child,null,n),t=sd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=qu(Error(F(422))),na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ol({mode:"visible",children:r.children},i,0,null),s=Cr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Si(e,t.child,null,o),e.child.memoizedState=$c(o),e.memoizedState=Bc,s);if(!(e.mode&1))return na(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=qu(s,r,void 0),na(t,e,o,r)}if(l=(o&t.childLanes)!==0,lt||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,vn(t,i),Ft(r,t,i,-1))}return hd(),r=qu(Error(F(421))),na(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=gI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pt=Wn(i.nextSibling),mt=e,fe=!0,xt=null,t!==null&&(Et[wt++]=hn,Et[wt++]=dn,Et[wt++]=kr,hn=t.id,dn=t.overflow,kr=e),e=sd(e,r.children),e.flags|=4096,e)}function om(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mc(t.return,e,n)}function Ku(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function b_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&om(t,n,e);else if(t.tag===19)om(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ku(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ku(e,!0,n,null,s);break;case"together":Ku(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ea(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=Qn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function iI(t,e,n){switch(e.tag){case 3:L_(e),Ii();break;case 5:u_(e);break;case 1:ct(e.type)&&$a(e);break;case 4:Yh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ue(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ue(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?M_(t,e,n):(ue(me,me.current&1),t=En(t,e,n),t!==null?t.sibling:null);ue(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return b_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,x_(t,e,n)}return En(t,e,n)}var F_,Hc,U_,j_;F_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hc=function(){};U_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Tr(qt.current);var s=null;switch(n){case"input":i=dc(t,i),r=dc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=mc(t,i),r=mc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=za)}yc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ms.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ms.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&he("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};j_=function(t,e,n,r){n!==r&&(e.flags|=4)};function ds(t,e){if(!fe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function sI(t,e,n){var r=e.pendingProps;switch(Hh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ct(e.type)&&Ba(),qe(e),null;case 3:return r=e.stateNode,Ai(),de(ut),de(Ye),Zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,xt!==null&&(Jc(xt),xt=null))),Hc(t,e),qe(e),null;case 5:Jh(e);var i=Tr(Gs.current);if(n=e.type,t!==null&&e.stateNode!=null)U_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return qe(e),null}if(t=Tr(qt.current),ea(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ht]=e,r[qs]=s,t=(e.mode&1)!==0,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(i=0;i<ys.length;i++)he(ys[i],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":mp(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":yp(r,s),he("invalid",r)}yc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Zo(r.textContent,l,t),i=["children",""+l]):Ms.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&he("scroll",r)}switch(n){case"input":Wo(r),gp(r,s,!0);break;case"textarea":Wo(r),_p(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=za)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=py(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ht]=e,t[qs]=r,F_(t,e,!1,!1),e.stateNode=t;e:{switch(o=_c(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ys.length;i++)he(ys[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":mp(t,r),i=dc(t,r),he("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),he("invalid",t);break;case"textarea":yp(t,r),i=mc(t,r),he("invalid",t);break;default:i=r}yc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?yy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&my(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&bs(t,u):typeof u=="number"&&bs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ms.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&kh(t,s,u,o))}switch(n){case"input":Wo(t),gp(t,r,!1);break;case"textarea":Wo(t),_p(t);break;case"option":r.value!=null&&t.setAttribute("value",""+tr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?hi(t,!!r.multiple,s,!1):r.defaultValue!=null&&hi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=za)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)j_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Tr(Gs.current),Tr(qt.current),ea(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ht]=e,(s=r.nodeValue!==n)&&(t=mt,t!==null))switch(t.tag){case 3:Zo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Zo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ht]=e,e.stateNode=r}return qe(e),null;case 13:if(de(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(fe&&pt!==null&&e.mode&1&&!(e.flags&128))i_(),Ii(),e.flags|=98560,s=!1;else if(s=ea(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[Ht]=e}else Ii(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else xt!==null&&(Jc(xt),xt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?ke===0&&(ke=3):hd())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return Ai(),Hc(t,e),t===null&&Hs(e.stateNode.containerInfo),qe(e),null;case 10:return Gh(e.type._context),qe(e),null;case 17:return ct(e.type)&&Ba(),qe(e),null;case 19:if(de(me),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)ds(s,!1);else{if(ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=128,ds(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ue(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Se()>Ri&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304)}else{if(!r)if(t=Qa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ds(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return qe(e),null}else 2*Se()-s.renderingStartTime>Ri&&n!==1073741824&&(e.flags|=128,r=!0,ds(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Se(),e.sibling=null,n=me.current,ue(me,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return cd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ft&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function oI(t,e){switch(Hh(e),e.tag){case 1:return ct(e.type)&&Ba(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ai(),de(ut),de(Ye),Zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Jh(e),null;case 13:if(de(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ii()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(me),null;case 4:return Ai(),null;case 10:return Gh(e.type._context),null;case 22:case 23:return cd(),null;case 24:return null;default:return null}}var ra=!1,Qe=!1,aI=typeof WeakSet=="function"?WeakSet:Set,B=null;function ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(t,e,r)}else n.current=null}function Wc(t,e,n){try{n()}catch(r){Ee(t,e,r)}}var am=!1;function lI(t,e){if(Pc=Fa,t=Wy(),Bh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,f=0,g=t,y=null;t:for(;;){for(var A;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(A=g.firstChild)!==null;)y=g,g=A;for(;;){if(g===t)break t;if(y===n&&++h===i&&(l=o),y===s&&++f===r&&(u=o),(A=g.nextSibling)!==null)break;g=y,y=g.parentNode}g=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(kc={focusedElem:t,selectionRange:n},Fa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var D=k.memoizedProps,M=k.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?D:Dt(e.type,D),M);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(V){Ee(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return k=am,am=!1,k}function Rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wc(e,n,s)}i=i.next}while(i!==r)}}function Vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ht],delete e[qs],delete e[Vc],delete e[HT],delete e[WT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function B_(t){return t.tag===5||t.tag===3||t.tag===4}function lm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||B_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=za));else if(r!==4&&(t=t.child,t!==null))for(Kc(t,e,n),t=t.sibling;t!==null;)Kc(t,e,n),t=t.sibling}function Gc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Gc(t,e,n),t=t.sibling;t!==null;)Gc(t,e,n),t=t.sibling}var Me=null,Vt=!1;function Nn(t,e,n){for(n=n.child;n!==null;)$_(t,e,n),n=n.sibling}function $_(t,e,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:Qe||ui(n,e);case 6:var r=Me,i=Vt;Me=null,Nn(t,e,n),Me=r,Vt=i,Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?ju(t.parentNode,n):t.nodeType===1&&ju(t,n),zs(t)):ju(Me,n.stateNode));break;case 4:r=Me,i=Vt,Me=n.stateNode.containerInfo,Vt=!0,Nn(t,e,n),Me=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wc(n,e,o),i=i.next}while(i!==r)}Nn(t,e,n);break;case 1:if(!Qe&&(ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ee(n,e,l)}Nn(t,e,n);break;case 21:Nn(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Nn(t,e,n),Qe=r):Nn(t,e,n);break;default:Nn(t,e,n)}}function um(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new aI),e.forEach(function(r){var i=yI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Vt=!1;break e;case 3:Me=l.stateNode.containerInfo,Vt=!0;break e;case 4:Me=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Me===null)throw Error(F(160));$_(s,o,i),Me=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){Ee(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}function H_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),zt(t),r&4){try{Rs(3,t,t.return),Vl(3,t)}catch(D){Ee(t,t.return,D)}try{Rs(5,t,t.return)}catch(D){Ee(t,t.return,D)}}break;case 1:Nt(e,t),zt(t),r&512&&n!==null&&ui(n,n.return);break;case 5:if(Nt(e,t),zt(t),r&512&&n!==null&&ui(n,n.return),t.flags&32){var i=t.stateNode;try{bs(i,"")}catch(D){Ee(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&dy(i,s),_c(l,o);var h=_c(l,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?yy(i,g):f==="dangerouslySetInnerHTML"?my(i,g):f==="children"?bs(i,g):kh(i,f,g,h)}switch(l){case"input":fc(i,s);break;case"textarea":fy(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?hi(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?hi(i,!!s.multiple,s.defaultValue,!0):hi(i,!!s.multiple,s.multiple?[]:"",!1))}i[qs]=s}catch(D){Ee(t,t.return,D)}}break;case 6:if(Nt(e,t),zt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){Ee(t,t.return,D)}}break;case 3:if(Nt(e,t),zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zs(e.containerInfo)}catch(D){Ee(t,t.return,D)}break;case 4:Nt(e,t),zt(t);break;case 13:Nt(e,t),zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ld=Se())),r&4&&um(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(h=Qe)||f,Nt(e,t),Qe=h):Nt(e,t),zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(g=B=f;B!==null;){switch(y=B,A=y.child,y.tag){case 0:case 11:case 14:case 15:Rs(4,y,y.return);break;case 1:ui(y,y.return);var k=y.stateNode;if(typeof k.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(D){Ee(r,n,D)}}break;case 5:ui(y,y.return);break;case 22:if(y.memoizedState!==null){hm(g);continue}}A!==null?(A.return=y,B=A):hm(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=gy("display",o))}catch(D){Ee(t,t.return,D)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){Ee(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Nt(e,t),zt(t),r&4&&um(t);break;case 21:break;default:Nt(e,t),zt(t)}}function zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(B_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(bs(i,""),r.flags&=-33);var s=lm(t);Gc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=lm(t);Kc(t,l,o);break;default:throw Error(F(161))}}catch(u){Ee(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function uI(t,e,n){B=t,W_(t)}function W_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ra;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=ra;var h=Qe;if(ra=o,(Qe=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?dm(i):u!==null?(u.return=o,B=u):dm(i);for(;s!==null;)B=s,W_(s),s=s.sibling;B=i,ra=l,Qe=h}cm(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):cm(t)}}function cm(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||Vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Dt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Gp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Gp(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&zs(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Qe||e.flags&512&&qc(e)}catch(y){Ee(e,e.return,y)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function hm(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function dm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Vl(4,e)}catch(u){Ee(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ee(e,i,u)}}var s=e.return;try{qc(e)}catch(u){Ee(e,s,u)}break;case 5:var o=e.return;try{qc(e)}catch(u){Ee(e,o,u)}}}catch(u){Ee(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var cI=Math.ceil,Ja=An.ReactCurrentDispatcher,od=An.ReactCurrentOwner,St=An.ReactCurrentBatchConfig,re=0,Oe=null,Ce=null,Ue=0,ft=0,ci=cr(0),ke=0,Js=null,Dr=0,xl=0,ad=0,Ps=null,at=null,ld=0,Ri=1/0,ln=null,Za=!1,Qc=null,Kn=null,ia=!1,jn=null,el=0,ks=0,Xc=null,wa=-1,Ta=0;function rt(){return re&6?Se():wa!==-1?wa:wa=Se()}function Gn(t){return t.mode&1?re&2&&Ue!==0?Ue&-Ue:KT.transition!==null?(Ta===0&&(Ta=ky()),Ta):(t=oe,t!==0||(t=window.event,t=t===void 0?16:My(t.type)),t):1}function Ft(t,e,n,r){if(50<ks)throw ks=0,Xc=null,Error(F(185));co(t,n,r),(!(re&2)||t!==Oe)&&(t===Oe&&(!(re&2)&&(xl|=n),ke===4&&Ln(t,Ue)),ht(t,r),n===1&&re===0&&!(e.mode&1)&&(Ri=Se()+500,kl&&hr()))}function ht(t,e){var n=t.callbackNode;K0(t,e);var r=ba(t,t===Oe?Ue:0);if(r===0)n!==null&&wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&wp(n),e===1)t.tag===0?qT(fm.bind(null,t)):t_(fm.bind(null,t)),BT(function(){!(re&6)&&hr()}),n=null;else{switch(Ny(r)){case 1:n=Oh;break;case 4:n=Ry;break;case 16:n=Ma;break;case 536870912:n=Py;break;default:n=Ma}n=Z_(n,q_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function q_(t,e){if(wa=-1,Ta=0,re&6)throw Error(F(327));var n=t.callbackNode;if(gi()&&t.callbackNode!==n)return null;var r=ba(t,t===Oe?Ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=tl(t,r);else{e=r;var i=re;re|=2;var s=G_();(Oe!==t||Ue!==e)&&(ln=null,Ri=Se()+500,Ar(t,e));do try{fI();break}catch(l){K_(t,l)}while(!0);Kh(),Ja.current=s,re=i,Ce!==null?e=0:(Oe=null,Ue=0,e=ke)}if(e!==0){if(e===2&&(i=Ic(t),i!==0&&(r=i,e=Yc(t,i))),e===1)throw n=Js,Ar(t,0),Ln(t,r),ht(t,Se()),n;if(e===6)Ln(t,r);else{if(i=t.current.alternate,!(r&30)&&!hI(i)&&(e=tl(t,r),e===2&&(s=Ic(t),s!==0&&(r=s,e=Yc(t,s))),e===1))throw n=Js,Ar(t,0),Ln(t,r),ht(t,Se()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:_r(t,at,ln);break;case 3:if(Ln(t,r),(r&130023424)===r&&(e=ld+500-Se(),10<e)){if(ba(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){rt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Dc(_r.bind(null,t,at,ln),e);break}_r(t,at,ln);break;case 4:if(Ln(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cI(r/1960))-r,10<r){t.timeoutHandle=Dc(_r.bind(null,t,at,ln),r);break}_r(t,at,ln);break;case 5:_r(t,at,ln);break;default:throw Error(F(329))}}}return ht(t,Se()),t.callbackNode===n?q_.bind(null,t):null}function Yc(t,e){var n=Ps;return t.current.memoizedState.isDehydrated&&(Ar(t,e).flags|=256),t=tl(t,e),t!==2&&(e=at,at=n,e!==null&&Jc(e)),t}function Jc(t){at===null?at=t:at.push.apply(at,t)}function hI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ln(t,e){for(e&=~ad,e&=~xl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bt(e),r=1<<n;t[n]=-1,e&=~r}}function fm(t){if(re&6)throw Error(F(327));gi();var e=ba(t,0);if(!(e&1))return ht(t,Se()),null;var n=tl(t,e);if(t.tag!==0&&n===2){var r=Ic(t);r!==0&&(e=r,n=Yc(t,r))}if(n===1)throw n=Js,Ar(t,0),Ln(t,e),ht(t,Se()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,at,ln),ht(t,Se()),null}function ud(t,e){var n=re;re|=1;try{return t(e)}finally{re=n,re===0&&(Ri=Se()+500,kl&&hr())}}function Vr(t){jn!==null&&jn.tag===0&&!(re&6)&&gi();var e=re;re|=1;var n=St.transition,r=oe;try{if(St.transition=null,oe=1,t)return t()}finally{oe=r,St.transition=n,re=e,!(re&6)&&hr()}}function cd(){ft=ci.current,de(ci)}function Ar(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,zT(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(Hh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ba();break;case 3:Ai(),de(ut),de(Ye),Zh();break;case 5:Jh(r);break;case 4:Ai();break;case 13:de(me);break;case 19:de(me);break;case 10:Gh(r.type._context);break;case 22:case 23:cd()}n=n.return}if(Oe=t,Ce=t=Qn(t.current,null),Ue=ft=e,ke=0,Js=null,ad=xl=Dr=0,at=Ps=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}wr=null}return t}function K_(t,e){do{var n=Ce;try{if(Kh(),_a.current=Ya,Xa){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xa=!1}if(Nr=0,xe=Re=ge=null,Cs=!1,Qs=0,od.current=null,n===null||n.return===null){ke=1,Js=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Ue,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=em(o);if(A!==null){A.flags&=-257,tm(A,o,l,s,e),A.mode&1&&Zp(s,h,e),e=A,u=h;var k=e.updateQueue;if(k===null){var D=new Set;D.add(u),e.updateQueue=D}else k.add(u);break e}else{if(!(e&1)){Zp(s,h,e),hd();break e}u=Error(F(426))}}else if(fe&&l.mode&1){var M=em(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),tm(M,o,l,s,e),Wh(Ci(u,l));break e}}s=u=Ci(u,l),ke!==4&&(ke=2),Ps===null?Ps=[s]:Ps.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=N_(s,u,e);Kp(s,I);break e;case 1:l=u;var v=s.type,S=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Kn===null||!Kn.has(S)))){s.flags|=65536,e&=-e,s.lanes|=e;var V=D_(s,l,e);Kp(s,V);break e}}s=s.return}while(s!==null)}X_(n)}catch(O){e=O,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(!0)}function G_(){var t=Ja.current;return Ja.current=Ya,t===null?Ya:t}function hd(){(ke===0||ke===3||ke===2)&&(ke=4),Oe===null||!(Dr&268435455)&&!(xl&268435455)||Ln(Oe,Ue)}function tl(t,e){var n=re;re|=2;var r=G_();(Oe!==t||Ue!==e)&&(ln=null,Ar(t,e));do try{dI();break}catch(i){K_(t,i)}while(!0);if(Kh(),re=n,Ja.current=r,Ce!==null)throw Error(F(261));return Oe=null,Ue=0,ke}function dI(){for(;Ce!==null;)Q_(Ce)}function fI(){for(;Ce!==null&&!F0();)Q_(Ce)}function Q_(t){var e=J_(t.alternate,t,ft);t.memoizedProps=t.pendingProps,e===null?X_(t):Ce=e,od.current=null}function X_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=oI(n,e),n!==null){n.flags&=32767,Ce=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ke=6,Ce=null;return}}else if(n=sI(n,e,ft),n!==null){Ce=n;return}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);ke===0&&(ke=5)}function _r(t,e,n){var r=oe,i=St.transition;try{St.transition=null,oe=1,pI(t,e,n,r)}finally{St.transition=i,oe=r}return null}function pI(t,e,n,r){do gi();while(jn!==null);if(re&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(G0(t,s),t===Oe&&(Ce=Oe=null,Ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ia||(ia=!0,Z_(Ma,function(){return gi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=oe;oe=1;var l=re;re|=4,od.current=null,lI(t,n),H_(n,t),OT(kc),Fa=!!Pc,kc=Pc=null,t.current=n,uI(n),U0(),re=l,oe=o,St.transition=s}else t.current=n;if(ia&&(ia=!1,jn=t,el=i),s=t.pendingLanes,s===0&&(Kn=null),B0(n.stateNode),ht(t,Se()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Za)throw Za=!1,t=Qc,Qc=null,t;return el&1&&t.tag!==0&&gi(),s=t.pendingLanes,s&1?t===Xc?ks++:(ks=0,Xc=t):ks=0,hr(),null}function gi(){if(jn!==null){var t=Ny(el),e=St.transition,n=oe;try{if(St.transition=null,oe=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,el=0,re&6)throw Error(F(331));var i=re;for(re|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:Rs(8,f,s)}var g=f.child;if(g!==null)g.return=f,B=g;else for(;B!==null;){f=B;var y=f.sibling,A=f.return;if(z_(f),f===h){B=null;break}if(y!==null){y.return=A,B=y;break}B=A}}}var k=s.alternate;if(k!==null){var D=k.child;if(D!==null){k.child=null;do{var M=D.sibling;D.sibling=null,D=M}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Rs(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,B=I;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){o=B;var S=o.child;if(o.subtreeFlags&2064&&S!==null)S.return=o,B=S;else e:for(o=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vl(9,l)}}catch(O){Ee(l,l.return,O)}if(l===o){B=null;break e}var V=l.sibling;if(V!==null){V.return=l.return,B=V;break e}B=l.return}}if(re=i,hr(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Sl,t)}catch{}r=!0}return r}finally{oe=n,St.transition=e}}return!1}function pm(t,e,n){e=Ci(n,e),e=N_(t,e,1),t=qn(t,e,1),e=rt(),t!==null&&(co(t,1,e),ht(t,e))}function Ee(t,e,n){if(t.tag===3)pm(t,t,n);else for(;e!==null;){if(e.tag===3){pm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kn===null||!Kn.has(r))){t=Ci(n,t),t=D_(e,t,1),e=qn(e,t,1),t=rt(),e!==null&&(co(e,1,t),ht(e,t));break}}e=e.return}}function mI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=rt(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Ue&n)===n&&(ke===4||ke===3&&(Ue&130023424)===Ue&&500>Se()-ld?Ar(t,0):ad|=n),ht(t,e)}function Y_(t,e){e===0&&(t.mode&1?(e=Go,Go<<=1,!(Go&130023424)&&(Go=4194304)):e=1);var n=rt();t=vn(t,e),t!==null&&(co(t,e,n),ht(t,n))}function gI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Y_(t,n)}function yI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Y_(t,n)}var J_;J_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,iI(t,e,n);lt=!!(t.flags&131072)}else lt=!1,fe&&e.flags&1048576&&n_(e,Wa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ea(t,e),t=e.pendingProps;var i=Ti(e,Ye.current);mi(e,n),i=td(null,e,r,t,i,n);var s=nd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,$a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Xh(e),i.updater=Dl,e.stateNode=i,i._reactInternals=e,Fc(e,r,t,n),e=zc(null,e,r,!0,s,n)):(e.tag=0,fe&&s&&$h(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ea(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=vI(r),t=Dt(r,t),i){case 0:e=jc(null,e,r,t,n);break e;case 1:e=im(null,e,r,t,n);break e;case 11:e=nm(null,e,r,t,n);break e;case 14:e=rm(null,e,r,Dt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),jc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),im(t,e,r,i,n);case 3:e:{if(L_(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,l_(t,e),Ga(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ci(Error(F(423)),e),e=sm(t,e,r,n,i);break e}else if(r!==i){i=Ci(Error(F(424)),e),e=sm(t,e,r,n,i);break e}else for(pt=Wn(e.stateNode.containerInfo.firstChild),mt=e,fe=!0,xt=null,n=o_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ii(),r===i){e=En(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return u_(e),t===null&&Lc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nc(r,i)?o=null:s!==null&&Nc(r,s)&&(e.flags|=32),O_(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&Lc(e),null;case 13:return M_(t,e,n);case 4:return Yh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Si(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),nm(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ue(qa,r._currentValue),r._currentValue=o,s!==null)if(jt(s.value,o)){if(s.children===i.children&&!ut.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=mn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Mc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Mc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,mi(e,n),i=Ct(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Dt(r,e.pendingProps),i=Dt(r.type,i),rm(t,e,r,i,n);case 15:return V_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Dt(r,i),Ea(t,e),e.tag=1,ct(r)?(t=!0,$a(e)):t=!1,mi(e,n),k_(e,r,i),Fc(e,r,i,n),zc(null,e,r,!0,t,n);case 19:return b_(t,e,n);case 22:return x_(t,e,n)}throw Error(F(156,e.tag))};function Z_(t,e){return Cy(t,e)}function _I(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function It(t,e,n,r){return new _I(t,e,n,r)}function dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vI(t){if(typeof t=="function")return dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Dh)return 11;if(t===Vh)return 14}return 2}function Qn(t,e){var n=t.alternate;return n===null?(n=It(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ia(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ei:return Cr(n.children,i,s,e);case Nh:o=8,i|=8;break;case lc:return t=It(12,n,e,i|2),t.elementType=lc,t.lanes=s,t;case uc:return t=It(13,n,e,i),t.elementType=uc,t.lanes=s,t;case cc:return t=It(19,n,e,i),t.elementType=cc,t.lanes=s,t;case uy:return Ol(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ay:o=10;break e;case ly:o=9;break e;case Dh:o=11;break e;case Vh:o=14;break e;case Vn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=It(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cr(t,e,n,r){return t=It(7,t,r,e),t.lanes=n,t}function Ol(t,e,n,r){return t=It(22,t,r,e),t.elementType=uy,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=It(6,t,null,e),t.lanes=n,t}function Qu(t,e,n){return e=It(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function EI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ku(0),this.expirationTimes=ku(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ku(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fd(t,e,n,r,i,s,o,l,u){return t=new EI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=It(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xh(s),t}function wI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ev(t){if(!t)return nr;t=t._reactInternals;e:{if(Ur(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(ct(n))return e_(t,n,e)}return e}function tv(t,e,n,r,i,s,o,l,u){return t=fd(n,r,!0,t,i,s,o,l,u),t.context=ev(null),n=t.current,r=rt(),i=Gn(n),s=mn(r,i),s.callback=e??null,qn(n,s,i),t.current.lanes=i,co(t,i,r),ht(t,r),t}function Ll(t,e,n,r){var i=e.current,s=rt(),o=Gn(i);return n=ev(n),e.context===null?e.context=n:e.pendingContext=n,e=mn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=qn(i,e,o),t!==null&&(Ft(t,i,o,s),ya(t,i,o)),o}function nl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function mm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pd(t,e){mm(t,e),(t=t.alternate)&&mm(t,e)}function TI(){return null}var nv=typeof reportError=="function"?reportError:function(t){console.error(t)};function md(t){this._internalRoot=t}Ml.prototype.render=md.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ll(t,e,null,null)};Ml.prototype.unmount=md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Vr(function(){Ll(null,t,null,null)}),e[_n]=null}};function Ml(t){this._internalRoot=t}Ml.prototype.unstable_scheduleHydration=function(t){if(t){var e=xy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<On.length&&e!==0&&e<On[n].priority;n++);On.splice(n,0,t),n===0&&Ly(t)}};function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function gm(){}function II(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=nl(o);s.call(h)}}var o=tv(e,r,t,0,null,!1,!1,"",gm);return t._reactRootContainer=o,t[_n]=o.current,Hs(t.nodeType===8?t.parentNode:t),Vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=nl(u);l.call(h)}}var u=fd(t,0,!1,null,null,!1,!1,"",gm);return t._reactRootContainer=u,t[_n]=u.current,Hs(t.nodeType===8?t.parentNode:t),Vr(function(){Ll(e,u,n,r)}),u}function Fl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=nl(o);l.call(u)}}Ll(e,o,t,i)}else o=II(n,e,t,i,r);return nl(o)}Dy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=gs(e.pendingLanes);n!==0&&(Lh(e,n|1),ht(e,Se()),!(re&6)&&(Ri=Se()+500,hr()))}break;case 13:Vr(function(){var r=vn(t,1);if(r!==null){var i=rt();Ft(r,t,1,i)}}),pd(t,1)}};Mh=function(t){if(t.tag===13){var e=vn(t,134217728);if(e!==null){var n=rt();Ft(e,t,134217728,n)}pd(t,134217728)}};Vy=function(t){if(t.tag===13){var e=Gn(t),n=vn(t,e);if(n!==null){var r=rt();Ft(n,t,e,r)}pd(t,e)}};xy=function(){return oe};Oy=function(t,e){var n=oe;try{return oe=t,e()}finally{oe=n}};Ec=function(t,e,n){switch(e){case"input":if(fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Pl(r);if(!i)throw Error(F(90));hy(r),fc(r,i)}}}break;case"textarea":fy(t,n);break;case"select":e=n.value,e!=null&&hi(t,!!n.multiple,e,!1)}};Ey=ud;wy=Vr;var SI={usingClientEntryPoint:!1,Events:[fo,ii,Pl,_y,vy,ud]},fs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AI={bundleType:fs.bundleType,version:fs.version,rendererPackageName:fs.rendererPackageName,rendererConfig:fs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sy(t),t===null?null:t.stateNode},findFiberByHostInstance:fs.findFiberByHostInstance||TI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{Sl=sa.inject(AI),Wt=sa}catch{}}yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SI;yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gd(e))throw Error(F(200));return wI(t,e,null,n)};yt.createRoot=function(t,e){if(!gd(t))throw Error(F(299));var n=!1,r="",i=nv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fd(t,1,!1,null,null,n,!1,r,i),t[_n]=e.current,Hs(t.nodeType===8?t.parentNode:t),new md(e)};yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Sy(e),t=t===null?null:t.stateNode,t};yt.flushSync=function(t){return Vr(t)};yt.hydrate=function(t,e,n){if(!bl(e))throw Error(F(200));return Fl(null,t,e,!0,n)};yt.hydrateRoot=function(t,e,n){if(!gd(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=nv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=tv(e,null,t,1,n??null,i,!1,s,o),t[_n]=e.current,Hs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Ml(e)};yt.render=function(t,e,n){if(!bl(e))throw Error(F(200));return Fl(null,t,e,!1,n)};yt.unmountComponentAtNode=function(t){if(!bl(t))throw Error(F(40));return t._reactRootContainer?(Vr(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[_n]=null})}),!0):!1};yt.unstable_batchedUpdates=ud;yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Fl(t,e,n,!1,r)};yt.version="18.3.1-next-f1338f8080-20240426";function rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rv)}catch(t){console.error(t)}}rv(),ry.exports=yt;var CI=ry.exports,iv,ym=CI;iv=ym.createRoot,ym.hydrateRoot;const RI=()=>{};var _m={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},ov={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,o||(y=64)),r.push(n[f],n[g],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new kI;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),g!==64){const k=h<<6&192|g;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const NI=function(t){const e=sv(t);return ov.encodeByteArray(e,!0)},rl=function(t){return NI(t).replace(/\./g,"")},av=function(t){try{return ov.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=()=>DI().__FIREBASE_DEFAULTS__,xI=()=>{if(typeof process>"u"||typeof _m>"u")return;const t=_m.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},OI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&av(t[1]);return e&&JSON.parse(e)},Ul=()=>{try{return RI()||VI()||xI()||OI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},lv=t=>{var e,n;return(n=(e=Ul())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},LI=t=>{const e=lv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uv=()=>{var t;return(t=Ul())===null||t===void 0?void 0:t.config},cv=t=>{var e;return(e=Ul())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mo(t){return t.endsWith(".cloudworkstations.dev")}async function hv(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[rl(JSON.stringify(n)),rl(JSON.stringify(o)),""].join(".")}const Ns={};function FI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ns))Ns[e]?t.emulator.push(e):t.prod.push(e);return t}function UI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let vm=!1;function dv(t,e){if(typeof window>"u"||typeof document>"u"||!mo(window.location.host)||Ns[t]===e||Ns[t]||vm)return;Ns[t]=e;function n(y){return`__firebase__banner__${y}`}const r="__firebase__banner",s=FI().prod.length>0;function o(){const y=document.getElementById(r);y&&y.remove()}function l(y){y.style.display="flex",y.style.background="#7faaf0",y.style.position="fixed",y.style.bottom="5px",y.style.left="5px",y.style.padding=".5em",y.style.borderRadius="5px",y.style.alignItems="center"}function u(y,A){y.setAttribute("width","24"),y.setAttribute("id",A),y.setAttribute("height","24"),y.setAttribute("viewBox","0 0 24 24"),y.setAttribute("fill","none"),y.style.marginLeft="-6px"}function h(){const y=document.createElement("span");return y.style.cursor="pointer",y.style.marginLeft="16px",y.style.fontSize="24px",y.innerHTML=" &times;",y.onclick=()=>{vm=!0,o()},y}function f(y,A){y.setAttribute("id",A),y.innerText="Learn more",y.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",y.setAttribute("target","__blank"),y.style.paddingLeft="5px",y.style.textDecoration="underline"}function g(){const y=UI(r),A=n("text"),k=document.getElementById(A)||document.createElement("span"),D=n("learnmore"),M=document.getElementById(D)||document.createElement("a"),I=n("preprendIcon"),v=document.getElementById(I)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(y.created){const S=y.element;l(S),f(M,D);const V=h();u(v,I),S.append(v,k,M,V),document.body.appendChild(S)}s?(k.innerText="Preview backend disconnected.",v.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(v.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function zI(){var t;const e=(t=Ul())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function $I(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qI(){return!zI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KI(){try{return typeof indexedDB=="object"}catch{return!1}}function GI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QI="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QI,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,go.prototype.create)}}class go{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?XI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Cn(i,l,r)}}function XI(t,e){return t.replace(YI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;function JI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Em(s)&&Em(o)){if(!xr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Em(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ZI(t,e){const n=new e1(t,e);return n.subscribe.bind(n)}class e1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");t1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function t1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class Or{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i1(e))try{this.getOrInitializeService({instanceIdentifier:vr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vr){return this.instances.has(e)}getOptions(e=vr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:r1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vr){return this.component?this.component.multipleInstances?e:vr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function r1(t){return t===vr?void 0:t}function i1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new n1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const o1={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},a1=ee.INFO,l1={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},u1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=l1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yd{constructor(e){this.name=e,this._logLevel=a1,this._logHandler=u1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?o1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const c1=(t,e)=>e.some(n=>t instanceof n);let wm,Tm;function h1(){return wm||(wm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function d1(){return Tm||(Tm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const fv=new WeakMap,Zc=new WeakMap,pv=new WeakMap,Yu=new WeakMap,_d=new WeakMap;function f1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Xn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&fv.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function p1(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||pv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Xn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function m1(t){eh=t(eh)}function g1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ju(this),e,...n);return pv.set(r,e.sort?e.sort():[e]),Xn(r)}:d1().includes(t)?function(...e){return t.apply(Ju(this),e),Xn(fv.get(this))}:function(...e){return Xn(t.apply(Ju(this),e))}}function y1(t){return typeof t=="function"?g1(t):(t instanceof IDBTransaction&&p1(t),c1(t,h1())?new Proxy(t,eh):t)}function Xn(t){if(t instanceof IDBRequest)return f1(t);if(Yu.has(t))return Yu.get(t);const e=y1(t);return e!==t&&(Yu.set(t,e),_d.set(e,t)),e}const Ju=t=>_d.get(t);function _1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Xn(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Xn(o.result),u.oldVersion,u.newVersion,Xn(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const v1=["get","getKey","getAll","getAllKeys","count"],E1=["put","add","delete","clear"],Zu=new Map;function Im(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=E1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v1.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Zu.set(e,s),s}m1(t=>({...t,get:(e,n,r)=>Im(e,n)||t.get(e,n,r),has:(e,n)=>!!Im(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(T1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function T1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",Sm="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new yd("@firebase/app"),I1="@firebase/app-compat",S1="@firebase/analytics-compat",A1="@firebase/analytics",C1="@firebase/app-check-compat",R1="@firebase/app-check",P1="@firebase/auth",k1="@firebase/auth-compat",N1="@firebase/database",D1="@firebase/data-connect",V1="@firebase/database-compat",x1="@firebase/functions",O1="@firebase/functions-compat",L1="@firebase/installations",M1="@firebase/installations-compat",b1="@firebase/messaging",F1="@firebase/messaging-compat",U1="@firebase/performance",j1="@firebase/performance-compat",z1="@firebase/remote-config",B1="@firebase/remote-config-compat",$1="@firebase/storage",H1="@firebase/storage-compat",W1="@firebase/firestore",q1="@firebase/ai",K1="@firebase/firestore-compat",G1="firebase",Q1="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",X1={[th]:"fire-core",[I1]:"fire-core-compat",[A1]:"fire-analytics",[S1]:"fire-analytics-compat",[R1]:"fire-app-check",[C1]:"fire-app-check-compat",[P1]:"fire-auth",[k1]:"fire-auth-compat",[N1]:"fire-rtdb",[D1]:"fire-data-connect",[V1]:"fire-rtdb-compat",[x1]:"fire-fn",[O1]:"fire-fn-compat",[L1]:"fire-iid",[M1]:"fire-iid-compat",[b1]:"fire-fcm",[F1]:"fire-fcm-compat",[U1]:"fire-perf",[j1]:"fire-perf-compat",[z1]:"fire-rc",[B1]:"fire-rc-compat",[$1]:"fire-gcs",[H1]:"fire-gcs-compat",[W1]:"fire-fst",[K1]:"fire-fst-compat",[q1]:"fire-vertex","fire-js":"fire-js",[G1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map,Y1=new Map,rh=new Map;function Am(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pi(t){const e=t.name;if(rh.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,t);for(const n of il.values())Am(n,t);for(const n of Y1.values())Am(n,t);return!0}function vd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new go("app","Firebase",J1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Or("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=Q1;function mv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(n||(n=uv()),!n)throw Yn.create("no-options");const s=il.get(i);if(s){if(xr(n,s.options)&&xr(r,s.config))return s;throw Yn.create("duplicate-app",{appName:i})}const o=new s1(i);for(const u of rh.values())o.addComponent(u);const l=new Z1(n,r,o);return il.set(i,l),l}function gv(t=nh){const e=il.get(t);if(!e&&t===nh&&uv())return mv();if(!e)throw Yn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let i=(r=X1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Pi(new Or(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="firebase-heartbeat-database",tS=1,Zs="firebase-heartbeat-store";let ec=null;function yv(){return ec||(ec=_1(eS,tS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),ec}async function nS(t){try{const n=(await yv()).transaction(Zs),r=await n.objectStore(Zs).get(_v(t));return await n.done,r}catch(e){if(e instanceof Cn)wn.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Cm(t,e){try{const r=(await yv()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,_v(t)),await r.done}catch(n){if(n instanceof Cn)wn.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function _v(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rS=1024,iS=30;class sS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Rm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>iS){const o=lS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Rm(),{heartbeatsToSend:r,unsentEntries:i}=oS(this._heartbeatsCache.heartbeats),s=rl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return wn.warn(n),""}}}function Rm(){return new Date().toISOString().substring(0,10)}function oS(t,e=rS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KI()?GI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Pm(t){return rl(JSON.stringify({version:2,heartbeats:t})).length}function lS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(t){Pi(new Or("platform-logger",e=>new w1(e),"PRIVATE")),Pi(new Or("heartbeat",e=>new sS(e),"PRIVATE")),Jn(th,Sm,t),Jn(th,Sm,"esm2017"),Jn("fire-js","")}uS("");var cS="firebase",hS="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(cS,hS,"app");var km=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,vv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(w,C,P){for(var T=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)T[Ze-2]=arguments[Ze];return m.prototype[C].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var w=Array(16);if(typeof m=="string")for(var C=0;16>C;++C)w[C]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(C=0;16>C;++C)w[C]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],C=E.g[2];var P=E.g[3],T=m+(P^_&(C^P))+w[0]+3614090360&4294967295;m=_+(T<<7&4294967295|T>>>25),T=P+(C^m&(_^C))+w[1]+3905402710&4294967295,P=m+(T<<12&4294967295|T>>>20),T=C+(_^P&(m^_))+w[2]+606105819&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(m^C&(P^m))+w[3]+3250441966&4294967295,_=C+(T<<22&4294967295|T>>>10),T=m+(P^_&(C^P))+w[4]+4118548399&4294967295,m=_+(T<<7&4294967295|T>>>25),T=P+(C^m&(_^C))+w[5]+1200080426&4294967295,P=m+(T<<12&4294967295|T>>>20),T=C+(_^P&(m^_))+w[6]+2821735955&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(m^C&(P^m))+w[7]+4249261313&4294967295,_=C+(T<<22&4294967295|T>>>10),T=m+(P^_&(C^P))+w[8]+1770035416&4294967295,m=_+(T<<7&4294967295|T>>>25),T=P+(C^m&(_^C))+w[9]+2336552879&4294967295,P=m+(T<<12&4294967295|T>>>20),T=C+(_^P&(m^_))+w[10]+4294925233&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(m^C&(P^m))+w[11]+2304563134&4294967295,_=C+(T<<22&4294967295|T>>>10),T=m+(P^_&(C^P))+w[12]+1804603682&4294967295,m=_+(T<<7&4294967295|T>>>25),T=P+(C^m&(_^C))+w[13]+4254626195&4294967295,P=m+(T<<12&4294967295|T>>>20),T=C+(_^P&(m^_))+w[14]+2792965006&4294967295,C=P+(T<<17&4294967295|T>>>15),T=_+(m^C&(P^m))+w[15]+1236535329&4294967295,_=C+(T<<22&4294967295|T>>>10),T=m+(C^P&(_^C))+w[1]+4129170786&4294967295,m=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(m^_))+w[6]+3225465664&4294967295,P=m+(T<<9&4294967295|T>>>23),T=C+(m^_&(P^m))+w[11]+643717713&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^m&(C^P))+w[0]+3921069994&4294967295,_=C+(T<<20&4294967295|T>>>12),T=m+(C^P&(_^C))+w[5]+3593408605&4294967295,m=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(m^_))+w[10]+38016083&4294967295,P=m+(T<<9&4294967295|T>>>23),T=C+(m^_&(P^m))+w[15]+3634488961&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^m&(C^P))+w[4]+3889429448&4294967295,_=C+(T<<20&4294967295|T>>>12),T=m+(C^P&(_^C))+w[9]+568446438&4294967295,m=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(m^_))+w[14]+3275163606&4294967295,P=m+(T<<9&4294967295|T>>>23),T=C+(m^_&(P^m))+w[3]+4107603335&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^m&(C^P))+w[8]+1163531501&4294967295,_=C+(T<<20&4294967295|T>>>12),T=m+(C^P&(_^C))+w[13]+2850285829&4294967295,m=_+(T<<5&4294967295|T>>>27),T=P+(_^C&(m^_))+w[2]+4243563512&4294967295,P=m+(T<<9&4294967295|T>>>23),T=C+(m^_&(P^m))+w[7]+1735328473&4294967295,C=P+(T<<14&4294967295|T>>>18),T=_+(P^m&(C^P))+w[12]+2368359562&4294967295,_=C+(T<<20&4294967295|T>>>12),T=m+(_^C^P)+w[5]+4294588738&4294967295,m=_+(T<<4&4294967295|T>>>28),T=P+(m^_^C)+w[8]+2272392833&4294967295,P=m+(T<<11&4294967295|T>>>21),T=C+(P^m^_)+w[11]+1839030562&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^m)+w[14]+4259657740&4294967295,_=C+(T<<23&4294967295|T>>>9),T=m+(_^C^P)+w[1]+2763975236&4294967295,m=_+(T<<4&4294967295|T>>>28),T=P+(m^_^C)+w[4]+1272893353&4294967295,P=m+(T<<11&4294967295|T>>>21),T=C+(P^m^_)+w[7]+4139469664&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^m)+w[10]+3200236656&4294967295,_=C+(T<<23&4294967295|T>>>9),T=m+(_^C^P)+w[13]+681279174&4294967295,m=_+(T<<4&4294967295|T>>>28),T=P+(m^_^C)+w[0]+3936430074&4294967295,P=m+(T<<11&4294967295|T>>>21),T=C+(P^m^_)+w[3]+3572445317&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^m)+w[6]+76029189&4294967295,_=C+(T<<23&4294967295|T>>>9),T=m+(_^C^P)+w[9]+3654602809&4294967295,m=_+(T<<4&4294967295|T>>>28),T=P+(m^_^C)+w[12]+3873151461&4294967295,P=m+(T<<11&4294967295|T>>>21),T=C+(P^m^_)+w[15]+530742520&4294967295,C=P+(T<<16&4294967295|T>>>16),T=_+(C^P^m)+w[2]+3299628645&4294967295,_=C+(T<<23&4294967295|T>>>9),T=m+(C^(_|~P))+w[0]+4096336452&4294967295,m=_+(T<<6&4294967295|T>>>26),T=P+(_^(m|~C))+w[7]+1126891415&4294967295,P=m+(T<<10&4294967295|T>>>22),T=C+(m^(P|~_))+w[14]+2878612391&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~m))+w[5]+4237533241&4294967295,_=C+(T<<21&4294967295|T>>>11),T=m+(C^(_|~P))+w[12]+1700485571&4294967295,m=_+(T<<6&4294967295|T>>>26),T=P+(_^(m|~C))+w[3]+2399980690&4294967295,P=m+(T<<10&4294967295|T>>>22),T=C+(m^(P|~_))+w[10]+4293915773&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~m))+w[1]+2240044497&4294967295,_=C+(T<<21&4294967295|T>>>11),T=m+(C^(_|~P))+w[8]+1873313359&4294967295,m=_+(T<<6&4294967295|T>>>26),T=P+(_^(m|~C))+w[15]+4264355552&4294967295,P=m+(T<<10&4294967295|T>>>22),T=C+(m^(P|~_))+w[6]+2734768916&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~m))+w[13]+1309151649&4294967295,_=C+(T<<21&4294967295|T>>>11),T=m+(C^(_|~P))+w[4]+4149444226&4294967295,m=_+(T<<6&4294967295|T>>>26),T=P+(_^(m|~C))+w[11]+3174756917&4294967295,P=m+(T<<10&4294967295|T>>>22),T=C+(m^(P|~_))+w[2]+718787259&4294967295,C=P+(T<<15&4294967295|T>>>17),T=_+(P^(C|~m))+w[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(C+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+C&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,w=this.B,C=this.h,P=0;P<m;){if(C==0)for(;P<=_;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<m;)if(w[C++]=E.charCodeAt(P++),C==this.blockSize){i(this,w),C=0;break}}else for(;P<m;)if(w[C++]=E[P++],C==this.blockSize){i(this,w),C=0;break}}this.h=C,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var w=0;32>w;w+=8)E[_++]=this.g[m]>>>w&255;return E};function s(E,m){var _=l;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function o(E,m){this.h=m;for(var _=[],w=!0,C=E.length-1;0<=C;C--){var P=E[C]|0;w&&P==m||(_[C]=P,w=!1)}this.g=_}var l={};function u(E){return-128<=E&&128>E?s(E,function(m){return new o([m|0],0>m?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return g;if(0>E)return M(h(-E));for(var m=[],_=1,w=0;E>=_;w++)m[w]=E/_|0,_*=4294967296;return new o(m,0)}function f(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return M(f(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(m,8)),w=g,C=0;C<E.length;C+=8){var P=Math.min(8,E.length-C),T=parseInt(E.substring(C,C+P),m);8>P?(P=h(Math.pow(m,P)),w=w.j(P).add(h(T))):(w=w.j(_),w=w.add(h(T)))}return w}var g=u(0),y=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-M(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var w=this.i(_);E+=(0<=w?w:4294967296+w)*m,m*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(D(this))return"-"+M(this).toString(E);for(var m=h(Math.pow(E,6)),_=this,w="";;){var C=V(_,m).g;_=I(_,C.j(m));var P=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=C,k(_))return P+w;for(;6>P.length;)P="0"+P;w=P+w}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function D(E){return E.h==-1}t.l=function(E){return E=I(this,E),D(E)?-1:k(E)?0:1};function M(E){for(var m=E.g.length,_=[],w=0;w<m;w++)_[w]=~E.g[w];return new o(_,~E.h).add(y)}t.abs=function(){return D(this)?M(this):this},t.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],w=0,C=0;C<=m;C++){var P=w+(this.i(C)&65535)+(E.i(C)&65535),T=(P>>>16)+(this.i(C)>>>16)+(E.i(C)>>>16);w=T>>>16,P&=65535,T&=65535,_[C]=T<<16|P}return new o(_,_[_.length-1]&-2147483648?-1:0)};function I(E,m){return E.add(M(m))}t.j=function(E){if(k(this)||k(E))return g;if(D(this))return D(E)?M(this).j(M(E)):M(M(this).j(E));if(D(E))return M(this.j(M(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],w=0;w<2*m;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(var C=0;C<E.g.length;C++){var P=this.i(w)>>>16,T=this.i(w)&65535,Ze=E.i(C)>>>16,dr=E.i(C)&65535;_[2*w+2*C]+=T*dr,v(_,2*w+2*C),_[2*w+2*C+1]+=P*dr,v(_,2*w+2*C+1),_[2*w+2*C+1]+=T*Ze,v(_,2*w+2*C+1),_[2*w+2*C+2]+=P*Ze,v(_,2*w+2*C+2)}for(w=0;w<m;w++)_[w]=_[2*w+1]<<16|_[2*w];for(w=m;w<2*m;w++)_[w]=0;return new o(_,0)};function v(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function S(E,m){this.g=E,this.h=m}function V(E,m){if(k(m))throw Error("division by zero");if(k(E))return new S(g,g);if(D(E))return m=V(M(E),m),new S(M(m.g),M(m.h));if(D(m))return m=V(E,M(m)),new S(M(m.g),m.h);if(30<E.g.length){if(D(E)||D(m))throw Error("slowDivide_ only works with positive integers.");for(var _=y,w=m;0>=w.l(E);)_=O(_),w=O(w);var C=L(_,1),P=L(w,1);for(w=L(w,2),_=L(_,2);!k(w);){var T=P.add(w);0>=T.l(E)&&(C=C.add(_),P=T),w=L(w,1),_=L(_,1)}return m=I(E,C.j(m)),new S(C,m)}for(C=g;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),P=h(_),T=P.j(m);D(T)||0<T.l(E);)_-=w,P=h(_),T=P.j(m);k(P)&&(P=y),C=C.add(P),E=I(E,T)}return new S(C,E)}t.A=function(E){return V(this,E).h},t.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)&E.i(w);return new o(_,this.h&E.h)},t.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)|E.i(w);return new o(_,this.h|E.h)},t.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],w=0;w<m;w++)_[w]=this.i(w)^E.i(w);return new o(_,this.h^E.h)};function O(E){for(var m=E.g.length+1,_=[],w=0;w<m;w++)_[w]=E.i(w)<<1|E.i(w-1)>>>31;return new o(_,E.h)}function L(E,m){var _=m>>5;m%=32;for(var w=E.g.length-_,C=[],P=0;P<w;P++)C[P]=0<m?E.i(P+_)>>>m|E.i(P+_+1)<<32-m:E.i(P+_);return new o(C,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vv=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Zn=o}).apply(typeof km<"u"?km:typeof self<"u"?self:typeof window<"u"?window:{});var oa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ev,_s,wv,Sa,ih,Tv,Iv,Sv;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof oa=="object"&&oa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var R=a[p];if(!(R in d))break e;d=d[R]}a=a[a.length-1],p=d[a],c=c(p),c!=p&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,p=!1,R={next:function(){if(!p&&d<a.length){var N=d++;return{value:c(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function g(a,c,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),a.apply(c,R)}}return function(){return a.apply(c,arguments)}}function y(a,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,y.apply(null,arguments)}function A(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function k(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,R,N){for(var U=Array(arguments.length-2),le=2;le<arguments.length;le++)U[le-2]=arguments[le];return c.prototype[R].apply(p,U)}}function D(a){const c=a.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=a[p];return d}return[]}function M(a,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=a.length||0,N=p.length||0;a.length=R+N;for(let U=0;U<N;U++)a[R+U]=p[U]}else a.push(p)}}class I{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(a){return/^[\s\xa0]*$/.test(a)}function S(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function V(a){return V[" "](a),a}V[" "]=function(){};var O=S().indexOf("Gecko")!=-1&&!(S().toLowerCase().indexOf("webkit")!=-1&&S().indexOf("Edge")==-1)&&!(S().indexOf("Trident")!=-1||S().indexOf("MSIE")!=-1)&&S().indexOf("Edge")==-1;function L(a,c,d){for(const p in a)c.call(d,a[p],p,a)}function E(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function m(a){const c={};for(const d in a)c[d]=a[d];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(a,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)a[d]=p[d];for(let N=0;N<_.length;N++)d=_[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function C(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=K;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,d){const p=dr.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var dr=new I(()=>new qi,a=>a.reset());class qi{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,j=!1,K=new Ze,Y=()=>{const a=l.Promise.resolve(void 0);Zt=()=>{a.then(pe)}};var pe=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=dr;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}j=!1};function ae(){this.s=this.s,this.C=this.C}ae.prototype.s=!1,ae.prototype.ma=function(){this.s||(this.s=!0,this.N())},ae.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var en=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function tn(a,c){if(Te.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(O){e:{try{V(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:nn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&tn.aa.h.call(this)}}k(tn,Te);var nn={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var rn="closure_listenable_"+(1e6*Math.random()|0),Sw=0;function Aw(a,c,d,p,R){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++Sw,this.da=this.fa=!1}function Ao(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Co(a){this.src=a,this.g={},this.h=0}Co.prototype.add=function(a,c,d,p,R){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=nu(a,c,p,R);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new Aw(c,this.src,N,!!p,R),c.fa=d,a.push(c)),c};function tu(a,c){var d=c.type;if(d in a.g){var p=a.g[d],R=Array.prototype.indexOf.call(p,c,void 0),N;(N=0<=R)&&Array.prototype.splice.call(p,R,1),N&&(Ao(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function nu(a,c,d,p){for(var R=0;R<a.length;++R){var N=a[R];if(!N.da&&N.listener==c&&N.capture==!!d&&N.ha==p)return R}return-1}var ru="closure_lm_"+(1e6*Math.random()|0),iu={};function cf(a,c,d,p,R){if(Array.isArray(c)){for(var N=0;N<c.length;N++)cf(a,c[N],d,p,R);return null}return d=ff(d),a&&a[rn]?a.K(c,d,h(p)?!!p.capture:!1,R):Cw(a,c,d,!1,p,R)}function Cw(a,c,d,p,R,N){if(!c)throw Error("Invalid event type");var U=h(R)?!!R.capture:!!R,le=ou(a);if(le||(a[ru]=le=new Co(a)),d=le.add(c,d,p,U,N),d.proxy)return d;if(p=Rw(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)en||(R=U),R===void 0&&(R=!1),a.addEventListener(c.toString(),p,R);else if(a.attachEvent)a.attachEvent(df(c.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Rw(){function a(d){return c.call(a.src,a.listener,d)}const c=Pw;return a}function hf(a,c,d,p,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)hf(a,c[N],d,p,R);else p=h(p)?!!p.capture:!!p,d=ff(d),a&&a[rn]?(a=a.i,c=String(c).toString(),c in a.g&&(N=a.g[c],d=nu(N,d,p,R),-1<d&&(Ao(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[c],a.h--)))):a&&(a=ou(a))&&(c=a.g[c.toString()],a=-1,c&&(a=nu(c,d,p,R)),(d=-1<a?c[a]:null)&&su(d))}function su(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[rn])tu(c.i,a);else{var d=a.type,p=a.proxy;c.removeEventListener?c.removeEventListener(d,p,a.capture):c.detachEvent?c.detachEvent(df(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=ou(c))?(tu(d,a),d.h==0&&(d.src=null,c[ru]=null)):Ao(a)}}}function df(a){return a in iu?iu[a]:iu[a]="on"+a}function Pw(a,c){if(a.da)a=!0;else{c=new tn(c,this);var d=a.listener,p=a.ha||a.src;a.fa&&su(a),a=d.call(p,c)}return a}function ou(a){return a=a[ru],a instanceof Co?a:null}var au="__closure_events_fn_"+(1e9*Math.random()>>>0);function ff(a){return typeof a=="function"?a:(a[au]||(a[au]=function(c){return a.handleEvent(c)}),a[au])}function Be(){ae.call(this),this.i=new Co(this),this.M=this,this.F=null}k(Be,ae),Be.prototype[rn]=!0,Be.prototype.removeEventListener=function(a,c,d,p){hf(this,a,c,d,p)};function et(a,c){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=c.type||c,typeof c=="string")c=new Te(c,a);else if(c instanceof Te)c.target=c.target||a;else{var R=c;c=new Te(p,a),w(c,R)}if(R=!0,d)for(var N=d.length-1;0<=N;N--){var U=c.g=d[N];R=Ro(U,p,!0,c)&&R}if(U=c.g=a,R=Ro(U,p,!0,c)&&R,R=Ro(U,p,!1,c)&&R,d)for(N=0;N<d.length;N++)U=c.g=d[N],R=Ro(U,p,!1,c)&&R}Be.prototype.N=function(){if(Be.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],p=0;p<d.length;p++)Ao(d[p]);delete a.g[c],a.h--}}this.F=null},Be.prototype.K=function(a,c,d,p){return this.i.add(String(a),c,!1,d,p)},Be.prototype.L=function(a,c,d,p){return this.i.add(String(a),c,!0,d,p)};function Ro(a,c,d,p){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,N=0;N<c.length;++N){var U=c[N];if(U&&!U.da&&U.capture==d){var le=U.listener,Le=U.ha||U.src;U.fa&&tu(a.i,U),R=le.call(Le,p)!==!1&&R}}return R&&!p.defaultPrevented}function pf(a,c,d){if(typeof a=="function")d&&(a=y(a,d));else if(a&&typeof a.handleEvent=="function")a=y(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function mf(a){a.g=pf(()=>{a.g=null,a.i&&(a.i=!1,mf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class kw extends ae{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:mf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(a){ae.call(this),this.h=a,this.g={}}k(Ki,ae);var gf=[];function yf(a){L(a.g,function(c,d){this.g.hasOwnProperty(d)&&su(c)},a),a.g={}}Ki.prototype.N=function(){Ki.aa.N.call(this),yf(this)},Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lu=l.JSON.stringify,Nw=l.JSON.parse,Dw=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function uu(){}uu.prototype.h=null;function _f(a){return a.h||(a.h=a.i())}function vf(){}var Gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function cu(){Te.call(this,"d")}k(cu,Te);function hu(){Te.call(this,"c")}k(hu,Te);var fr={},Ef=null;function Po(){return Ef=Ef||new Be}fr.La="serverreachability";function wf(a){Te.call(this,fr.La,a)}k(wf,Te);function Qi(a){const c=Po();et(c,new wf(c))}fr.STAT_EVENT="statevent";function Tf(a,c){Te.call(this,fr.STAT_EVENT,a),this.stat=c}k(Tf,Te);function tt(a){const c=Po();et(c,new Tf(c,a))}fr.Ma="timingevent";function If(a,c){Te.call(this,fr.Ma,a),this.size=c}k(If,Te);function Xi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Yi(){this.g=!0}Yi.prototype.xa=function(){this.g=!1};function Vw(a,c,d,p,R,N){a.info(function(){if(a.g)if(N)for(var U="",le=N.split("&"),Le=0;Le<le.length;Le++){var ie=le[Le].split("=");if(1<ie.length){var $e=ie[0];ie=ie[1];var He=$e.split("_");U=2<=He.length&&He[1]=="type"?U+($e+"="+ie+"&"):U+($e+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+U})}function xw(a,c,d,p,R,N,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+N+" "+U})}function Hr(a,c,d,p){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+Lw(a,d)+(p?" "+p:"")})}function Ow(a,c){a.info(function(){return"TIMEOUT: "+c})}Yi.prototype.info=function(){};function Lw(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var N=R[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<R.length;U++)R[U]=""}}}}return lu(d)}catch{return c}}var ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Sf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},du;function No(){}k(No,uu),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},du=new No;function Rn(a,c,d,p){this.j=a,this.i=c,this.l=d,this.R=p||1,this.U=new Ki(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Af}function Af(){this.i=null,this.g="",this.h=!1}var Cf={},fu={};function pu(a,c,d){a.L=1,a.v=Oo(sn(c)),a.m=d,a.P=!0,Rf(a,null)}function Rf(a,c){a.F=Date.now(),Do(a),a.A=sn(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),zf(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Af,a.g=sp(a.j,d?c:null,!a.m),0<a.O&&(a.M=new kw(y(a.Y,a,a.g),a.O)),c=a.U,d=a.g,p=a.ca;var R="readystatechange";Array.isArray(R)||(R&&(gf[0]=R.toString()),R=gf);for(var N=0;N<R.length;N++){var U=cf(d,R[N],p||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?m(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),Qi(),Vw(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const c=this.M;c&&on(a)==3?c.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const He=on(this.g);var c=this.g.Ba();const Kr=this.g.Z();if(!(3>He)&&(He!=3||this.g&&(this.h.h||this.g.oa()||Gf(this.g)))){this.J||He!=4||c==7||(c==8||0>=Kr?Qi(3):Qi(2)),mu(this);var d=this.g.Z();this.X=d;t:if(Pf(this)){var p=Gf(this.g);a="";var R=p.length,N=on(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),Ji(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,a+=this.h.i.decode(p[c],{stream:!(N&&c==R-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,xw(this.i,this.u,this.A,this.l,this.R,He,d),this.o){if(this.T&&!this.K){t:{if(this.g){var le,Le=this.g;if((le=Le.g?Le.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(le)){var ie=le;break t}}ie=null}if(d=ie)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gu(this,d);else{this.o=!1,this.s=3,tt(12),pr(this),Ji(this);break e}}if(this.P){d=!0;let kt;for(;!this.J&&this.C<U.length;)if(kt=Mw(this,U),kt==fu){He==4&&(this.s=4,tt(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(kt==Cf){this.s=4,tt(15),Hr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,kt,null),gu(this,kt);if(Pf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),He!=4||U.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,U,"[Invalid Chunked Response]"),pr(this),Ji(this);else if(0<U.length&&!this.W){this.W=!0;var $e=this.j;$e.g==this&&$e.ba&&!$e.M&&($e.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Tu($e),$e.M=!0,tt(11))}}else Hr(this.i,this.l,U,null),gu(this,U);He==4&&pr(this),this.o&&!this.J&&(He==4?tp(this.j,this):(this.o=!1,Do(this)))}else Zw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),pr(this),Ji(this)}}}catch{}finally{}};function Pf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Mw(a,c){var d=a.C,p=c.indexOf(`
`,d);return p==-1?fu:(d=Number(c.substring(d,p)),isNaN(d)?Cf:(p+=1,p+d>c.length?fu:(c=c.slice(p,p+d),a.C=p+d,c)))}Rn.prototype.cancel=function(){this.J=!0,pr(this)};function Do(a){a.S=Date.now()+a.I,kf(a,a.I)}function kf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Xi(y(a.ba,a),c)}function mu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ow(this.i,this.A),this.L!=2&&(Qi(),tt(17)),pr(this),this.s=2,Ji(this)):kf(this,this.S-a)};function Ji(a){a.j.G==0||a.J||tp(a.j,a)}function pr(a){mu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,yf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function gu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||yu(d.h,a))){if(!a.K&&yu(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)jo(d),Fo(d);else break e;wu(d),tt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Xi(y(d.Za,d),6e3));if(1>=Vf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gr(d,11)}else if((a.K||d.g==a)&&jo(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let ie=R[c];if(d.T=ie[0],ie=ie[1],d.G==2)if(ie[0]=="c"){d.K=ie[1],d.ia=ie[2];const $e=ie[3];$e!=null&&(d.la=$e,d.j.info("VER="+d.la));const He=ie[4];He!=null&&(d.Aa=He,d.j.info("SVER="+d.Aa));const Kr=ie[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(p=1.5*Kr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const kt=a.g;if(kt){const Bo=kt.g?kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bo){var N=p.h;N.g||Bo.indexOf("spdy")==-1&&Bo.indexOf("quic")==-1&&Bo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(_u(N,N.h),N.h=null))}if(p.D){const Iu=kt.g?kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Iu&&(p.ya=Iu,ce(p.I,p.D,Iu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=a;if(p.qa=ip(p,p.J?p.ia:null,p.W),U.K){xf(p.h,U);var le=U,Le=p.L;Le&&(le.I=Le),le.B&&(mu(le),Do(le)),p.g=U}else Zf(p);0<d.i.length&&Uo(d)}else ie[0]!="stop"&&ie[0]!="close"||gr(d,7);else d.G==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?gr(d,7):Eu(d):ie[0]!="noop"&&d.l&&d.l.ta(ie),d.v=0)}}Qi(4)}catch{}}var bw=class{constructor(a,c){this.g=a,this.map=c}};function Nf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Df(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Vf(a){return a.h?1:a.g?a.g.size:0}function yu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function _u(a,c){a.g?a.g.add(c):a.h=c}function xf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Nf.prototype.cancel=function(){if(this.i=Of(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Of(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return D(a.i)}function Fw(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,p=0;p<d;p++)c.push(a[p]);return c}c=[],d=0;for(p in a)c[d++]=a[p];return c}function Uw(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const p in a)c[d++]=p;return c}}}function Lf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=Uw(a),p=Fw(a),R=p.length,N=0;N<R;N++)c.call(void 0,p[N],d&&d[N],a)}var Mf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jw(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),R=null;if(0<=p){var N=a[d].substring(0,p);R=a[d].substring(p+1)}else N=a[d];c(N,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function mr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof mr){this.h=a.h,Vo(this,a.j),this.o=a.o,this.g=a.g,xo(this,a.s),this.l=a.l;var c=a.i,d=new ts;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),bf(this,d),this.m=a.m}else a&&(c=String(a).match(Mf))?(this.h=!1,Vo(this,c[1]||"",!0),this.o=Zi(c[2]||""),this.g=Zi(c[3]||"",!0),xo(this,c[4]),this.l=Zi(c[5]||"",!0),bf(this,c[6]||"",!0),this.m=Zi(c[7]||"")):(this.h=!1,this.i=new ts(null,this.h))}mr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(es(c,Ff,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(es(c,Ff,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(es(d,d.charAt(0)=="/"?$w:Bw,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",es(d,Ww)),a.join("")};function sn(a){return new mr(a)}function Vo(a,c,d){a.j=d?Zi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function xo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function bf(a,c,d){c instanceof ts?(a.i=c,qw(a.i,a.h)):(d||(c=es(c,Hw)),a.i=new ts(c,a.h))}function ce(a,c,d){a.i.set(c,d)}function Oo(a){return ce(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Zi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function es(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,zw),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function zw(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ff=/[#\/\?@]/g,Bw=/[#\?:]/g,$w=/[#\?]/g,Hw=/[#\?@]/g,Ww=/#/g;function ts(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&jw(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ts.prototype,t.add=function(a,c){Pn(this),this.i=null,a=Wr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Uf(a,c){Pn(a),c=Wr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function jf(a,c){return Pn(a),c=Wr(a,c),a.g.has(c)}t.forEach=function(a,c){Pn(this),this.g.forEach(function(d,p){d.forEach(function(R){a.call(c,R,p,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=a[p];for(let N=0;N<R.length;N++)d.push(c[p])}return d},t.V=function(a){Pn(this);let c=[];if(typeof a=="string")jf(this,a)&&(c=c.concat(this.g.get(Wr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return Pn(this),this.i=null,a=Wr(this,a),jf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function zf(a,c,d){Uf(a,c),0<d.length&&(a.i=null,a.g.set(Wr(a,c),D(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var R=N;U[p]!==""&&(R+="="+encodeURIComponent(String(U[p]))),a.push(R)}}return this.i=a.join("&")};function Wr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function qw(a,c){c&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Uf(this,p),zf(this,R,d))},a)),a.j=c}function Kw(a,c){const d=new Yi;if(l.Image){const p=new Image;p.onload=A(kn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(kn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(kn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(kn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else c(!1)}function Gw(a,c){const d=new Yi,p=new AbortController,R=setTimeout(()=>{p.abort(),kn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(R),N.ok?kn(d,"TestPingServer: ok",!0,c):kn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),kn(d,"TestPingServer: error",!1,c)})}function kn(a,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function Qw(){this.g=new Dw}function Xw(a,c,d){const p=d||"";try{Lf(a,function(R,N){let U=R;h(R)&&(U=lu(R)),c.push(p+N+"="+encodeURIComponent(U))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function Lo(a){this.l=a.Ub||null,this.j=a.eb||!1}k(Lo,uu),Lo.prototype.g=function(){return new Mo(this.l,this.j)},Lo.prototype.i=function(a){return function(){return a}}({});function Mo(a,c){Be.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(Mo,Be),t=Mo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,rs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ns(this):rs(this),this.readyState==3&&Bf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ns(this))},t.Qa=function(a){this.g&&(this.response=a,ns(this))},t.ga=function(){this.g&&ns(this)};function ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,rs(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function rs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Mo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $f(a){let c="";return L(a,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function vu(a,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=$f(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ce(a,c,d))}function ve(a){Be.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(ve,Be);var Yw=/^https?$/i,Jw=["POST","PUT"];t=ve.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():du.g(),this.v=this.o?_f(this.o):_f(du),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){Hf(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),R=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Jw,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Kf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Hf(this,N)}};function Hf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Wf(a),bo(a)}function Wf(a){a.A||(a.A=!0,et(a,"complete"),et(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,et(this,"complete"),et(this,"abort"),bo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bo(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qf(this):this.bb())},t.bb=function(){qf(this)};function qf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||on(a)!=4||a.Z()!=2)){if(a.u&&on(a)==4)pf(a.Ea,0,a);else if(et(a,"readystatechange"),on(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=U===0){var R=String(a.D).match(Mf)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Yw.test(R?R.toLowerCase():"")}d=p}if(d)et(a,"complete"),et(a,"success");else{a.m=6;try{var N=2<on(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Wf(a)}}finally{bo(a)}}}}function bo(a,c){if(a.g){Kf(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||et(a,"ready");try{d.onreadystatechange=p}catch{}}}function Kf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function on(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<on(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Nw(c)}};function Gf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zw(a){const c={};a=(a.g&&2<=on(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(v(a[p]))continue;var d=C(a[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=c[R]||[];c[R]=N,N.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function is(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Qf(a){this.Aa=0,this.i=[],this.j=new Yi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=is("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=is("baseRetryDelayMs",5e3,a),this.cb=is("retryDelaySeedMs",1e4,a),this.Wa=is("forwardChannelMaxRetries",2,a),this.wa=is("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nf(a&&a.concurrentRequestLimit),this.Da=new Qw,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,p){tt(0),this.W=a,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=ip(this,null,this.W),Uo(this)};function Eu(a){if(Xf(a),a.G==3){var c=a.U++,d=sn(a.I);if(ce(d,"SID",a.K),ce(d,"RID",c),ce(d,"TYPE","terminate"),ss(a,d),c=new Rn(a,a.j,c),c.L=2,c.v=Oo(sn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=sp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Do(c)}rp(a)}function Fo(a){a.g&&(Tu(a),a.g.cancel(),a.g=null)}function Xf(a){Fo(a),a.u&&(l.clearTimeout(a.u),a.u=null),jo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Uo(a){if(!Df(a.h)&&!a.s){a.s=!0;var c=a.Ga;Zt||Y(),j||(Zt(),j=!0),K.add(c,a),a.B=0}}function e0(a,c){return Vf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Xi(y(a.Ga,a,c),np(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const R=new Rn(this,this.j,a);let N=this.o;if(this.S&&(N?(N=m(N),w(N,this.S)):N=this.S),this.m!==null||this.O||(R.H=N,N=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Jf(this,R,c),d=sn(this.I),ce(d,"RID",a),ce(d,"CVER",22),this.D&&ce(d,"X-HTTP-Session-Id",this.D),ss(this,d),N&&(this.O?c="headers="+encodeURIComponent(String($f(N)))+"&"+c:this.m&&vu(d,this.m,N)),_u(this.h,R),this.Ua&&ce(d,"TYPE","init"),this.P?(ce(d,"$req",c),ce(d,"SID","null"),R.T=!0,pu(R,d,null)):pu(R,d,c),this.G=2}}else this.G==3&&(a?Yf(this,a):this.i.length==0||Df(this.h)||Yf(this))};function Yf(a,c){var d;c?d=c.l:d=a.U++;const p=sn(a.I);ce(p,"SID",a.K),ce(p,"RID",d),ce(p,"AID",a.T),ss(a,p),a.m&&a.o&&vu(p,a.m,a.o),d=new Rn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Jf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),_u(a.h,d),pu(d,p,c)}function ss(a,c){a.H&&L(a.H,function(d,p){ce(c,p,d)}),a.l&&Lf({},function(d,p){ce(c,p,d)})}function Jf(a,c,d){d=Math.min(a.i.length,d);var p=a.l?y(a.l.Na,a.l,a):null;e:{var R=a.i;let N=-1;for(;;){const U=["count="+d];N==-1?0<d?(N=R[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let le=!0;for(let Le=0;Le<d;Le++){let ie=R[Le].g;const $e=R[Le].map;if(ie-=N,0>ie)N=Math.max(0,R[Le].g-100),le=!1;else try{Xw($e,U,"req"+ie+"_")}catch{p&&p($e)}}if(le){p=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,p}function Zf(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Zt||Y(),j||(Zt(),j=!0),K.add(c,a),a.v=0}}function wu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Xi(y(a.Fa,a),np(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ep(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Xi(y(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),Fo(this),ep(this))};function Tu(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ep(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=sn(a.qa);ce(c,"RID","rpc"),ce(c,"SID",a.K),ce(c,"AID",a.T),ce(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ce(c,"TO",a.ja),ce(c,"TYPE","xmlhttp"),ss(a,c),a.m&&a.o&&vu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Oo(sn(c)),d.m=null,d.P=!0,Rf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Fo(this),wu(this),tt(19))};function jo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function tp(a,c){var d=null;if(a.g==c){jo(a),Tu(a),a.g=null;var p=2}else if(yu(a.h,c))d=c.D,xf(a.h,c),p=1;else return;if(a.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=a.B;p=Po(),et(p,new If(p,d)),Uo(a)}else Zf(a);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&e0(a,c)||p==2&&wu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),R){case 1:gr(a,5);break;case 4:gr(a,10);break;case 3:gr(a,6);break;default:gr(a,2)}}}function np(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function gr(a,c){if(a.j.info("Error code "+c),c==2){var d=y(a.fb,a),p=a.Xa;const R=!p;p=new mr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Vo(p,"https"),Oo(p),R?Kw(p.toString(),d):Gw(p.toString(),d)}else tt(2);a.G=0,a.l&&a.l.sa(c),rp(a),Xf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function rp(a){if(a.G=0,a.ka=[],a.l){const c=Of(a.h);(c.length!=0||a.i.length!=0)&&(M(a.ka,c),M(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function ip(a,c,d){var p=d instanceof mr?sn(d):new mr(d);if(p.g!="")c&&(p.g=c+"."+p.g),xo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var N=new mr(null);p&&Vo(N,p),c&&(N.g=c),R&&xo(N,R),d&&(N.l=d),p=N}return d=a.D,c=a.ya,d&&c&&ce(p,d,c),ce(p,"VER",a.la),ss(a,p),p}function sp(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new ve(new Lo({eb:d})):new ve(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function op(){}t=op.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function zo(){}zo.prototype.g=function(a,c){return new dt(a,c)};function dt(a,c){Be.call(this),this.g=new Qf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!v(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new qr(this)}k(dt,Be),dt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dt.prototype.close=function(){Eu(this.g)},dt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=lu(a),a=d);c.i.push(new bw(c.Ya++,a)),c.G==3&&Uo(c)},dt.prototype.N=function(){this.g.l=null,delete this.j,Eu(this.g),delete this.g,dt.aa.N.call(this)};function ap(a){cu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}k(ap,cu);function lp(){hu.call(this),this.status=1}k(lp,hu);function qr(a){this.g=a}k(qr,op),qr.prototype.ua=function(){et(this.g,"a")},qr.prototype.ta=function(a){et(this.g,new ap(a))},qr.prototype.sa=function(a){et(this.g,new lp)},qr.prototype.ra=function(){et(this.g,"b")},zo.prototype.createWebChannel=zo.prototype.g,dt.prototype.send=dt.prototype.o,dt.prototype.open=dt.prototype.m,dt.prototype.close=dt.prototype.close,Sv=function(){return new zo},Iv=function(){return Po()},Tv=fr,ih={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,Sa=ko,Sf.COMPLETE="complete",wv=Sf,vf.EventType=Gi,Gi.OPEN="a",Gi.CLOSE="b",Gi.ERROR="c",Gi.MESSAGE="d",Be.prototype.listen=Be.prototype.K,_s=vf,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,Ev=ve}).apply(typeof oa<"u"?oa:typeof self<"u"?self:typeof window<"u"?window:{});const Nm="@firebase/firestore",Dm="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new yd("@firebase/firestore");function Qr(){return Lr.logLevel}function z(t,...e){if(Lr.logLevel<=ee.DEBUG){const n=e.map(Ed);Lr.debug(`Firestore (${zi}): ${t}`,...n)}}function Tn(t,...e){if(Lr.logLevel<=ee.ERROR){const n=e.map(Ed);Lr.error(`Firestore (${zi}): ${t}`,...n)}}function ki(t,...e){if(Lr.logLevel<=ee.WARN){const n=e.map(Ed);Lr.warn(`Firestore (${zi}): ${t}`,...n)}}function Ed(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Av(t,r,n)}function Av(t,e,n){let r=`FIRESTORE (${zi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Tn(r),new Error(r)}function se(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||Av(e,i,r)}function X(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class fS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pS{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){se(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new er,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new er)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string",31837,{l:r}),new Cv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string",2055,{h:e}),new Ge(e)}}class mS{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gS{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new mS(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Vm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yS{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){se(this.o===void 0,3512);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Vm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(se(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Vm(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _S(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=_S(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function sh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return J(r,i);{const s=Rv(),o=vS(s.encode(xm(t,n)),s.encode(xm(e,n)));return o!==0?o:J(r,i)}}n+=r>65535?2:1}return J(t.length,e.length)}function xm(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function vS(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return J(t[n],e[n]);return J(t.length,e.length)}function Ni(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=-62135596800,Lm=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Lm);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new $(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Om)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lm}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Om;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ne(0,0))}static max(){return new Q(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm="__name__";class $t{constructor(e,n,r){n===void 0?n=0:n>e.length&&W(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&W(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $t.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $t?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=$t.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return J(e.length,n.length)}static compareSegments(e,n){const r=$t.isNumericId(e),i=$t.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?$t.extractNumericId(e).compare($t.extractNumericId(n)):sh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zn.fromString(e.substring(4,e.length-2))}}class we extends $t{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const ES=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends $t{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return ES.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Mm}static keyField(){return new Fe([Mm])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new $(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new $(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new $(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new $(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(we.fromString(e))}static fromName(e){return new H(we.fromString(e).popFirst(5))}static empty(){return new H(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new we(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=-1;function wS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new rr(i,H.empty(),e)}function TS(t){return new rr(t.readTime,t.key,eo)}class rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rr(Q.min(),H.empty(),eo)}static max(){return new rr(Q.max(),H.empty(),eo)}}function IS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:J(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bi(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==SS)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&W(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new x((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof x?n:x.resolve(n)}catch(n){return x.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):x.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):x.reject(n)}static resolve(e){return new x((n,r)=>{n(e)})}static reject(e){return new x((n,r)=>{r(e)})}static waitFor(e){return new x((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=x.resolve(!1);for(const r of e)n=n.next(i=>i?x.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new x((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new x((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $i(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}jl.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd=-1;function zl(t){return t==null}function sl(t){return t===0&&1/t==-1/0}function RS(t){return typeof t=="number"&&Number.isInteger(t)&&!sl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kv="";function PS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=bm(e)),e=kS(t.get(n),e);return bm(e)}function kS(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case kv:n+="";break;default:n+=s}}return n}function bm(t){return t+kv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Nv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n){this.comparator=e,this.root=n||be.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,be.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new aa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new aa(this.root,e,this.comparator,!1)}getReverseIterator(){return new aa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new aa(this.root,e,this.comparator,!0)}}class aa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??be.EMPTY,this.right=s??be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw W(43730,{key:this.key,value:this.value});if(this.right.isRed())throw W(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw W(27949);return e+(this.isRed()?0:1)}}be.EMPTY=null,be.RED=!0,be.BLACK=!1;be.EMPTY=new class{constructor(){this.size=0}get key(){throw W(57766)}get value(){throw W(16141)}get color(){throw W(16727)}get left(){throw W(29726)}get right(){throw W(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new De(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ni(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Dv("Invalid base64 string: "+s):s}}(e);return new ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ze.EMPTY_BYTE_STRING=new ze("");const NS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ir(t){if(se(!!t,39018),typeof t=="string"){let e=0;const n=NS.exec(t);if(se(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ie(t.seconds),nanos:Ie(t.nanos)}}function Ie(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?ze.fromBase64String(t):ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv="server_timestamp",xv="__type__",Ov="__previous_value__",Lv="__local_write_time__";function Td(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[xv])===null||n===void 0?void 0:n.stringValue)===Vv}function Bl(t){const e=t.mapValue.fields[Ov];return Td(e)?Bl(e):e}function to(t){const e=ir(t.mapValue.fields[Lv].timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const ol="(default)";class no{constructor(e,n){this.projectId=e,this.database=n||ol}static empty(){return new no("","")}get isDefaultDatabase(){return this.database===ol}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="__type__",VS="__max__",la={mapValue:{}},bv="__vector__",al="value";function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Td(t)?4:OS(t)?9007199254740991:xS(t)?10:11:W(28295,{value:t})}function Xt(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=ir(i.timestampValue),l=ir(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return sr(i.bytesValue).isEqual(sr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ie(i.geoPointValue.latitude)===Ie(s.geoPointValue.latitude)&&Ie(i.geoPointValue.longitude)===Ie(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ie(i.integerValue)===Ie(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ie(i.doubleValue),l=Ie(s.doubleValue);return o===l?sl(o)===sl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Ni(t.arrayValue.values||[],e.arrayValue.values||[],Xt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Fm(o)!==Fm(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Xt(o[u],l[u])))return!1;return!0}(t,e);default:return W(52216,{left:t})}}function ro(t,e){return(t.values||[]).find(n=>Xt(n,e))!==void 0}function Di(t,e){if(t===e)return 0;const n=or(t),r=or(e);if(n!==r)return J(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ie(s.integerValue||s.doubleValue),u=Ie(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return jm(t.timestampValue,e.timestampValue);case 4:return jm(to(t),to(e));case 5:return sh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=sr(s),u=sr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=J(l[h],u[h]);if(f!==0)return f}return J(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=J(Ie(s.latitude),Ie(o.latitude));return l!==0?l:J(Ie(s.longitude),Ie(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return zm(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const g=s.fields||{},y=o.fields||{},A=(l=g[al])===null||l===void 0?void 0:l.arrayValue,k=(u=y[al])===null||u===void 0?void 0:u.arrayValue,D=J(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=k==null?void 0:k.values)===null||f===void 0?void 0:f.length)||0);return D!==0?D:zm(A,k)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===la.mapValue&&o===la.mapValue)return 0;if(s===la.mapValue)return 1;if(o===la.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const y=sh(u[g],f[g]);if(y!==0)return y;const A=Di(l[u[g]],h[f[g]]);if(A!==0)return A}return J(u.length,f.length)}(t.mapValue,e.mapValue);default:throw W(23264,{Pe:n})}}function jm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=ir(t),r=ir(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function zm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Di(n[i],r[i]);if(s)return s}return J(n.length,r.length)}function Vi(t){return oh(t)}function oh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=oh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${oh(n.fields[o])}`;return i+"}"}(t.mapValue):W(61005,{value:t})}function Aa(t){switch(or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bl(t);return e?16+Aa(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Aa(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return jr(r.fields,(s,o)=>{i+=s.length+Aa(o)}),i}(t.mapValue);default:throw W(13486,{value:t})}}function ah(t){return!!t&&"integerValue"in t}function Id(t){return!!t&&"arrayValue"in t}function Bm(t){return!!t&&"nullValue"in t}function $m(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ca(t){return!!t&&"mapValue"in t}function xS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mv])===null||n===void 0?void 0:n.stringValue)===bv}function Ds(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ds(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ds(t.arrayValue.values[n]);return e}return Object.assign({},t)}function OS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===VS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ca(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ds(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Ds(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ca(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Xt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ca(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){jr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Tt(Ds(this.value))}}function Fv(t){const e=[];return jr(t.fields,(n,r)=>{const i=new Fe([n]);if(Ca(r)){const s=Fv(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Xe(e,0,Q.min(),Q.min(),Q.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,i){return new Xe(e,1,n,Q.min(),r,i,0)}static newNoDocument(e,n){return new Xe(e,2,n,Q.min(),Q.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new Xe(e,3,n,Q.min(),Q.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,n){this.position=e,this.inclusive=n}}function Hm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Di(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Xt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n="asc"){this.field=e,this.dir=n}}function LS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{}class Pe extends Uv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new bS(e,n,r):n==="array-contains"?new jS(e,r):n==="in"?new zS(e,r):n==="not-in"?new BS(e,r):n==="array-contains-any"?new $S(e,r):new Pe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FS(e,r):new US(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Di(n,this.value)):n!==null&&or(this.value)===or(n)&&this.matchesComparison(Di(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yt extends Uv{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Yt(e,n)}matches(e){return jv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function jv(t){return t.op==="and"}function zv(t){return MS(t)&&jv(t)}function MS(t){for(const e of t.filters)if(e instanceof Yt)return!1;return!0}function lh(t){if(t instanceof Pe)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(zv(t))return t.filters.map(e=>lh(e)).join(",");{const e=t.filters.map(n=>lh(n)).join(",");return`${t.op}(${e})`}}function Bv(t,e){return t instanceof Pe?function(r,i){return i instanceof Pe&&r.op===i.op&&r.field.isEqual(i.field)&&Xt(r.value,i.value)}(t,e):t instanceof Yt?function(r,i){return i instanceof Yt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Bv(o,i.filters[l]),!0):!1}(t,e):void W(19439)}function $v(t){return t instanceof Pe?function(n){return`${n.field.canonicalString()} ${n.op} ${Vi(n.value)}`}(t):t instanceof Yt?function(n){return n.op.toString()+" {"+n.getFilters().map($v).join(" ,")+"}"}(t):"Filter"}class bS extends Pe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class FS extends Pe{constructor(e,n){super(e,"in",n),this.keys=Hv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class US extends Pe{constructor(e,n){super(e,"not-in",n),this.keys=Hv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Hv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class jS extends Pe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Id(n)&&ro(n.arrayValue,this.value)}}class zS extends Pe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class BS extends Pe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ro(this.value.arrayValue,n)}}class $S extends Pe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Id(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ro(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function qm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new HS(t,e,n,r,i,s,o)}function Sd(t){const e=X(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),zl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e.Ie=n}return e.Ie}function Ad(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!LS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Bv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wm(t.startAt,e.startAt)&&Wm(t.endAt,e.endAt)}function uh(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function WS(t,e,n,r,i,s,o,l){return new $l(t,e,n,r,i,s,o,l)}function Cd(t){return new $l(t)}function Km(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function qS(t){return t.collectionGroup!==null}function Vs(t){const e=X(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new De(Fe.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new ul(s,r))}),n.has(Fe.keyField().canonicalString())||e.Ee.push(new ul(Fe.keyField(),r))}return e.Ee}function Kt(t){const e=X(t);return e.de||(e.de=KS(e,Vs(t))),e.de}function KS(t,e){if(t.limitType==="F")return qm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ul(i.field,s)});const n=t.endAt?new ll(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ll(t.startAt.position,t.startAt.inclusive):null;return qm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ch(t,e,n){return new $l(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Hl(t,e){return Ad(Kt(t),Kt(e))&&t.limitType===e.limitType}function Wv(t){return`${Sd(Kt(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>$v(i)).join(", ")}]`),zl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Vi(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Vi(i)).join(",")),`Target(${r})`}(Kt(t))}; limitType=${t.limitType})`}function Wl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Vs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Hm(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Vs(r),i)||r.endAt&&!function(o,l,u){const h=Hm(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Vs(r),i))}(t,e)}function GS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function qv(t){return(e,n)=>{let r=!1;for(const i of Vs(t)){const s=QS(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function QS(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Di(u,h):W(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return W(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Nv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=new _e(H.comparator);function In(){return XS}const Kv=new _e(H.comparator);function vs(...t){let e=Kv;for(const n of t)e=e.insert(n.key,n);return e}function Gv(t){let e=Kv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ir(){return xs()}function Qv(){return xs()}function xs(){return new zr(t=>t.toString(),(t,e)=>t.isEqual(e))}const YS=new _e(H.comparator),JS=new De(H.comparator);function te(...t){let e=JS;for(const n of t)e=e.add(n);return e}const ZS=new De(J);function eA(){return ZS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:sl(e)?"-0":e}}function Xv(t){return{integerValue:""+t}}function tA(t,e){return RS(e)?Xv(e):Rd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this._=void 0}}function nA(t,e,n){return t instanceof cl?function(i,s){const o={fields:{[xv]:{stringValue:Vv},[Lv]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Td(s)&&(s=Bl(s)),s&&(o.fields[Ov]=s),{mapValue:o}}(n,e):t instanceof io?Jv(t,e):t instanceof so?Zv(t,e):function(i,s){const o=Yv(i,s),l=Gm(o)+Gm(i.Re);return ah(o)&&ah(i.Re)?Xv(l):Rd(i.serializer,l)}(t,e)}function rA(t,e,n){return t instanceof io?Jv(t,e):t instanceof so?Zv(t,e):n}function Yv(t,e){return t instanceof hl?function(r){return ah(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class cl extends ql{}class io extends ql{constructor(e){super(),this.elements=e}}function Jv(t,e){const n=eE(e);for(const r of t.elements)n.some(i=>Xt(i,r))||n.push(r);return{arrayValue:{values:n}}}class so extends ql{constructor(e){super(),this.elements=e}}function Zv(t,e){let n=eE(e);for(const r of t.elements)n=n.filter(i=>!Xt(i,r));return{arrayValue:{values:n}}}class hl extends ql{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Gm(t){return Ie(t.integerValue||t.doubleValue)}function eE(t){return Id(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function iA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof io&&i instanceof io||r instanceof so&&i instanceof so?Ni(r.elements,i.elements,Xt):r instanceof hl&&i instanceof hl?Xt(r.Re,i.Re):r instanceof cl&&i instanceof cl}(t.transform,e.transform)}class sA{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ra(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kl{}function tE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rE(t.key,gn.none()):new _o(t.key,t.data,gn.none());{const n=t.data,r=Tt.empty();let i=new De(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new Lt(i.toArray()),gn.none())}}function oA(t,e,n){t instanceof _o?function(i,s,o){const l=i.value.clone(),u=Xm(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(i,s,o){if(!Ra(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Xm(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(nE(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Os(t,e,n,r){return t instanceof _o?function(s,o,l,u){if(!Ra(s.precondition,o))return l;const h=s.value.clone(),f=Ym(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(s,o,l,u){if(!Ra(s.precondition,o))return l;const h=Ym(s.fieldTransforms,u,o),f=o.data;return f.setAll(nE(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ra(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function aA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Yv(r.transform,i||null);s!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,s))}return n||null}function Qm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Ni(r,i,(s,o)=>iA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class _o extends Kl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends Kl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Xm(t,e,n){const r=new Map;se(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,rA(o,l,n[i]))}return r}function Ym(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,nA(s,o,e))}return r}class rE extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends Kl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&oA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Qv();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=tE(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&Ni(this.mutations,e.mutations,(n,r)=>Qm(n,r))&&Ni(this.baseMutations,e.baseMutations,(n,r)=>Qm(n,r))}}class Pd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){se(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let i=function(){return YS}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Pd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae,ne;function dA(t){switch(t){case b.OK:return W(64938);case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return W(15467,{code:t})}}function iE(t){if(t===void 0)return Tn("GRPC error has no .code"),b.UNKNOWN;switch(t){case Ae.OK:return b.OK;case Ae.CANCELLED:return b.CANCELLED;case Ae.UNKNOWN:return b.UNKNOWN;case Ae.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Ae.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Ae.INTERNAL:return b.INTERNAL;case Ae.UNAVAILABLE:return b.UNAVAILABLE;case Ae.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Ae.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Ae.NOT_FOUND:return b.NOT_FOUND;case Ae.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Ae.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Ae.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Ae.ABORTED:return b.ABORTED;case Ae.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Ae.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Ae.DATA_LOSS:return b.DATA_LOSS;default:return W(39323,{code:t})}}(ne=Ae||(Ae={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new Zn([4294967295,4294967295],0);function Jm(t){const e=Rv().encode(t),n=new vv;return n.update(e),new Uint8Array(n.digest())}function Zm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zn([n,r],0),new Zn([i,s],0)]}class kd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Es(`Invalid padding: ${n}`);if(r<0)throw new Es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Es(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Es(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Zn.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(Zn.fromNumber(r)));return i.compare(fA)===1&&(i=new Zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Jm(e),[r,i]=Zm(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.Se(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new kd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Jm(e),[r,i]=Zm(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.be(o)}}be(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,vo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Gl(Q.min(),i,new _e(J),In(),te())}}class vo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vo(r,n,te(),te(),te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class sE{constructor(e,n){this.targetId=e,this.Ce=n}}class oE{constructor(e,n,r=ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class eg{constructor(){this.Fe=0,this.Me=tg(),this.xe=ze.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=te(),n=te(),r=te();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:W(38017,{changeType:s})}}),new vo(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=tg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,se(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class pA{constructor(e){this.ze=e,this.je=new Map,this.He=In(),this.Je=ua(),this.Ye=ua(),this.Ze=new _e(J)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:W(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if(uh(s))if(r===0){const o=new H(s.path);this.tt(n,o,Xe.newNoDocument(o,Q.min()))}else se(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),u=l?this.lt(l,e,o):1;if(u!==0){this.st(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=sr(r).toUint8Array()}catch(u){if(u instanceof Dv)return ki("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new kd(o,i,s)}catch(u){return ki(u instanceof Es?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&uh(l.target)){const u=new H(l.target.path);this.Et(u).has(o)||this.dt(o,u)||this.tt(o,u,Xe.newNoDocument(u,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=te();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this._t(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new Gl(e,n,this.Ze,this.He,r);return this.He=In(),this.Je=ua(),this.Ye=ua(),this.Ze=new _e(J),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new eg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new De(J),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new De(J),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new eg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ua(){return new _e(H.comparator)}function tg(){return new _e(H.comparator)}const mA={asc:"ASCENDING",desc:"DESCENDING"},gA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},yA={and:"AND",or:"OR"};class _A{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hh(t,e){return t.useProto3Json||zl(e)?e:{value:e}}function dl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function vA(t,e){return dl(t,e.toTimestamp())}function Gt(t){return se(!!t,49232),Q.fromTimestamp(function(n){const r=ir(n);return new Ne(r.seconds,r.nanos)}(t))}function Nd(t,e){return dh(t,e).canonicalString()}function dh(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function lE(t){const e=we.fromString(t);return se(fE(e),10190,{key:e.toString()}),e}function fh(t,e){return Nd(t.databaseId,e.path)}function tc(t,e){const n=lE(e);if(n.get(1)!==t.databaseId.projectId)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new $(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(cE(n))}function uE(t,e){return Nd(t.databaseId,e)}function EA(t){const e=lE(t);return e.length===4?we.emptyPath():cE(e)}function ph(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function cE(t){return se(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function ng(t,e,n){return{name:fh(t,e),fields:n.value.mapValue.fields}}function wA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:W(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string",58123),ze.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ze.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?b.UNKNOWN:iE(h.code);return new $(f,h.message||"")}(o);n=new oE(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=tc(t,r.document.name),s=Gt(r.document.updateTime),o=r.document.createTime?Gt(r.document.createTime):Q.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=Xe.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Pa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=tc(t,r.document),s=r.readTime?Gt(r.readTime):Q.min(),o=Xe.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Pa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=tc(t,r.document),s=r.removedTargetIds||[];n=new Pa([],s,i,null)}else{if(!("filter"in e))return W(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new hA(i,s),l=r.targetId;n=new sE(l,o)}}return n}function TA(t,e){let n;if(e instanceof _o)n={update:ng(t,e.key,e.value)};else if(e instanceof rE)n={delete:fh(t,e.key)};else if(e instanceof Br)n={update:ng(t,e.key,e.data),updateMask:DA(e.fieldMask)};else{if(!(e instanceof lA))return W(16599,{ft:e.type});n={verify:fh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof cl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof so)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof hl)return{fieldPath:o.field.canonicalString(),increment:l.Re};throw W(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:vA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W(27497)}(t,e.precondition)),n}function IA(t,e){return t&&t.length>0?(se(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Gt(i.updateTime):Gt(s);return o.isEqual(Q.min())&&(o=Gt(s)),new sA(o,i.transformResults||[])}(n,e))):[]}function SA(t,e){return{documents:[uE(t,e.path)]}}function AA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=uE(t,i);const s=function(h){if(h.length!==0)return dE(Yt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(y){return{field:Yr(y.field),direction:PA(y.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:i}}function CA(t){let e=EA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){se(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const y=hE(g);return y instanceof Yt&&zv(y)?y.getFilters():[y]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(y=>function(k){return new ul(Jr(k.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(k.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(g){let y;return y=typeof g=="object"?g.value:g,zl(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(g){const y=!!g.before,A=g.values||[];return new ll(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const y=!g.before,A=g.values||[];return new ll(A,y)}(n.endAt)),WS(e,i,o,s,l,"F",u,h)}function RA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Jr(n.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jr(n.unaryFilter.field);return Pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jr(n.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Jr(n.unaryFilter.field);return Pe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return W(61313);default:return W(60726)}}(t):t.fieldFilter!==void 0?function(n){return Pe.create(Jr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return W(58110);default:return W(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yt.create(n.compositeFilter.filters.map(r=>hE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W(1026)}}(n.compositeFilter.op))}(t):W(30097,{filter:t})}function PA(t){return mA[t]}function kA(t){return gA[t]}function NA(t){return yA[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Jr(t){return Fe.fromServerFormat(t.fieldPath)}function dE(t){return t instanceof Pe?function(n){if(n.op==="=="){if($m(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(Bm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if($m(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(Bm(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:kA(n.op),value:n.value}}}(t):t instanceof Yt?function(n){const r=n.getFilters().map(i=>dE(i));return r.length===1?r[0]:{compositeFilter:{op:NA(n.op),filters:r}}}(t):W(54877,{filter:t})}function DA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function fE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,n,r,i,s=Q.min(),o=Q.min(),l=ze.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e){this.wt=e}}function xA(t){const e=CA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ch(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(){this.Cn=new LA}addToCollectionParentIndex(e,n){return this.Cn.add(n),x.resolve()}getCollectionParents(e,n){return x.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return x.resolve()}deleteFieldIndex(e,n){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,n){return x.resolve()}getDocumentsMatchingTarget(e,n){return x.resolve(null)}getIndexType(e,n){return x.resolve(0)}getFieldIndexes(e,n){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,n){return x.resolve(rr.min())}getMinOffsetFromCollectionGroup(e,n){return x.resolve(rr.min())}updateCollectionGroup(e,n,r){return x.resolve()}updateIndexEntries(e,n){return x.resolve()}}class LA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},pE=41943040;class ot{static withCacheSize(e){return new ot(e,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot.DEFAULT_COLLECTION_PERCENTILE=10,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ot.DEFAULT=new ot(pE,ot.DEFAULT_COLLECTION_PERCENTILE,ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ot.DISABLED=new ot(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new xi(0)}static lr(){return new xi(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LruGarbageCollector",MA=1048576;function sg([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class bA{constructor(e){this.Er=e,this.buffer=new De(sg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){z(ig,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){$i(n)?z(ig,"Ignoring IndexedDB error during garbage collection: ",n):await Bi(n)}await this.mr(3e5)})}}class UA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return x.resolve(jl.le);const r=new bA(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(rg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rg):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),Qr()<=ee.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function jA(t,e){return new UA(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.changes=new zr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Xe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?x.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Os(r.mutation,i,Lt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Ir();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=vs();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ir();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=In();const o=xs(),l=function(){return xs()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Br)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Os(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var g;return l.set(h,new BA(f,(g=o.get(h))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,n){const r=xs();let i=new _e((o,l)=>o-l),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Lt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const g=(i.get(l.batchId)||te()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,g=Qv();f.forEach(y=>{if(!s.has(y)){const A=tE(n.get(y),r.get(y));A!==null&&g.set(y,A),s=s.add(y)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return x.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qS(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):x.resolve(Ir());let l=eo,u=s;return o.next(h=>x.forEach(h,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?x.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,te())).next(f=>({batchId:l,changes:Gv(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=vs();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=vs();return this.indexManager.getCollectionParents(e,s).next(l=>x.forEach(l,u=>{const h=function(g,y){return new $l(y,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((g,y)=>{o=o.insert(g,y)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Xe.newInvalidDocument(f)))});let l=vs();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Os(f.mutation,h,Lt.empty(),Ne.now()),Wl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return x.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gt(i.createTime)}}(n)),x.resolve()}getNamedQuery(e,n){return x.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:xA(i.bundledQuery),readTime:Gt(i.readTime)}}(n)),x.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.overlays=new _e(H.comparator),this.Qr=new Map}getOverlay(e,n){return x.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ir();return x.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.bt(e,n,s)}),x.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),x.resolve()}getOverlaysForCollection(e,n,r){const i=Ir(),s=n.length+1,o=new H(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return x.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=Ir(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=Ir(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return x.resolve(l)}bt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new cA(n,r));let s=this.Qr.get(n);s===void 0&&(s=te(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.sessionToken=ze.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,x.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.$r=new De(Ve.Ur),this.Kr=new De(Ve.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ve(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new H(new we([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new H(new we([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=te();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return H.comparator(e.key,n.key)||J(e.Zr,n.Zr)}static Wr(e,n){return J(e.Zr,n.Zr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new De(Ve.Ur)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Xr=this.Xr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return x.resolve(o)}lookupMutationBatch(e,n){return x.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return x.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?wd:this.nr-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],o=>{const l=this.ei(o.Zr);s.push(l)}),x.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(J);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],l=>{r=r.add(l.Zr)})}),x.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new H(s),0);let l=new De(J);return this.Xr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Zr)),!0)},o),x.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){se(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return x.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ve(n,0),i=this.Xr.firstAfterOrEqual(r);return x.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.ii=e,this.docs=function(){return new _e(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return x.resolve(r?r.document.mutableCopy():Xe.newInvalidDocument(n))}getEntries(e,n){let r=In();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Xe.newInvalidDocument(i))}),x.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=In();const o=n.path,l=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||IS(TS(f),r)<=0||(i.has(f.key)||Wl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return x.resolve(s)}getAllFromCollectionGroup(e,n,r,i){W(9500)}si(e,n){return x.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QA(this)}getSize(e){return x.resolve(this.size)}}class QA extends zA{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),x.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e){this.persistence=e,this.oi=new zr(n=>Sd(n),Ad),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this._i=0,this.ai=new Dd,this.targetCount=0,this.ui=xi.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),x.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new xi(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,x.resolve()}updateTargetData(e,n){return this.Tr(n),x.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),x.waitFor(s).next(()=>i)}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return x.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),x.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),x.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),x.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return x.resolve(r)}containsKey(e,n){return x.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mE{constructor(e,n){this.ci={},this.overlays={},this.li=new jl(0),this.hi=!1,this.hi=!0,this.Pi=new qA,this.referenceDelegate=e(this),this.Ti=new XA(this),this.indexManager=new OA,this.remoteDocumentCache=function(i){return new GA(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new VA(n),this.Ei=new HA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new YA(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return x.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class YA extends AS{constructor(e){super(),this.currentSequenceNumber=e}}class Vd{constructor(e){this.persistence=e,this.Vi=new Dd,this.mi=null}static fi(e){return new Vd(e)}get gi(){if(this.mi)return this.mi;throw W(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),x.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),x.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),x.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.gi,r=>{const i=H.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,Q.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return x.or([()=>x.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class fl{constructor(e,n){this.persistence=e,this.yi=new zr(r=>PS(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=jA(this,n)}static fi(e,n){return new fl(e,n)}di(){}Ai(e){return x.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return x.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?x.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Q.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),x.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),x.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),x.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Aa(e.data.value)),n}Dr(e,n,r){return x.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return x.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new xd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return qI()?8:CS(Je())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Ss(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new JA;return this.bs(e,n,o).next(l=>{if(s.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?(Qr()<=ee.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),x.resolve()):(Qr()<=ee.DEBUG&&z("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?(Qr()<=ee.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(n))):x.resolve())}ws(e,n){if(Km(n))return x.resolve(null);let r=Kt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ch(n,null,"F"),r=Kt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.vs(n,l);return this.Cs(n,h,o,u.readTime)?this.ws(e,ch(n,null,"F")):this.Fs(e,h,n,u)}))})))}Ss(e,n,r,i){return Km(n)||i.isEqual(Q.min())?x.resolve(null):this.ys.getDocuments(e,r).next(s=>{const o=this.vs(n,s);return this.Cs(n,o,r,i)?x.resolve(null):(Qr()<=ee.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xr(n)),this.Fs(e,o,n,wS(i,eo)).next(l=>l))})}vs(e,n){let r=new De(qv(e));return n.forEach((i,s)=>{Wl(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}bs(e,n,r){return Qr()<=ee.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.ys.getDocumentsMatchingQuery(e,n,rr.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od="LocalStore",eC=3e8;class tC{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new _e(J),this.Os=new zr(s=>Sd(s),Ad),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $A(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function nC(t,e,n,r){return new tC(t,e,n,r)}async function gE(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=te();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function rC(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const g=h.batch,y=g.keys();let A=x.resolve();return y.forEach(k=>{A=A.next(()=>f.getEntry(u,k)).next(D=>{const M=h.docVersions.get(k);se(M!==null,48541),D.version.compareTo(M)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),f.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=te();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function yE(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function iC(t,e){const n=X(t),r=e.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const l=[];e.targetChanges.forEach((f,g)=>{const y=i.get(g);if(!y)return;l.push(n.Ti.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.Ti.addMatchingKeys(s,f.addedDocuments,g)));let A=y.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?A=A.withResumeToken(ze.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(f.resumeToken,r)),i=i.insert(g,A),function(D,M,I){return D.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=eC?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(y,A,f)&&l.push(n.Ti.updateTargetData(s,A))});let u=In(),h=te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(sC(s,o,e.documentUpdates).next(f=>{u=f.qs,h=f.Qs})),!r.isEqual(Q.min())){const f=n.Ti.getLastRemoteSnapshotVersion(s).next(g=>n.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return x.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.xs=i,s))}function sC(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=In();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Q.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z(Od,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{qs:o,Qs:i}})}function oC(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=wd),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function aC(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ti.getTargetData(r,e).next(s=>s?(i=s,x.resolve(i)):n.Ti.allocateTargetId(r).next(o=>(i=new zn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function mh(t,e,n){const r=X(t),i=r.xs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$i(o))throw o;z(Od,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function og(t,e,n){const r=X(t);let i=Q.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const g=X(u),y=g.Os.get(f);return y!==void 0?x.resolve(g.xs.get(y)):g.Ti.getTargetData(h,f)}(r,o,Kt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:te())).next(l=>(lC(r,GS(e),l),{documents:l,$s:s})))}function lC(t,e,n){let r=t.Ns.get(e)||Q.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ns.set(e,r)}class ag{constructor(){this.activeTargetIds=eA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class uC{constructor(){this.xo=new ag,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ag,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg="ConnectivityMonitor";class ug{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){z(lg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){z(lg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ca=null;function gh(){return ca===null?ca=function(){return 268435456+Math.round(2147483648*Math.random())}():ca++,"0x"+ca.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="RestConnection",hC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class dC{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===ol?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const o=gh(),l=this.jo(e,n.toUriEncodedString());z(nc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,s);const{host:h}=new URL(l),f=mo(h);return this.Jo(e,l,u,r,f).then(g=>(z(nc,`Received RPC '${e}' ${o}: `,g),g),g=>{throw ki(nc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}Yo(e,n,r,i,s,o){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+zi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=hC[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="WebChannelConnection";class pC extends dC{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=gh();return new Promise((l,u)=>{const h=new Ev;h.setWithCredentials(!0),h.listenOnce(wv.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Sa.NO_ERROR:const g=h.getResponseJson();z(Ke,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Sa.TIMEOUT:z(Ke,`RPC '${e}' ${o} timed out`),u(new $(b.DEADLINE_EXCEEDED,"Request time out"));break;case Sa.HTTP_ERROR:const y=h.getStatus();if(z(Ke,`RPC '${e}' ${o} failed with status:`,y,"response text:",h.getResponseText()),y>0){let A=h.getResponseJson();Array.isArray(A)&&(A=A[0]);const k=A==null?void 0:A.error;if(k&&k.status&&k.message){const D=function(I){const v=I.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(v)>=0?v:b.UNKNOWN}(k.status);u(new $(D,k.message))}else u(new $(b.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new $(b.UNAVAILABLE,"Connection failed."));break;default:W(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{z(Ke,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);z(Ke,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}T_(e,n,r){const i=gh(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sv(),l=Iv(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");z(Ke,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=o.createWebChannel(f,u);let y=!1,A=!1;const k=new fC({Zo:M=>{A?z(Ke,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(y||(z(Ke,`Opening RPC '${e}' stream ${i} transport.`),g.open(),y=!0),z(Ke,`RPC '${e}' stream ${i} sending:`,M),g.send(M))},Xo:()=>g.close()}),D=(M,I,v)=>{M.listen(I,S=>{try{v(S)}catch(V){setTimeout(()=>{throw V},0)}})};return D(g,_s.EventType.OPEN,()=>{A||(z(Ke,`RPC '${e}' stream ${i} transport opened.`),k.__())}),D(g,_s.EventType.CLOSE,()=>{A||(A=!0,z(Ke,`RPC '${e}' stream ${i} transport closed`),k.u_())}),D(g,_s.EventType.ERROR,M=>{A||(A=!0,ki(Ke,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),k.u_(new $(b.UNAVAILABLE,"The operation could not be completed")))}),D(g,_s.EventType.MESSAGE,M=>{var I;if(!A){const v=M.data[0];se(!!v,16349);const S=v,V=(S==null?void 0:S.error)||((I=S[0])===null||I===void 0?void 0:I.error);if(V){z(Ke,`RPC '${e}' stream ${i} received error:`,V);const O=V.status;let L=function(_){const w=Ae[_];if(w!==void 0)return iE(w)}(O),E=V.message;L===void 0&&(L=b.INTERNAL,E="Unknown error status: "+O+" with message "+V.message),A=!0,k.u_(new $(L,E)),g.close()}else z(Ke,`RPC '${e}' stream ${i} received:`,v),k.c_(v)}}),D(l,Tv.STAT_EVENT,M=>{M.stat===ih.PROXY?z(Ke,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===ih.NOPROXY&&z(Ke,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{k.a_()},0),k}}function rc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t){return new _A(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=i,this.d_=s,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="PersistentStream";class vE{constructor(e,n,r,i,s,o,l,u){this.xi=e,this.y_=r,this.w_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new _E(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Tn(n.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.S_===n&&this.K_(r,i)},r=>{e(()=>{const i=new $(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(i)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.W_(i))}),this.stream.onMessage(i=>{r(()=>++this.v_==1?this.z_(i):this.onNext(i))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return z(cg,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(z(cg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mC extends vE{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}G_(e,n){return this.connection.T_("Listen",e,n)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const n=wA(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Q.min():o.readTime?Gt(o.readTime):Q.min()}(e);return this.listener.j_(n,r)}H_(e){const n={};n.database=ph(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=uh(u)?{documents:SA(s,u)}:{query:AA(s,u).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=aE(s,o.resumeToken);const h=hh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Q.min())>0){l.readTime=dl(s,o.snapshotVersion.toTimestamp());const h=hh(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=RA(this.serializer,e);r&&(n.labels=r),this.L_(n)}J_(e){const n={};n.database=ph(this.serializer),n.removeTarget=e,this.L_(n)}}class gC extends vE{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=IA(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=ph(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TA(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yC{}class _C extends yC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.na=!1}ra(){if(this.na)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(e,dh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(b.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,dh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new $(b.UNKNOWN,o.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class vC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Tn(n),this.oa=!1):z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="RemoteStore";class EC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=s,this.Ea.No(o=>{r.enqueueAndForget(async()=>{$r(this)&&(z(Mr,"Restarting streams for network reachability change."),await async function(u){const h=X(u);h.Ta.add(4),await Eo(h),h.da.set("Unknown"),h.Ta.delete(4),await Xl(h)}(this))})}),this.da=new vC(r,i)}}async function Xl(t){if($r(t))for(const e of t.Ia)await e(!0)}async function Eo(t){for(const e of t.Ia)await e(!1)}function EE(t,e){const n=X(t);n.Pa.has(e.targetId)||(n.Pa.set(e.targetId,e),Fd(n)?bd(n):Hi(n).M_()&&Md(n,e))}function Ld(t,e){const n=X(t),r=Hi(n);n.Pa.delete(e),r.M_()&&wE(n,e),n.Pa.size===0&&(r.M_()?r.N_():$r(n)&&n.da.set("Unknown"))}function Md(t,e){if(t.Aa.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Hi(t).H_(e)}function wE(t,e){t.Aa.Ke(e),Hi(t).J_(e)}function bd(t){t.Aa=new pA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Pa.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),Hi(t).start(),t.da._a()}function Fd(t){return $r(t)&&!Hi(t).F_()&&t.Pa.size>0}function $r(t){return X(t).Ta.size===0}function TE(t){t.Aa=void 0}async function wC(t){t.da.set("Online")}async function TC(t){t.Pa.forEach((e,n)=>{Md(t,e)})}async function IC(t,e){TE(t),Fd(t)?(t.da.ca(e),bd(t)):t.da.set("Unknown")}async function SC(t,e,n){if(t.da.set("Online"),e instanceof oE&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Pa.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Pa.delete(l),i.Aa.removeTarget(l))}(t,e)}catch(r){z(Mr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pl(t,r)}else if(e instanceof Pa?t.Aa.Xe(e):e instanceof sE?t.Aa.ot(e):t.Aa.nt(e),!n.isEqual(Q.min()))try{const r=await yE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Aa.It(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Pa.get(h);f&&s.Pa.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Pa.get(u);if(!f)return;s.Pa.set(u,f.withResumeToken(ze.EMPTY_BYTE_STRING,f.snapshotVersion)),wE(s,u);const g=new zn(f.target,u,h,f.sequenceNumber);Md(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z(Mr,"Failed to raise snapshot:",r),await pl(t,r)}}async function pl(t,e,n){if(!$i(e))throw e;t.Ta.add(1),await Eo(t),t.da.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z(Mr,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Xl(t)})}function IE(t,e){return e().catch(n=>pl(t,n,e))}async function Yl(t){const e=X(t),n=ar(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:wd;for(;AC(e);)try{const i=await oC(e.localStore,r);if(i===null){e.ha.length===0&&n.N_();break}r=i.batchId,CC(e,i)}catch(i){await pl(e,i)}SE(e)&&AE(e)}function AC(t){return $r(t)&&t.ha.length<10}function CC(t,e){t.ha.push(e);const n=ar(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function SE(t){return $r(t)&&!ar(t).F_()&&t.ha.length>0}function AE(t){ar(t).start()}async function RC(t){ar(t).ta()}async function PC(t){const e=ar(t);for(const n of t.ha)e.Z_(n.mutations)}async function kC(t,e,n){const r=t.ha.shift(),i=Pd.from(r,e,n);await IE(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Yl(t)}async function NC(t,e){e&&ar(t).Y_&&await async function(r,i){if(function(o){return dA(o)&&o!==b.ABORTED}(i.code)){const s=r.ha.shift();ar(r).O_(),await IE(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Yl(r)}}(t,e),SE(t)&&AE(t)}async function hg(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),z(Mr,"RemoteStore received new credentials");const r=$r(n);n.Ta.add(3),await Eo(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Xl(n)}async function DC(t,e){const n=X(t);e?(n.Ta.delete(2),await Xl(n)):e||(n.Ta.add(2),await Eo(n),n.da.set("Unknown"))}function Hi(t){return t.Ra||(t.Ra=function(n,r,i){const s=X(n);return s.ra(),new mC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:wC.bind(null,t),n_:TC.bind(null,t),i_:IC.bind(null,t),j_:SC.bind(null,t)}),t.Ia.push(async e=>{e?(t.Ra.O_(),Fd(t)?bd(t):t.da.set("Unknown")):(await t.Ra.stop(),TE(t))})),t.Ra}function ar(t){return t.Va||(t.Va=function(n,r,i){const s=X(n);return s.ra(),new gC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:RC.bind(null,t),i_:NC.bind(null,t),X_:PC.bind(null,t),ea:kC.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Yl(t)):(await t.Va.stop(),t.ha.length>0&&(z(Mr,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Ud(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jd(t,e){if(Tn("AsyncQueue",`${e}: ${t}`),$i(t))return new $(b.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static emptySet(e){return new yi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=vs(),this.sortedSet=new _e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof yi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new yi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.ma=new _e(H.comparator)}track(e){const n=e.doc.key,r=this.ma.get(n);r?e.type!==0&&r.type===3?this.ma=this.ma.insert(n,e):e.type===3&&r.type!==1?this.ma=this.ma.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ma=this.ma.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ma=this.ma.remove(n):e.type===1&&r.type===2?this.ma=this.ma.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ma=this.ma.insert(n,{type:2,doc:e.doc}):W(63341,{Vt:e,fa:r}):this.ma=this.ma.insert(n,e)}ga(){const e=[];return this.ma.inorderTraversal((n,r)=>{e.push(r)}),e}}class Oi{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Oi(e,n,yi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some(e=>e.Sa())}}class xC{constructor(){this.queries=fg(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=fg(),s.forEach((o,l)=>{for(const u of l.ya)u.onError(r)})})(this,new $(b.ABORTED,"Firestore shutting down"))}}function fg(){return new zr(t=>Wv(t),Hl)}async function OC(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.wa()&&e.Sa()&&(r=2):(s=new VC,r=e.Sa()?0:1);try{switch(r){case 0:s.pa=await n.onListen(i,!0);break;case 1:s.pa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=jd(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.ya.push(e),e.Da(n.onlineState),s.pa&&e.va(s.pa)&&zd(n)}async function LC(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.ya.indexOf(e);o>=0&&(s.ya.splice(o,1),s.ya.length===0?i=e.Sa()?0:1:!s.wa()&&e.Sa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MC(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.ya)l.va(i)&&(r=!0);o.pa=i}}r&&zd(n)}function bC(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.ya)s.onError(n);r.queries.delete(e)}function zd(t){t.ba.forEach(e=>{e.next()})}var yh,pg;(pg=yh||(yh={})).Ca="default",pg.Cache="cache";class FC{constructor(e,n,r){this.query=e,this.Fa=n,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=r||{}}va(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),n=!0):this.Na(e,this.onlineState)&&(this.Ba(e),n=!0),this.xa=e,n}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let n=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),n=!0),n}Na(e,n){if(!e.fromCache||!this.Sa())return!0;const r=n!=="Offline";return(!this.options.La||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Oa(e){if(e.docChanges.length>0)return!0;const n=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Ba(e){e=Oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==yh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CE{constructor(e){this.key=e}}class RE{constructor(e){this.key=e}}class UC{constructor(e,n){this.query=e,this.Ga=n,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=te(),this.mutatedKeys=te(),this.Ha=qv(e),this.Ja=new yi(this.Ha)}get Ya(){return this.Ga}Za(e,n){const r=n?n.Xa:new dg,i=n?n.Ja:this.Ja;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const y=i.get(f),A=Wl(this.query,g)?g:null,k=!!y&&this.mutatedKeys.has(y.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let M=!1;y&&A?y.data.isEqual(A.data)?k!==D&&(r.track({type:3,doc:A}),M=!0):this.eu(y,A)||(r.track({type:2,doc:A}),M=!0,(u&&this.Ha(A,u)>0||h&&this.Ha(A,h)<0)&&(l=!0)):!y&&A?(r.track({type:0,doc:A}),M=!0):y&&!A&&(r.track({type:1,doc:y}),M=!0,(u||h)&&(l=!0)),M&&(A?(o=o.add(A),s=D?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ja:o,Xa:r,Cs:l,mutatedKeys:s}}eu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const o=e.Xa.ga();o.sort((f,g)=>function(A,k){const D=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W(20277,{Vt:M})}};return D(A)-D(k)}(f.type,g.type)||this.Ha(f.doc,g.doc)),this.tu(r),i=i!=null&&i;const l=n&&!i?this.nu():[],u=this.ja.size===0&&this.current&&!i?1:0,h=u!==this.za;return this.za=u,o.length!==0||h?{snapshot:new Oi(this.query,e.Ja,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ru:l}:{ru:l}}Da(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new dg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach(n=>this.Ga=this.Ga.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ga=this.Ga.delete(n)),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=te(),this.Ja.forEach(r=>{this.iu(r.key)&&(this.ja=this.ja.add(r.key))});const n=[];return e.forEach(r=>{this.ja.has(r)||n.push(new RE(r))}),this.ja.forEach(r=>{e.has(r)||n.push(new CE(r))}),n}su(e){this.Ga=e.$s,this.ja=te();const n=this.Za(e.documents);return this.applyChanges(n,!0)}ou(){return Oi.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,this.za===0,this.hasCachedResults)}}const Bd="SyncEngine";class jC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zC{constructor(e){this.key=e,this._u=!1}}class BC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.au={},this.uu=new zr(l=>Wv(l),Hl),this.cu=new Map,this.lu=new Set,this.hu=new _e(H.comparator),this.Pu=new Map,this.Tu=new Dd,this.Iu={},this.Eu=new Map,this.du=xi.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function $C(t,e,n=!0){const r=xE(t);let i;const s=r.uu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ou()):i=await PE(r,e,n,!0),i}async function HC(t,e){const n=xE(t);await PE(n,e,!0,!1)}async function PE(t,e,n,r){const i=await aC(t.localStore,Kt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await WC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&EE(t.remoteStore,i),l}async function WC(t,e,n,r,i){t.Ru=(g,y,A)=>async function(D,M,I,v){let S=M.view.Za(I);S.Cs&&(S=await og(D.localStore,M.query,!1).then(({documents:E})=>M.view.Za(E,S)));const V=v&&v.targetChanges.get(M.targetId),O=v&&v.targetMismatches.get(M.targetId)!=null,L=M.view.applyChanges(S,D.isPrimaryClient,V,O);return gg(D,M.targetId,L.ru),L.snapshot}(t,g,y,A);const s=await og(t.localStore,e,!0),o=new UC(e,s.$s),l=o.Za(s.documents),u=vo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);gg(t,n,h.ru);const f=new jC(e,n,o);return t.uu.set(e,f),t.cu.has(n)?t.cu.get(n).push(e):t.cu.set(n,[e]),h.snapshot}async function qC(t,e,n){const r=X(t),i=r.uu.get(e),s=r.cu.get(i.targetId);if(s.length>1)return r.cu.set(i.targetId,s.filter(o=>!Hl(o,e))),void r.uu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ld(r.remoteStore,i.targetId),_h(r,i.targetId)}).catch(Bi)):(_h(r,i.targetId),await mh(r.localStore,i.targetId,!0))}async function KC(t,e){const n=X(t),r=n.uu.get(e),i=n.cu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ld(n.remoteStore,r.targetId))}async function GC(t,e,n){const r=tR(t);try{const i=await function(o,l){const u=X(o),h=Ne.now(),f=l.reduce((A,k)=>A.add(k.key),te());let g,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let k=In(),D=te();return u.Bs.getEntries(A,f).next(M=>{k=M,k.forEach((I,v)=>{v.isValidDocument()||(D=D.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,k)).next(M=>{g=M;const I=[];for(const v of l){const S=aA(v,g.get(v.key).overlayedDocument);S!=null&&I.push(new Br(v.key,S,Fv(S.value.mapValue),gn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,I,l)}).next(M=>{y=M;const I=M.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(A,M.batchId,I)})}).then(()=>({batchId:y.batchId,changes:Gv(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.Iu[o.currentUser.toKey()];h||(h=new _e(J)),h=h.insert(l,u),o.Iu[o.currentUser.toKey()]=h}(r,i.batchId,n),await wo(r,i.changes),await Yl(r.remoteStore)}catch(i){const s=jd(i,"Failed to persist write");n.reject(s)}}async function kE(t,e){const n=X(t);try{const r=await iC(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Pu.get(s);o&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o._u=!0:i.modifiedDocuments.size>0?se(o._u,14607):i.removedDocuments.size>0&&(se(o._u,42227),o._u=!1))}),await wo(n,r,e)}catch(r){await Bi(r)}}function mg(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.uu.forEach((s,o)=>{const l=o.view.Da(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=X(o);u.onlineState=l;let h=!1;u.queries.forEach((f,g)=>{for(const y of g.ya)y.Da(l)&&(h=!0)}),h&&zd(u)}(r.eventManager,e),i.length&&r.au.j_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QC(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Pu.get(e),s=i&&i.key;if(s){let o=new _e(H.comparator);o=o.insert(s,Xe.newNoDocument(s,Q.min()));const l=te().add(s),u=new Gl(Q.min(),new Map,new _e(J),o,l);await kE(r,u),r.hu=r.hu.remove(s),r.Pu.delete(e),$d(r)}else await mh(r.localStore,e,!1).then(()=>_h(r,e,n)).catch(Bi)}async function XC(t,e){const n=X(t),r=e.batch.batchId;try{const i=await rC(n.localStore,e);DE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await wo(n,i)}catch(i){await Bi(i)}}async function YC(t,e,n){const r=X(t);try{const i=await function(o,l){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(se(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);DE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await wo(r,i)}catch(i){await Bi(i)}}function NE(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function DE(t,e,n){const r=X(t);let i=r.Iu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Iu[r.currentUser.toKey()]=i}}function _h(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.cu.get(e))t.uu.delete(r),n&&t.au.Vu(r,n);t.cu.delete(e),t.isPrimaryClient&&t.Tu.Hr(e).forEach(r=>{t.Tu.containsKey(r)||VE(t,r)})}function VE(t,e){t.lu.delete(e.path.canonicalString());const n=t.hu.get(e);n!==null&&(Ld(t.remoteStore,n),t.hu=t.hu.remove(e),t.Pu.delete(n),$d(t))}function gg(t,e,n){for(const r of n)r instanceof CE?(t.Tu.addReference(r.key,e),JC(t,r)):r instanceof RE?(z(Bd,"Document no longer in limbo: "+r.key),t.Tu.removeReference(r.key,e),t.Tu.containsKey(r.key)||VE(t,r.key)):W(19791,{mu:r})}function JC(t,e){const n=e.key,r=n.path.canonicalString();t.hu.get(n)||t.lu.has(r)||(z(Bd,"New document in limbo: "+n),t.lu.add(r),$d(t))}function $d(t){for(;t.lu.size>0&&t.hu.size<t.maxConcurrentLimboResolutions;){const e=t.lu.values().next().value;t.lu.delete(e);const n=new H(we.fromString(e)),r=t.du.next();t.Pu.set(r,new zC(n)),t.hu=t.hu.insert(n,r),EE(t.remoteStore,new zn(Kt(Cd(n.path)),r,"TargetPurposeLimboResolution",jl.le))}}async function wo(t,e,n){const r=X(t),i=[],s=[],o=[];r.uu.isEmpty()||(r.uu.forEach((l,u)=>{o.push(r.Ru(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=xd.Rs(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.au.j_(i),await async function(u,h){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>x.forEach(h,y=>x.forEach(y.ds,A=>f.persistence.referenceDelegate.addReference(g,y.targetId,A)).next(()=>x.forEach(y.As,A=>f.persistence.referenceDelegate.removeReference(g,y.targetId,A)))))}catch(g){if(!$i(g))throw g;z(Od,"Failed to update sequence numbers: "+g)}for(const g of h){const y=g.targetId;if(!g.fromCache){const A=f.xs.get(y),k=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(k);f.xs=f.xs.insert(y,D)}}}(r.localStore,s))}async function ZC(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){z(Bd,"User change. New user:",e.toKey());const r=await gE(n.localStore,e);n.currentUser=e,function(s,o){s.Eu.forEach(l=>{l.forEach(u=>{u.reject(new $(b.CANCELLED,o))})}),s.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wo(n,r.ks)}}function eR(t,e){const n=X(t),r=n.Pu.get(e);if(r&&r._u)return te().add(r.key);{let i=te();const s=n.cu.get(e);if(!s)return i;for(const o of s){const l=n.uu.get(o);i=i.unionWith(l.view.Ya)}return i}}function xE(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QC.bind(null,e),e.au.j_=MC.bind(null,e.eventManager),e.au.Vu=bC.bind(null,e.eventManager),e}function tR(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YC.bind(null,e),e}class ml{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ql(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return nC(this.persistence,new ZA,e.initialUser,this.serializer)}yu(e){return new mE(Vd.fi,this.serializer)}pu(e){return new uC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ml.provider={build:()=>new ml};class nR extends ml{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){se(this.persistence.referenceDelegate instanceof fl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new FA(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?ot.withCacheSize(this.cacheSizeBytes):ot.DEFAULT;return new mE(r=>fl.fi(r,n),this.serializer)}}class vh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZC.bind(null,this.syncEngine),await DC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xC}()}createDatastore(e){const n=Ql(e.databaseInfo.databaseId),r=function(s){return new pC(s)}(e.databaseInfo);return function(s,o,l,u){return new _C(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new EC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>mg(this.syncEngine,n,0),function(){return ug.C()?new ug:new cC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const g=new BC(i,s,o,l,u,h);return f&&(g.Au=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);z(Mr,"RemoteStore shutting down."),s.Ta.add(5),await Eo(s),s.Ea.shutdown(),s.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}vh.provider={build:()=>new vh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="FirestoreClient";class iR{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=Pv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z(lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z(lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=jd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ic(t,e){t.asyncQueue.verifyOperationInProgress(),z(lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await gE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sR(t);z(lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>hg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>hg(e.remoteStore,i)),t._onlineComponents=e}async function sR(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z(lr,"Using user provided OfflineComponentProvider");try{await ic(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;ki("Error using user provided cache. Falling back to memory cache: "+n),await ic(t,new ml)}}else z(lr,"Using default OfflineComponentProvider"),await ic(t,new nR(void 0));return t._offlineComponents}async function OE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z(lr,"Using user provided OnlineComponentProvider"),await yg(t,t._uninitializedComponentsProvider._online)):(z(lr,"Using default OnlineComponentProvider"),await yg(t,new vh))),t._onlineComponents}function oR(t){return OE(t).then(e=>e.syncEngine)}async function aR(t){const e=await OE(t),n=e.eventManager;return n.onListen=$C.bind(null,e.syncEngine),n.onUnlisten=qC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=HC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=KC.bind(null,e.syncEngine),n}function lR(t,e,n={}){const r=new er;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new rR({next:y=>{f.Cu(),o.enqueueAndForget(()=>LC(s,g));const A=y.docs.has(l);!A&&y.fromCache?h.reject(new $(b.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&y.fromCache&&u&&u.source==="server"?h.reject(new $(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(y)},error:y=>h.reject(y)}),g=new FC(Cd(l.path),f,{includeMetadataChanges:!0,La:!0});return OC(s,g)}(await aR(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t,e,n){if(!n)throw new $(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function cR(t,e,n,r){if(e===!0&&r===!0)throw new $(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vg(t){if(!H.isDocumentKey(t))throw new $(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":W(12329,{type:typeof t})}function oo(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new $(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Hd(t);throw new $(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME="firestore.googleapis.com",Eg=!0;class wg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ME,this.ssl=Eg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Eg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=pE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MA)throw new $(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}cR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wd{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dS;switch(r.type){case"firstParty":return new gS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=_g.get(n);r&&(z("ComponentProvider","Removing Datastore"),_g.delete(n),r.terminate())}(this),Promise.resolve()}}function hR(t,e,n,r={}){var i;t=oo(t,Wd);const s=mo(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(hv(`https://${u}`),dv("Firestore",!0)),o.host!==ME&&o.host!==u&&ki("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!xr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=Ge.MOCK_USER;else{f=bI(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const y=r.mockUserToken.sub||r.mockUserToken.user_id;if(!y)throw new $(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ge(y)}t._authCredentials=new fS(new Cv(f,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new qd(this.firestore,e,this._query)}}class At{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ao(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class ao extends qd{constructor(e,n,r){super(e,n,Cd(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new H(e))}withConverter(e){return new ao(this.firestore,e,this._path)}}function Tg(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=Pv.newId()),uR("doc","path",e),t instanceof Wd){const r=we.fromString(e,...n);return vg(r),new At(t,null,new H(r))}{if(!(t instanceof At||t instanceof ao))throw new $(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return vg(r),new At(t.firestore,t instanceof ao?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="AsyncQueue";class Sg{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new _E(this,"async_queue_retry"),this.ec=()=>{const r=rc();r&&z(Ig,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=rc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=rc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new er;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!$i(e))throw e;z(Ig,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Tn("INTERNAL UNHANDLED ERROR: ",Ag(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const i=Ud.createAndSchedule(this,e,n,r,s=>this.oc(s));return this.Hu.push(i),i}nc(){this.Ju&&W(47125,{_c:Ag(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Ag(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Kd extends Wd{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Sg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Sg(e),this._firestoreClient=void 0,await e}}}function dR(t,e){const n=typeof t=="object"?t:gv(),r=typeof t=="string"?t:ol,i=vd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=LI("firestore");s&&hR(i,...s)}return i}function bE(t){if(t._terminated)throw new $(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||fR(t),t._firestoreClient}function fR(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new DS(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,LE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new iR(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Li(ze.fromBase64String(e))}catch(n){throw new $(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Li(ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new $(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new $(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new $(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=/^__.*__$/;class mR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new _o(e,this.data,n,this.fieldTransforms)}}function UE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W(40011,{hc:t})}}class Yd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.dc(e),i}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tc({path:r,Ec:!1});return i.Pc(),i}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return gl(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(UE(this.hc)&&pR.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class gR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ql(e)}gc(e,n,r,i=!1){return new Yd({hc:e,methodName:n,fc:r,path:Fe.emptyPath(),Ec:!1,mc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function yR(t){const e=t._freezeSettings(),n=Ql(t._databaseId);return new gR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _R(t,e,n,r,i,s={}){const o=t.gc(s.merge||s.mergeFields?2:0,e,n,i);$E("Data must be an object, but it was:",o,r);const l=zE(r,o);let u,h;if(s.merge)u=new Lt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const y=vR(e,g,n);if(!o.contains(y))throw new $(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);wR(f,y)||f.push(y)}u=new Lt(f),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new mR(new Tt(l),u,h)}function jE(t,e){if(BE(t=Pt(t)))return $E("Unsupported field value:",e,t),zE(t,e);if(t instanceof FE)return function(r,i){if(!UE(i.hc))throw i.Vc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Vc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=jE(l,i.Rc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return tA(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ne.fromDate(r);return{timestampValue:dl(i.serializer,s)}}if(r instanceof Ne){const s=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:dl(i.serializer,s)}}if(r instanceof Qd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Li)return{bytesValue:aE(i.serializer,r._byteString)};if(r instanceof At){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Vc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Nd(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xd)return function(o,l){return{mapValue:{fields:{[Mv]:{stringValue:bv},[al]:{arrayValue:{values:o.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return Rd(l.serializer,h)})}}}}}}(r,i);throw i.Vc(`Unsupported field value: ${Hd(r)}`)}(t,e)}function zE(t,e){const n={};return Nv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(r,i)=>{const s=jE(i,e.Ic(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function BE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof Qd||t instanceof Li||t instanceof At||t instanceof FE||t instanceof Xd)}function $E(t,e,n){if(!BE(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Hd(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function vR(t,e,n){if((e=Pt(e))instanceof Gd)return e._internalPath;if(typeof e=="string")return HE(t,e);throw gl("Field path arguments must be of type string or ",t,!1,void 0,n)}const ER=new RegExp("[~\\*/\\[\\]]");function HE(t,e,n){if(e.search(ER)>=0)throw gl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Gd(...e.split("."))._internalPath}catch{throw gl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new $(b.INVALID_ARGUMENT,l+t+u)}function wR(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(qE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class TR extends WE{data(){return super.data()}}function qE(t,e){return typeof e=="string"?HE(t,e):e instanceof Gd?e._internalPath:e._delegate._internalPath}class IR{convertValue(e,n="none"){switch(or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ie(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw W(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[al].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ie(o.doubleValue));return new Xd(s)}convertGeoPoint(e){return new Qd(Ie(e.latitude),Ie(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=ir(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);se(fE(r),9688,{name:e});const i=new no(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class KE extends WE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new CR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(qE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class CR extends KE{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RR(t){t=oo(t,At);const e=oo(t.firestore,Kd);return lR(bE(e),t._key).then(n=>DR(e,t,n))}class PR extends IR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Li(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,n)}}function kR(t,e,n){t=oo(t,At);const r=oo(t.firestore,Kd),i=SR(t.converter,e);return NR(r,[_R(yR(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gn.none())])}function NR(t,e){return function(r,i){const s=new er;return r.asyncQueue.enqueueAndForget(async()=>GC(await oR(r),i,s)),s.promise}(bE(t),e)}function DR(t,e,n){const r=n.docs.get(e._key),i=new PR(t);return new KE(t,i,e._key,r,new AR(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){zi=i})(ji),Pi(new Or("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Kd(new pS(r.getProvider("auth-internal")),new yS(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new $(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Jn(Nm,Dm,e),Jn(Nm,Dm,"esm2017")})();function Jd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function GE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VR=GE,QE=new go("auth","Firebase",GE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yl=new yd("@firebase/auth");function xR(t,...e){yl.logLevel<=ee.WARN&&yl.warn(`Auth (${ji}): ${t}`,...e)}function ka(t,...e){yl.logLevel<=ee.ERROR&&yl.error(`Auth (${ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw ef(t,...e)}function Ut(t,...e){return ef(t,...e)}function Zd(t,e,n){const r=Object.assign(Object.assign({},VR()),{[e]:n});return new go("auth","Firebase",r).create(e,{appName:t.name})}function Rr(t){return Zd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OR(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Jt(t,"argument-error"),Zd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ef(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return QE.create(t,...e)}function q(t,e,...n){if(!t)throw ef(e,...n)}function fn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ka(e),new Error(e)}function Sn(t,e){t||fn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LR(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LR()||$I()||"connection"in navigator)?navigator.onLine:!0}function bR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sn(n>e,"Short delay should be less than long delay!"),this.isMobile=jI()||HI()}get(){return MR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t,e){Sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jR=new To(3e4,6e4);function nf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wi(t,e,n,r,i={}){return YE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=yo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return BI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&mo(t.emulatorConfig.host)&&(h.credentials="include"),XE.fetch()(await JE(t,t.config.apiHost,n,l),h)})}async function YE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FR),e);try{const i=new BR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ha(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw ha(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw ha(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw ha(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Zd(t,f,h);Jt(t,f)}}catch(i){if(i instanceof Cn)throw i;Jt(t,"network-request-failed",{message:String(i)})}}async function zR(t,e,n,r,i={}){const s=await Wi(t,e,n,r,i);return"mfaPendingCredential"in s&&Jt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function JE(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?tf(t.config,i):`${t.config.apiScheme}://${i}`;return UR.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class BR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),jR.get())})}}function ha(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ut(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $R(t,e){return Wi(t,"POST","/v1/accounts:delete",e)}async function _l(t,e){return Wi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function HR(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=rf(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ls(sc(i.auth_time)),issuedAtTime:Ls(sc(i.iat)),expirationTime:Ls(sc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function sc(t){return Number(t)*1e3}function rf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=av(n);return i?JSON.parse(i):(ka("Failed to decode base64 JWT payload"),null)}catch(i){return ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Rg(t){const e=rf(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&WR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await lo(t,_l(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ZE(s.providerUserInfo):[],l=GR(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function KR(t){const e=Pt(t);await vl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ZE(t){return t.map(e=>{var{providerId:n}=e,r=Jd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QR(t,e){const n=await YE(t,{},async()=>{const r=yo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await JE(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",XE.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function XR(t,e){return Wi(t,"POST","/v2/accounts:revokeToken",nf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Rg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await QR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _i;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _i,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Jd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await lo(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return HR(this,e)}reload(){return KR(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await vl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Rr(this.auth));const e=await this.getIdToken();return await lo(this,$R(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:S,emailVerified:V,isAnonymous:O,providerData:L,stsTokenManager:E}=n;q(S&&E,e,"internal-error");const m=_i.fromJSON(this.name,E);q(typeof S=="string",e,"internal-error"),Dn(g,e.name),Dn(y,e.name),q(typeof V=="boolean",e,"internal-error"),q(typeof O=="boolean",e,"internal-error"),Dn(A,e.name),Dn(k,e.name),Dn(D,e.name),Dn(M,e.name),Dn(I,e.name),Dn(v,e.name);const _=new Mt({uid:S,auth:e,email:y,emailVerified:V,displayName:g,isAnonymous:O,photoURL:k,phoneNumber:A,tenantId:D,stsTokenManager:m,createdAt:I,lastLoginAt:v});return L&&Array.isArray(L)&&(_.providerData=L.map(w=>Object.assign({},w))),M&&(_._redirectEventId=M),_}static async _fromIdTokenResponse(e,n,r=!1){const i=new _i;i.updateFromServerResponse(n);const s=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await vl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ZE(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new _i;l.updateFromIdToken(r);const u=new Mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg=new Map;function pn(t){Sn(t instanceof Function,"Expected a class definition");let e=Pg.get(t);return e?(Sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ew.type="NONE";const kg=ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Na(t,e,n){return`firebase:${t}:${e}:${n}`}class vi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Na(this.userKey,i.apiKey,s),this.fullPersistenceKey=Na("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _l(this.auth,{idToken:e}).catch(()=>{});return n?Mt._fromGetAccountInfoResponse(this.auth,n,e):null}return Mt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vi(pn(kg),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||pn(kg);const o=Na(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let g;if(typeof f=="string"){const y=await _l(e,{idToken:f}).catch(()=>{});if(!y)break;g=await Mt._fromGetAccountInfoResponse(e,y,f)}else g=Mt._fromJSON(e,f);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new vi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new vi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ow(e))return"Blackberry";if(aw(e))return"Webos";if(nw(e))return"Safari";if((e.includes("chrome/")||rw(e))&&!e.includes("edge/"))return"Chrome";if(sw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tw(t=Je()){return/firefox\//i.test(t)}function nw(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rw(t=Je()){return/crios\//i.test(t)}function iw(t=Je()){return/iemobile/i.test(t)}function sw(t=Je()){return/android/i.test(t)}function ow(t=Je()){return/blackberry/i.test(t)}function aw(t=Je()){return/webos/i.test(t)}function sf(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function YR(t=Je()){var e;return sf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function JR(){return WI()&&document.documentMode===10}function lw(t=Je()){return sf(t)||sw(t)||aw(t)||ow(t)||/windows phone/i.test(t)||iw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e=[]){let n;switch(t){case"Browser":n=Ng(Je());break;case"Worker":n=`${Ng(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e={}){return Wi(t,"GET","/v2/passwordPolicy",nf(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP=6;class nP{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dg(this),this.idTokenSubscription=new Dg(this),this.beforeStateQueue=new ZR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=QE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await vi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _l(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Rr(this));const n=e?Pt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Rr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Rr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eP(this),n=new nP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new go("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await XR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await vi.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jl(t){return Pt(t)}class Dg{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let of={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iP(t){of=t}function sP(t){return of.loadJS(t)}function oP(){return of.gapiScript}function aP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t,e){const n=vd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(xr(s,e??{}))return i;Jt(i,"already-initialized")}return n.initialize({options:e})}function uP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function cP(t,e,n){const r=Jl(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=cw(e),{host:o,port:l}=hP(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(xr(h,r.config.emulator)&&xr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,mo(o)?(hv(`${s}//${o}${u}`),dv("Auth",!0)):dP()}function cw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function hP(t){const e=cw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Vg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Vg(o)}}}function Vg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function dP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,n){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(t,e){return zR(t,"POST","/v1/accounts:signInWithIdp",nf(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP="http://localhost";class br extends hw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Jd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new br(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ei(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ei(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ei(e,n)}buildRequest(){const e={requestUri:fP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class af{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends af{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Io{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:cn.PROVIDER_ID,signInMethod:cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cn.credentialFromTaggedObject(e)}static credentialFromError(e){return cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cn.credential(n,r)}catch{return null}}}cn.GOOGLE_SIGN_IN_METHOD="google.com";cn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Io{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Io{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mt._fromIdTokenResponse(e,r,i),o=xg(r);return new Mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xg(r);return new Mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El extends Cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,El.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new El(e,n,r,i)}}function dw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?El._fromErrorAndOperation(t,s,e,r):s})}async function pP(t,e,n=!1){const r=await lo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mP(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Rr(r));const i="reauthenticate";try{const s=await lo(t,dw(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=rf(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e,n=!1){if(Ot(t.app))return Promise.reject(Rr(t));const r="signIn",i=await dw(t,r,e),s=await Mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function yP(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function vP(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function EP(t){return Pt(t).signOut()}const wl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wl,"1"),this.storage.removeItem(wl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wP=1e3,TP=10;class pw extends fw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=lw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);JR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},wP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pw.type="LOCAL";const IP=pw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw extends fw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mw.type="SESSION";const gw=mw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await SP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=lf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const y=g;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(){return window}function CP(t){Qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function RP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function PP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kP(){return yw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _w="firebaseLocalStorageDb",NP=1,Tl="firebaseLocalStorage",vw="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function eu(t,e){return t.transaction([Tl],e?"readwrite":"readonly").objectStore(Tl)}function DP(){const t=indexedDB.deleteDatabase(_w);return new So(t).toPromise()}function Th(){const t=indexedDB.open(_w,NP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Tl,{keyPath:vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Tl)?e(r):(r.close(),await DP(),e(await Th()))})})}async function Og(t,e,n){const r=eu(t,!0).put({[vw]:e,value:n});return new So(r).toPromise()}async function VP(t,e){const n=eu(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function Lg(t,e){const n=eu(t,!0).delete(e);return new So(n).toPromise()}const xP=800,OP=3;class Ew{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>OP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zl._getInstance(kP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RP(),!this.activeServiceWorker)return;this.sender=new AP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||PP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Th();return await Og(e,wl,"1"),await Lg(e,wl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Og(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>VP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=eu(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ew.type="LOCAL";const LP=Ew;new To(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e){return e?pn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends hw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ei(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ei(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ei(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function MP(t){return gP(t.auth,new uf(t),t.bypassAuthState)}function bP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),mP(n,new uf(t),t.bypassAuthState)}async function FP(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),pP(n,new uf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return MP;case"linkViaPopup":case"linkViaRedirect":return FP;case"reauthViaPopup":case"reauthViaRedirect":return bP;default:Jt(this.auth,"internal-error")}}resolve(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=new To(2e3,1e4);async function jP(t,e,n){if(Ot(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=Jl(t);OR(t,e,af);const i=ww(r,n);return new Sr(r,"signInViaPopup",e,i).executeNotNull()}class Sr extends Tw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Sr.currentPopupAction&&Sr.currentPopupAction.cancel(),Sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Sn(this.filter.length===1,"Popup operations only handle one event");const e=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UP.get())};e()}}Sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="pendingRedirect",Da=new Map;class BP extends Tw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Da.get(this.auth._key());if(!e){try{const r=await $P(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Da.set(this.auth._key(),e)}return this.bypassAuthState||Da.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $P(t,e){const n=qP(e),r=WP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function HP(t,e){Da.set(t._key(),e)}function WP(t){return pn(t._redirectPersistence)}function qP(t){return Na(zP,t.config.apiKey,t.name)}async function KP(t,e,n=!1){if(Ot(t.app))return Promise.reject(Rr(t));const r=Jl(t),i=ww(r,e),o=await new BP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=10*60*1e3;class QP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!XP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Iw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mg(e))}saveEventToCache(e){this.cachedEventUids.add(Mg(e)),this.lastProcessedEventTime=Date.now()}}function Mg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Iw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function XP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Iw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e={}){return Wi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function ek(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YP(t);for(const n of e)try{if(tk(n))return}catch{}Jt(t,"unauthorized-domain")}function tk(t){const e=Eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZP.test(n))return!1;if(JP.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=new To(3e4,6e4);function bg(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rk(t){return new Promise((e,n)=>{var r,i,s;function o(){bg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bg(),n(Ut(t,"network-request-failed"))},timeout:nk.get()})}if(!((i=(r=Qt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qt().gapi)===null||s===void 0)&&s.load)o();else{const l=aP("iframefcb");return Qt()[l]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},sP(`${oP()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Va=null,e})}let Va=null;function ik(t){return Va=Va||rk(t),Va}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new To(5e3,15e3),ok="__/auth/iframe",ak="emulator/auth/iframe",lk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ck(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tf(e,ak):`https://${t.config.authDomain}/${ok}`,r={apiKey:e.apiKey,appName:t.name,v:ji},i=uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${yo(r).slice(1)}`}async function hk(t){const e=await ik(t),n=Qt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:ck(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),l=Qt().setTimeout(()=>{s(o)},sk.get());function u(){Qt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fk=500,pk=600,mk="_blank",gk="http://localhost";class Fg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yk(t,e,n,r=fk,i=pk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},dk),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Je().toLowerCase();n&&(l=rw(h)?mk:n),tw(h)&&(e=e||gk,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,k])=>`${y}${A}=${k},`,"");if(YR(h)&&l!=="_self")return _k(e||"",l),new Fg(null);const g=window.open(e||"",l,f);q(g,t,"popup-blocked");try{g.focus()}catch{}return new Fg(g)}function _k(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vk="__/auth/handler",Ek="emulator/auth/handler",wk=encodeURIComponent("fac");async function Ug(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ji,eventId:i};if(e instanceof af){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof Io){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${wk}=${encodeURIComponent(u)}`:"";return`${Tk(t)}?${yo(l).slice(1)}${h}`}function Tk({config:t}){return t.emulator?tf(t,Ek):`https://${t.authDomain}/${vk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="webStorageSupport";class Ik{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gw,this._completeRedirectFn=KP,this._overrideRedirectResult=HP}async _openPopup(e,n,r,i){var s;Sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Ug(e,n,r,Eh(),i);return yk(e,o,lf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ug(e,n,r,Eh(),i);return CP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hk(e),r=new QP(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oc,{type:oc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[oc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ek(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lw()||nw()||sf()}}const Sk=Ik;var jg="@firebase/auth",zg="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rk(t){Pi(new Or("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uw(t)},h=new rP(r,i,s,u);return uP(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pi(new Or("auth-internal",e=>{const n=Jl(e.getProvider("auth").getImmediate());return(r=>new Ak(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(jg,zg,Ck(t)),Jn(jg,zg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pk=5*60,kk=cv("authIdTokenMaxAge")||Pk;let Bg=null;const Nk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kk)return;const i=n==null?void 0:n.token;Bg!==i&&(Bg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Dk(t=gv()){const e=vd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lP(t,{popupRedirectResolver:Sk,persistence:[LP,IP,gw]}),r=cv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=Nk(s.toString());_P(n,o,()=>o(n.currentUser)),yP(n,l=>o(l))}}const i=lv("auth");return i&&cP(n,`http://${i}`),n}function Vk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}iP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Vk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rk("Browser");const xk={apiKey:"AIzaSyCS2cdIvwE8RuZXdAgCL-QE6tAYobYeixw",authDomain:"word-practice-app.firebaseapp.com",projectId:"word-practice-app",storageBucket:"word-practice-app.firebasestorage.app",messagingSenderId:"489669791875",appId:"1:489669791875:web:45291b0005ac5913068bb6"},Ok=mv(xk),Lk=dR(Ok),$g=Dk(),Mk=new cn;function Hg({page:t,totalPages:e,onPageChange:n,t:r}){return G.jsxs("div",{className:"pagination-controls",children:[G.jsx("button",{onClick:()=>n(Math.max(1,t-1)),disabled:t===1,children:r.prev}),G.jsx("span",{children:r.page(t,e)}),G.jsx("button",{onClick:()=>n(Math.min(e,t+1)),disabled:t===e,children:r.next})]})}function bk({word:t,data:e,lang:n,t:r,onReview:i,onDelete:s,getDaysSince:o}){return G.jsxs("div",{className:"word-card",children:[G.jsx("div",{className:"word-card-header",children:G.jsx("strong",{children:t})}),G.jsxs("div",{className:"word-card-sub",children:[G.jsx("div",{children:r[n].studies(e.count)}),G.jsxs("div",{className:"meta",children:[r[n].lastReviewedLabel,": ",r[n].lastStudied(o(e.lastReviewedAt))]})]}),G.jsxs("div",{children:[G.jsx("a",{href:`https://www.google.com/search?q=${t}+meaning`,target:"_blank",onClick:()=>i(t,"dictionary"),children:r[n].dictionary}),G.jsx("a",{href:`https://www.google.com/search?q=pronounce+${t}`,target:"_blank",onClick:()=>i(t,"pronunciation"),style:{marginLeft:"1rem"},children:r[n].pronunciation})]}),G.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem"},children:[G.jsx("button",{onClick:()=>i(t,"complete"),children:r[n].studyDone}),G.jsx("button",{onClick:()=>{confirm(r[n].confirmDelete)&&s(t)},style:{color:"red"},children:r[n].delete})]})]})}function Fk({user:t,setUser:e,auth:n,provider:r,db:i,words:s,setWords:o,t:l,lang:u}){const h=async()=>{const A=await jP(n,r);e(A.user)},f=async()=>{confirm("정말 로그아웃하시겠습니까?")&&(await EP(n),e(null))},g=async()=>{await kR(Tg(i,"users",t.uid),{wordData:s}),alert(l[u].backupSuccess)},y=async()=>{const A=await RR(Tg(i,"users",t.uid));if(A.exists()){const k=A.data().wordData;o(k),localStorage.setItem("wordData",JSON.stringify(k)),alert("✅ 복원 완료! 새로고침하세요.")}};return G.jsxs("div",{children:[!t&&G.jsx("button",{onClick:h,children:l[u].login}),t&&G.jsxs(G.Fragment,{children:[G.jsx("button",{onClick:f,children:l[u].logout}),G.jsx("button",{onClick:g,title:l[u].backup,children:"⬆️"}),G.jsx("button",{onClick:y,title:l[u].restore,children:"⬇️"}),G.jsxs("div",{children:["👋 ",t.displayName]})]})]})}const Wg=()=>new Date().toLocaleDateString("en-CA"),Uk=t=>{const e=new Date().toLocaleDateString("en-CA"),n=new Date(t).toLocaleDateString("en-CA"),r=new Date(e),i=new Date(n),s=r.getTime()-i.getTime();return Math.floor(s/(1e3*60*60*24))},an={ko:{title:"EchoWord",totalWords:t=>`총 ${t}단어`,inputPlaceholder:"단어를 입력하세요...",login:"로그인",logout:"로그아웃",backup:"백업",restore:"복원",sortABC:"A–Z",sortCount:"횟수",sortDate:"학습일",studies:t=>`학습 횟수: ${t}`,lastReviewedLabel:"학습일",lastStudied:t=>t===0?"오늘":`${t}일 전`,dictionary:"사전",pronunciation:"발음",studyDone:"학습 완료",delete:"삭제",confirmDelete:"정말 삭제하시겠습니까?",backupSuccess:"✅ 백업 완료!",prev:"이전",next:"다음",page:(t,e)=>`페이지 ${t} / ${e}`,version:t=>`버전: ${t}`,darkModeOn:"다크모드",darkModeOff:"라이트모드"},en:{title:"EchoWord",totalWords:t=>`${t} words`,inputPlaceholder:"Enter a word...",login:"Sign In",logout:"Sign Out",backup:"Backup",restore:"Restore",sortABC:"A–Z",sortCount:"Count",sortDate:"Reviewed",studies:t=>`Studied: ${t} times`,lastReviewedLabel:"Last reviewed",lastStudied:t=>t===0?"Today":`${t} days ago`,dictionary:"Dictionary",pronunciation:"Pronunciation",studyDone:"Mark Studied",delete:"Delete",confirmDelete:"Are you sure you want to delete this word?",backupSuccess:"✅ Backup complete!",prev:"← Prev",next:"Next →",page:(t,e)=>`Page ${t} of ${e}`,version:t=>`Version: ${t}`,darkModeOn:"Dark Mode",darkModeOff:"Light Mode"}};function jk(){const[t,e]=vt.useState({}),[n,r]=vt.useState(""),[i,s]=vt.useState(null),[o,l]=vt.useState("countAsc"),[u,h]=vt.useState(1),[f,g]=vt.useState(()=>localStorage.getItem("lang")||"ko"),[y,A]=vt.useState(()=>localStorage.getItem("darkMode")==="true"),k=30;vt.useEffect(()=>{document.body.classList.toggle("dark-mode",y),localStorage.setItem("darkMode",y)},[y]),vt.useEffect(()=>{const O=JSON.parse(localStorage.getItem("wordData"))||{};e(O),vP($g,L=>s(L))},[]);const D=O=>{const L=O.toLowerCase(),E=Wg(),m=t[L],_={...t};m?_[L]={...m,lastReviewedAt:E}:_[L]={count:0,lastReviewedAt:E,reviewedSources:[]},e(_),localStorage.setItem("wordData",JSON.stringify(_))},M=(O,L)=>{const E=Wg(),m=t[O];if(!m)return;const _=m.lastReviewedAt===E,w=m.reviewedSources||[],C=_&&w.length>0;if(_&&w.includes(L))return;const T=_?[...new Set([...w,L])]:[L],Ze={...t,[O]:{count:C?m.count:m.count+1,lastReviewedAt:E,reviewedSources:T}};e(Ze),localStorage.setItem("wordData",JSON.stringify(Ze))},I=O=>{const L={...t};delete L[O],e(L),localStorage.setItem("wordData",JSON.stringify(L))},v=Object.entries(t).sort(([O,L],[E,m])=>{switch(o){case"abcAsc":return O.localeCompare(E);case"abcDesc":return E.localeCompare(O);case"countDesc":return m.count-L.count;case"dateAsc":return new Date(L.lastReviewedAt)-new Date(m.lastReviewedAt);case"dateDesc":return new Date(m.lastReviewedAt)-new Date(L.lastReviewedAt);default:return L.count-m.count}}),S=v.slice((u-1)*k,u*k),V=Math.ceil(v.length/k);return G.jsxs("div",{className:"container",style:{padding:"1rem",fontFamily:"Arial"},children:[G.jsxs("div",{className:"header-row",children:[G.jsxs("h1",{children:["EchoWord (",Object.keys(t).length," words)"]}),G.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[G.jsx("button",{className:"dark-mode-toggle-button",onClick:()=>A(O=>!O),children:y?"🌙":"🌞"}),G.jsx("button",{className:"language-toggle-button",onClick:()=>{const O=f==="ko"?"en":"ko";g(O),localStorage.setItem("lang",O)},children:f==="ko"?"🇺🇸":"🇰🇷"})]})]}),G.jsxs("div",{className:"top-group",children:[G.jsx("div",{className:"row",children:G.jsx(Fk,{user:i,setUser:s,auth:$g,provider:Mk,db:Lk,words:t,setWords:e,t:an,lang:f})}),G.jsxs("div",{className:"row",children:[G.jsx("button",{onClick:()=>l(O=>O==="abcAsc"?"abcDesc":"abcAsc"),children:an[f].sortABC}),G.jsx("button",{onClick:()=>l(O=>O==="countAsc"?"countDesc":"countAsc"),children:an[f].sortCount}),G.jsx("button",{onClick:()=>l(O=>O==="dateAsc"?"dateDesc":"dateAsc"),children:an[f].sortDate})]})]}),V>1&&G.jsx(Hg,{page:u,totalPages:V,onPageChange:h,t:an[f]}),G.jsx("input",{type:"text",value:n,onChange:O=>r(O.target.value),onKeyDown:O=>{if(O.key==="Enter"){const L=n.trim().toLowerCase();L&&D(L),r("")}},placeholder:an[f].inputPlaceholder}),G.jsx("div",{children:S.map(([O,L])=>G.jsx(bk,{word:O,data:L,lang:f,t:an,getDaysSince:Uk,onReview:M,onDelete:I},O))}),V>1&&G.jsx(Hg,{page:u,totalPages:V,onPageChange:h,t:an[f]}),G.jsx("div",{style:{marginTop:"2rem",fontSize:"0.8rem",color:"#888",textAlign:"center"},children:an[f].version("1.1.20")})]})}iv(document.getElementById("root")).render(G.jsx(vt.StrictMode,{children:G.jsx(jk,{})}));
