"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1164],{"./packages/fxtsx-html/data-view/Dialog2/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),util=__webpack_require__("./packages/fxtsx/util/util.tsx"),Button=__webpack_require__("./packages/fxtsx-html/Value/Button/Button.tsx"),util_util=__webpack_require__("./packages/fxtsx-html/util/util.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_29bjd2oofm(){var path="/Users/youilhwan/Code/moldives/packages/fxtsx-html/data-view/Dialog2/Dialog.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"12e55bf99c20a18b06b67a8c1df2a115289af349"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/fxtsx-html/data-view/Dialog2/Dialog.tsx",statementMap:{0:{start:{line:11,column:22},end:{line:44,column:1}},1:{start:{line:13,column:68},end:{line:13,column:73}},2:{start:{line:14,column:22},end:{line:14,column:53}},3:{start:{line:16,column:4},end:{line:42,column:6}},4:{start:{line:21,column:12},end:{line:21,column:31}},5:{start:{line:22,column:12},end:{line:22,column:43}},6:{start:{line:36,column:30},end:{line:36,column:56}}},fnMap:{0:{name:"Dialog",decl:{start:{line:12,column:11},end:{line:12,column:17}},loc:{start:{line:12,column:30},end:{line:43,column:3}},line:12},1:{name:"(anonymous_1)",decl:{start:{line:20,column:19},end:{line:20,column:20}},loc:{start:{line:20,column:26},end:{line:23,column:11}},line:20},2:{name:"(anonymous_2)",decl:{start:{line:36,column:23},end:{line:36,column:24}},loc:{start:{line:36,column:30},end:{line:36,column:56}},line:36}},branchMap:{0:{loc:{start:{line:13,column:22},end:{line:13,column:49}},type:"default-arg",locations:[{start:{line:13,column:42},end:{line:13,column:49}}],line:13}},s:{0:0,1:0,2:0,3:0,4:0,5:0,6:0},f:{0:0,1:0,2:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"12e55bf99c20a18b06b67a8c1df2a115289af349"});var actualCoverage=coverage[path];return cov_29bjd2oofm=function(){return actualCoverage},actualCoverage}cov_29bjd2oofm();const Dialog=(cov_29bjd2oofm().s[0]++,(0,react.forwardRef)((function Dialog(props,ref){cov_29bjd2oofm().f[0]++;const{children,$closeButtonLabel=(cov_29bjd2oofm().b[0][0]++,"close"),...restProps}=(cov_29bjd2oofm().s[1]++,props),dialogRef=(cov_29bjd2oofm().s[2]++,(0,react.useRef)(null));return cov_29bjd2oofm().s[3]++,(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Button.z,{$url:"./#open2",onClick:e=>{cov_29bjd2oofm().f[1]++,cov_29bjd2oofm().s[4]++,e.preventDefault(),cov_29bjd2oofm().s[5]++,dialogRef.current?.showModal()},children:"open"}),(0,jsx_runtime.jsx)("dialog",{"data-fx-dialog":!0,...restProps,ref:(0,util_util.d)([ref,dialogRef]),style:{zIndex:9999},children:(0,jsx_runtime.jsxs)("form",{method:"dialog",children:[children,(0,jsx_runtime.jsx)(Button.z,{onClick:e=>(cov_29bjd2oofm().f[2]++,cov_29bjd2oofm().s[6]++,dialogRef.current?.close()),...(0,util.qL)($closeButtonLabel)})]})})]})})));try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{$closeButtonLabel:{defaultValue:null,description:"",name:"$closeButtonLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx-html/data-view/Dialog2/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"packages/fxtsx-html/data-view/Dialog2/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");const Dialog_stories={component:Dialog,tags:["autodocs"]},Default={args:{children:(0,jsx_runtime.jsxs)("section",{"data-testid":"Dialog-Contents",children:[(0,jsx_runtime.jsx)("h1",{children:"Dialog Test"}),(0,jsx_runtime.jsx)("p",{children:"Dialog 테스트 입니다."})]})},play:async({canvasElement})=>{const screen=(0,dist.uh)(canvasElement),openBtn=screen.getByRole("button",{name:"open"});await dist.mV.click(openBtn);const dialog=await screen.findByRole("dialog"),closeBtn=screen.getByRole("button",{name:"close"});await dist.mV.click(closeBtn),await dist.mV.click(closeBtn),(0,esm.l)(screen.queryByRole("dialog")).not.toBeInTheDocument(),dialog.close()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <section data-testid={"Dialog-Contents"}>\n        <h1>Dialog Test</h1>\n        <p>Dialog 테스트 입니다.</p>\n      </section>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const screen = within(canvasElement);\n    const openBtn = screen.getByRole("button", {\n      name: "open"\n    });\n    await userEvent.click(openBtn);\n    const dialog = (await screen.findByRole("dialog") as HTMLDialogElement);\n    const closeBtn = screen.getByRole("button", {\n      name: "close"\n    });\n    await userEvent.click(closeBtn);\n    await userEvent.click(closeBtn);\n    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();\n    dialog.close();\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/fxtsx-html/Value/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),fxtsx_VALUE_VALUE__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/fxtsx/VALUE/VALUE.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_m5zlry6q6(){var path="/Users/youilhwan/Code/moldives/packages/fxtsx-html/Value/Button/Button.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"832f51873cf995db28b541f0753a23a5077e5249"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/fxtsx-html/Value/Button/Button.tsx",statementMap:{0:{start:{line:11,column:22},end:{line:22,column:2}},1:{start:{line:15,column:2},end:{line:21,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:15,column:2},end:{line:21,column:4}},line:15}},branchMap:{0:{loc:{start:{line:17,column:10},end:{line:17,column:31}},type:"cond-expr",locations:[{start:{line:17,column:17},end:{line:17,column:20}},{start:{line:17,column:23},end:{line:17,column:31}}],line:17},1:{loc:{start:{line:18,column:10},end:{line:18,column:33}},type:"cond-expr",locations:[{start:{line:18,column:17},end:{line:18,column:21}},{start:{line:18,column:24},end:{line:18,column:33}}],line:18}},s:{0:0,1:0},f:{0:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"832f51873cf995db28b541f0753a23a5077e5249"});var actualCoverage=coverage[path];return cov_m5zlry6q6=function(){return actualCoverage},actualCoverage}cov_m5zlry6q6();const Button=(cov_m5zlry6q6().s[0]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({$url,...restProps},ref)=>(cov_m5zlry6q6().f[0]++,cov_m5zlry6q6().s[1]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(fxtsx_VALUE_VALUE__WEBPACK_IMPORTED_MODULE_1__.o,{"data-fx-button":!0,Root:$url?(cov_m5zlry6q6().b[0][0]++,"a"):(cov_m5zlry6q6().b[0][1]++,"button"),href:$url?(cov_m5zlry6q6().b[1][0]++,$url):void cov_m5zlry6q6().b[1][1]++,ref,...restProps})))));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{$data:{defaultValue:null,description:"",name:"$data",required:!1,type:{name:"any"}},$valueLabel:{defaultValue:null,description:"",name:"$valueLabel",required:!1,type:{name:"ReactNode"}},$url:{defaultValue:null,description:"",name:"$url",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/fxtsx-html/Value/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/fxtsx-html/Value/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/fxtsx-html/util/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function cov_21chsozu15(){var path="/Users/youilhwan/Code/moldives/packages/fxtsx-html/util/util.ts",global=new Function("return this")(),gcv="__coverage__",coverageData={path:"/Users/youilhwan/Code/moldives/packages/fxtsx-html/util/util.ts",statementMap:{0:{start:{line:6,column:2},end:{line:14,column:4}},1:{start:{line:7,column:4},end:{line:13,column:7}},2:{start:{line:8,column:6},end:{line:12,column:7}},3:{start:{line:9,column:8},end:{line:9,column:22}},4:{start:{line:10,column:13},end:{line:12,column:7}},5:{start:{line:11,column:8},end:{line:11,column:31}}},fnMap:{0:{name:"setMultipleRef",decl:{start:{line:3,column:16},end:{line:3,column:30}},loc:{start:{line:5,column:2},end:{line:15,column:1}},line:5},1:{name:"(anonymous_1)",decl:{start:{line:6,column:9},end:{line:6,column:10}},loc:{start:{line:6,column:32},end:{line:14,column:3}},line:6},2:{name:"(anonymous_2)",decl:{start:{line:7,column:17},end:{line:7,column:18}},loc:{start:{line:7,column:26},end:{line:13,column:5}},line:7}},branchMap:{0:{loc:{start:{line:8,column:6},end:{line:12,column:7}},type:"if",locations:[{start:{line:8,column:6},end:{line:12,column:7}},{start:{line:10,column:13},end:{line:12,column:7}}],line:8},1:{loc:{start:{line:10,column:13},end:{line:12,column:7}},type:"if",locations:[{start:{line:10,column:13},end:{line:12,column:7}},{start:{line:void 0,column:void 0},end:{line:void 0,column:void 0}}],line:10}},s:{0:0,1:0,2:0,3:0,4:0,5:0},f:{0:0,1:0,2:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6963bb21b6b93cef785e266f661296cd668a432b"},coverage=global[gcv]||(global[gcv]={});coverage[path]&&"6963bb21b6b93cef785e266f661296cd668a432b"===coverage[path].hash||(coverage[path]=coverageData);var actualCoverage=coverage[path];return cov_21chsozu15=function(){return actualCoverage},actualCoverage}function setMultipleRef(refs){return cov_21chsozu15().f[0]++,cov_21chsozu15().s[0]++,function(instance){cov_21chsozu15().f[1]++,cov_21chsozu15().s[1]++,refs.forEach((ref=>{cov_21chsozu15().f[2]++,cov_21chsozu15().s[2]++,"function"==typeof ref?(cov_21chsozu15().b[0][0]++,cov_21chsozu15().s[3]++,ref(instance)):(cov_21chsozu15().b[0][1]++,cov_21chsozu15().s[4]++,null!==ref?(cov_21chsozu15().b[1][0]++,cov_21chsozu15().s[5]++,ref.current=instance):cov_21chsozu15().b[1][1]++)}))}}__webpack_require__.d(__webpack_exports__,{d:()=>setMultipleRef}),cov_21chsozu15()}}]);