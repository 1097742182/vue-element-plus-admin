var h=(n,p,i)=>new Promise((g,a)=>{var b=t=>{try{f(i.next(t))}catch(e){a(e)}},d=t=>{try{f(i.throw(t))}catch(e){a(e)}},f=t=>t.done?g(t.value):Promise.resolve(t.value).then(b,d);f((i=i.apply(n,p)).next())});import{D as k}from"./Descriptions-DL-F4KGG.js";import{A as v}from"./index-DvvdN-Bg.js";/* empty css               *//* empty css                *//* empty css                    */import{g as y}from"./index-D_TKY0q0.js";import{ac as L,l as x}from"./element-plus-CjSNBJE_.js";import{l as w,a as m,m as D,R as N,u,n as T,M as l,O as j,y as M}from"./vue-chunks-rGo9PPWs.js";function O(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!M(n)}const P=w({__name:"Detail",props:{currentRow:{type:Object,default:()=>{}}},setup(n){const p=e=>{var c,r,s;const o=v(((c=u(a))==null?void 0:c.permissionList)||[],_=>_.value===e);return(s=(((r=u(a))==null?void 0:r.permissionList)||[])[o].label)!=null?s:""},i=e=>l(x,{type:e?"success":"danger"},{default:()=>[e?"启用":"禁用"]}),g=m(),a=m(),b=e=>{a.value=e},d=m([]);h(this,null,function*(){const e=yield y();e&&(d.value=e.data.list,yield T())});const t=m([{field:"roleName",label:"角色名称"},{field:"status",label:"状态",slots:{default:e=>i(e.status)}},{field:"remark",label:"备注",span:24},{field:"permissionList",label:"菜单分配",span:24,slots:{default:()=>{var e,o,c;return l(j,null,[l("div",{class:"flex w-full"},[l("div",{class:"flex-1"},[l(L,{ref:g,"node-key":"id",props:{children:"children",label:"title"},"highlight-current":!0,"expand-on-click-node":!1,data:d.value,"onNode-click":b},{default:r=>{var s;return l("span",null,[(s=r==null?void 0:r.data)==null?void 0:s.title])}})]),l("div",{class:"flex-1"},[u(a)?(c=(o=(e=u(a))==null?void 0:e.meta)==null?void 0:o.permission)==null?void 0:c.map(r=>{let s;return l(x,{class:"ml-2 mt-2"},O(s=p(r))?s:{default:()=>[s]})}):null])])])}}}]);return(e,o)=>(D(),N(u(k),{schema:t.value,data:n.currentRow||{}},null,8,["schema","data"]))}});export{P as _};
