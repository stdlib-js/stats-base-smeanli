"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=u(function(g,s){
var t=require('@stdlib/number-float64-base-to-float32/dist'),f=require('@stdlib/blas-ext-base-sapxsum/dist').ndarray;function j(e,r,i){var a;return e<=0?NaN:e===1||i===0?r[0]:(i<0?a=(1-e)*i:a=0,t(r[a]+t(f(e-1,-r[a],r,i,a+i)/e)))}s.exports=j
});var l=u(function(h,q){
var o=require('@stdlib/number-float64-base-to-float32/dist'),F=require('@stdlib/blas-ext-base-sapxsum/dist').ndarray;function R(e,r,i,a){return e<=0?NaN:e===1||i===0?r[a]:o(r[a]+o(F(e-1,-r[a],r,i,a+i)/e))}q.exports=R
});var c=u(function(k,p){
var T=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),m=v(),_=l();T(m,"ndarray",_);p.exports=m
});var x=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=c(),n,y=E(x(__dirname,"./native.js"));O(y)?n=b:n=y;module.exports=n;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
