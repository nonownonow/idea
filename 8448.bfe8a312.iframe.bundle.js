/*! For license information please see 8448.bfe8a312.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8448],{"./node_modules/@fxts/core/dist/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qh:()=>Lazy_entries,yR:()=>esm_identity,UI:()=>Lazy_map,uK:()=>esm_partition,zG:()=>esm_pipe,ek:()=>esm_some,qo:()=>esm_toArray});class error_AsyncFunctionException extends Error{constructor(message=error_AsyncFunctionException.MESSAGE){super(message)}}function utils_isIterable(a){return"function"==typeof(null==a?void 0:a[Symbol.iterator])}function utils_isAsyncIterable(a){return"function"==typeof(null==a?void 0:a[Symbol.asyncIterator])}error_AsyncFunctionException.MESSAGE="'Iterable' can not used with async function.\nIf you want to deal with async function, see: [toAsync](https://fxts.dev/docs/toAsync)";const utils_isPromise=a=>a instanceof Promise||null!==a&&"object"==typeof a&&"function"==typeof a.then&&"function"==typeof a.catch;const Lazy_map=function map_map(f,iterable){if(void 0===iterable)return iterable=>map_map(f,iterable);if(utils_isIterable(iterable))return function sync(f,iterable){const iterator=iterable[Symbol.iterator]();return{next(){const{done,value}=iterator.next();if(done)return{done:!0,value:void 0};const res=f(value);if(utils_isPromise(res))throw new error_AsyncFunctionException;return{done:!1,value:res}},[Symbol.iterator](){return this}}}(f,iterable);if(utils_isAsyncIterable(iterable))return function map_async(f,iterable){const iterator=iterable[Symbol.asyncIterator]();return{async next(_concurrent){const{done,value}=await iterator.next(_concurrent);return done?{done,value}:{done:!1,value:await f(value)}},[Symbol.asyncIterator](){return this}}}(f,iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};class Concurrent{constructor(length){this.length=length}static of(length){return new Concurrent(length)}}const concurrent_isConcurrent=concurrent=>concurrent instanceof Concurrent;const Lazy_concurrent=function concurrent_concurrent(length,iterable){if(void 0===iterable)return iterable=>concurrent_concurrent(length,iterable);if(!Number.isFinite(length)||length<=0)throw new RangeError("'length' must be positive integer");if(!utils_isAsyncIterable(iterable))throw new TypeError("'iterable' must be type of AsyncIterable");const iterator=iterable[Symbol.asyncIterator](),buffer=[];let prev=Promise.resolve(),nextCallCount=0,resolvedItemCount=0,finished=!1,pending=!1;const settlementQueue=[],fillBuffer=()=>{if(pending)prev=prev.then((()=>{!finished&&nextCallCount>resolvedItemCount&&fillBuffer()}));else{const nextItems=Promise.allSettled(Array.from({length},(()=>iterator.next(Concurrent.of(length)))));pending=!0,prev=prev.then((()=>nextItems)).then((nextItems=>{buffer.push(...nextItems),pending=!1,recur()}))}};function recur(){finished||nextCallCount===resolvedItemCount||(buffer.length>0?(()=>{for(;buffer.length>0&&nextCallCount>resolvedItemCount;){const p=buffer.shift(),[resolve,reject]=settlementQueue.shift();if("fulfilled"!==p.status){reject(p.reason),finished=!0;break}resolvedItemCount++,resolve(p.value),p.value.done&&(finished=!0)}})():fillBuffer())}return{[Symbol.asyncIterator](){return this},next:()=>(nextCallCount++,finished?{done:!0,value:void 0}:new Promise(((resolve,reject)=>{settlementQueue.push([resolve,reject]),recur()})))}};function asyncSequential(f,iterable){const iterator=iterable[Symbol.asyncIterator]();let end=!1;return{[Symbol.asyncIterator](){return this},async next(_concurrent){if(end)return{done:!0,value:void 0};const{done,value}=await iterator.next(_concurrent);if(done||end)return{done:!0,value:void 0};const cond=await f(value);return end?{done:!0,value:void 0}:(cond&&(end=!0),{done:!1,value})}}}const Lazy_takeUntil=function takeUntil_takeUntil(f,iterable){if(void 0===iterable)return iterable=>takeUntil_takeUntil(f,iterable);if(utils_isIterable(iterable))return function*takeUntil_sync(f,iterable){for(const item of iterable){yield item;const res=f(item);if(utils_isPromise(res))throw new error_AsyncFunctionException;if(res)break}}(f,iterable);if(utils_isAsyncIterable(iterable))return function takeUntil_async(f,iterable){let _iterator;return{next:async _concurrent=>(void 0===_iterator&&(_iterator=concurrent_isConcurrent(_concurrent)?asyncSequential(f,Lazy_concurrent(_concurrent.length,iterable)):asyncSequential(f,iterable)),_iterator.next(_concurrent)),[Symbol.asyncIterator](){return this}}}(f,iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_pipe1=(a,f)=>utils_isPromise(a)?a.then(f):f(a);function reduce_sync(f,acc,iterable){for(const a of iterable)acc=f(acc,a);return acc}async function reduce_async(f,acc,iterable){for await(const a of iterable)acc=await esm_pipe1(acc,(acc=>f(acc,a)));return acc}const esm_reduce=function reduce_reduce(f,seed,iterable){if(void 0===iterable){if(void 0===seed)return iterable=>reduce_reduce(f,iterable);if(utils_isIterable(seed)){const iterator=seed[Symbol.iterator](),{done,value}=iterator.next();if(done)return;return reduce_sync(f,value,{[Symbol.iterator]:()=>iterator})}if(utils_isAsyncIterable(seed)){const iterator=seed[Symbol.asyncIterator]();return iterator.next().then((({done,value})=>{if(!done)return reduce_async(f,value,{[Symbol.asyncIterator]:()=>iterator})}))}throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")}if(utils_isIterable(iterable))return reduce_sync(f,seed,iterable);if(utils_isAsyncIterable(iterable))return reduce_async(f,Promise.resolve(seed),iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_groupBy=function groupBy(f,iterable){if(void 0===iterable)return iterable=>groupBy(f,iterable);const obj={};if(utils_isIterable(iterable))return esm_reduce(((group,a)=>{const key=f(a);if(utils_isPromise(key))throw new error_AsyncFunctionException;return(group[key]||(group[key]=[])).push(a),group}),obj,iterable);if(utils_isAsyncIterable(iterable))return esm_reduce((async(group,a)=>{const key=await f(a);return(group[key]||(group[key]=[])).push(a),group}),obj,iterable);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_identity=function identity_identity(a){return a};const esm_pipe=function pipe_pipe(a,...fns){return esm_reduce(esm_pipe1,a,fns)};const esm_some=function some_some(f,iterable){if(void 0===iterable)return iterable=>some_some(f,iterable);if(utils_isIterable(iterable))return esm_pipe(Lazy_map(f,iterable),Lazy_takeUntil(esm_identity),esm_reduce(((a,b)=>a||b)),Boolean);if(utils_isAsyncIterable(iterable))return esm_pipe(Lazy_map(f,iterable),Lazy_takeUntil(esm_identity),esm_reduce(((a,b)=>a||b)),Boolean);throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_partition=function partition(f,iterable){if(void 0===iterable)return iterable=>partition(f,iterable);if(utils_isIterable(iterable)){const group=esm_groupBy((a=>{const key=f(a);if(utils_isPromise(key))throw new error_AsyncFunctionException;return`${Boolean(key)}`}),iterable);return[group.true||[],group.false||[]]}if(utils_isAsyncIterable(iterable)){return esm_groupBy((async a=>`${Boolean(await f(a))}`),iterable).then((group=>[group.true||[],group.false||[]]))}throw new TypeError("'iterable' must be type of Iterable or AsyncIterable")};const esm_toArray=function toArray_toArray(iter){return utils_isAsyncIterable(iter)?async function toArray_async(iterable){const res=[];for await(const item of iterable)res.push(item);return res}(iter):utils_isIterable(iter)?Array.from(iter):[]},rsAstral="[\\ud800-\\udfff]",rsCombo="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff]",rsFitz="\\ud83c[\\udffb-\\udfff]",rsNonAstral="[^\\ud800-\\udfff]",rsRegional="(?:\\ud83c[\\udde6-\\uddff]){2}",rsSurrPair="[\\ud800-\\udbff][\\udc00-\\udfff]",reOptMod=`${`(?:${rsCombo}|${rsFitz})`}?`,rsSeq="[\\ufe0e\\ufe0f]?"+reOptMod+`(?:\\u200d(?:${[rsNonAstral,rsRegional,rsSurrPair].join("|")})${"[\\ufe0e\\ufe0f]?"+reOptMod})*`,rsSymbol=`(?:${[`${rsNonAstral}${rsCombo}?`,rsCombo,rsRegional,rsSurrPair,rsAstral].join("|")})`;RegExp(`${rsFitz}(?=${rsFitz})|${rsSymbol+rsSeq}`,"g");const Lazy_entries=function*entries(obj){for(const k in obj)Object.prototype.hasOwnProperty.call(obj,k)&&(yield[k,obj[k]])}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);