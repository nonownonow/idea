(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({461:"fxtsx-introduction-mdx",678:"fxtsx-html-data-view-Figure-Figure-stories",907:"fxtsx-html-data-view-Dialog2-introduction-mdx",1086:"fxtsx-html-data-input-SelectBox-SelectBox-stories",1106:"fxtsx-html-data-view-Dialog-Dialog-stories",1116:"fxtsx-DATAFRAME-DATAFRAME-stories",1164:"fxtsx-html-data-view-Dialog2-Dialog-stories",1209:"fxtsx-html-data-input-Select-sketch-mdx",1690:"fxtsx-html-data-input-InputField-InputField-stories",1920:"fxtsx-html-Value-Button-Button-stories",2051:"fxtsx-html-data-view-DropDown-DropDown-stories",2231:"fxtsx-html-Value-Dt-Dt-stories",2425:"fxtsx-ENTRY-ENTRY-stories",2446:"fxtsx-html-Value-Option-Option-stories",3053:"fxtsx-html-data-structure-CardList-CardList-stories",3646:"fxtsx-html-data-structure-Ul-Ul-stories",3840:"fxtsx-html-data-input-TextAreaField-TextAreaField-stories",3858:"fxtsx-html-data-structure-Table-Table-stories",3914:"fxtsx-html-data-input-TextField-TextField-stories",4097:"fxtsx-html-Value-Img-Img-stories",4405:"fxtsx-html-sectioning-Article-Article-stories",4499:"fxtsx-html-Value-CheckOption-CheckOption-stories",4721:"fxtsx-html-data-structure-Tr-Tr-stories",4796:"fxtsx-html-data-input-SelectField-SelectField-stories",4847:"fxtsx-html-Value-P-P-stories",4853:"fxtsx-html-data-input-InputBox-Checkbox-Checkbox-stories",5335:"fxtsx-html-data-structure-Ol-Ol-stories",5364:"fxtsx-html-Value-Td-Td-stories",5389:"fxtsx-html-Value-Dd-Dd-stories",5419:"fxtsx-html-Value-Span-stories",5465:"fxtsx-COLLECTION-COLLECTION-stories",6578:"fxtsx-html-data-input-FileField-FileField-stories",6629:"fxtsx-html-data-input-Select-Select-stories",6923:"fxtsx-html-sectioning-Fieldset-stories",7013:"fxtsx-html-sectioning-Heading-Heading-stories",7173:"fxtsx-html-sectioning-Aside-Aside-stories",7321:"fxtsx-VALUE-VALUE-stories",7395:"fxtsx-html-sectioning-Section-Section-stories",7471:"fxtsx-DICTIONARY-DICTIONARY-stories",7507:"fxtsx-html-data-view-Details-Details-stories",7523:"fxtsx-html-data-input-Select-select-mdx",7916:"fxtsx-html-data-input-InputBox-InputBox-stories",8059:"fxtsx-HEADING-HEADING-stories",8723:"fxtsx-html-Value-Th-stories",9358:"fxtsx-html-introduction-mdx",9493:"fxtsx-html-sectioning-Nav-Nav-stories",9775:"fxtsx-html-data-input-InputBox-RadioBox-RadioBox-stories",9814:"fxtsx-html-data-structure-Card-Card-stories",9880:"fxtsx-SECTIONING-SECTIONING-stories"}[chunkId]||chunkId)+"."+{150:"4c26ea26",461:"ab7dcbec",678:"f487701c",907:"b0499a24",1086:"ca54b135",1106:"bfb4f4de",1116:"6ff23935",1164:"80f7092f",1209:"27078893",1690:"12ad1811",1729:"a1ee704a",1920:"8dc097ab",2051:"dff6b4a5",2085:"73f30be7",2231:"422895ad",2425:"0bbf3f7b",2446:"e5f1e2b4",3053:"cfe67d04",3646:"31cab9a4",3840:"ecc38070",3858:"30ce2039",3914:"2b6293f2",4097:"f1bc5fca",4331:"5f66edf8",4405:"d3b3c84d",4499:"649fa20b",4721:"380082d6",4796:"0fb81192",4847:"79cd025b",4853:"b6b23f30",4906:"95b534c2",5335:"bdc36fc6",5364:"d89e531e",5389:"9f675854",5419:"28b2c489",5465:"505f0f94",5735:"2e2cf134",6486:"c2fc7b3f",6578:"6b369d56",6629:"45075342",6719:"b66cd822",6870:"6a098f94",6923:"a2199a94",7013:"ba765089",7173:"3d7a62b0",7321:"39fa3a1e",7328:"85a753fe",7395:"8aed3e03",7471:"c589f496",7507:"bacfaa23",7523:"067f8698",7644:"20e2ead5",7916:"184b4f64",8059:"f9baaf18",8448:"bfe8a312",8723:"e87b5245",8877:"09786a91",9115:"27e36c4e",9350:"48889def",9358:"741f6d12",9433:"4feb4e9d",9493:"74a89b14",9775:"edbcd9a2",9814:"c88ec760",9880:"c3e28936"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk=self.webpackChunk||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();