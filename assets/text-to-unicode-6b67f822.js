import{d as T,n as x,b as v,v as _,o as C,f as g,k as n,w as s,i as l,x as c,g as f,l as y,F as w,y as k,m as F,z as h}from"./index-9ebfa5cf.js";function j(d){return d.split("").map(o=>`&#${o.charCodeAt(0)};`).join("")}function z(d){return d.replace(/&#(\d+);/g,(o,u)=>String.fromCharCode(u))}const B={"mt-2":"",flex:"","justify-center":""},E={"mt-2":"",flex:"","justify-center":""},$=T({__name:"text-to-unicode",setup(d){const o=x(""),u=v(()=>o.value.trim()===""?"":j(o.value)),{copy:b}=_({source:u}),i=x(""),a=v(()=>i.value.trim()===""?"":z(i.value)),{copy:U}=_({source:a});return(N,e)=>{const r=k,p=F,m=h;return C(),g(w,null,[n(m,{title:"Text to Unicode"},{default:s(()=>[n(r,{value:l(o),"onUpdate:value":e[0]||(e[0]=t=>c(o)?o.value=t:null),multiline:"",placeholder:"e.g. 'Hello Avengers'",label:"Enter text to convert to unicode",autosize:"",autofocus:"","raw-text":"","test-id":"text-to-unicode-input"},null,8,["value"]),n(r,{value:l(u),"onUpdate:value":e[1]||(e[1]=t=>c(u)?u.value=t:null),label:"Unicode from your text",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"The unicode representation of your text will be here","test-id":"text-to-unicode-output"},null,8,["value"]),f("div",B,[n(p,{disabled:!l(u),onClick:e[2]||(e[2]=t=>l(b)())},{default:s(()=>[y(" Copy unicode to clipboard ")]),_:1},8,["disabled"])])]),_:1}),n(m,{title:"Unicode to Text"},{default:s(()=>[n(r,{value:l(i),"onUpdate:value":e[3]||(e[3]=t=>c(i)?i.value=t:null),multiline:"",placeholder:"Input Unicode",label:"Enter unicode to convert to text",autosize:"","raw-text":"","test-id":"unicode-to-text-input"},null,8,["value"]),n(r,{value:l(a),"onUpdate:value":e[4]||(e[4]=t=>c(a)?a.value=t:null),label:"Text from your Unicode",multiline:"","raw-text":"",readonly:"","mt-2":"",placeholder:"The text representation of your unicode will be here","test-id":"unicode-to-text-output"},null,8,["value"]),f("div",E,[n(p,{disabled:!l(a),onClick:e[5]||(e[5]=t=>l(U)())},{default:s(()=>[y(" Copy text to clipboard ")]),_:1},8,["disabled"])])]),_:1})],64)}}});export{$ as default};
