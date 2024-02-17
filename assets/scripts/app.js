(()=>{"use strict";var t,e,n={},s={};function r(t){var e=s[t];if(void 0!==e)return e.exports;var o=s[t]={exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.f={},r.e=t=>Promise.all(Object.keys(r.f).reduce(((e,n)=>(r.f[n](t,e),e)),[])),r.u=t=>t+".app.js",r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),t={},e="js-oop-classes-project-planner:",r.l=(n,s,o,i)=>{if(t[n])t[n].push(s);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var p=d[l];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==e+o){a=p;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",e+o),a.src=n),t[n]=[s];var h=(e,s)=>{a.onerror=a.onload=null,clearTimeout(u);var r=t[n];if(delete t[n],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((t=>t(s))),e)return e(s)},u=setTimeout(h.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=h.bind(null,a.onerror),a.onload=h.bind(null,a.onload),c&&document.head.appendChild(a)}},r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.p="assets/scripts/",(()=>{var t={792:0};r.f.j=(e,n)=>{var s=r.o(t,e)?t[e]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise(((n,r)=>s=t[e]=[n,r]));n.push(s[2]=o);var i=r.p+r.u(e),a=new Error;r.l(i,(n=>{if(r.o(t,e)&&(0!==(s=t[e])&&(t[e]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,s[1](a)}}),"chunk-"+e,e)}};var e=(e,n)=>{var s,o,[i,a,c]=n,d=0;if(i.some((e=>0!==t[e]))){for(s in a)r.o(a,s)&&(r.m[s]=a[s]);c&&c(r)}for(e&&e(n);d<i.length;d++)o=i[d],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0},n=self.webpackChunkjs_oop_classes_project_planner=self.webpackChunkjs_oop_classes_project_planner||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))})();class o{static clearEventListeners(t){const e=t.cloneNode(!0);return t.replaceWith(e),e}static moveElement(t,e){const n=document.getElementById(t);document.querySelector(e).append(n),n.scrollIntoView({behavior:"smooth"})}}class i{hasActiveTooltip=!1;constructor(t,e,n){this.id=t,this.hasActiveTooltip=!1,this.updateProjectListsHandler=e,this.connectMoreInfoButton(),this.connectSwitchButton(n),this.connectDrag()}showMoreInfoHandler(){if(this.hasActiveTooltip)return;const t=document.getElementById(this.id).dataset.extraInfo;r.e(41).then(r.bind(r,41)).then((e=>{new e.Tooltip((()=>{this.hasActiveTooltip=!1}),t,this.id).attach(),this.hasActiveTooltip=!0}))}connectDrag(){const t=document.getElementById(this.id);t.addEventListener("dragstart",(t=>{t.dataTransfer.setData("text/plain",this.id),t.dataTransfer.effectAllowed="move"})),t.addEventListener("dragend",(t=>{console.log(t)}))}connectMoreInfoButton(){document.getElementById(this.id).querySelector("button:first-of-type").addEventListener("click",this.showMoreInfoHandler.bind(this))}connectSwitchButton(t){let e=document.getElementById(this.id).querySelector("button:last-of-type");e=o.clearEventListeners(e),e.textContent="active"===t?"Finish":"Activate",e.addEventListener("click",this.updateProjectListsHandler.bind(null,this.id))}update(t,e){this.updateProjectListsHandler=t,this.connectSwitchButton(e)}}class a{projects=[];constructor(t){this.type=t,this.projects=[];const e=document.querySelectorAll(`#${t}-projects li`);for(const t of e)this.projects.push(new i(t.id,this.switchProject.bind(this),this.type));console.log(this.projects),this.connectDroppable()}connectDroppable(){const t=document.querySelector(`#${this.type}-projects ul`);t.addEventListener("dragenter",(e=>{"text/plain"===e.dataTransfer.types[0]&&(t.parentElement.classList.add("droppable"),e.preventDefault())})),t.addEventListener("dragover",(t=>{"text/plain"===t.dataTransfer.types[0]&&t.preventDefault()})),t.addEventListener("dragleave",(e=>{e.relatedTarget.closest(`#${this.type}-projects ul`)!==t&&t.parentElement.classList.remove("droppable")})),t.addEventListener("drop",(e=>{const n=e.dataTransfer.getData("text/plain");this.projects.find((t=>t.id===n))||(document.getElementById(n).querySelector("button:last-of-type").click(),t.parentElement.classList.remove("droppable"))}))}setSwitchHandlerFunction(t){this.switchHandler=t}addProject(t){this.projects.push(t),o.moveElement(t.id,`#${this.type}-projects ul`),t.update(this.switchProject.bind(this),this.type)}switchProject(t){this.switchHandler(this.projects.find((e=>e.id===t))),this.projects=this.projects.filter((e=>e.id!==t))}}(class{static init(){const t=new a("active"),e=new a("finished");t.setSwitchHandlerFunction(e.addProject.bind(e)),e.setSwitchHandlerFunction(t.addProject.bind(t))}static startAnalytics(){const t=document.createElement("script");t.src="assets/scripts/Utility/analytics.js",t.defer=!0,document.head.append(t)}}).init()})();
//# sourceMappingURL=app.js.map