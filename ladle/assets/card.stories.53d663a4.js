import{s as c,R as h,a as e,j as t}from"./index.bc7fab13.js";import{B as d}from"./button.6118fae3.js";import{C as m}from"./components.f5505bf4.js";import{u as g}from"./use-dom-ref.5410d4d0.js";import"./module.4855a3d8.js";import"./module.4331c748.js";import"./index.6d6690b2.js";const y=c("div",{width:"100%",position:"relative",backgroundColor:"inherit",padding:"$6 $4 $6 $4",borderRadius:"$md",lineHeight:"$normal"}),b=h.forwardRef((i,l)=>{const{children:a,css:o={},...s}=i;return e(y,{css:o,ref:l,...s,children:a})}),B=c("img",{width:"100%",height:"$44",objectFit:"cover",borderTopLeftRadius:"$md",borderTopRightRadius:"$md"}),v=h.forwardRef((i,l)=>{const{css:a={},...o}=i,s=g(l);return e(B,{css:a,...o,ref:s})}),x=c("div",{width:"100%",position:"relative",backgroundColor:"inherit",marginBottom:"12px"}),C=c("h1",{fontSize:"$header4",margin:0}),w=h.forwardRef((i,l)=>{const{children:a,css:o={},...s}=i;return e(x,{css:o,ref:l,...s,children:(()=>typeof a=="string"?e(C,{children:a}):a)()})}),T=c("div",{width:"100%",position:"relative",backgroundColor:"$background",boxShadow:"0px 0.3px 0.9px rgba(0, 0, 0, 0.1), 0px 1.6px 3.6px rgba(0, 0, 0, 0.13)",borderRadius:"$md","& button":{marginTop:"$6"},"& button+button":{marginLeft:"$8"},variants:{variant:{default:{},disabled:{opacity:"0.5",userSelect:"none",cursor:"not-allowed"}},size:{small:{maxWidth:"$60"},large:{maxWidth:"$96"},full:{width:"100%"}}}}),r=h.forwardRef((i,l)=>{const{children:a,css:o={},isDisabled:s=!1,size:u="full",...p}=i,f=g(l);return e(T,{variant:s?"disabled":"default",size:u,css:o,ref:f,...p,children:a})});r.Body=b;r.Image=v;r.Title=w;const n=` Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
corrupti esse qui earum dolorum nulla assumenda excepturi, a
quibusdam rem eligendi vero hic, doloremque nam deserunt,
consequuntur aut atque eveniet.
`,q=()=>{const i="https://images.unsplash.com/flagged/photo-1562503542-2a1e6f03b16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&w=1000&q=80";return t(m,{children:[e("h3",{children:"Basic card small size"}),t(r,{size:"small",children:[e(r.Image,{src:i}),t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n.slice(0,n.length/5)}),e(d,{variant:"primary",children:"Button"})]})]}),e("h3",{children:"Basic card large size"}),t(r,{size:"large",children:[e(r.Image,{src:i}),t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n.slice(0,n.length/2)}),e(d,{variant:"primary",children:"Button"}),e(d,{variant:"secondary",children:"Button"})]})]}),e("h3",{children:"Basic card full size"}),t(r,{size:"full",children:[e(r.Image,{src:i}),t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n}),e(d,{variant:"primary",children:"Button"}),e(d,{variant:"secondary",children:"Button"})]})]}),e("h3",{children:"Basic card customized size"}),t(r,{css:{maxWidth:"400px"},children:[e(r.Image,{src:i}),t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n}),e(d,{variant:"primary",children:"Button"}),e(d,{variant:"secondary",children:"Button"})]})]})]})},j=()=>t(m,{children:[e("h3",{children:"Default"}),e(r,{size:"large",children:t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n.slice(0,n.length/2)}),e(d,{variant:"primary",children:"Button"}),e(d,{variant:"secondary",children:"Button"})]})}),e("h3",{children:"Disabled"}),e(r,{isDisabled:!0,size:"large",children:t(r.Body,{children:[e(r.Title,{children:"Card title"}),e("p",{style:{margin:0},children:n.slice(0,n.length/2)}),e(d,{isDisabled:!0,variant:"primary",children:"Button"}),e(d,{isDisabled:!0,variant:"secondary",children:"Button"})]})})]}),M={decorators:[i=>t("div",{children:[e("style",{dangerouslySetInnerHTML:{__html:".ladle-main { background: #eee; }"}}),e(i,{})]})]};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{q as Sizes,j as Variants,M as default};