import{p}from"./index-DtbA92q1.js";import{l as g,e as y,af as u,u as k}from"./vue-chunks-rGo9PPWs.js";const x=g({name:"Highlight",props:{tag:p.string.def("span"),keys:{type:Array,default:()=>[]},color:p.string.def("var(--el-color-primary)")},emits:["click"],setup(n,{emit:o,slots:e}){const f=y(()=>n.keys.map(r=>u("span",{onClick:()=>{o("click",r)},style:{color:n.color,cursor:"pointer"}},r))),d=r=>(n.keys.forEach((c,t)=>{const i=new RegExp(c,"g");r=r.replace(i,`{{${t}}}`)}),r.split(/{{|}}/)),m=()=>{if(!(e!=null&&e.default))return null;const r=e==null?void 0:e.default()[0].children;if(!r)return e==null?void 0:e.default()[0];const c=d(r),t=/^[0-9]*$/,i=c.map(a=>t.test(a)&&k(f)[a]||a);return u(n.tag,i)};return()=>m()}});export{x as _};
