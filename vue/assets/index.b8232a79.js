var E=Object.defineProperty;var k=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(e,i,s)=>i in e?E(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,f=(e,i)=>{for(var s in i||(i={}))W.call(i,s)&&x(e,s,i[s]);if(k)for(var s of k(i))z.call(i,s)&&x(e,s,i[s]);return e};import{f as C,_ as L,g as T,h as m,o as l,c as a,t as y,i as d,n as c,F as g,d as v,j as S}from"./app.b6ae52a2.js";var w={props:["ellipsis"],data(){const e=this.$slots.default()[0].children,{expandable:i,expandStyle:s,packupable:t,packupStyle:u,recognizeLineBreaks:p,rows:r,suffix:o}=this.ellipsis,n=o||(i?"\u5C55\u5F00":null);return{expandable:i,expandStyle:s,packup:"\u6536\u8D77",packupable:t,packupStyle:u,recognizeLineBreaks:p,rows:r,suffix:n,fullText:e==null?void 0:e.trim(),displayText:null,displayTextBeforeExpand:null,suffixWidth:n?null:0}},setup(){return{}},directives:{suffix:{mounted(e,i){i.instance.suffixWidth=e.offsetWidth}},ellipsis:{mounted(e,i){var s;try{const t=i.instance,u=t.ellipsis,{rows:p,recognizeLineBreaks:r}=u,o=e.offsetWidth,n=+getComputedStyle(e).fontSize.replace("px",""),b=getComputedStyle(e).fontFamily,B=t.suffixWidth,$=(s=t.$slots.default()[0].children)==null?void 0:s.trim(),h=C($,{length:o*p,lines:p,fontSize:n,ellipsisWidth:B,fontFamily:b},{recognizeLineBreaks:r});t.displayText=h,t.displayTextBeforeExpand=h}catch(t){console.error(t)}}}},methods:{onExpand(){!this.expandable||(this.displayText=this.fullText)},onPackup(){!this.packupable||(this.displayText=this.displayTextBeforeExpand)}}};const D=["innerHTML"],F={key:1};function P(e,i,s,t,u,p){const r=T("suffix"),o=T("ellipsis");return m((l(),a("div",{style:c({visibility:e.suffixWidth===null?"hidden":"initial"})},[!!e.displayText&&e.recognizeLineBreaks?(l(),a("span",{key:0,innerHTML:e.displayText.replace(/\n/g,"<br />").replace(/\\n/g,"<br />")},null,8,D)):!!e.displayText&&!e.recognizeLineBreaks?(l(),a("span",F,y(e.displayText),1)):d("",!0),e.suffix?m((l(),a("span",{key:2,style:c(f({visibility:e.displayText?"initial":"hidden",display:e.displayText===e.fullText?"none":"initial",color:"#7395f7",cursor:"pointer"},e.expandStyle)),onClick:i[0]||(i[0]=(...n)=>e.onExpand&&e.onExpand(...n))},[e.$slots.suffix?d("",!0):(l(),a(g,{key:0},[v(y(e.suffix),1)],64)),S(e.$slots,"suffix")],4)),[[r]]):d("",!0),e.packupable&&e.displayTextBeforeExpand?(l(),a("div",{key:3,style:c(f({display:e.displayText===e.displayTextBeforeExpand?"none":"block",color:"#7395f7",cursor:"pointer",textAlign:"right"},e.packupStyle)),onClick:i[1]||(i[1]=(...n)=>e.onPackup&&e.onPackup(...n))},[e.$slots.packup?d("",!0):(l(),a(g,{key:0},[v(y(e.packup),1)],64)),S(e.$slots,"packup")],4)):d("",!0)],4)),[[o]])}var N=L(w,[["render",P]]);export{N as P};