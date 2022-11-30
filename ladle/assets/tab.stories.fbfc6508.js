import{C as K,R as g}from"./components.bf48880f.js";import{$ as S,a as M,b as C,d as T,c as P,e as A}from"./module.75552ad2.js";import{d as F}from"./module.4cf21eb3.js";import{u as q,v as w,a as I,c as B}from"./module.aab4c89e.js";import{r as f,s as k,R as p,a as b,j as i}from"./index.c85b1806.js";import{a as D}from"./real-module.259e257f.js";import{$ as L}from"./module.b178a238.js";import{u as v}from"./use-dom-ref.bcc86ec4.js";const R=new WeakMap;function $(n,e,t){return typeof e=="string"&&(e=e.replace(/\s+/g,"")),`${R.get(n)}-${t}-${e}`}function E(n,e,t){let{key:a,isDisabled:s}=n,{selectionManager:l,selectedKey:r}=e,d=a===r,c=s||e.isDisabled||e.disabledKeys.has(a),{itemProps:u}=M({selectionManager:l,key:a,ref:t,isDisabled:c}),h=$(e,a,"tab"),y=$(e,a,"tabpanel"),{tabIndex:m}=u;return{tabProps:{...u,id:h,"aria-selected":d,"aria-disabled":c||void 0,"aria-controls":d?y:void 0,tabIndex:c?void 0:m,role:"tab"},isSelected:d,isDisabled:c}}function j(n,e,t){let[a,s]=f.exports.useState(0);B(()=>{if(t!=null&&t.current){let d=()=>{let u=F(t.current,{tabbable:!0});s(u.nextNode()?void 0:0)};d();let c=new MutationObserver(d);return c.observe(t.current,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["tabIndex","disabled"]}),()=>{c.disconnect()}}},[t]);const l=$(e,e==null?void 0:e.selectedKey,"tabpanel"),r=w({...n,id:l,"aria-labelledby":$(e,e==null?void 0:e.selectedKey,"tab")});return{tabPanelProps:I(r,{tabIndex:a,role:"tabpanel","aria-describedby":n["aria-describedby"],"aria-details":n["aria-details"]})}}class z{getKeyLeftOf(e){return this.flipDirection?this.getNextKey(e):this.orientation==="horizontal"?this.getPreviousKey(e):null}getKeyRightOf(e){return this.flipDirection?this.getPreviousKey(e):this.orientation==="horizontal"?this.getNextKey(e):null}getKeyAbove(e){return this.orientation==="vertical"?this.getPreviousKey(e):null}getKeyBelow(e){return this.orientation==="vertical"?this.getNextKey(e):null}getFirstKey(){let e=this.collection.getFirstKey();return this.disabledKeys.has(e)&&(e=this.getNextKey(e)),e}getLastKey(){let e=this.collection.getLastKey();return this.disabledKeys.has(e)&&(e=this.getPreviousKey(e)),e}getNextKey(e){do e=this.collection.getKeyAfter(e),e==null&&(e=this.collection.getFirstKey());while(this.disabledKeys.has(e));return e}getPreviousKey(e){do e=this.collection.getKeyBefore(e),e==null&&(e=this.collection.getLastKey());while(this.disabledKeys.has(e));return e}constructor(e,t,a,s=new Set){this.collection=e,this.flipDirection=t==="rtl"&&a==="horizontal",this.orientation=a,this.disabledKeys=s}}function N(n,e,t){let{orientation:a="horizontal",keyboardActivation:s="automatic"}=n,{collection:l,selectionManager:r,disabledKeys:d}=e,{direction:c}=D(),u=f.exports.useMemo(()=>new z(l,c,a,d),[l,d,a,c]),{collectionProps:h}=S({ref:t,selectionManager:r,keyboardDelegate:u,selectOnFocus:s==="automatic",disallowEmptySelection:!0,scrollRef:t}),y=q();R.set(e,y);let m=w({...n,id:y});return{tabListProps:{...I(h,m),role:"tablist","aria-orientation":a,tabIndex:void 0}}}var V=Symbol.iterator;class x{*[V](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){const t=[...this.getKeys()];return this.getItem(t[e])}constructor(e){this.keyMap=new Map,this.iterable=e;let t=l=>{if(this.keyMap.set(l.key,l),l.childNodes&&l.type==="section")for(let r of l.childNodes)t(r)};for(let l of e)t(l);let a,s=0;for(let[l,r]of this.keyMap)a?(a.nextKey=l,r.prevKey=a.key):(this.firstKey=l,r.prevKey=void 0),r.type==="item"&&(r.index=s++),a=r,a.nextKey=void 0;this.lastKey=a==null?void 0:a.key}}function W(n){let{filter:e}=n,t=C(n),a=f.exports.useMemo(()=>n.disabledKeys?new Set(n.disabledKeys):new Set,[n.disabledKeys]),s=d=>e?new x(e(d)):new x(d),l=f.exports.useMemo(()=>({suppressTextValueWarning:n.suppressTextValueWarning}),[n.suppressTextValueWarning]),r=T(n,s,l,[e]);return f.exports.useEffect(()=>{t.focusedKey!=null&&!r.getItem(t.focusedKey)&&t.setFocusedKey(null)},[r,t.focusedKey]),{collection:r,disabledKeys:a,selectionManager:new P(r,t)}}function O(n){var e;let[t,a]=L(n.selectedKey,(e=n.defaultSelectedKey)!==null&&e!==void 0?e:null,n.onSelectionChange),s=f.exports.useMemo(()=>t!=null?[t]:[],[t]),{collection:l,disabledKeys:r,selectionManager:d}=W({...n,selectionMode:"single",disallowEmptySelection:!0,allowDuplicateSelectionEvents:!0,selectedKeys:s,onSelectionChange:u=>{let h=u.values().next().value;h===t&&n.onSelectionChange&&n.onSelectionChange(h),a(h)}}),c=t!=null?l.getItem(t):null;return{collection:l,disabledKeys:r,selectionManager:d,selectedKey:t,setSelectedKey:a,selectedItem:c}}function H(n){let e=O({...n,suppressTextValueWarning:!0}),{selectionManager:t,collection:a,selectedKey:s}=e,l=f.exports.useRef(s),r=s;if(t.isEmpty||!a.getItem(r)){for(r=a.getFirstKey();e.disabledKeys.has(r)&&r!==a.getLastKey();)r=a.getKeyAfter(r);e.disabledKeys.has(r)&&r===a.getLastKey()&&(r=a.getFirstKey()),t.setSelectedKeys([r])}return(t.focusedKey==null||!t.isFocused&&r!==l.current)&&t.setFocusedKey(r),l.current=r,{...e,isDisabled:n.isDisabled||!1}}const Z=k("div",{position:"relative",flexShrink:0,fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",fontSize:"$label1",cursor:"pointer",userSelect:"none",transition:"$Tabs",display:"flex",alignItems:"center",width:"max-content","& .icon":{width:"$4",height:"$4",display:"flex",justifyContent:"center",alignItems:"center",border:"black thin solid",borderRadius:"$full",backgroundColor:"$background","& svg":{display:"none"}},"&:hover":{"& .icon":{backgroundColor:"$background","& path":{fill:"$cdgBlue140"}}},variants:{variant:{rounded:{display:"flex",justifyContent:"center",padding:"$2 $4",background:"transparent",borderRadius:"$full",color:"$cdgBlue120","&:hover":{background:"$cdgBlue140",color:"$whiteText"}},simple:{background:"transparent",padding:"$2 0","&:hover":{color:"$cdgBlue100","& .icon":{backgroundColor:"$cdgBlue100",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},disabled:{true:{background:"transparent",color:"$gray50",cursor:"not-allowed"}},active:{true:{color:"$whiteText",background:"$cdgBlue"}},icon:{none:{"& .icon":{display:"none"}},left:{display:"flex",flexDirection:"row","& .icon":{width:"$4",marginLeft:"$2"}},right:{display:"flex",flexDirection:"row-reverse","& .icon":{width:"$4",marginRight:"$2"}},top:{display:"flex",flexDirection:"column-reverse","& .icon":{width:"$4",marginBottom:"$2"}}}},compoundVariants:[{variant:"simple",disabled:!0,css:{background:"transparent","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover":{background:"transparent",color:"$gray50","& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}}}}},{variant:"simple",active:!0,css:{color:"$cdgBlue100",marginBottom:"-2px",borderBottom:"$cdgBlue 2px solid"}},{variant:"rounded",disabled:!0,css:{color:"$gray50",backgroundColor:"transparent","&:hover":{color:"$gray50",backgroundColor:"transparent"}}},{variant:"rounded",active:!0,css:{color:"$whiteText",backgroundColor:"$cdgBlue100","& .icon":{backgroundColor:"$background",border:"none","& svg":{display:"block","& path":{fill:"$cdgBlue100"}}}}},{variant:"simple",active:!0,css:{backgroundColor:"transparent","& .icon":{backgroundColor:"$cdgBlue100",border:"none","& svg":{display:"block","& path":{fill:"$whiteText"}}}}},{variant:"rounded",disabled:!0,css:{"& .icon":{backgroundColor:"$gray50",border:"none",display:"flex","& svg":{display:"block","& path":{fill:"$whiteText"}}},"&:hover":{"& .icon":{backgroundColor:"$gray50","& path":{fill:"$whiteText"}}}}}],defaultVariants:{variant:"rounded",disabled:!1,icon:"none"}}),_=p.forwardRef(({item:n,state:e,isDisabled:t,variant:a="rounded",icon:s="none"},l)=>{var y,m;const{key:r,rendered:d}=n,c=v(l),{tabProps:u}=E({key:r},e,c),h=t||((y=e==null?void 0:e.disabledKeys)==null?void 0:y.has(r));return b(Z,{...u,ref:c,icon:s,disabled:!!h,active:((m=e.selectedItem)==null?void 0:m.key)===r,variant:a,className:"tab-item-wrapper",children:[d,s!=="none"&&i("div",{className:"icon",children:h?i(G,{}):i(J,{})})]})}),G=()=>i("svg",{width:"10",height:"2",viewBox:"0 0 10 2",fill:"none",children:i("path",{d:"M8.87822 1.83335H1.12182C0.732011 1.83335 0.416687 1.46044 0.416687 0.99976C0.416687 0.539083 0.732011 0.166687 1.12182 0.166687H8.87822C9.26803 0.166687 9.58335 0.539083 9.58335 0.99976C9.58335 1.46044 9.26825 1.83335 8.87822 1.83335Z",fill:"white"})}),J=()=>i("svg",{width:"10",height:"8",viewBox:"0 0 10 8",children:i("path",{d:"M9.39146 0.862272C9.64724 1.12272 9.64724 1.5436 9.39146 1.80404L4.15307 7.13796C3.89729 7.3984 3.48395 7.3984 3.22817 7.13796L0.6084 4.471C0.352701 4.21056 0.352701 3.78968 0.6084 3.52923C0.86414 3.26879 1.27871 3.26879 1.53449 3.52923L3.6722 5.72322L8.46655 0.862272C8.72233 0.601411 9.13568 0.601411 9.39146 0.862272Z",fill:"currentColor"})}),Q=_,U=p.forwardRef(({state:n,...e},t)=>{const a=v(t),{tabPanelProps:s}=j(e,n,a),l=f.exports.useMemo(()=>p.cloneElement(n.selectedItem,{}),[]);return i("div",{...s,ref:a,className:"tab-panel-wrapper",children:l.props.children})}),X=U,Y=k("div",{fontFamily:"$sans",lineHeight:"$normal",fontWeight:"$semibold",display:"grid",gridTemplateColumns:"min-content",width:"fit-content",margin:"0",gap:"$4",variants:{variant:{rounded:{background:"$background",borderRadius:"$full"},simple:{background:"transparent",borderRadius:"none"}},orientation:{horizontal:{padding:"$2",gridAutoFlow:"column"},vertical:{padding:"$4 $2",gridAutoFlow:"row"}}},compoundVariants:[{variant:"rounded",orientation:"vertical",css:{borderRadius:"$xl"}}],defaultVariants:{orientation:"horizontal",variant:"rounded"}}),ee=p.forwardRef((n,e)=>{var r,d,c;const{css:t={}}=n,a=v(e),s=H(n),{tabListProps:l}=N(n,s,a);return b("div",{children:[i(Y,{ref:a,...l,css:t,orientation:(r=n.orientation)!=null?r:"horizontal",variant:(d=n.variant)!=null?d:"rounded",children:[...s.collection].map(u=>i(Q,{item:u,state:s,icon:n.icon,variant:n.variant},u.key))}),i(X,{state:s},(c=s.selectedItem)==null?void 0:c.key)]})}),o=ee;o.Item=A;const de=()=>b(K,{children:[i("h3",{children:"With left icon"}),i(g,{children:b(o,{icon:"left",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),i("h3",{children:"With right icon"}),i(g,{children:b(o,{icon:"right",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),i("h3",{children:"With top icon"}),i(g,{children:b(o,{variant:"simple",icon:"top",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),ce=()=>b(K,{children:[i("h3",{children:"Horizontal Rounded"}),i(g,{children:b(o,{orientation:"horizontal",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),i("h3",{children:"Vertical Rounded"}),i(g,{children:b(o,{orientation:"vertical",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]}),ue=()=>b(K,{children:[i("h3",{children:"Simple Style"}),i(g,{children:b(o,{variant:"simple",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})}),i("h3",{children:"Rounded Style"}),i(g,{children:b(o,{variant:"rounded",disabledKeys:["1"],children:[i(o.Item,{title:"Founding of Rome",children:"Arma virumque cano, Troiae qui primus ab oris."},"1"),i(o.Item,{title:"Monarchy and Republic",children:"Senatus Populusque Romanus."},"2"),i(o.Item,{title:"Empire",children:"Alea jacta est."},"3")]})})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{de as Icon,ce as Orientation,ue as Variants};
