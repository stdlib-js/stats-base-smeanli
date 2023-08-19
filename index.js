// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("path")):"function"==typeof define&&define.amd?define(["path"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).smeanli=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,c=o.__lookupGetter__,f=o.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(r){return!1}}()?e:function(r,t,n){var e,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===u.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(c.call(r,t)||f.call(r,t)?(e=r.__proto__,r.__proto__=o,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(r,t,n.get),p&&a&&a.call(r,t,n.set),r};var l=n;function y(r,t,n){l(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var p="function"==typeof Math.fround?Math.fround:null;var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var j,_="function"==typeof Symbol?Symbol.toStringTag:"";j=b()?function(r){var t,n,e,o,u;if(null==r)return v.call(r);n=r[_],u=_,t=null!=(o=r)&&d.call(o,u);try{r[_]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[_]=n:delete r[_],e}:function(r){return v.call(r)};var m=j,g="function"==typeof Float32Array;var w=Number.POSITIVE_INFINITY,h="function"==typeof Float32Array?Float32Array:null;var O,A="function"==typeof Float32Array?Float32Array:void 0;O=function(){var r,t,n;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,5e40]),n=t,r=(g&&n instanceof Float32Array||"[object Float32Array]"===m(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===w}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var E=new O(1);var S="function"==typeof p?p:function(r){return E[0]=r,E[0]};var F=/./;function P(r){return"boolean"==typeof r}var T=Boolean.prototype.toString;var N=b();function B(r){return"object"==typeof r&&(r instanceof Boolean||(N?function(r){try{return T.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===m(r)))}function q(r){return P(r)||B(r)}function I(){return new Function("return this;")()}y(q,"isPrimitive",P),y(q,"isObject",B);var x="object"==typeof self?self:null,M="object"==typeof window?window:null,V="object"==typeof global?global:null;var k=function(r){if(arguments.length){if(!P(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return I()}if(x)return x;if(M)return M;if(V)return V;throw new Error("unexpected error. Unable to resolve global object.")}(),C=k.document&&k.document.childNodes,G=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var R,$=/^\s*function\s*([^(]*)/i;y(L,"REGEXP",$),R=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)};var D=R;function J(r){return null!==r&&"object"==typeof r}var U=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!D(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(J);function X(r){var t,n,e,o;if(("Object"===(n=m(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=$.exec(e.toString()))return t[1]}return J(o=r)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":n}y(J,"isObjectLikeArray",U);var Y="function"==typeof F||"object"==typeof G||"function"==typeof C?function(r){return X(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?X(r).toLowerCase():t};var z,H,K=Object.getPrototypeOf;H=Object.getPrototypeOf,z="function"===Y(H)?K:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===m(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Q=z;function W(r){return null==r?null:(r=Object(r),Q(r))}function Z(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===m(r))return!0;r=W(r)}return!1}function rr(r){try{return function(r){throw new Error('Could not dynamically require "'+r+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}(r)}catch(r){return Z(r)?r:"object"==typeof r?new Error(JSON.stringify(r)):new Error(r.toString())}}function tr(r){return Math.abs(r)}function nr(r,t,n,e){var o,u,i,a,c,f;if(r<=0)return 0;if(1===r||0===e)return S(t+n[0]);for(u=e<0?(1-r)*e:0,o=0,c=0,f=0;f<r;f++)i=S(t+n[u]),a=S(o+i),c=tr(o)>=tr(i)?S(c+S(S(o-a)+i)):S(c+S(S(i-a)+o)),o=a,u+=e;return S(o+c)}y(nr,"ndarray",(function(r,t,n,e,o){var u,i,a,c,f,l;if(r<=0)return 0;if(1===r||0===e)return S(t+n[o]);for(i=o,u=0,f=0,l=0;l<r;l++)a=S(t+n[i]),c=S(u+a),f=tr(u)>=tr(a)?S(f+S(S(u-c)+a)):S(f+S(S(a-c)+u)),u=c,i+=e;return S(u+f)}));var er,or=rr((0,r.join)(__dirname,"./native.js")),ur=er=Z(or)?nr:or;const{ndarray:ir}=er;function ar(r,t,n,e){return ur(r,t,n,e)}y(ar,"ndarray",(function(r,t,n,e,o){return ir(r,t,n,e,o)}));var cr,fr=rr((0,r.join)(__dirname,"./native.js"));cr=Z(fr)?ar:fr;const{ndarray:lr}=cr;function yr(r,t,n){var e;return r<=0?NaN:1===r||0===n?t[0]:S(t[e=n<0?(1-r)*n:0]+S(lr(r-1,-t[e],t,n,e+n)/r))}return y(yr,"ndarray",(function(r,t,n,e){return r<=0?NaN:1===r||0===n?t[e]:S(t[e]+S(lr(r-1,-t[e],t,n,e+n)/r))})),yr}));
//# sourceMappingURL=index.js.map
