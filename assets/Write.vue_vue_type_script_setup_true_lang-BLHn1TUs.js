var f=(s,m,t)=>new Promise((n,c)=>{var i=e=>{try{a(t.next(e))}catch(o){c(o)}},u=e=>{try{a(t.throw(e))}catch(o){c(o)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,u);a((t=t.apply(s,m)).next())});import{F as g}from"./Form-DQk_9oz1.js";import{u as v}from"./useForm-DP-9DOfq.js";import{u as w}from"./useValidator-DW18HVPQ.js";import{l as R,I as _,b as x,m as y,R as F,u as p}from"./vue-chunks-rGo9PPWs.js";const S=R({__name:"Write",props:{currentRow:{type:Object,default:()=>{}},formSchema:{type:Array,default:()=>[]}},setup(s,{expose:m}){const{required:t}=w(),n=s,c=_({username:[t()],account:[t()],"department.id":[t()]}),{formRegister:i,formMethods:u}=v(),{setValues:a,getFormData:e,getElFormExpose:o}=u,d=()=>f(this,null,function*(){const r=yield o();if(yield r==null?void 0:r.validate().catch(h=>{}))return yield e()});return x(()=>n.currentRow,r=>{r&&a(r)},{deep:!0,immediate:!0}),m({submit:d}),(r,l)=>(y(),F(p(g),{rules:c,onRegister:p(i),schema:s.formSchema},null,8,["rules","onRegister","schema"]))}});export{S as _};
