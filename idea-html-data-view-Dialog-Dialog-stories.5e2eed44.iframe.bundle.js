"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9028],{"./packages/idea-html/data-view/Dialog/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Dialog_stories});var esm=__webpack_require__("./node_modules/@storybook/jest/dist/esm/index.js"),react=__webpack_require__("./node_modules/react/index.js"),util=__webpack_require__("./packages/idea/util/util.tsx"),Button=__webpack_require__("./packages/idea-html/Value/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_1n1byzjtio(){var path="/Users/youilhwan/Code/moldives/packages/idea-html/data-view/Dialog/Dialog.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"cd638f4c44d4e1357c4be8312c70af173d36a829"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/idea-html/data-view/Dialog/Dialog.tsx",statementMap:{0:{start:{line:10,column:22},end:{line:22,column:1}},1:{start:{line:12,column:68},end:{line:12,column:73}},2:{start:{line:13,column:4},end:{line:20,column:6}}},fnMap:{0:{name:"Dialog",decl:{start:{line:11,column:11},end:{line:11,column:17}},loc:{start:{line:11,column:30},end:{line:21,column:3}},line:11}},branchMap:{0:{loc:{start:{line:12,column:22},end:{line:12,column:49}},type:"default-arg",locations:[{start:{line:12,column:42},end:{line:12,column:49}}],line:12}},s:{0:0,1:0,2:0},f:{0:0},b:{0:[0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"cd638f4c44d4e1357c4be8312c70af173d36a829"});var actualCoverage=coverage[path];return cov_1n1byzjtio=function(){return actualCoverage},actualCoverage}cov_1n1byzjtio();const Dialog=(cov_1n1byzjtio().s[0]++,(0,react.forwardRef)((function Dialog(props,ref){cov_1n1byzjtio().f[0]++;const{children,$closeButtonLabel=(cov_1n1byzjtio().b[0][0]++,"close"),...restProps}=(cov_1n1byzjtio().s[1]++,props);return cov_1n1byzjtio().s[2]++,(0,jsx_runtime.jsx)("dialog",{"data-fx-dialog":!0,...restProps,ref,style:{zIndex:9999},children:(0,jsx_runtime.jsxs)("form",{method:"dialog",children:[children,(0,jsx_runtime.jsx)(Button.z,{...(0,util.qL)($closeButtonLabel)})]})})})));try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"",displayName:"Dialog",props:{$closeButtonLabel:{defaultValue:null,description:"",name:"$closeButtonLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/idea-html/data-view/Dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"packages/idea-html/data-view/Dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}var dist=__webpack_require__("./node_modules/@storybook/testing-library/dist/index.mjs");const Dialog_stories={component:function Comp(props){const dialog=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("button",{onClick:()=>dialog?.current?.showModal(),children:"open"}),(0,jsx_runtime.jsx)(Dialog,{...props,ref:dialog})]})},tags:["autodocs"]},Default={args:{children:(0,jsx_runtime.jsxs)("section",{"data-testid":"Dialog-Contents",children:[(0,jsx_runtime.jsx)("h1",{children:"Dialog Test"}),(0,jsx_runtime.jsx)("p",{children:"Dialog 테스트 입니다."})]})},play:async({canvasElement})=>{const screen=(0,dist.uh)(canvasElement),openBtn=screen.getByRole("button",{name:"open"});await dist.mV.click(openBtn);const dialog=await screen.findByRole("dialog"),closeBtn=screen.getByRole("button",{name:"close"});await dist.mV.click(closeBtn),await dist.mV.click(closeBtn),(0,esm.l)(screen.queryByRole("dialog")).not.toBeInTheDocument(),dialog.close()}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <section data-testid={"Dialog-Contents"}>\n        <h1>Dialog Test</h1>\n        <p>Dialog 테스트 입니다.</p>\n      </section>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const screen = within(canvasElement);\n    const openBtn = screen.getByRole("button", {\n      name: "open"\n    });\n    await userEvent.click(openBtn);\n    const dialog = (await screen.findByRole("dialog") as HTMLDialogElement);\n    const closeBtn = screen.getByRole("button", {\n      name: "close"\n    });\n    await userEvent.click(closeBtn);\n    await userEvent.click(closeBtn);\n    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();\n    dialog.close();\n  }\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/idea-html/Value/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),packages_idea_VALUE_VALUE__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/idea/VALUE/VALUE.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function cov_yid9mfa51(){var path="/Users/youilhwan/Code/moldives/packages/idea-html/Value/Button/Button.tsx",global=new Function("return this")(),gcv="__coverage__",coverage=global[gcv]||(global[gcv]={});coverage[path]&&"2f196be14cc2250aa46b64e779bcf145ae756480"===coverage[path].hash||(coverage[path]={path:"/Users/youilhwan/Code/moldives/packages/idea-html/Value/Button/Button.tsx",statementMap:{0:{start:{line:11,column:22},end:{line:22,column:2}},1:{start:{line:15,column:2},end:{line:21,column:4}}},fnMap:{0:{name:"(anonymous_0)",decl:{start:{line:14,column:2},end:{line:14,column:3}},loc:{start:{line:15,column:2},end:{line:21,column:4}},line:15}},branchMap:{0:{loc:{start:{line:17,column:10},end:{line:17,column:31}},type:"cond-expr",locations:[{start:{line:17,column:17},end:{line:17,column:20}},{start:{line:17,column:23},end:{line:17,column:31}}],line:17},1:{loc:{start:{line:18,column:10},end:{line:18,column:33}},type:"cond-expr",locations:[{start:{line:18,column:17},end:{line:18,column:21}},{start:{line:18,column:24},end:{line:18,column:33}}],line:18}},s:{0:0,1:0},f:{0:0},b:{0:[0,0],1:[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2f196be14cc2250aa46b64e779bcf145ae756480"});var actualCoverage=coverage[path];return cov_yid9mfa51=function(){return actualCoverage},actualCoverage}cov_yid9mfa51();const Button=(cov_yid9mfa51().s[0]++,(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({$url,...restProps},ref)=>(cov_yid9mfa51().f[0]++,cov_yid9mfa51().s[1]++,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(packages_idea_VALUE_VALUE__WEBPACK_IMPORTED_MODULE_1__.o,{"data-fx-button":!0,Root:$url?(cov_yid9mfa51().b[0][0]++,"a"):(cov_yid9mfa51().b[0][1]++,"button"),href:$url?(cov_yid9mfa51().b[1][0]++,$url):void cov_yid9mfa51().b[1][1]++,ref,...restProps})))));try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{$data:{defaultValue:null,description:"",name:"$data",required:!1,type:{name:"any"}},$valueLabel:{defaultValue:null,description:"",name:"$valueLabel",required:!1,type:{name:"ReactNode"}},$url:{defaultValue:null,description:"",name:"$url",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/idea-html/Value/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/idea-html/Value/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);