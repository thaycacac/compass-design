(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[653],{7474:function(e,n,s){"use strict";s.d(n,{E:function(){return t}});var l=s(3358),r=s(9453);function t(e,n){let{inputElementType:s="input",isDisabled:t=!1,isRequired:i=!1,isReadOnly:o=!1,validationState:a,type:c="text",onChange:d=()=>{}}=e,{focusableProps:h}=(0,r.kc)(e,n),{labelProps:x,fieldProps:p,descriptionProps:j,errorMessageProps:u}=function(e){let{description:n,errorMessage:s,validationState:r}=e,{labelProps:t,fieldProps:i}=function(e){let{id:n,label:s,"aria-labelledby":r,"aria-label":t,labelElementType:i="label"}=e;n=(0,l.Me)(n);let o=(0,l.Me)(),a={};return s?(r=r?`${r} ${o}`:o,a={id:o,htmlFor:"label"===i?n:void 0}):r||t||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:a,fieldProps:(0,l.bE)({id:n,"aria-label":t,"aria-labelledby":r})}}(e),o=(0,l.mp)([Boolean(n),Boolean(s),r]),a=(0,l.mp)([Boolean(n),Boolean(s),r]);return{labelProps:t,fieldProps:i=(0,l.dG)(i,{"aria-describedby":[o,a,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),descriptionProps:{id:o},errorMessageProps:{id:a}}}(e),f=(0,l.zL)(e,{labelable:!0}),k={type:c,pattern:e.pattern};return{labelProps:x,inputProps:(0,l.dG)(f,"input"===s&&k,{disabled:t,readOnly:o,"aria-required":i||void 0,"aria-invalid":"invalid"===a||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:e.value,defaultValue:e.value?void 0:e.defaultValue,onChange:e=>d(e.target.value),autoComplete:e.autoComplete,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...h,...p}),descriptionProps:j,errorMessageProps:u}}s(2983)},7522:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/textField",function(){return s(2101)}])},7479:function(e,n,s){"use strict";var l=s(2641),r=s(3089),t=s(7458),i=s(5743),o=(0,r.Z)((0,l.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,t.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,t.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,t.jsx)("div",{className:"font-bold",children:"Admin Portal Design System"})]})},getNextSeoProps:function(){var e=(0,i.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});n.Z=o},2101:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d.ZP}});var l,r=s(2641),t=s(3089),i=s(7458),o=s(6038),a=s(7479);s(1505);var c=s(6945);s(4505);var d=s(5743),h=s(6042),x=s.n(h),p=s(5034),j=s(7474),u=s(2983),f=s(4811),k=s(535),m=s(6648);function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var l in s)Object.prototype.hasOwnProperty.call(s,l)&&(e[l]=s[l])}return e}).apply(this,arguments)}let g=u.forwardRef((e,n)=>{let{css:s={},label:l,errored:r,helperText:t,leftIcon:i,rightIcon:o,isDisabled:a,...c}=e,d={label:l,isDisabled:a,inputElementType:"input",...c},h=(0,k.g)(n),{labelProps:x,inputProps:p,descriptionProps:g,errorMessageProps:v}=(0,j.E)(d,h);return u.createElement(m.HI,null,u.createElement(m.UR,y({},x,{disabled:!!a}),l),u.createElement(m.ZM,{disabled:!!a,errored:!!r},i?u.createElement(f.J,{className:"left-icon",icon:i}):null,u.createElement(m.tH,y({css:s,ref:h},p)),o?u.createElement(f.J,{className:"right-icon",icon:o}):null),!r&&t?u.createElement(m.lJ,y({},g),t):null,r?u.createElement(m.lJ,y({},v,{error:!0}),t):null)});var v={filePath:"src/pages/components/textField.mdx",route:"/components/textField",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",cards:"Cards",link:"Link",searchField:"Searchfield",spinners:"Spinners",textarea:"Textarea",textField:"Textfield"}},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Text Field",position:{start:{line:6,column:3,offset:228},end:{line:6,column:13,offset:238}}}],position:{start:{line:6,column:1,offset:226},end:{line:6,column:13,offset:238}},value:"Text Field"},{type:"heading",depth:3,children:[{type:"text",value:"Import:",position:{start:{line:12,column:5,offset:293},end:{line:12,column:12,offset:300}}}],position:{start:{line:12,column:1,offset:289},end:{line:12,column:12,offset:300}},value:"Import:"},{type:"heading",depth:3,children:[{type:"text",value:"Basic text field:",position:{start:{line:26,column:5,offset:455},end:{line:26,column:22,offset:472}}}],position:{start:{line:26,column:1,offset:451},end:{line:26,column:22,offset:472}},value:"Basic text field:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with label:",position:{start:{line:38,column:5,offset:649},end:{line:38,column:27,offset:671}}}],position:{start:{line:38,column:1,offset:645},end:{line:38,column:27,offset:671}},value:"Text field with label:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with helper text:",position:{start:{line:50,column:5,offset:874},end:{line:50,column:33,offset:902}}}],position:{start:{line:50,column:1,offset:870},end:{line:50,column:33,offset:902}},value:"Text field with helper text:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with input error:",position:{start:{line:70,column:5,offset:1175},end:{line:70,column:33,offset:1203}}}],position:{start:{line:70,column:1,offset:1171},end:{line:70,column:33,offset:1203}},value:"Text field with input error:"},{type:"heading",depth:3,children:[{type:"text",value:"Text field with icons:",position:{start:{line:94,column:5,offset:1574},end:{line:94,column:27,offset:1596}}}],position:{start:{line:94,column:1,offset:1570},end:{line:94,column:27,offset:1596}},value:"Text field with icons:"},{type:"heading",depth:3,children:[{type:"text",value:"Disabled text field:",position:{start:{line:116,column:5,offset:2025},end:{line:116,column:25,offset:2045}}}],position:{start:{line:116,column:1,offset:2021},end:{line:116,column:25,offset:2045}},value:"Disabled text field:"},{type:"heading",depth:3,children:[{type:"text",value:"Custom styling:",position:{start:{line:140,column:5,offset:2422},end:{line:140,column:20,offset:2437}}}],position:{start:{line:140,column:1,offset:2418},end:{line:140,column:20,offset:2437}},value:"Custom styling:"},{type:"heading",depth:3,children:[{type:"text",value:"Props:",position:{start:{line:169,column:5,offset:2995},end:{line:169,column:11,offset:3001}}}],position:{start:{line:169,column:1,offset:2991},end:{line:169,column:11,offset:3001}},value:"Props:"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:v.pageMap,route:v.route};var b="Text Field";function w(e){var n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Text Field"}),"\n",(0,i.jsx)(n.p,{children:"Text Fields let users enter and edit text."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"import",children:"Import:"}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Textfield} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Textfield "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/textfield'"})]})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"basic-text-field",children:"Basic text field:"}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{placeholder:"Enter your name"})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text-field-with-label",children:"Text field with label:"}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{label:"Name",placeholder:"Enter your name"})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text-field-with-helper-text",children:"Text field with helper text:"}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{label:"Name",placeholder:"Enter your name",helperText:"Helper Text"})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Helper Text'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text-field-with-input-error",children:"Text field with input error:"}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{errored:!0,value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors"})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"errored"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"text-field-with-icons",children:"Text field with icons:"}),"\n",(0,i.jsxs)("section",{className:x().avatarShowcaseContainer,children:[(0,i.jsx)(g,{label:"Name",leftIcon:p.u8Q,placeholder:"Enter your name"}),(0,i.jsx)(g,{label:"Name",rightIcon:p.u8Q,placeholder:"Enter your name"})]}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"leftIcon"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{faThumbsUp} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"rightIcon"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{faThumbsUp}"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"disabled-text-field",children:"Disabled text field:"}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors",isDisabled:!0})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"custom-styling",children:"Custom styling:"}),"\n",(0,i.jsxs)(n.p,{children:["You can style React Compass's components with the css prop. ",(0,i.jsx)("br",{}),"\nWith css prop, you can basically do anything that css can do."]}),"\n",(0,i.jsx)("section",{className:x().avatarShowcaseContainer,children:(0,i.jsx)(g,{value:"Wrong Value",label:"Name",placeholder:"Enter your name",helperText:"Use Helper Text for Errors",isDisabled:!0,css:{width:"20rem"}})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Textfield"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"value"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Wrong Value'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"label"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"placeholder"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Enter your name'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"helperText"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Use Helper Text for Errors'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"isDisabled"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{width"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'20rem'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}}"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"/>"})})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"placeholder"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"null"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Placeholder of the text field"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"label"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"null"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"null"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Label of the text field"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"helperText"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"string"})," | ",(0,i.jsx)(n.code,{children:"null"})]}),(0,i.jsx)(n.td,{align:"left",children:"—"}),(0,i.jsx)(n.td,{align:"left"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"errored"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"true"})," | ",(0,i.jsx)(n.code,{children:"false"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Throw error when input value is wrong"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"value"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{align:"left",children:"—"}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Input value"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"rightIcon"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"IconProp"}),"|",(0,i.jsx)(n.code,{children:"false"}),"| ",(0,i.jsx)(n.code,{children:"true"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Icon placed on the right side of the text field"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"leftIcon"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"IconProp"}),"|",(0,i.jsx)(n.code,{children:"false"}),"| ",(0,i.jsx)(n.code,{children:"true"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Icon placed on the left side of the text field"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"isDisabled"})}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"false"}),"| ",(0,i.jsx)(n.code,{children:"true"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Disable the text field when true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"css "})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"CSS"})}),(0,i.jsx)(n.td,{align:"left",children:"—"}),(0,i.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(d.UW,{children:(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/ladle?story=textfield--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,t.Z)((0,r.Z)({},e),{children:(0,i.jsx)(w,(0,r.Z)({},e))})):w(e)}v.title="string"==typeof b&&b||"Textfield";var T=function(e){return(0,i.jsx)(o.mK.Provider,{value:e,children:(0,i.jsx)(N,{})})};(l=globalThis).__nextra_pageContext__||(l.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/textField"]={Content:T,pageOpts:v,themeConfig:a.Z}},6042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi"}},4811:function(e,n,s){"use strict";s.d(n,{J:function(){return r}});var l=s(3544);let r=l.G},6648:function(e,n,s){"use strict";s.d(n,{HI:function(){return r},UR:function(){return t},ZM:function(){return i},lJ:function(){return a},tH:function(){return o}});var l=s(2465);let r=(0,l.zo)("div",{display:"block",fontFamily:"$sans"}),t=(0,l.zo)("label",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",display:"block",marginBottom:"$1",color:"$gray90",variants:{disabled:{true:{color:"$disabledText"}}}}),i=(0,l.zo)("div",{display:"flex",flexDirection:"row",alignItems:"center",borderWidth:"$medium",borderStyle:"solid",borderColor:"$divider",borderRadius:"$md",color:"$typeHeading",backgroundColor:"$whiteText",transition:"$default","&:focus-within":{borderColor:"$cdgBlue",".left-icon":{color:"$cdgBlue"}},".left-icon, .right-icon":{color:"$typeHeading",transition:"$default"},".left-icon":{width:"$5",height:"$5",marginLeft:"$2_5",marginRight:"-$1"},".right-icon":{width:"$4",height:"$4",marginRight:"$2_5",marginLeft:"-$1"},variants:{disabled:{true:{color:"$disabledText",backgroundColor:"$gray20",".left-icon, .right-icon":{color:"$disabledText"}}},errored:{true:{borderColor:"$danger","&:focus-within":{borderColor:"$danger"}}}}}),o=(0,l.zo)("input",{fontSize:"$label1",fontWeight:"$medium",lineHeight:"$normal",padding:"$1_5 $3",border:0,borderRadius:"$md",backgroundColor:"transparent","&:focus":{outline:"none"},"&:disabled":{cursor:"not-allowed"}}),a=(0,l.zo)("div",{fontSize:"$label2",fontWeight:"$medium",transition:"$default",marginTop:"$1",color:"$gray70",variants:{error:{true:{color:"$danger"}}}})},535:function(e,n,s){"use strict";s.d(n,{g:function(){return r}});var l=s(2983);function r(e){let n=(0,l.useRef)(null);return(0,l.useImperativeHandle)(e,()=>n.current),n}}},function(e){e.O(0,[249,667,453,544,774,888,179],function(){return e(e.s=7522)}),_N_E=e.O()}]);