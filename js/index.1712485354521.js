import"./app.1712485354521.js";import{X as E}from"./vendors/element-admin-layout.1712485354521.js";import{l as O,n as X,o as G,q as Q}from"./vendors/common.1712485354521.js";import{i as B,j as A,k as S,l as H,m as T,n as I,o as W,p as J,q as K,r as Z}from"./vendors/element-ui.1712485354521.js";import{f as z,r as m,B as $,I as q,h as F,V as P,Q as o,k as R,M as e,U as h,u as l,a6 as ee,D as te,c as le,j as ae,z as j}from"./vendors/vue.1712485354521.js";const x=O.create({baseURL:"http://localhost:12000",timeout:15e3});x.interceptors.response.use(n=>n.data.code==200?n.data:Promise.reject(n.data));const oe=z({__name:"AddForm",props:{modelValue:{type:Boolean},getListData:{type:Function}},emits:["update:modelValue"],setup(n,{emit:w}){const f="http://localhost:12000",c=n,v=w,d=m(),a=m(),i=m(!1),t=m(!1),p=$(),r=q({versionName:"0.0.1",updateDesc:""});function D(){v("update:modelValue",!1)}function y(s){p.value=s.raw,t.value=!1}function C(){p.value=null}function g(s){l(a).clearFiles(),l(a).handleStart(s[0])}async function L(){if(p.value==null){t.value=!0;return}else t.value=!1;i.value=!0;try{l(a).submit()}catch(s){console.log(s),i.value=!1}}async function u(s){try{console.log(s),await x.post("/app_version",{...r,appName:p.value.name,fileSize:p.value.size,updateDesc:r.updateDesc.split(`
`),downloadUrl:s==null?void 0:s.data.filePath}),c.getListData(),E("上传成功"),i.value=!1,D()}catch(_){console.log(_),E("提交失败","error"),i.value=!1}}return(s,_)=>{const b=B,k=A,Y=S,M=H,N=T,U=I;return F(),P(U,{"model-value":s.modelValue,title:"上传新版本",width:"600px","destroy-on-close":"",onClose:D},{footer:o(()=>[R("span",null,[e(Y,{onClick:D},{default:o(()=>[h("取消")]),_:1}),e(Y,{type:"primary",loading:l(i),onClick:L},{default:o(()=>[h("确认")]),_:1},8,["loading"])])]),default:o(()=>[e(N,{ref_key:"formRef",ref:d,model:l(r),"label-width":"120"},{default:o(()=>[e(k,{label:"版本名字："},{default:o(()=>[e(b,{modelValue:l(r).versionName,"onUpdate:modelValue":_[0]||(_[0]=V=>l(r).versionName=V)},null,8,["modelValue"])]),_:1}),e(k,{label:"安装包：",required:"","show-message":l(t),error:"请选择app安装包"},{default:o(()=>[e(M,{ref_key:"uploadRef",ref:a,accept:".apk",action:l(f)+"/app_version/upload","auto-upload":!1,limit:1,"on-exceed":g,"on-remove":C,onChange:y,onSuccess:u},{trigger:o(()=>[e(Y,{type:"primary"},{default:o(()=>[h("选择安装包")]),_:1})]),_:1},8,["action"])]),_:1},8,["show-message"]),e(k,{label:"更新描述："},{default:o(()=>[e(b,{modelValue:l(r).updateDesc,"onUpdate:modelValue":_[1]||(_[1]=V=>l(r).updateDesc=V),type:"textarea",rows:5},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["model-value"])}}});var ne={exports:{}};(function(n,w){(function(f,c){n.exports=c(X)})(G,function(f){function c(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var v=c(f),d={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(a,i){return i==="W"?a+"周":a+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(a,i){var t=100*a+i;return t<600?"凌晨":t<900?"早上":t<1100?"上午":t<1300?"中午":t<1800?"下午":"晚上"}};return v.default.locale(d,null,!0),d})})(ne);Q.locale("zh-cn");function se(n){return n==null||n==="undefined"||n===!1?!0:Array.isArray(n)?n.length===0:typeof n=="string"?n.trim().length===0:!1}const ie=z({__name:"EditForm",props:{modelValue:{type:Boolean},selectedData:{},getListData:{type:Function}},emits:["update:modelValue"],setup(n,{emit:w}){const f="http://localhost:12000",c=n,v=w,d=m(),a=m(!1),i=$(),t=q({_id:null,appName:null,fileSize:null,versionName:"0.0.1",versionCode:1,updateDesc:""});function p(){Object.keys(ee(t)).forEach(u=>{se(c.selectedData[u])||(u=="updateDesc"?t.updateDesc=c.selectedData[u].join(`
`):t[u]=c.selectedData[u])})}function r(){v("update:modelValue",!1)}function D(u){i.value=u.raw}function y(){i.value=null}function C(u){l(d).clearFiles(),l(d).handleStart(u[0])}async function g(){a.value=!0;try{i.value==null?L(null):l(d).submit()}catch(u){console.log(u),a.value=!1}}async function L(u){var s,_;try{await x.put("/app_version",{...t,appName:((s=i.value)==null?void 0:s.name)??t.appName,fileSize:((_=i.value)==null?void 0:_.size)??t.fileSize,updateDesc:t.updateDesc.split(`
`),downloadUrl:u==null?void 0:u.data.filePath}),c.getListData(),E("更新成功"),a.value=!1,r()}catch(b){console.log(b),E("更新失败","error"),a.value=!1}}return(u,s)=>{const _=B,b=A,k=W,Y=S,M=H,N=T,U=I;return F(),P(U,{"model-value":u.modelValue,title:"编辑App版本",width:"600px",onOpen:p,onClose:r},{footer:o(()=>[R("span",null,[e(Y,{onClick:r},{default:o(()=>[h("取消")]),_:1}),e(Y,{type:"primary",loading:l(a),onClick:g},{default:o(()=>[h("确认")]),_:1},8,["loading"])])]),default:o(()=>[e(N,{model:l(t),"label-width":"120"},{default:o(()=>[e(b,{label:"版本名字："},{default:o(()=>[e(_,{modelValue:l(t).versionName,"onUpdate:modelValue":s[0]||(s[0]=V=>l(t).versionName=V)},null,8,["modelValue"])]),_:1}),e(b,{label:"版本号："},{default:o(()=>[e(k,{modelValue:l(t).versionCode,"onUpdate:modelValue":s[1]||(s[1]=V=>l(t).versionCode=V),min:1},null,8,["modelValue"])]),_:1}),e(b,{label:"安装包："},{default:o(()=>[e(M,{ref_key:"uploadRef",ref:d,accept:".apk",action:l(f)+"/app_version/upload","auto-upload":!1,limit:1,"on-exceed":C,"on-remove":y,onChange:D,onSuccess:L},{trigger:o(()=>[e(Y,{type:"primary"},{default:o(()=>[h("选择安装包")]),_:1})]),_:1},8,["action"])]),_:1}),e(b,{label:"更新描述："},{default:o(()=>[e(_,{modelValue:l(t).updateDesc,"onUpdate:modelValue":s[2]||(s[2]=V=>l(t).updateDesc=V),type:"textarea",rows:5},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["model-value"])}}}),ue=n=>{const w=m([]),f=m([]),c=m(null),v=m(!1),d=m(!1);function a(){v.value=!0,x.get(n).then(t=>{w.value=t.data}).finally(()=>{v.value=!1})}function i(t){J.confirm("你确定要删除吗?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{d.value=!0;let p;Array.isArray(t)?p=t.join(","):p=t,x.delete(n+"?_id="+p).then(()=>{E("删除成功"),a()}).finally(()=>{d.value=!1})})}return{listData:w,selectedListData:f,selectedData:c,loadLoading:v,deleteLoading:d,getListData:a,deleteListData:i}},de={class:"p-2 flex flex-col"},re={class:"mb-2 flex justify-end"},ve=z({__name:"index",setup(n){const{listData:w,selectedData:f,getListData:c,deleteListData:v}=ue("/app_version"),d=m(!1),a=m(!1);function i(p){f.value=p,a.value=!0}function t(){x.get("/app_version/new_version").then(p=>{console.log(p.data)})}return te("selectedData",f),le(()=>{c()}),(p,r)=>{const D=S,y=K,C=Z;return F(),ae("div",de,[R("div",re,[e(D,{type:"primary",onClick:t},{default:o(()=>[h("获取最新版本")]),_:1}),e(D,{type:"primary",onClick:r[0]||(r[0]=g=>d.value=!0)},{default:o(()=>[h("上传新版本")]),_:1})]),e(C,{class:"w-full flex-1",data:l(w),border:!0,"show-overflow-tooltip":!0},{default:o(()=>[e(y,{prop:"_id",label:"ID",width:"240"}),e(y,{prop:"appName",label:"名称",width:"200",align:"center"}),e(y,{prop:"versionName",label:"版本名字",width:"100",align:"center"}),e(y,{prop:"versionCode",label:"版本号",width:"100",align:"center"}),e(y,{prop:"downloadUrl",label:"下载地址",align:"center","min-width":"150"}),e(y,{label:"操作",width:"120",align:"center"},{default:o(g=>[e(D,{link:"",type:"primary",size:"small",onClick:L=>i(g.row)},{default:o(()=>[h("编辑")]),_:2},1032,["onClick"]),e(D,{link:"",type:"danger",size:"small",onClick:L=>l(v)(g.row._id)},{default:o(()=>[h("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),e(oe,{modelValue:l(d),"onUpdate:modelValue":r[1]||(r[1]=g=>j(d)?d.value=g:null),"get-list-data":l(c)},null,8,["modelValue","get-list-data"]),e(ie,{modelValue:l(a),"onUpdate:modelValue":r[2]||(r[2]=g=>j(a)?a.value=g:null),"selected-data":l(f),"get-list-data":l(c)},null,8,["modelValue","selected-data","get-list-data"])])}}});export{ve as default};
