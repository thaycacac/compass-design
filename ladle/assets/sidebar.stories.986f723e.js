import{s as h,R as l,j as e,F as O,a as d}from"./index.c85b1806.js";import{B as a}from"./button.71257299.js";import{C as x}from"./components.bf48880f.js";import{F as T}from"./index.40aeeacc.js";import{I as R}from"./index.afea94ee.js";import{p as f}from"./pick-child.339487af.js";import{u as g}from"./use-dom-ref.bcc86ec4.js";import"./module.7948122f.js";import"./module.aab4c89e.js";import"./module.4cf21eb3.js";const I=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",height:"100%",display:"flex",justifyContent:"flex-start",alignItems:"center",cursor:"pointer","& *":{height:"100%"}}),y=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",height:"100%",fontFamily:"$sans",fontWeight:"$semibold",lineHeight:"$normal",display:"flex",justifyContent:"flex-start",alignItems:"center"}),E=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",height:"$18",paddingLeft:"$2",paddingRight:"$2",paddingTop:"$4",paddingBottom:"$4",display:"flex",justifyContent:"space-between",backgroundColor:"$background",position:"absolute",bottom:"0",left:"0"}),j=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"$4",background:"transparent",width:"100%"}),M=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",width:"100%",height:"$10",paddingLeft:"$4",paddingRight:"$4",paddingTop:"$2",paddingBottom:"$2",display:"flex",justifyContent:"space-between",backgroundColor:"$background"}),P=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",background:"transparent",position:"absolute",top:"0",left:"0",width:"100%",height:"100%",zIndex:"999"}),B=h("div",{appearance:"none",border:"none",boxSizing:"border-box",margin:"0px",padding:"0px",width:"$88",height:"100vh",position:"absolute",top:"0",left:"0",zIndex:"1000",backgroundColor:"$primaryBg",variants:{variant:{primary:{},secondary:{backgroundColor:"$background",padding:"$12"}}},defaultVariants:{variant:"primary"}}),D=l.forwardRef((i,t)=>{const{children:r,css:o={},...s}=i,p=g(t);return e(E,{css:o,ref:p,...s,children:r})}),w=D,F=l.forwardRef((i,t)=>{const{children:r,css:o={},...s}=i,p=g(t);return e(j,{css:o,ref:p,...s,children:r})}),$=F,L=l.forwardRef((i,t)=>{const{children:r,css:o={},...s}=i,p=()=>typeof r=="string"?e(y,{children:r}):r,c=g(t);return e(y,{css:o,ref:c,...s,children:p()})}),C=L,H=l.forwardRef((i,t)=>{const{children:r,css:o={},variant:s="primary",isOpen:p=!1,handleClose:c,...z}=i,b=g(t),{child:k}=f(r,w),{child:v}=f(r,$),{child:A}=f(r,C);return l.useEffect(()=>{function u(m){var S;m.preventDefault(),b.current&&!((S=b==null?void 0:b.current)!=null&&S.contains(m.target))&&(c==null||c())}return document.addEventListener("mousedown",m=>{u(m)}),()=>{document.removeEventListener("mousedown",m=>{u(m)})}},[b]),e(O,{children:p&&e(P,{css:o,children:d(B,{variant:s,ref:b,...z,children:[s=="primary"&&d(M,{children:[A,e(I,{onClick:()=>c==null?void 0:c(),children:e(R,{icon:T})})]}),v,k]})})})}),n=H;n.Actions=w;n.Content=$;n.Title=C;const Y=()=>{const[i,t]=l.useState(!1);return d(x,{children:[e("h3",{children:"Primary Sidebar"}),e(a,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:()=>t(!0),children:"Open sidebar"}),d(n,{isOpen:i,handleClose:()=>t(!1),children:[e(n.Title,{children:"My title"}),e(n.Content,{children:"My content"}),d(n.Actions,{children:[e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]})]})},Z=()=>{const[i,t]=l.useState(!1),[r,o]=l.useState(!1);return d(x,{children:[e("h3",{children:"Primary Sidebar"}),e(a,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:()=>t(!0),children:"Open sidebar"}),d(n,{variant:"primary",isOpen:i,handleClose:()=>t(!1),children:[e(n.Title,{children:"My title"}),e(n.Content,{children:"My content"}),d(n.Actions,{children:[e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]}),e("h3",{children:"Secondary Sidebar"}),e(a,{css:{width:"9rem",height:"3.5rem",fontSize:"1em"},onPress:()=>o(!0),children:"Open sidebar"}),d(n,{variant:"secondary",isOpen:r,handleClose:()=>o(!1),children:[e(n.Title,{children:"My title"}),e(n.Content,{children:"My content"}),d(n.Actions,{children:[e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"}),e(a,{css:{width:"45%",height:"100%",fontSize:"1em"},children:"Action"})]})]})]})};typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Y as Default,Z as Variants};