// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.0.7-esm/index.mjs";import{ndarray as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/blas-ext-base-sapxsum@v0.0.9-esm/index.mjs";function r(e,r,n){var a;return e<=0?NaN:1===e||0===n?r[0]:t(r[a=n<0?(1-e)*n:0]+t(s(e-1,-r[a],r,n,a+n)/e))}function n(e,r,n,a){return e<=0?NaN:1===e||0===n?r[a]:t(r[a]+t(s(e-1,-r[a],r,n,a+n)/e))}e(r,"ndarray",n);export{r as default,n as ndarray};
//# sourceMappingURL=index.mjs.map
