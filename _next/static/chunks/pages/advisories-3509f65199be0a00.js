(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[549],{71441:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/advisories",function(){return n(98519)}])},82554:function(e,t,n){"use strict";var s=n(85893),a=n(28014),r=n(67294),o=n(674),i=n(21237);let u=e=>{let{advisoriesData:t,onSubmit:n}=e,[u,c]=(0,r.useState)(t.map((e,t)=>{let{contentTitle:a,texts:r,links:u,terms:c,enableNextStep:l,rank:p,title:d,value:k}=e;return{content:(e,t,i,l)=>(0,s.jsx)(o.B,{onSubmit:n,title:a,texts:r,links:u,terms:c,rank:e,enableNextStep:t,onAccept:i,onBack:l}),enableNextStep:l,rank:p,state:(0,i.d$)(t),title:d,value:k}})),[l,p]=(0,r.useState)(u[0]),d=e=>{c(u.map(t=>t.rank===e+1?(p(t),{...t,state:"enabled"}):t))},k=e=>{c(u.map(t=>t.rank===e?{...t,state:"upcoming"}:t));let t=u.find(t=>t.rank===e-1);t&&p(t)},m=()=>{},f=e=>{p(e)};return(0,s.jsxs)(a.kC,{direction:"column",css:{gap:"$2xl"},children:[(0,s.jsx)(a.xv,{variant:"h3",children:"Advisories"}),(0,s.jsx)(a.I,{itemSelected:l,items:u,onItemChange:f,onComplete:m,onUpdateState:d,onBack:k})]})};t.Z=u},98519:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(41518),r=n(67294),o=n(11163),i=n(82554),u=n(3441);let c=()=>{let e=(0,o.useRouter)(),t=(0,a.o)((0,r.useCallback)(e=>e.completeLeaderStep,[])),n=(0,a.o)(e=>e.enableLeaderStep),c=()=>{t("advisories");let s=n("config-cluster");e.push(s.href)};return(0,s.jsx)(i.Z,{advisoriesData:u.QV,onSubmit:()=>c()})};t.default=c,c.cssLayout={px:"15%"},c.layout="ProgressTrackerLayout"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=71441)}),_N_E=e.O()}]);