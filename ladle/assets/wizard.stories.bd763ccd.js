import{C as h}from"./components.bf48880f.js";import{s as o,R as g,a as l,j as t}from"./index.c85b1806.js";import{u as f}from"./use-dom-ref.bcc86ec4.js";const m=o("div",{width:"100%",position:"relative","& .wizard-progress-wrapper":{width:"100%",display:"flex","& .item-wrapper":{width:"calc(100% / $$itemsLength)",display:"flex",alignItems:"center",justifyContent:"center"}},"& .wizard-content-wrapper":{marginTop:"$2",width:"100%",display:"flex"}}),d=o("div",{flexGrow:1,height:"$0_5",backgroundColor:"$cdgBlue100",zIndex:0,variants:{side:{left:{},right:{}},bordered:{true:{},false:{}},active:{true:{backgroundColor:"$cdgBlue100"},false:{backgroundColor:"$cdgBlue10"}}},compoundVariants:[{side:"left",bordered:!0,css:{borderTopLeftRadius:"$full",borderBottomLeftRadius:"$full"}},{side:"right",bordered:!0,css:{borderTopRightRadius:"$full",borderBottomRightRadius:"$full"}}]}),$=o("span",{position:"relative",width:"$5",height:"$5",borderRadius:"$full",display:"flex",justifyContent:"center",alignItems:"center",color:"$whiteText",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$tight",userSelect:"none",zIndex:2,variants:{active:{true:{backgroundColor:"$cdgBlue100","&:hover":{"&:after":{width:"$7",height:"$7"}},"&:after":{position:"absolute",content:"",width:"$6",height:"$6",borderRadius:"$full",backgroundColor:"$cdgBlue100",opacity:"0.2",zIndex:1}},false:{backgroundColor:"$cdgBlue10"}}}}),p=o("div",{width:"calc(100% / $$itemsLength)",display:"flex",alignItems:"center",justifyContent:"center",color:"$gray100",fontWeight:"$medium",fontSize:"$label2",lineHeight:"$tight",userSelect:"none",variants:{active:{true:{color:"$gray100"},false:{color:"$gray70"}}}}),w=g.forwardRef((s,n)=>{const{css:c={},currentStep:r=1,items:i}=s,u=f(n);return l(m,{css:{$$itemsLength:`${i.length}`,...c},ref:u,children:[t("div",{className:"wizard-progress-wrapper",children:i.map((a,e)=>l("div",{className:"item-wrapper",children:[t(d,{side:"left",bordered:e===0,active:r>e+1||e+1===r}),t($,{active:r>e+1||e+1===r,children:r>e+1?t(b,{}):e+1}),t(d,{className:"side-right",bordered:e===i.length-1,active:r>e+1})]},a))}),t("div",{className:"wizard-content-wrapper",children:i.map((a,e)=>t(p,{active:r>e+1||e+1===r,children:a},e))})]})}),b=()=>t("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:t("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}),v=w,R=()=>t(h,{children:t(v,{items:["Value1","Value2","Value3","Value4"]})});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{R as Variants};