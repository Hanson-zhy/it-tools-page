import{T as h}from"./TextareaCopyable-71e44d02.js";import{d as x,e as y,a6 as L,n as u,b as w,o as R,f as k,k as o,i as e,x as F,y as V,g as n,t as B,F as D}from"./index-9ebfa5cf.js";const E={"overflow-auto":""},T={"mb-5px":""},P=x({__name:"FormatTransformer",props:{transformer:{type:Function,default:y.identity},inputValidationRules:{default:()=>[]},inputLabel:{default:"Input"},inputPlaceholder:{default:"Input..."},inputDefault:{default:""},outputLabel:{default:"Output"},outputLanguage:{default:""}},setup(s){const p=s,{transformer:i,inputValidationRules:r,inputLabel:f,outputLabel:d,outputLanguage:c,inputPlaceholder:m,inputDefault:_}=L(p),a=u(),t=u(_.value),g=w(()=>i.value(t.value));return(C,l)=>{const v=h;return R(),k(D,null,[o(V,{ref_key:"inputElement",ref:a,value:e(t),"onUpdate:value":l[0]||(l[0]=b=>F(t)?t.value=b:null),placeholder:e(m),label:e(f),rows:"20",autosize:"","raw-text":"",multiline:"","test-id":"input","validation-rules":e(r),monospace:""},null,8,["value","placeholder","label","validation-rules"]),n("div",E,[n("div",T,B(e(d)),1),o(v,{value:e(g),language:e(c),"follow-height-of":e(a)?.inputWrapperRef},null,8,["value","language","follow-height-of"])])],64)}}});export{P as _};
