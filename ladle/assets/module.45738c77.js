import{f as s,c,g as b,h as C,$ as v,b as h}from"./module.aa0ccdca.js";import"./index.460c870b.js";function x(e){let{id:l,label:n,"aria-labelledby":a,"aria-label":r,labelElementType:i="label"}=e;l=b(l);let t=b(),o={};n?(a=a?`${a} ${t}`:t,o={id:t,htmlFor:i==="label"?l:void 0}):!a&&!r&&console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");let d=C({id:l,"aria-label":r,"aria-labelledby":a});return{labelProps:o,fieldProps:d}}function M(e){let{description:l,errorMessage:n,validationState:a}=e,{labelProps:r,fieldProps:i}=x(e),t=s([Boolean(l),Boolean(n),a]),o=s([Boolean(l),Boolean(n),a]);return i=c(i,{"aria-describedby":[t,o,e["aria-describedby"]].filter(Boolean).join(" ")||void 0}),{labelProps:r,fieldProps:i,descriptionProps:{id:t},errorMessageProps:{id:o}}}function B(e,l){let{inputElementType:n="input",isDisabled:a=!1,isRequired:r=!1,isReadOnly:i=!1,validationState:t,type:o="text",onChange:d=()=>{}}=e,{focusableProps:u}=v(e,l),{labelProps:f,fieldProps:p,descriptionProps:$,errorMessageProps:P}=M(e),m=h(e,{labelable:!0});const y={type:o,pattern:e.pattern};return{labelProps:f,inputProps:c(m,n==="input"&&y,{disabled:a,readOnly:i,"aria-required":r||void 0,"aria-invalid":t==="invalid"||void 0,"aria-errormessage":e["aria-errormessage"],"aria-activedescendant":e["aria-activedescendant"],"aria-autocomplete":e["aria-autocomplete"],"aria-haspopup":e["aria-haspopup"],value:e.value,defaultValue:e.value?void 0:e.defaultValue,onChange:g=>d(g.target.value),autoComplete:e.autoComplete,maxLength:e.maxLength,minLength:e.minLength,name:e.name,placeholder:e.placeholder,inputMode:e.inputMode,onCopy:e.onCopy,onCut:e.onCut,onPaste:e.onPaste,onCompositionEnd:e.onCompositionEnd,onCompositionStart:e.onCompositionStart,onCompositionUpdate:e.onCompositionUpdate,onSelect:e.onSelect,onBeforeInput:e.onBeforeInput,onInput:e.onInput,...u,...p}),descriptionProps:$,errorMessageProps:P}}export{B as $};
