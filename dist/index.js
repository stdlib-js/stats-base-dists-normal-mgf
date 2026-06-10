"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var c=a(function(R,o){
var u=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-special-exp/dist'),p=require('@stdlib/math-base-special-pow/dist');function N(e,r,n){return u(e)||u(r)||u(n)||n<=0?NaN:s(r*e+.5*p(n*e,2))}o.exports=N
});var q=a(function(b,f){
var x=require('@stdlib/utils-constant-function/dist'),i=require('@stdlib/math-base-assert-is-nan/dist'),y=require('@stdlib/math-base-special-exp/dist'),w=require('@stdlib/math-base-special-pow/dist');function d(e,r){if(i(e)||i(r)||r<=0)return x(NaN);return n;function n(t){return i(t)?NaN:y(e*t+.5*w(r*t,2))}}f.exports=d
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=c(),F=q();l(v,"factory",F);module.exports=v;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
