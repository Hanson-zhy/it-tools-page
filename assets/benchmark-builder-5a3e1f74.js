import{d as C,o as v,f as h,g as f,a3 as D,e as z,bw as E,bh as K,F as V,h as A,k as e,i as n,bx as O,w as m,l as x,b3 as P,aV as N,m as R,aW as F,E as T,b as I,v as q,x as G,y as H,a8 as J,c as Q,W as X,z as Y}from"./index-9ebfa5cf.js";import{_ as Z}from"./InputNumber-e950320a.js";import{_ as ee}from"./Scrollbar-3775226f.js";import{_ as te}from"./Divider-70730ebb.js";import{_ as ne}from"./FormItem-2aa60ed4.js";import"./use-locale-0ddb3b25.js";import"./use-form-item-2123ef51.js";import"./Input-ad630bd9.js";import"./Button-3ac349a3.js";import"./is-browser-fc34c9a6.js";import"./color-to-class-b0332f36.js";import"./Remove-00301806.js";const oe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},ae=f("g",{fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[f("path",{d:"M12 5v14"}),f("path",{d:"M5 12h14"})],-1),se=[ae],L=C({name:"Plus",render:function(s,l){return v(),h("svg",oe,se)}}),le={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},re=D('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"></path><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12"></path><path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"></path></g>',1),ie=[re],W=C({name:"Trash",render:function(s,l){return v(),h("svg",le,ie)}});function U({data:o}){return o.length===0?0:z.sum(o)/o.length}function ue({data:o}){const s=U({data:o}),l=o.map(r=>(r-s)**2);return U({data:l})}function ce({data:o,headerMap:s={}}){if(!Array.isArray(o)||o.length===0)return"";const l=Object.keys(o[0]),r=o.map(u=>Object.values(u)),i=`| ${l.map(u=>s[u]??u).join(" | ")} |`,w=`| ${l.map(()=>"---").join(" | ")} |`,k=r.map(u=>`| ${u.join(" | ")} |`).join(`
`);return`${i}
${w}
${k}`}const pe=C({__name:"dynamic-values",props:{values:{}},emits:["update:values"],setup(o,{emit:s}){const l=o,r=E(),i=K(l,"values",s);async function w(){i.value.push(null),await P(),r.value.at(-1)?.focus()}function k(u){if(u===i.value.length-1){w();return}r.value.at(u+1)?.focus()}return(u,B)=>{const a=N,t=R,c=F;return v(),h("div",null,[(v(!0),h(V,null,A(n(i),($,p)=>(v(),h("div",{key:p,"mb-2":"",flex:"","flex-nowrap":"","gap-2":""},[e(n(Z),{ref_for:!0,ref:n(r).set,value:n(i)[p],"onUpdate:value":b=>n(i)[p]=b,"show-button":!1,placeholder:"Set your measure...",autofocus:"",onKeydown:O(b=>k(p),["enter"])},null,8,["value","onUpdate:value","onKeydown"]),e(c,{tooltip:"Delete this value"},{default:m(()=>[e(t,{circle:"",variant:"text",onClick:b=>n(i).splice(p,1)},{default:m(()=>[e(a,{component:n(W),depth:"3",size:"18"},null,8,["component"])]),_:2},1032,["onClick"])]),_:2},1024)]))),128)),e(t,{onClick:w},{default:m(()=>[e(a,{component:n(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),x(" Add a measure ")]),_:1})])}}}),_e={"mb-5":"",flex:"","flex-1":"","flex-nowrap":"","justify-center":"","gap-12px":""},me={flex:"","justify-center":""},de={style:{flex:"0 0 100%"}},fe={style:{"max-width":"600px",margin:"0 auto"}},ve={"mx-auto":"","max-w-sm":"",flex:"","justify-center":"","gap-3":""},he={"mt-5":"",flex:"","justify-center":"","gap-3":""},Ue=C({__name:"benchmark-builder",setup(o){const s=T("benchmark-builder:suites",[{title:"Suite 1",data:[5,10]},{title:"Suite 2",data:[8,12]}]),l=T("benchmark-builder:unit",""),r=a=>Math.round(a*1e3)/1e3,i=I(()=>s.value.map(({data:a,title:t})=>{const c=a.filter(z.isNumber);return{title:t,size:c.length,mean:U({data:c}),variance:ue({data:c})}}).sort((a,t)=>a.mean-t.mean).map(({mean:a,variance:t,size:c,title:$},p,b)=>{const g=l.value.trim(),d=b[0].mean,M=a-d,j=d===0?"∞":r(a/d),_=p!==0&&d!==a?` (+${r(M)}${g} ; x${j})`:"";return{position:p+1,title:$,mean:`${r(a)}${g}${_}`,variance:`${r(t)}${g}${g?"²":""}`,size:c}})),{copy:w}=q({createToast:!1}),k={position:"Position",title:"Suite",size:"Samples",mean:"Mean",variance:"Variance"};function u(){w(ce({data:i.value,headerMap:k}))}function B(){const a=i.value.flatMap(({title:t,...c})=>[` - ${t}`,...Object.entries(c).map(([$,p])=>`    - ${k[$]??$}: ${p}`)]).join(`
`);w(a)}return(a,t)=>{const c=H,$=te,p=ne,b=Y,g=N,d=R,M=ee,j=J;return v(),h(V,null,[e(M,{style:{flex:"1"},"x-scrollable":""},{default:m(()=>[f("div",_e,[(v(!0),h(V,null,A(n(s),(_,S)=>(v(),h("div",{key:S},[e(b,{style:{width:"294px"}},{default:m(()=>[e(c,{value:_.title,"onUpdate:value":y=>_.title=y,"label-position":"left",label:"Suite name",placeholder:"Suite name...",clearable:""},null,8,["value","onUpdate:value"]),e($),e(p,{label:"Suite values","show-feedback":!1},{default:m(()=>[e(pe,{values:_.data,"onUpdate:values":y=>_.data=y},null,8,["values","onUpdate:values"])]),_:2},1024)]),_:2},1024),f("div",me,[n(s).length>1?(v(),Q(d,{key:0,variant:"text",onClick:y=>n(s).splice(S,1)},{default:m(()=>[e(g,{component:n(W),depth:"3","mr-2":"",size:"18"},null,8,["component"]),x(" Delete suite ")]),_:2},1032,["onClick"])):X("",!0),e(d,{variant:"text",onClick:y=>n(s).splice(S+1,0,{data:[0],title:`Suite ${n(s).length+1}`})},{default:m(()=>[e(g,{component:n(L),depth:"3","mr-2":"",size:"18"},null,8,["component"]),x(" Add suite ")]),_:2},1032,["onClick"])])]))),128))])]),_:1}),f("div",de,[f("div",fe,[f("div",ve,[e(c,{value:n(l),"onUpdate:value":t[0]||(t[0]=_=>G(l)?l.value=_:null),placeholder:"Unit (eg: ms)",label:"Unit","label-position":"left","mb-4":""},null,8,["value"]),e(d,{onClick:t[1]||(t[1]=_=>s.value=[{title:"Suite 1",data:[]},{title:"Suite 2",data:[]}])},{default:m(()=>[x(" Reset suites ")]),_:1})]),e(j,{data:n(i),headers:k},null,8,["data"]),f("div",he,[e(d,{onClick:t[2]||(t[2]=_=>u())},{default:m(()=>[x(" Copy as markdown table ")]),_:1}),e(d,{onClick:t[3]||(t[3]=_=>B())},{default:m(()=>[x(" Copy as bullet list ")]),_:1})])])])],64)}}});export{Ue as default};
