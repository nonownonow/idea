"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7507],{"./packages/fxtsx-html/data-view/Details/Details.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Details_stories});var esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),util=__webpack_require__("./packages/fxtsx/util/util.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Details=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/fxtsx-html/data-view/Details/Details.css"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Details.Z,options);Details.Z&&Details.Z.locals&&Details.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_nuso39o57(){var path="/Users/youilhwan/Code/moldives/packages/fxtsx-html/data-view/Details/Details.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"95c4bc203086936cdfe7b176b93d3d9598832a34"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/fxtsx-html/data-view/Details/Details.tsx",statementMap:{0:{start:{line:12,column:23},end:{line:32,column:1}},1:{start:{line:20,column:8},end:{line:20,column:13}},2:{start:{line:21,column:4},end:{line:30,column:6}}},fnMap:{0:{name:"TextField",decl:{start:{line:13,column:11},end:{line:13,column:20}},loc:{start:{line:13,column:33},end:{line:31,column:3}},line:13}},branchMap:{0:{loc:{start:{line:16,column:6},end:{line:16,column:21}},type:"default-arg",locations:[{start:{line:16,column:18},end:{line:16,column:21}}],line:16},1:{loc:{start:{line:17,column:6},end:{line:17,column:22}},type:"default-arg",locations:[{start:{line:17,column:19},end:{line:17,column:22}}],line:17}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0],1:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"95c4bc203086936cdfe7b176b93d3d9598832a34"});var actualCoverage=coverage[path];return cov_nuso39o57=function(){return actualCoverage},actualCoverage}cov_nuso39o57();const Details_Details_Details=(cov_nuso39o57().s[0]++,(0,react.forwardRef)((function TextField(props,ref){cov_nuso39o57().f[0]++;const{$summary,$openMark=(cov_nuso39o57().b[0][0]++,"+"),$closeMark=(cov_nuso39o57().b[1][0]++,"-"),children,...restProps}=(cov_nuso39o57().s[1]++,props);return cov_nuso39o57().s[2]++,(0,jsx_runtime.jsxs)("details",{"data-fx-details":!0,...restProps,ref,children:[(0,jsx_runtime.jsxs)("summary",{children:[(0,jsx_runtime.jsx)("span",{...(0,util.qL)($summary)}),(0,jsx_runtime.jsx)("span",{"data-details-open-mark":!0,...(0,util.qL)($openMark)}),(0,jsx_runtime.jsx)("span",{"data-details-close-mark":!0,...(0,util.qL)($closeMark)})]}),children]})})));try{Details_Details_Details.displayName="Details",Details_Details_Details.__docgenInfo={description:"",displayName:"Details",props:{$summary:{defaultValue:null,description:"",name:"$summary",required:!0,type:{name:"ReactNode"}},$openMark:{defaultValue:null,description:"",name:"$openMark",required:!1,type:{name:"ReactNode"}},$closeMark:{defaultValue:null,description:"",name:"$closeMark",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx-html/data-view/Details/Details.tsx#Details"]={docgenInfo:Details_Details_Details.__docgenInfo,name:"Details",path:"packages/fxtsx-html/data-view/Details/Details.tsx#Details"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");const Details_stories={component:Details_Details_Details,tags:["autodocs"]},Default={args:{children:(0,jsx_runtime.jsx)("div",{children:"Contents"}),$summary:"Summary",$openMark:"[열기]",$closeMark:"[닫기]"},play:async({canvasElement})=>{const screen=(0,dist.uh)(canvasElement),summary=screen.getByText("Summary"),openMark=screen.getByText("[열기]"),closeMark=screen.getByText("[닫기]");await dist.mV.click(summary),(0,esm.l)(openMark).not.toBeVisible(),await(0,esm.l)(closeMark).toBeVisible(),await dist.mV.click(summary),(0,esm.l)(closeMark).not.toBeVisible(),await(0,esm.l)(openMark).toBeVisible()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <div>Contents</div>,\n    $summary: "Summary",\n    $openMark: "[열기]",\n    $closeMark: "[닫기]"\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const screen = within(canvasElement);\n    const summary = screen.getByText("Summary");\n    const openMark = screen.getByText("[열기]");\n    const closeMark = screen.getByText("[닫기]");\n    await userEvent.click(summary);\n    expect(openMark).not.toBeVisible();\n    await expect(closeMark).toBeVisible();\n    await userEvent.click(summary);\n    expect(closeMark).not.toBeVisible();\n    await expect(openMark).toBeVisible();\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/fxtsx/util/util.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{RK:()=>Noop,iJ:()=>Identity,qL:()=>htmlChildren,wA:()=>Component});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_fxts_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@fxts/core/dist/esm/index.js"),lodash__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/lodash.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_lvlmrovqx(){var path="/Users/youilhwan/Code/moldives/packages/fxtsx/util/util.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"da605f4543d681bd89f4820a835a91946b7c0050"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/fxtsx/util/util.tsx",statementMap:{0:{start:{line:8,column:2},end:{line:19,column:3}},1:{start:{line:10,column:4},end:{line:14,column:6}},2:{start:{line:16,column:4},end:{line:18,column:6}},3:{start:{line:20,column:2},end:{line:20,column:16}},4:{start:{line:29,column:2},end:{line:41,column:5}},5:{start:{line:30,column:39},end:{line:34,column:5}},6:{start:{line:32,column:22},end:{line:32,column:73}},7:{start:{line:35,column:4},end:{line:40,column:6}},8:{start:{line:44,column:27},end:{line:45,column:68}},9:{start:{line:45,column:2},end:{line:45,column:68}},10:{start:{line:45,column:17},end:{line:45,column:67}},11:{start:{line:48,column:2},end:{line:48,column:27}},12:{start:{line:52,column:2},end:{line:52,column:14}}},fnMap:{0:{name:"htmlChildren",decl:{start:{line:6,column:16},end:{line:6,column:28}},loc:{start:{line:6,column:46},end:{line:21,column:1}},line:6},1:{name:"Component",decl:{start:{line:28,column:16},end:{line:28,column:25}},loc:{start:{line:28,column:64},end:{line:42,column:1}},line:28},2:{name:"(anonymous_2)",decl:{start:{line:29,column:30},end:{line:29,column:31}},loc:{start:{line:29,column:56},end:{line:41,column:3}},line:29},3:{name:"(anonymous_3)",decl:{start:{line:32,column:10},end:{line:32,column:11}},loc:{start:{line:32,column:22},end:{line:32,column:73}},line:32},4:{name:"(anonymous_4)",decl:{start:{line:44,column:27},end:{line:44,column:28}},loc:{start:{line:45,column:2},end:{line:45,column:68}},line:45},5:{name:"(anonymous_5)",decl:{start:{line:45,column:10},end:{line:45,column:11}},loc:{start:{line:45,column:17},end:{line:45,column:67}},line:45},6:{name:"Identity",decl:{start:{line:47,column:16},end:{line:47,column:24}},loc:{start:{line:47,column:61},end:{line:49,column:1}},line:47},7:{name:"Noop",decl:{start:{line:51,column:16},end:{line:51,column:20}},loc:{start:{line:51,column:23},end:{line:53,column:1}},line:51}},branchMap:{0:{loc:{start:{line:8,column:2},end:{line:19,column:3}},type:"if",locations:[{start:{line:8,column:2},end:{line:19,column:3}},{start:{line:15,column:9},end:{line:19,column:3}}],line:8},1:{loc:{start:{line:32,column:23},end:{line:32,column:69}},type:"cond-expr",locations:[{start:{line:32,column:43},end:{line:32,column:44}},{start:{line:32,column:47},end:{line:32,column:69}}],line:32}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:0,11:0,12:0},f:{0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"da605f4543d681bd89f4820a835a91946b7c0050"});var actualCoverage=coverage[path];return cov_lvlmrovqx=function(){return actualCoverage},actualCoverage}function htmlChildren(html){let result;return cov_lvlmrovqx().f[0]++,cov_lvlmrovqx().s[0]++,"string"==typeof html?(cov_lvlmrovqx().b[0][0]++,cov_lvlmrovqx().s[1]++,result={dangerouslySetInnerHTML:{__html:html}}):(cov_lvlmrovqx().b[0][1]++,cov_lvlmrovqx().s[2]++,result={children:html}),cov_lvlmrovqx().s[3]++,result}function Component(testId,description){return cov_lvlmrovqx().f[1]++,cov_lvlmrovqx().s[4]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>{cov_lvlmrovqx().f[2]++;const{children,...restProps}=(cov_lvlmrovqx().s[5]++,(0,_fxts_core__WEBPACK_IMPORTED_MODULE_1__.zG)((0,_fxts_core__WEBPACK_IMPORTED_MODULE_1__.qh)(props),(0,_fxts_core__WEBPACK_IMPORTED_MODULE_1__.UI)((([k,v])=>(cov_lvlmrovqx().f[3]++,cov_lvlmrovqx().s[6]++,["className"===k?(cov_lvlmrovqx().b[1][0]++,k):(cov_lvlmrovqx().b[1][1]++,(0,lodash__WEBPACK_IMPORTED_MODULE_2__.kebabCase)(k)),v]))),Object.fromEntries));return cov_lvlmrovqx().s[7]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{"data-testid":testId,...restProps,ref,children:[description,children]})}))}cov_lvlmrovqx(),cov_lvlmrovqx().s[8]++;const CbComponent=testId=>(cov_lvlmrovqx().f[4]++,cov_lvlmrovqx().s[9]++,jest.fn((p=>(cov_lvlmrovqx().f[5]++,cov_lvlmrovqx().s[10]++,_jsx("div",{"data-testid":testId,children:p.children})))));function Identity(p){return cov_lvlmrovqx().f[6]++,cov_lvlmrovqx().s[11]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:p.children})}function Noop(){return cov_lvlmrovqx().f[7]++,cov_lvlmrovqx().s[12]++,null}try{htmlChildren.displayName="htmlChildren",htmlChildren.__docgenInfo={description:"",displayName:"htmlChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx/util/util.tsx#htmlChildren"]={docgenInfo:htmlChildren.__docgenInfo,name:"htmlChildren",path:"packages/fxtsx/util/util.tsx#htmlChildren"})}catch(__react_docgen_typescript_loader_error){}try{Identity.displayName="Identity",Identity.__docgenInfo={description:"",displayName:"Identity",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx/util/util.tsx#Identity"]={docgenInfo:Identity.__docgenInfo,name:"Identity",path:"packages/fxtsx/util/util.tsx#Identity"})}catch(__react_docgen_typescript_loader_error){}try{CbComponent.displayName="CbComponent",CbComponent.__docgenInfo={description:"",displayName:"CbComponent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx/util/util.tsx#CbComponent"]={docgenInfo:CbComponent.__docgenInfo,name:"CbComponent",path:"packages/fxtsx/util/util.tsx#CbComponent"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[7].use[1]!./packages/fxtsx-html/data-view/Details/Details.css":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"[data-fx-details] {\n  > summary {\n    display: flex;\n    align-items: center;\n    column-gap: 0.2rem;\n    line-height: 1;\n    cursor: pointer;\n    position: relative;\n    & ~ span {\n      font-size: 1.2rem;\n      font-weight: normal;\n      color: #333;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      position: relative;\n      padding-left: 0.2rem;\n    }\n  }\n  [data-details-open-mark] {\n    display: inline-block;\n  }\n  [data-details-close-mark] {\n    display: none;\n  }\n}\n\n[data-fx-details][open] {\n  [data-details-open-mark] {\n    display: none;\n  }\n  [data-details-close-mark] {\n    display: inline-block;\n  }\n}\n/*\n[data-mp-details] {\n//font-size: var(--medium-down);\n\n    [data-details-summary] {\n    //font-size: var(--medium);\n    //font-weight: lighter;\n        cursor: pointer;\n        position: relative;\n    //width: 100%;\n    //display: flex;\n    //align-items: center;\n    //gap: 0.2rem;\n    //display: inline;\n        display: flex;\n        align-items: center;\n        column-gap: 0.2rem;\n        line-height: 1;\n\n        [data-details-summary-content] {\n            font-size: 1.2rem;\n            font-weight: normal;\n            color: #333;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap;\n            position: relative;\n            padding-left: 0.2rem;\n        }\n    //font-weight: bold;\n        &::-webkit-details-marker,\n        &::marker {\n            display: none;\n        }\n\n        span[data-icon] {\n            position: relative;\n            margin-left: 0.2rem;\n            flex-shrink: 0;\n            font-size: 1.2rem;\n            line-height: 1;\n            @media (min-width: 1108px) {\n                font-size: 1.4rem;\n            }\n        }\n        span[data-icon='plus'] {\n            display: inline-block;\n        }\n        span[data-icon='minus'] {\n            display: none;\n        }\n    }\n    [data-details-children] {\n        margin-top: 1rem;\n        font-size: var(--medium);\n        font-weight: 500;\n    }\n}\n[data-mp-details][open] {\n    span[data-icon] {\n        position: relative;\n    }\n    span[data-icon='plus'] {\n        display: none;\n    }\n    span[data-icon='minus'] {\n        display: inline-block;\n    }\n}\n\n@media (min-width: 1108px) {\n    [data-mp-details] {\n        [data-details-summary] [data-details-summary-content] {\n            font-size: 1.6rem;\n        }\n    }\n}\n*/\n","",{version:3,sources:["webpack://./packages/fxtsx-html/data-view/Details/Details.css"],names:[],mappings:"AAAA;EACE;IACE,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,kBAAkB;IAClB;MACE,iBAAiB;MACjB,mBAAmB;MACnB,WAAW;MACX,uBAAuB;MACvB,gBAAgB;MAChB,mBAAmB;MACnB,kBAAkB;MAClB,oBAAoB;IACtB;EACF;EACA;IACE,qBAAqB;EACvB;EACA;IACE,aAAa;EACf;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,qBAAqB;EACvB;AACF;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;CA6EC",sourcesContent:["[data-fx-details] {\n  > summary {\n    display: flex;\n    align-items: center;\n    column-gap: 0.2rem;\n    line-height: 1;\n    cursor: pointer;\n    position: relative;\n    & ~ span {\n      font-size: 1.2rem;\n      font-weight: normal;\n      color: #333;\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      position: relative;\n      padding-left: 0.2rem;\n    }\n  }\n  [data-details-open-mark] {\n    display: inline-block;\n  }\n  [data-details-close-mark] {\n    display: none;\n  }\n}\n\n[data-fx-details][open] {\n  [data-details-open-mark] {\n    display: none;\n  }\n  [data-details-close-mark] {\n    display: inline-block;\n  }\n}\n/*\n[data-mp-details] {\n//font-size: var(--medium-down);\n\n    [data-details-summary] {\n    //font-size: var(--medium);\n    //font-weight: lighter;\n        cursor: pointer;\n        position: relative;\n    //width: 100%;\n    //display: flex;\n    //align-items: center;\n    //gap: 0.2rem;\n    //display: inline;\n        display: flex;\n        align-items: center;\n        column-gap: 0.2rem;\n        line-height: 1;\n\n        [data-details-summary-content] {\n            font-size: 1.2rem;\n            font-weight: normal;\n            color: #333;\n            text-overflow: ellipsis;\n            overflow: hidden;\n            white-space: nowrap;\n            position: relative;\n            padding-left: 0.2rem;\n        }\n    //font-weight: bold;\n        &::-webkit-details-marker,\n        &::marker {\n            display: none;\n        }\n\n        span[data-icon] {\n            position: relative;\n            margin-left: 0.2rem;\n            flex-shrink: 0;\n            font-size: 1.2rem;\n            line-height: 1;\n            @media (min-width: 1108px) {\n                font-size: 1.4rem;\n            }\n        }\n        span[data-icon='plus'] {\n            display: inline-block;\n        }\n        span[data-icon='minus'] {\n            display: none;\n        }\n    }\n    [data-details-children] {\n        margin-top: 1rem;\n        font-size: var(--medium);\n        font-weight: 500;\n    }\n}\n[data-mp-details][open] {\n    span[data-icon] {\n        position: relative;\n    }\n    span[data-icon='plus'] {\n        display: none;\n    }\n    span[data-icon='minus'] {\n        display: inline-block;\n    }\n}\n\n@media (min-width: 1108px) {\n    [data-mp-details] {\n        [data-details-summary] [data-details-summary-content] {\n            font-size: 1.6rem;\n        }\n    }\n}\n*/\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);