import{s as l,R as f,j as $,a as s}from"./index.bc7fab13.js";import{I as g}from"./index.6d6690b2.js";import{g as m}from"./get-icon-from-color.e6585026.js";import{u as p}from"./use-dom-ref.5410d4d0.js";const u=l("span",{fontFamily:"$sans",fontSize:"$label2",fontWeight:"$semibold",padding:"$1 $2_5",borderWidth:"$light",borderStyle:"solid",borderColor:"transparent",borderRadius:"$full",".icon":{marginRight:"$1"},variants:{color:{info:{},success:{},danger:{},warning:{}},variant:{primary:{},secondary:{},outline:{}}},compoundVariants:[...(()=>["info","success","danger","warning"].map(a=>[{color:a,variant:"primary",css:{background:`$${a}`,color:"$whiteText"}},{color:a,variant:"secondary",css:{background:`$${a}Bg`,color:`$${a}`}},{color:a,variant:"outline",css:{background:`$${a}Bg`,color:`$${a}`,borderColor:`$${a}`}}]).flat())()],defaultVariants:{variant:"primary",color:"info"}}),R=f.forwardRef((n,a)=>{const{css:e={},label:i,icon:r=!1,variant:t="primary",color:o="info"}=n,c={variant:t,color:o},d=p(a);return $(u,{css:e,ref:d,...c,children:[r?s(g,{className:"icon",icon:typeof r=="boolean"?m(o):r}):null,s("span",{children:i})]})});export{R as B};