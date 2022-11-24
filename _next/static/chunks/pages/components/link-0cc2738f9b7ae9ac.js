(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[572],{7153:function(e,n,s){"use strict";s.r(n),s.d(n,{useLink:function(){return i}});var t=s(3358),o=s(9453),r=s(9730);function i(e,n){let{elementType:s="a",onPress:i,onPressStart:l,onPressEnd:a,onClick:c,isDisabled:d,...h}=e,p;"a"!==s&&(p={role:"link",tabIndex:d?void 0:0});let{focusableProps:x}=(0,o.useFocusable)(e,n),{pressProps:u,isPressed:k}=(0,r.usePress)({onPress:i,onPressStart:l,onPressEnd:a,isDisabled:d,ref:n}),m=(0,t.filterDOMProps)(h,{labelable:!0}),f=(0,t.mergeProps)(x,u);return{isPressed:k,linkProps:(0,t.mergeProps)(m,{...f,...p,"aria-disabled":d||void 0,onClick(e){u.onClick(e),c&&(c(e),console.warn("onClick is deprecated, please use onPress"))}})}}},7642:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/link",function(){return s(3026)}])},7479:function(e,n,s){"use strict";var t=s(2641),o=s(3089),r=s(7458),i=s(5743),l=(0,o.Z)((0,t.Z)({},{chat:!1,footer:!1,unstable_faviconGlyph:"✦"}),{banner:{key:"work-in-progress",text:"This site is a heavy work in progress. Expect bugs & changes."},docsRepositoryBase:"".concat("https://github.com/comfortdelgro/compass-design","/blob/main/apps/docs"),project:{link:"https://github.com/comfortdelgro/compass-design"},editLink:{text:"Edit this page on GitHub"},logo:function(){return(0,r.jsxs)("div",{className:"flex flex-row items-center space-x-2",children:[(0,r.jsx)("div",{className:"w-7 aspect-square bg-no-repeat bg-cover",style:{backgroundImage:"url(/compass-design/logo.svg)"}}),(0,r.jsx)("div",{className:"font-bold",children:"Admin Portal Design System"})]})},getNextSeoProps:function(){var e=(0,i.ZR)().frontMatter;return{description:e.description||"Comfortdelgro's Compass Design System",openGraph:{images:[{url:e.image||"https://comfortdelgro.github.io/compass-design/banner.png"},]},titleTemplate:"%s – Compass Design System",twitter:{cardType:"summary_large_image",site:"https://comfortdelgro.github.io/compass-design"}}}});n.Z=l},3026:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return d.ZP}});var t,o=s(2641),r=s(3089),i=s(7458),l=s(6038),a=s(7479);s(1505);var c=s(6945);s(4505);var d=s(5743),h=s(6042),p=s.n(h),x=s(8784),u={filePath:"src/pages/components/link.mdx",route:"/components/link",frontMatter:{},pageMap:[{kind:"Meta",data:{index:"Get Started",design:"Design",components:"Components"}},{kind:"Folder",name:"components",route:"/components",children:[{kind:"Meta",data:{alerts:"Alerts",avatars:"Avatars",badges:"Badges",breadcrumbs:"Breadcrumbs",buttons:"Buttons",cards:"Cards",link:"Link",searchField:"Searchfield",spinners:"Spinners",textarea:"Textarea",textField:"Textfield"}},{kind:"MdxPage",name:"alerts",route:"/components/alerts"},{kind:"MdxPage",name:"avatars",route:"/components/avatars"},{kind:"MdxPage",name:"badges",route:"/components/badges"},{kind:"MdxPage",name:"breadcrumbs",route:"/components/breadcrumbs"},{kind:"MdxPage",name:"buttons",route:"/components/buttons"},{kind:"MdxPage",name:"cards",route:"/components/cards"},{kind:"MdxPage",name:"link",route:"/components/link"},{kind:"MdxPage",name:"searchField",route:"/components/searchField"},{kind:"MdxPage",name:"spinners",route:"/components/spinners"},{kind:"MdxPage",name:"textField",route:"/components/textField"},{kind:"MdxPage",name:"textarea",route:"/components/textarea"}]},{kind:"Folder",name:"design",route:"/design",children:[{kind:"Meta",data:{colors:"Colors",typography:"Typography"}},{kind:"MdxPage",name:"colors",route:"/design/colors"},{kind:"MdxPage",name:"typography",route:"/design/typography"}]},{kind:"MdxPage",name:"index",route:"/"}],headings:[{type:"heading",depth:1,children:[{type:"text",value:"Link",position:{start:{line:6,column:3,offset:218},end:{line:6,column:7,offset:222}}}],position:{start:{line:6,column:1,offset:216},end:{line:6,column:7,offset:222}},value:"Link"},{type:"heading",depth:3,children:[{type:"text",value:"Import:",position:{start:{line:12,column:5,offset:346},end:{line:12,column:12,offset:353}}}],position:{start:{line:12,column:1,offset:342},end:{line:12,column:12,offset:353}},value:"Import:"},{type:"heading",depth:3,children:[{type:"text",value:"Basic Link:",position:{start:{line:26,column:5,offset:493},end:{line:26,column:16,offset:504}}}],position:{start:{line:26,column:1,offset:489},end:{line:26,column:16,offset:504}},value:"Basic Link:"},{type:"heading",depth:3,children:[{type:"text",value:"Custom styling:",position:{start:{line:44,column:5,offset:821},end:{line:44,column:20,offset:836}}}],position:{start:{line:44,column:1,offset:817},end:{line:44,column:20,offset:836}},value:"Custom styling:"},{type:"heading",depth:3,children:[{type:"text",value:"Props:",position:{start:{line:71,column:5,offset:1344},end:{line:71,column:11,offset:1350}}}],position:{start:{line:71,column:1,offset:1340},end:{line:71,column:11,offset:1350}},value:"Props:"}],unstable_flexsearch:{codeblock:!1}};globalThis.__nextra_internal__={pageMap:u.pageMap,route:u.route};var k="Link";function m(e){var n=Object.assign({h1:"h1",p:"p",hr:"hr",h3:"h3",div:"div",pre:"pre",code:"code",span:"span",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a"},(0,c.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{children:"Link"}),"\n",(0,i.jsx)(n.p,{children:"The Link component allows you to easily customize anchor elements with your theme colors and typography styles."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"import",children:"Import:"}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {Link} "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass'"})]})})})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{"data-language":"js","data-theme":"default",children:(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" Link "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@comfortdelgro/react-compass/link'"})]})})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"basic-link",children:"Basic Link:"}),"\n",(0,i.jsxs)("section",{className:p().avatarShowcaseContainer,children:[(0,i.jsx)(x.default,{href:"/#page",children:"Go to another page"}),(0,i.jsx)(x.default,{href:"https://google.com",external:!0,children:(0,i.jsx)(n.p,{children:"Go to Google"})})]}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'/#page'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">Go to another page</"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://google.com'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"external"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Go to Google"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"custom-styling",children:"Custom styling:"}),"\n",(0,i.jsxs)(n.p,{children:["You can style React Compass's components with the css prop. ",(0,i.jsx)("br",{}),"\nWith css prop, you can basically do anything that css can do."]}),"\n",(0,i.jsx)("section",{className:p().avatarShowcaseContainer,children:(0,i.jsx)(x.default,{href:"https://google.com",external:!0,css:{textDecoration:"line-through","&:hover":{color:"grey"}},children:(0,i.jsx)(n.p,{children:"Go to Google"})})}),"\n",(0,i.jsx)(n.div,{"data-rehype-pretty-code-fragment":"",children:(0,i.jsx)(n.pre,{children:(0,i.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"href"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'https://google.com'"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"external"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"css"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{{textDecoration"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'line-through'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'&:hover'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {color"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'grey'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}}}"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  Go to Google"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"Link"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"props",children:"Props:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{align:"left",children:"Name"}),(0,i.jsx)(n.th,{align:"left",children:"Type"}),(0,i.jsx)(n.th,{align:"left",children:"Default"}),(0,i.jsx)(n.th,{align:"left",children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"external"}),(0,i.jsxs)(n.td,{align:"left",children:[(0,i.jsx)(n.code,{children:"false"}),"| ",(0,i.jsx)(n.code,{children:"true"})]}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"false"})}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"Set to extinal website when true"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{align:"left",children:"css"}),(0,i.jsx)(n.td,{align:"left",children:(0,i.jsx)(n.code,{children:"CSS"})}),(0,i.jsx)(n.td,{align:"left",children:"—"}),(0,i.jsx)(n.td,{align:"left"})]})]})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(d.UW,{children:(0,i.jsxs)(n.p,{children:["Check out our ",(0,i.jsx)(n.a,{href:"/ladle?story=links--variants",children:"ladle"})," for more info on this\ncomponent."]})})]})}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.ah)(),e.components).wrapper;return n?(0,i.jsx)(n,(0,r.Z)((0,o.Z)({},e),{children:(0,i.jsx)(m,(0,o.Z)({},e))})):m(e)}u.title="string"==typeof k&&k||"Link";var j=function(e){return(0,i.jsx)(l.mK.Provider,{value:e,children:(0,i.jsx)(f,{})})};(t=globalThis).__nextra_pageContext__||(t.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/components/link"]={Content:j,pageOpts:u,themeConfig:a.Z}},6042:function(e){e.exports={componentShowcaseContainer:"Home_componentShowcaseContainer__eW3_t",avatarShowcaseContainer:"Home_avatarShowcaseContainer__lHTX1",textAreaShowcaseContainer:"Home_textAreaShowcaseContainer__B23b4",codeContainer:"Home_codeContainer__4PDzi"}},8784:function(e,n,s){"use strict";var t;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>r});let o=(t=s(831),t&&t.__esModule?t:{default:t}),r=o.default},831:function(e,n,s){"use strict";var t;Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:()=>d});let o=s(7153),r=(t=s(2983),t&&t.__esModule?t:{default:t}),i=s(8810),l=s(4774);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var s=arguments[n];for(var t in s)Object.prototype.hasOwnProperty.call(s,t)&&(e[t]=s[t])}return e}).apply(this,arguments)}let c=r.default.forwardRef((e,n)=>{let{css:s={},href:t,target:c,external:d,children:h,...p}=e,x=(0,i.useDOMRef)(n),{linkProps:u}=(0,o.useLink)({...p},x);return r.default.createElement(l.StyledLink,a({css:s,ref:n,href:t,target:c||(d?"_blank":void 0),rel:"_blank"===c||d?"noopener noreferrer":void 0},u,{}),h)}),d=c},4774:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"StyledLink",{enumerable:!0,get:()=>o});let t=s(7250),o=(0,t.styled)("a",{fontFamily:"inherit",fontWeight:"$medium",color:"$info",textDecoration:"underline",transition:"$default"})},8810:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"useDOMRef",{enumerable:!0,get:()=>o});let t=s(2983);function o(e){let n=(0,t.useRef)(null);return(0,t.useImperativeHandle)(e,()=>n.current),n}}},function(e){e.O(0,[667,453,774,888,179],function(){return e(e.s=7642)}),_N_E=e.O()}]);