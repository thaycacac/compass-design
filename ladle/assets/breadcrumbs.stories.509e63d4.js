import{h as ne,i as oe}from"./index.a49d8a62.js";import{$ as se}from"./module.b147ad4a.js";import{d as de,b as ie}from"./module.817a3489.js";import{r as b,R as $,s as w,a as n,j as p}from"./index.ebce766d.js";import{F as le}from"./index.es.3a8856dd.js";class be{getStringForLocale(e,a){let t=this.strings[a];t||(t=fe(a,this.strings,this.defaultLocale),this.strings[a]=t);let c=t[e];if(!c)throw new Error(`Could not find intl message ${e} in ${a} locale`);return c}constructor(e,a="en-US"){this.strings={...e},this.defaultLocale=a}}function fe(r,e,a="en-US"){if(e[r])return e[r];let t=ue(r);if(e[t])return e[t];for(let c in e)if(c.startsWith(t+"-"))return e[c];return e[a]}function ue(r){return Intl.Locale?new Intl.Locale(r).language:r.split("-")[0]}const v=new Map,h=new Map;class $e{format(e,a){let t=this.strings.getStringForLocale(e,this.locale);return typeof t=="function"?t(a,this):t}plural(e,a,t="cardinal"){let c=a["="+e];if(c)return typeof c=="function"?c():c;let o=this.locale+":"+t,s=v.get(o);s||(s=new Intl.PluralRules(this.locale,{type:t}),v.set(o,s));let d=s.select(e);return c=a[d]||a.other,typeof c=="function"?c():c}number(e){let a=h.get(this.locale);return a||(a=new Intl.NumberFormat(this.locale),h.set(this.locale,a)),a.format(e)}select(e,a){let t=e[a]||e.other;return typeof t=="function"?t():t}constructor(e,a){this.locale=e,this.strings=a}}const me=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),pe=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function ve(r){if(Intl.Locale){let a=new Intl.Locale(r).maximize().script;return me.has(a)}let e=r.split("-")[0];return pe.has(e)}function y(){let r=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([r])}catch{r="en-US"}return{locale:r,direction:ve(r)?"rtl":"ltr"}}let m=y(),f=new Set;function x(){m=y();for(let r of f)r(m)}function he(){let r=de(),[e,a]=b.exports.useState(m);return b.exports.useEffect(()=>(f.size===0&&window.addEventListener("languagechange",x),f.add(a),()=>{f.delete(a),f.size===0&&window.removeEventListener("languagechange",x)}),[]),r?{locale:"en-US",direction:"ltr"}:e}const xe=$.createContext(null);function ge(){let r=he();return b.exports.useContext(xe)||r}const g=new WeakMap;function we(r){let e=g.get(r);return e||(e=new be(r),g.set(r,e)),e}function ye(r){let{locale:e}=ge(),a=b.exports.useMemo(()=>we(r),[r]);return b.exports.useMemo(()=>new $e(e,a),[e,a])}function Le(r){return r&&r.__esModule?r.default:r}function Se(r,e){let{isCurrent:a,isDisabled:t,"aria-current":c,elementType:o="a",...s}=r,{linkProps:d}=se({isDisabled:t||a,elementType:o,...s},e),i=/^h[1-6]$/.test(o),u={};return i||(u=d),a&&(u["aria-current"]=c||"page",u.tabIndex=r.autoFocus?-1:void 0),{itemProps:{"aria-disabled":t,...u}}}var L={},S={};S={breadcrumbs:"\u0639\u0646\u0627\u0635\u0631 \u0627\u0644\u0648\u0627\u062C\u0647\u0629"};var k={};k={breadcrumbs:"\u0422\u0440\u043E\u0445\u0438 \u0445\u043B\u044F\u0431"};var R={};R={breadcrumbs:"Popis cesty"};var C={};C={breadcrumbs:"Br\xF8dkrummer"};var I={};I={breadcrumbs:"Breadcrumbs"};var P={};P={breadcrumbs:"\u03A0\u03BB\u03BF\u03B7\u03B3\u03AE\u03C3\u03B5\u03B9\u03C2 breadcrumb"};var D={};D={breadcrumbs:"Breadcrumbs"};var A={};A={breadcrumbs:"Migas de pan"};var F={};F={breadcrumbs:"Lingiread"};var T={};T={breadcrumbs:"Navigointilinkit"};var E={};E={breadcrumbs:"Chemin de navigation"};var N={};N={breadcrumbs:"\u05E9\u05D1\u05D9\u05DC\u05D9 \u05E0\u05D9\u05D5\u05D5\u05D8"};var B={};B={breadcrumbs:"Navigacijski putovi"};var M={};M={breadcrumbs:"Morzsamen\xFC"};var j={};j={breadcrumbs:"Breadcrumb"};var U={};U={breadcrumbs:"\u30D1\u30F3\u304F\u305A\u30EA\u30B9\u30C8"};var z={};z={breadcrumbs:"\uD0D0\uC0C9 \uD45C\uC2DC"};var H={};H={breadcrumbs:"Nar\u0161ymo kelias"};var _={};_={breadcrumbs:"Atpaka\u013Cce\u013Ci"};var G={};G={breadcrumbs:"Navigasjonsstier"};var K={};K={breadcrumbs:"Broodkruimels"};var O={};O={breadcrumbs:"Struktura nawigacyjna"};var W={};W={breadcrumbs:"Caminho detalhado"};var q={};q={breadcrumbs:"Categorias"};var J={};J={breadcrumbs:"Miez de p\xE2ine"};var V={};V={breadcrumbs:"\u041D\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044F"};var Z={};Z={breadcrumbs:"Naviga\u010Dn\xE9 prvky Breadcrumbs"};var Q={};Q={breadcrumbs:"Drobtine"};var X={};X={breadcrumbs:"Putanje navigacije"};var Y={};Y={breadcrumbs:"S\xF6kv\xE4gar"};var ee={};ee={breadcrumbs:"\u0130\xE7erik haritalar\u0131"};var re={};re={breadcrumbs:"\u041D\u0430\u0432\u0456\u0433\u0430\u0446\u0456\u0439\u043D\u0430 \u0441\u0442\u0435\u0436\u043A\u0430"};var ae={};ae={breadcrumbs:"\u5BFC\u822A\u680F"};var te={};te={breadcrumbs:"\u5C0E\u89BD\u5217"};L={"ar-AE":S,"bg-BG":k,"cs-CZ":R,"da-DK":C,"de-DE":I,"el-GR":P,"en-US":D,"es-ES":A,"et-EE":F,"fi-FI":T,"fr-FR":E,"he-IL":N,"hr-HR":B,"hu-HU":M,"it-IT":j,"ja-JP":U,"ko-KR":z,"lt-LT":H,"lv-LV":_,"nb-NO":G,"nl-NL":K,"pl-PL":O,"pt-BR":W,"pt-PT":q,"ro-RO":J,"ru-RU":V,"sk-SK":Z,"sl-SI":Q,"sr-SP":X,"sv-SE":Y,"tr-TR":ee,"uk-UA":re,"zh-CN":ae,"zh-TW":te};function ke(r){let{"aria-label":e,...a}=r,t=ye(Le(L));return{navProps:{...ie(a,{labelable:!0}),"aria-label":e||t.format("breadcrumbs")}}}const Re=w("a",{textDecoration:"none",transition:"$default",variants:{active:{true:{color:"$typeHeading"},false:{color:"$info"}}}}),l=({css:r={},href:e,target:a,disabled:t,children:c,...o})=>{const s={...o,elementType:"a",isDisabled:t},d=b.exports.useRef(null),{itemProps:i}=Se(s,d);return n("li",{children:n(Re,{ref:d,css:r,href:e,target:a,...o,...i,active:o.isActive,children:c})})},Ce=w("nav",{fontFamily:"$sans",ol:{padding:0,display:"flex",flexDirection:"row",alignItems:"center",listStyle:"none"},".divider":{color:"$typeHeading",padding:"0 $2",".divider-icon":{width:"$3_5",height:"$3_5"}}}),ce=({css:r={},dividerIcon:e,children:a,isActive:t,...c})=>{const{navProps:o}=ke(c),s=$.Children.toArray(a);return n(Ce,{css:r,...c,...o,children:n("ol",{children:s.map((d,i)=>p($.Fragment,{children:[$.cloneElement(d,{isActive:t?t(i):!1}),i<s.length-1&&n("li",{"aria-hidden":!0,className:"divider",children:n(le,{className:"divider-icon",icon:e||ne})})]},i))})})},Te=()=>p(ce,{isActive:e=>window&&window.location?window.location.hash===`#${e}`:!1,children:[n(l,{href:"#0",children:"Home"}),n(l,{href:"#1",children:"Library"}),n(l,{href:"#2",children:"Data"})]}),Ee=()=>p(ce,{dividerIcon:oe,isActive:r=>r===2,children:[n(l,{href:"#0",children:"Home"}),n(l,{href:"#1",children:"Library"}),n(l,{href:"#2",children:"Data"})]});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{Ee as CustomDivider,Te as Default};
