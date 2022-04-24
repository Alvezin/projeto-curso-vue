(function(){"use strict";var e={3417:function(e,n,t){var o=t(9242),r=t(3396);function a(e,n,t,o,a,i){const u=(0,r.up)("NavBar"),s=(0,r.up)("router-view"),c=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{logo:o.state.logo_src,alt:o.state.app_name},null,8,["logo","alt"]),(0,r.Wm)(s),(0,r.Wm)(c)],64)}var i=t(4870);const u={id:"nav"},s=["src","alt"],c=(0,r.Uk)("Home"),l=(0,r.Uk)("Pedidos");function d(e,n,t,o,a,i){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",u,[(0,r.Wm)(d,{to:"/",id:"logo"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:t.logo,alt:t.alt,id:"logo_url"},null,8,s)])),_:1}),(0,r.Wm)(d,{to:"/"},{default:(0,r.w5)((()=>[c])),_:1}),(0,r.Wm)(d,{to:"/pedidos"},{default:(0,r.w5)((()=>[l])),_:1})])}var p={name:"NavBar",props:["logo","alt"]},f=t(89);const m=(0,f.Z)(p,[["render",d],["__scopeId","data-v-99344a52"]]);var v=m;const g=e=>((0,r.dD)("data-v-447a0571"),e=e(),(0,r.Cn)(),e),h={id:"footer"},b=g((()=>(0,r._)("p",null,"Make Your Burger © 2022",-1))),_=[b];function y(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("footer",h,_)}var w={name:"Footer"};const k=(0,f.Z)(w,[["render",y],["__scopeId","data-v-447a0571"]]);var D=k,j={components:{NavBar:v,Footer:D},setup(){const e=(0,i.qj)({logo_src:"/img/logo.png",app_name:"Make your Burger"});return{state:e}}};const C=(0,f.Z)(j,[["render",a]]);var B=C,O=t(678);const S=e=>((0,r.dD)("data-v-7c582104"),e=e(),(0,r.Cn)(),e),E={class:"main-container"},N=S((()=>(0,r._)("h1",null,"Monte o seu burger",-1)));function F(e,n,t,o,a,i){const u=(0,r.up)("Banner"),s=(0,r.up)("BurgerForm");return(0,r.wg)(),(0,r.iD)("div",E,[(0,r.Wm)(u),N,(0,r.Wm)(s)])}const P=e=>((0,r.dD)("data-v-168b93f6"),e=e(),(0,r.Cn)(),e),T={class:"banner"},M=P((()=>(0,r._)("h1",null,"Make Your Burger",-1))),x=[M];function z(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("section",T,x)}var A={name:"Banner"};const W=(0,f.Z)(A,[["render",z],["__scopeId","data-v-168b93f6"]]);var Z=W,I=t(7139);const H=e=>((0,r.dD)("data-v-7d154840"),e=e(),(0,r.Cn)(),e),U={id:"burger-form"},Y={class:"input-container"},L=H((()=>(0,r._)("label",{class:"customized",for:"nome"},"Nome do Cliente: ",-1))),q={class:"input-container"},K=H((()=>(0,r._)("label",{class:"customized",for:"pao"},"Escolha seu pão: ",-1))),V=H((()=>(0,r._)("option",{value:""},"Selecione o seu pão",-1))),R=["value"],J={class:"input-container"},$=H((()=>(0,r._)("label",{class:"customized",for:"carne"},"Escolha a carne: ",-1))),G=H((()=>(0,r._)("option",{value:""},"Selecione a carne",-1))),Q=["value"],X={class:"input-container"},ee=H((()=>(0,r._)("label",{class:"customized",for:"opcionais"},"Selecione os opcionais: ",-1))),ne={id:"optional-container"},te=["value","id"],oe=["for"],re={class:"submit-container"};function ae(e,n,t,a,i,u){const s=(0,r.up)("Message");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.wy)((0,r.Wm)(s,{msg:a.state.msg},null,8,["msg"]),[[o.F8,a.state.msg]]),(0,r._)("form",U,[(0,r._)("div",Y,[L,(0,r.wy)((0,r._)("input",{type:"text",id:"nome",name:"nome","onUpdate:modelValue":n[0]||(n[0]=e=>a.state.nome=e),placeholder:"Digite o seu nome"},null,512),[[o.nr,a.state.nome]])]),(0,r._)("div",q,[K,(0,r.wy)((0,r._)("select",{name:"pao",id:"pao","onUpdate:modelValue":n[1]||(n[1]=e=>a.state.pao=e)},[V,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.state.paes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,I.zw)(e.tipo),9,R)))),128))],512),[[o.bM,a.state.pao]])]),(0,r._)("div",J,[$,(0,r.wy)((0,r._)("select",{name:"carne",id:"carne","onUpdate:modelValue":n[2]||(n[2]=e=>a.state.carne=e)},[G,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.state.carnes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,I.zw)(e.tipo),9,Q)))),128))],512),[[o.bM,a.state.carne]])]),(0,r._)("div",X,[ee,(0,r._)("div",ne,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.state.opcionaisData,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"opcionais","onUpdate:modelValue":n[3]||(n[3]=e=>a.state.opcionais=e),value:e.tipo,id:e.tipo},null,8,te),[[o.e8,a.state.opcionais]]),(0,r._)("label",{class:"label-checkbox",for:e.tipo},(0,I.zw)(e.tipo),9,oe)])))),128))])]),(0,r._)("div",re,[(0,r._)("input",{onClick:n[4]||(n[4]=e=>(a.preventReload(e),a.sendBurger())),type:"submit",class:"submit-btn",value:"Criar meu burger!"})])])])}var ie=t(4438),ue={name:"BurgerForm",components:{Message:ie.Z},setup(){const e=(0,i.qj)({paes:null,carnes:null,opcionaisData:null,nome:null,pao:null,carne:null,opcionais:[],msg:null});async function n(){const n=await fetch("http://localhost:3000/ingredientes"),t=await n.json();e.paes=t.paes,e.carnes=t.carnes,e.opcionaisData=t.opcionais}function t(e){e.preventDefault()}function o(){e.nome=null,e.pao=null,e.carne=null,e.opcionais=[]}function a(n){e.msg=`Pedido Nº ${n} Realizado com Sucesso`,setTimeout((()=>{e.msg=""}),4e3)}async function u(){const n={nome:e.nome,pao:e.pao,carne:e.carne,opcionais:[...e.opcionais],status:"Solicitado"},t=JSON.stringify(n),r=await fetch("http://localhost:3000/burgers",{method:"POST",headers:{"Content-Type":"application/json"},body:t}),i=await r.json();o(),a(i.id)}return(0,r.bv)((()=>{n()})),{state:e,getIngredientes:n,preventReload:t,sendBurger:u}}};const se=(0,f.Z)(ue,[["render",ae],["__scopeId","data-v-7d154840"]]);var ce=se,le={name:"Home",components:{Banner:Z,BurgerForm:ce}};const de=(0,f.Z)(le,[["render",F],["__scopeId","data-v-7c582104"]]);var pe=de;const fe=[{path:"/",name:"home",component:pe},{path:"/pedidos",name:"Pedidos",component:()=>t.e(550).then(t.bind(t,6751))}],me=(0,O.p7)({history:(0,O.PO)("/projeto-curso-vue/"),routes:fe});var ve=me;(0,o.ri)(B).use(ve).mount("#app")},4438:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(3396),r=t(7139);const a={class:"message-container"};function i(e,n,t,i,u,s){return(0,o.wg)(),(0,o.iD)("div",a,[(0,o._)("p",null,(0,r.zw)(t.msg),1)])}var u={name:"BurgerForm",props:{msg:String}},s=t(89);const c=(0,s.Z)(u,[["render",i],["__scopeId","data-v-682d9ea3"]]);var l=c}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],a=e[l][2];for(var u=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[s])}))?o.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/pedidos.8379b6e9.js"}}(),function(){t.miniCssF=function(e){return"css/pedidos.ed99554a.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="projeto-curso-vue:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var p=function(n,t){u.onerror=u.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/projeto-curso-vue/"}(),function(){var e=function(e,n,t,o){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var a=function(a){if(r.onerror=r.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,r.parentNode.removeChild(r),o(s)}};return r.onerror=r.onload=a,r.href=n,document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={550:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,s=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],s=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(s)var l=s(t)}for(n&&n(o);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},o=self["webpackChunkprojeto_curso_vue"]=self["webpackChunkprojeto_curso_vue"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(3417)}));o=t.O(o)})();
//# sourceMappingURL=app.0f446faa.js.map