var h=(n,u,c)=>new Promise((m,d)=>{var g=r=>{try{t(c.next(r))}catch(a){d(a)}},o=r=>{try{t(c.throw(r))}catch(a){d(a)}},t=r=>r.done?m(r.value):Promise.resolve(r.value).then(g,o);t((c=c.apply(n,u)).next())});import{F as C}from"./Form-CD7krcVI.js";import{i as P,c as F}from"./index-DvvdN-Bg.js";import{u as V}from"./useForm-RTMkv4ZO.js";import{u as A}from"./useValidator-D6WhCcHc.js";import{_ as B}from"./IAgree.vue_vue_type_script_setup_true_lang-CYYh8-YQ.js";import{B as R}from"./element-plus-CjSNBJE_.js";import{l as E,a as v,I as j,M as s,u as i,O as _,m as O,R as U,y as $}from"./vue-chunks-rGo9PPWs.js";function b(n){return typeof n=="function"||Object.prototype.toString.call(n)==="[object Object]"&&!$(n)}const H=E({__name:"RegisterForm",emits:["to-login"],setup(n,{emit:u}){const c=u,{formRegister:m,formMethods:d}=V(),{getElFormExpose:g}=d,{t:o}=F(),{required:t,check:r}=A(),a=v(60),p=v(!1),k=()=>{p.value=!0;const e=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(e),a.value=60,p.value=!1)},1e3)},y=j([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>s("h2",{class:"text-2xl font-bold text-center w-[100%]"},[o("login.register")])}}},{field:"username",label:o("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:o("login.usernamePlaceholder")}},{field:"password",label:o("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:o("login.passwordPlaceholder")}},{field:"check_password",label:o("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:o("login.passwordPlaceholder")}},{field:"code",label:o("login.code"),colProps:{span:24},formItemProps:{slots:{default:e=>s("div",{class:"w-[100%] flex"},[s(R,{modelValue:e.code,"onUpdate:modelValue":l=>e.code=l,placeholder:o("login.codePlaceholder")},null),s(P,{type:"primary",disabled:i(p),class:"ml-10px",onClick:k},{default:()=>[o("login.getCode"),i(p)?`(${i(a)})`:""]})])}}},{field:"iAgree",colProps:{span:24},formItemProps:{slots:{default:e=>s(_,null,[s(B,{modelValue:e.iAgree,"onUpdate:modelValue":l=>e.iAgree=l,text:"我同意《用户协议》",link:[{text:"《用户协议》",url:"https://element-plus.org/"}]},null)])}}},{field:"register",colProps:{span:24},formItemProps:{slots:{default:()=>{let e,l;return s(_,null,[s("div",{class:"w-[100%]"},[s(P,{type:"primary",class:"w-[100%]",loading:f.value,onClick:x},b(e=o("login.register"))?e:{default:()=>[e]})]),s("div",{class:"w-[100%] mt-15px"},[s(P,{class:"w-[100%]",onClick:w},b(l=o("login.hasUser"))?l:{default:()=>[l]})])])}}}}]),I={username:[t()],password:[t()],check_password:[t()],code:[t()],iAgree:[t(),r()]},w=()=>{c("to-login")},f=v(!1),x=()=>h(this,null,function*(){const e=yield g();e==null||e.validate(l=>h(this,null,function*(){if(l)try{f.value=!0,w()}finally{f.value=!1}}))});return(e,l)=>(O(),U(i(C),{schema:y,rules:I,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:i(m)},null,8,["schema","onRegister"]))}});export{H as _};
