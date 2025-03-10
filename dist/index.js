"use strict";var u=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=u(function(g,v){
var s=require('@stdlib/number-float64-base-to-float32/dist'),y=require('@stdlib/blas-ext-base-sapxsum/dist').ndarray;function d(e,r,a,i){return e<=0?NaN:e===1||a===0?r[i]:s(r[i]+s(y(e-1,-r[i],r,a,i+a)/e))}v.exports=d
});var o=u(function(h,q){
var j=require('@stdlib/strided-base-stride2offset/dist'),f=n();function x(e,r,a){return f(e,r,a,j(e,a))}q.exports=x
});var c=u(function(k,m){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=o(),_=n();R(l,"ndarray",_);m.exports=l
});var E=require("path").join,F=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),T=c(),t,p=F(E(__dirname,"./native.js"));O(p)?t=T:t=p;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
