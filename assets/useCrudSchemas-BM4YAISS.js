import{u}from"./useCrudSchemas-CEJA-iMz.js";import{c as p}from"./index-DtbA92q1.js";import{_ as s}from"./JsonEditor.vue_vue_type_script_setup_true_lang-mfyQsYX9.js";import{_ as n}from"./ContentWrap.vue_vue_type_script_setup_true_lang-CQf6C1h5.js";/* empty css               */import{p as r,s as c}from"./element-plus-CjSNBJE_.js";import{l as f,I as h,m as b,R as _,Q as t,M as l,u as e}from"./vue-chunks-rGo9PPWs.js";import"./tree-Dgaev6Pi.js";/* empty css                *//* empty css                  */const g=f({__name:"useCrudSchemas",setup(V){const{t:d}=p(),i=h([{field:"selection",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0},table:{type:"selection"}},{field:"index",label:d("tableDemo.index"),type:"index",search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}},{field:"title",label:d("tableDemo.title"),search:{component:"Input"},form:{component:"Input",colProps:{span:24}},detail:{span:24}},{field:"author",label:d("tableDemo.author"),search:{hidden:!0}},{field:"display_time",label:d("tableDemo.displayTime"),search:{hidden:!0},form:{component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{field:"importance",label:d("tableDemo.importance"),search:{hidden:!0},form:{component:"Select",componentProps:{style:{width:"100%"},options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}}},{field:"pageviews",label:d("tableDemo.pageviews"),search:{hidden:!0},form:{component:"InputNumber",value:0}},{field:"content",label:d("exampleDemo.content"),search:{hidden:!0},table:{show:!1},form:{component:"Editor",colProps:{span:24}},detail:{span:24}},{field:"action",width:"260px",label:d("tableDemo.action"),search:{hidden:!0},form:{hidden:!0},detail:{hidden:!0}}]),{allSchemas:m}=u(i);return(x,a)=>(b(),_(e(n),{title:"useCrudSchemas"},{default:t(()=>[l(e(c),{gutter:20},{default:t(()=>[l(e(r),{span:24},{default:t(()=>[l(e(n),{title:"原始数据数据",class:"mt-20px"},{default:t(()=>[l(e(s),{modelValue:i,"onUpdate:modelValue":a[0]||(a[0]=o=>i=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(e(r),{span:24},{default:t(()=>[l(e(n),{title:"查询组件数据结构",class:"mt-20px"},{default:t(()=>[l(e(s),{modelValue:e(m).searchSchema,"onUpdate:modelValue":a[1]||(a[1]=o=>e(m).searchSchema=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(e(r),{span:24},{default:t(()=>[l(e(n),{title:"表单组件数据结构",class:"mt-20px"},{default:t(()=>[l(e(s),{modelValue:e(m).formSchema,"onUpdate:modelValue":a[2]||(a[2]=o=>e(m).formSchema=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(e(r),{span:24},{default:t(()=>[l(e(n),{title:"表格组件数据结构",class:"mt-20px"},{default:t(()=>[l(e(s),{modelValue:e(m).tableColumns,"onUpdate:modelValue":a[3]||(a[3]=o=>e(m).tableColumns=o)},null,8,["modelValue"])]),_:1})]),_:1}),l(e(r),{span:24},{default:t(()=>[l(e(n),{title:"详情组件数据结构",class:"mt-20px"},{default:t(()=>[l(e(s),{modelValue:e(m).detailSchema,"onUpdate:modelValue":a[4]||(a[4]=o=>e(m).detailSchema=o)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}))}});export{g as default};
