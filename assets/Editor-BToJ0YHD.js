var f=(c,n,o)=>new Promise((l,a)=>{var e=t=>{try{r(o.next(t))}catch(i){a(i)}},m=t=>{try{r(o.throw(t))}catch(i){a(i)}},r=t=>t.done?l(t.value):Promise.resolve(t.value).then(e,m);r((o=o.apply(c,n)).next())});import{_ as p}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CQf6C1h5.js";import{_ as d}from"./style.css_vue_type_style_index_0_src_true_lang-SZdA_kI2.js";import{c as _}from"./index-DtbA92q1.js";import{l as g,a as u,d as h,u as s,m as x,R as T,Q as R,M as V}from"./vue-chunks-rGo9PPWs.js";/* empty css                *//* empty css                  */import"./element-plus-CjSNBJE_.js";import"./wang-editor-C3vIlfas.js";const $=g({__name:"Editor",setup(c){const{t:n}=_(),o=e=>{e.getHtml()},l=u(),a=u("");return h(()=>f(this,null,function*(){var e;yield(e=s(l))==null?void 0:e.getEditorRef()})),setTimeout(()=>{a.value="<p>hello <strong>world</strong></p>"},3e3),(e,m)=>(x(),T(s(p),{title:s(n)("richText.richText"),message:s(n)("richText.richTextDes")},{default:R(()=>[V(s(d),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=r=>a.value=r),ref_key:"editorRef",ref:l,onChange:o},null,8,["modelValue"])]),_:1},8,["title","message"]))}});export{$ as default};
