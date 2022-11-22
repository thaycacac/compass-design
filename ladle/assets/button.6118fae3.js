import{$ as D,b as B,a as z}from"./module.4855a3d8.js";import{$ as R}from"./module.4331c748.js";import{R as x,k as W,s as k,r as j,j as m,a as r}from"./index.bc7fab13.js";import{I as P}from"./index.6d6690b2.js";import{u as F}from"./use-dom-ref.5410d4d0.js";function N(e,t){let{elementType:o="button",isDisabled:n,onPress:b,onPressStart:a,onPressEnd:s,onPressChange:f,preventFocusOnPress:$,allowFocusWhenDisabled:d,onClick:i,href:g,target:h,rel:u,type:p="button"}=e,l;o==="button"?l={type:p,disabled:n}:l={role:"button",tabIndex:n?void 0:0,href:o==="a"&&n?void 0:g,target:o==="a"?h:void 0,type:o==="input"?p:void 0,disabled:o==="input"?n:void 0,"aria-disabled":!n||o==="input"?void 0:n,rel:o==="a"?u:void 0};let{pressProps:v,isPressed:w}=D({onPressStart:a,onPressEnd:s,onPressChange:f,onPress:b,isDisabled:n,preventFocusOnPress:$,ref:t}),{focusableProps:y}=R(e,t);d&&(y.tabIndex=n?-1:y.tabIndex);let I=B(y,v,z(e,{labelable:!0}));return{isPressed:w,buttonProps:B(l,I,{"aria-haspopup":e["aria-haspopup"],"aria-expanded":e["aria-expanded"],"aria-controls":e["aria-controls"],"aria-pressed":e["aria-pressed"],onClick:O=>{i&&(i(O),console.warn("onClick is deprecated, please use onPress"))}})}}const S={prefix:"fas",iconName:"circle",icon:[512,512,[],"",""]},T=(e,t)=>x.Children.count(e)===1&&x.Children.toArray(e)[0].type===t,_=W({"0%":{opacity:"0.2"},"20%":{opacity:1},"100%":{opacity:"0.2"}}),C=k("span",{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"wait",".dots":{display:"inline-flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"2px"},".dots i":{display:"inline-block",flexShrink:0,width:".375em",height:".375em",borderRadius:"$full",background:"currentColor",animation:`${_} 1.4s infinite both`},".dots i:nth-child(1)":{animationDelay:"0s"},".dots i:nth-child(2)":{animationDelay:"0.2s"},".dots i:nth-child(3)":{animationDelay:"0.4s"}}),c=k("div",{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"nowrap",flexShrink:0,".icon":{width:"$4",height:"$4"},".icon.left":{marginRight:"$2"},".icon.right":{marginLeft:"$2"}}),E=k("button",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",borderWidth:"$light",borderStyle:"solid",borderRadius:"$md",cursor:"pointer",transition:"$button",[`${C}`]:{display:"none"},[`${c}`]:{visibility:"visible"},"&:disabled":{background:"$divider",color:"$disabledText",borderColor:"$divider",cursor:"not-allowed"},variants:{size:{lg:{fontSize:"$body2",padding:"$2 $6"},md:{fontSize:"$body3",padding:"$1_5 $4"},sm:{fontSize:"$label2",padding:"$1 $2_5"}},variant:{primary:{background:"$cdgBlue",color:"$whiteText",borderColor:"$cdgBlue","&:hover:enabled":{background:"$cdgBlue120",borderColor:"$cdgBlue120"}},secondary:{background:"transparent",color:"$cdgBlue",borderColor:"$cdgBlue","&:hover:enabled":{color:"$cdgBlue100",background:"$cdgBlue10",borderColor:"$cdgBlue120"}},danger:{background:"transparent",color:"$danger",borderColor:"$danger","&:hover:enabled":{background:"$dangerBg",borderColor:"$dangerBg"}},ghost:{background:"transparent",color:"$typeHeading",borderColor:"transparent","&:hover:enabled":{color:"$cdgBlue",background:"$cdgBlue10"}}},fullWidth:{true:{width:"100%",[`${c}`]:{".children":{flexGrow:1}}}},loading:{true:{[`${C}`]:{display:"flex"},[`${c}`]:{visibility:"hidden"}}},iconOnly:{true:{aspectRatio:"1 / 1",padding:0,[`${c}`]:{".children":{display:"flex",alignItems:"center",justifyContent:"center"}}}}},compoundVariants:[{size:"lg",iconOnly:!0,css:{height:"calc((1.5*$4) + (2*$2))"}},{size:"md",iconOnly:!0,css:{height:"calc((1.5*$3_5) + (2*$1_5))"}},{size:"sm",iconOnly:!0,css:{height:"calc((1.5*$3) + (2*$1))"}}],defaultVariants:{size:"md",variant:"primary",fullWidth:!1,loading:!1,iconOnly:!1}}),G=x.forwardRef((e,t)=>{const{css:o={},children:n,className:b,leftIcon:a,rightIcon:s,variant:f,size:$,fullWidth:d,loading:i,...g}=e,h={className:b},u=F(t),{buttonProps:p}=N(g,u),l=j.exports.useMemo(()=>T(n,P),[]);return m(E,{css:o,ref:u,...p,...h,...{variant:f,size:$,fullWidth:d,loading:i,iconOnly:l},children:[r(C,{hidden:!i,"aria-hidden":!i,children:m("div",{className:"dots",children:[r("i",{}),r("i",{}),r("i",{})]})}),m(c,{children:[a||d&&s?r(P,{className:"icon left",icon:a||S}):null,r("span",{className:"children",children:n}),s||d&&a?r(P,{className:"icon right",icon:s||S}):null]})]})});export{G as B,E as S};