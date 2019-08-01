self.System=self.System||(()=>{const e={},t={},o=e=>e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/,"./$1.js"),n={register(a,i){const c=o(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),r={},l=i((e,t)=>t?r[e]=t:Object.assign(r,e),n);e[c]=Promise.all(a.map((e,t)=>n.import(o(e)).then(l.setters[t]))).then(()=>(l.execute(),r)).catch(e=>{throw e.message=`evaluating module ${c}: ${e.message}`,e}),t[c]&&(t[c](e[c]),delete t[c])},import:o=>e[o]||(e[o]=new Promise((e,n)=>{const a=setTimeout(()=>{n(new Error(`could not resolve ${o}`))},1e4);t[o]=(t=>{clearTimeout(a),e(t)})}))};return n})(),System.register(["./frameworks-892590f4.js"],function(e,t){"use strict";var o,n,a,i,c,r,l,s,d,u,p,m,h,g;return{setters:[function(e){o=e.d,n=e.f,a=e.i,i=e.aE,c=e.s,r=e.b,l=e.e,s=e.g,d=e.ai,u=e.a7,p=e.t,m=e.a8,h=e.v,g=e.j}],execute:function(){let e,t=!1;function f(t){e=setTimeout(b,5e3,t)}async function b(e){const o=e.value,n=a(e,"data-url");if(await i(),o===await c(n))f(e);else if(!t){const e=document.querySelector("#gollum-editor-submit");e instanceof HTMLButtonElement&&(e.disabled=!0,r(document,"#gollum-error-message").classList.remove("d-none"))}}o("#wiki-current-version",{constructor:HTMLInputElement,initialize(e){f(e)},remove(){clearTimeout(e)}}),n("click","#gollum-editor-submit",function(){t=!0});const y={node1:null,node2:null,selectNodeRange(){const{node1:e,node2:t}=y;if(e&&t){if(y.nodeComesAfter(e,t)){const e=y.node1;y.node1=y.node2,y.node2=e}let o=e.nextElementSibling;for(;o&&o!==t;)o=o.nextElementSibling}},nodeComesAfter(e,t){let o=e.previousElementSibling;for(;o;){if(o===t)return!0;o=o.previousElementSibling}return!1},checkNode(e){const t=s(e,".js-wiki-history-revision");e.checked?y.node1?y.node2?e.checked=!1:(y.node2=t,y.selectNodeRange()):y.node1=t:y.node1&&t===y.node1?(y.node1=null,y.node2&&(y.node1=y.node2,y.node2=null)):y.node2&&t===y.node2&&(y.node2=null)}};o(".js-wiki-history-checkbox",function(e){l(e instanceof HTMLInputElement,"app/assets/modules/github/wiki/gollum.js:79"),e.checked&&y.checkNode(e)}),n("change",".js-wiki-history-checkbox",function({currentTarget:e}){l(e instanceof HTMLInputElement,"app/assets/modules/github/wiki/gollum.js:86"),y.checkNode(e)}),d(function(){if(!document.querySelector("#wiki-wrapper"))return;const e=window.location.hash.match(/^#(wiki-(.+))$/);if(!e)return;const t=e[1],o=e[2];u(document,t)||(window.location.hash=o)});const k={markupCreated:!1,markup:"",attachEvents(){r(document,"#gollum-dialog-action-ok").addEventListener("click",k.eventOK),r(document,"#gollum-dialog-action-cancel").addEventListener("click",k.eventCancel);for(const e of p(document,'#gollum-dialog-dialog input[type="text"]'))e.addEventListener("keydown",k.eventKeydown)},detachEvents(){r(document,"#gollum-dialog-action-ok").removeEventListener("click",k.eventOK),r(document,"#gollum-dialog-action-cancel").removeEventListener("click",k.eventCancel)},createFieldMarkup(e){let t="<fieldset>";for(let o=0;o<e.length;o++)if("object"==typeof e[o]){switch(t+="<div>",e[o].type){case"text":t+=k.createFieldText(e[o])}t+="</div>"}return t+="</fieldset>"},createFieldText(e){let t="";return e.name&&(t+='<label class="d-block mb-1"',e.id&&(t+=` for="gollum-dialog-dialog-generated-field-${e.id}"`),t+=`>${e.name}</label>`),t+='<input type="text" class="mb-3 input-block"',e.id&&(t+=` name="${e.id}"`,t+=` id="gollum-dialog-dialog-generated-field-${e.id}">`),t},createMarkup:(e,t)=>(k.markupCreated=!0,`\n      <div id="gollum-dialog-dialog">\n        <div class="Box-header">\n          <h3 class="Box-title">${e}</h3>\n        </div>\n        <div class="Box-body overflow-auto">\n          <div id="gollum-dialog-dialog-body">${t}</div>\n          <div id="gollum-dialog-dialog-buttons" class="pt-3 border-top">\n            <button type="button" id="gollum-dialog-action-cancel" class="ml-2 btn btn-sm btn-outline float-right" data-close-dialog>Cancel</a>\n            <button type="button" id="gollum-dialog-action-ok" class="btn btn-sm btn-outline float-right" data-close-dialog>OK</a>\n          </div>\n        </div>\n      </div>`),eventCancel(e){e.preventDefault(),k.hide()},eventOK(e){e.preventDefault();const t={};for(const o of p(document,"#gollum-dialog-dialog-body input",HTMLInputElement)){const e=o.getAttribute("name");e&&(t[e]=o.value)}k.getDetailsElement().addEventListener("toggle",function(){"function"==typeof k.okEventCallback&&k.okEventCallback(t)},{once:!0}),k.hide()},eventKeydown(e){"Enter"===e.key&&k.eventOK(e)},hide(){k.markupCreated=!1,k.getDetailsElement().removeAttribute("open"),k.detachEvents()},getDetailsElement:()=>r(document,".js-gollum-button-details"),init(e){let t="",o="";if(!e||"object"!=typeof e)return;e.body&&"string"==typeof e.body&&(o=`<p>${e.body}</p>`),e.fields&&"object"==typeof e.fields&&(o+=k.createFieldMarkup(e.fields)),e.title&&"string"==typeof e.title&&(t=e.title),k.okEventCallback=e.OK,k.markup=k.createMarkup(t,o),k.show(),k.attachEvents();const n=document.querySelector('#gollum-dialog-dialog input[type="text"]');n instanceof HTMLInputElement&&(n.autofocus=!0)},show(){k.markupCreated&&(r(document,".js-gollum-button-dialog").innerHTML=k.markup,k.getDetailsElement().setAttribute("open",""))}},w={MarkupType:"markdown",EditorMode:"code",NewFile:!1,HasFunctionBar:!0};let x={};function L(e){if(x=Object.assign(w,e),E.baseEditorMarkup()&&E.functionBar()){const e=r(document,"#gollum-editor-body").getAttribute("data-markup-lang");if(e&&(x.MarkupType=e),E.formatSelector()&&N.init(r(document,"#gollum-editor-format-selector select",HTMLSelectElement)),T.setActiveLanguage(x.MarkupType),E.help()){const e=document.getElementById("gollum-editor-help");e&&(e.style.display="none",e.classList.remove("jaws"))}}}function v(e,t){"object"==typeof t&&T.define(e,t)}const T={_ACTIVE_LANG:"",_LOADED_LANGS:[],_LANG:{},define(e,t){if(T._ACTIVE_LANG=e,T._LOADED_LANGS.push(e),"object"==typeof L.WikiLanguage){const o={};Object.assign(o,L.WikiLanguage,t),T._LANG[e]=o}else T._LANG[e]=t},getActiveLanguage:()=>T._ACTIVE_LANG,setActiveLanguage(e){if(T.getHookFunctionFor("deactivate")){const e=T.getHookFunctionFor("deactivate");e&&e()}function t(){if($.refresh(),T.isValid()&&E.formatSelector()&&N.updateSelected(),T.getHookFunctionFor("activate")){const e=T.getHookFunctionFor("activate");e&&e()}}T.isLoadedFor(e)?(T._ACTIVE_LANG=e,t()):(T._ACTIVE_LANG="",T.define(e,{}),t())},getHookFunctionFor(e,t){let o=t;return o||(o=T._ACTIVE_LANG),T.isLoadedFor(o)&&T._LANG[o][e]&&"function"==typeof T._LANG[o][e]?T._LANG[o][e]:null},getDefinitionFor(e,t){let o=t;return o||(o=T._ACTIVE_LANG),T.isLoadedFor(o)&&T._LANG[o][e]&&"object"==typeof T._LANG[o][e]?T._LANG[o][e]:null},isLoadedFor(e){if(0===T._LOADED_LANGS.length)return!1;for(let t=0;t<T._LOADED_LANGS.length;t++)if(T._LOADED_LANGS[t]===e)return!0;return!1},isValid:()=>T._ACTIVE_LANG&&"object"==typeof T._LANG[T._ACTIVE_LANG]},E={baseEditorMarkup:()=>null!=document.querySelector("#gollum-editor")&&null!=document.querySelector("#gollum-editor-body"),formatSelector:()=>null!=document.querySelector("#gollum-editor-format-selector select"),functionBar:()=>x.HasFunctionBar&&null!=document.querySelector("#gollum-editor-function-bar"),ff4Environment:()=>new RegExp(/Firefox\/4.0b/).test(navigator.userAgent),editSummaryMarkup:()=>null!=document.querySelector("input#gollum-editor-message-field"),help:()=>null!=document.querySelector("#gollum-editor #gollum-editor-help")&&null!=document.querySelector("#gollum-editor #function-help")},$={isActive:!1,activate(){const e=r(document,"#gollum-editor-function-bar");for(const t of p(e,".function-button"))null!=T.getDefinitionFor(t.id)?(t.addEventListener("click",$.evtFunctionButtonClick),t.classList.remove("disabled")):"function-help"!==t.id&&(t.removeEventListener("click",$.evtFunctionButtonClick),t.classList.add("disabled"));e.classList.add("active"),$.isActive=!0},deactivate(){const e=r(document,"#gollum-editor-function-bar");for(const t of p(e,".function-button"))t.removeEventListener("click",$.evtFunctionButtonClick);e.classList.remove("active"),$.isActive=!1},evtFunctionButtonClick(e){const{currentTarget:t}=e;l(t instanceof HTMLElement,"app/assets/modules/github/wiki/editor/gollum-editor.js:271"),e.preventDefault();const o=T.getDefinitionFor(t.id);"object"==typeof o&&o&&$.executeAction(o)},executeAction(e){const t=document.getElementById("gollum-editor-body");l(t instanceof HTMLTextAreaElement,"app/assets/modules/github/wiki/editor/gollum-editor.js:282");const o=t.value,n=$.getFieldSelection(t);let a="string"==typeof n?n:"",i=!0,c=null;if("function"==typeof e.exec&&"string"==typeof n){const a=e.exec;return l("function"==typeof a,"app/assets/modules/github/wiki/editor/gollum-editor.js:295"),void a.call(e,o,n,t)}let r=/([^\n]+)/gi;if(e.search&&"object"==typeof e.search&&(r=null,r=new RegExp(e.search)),e.replace&&"string"==typeof e.replace){const t=e.replace;""===(a=(a=a.replace(r,t)).replace(/\$[\d]/g,""))&&(c=t.indexOf("$1"),a=t.replace(/\$[\d]/g,""),-1===c&&(c=Math.floor(t.length/2)))}e.append&&"string"==typeof e.append&&("string"==typeof n&&a===n&&(i=!1),a+=e.append),a&&$.replaceFieldSelection(t,a,i,c)},getFieldSelectionPosition:e=>({start:e.selectionStart,end:e.selectionEnd}),getFieldSelection(e){const t=$.getFieldSelectionPosition(e);return e.value.substring(t.start,t.end)},isShown(){const e=document.querySelector("#gollum-editor-function-bar");return null!=e&&m(e)},refresh(){E.functionBar()&&(T.isValid()?($.activate(),_&&_.setActiveHelp(T.getActiveLanguage())):($.isShown()&&$.deactivate(),_.isShown()&&_.hide()))},replaceFieldSelection(e,t,o,n){const a=$.getFieldSelectionPosition(e),i=e.value;let c=!0;!1===o&&(c=!1);let r=null;e.scrollTop&&(r=e.scrollTop),e.value=i.substring(0,a.start)+t+i.substring(a.end),c&&("number"==typeof n&&n>0?e.setSelectionRange(a.start+n,a.start+n):e.setSelectionRange(a.start,a.start+t.length)),e.focus(),r&&(e.scrollTop=r)}},N={SELECTOR:null,evtChangeFormat(){const e=this.value;T.setActiveLanguage(e)},init(e){null!=N.SELECTOR&&N.SELECTOR.removeEventListener("change",N.evtChangeFormat),N.SELECTOR=e,N.updateSelected();const t=N.SELECTOR;t&&t.addEventListener("change",N.evtChangeFormat)},updateSelected(){const e=T.getActiveLanguage(),t=N.SELECTOR;t&&(t.value=e)}},_={_ACTIVE_HELP:"",_ACTIVE_HELP_LANG:"",_LOADED_HELP_LANGS:[],_HELP:{},define(e,t){const o=document.querySelector("#function-help");if(_.isValidHelpFormat(t)){if(_._ACTIVE_HELP_LANG=e,_._LOADED_HELP_LANGS.push(e),_._HELP[e]=t,o){o.classList.remove("disabled"),o.addEventListener("click",_.evtHelpButtonClick),_.generateHelpMenuFor(e);const t=document.querySelector("#gollum-editor-help");t&&t.hasAttribute("data-autodisplay")&&_.show()}}else o&&(o.classList.add("disabled"),o.removeEventListener("click",_.evtHelpButtonClick))},clickFirstHelpLink(){const e=document.querySelector("#gollum-editor-help-list .menu-item");e&&e.click()},generateHelpMenuFor(e){if(!_._HELP[e])return!1;const t=_._HELP[e],o=r(document,"#gollum-editor-help-parent");o.innerHTML="",r(document,"#gollum-editor-help-list").innerHTML="",r(document,"#gollum-editor-help-content").innerHTML="";for(let n=0;n<t.length&&"object"==typeof t[n];n++){const e=h(document,`<a href="#" rel="${n}" class="menu-item border-bottom">${t[n].menuName}</a>`),a=r(e,"a");0===n&&a.classList.add("selected"),a.addEventListener("click",_.evtParentMenuClick),o.append(e)}_.generateSubMenu(t[0],0),_.clickFirstHelpLink()},generateSubMenu(e,t){const o=r(document,"#gollum-editor-help-list");o.innerHTML="",r(document,"#gollum-editor-help-content").innerHTML="";for(let n=0;n<e.content.length&&"object"==typeof e.content[n];n++){const a=h(document,`<a href="#" rel="${t}:${n}" class="menu-item border-bottom">${e.content[n].menuName}</a>`);for(const e of p(a,"a"))e.addEventListener("click",_.evtSubMenuClick);o.append(a)}},hide(){const e=document.querySelector("#gollum-editor-help");e&&(e.style.display="none")},show(){const e=document.querySelector("#gollum-editor-help");e&&(e.style.display="")},showHelpFor(e,t){const o=_._HELP[_._ACTIVE_HELP_LANG][e].content[t].data;r(document,"#gollum-editor-help-content").innerHTML=o},isLoadedFor(e){for(let t=0;t<_._LOADED_HELP_LANGS.length;t++)if(e===_._LOADED_HELP_LANGS[t])return!0;return!1},isShown(){const e=document.querySelector("#gollum-editor-help");return null!=e&&m(e)},isValidHelpFormat:e=>!("object"!=typeof e||!e.length||"string"!=typeof e[0].menuName||"object"!=typeof e[0].content||!e[0].content.length),setActiveHelp(e){const t=document.querySelector("#function-help");_.isLoadedFor(e)?(_._ACTIVE_HELP_LANG=e,t&&(t.classList.remove("disabled"),t.addEventListener("click",_.evtHelpButtonClick),_.generateHelpMenuFor(e))):(t&&(t.classList.add("disabled"),t.removeEventListener("click",_.evtHelpButtonClick)),_.isShown()&&_.hide())},evtHelpButtonClick(e){const{currentTarget:t}=e;if(l(t instanceof Element,"app/assets/modules/github/wiki/editor/gollum-editor.js:645"),e.preventDefault(),_.isShown()){const e=r(document,"#gollum-editor-help");if(e.hasAttribute("data-autodisplay")){const o=a(t,"data-dismiss-help-url"),n=a(t,"data-dismiss-help-authenticity-token"),i=new URLSearchParams;i.append("authenticity_token",n),g(o,{method:"delete",body:i}),e.removeAttribute("data-autodisplay")}_.hide()}else _.show()},evtParentMenuClick(e){e.preventDefault();const{currentTarget:t}=e;if(l(t instanceof HTMLAnchorElement,"app/assets/modules/github/wiki/editor/gollum-editor.js:674"),t.classList.contains("selected"))return;const o=t.rel,n=_._HELP[_._ACTIVE_HELP_LANG][o];for(const a of p(document,"#gollum-editor-help-parent .menu-item"))a.classList.remove("selected");t.classList.add("selected"),_.generateSubMenu(n,o),_.clickFirstHelpLink()},evtSubMenuClick(e){e.preventDefault();const{currentTarget:t}=e;if(l(t instanceof HTMLAnchorElement,"app/assets/modules/github/wiki/editor/gollum-editor.js:697"),t.classList.contains("selected"))return;const o=t.rel.split(":");for(const n of p(document,"#gollum-editor-help-list .menu-item"))n.classList.remove("selected");t.classList.add("selected"),_.showHelpFor(o[0],o[1])}},A=_.define;function S(e){const t=r(document,"#gollum-editor-body",HTMLTextAreaElement);$.replaceFieldSelection(t,e)}const I={"function-bold":{search:/(^[\n]+)([\n\s]*)/g,replace:"*$1*$2"},"function-italic":{search:/(^[\n]+)([\n\s]*)/g,replace:"_$1_$2"},"function-code":{search:/(^[\n]+)([\n\s]*)/g,replace:"+$1+$2"},"function-ul":{search:/(^[\n]+)([\n\s]*)/g,replace:"* $1$2"},"function-ol":{search:/(.+)([\n]?)/g,replace:". $1$2"},"function-blockquote":{search:/(.+)([\n]?)/g,replace:"----\n$1$2\n----\n"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text",help:"The text to display to the user."},{id:"href",name:"URL",type:"text",help:"The URL to link to."}],OK(e){let t="";e.text&&e.href&&(t=`${e.href}[${e.text}]`),S(t)}})}},"function-image":{exec(){k.init({title:"Insert Image",fields:[{id:"url",name:"Image URL",type:"text"},{id:"alt",name:"Alt Text",type:"text"}],OK(e){let t="";e.url&&e.alt&&(t=`image::${e.url}[${e.alt}]`),S(t)}})}}},H={"function-bold":{search:/([^\n]+)([\n\s]*)/g,replace:"**$1**$2"},"function-italic":{search:/([^\n]+)([\n\s]*)/g,replace:"_$1_$2"},"function-code":{search:/([^\n]+)([\n\s]*)/g,replace:"`$1`$2"},"function-hr":{append:"\n***\n"},"function-ul":{search:/(.+)([\n]?)/g,replace:"* $1$2"},"function-ol":{search:/(.+)([\n]?)/g,replace:"1. $1$2"},"function-blockquote":{search:/(.+)([\n]?)/g,replace:"> $1$2"},"function-h1":{search:/(.+)([\n]?)/g,replace:"# $1$2"},"function-h2":{search:/(.+)([\n]?)/g,replace:"## $1$2"},"function-h3":{search:/(.+)([\n]?)/g,replace:"### $1$2"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text"},{id:"href",name:"URL",type:"text"}],OK(e){let t="";e.text&&e.href&&(t=`[${e.text}](${e.href})`),S(t)}})}},"function-image":{exec(){k.init({title:"Insert Image",fields:[{id:"url",name:"Image URL",type:"text"},{id:"alt",name:"Alt Text",type:"text"}],OK(e){let t="";e.url&&(t=`![${e.alt}](${e.url})`),S(t)}})}}},F={"function-bold":{search:/([^\n]+)([\n\s]*)/g,replace:"*$1*$2"},"function-italic":{search:/([^\n]+)([\n\s]*)/g,replace:"/$1/$2"},"function-code":{search:/(^[\n]+)([\n\s]*)/g,replace:"=$1=$2"},"function-ul":{search:/(.+)([\n]?)/g,replace:"* $1$2"},"function-ol":{search:/(.+)([\n]?)/g,replace:"1. $1$2"},"function-blockquote":{search:/(.+)([\n]?)/g,replace:"#+BEGIN_QUOTE\n$1$2\n#+END_QUOTE\n"},"function-h1":{search:/(.+)([\n]?)/g,replace:"* $1$2"},"function-h2":{search:/(.+)([\n]?)/g,replace:"** $1$2"},"function-h3":{search:/(.+)([\n]?)/g,replace:"*** $1$2"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text"},{id:"href",name:"URL",type:"text"}],OK(e){let t="";e.text&&e.href?t=`[[${e.href}][${e.text}]]`:e.href&&(t=`[[${e.href}]]`),S(t)}})}},"function-image":{exec(){k.init({title:"Insert Image",fields:[{id:"url",name:"Image URL",type:"text"}],OK(e){let t="";e.url&&(t=`[[${e.url}]]`),S(t)}})}}},C={"function-bold":{search:/(^[\n]+)([\n\s]*)/g,replace:"B<$1>$2"},"function-italic":{search:/(^[\n]+)([\n\s]*)/g,replace:"I<$1>$2"},"function-code":{search:/(^[\n]+)([\n\s]*)/g,replace:"C<$1>$2"},"function-h1":{search:/(.+)([\n]?)/gi,replace:"=head1 $1$2"},"function-h2":{search:/(.+)([\n]?)/gi,replace:"=head2 $1$2"},"function-h3":{search:/(.+)([\n]?)/gi,replace:"=head3 $1$2"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text"},{id:"href",name:"URL",type:"text"}],OK(e){let t="";e.text&&e.href&&(t=`L<${e.text}|${e.href}>`),S(t)}})}}},M={"function-bold":{search:/(^[\n]+)([\n\s]*)/g,replace:"*$1*$2"},"function-italic":{search:/(^[\n]+)([\n\s]*)/g,replace:"_$1_$2"},"function-hr":{append:"\n***\n"},"function-code":{search:/(^[\n]+)([\n\s]*)/g,replace:"<pre><code>$1</code></pre>$2"},"function-ul":{search:/(.+)([\n]?)/gi,replace:"* $1$2"},"function-ol":{search:/(.+)([\n]?)/gi,replace:"# $1$2"},"function-blockquote":{search:/(.+)([\n]?)/gi,replace:"bq. $1$2"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text",help:"The text to display to the user."},{id:"href",name:"URL",type:"text",help:"The URL to link to."}],OK(e){let t="";e.text&&e.href&&(t=`"${e.text}":${e.href}`),S(t)}})}},"function-image":{exec(){k.init({title:"Insert Image",fields:[{id:"url",name:"Image URL",type:"text"},{id:"alt",name:"Alt Text",type:"text"}],OK(e){if(e.url){let t=`!${e.url}`;""!==e.alt&&(t+=`(${e.alt})`),S(t+="!")}}})}}},q={"function-bold":{search:/([^\n]+)([\n]*)/gi,replace:"**$1**$2"},"function-italic":{search:/([^\n]+)([\n]*)/gi,replace:"//$1//$2"},"function-code":{search:/([^\n]+)([\n]*)/gi,replace:"{{{$1}}}$2"},"function-hr":{append:"\n\n----\n\n"},"function-ul":{search:/(.+)([\n]?)/gi,replace:"* $1$2"},"function-ol":{search:/(.+)([\n]?)/gi,replace:"# $1$2"},"function-link":{exec(){k.init({title:"Insert Link",fields:[{id:"text",name:"Link Text",type:"text",help:"The text to display to the user."},{id:"href",name:"URL",type:"text",help:"The URL to link to."}],OK(e){S(`[[${e.href}|${e.text}]]`)}})}},"function-image":{exec(){k.init({title:"Insert Image",fields:[{id:"url",name:"Image URL",type:"text"},{id:"alt",name:"Alt Text",type:"text"}],OK(e){let t="";e.url&&e.alt&&(t=`{{${e.url}`,""!==e.alt&&(t+=`|${e.alt}}}`)),S(t)}})}}},j={"function-bold":{search:/([^\n]+)([\n\s]*)/g,replace:"((*$1*))$2"},"function-code":{search:/([^\n]+)([\n\s]*)/g,replace:"(({$1}))$2"},"function-ul":{search:/(.+)([\n]?)/gi,replace:"* $1$2"},"function-ol":{exec(e,t){let o="";const n=t.split("\n"),a=/[\w]+/;for(let i=0;i<n.length;i++)a.test(n[i])&&(o+=`(${(i+1).toString()}) ${n[i]}`);S(o)}},"function-h1":{search:/(.+)([\n]?)/gi,replace:"= $1$2"},"function-h2":{search:/(.+)([\n]?)/gi,replace:"== $1$2"},"function-h3":{search:/(.+)([\n]?)/gi,replace:"=== $1$2"}};o("#gollum-editor",function(e){L({NewFile:e.classList.contains("create")})}),L.WikiLanguage={"function-internal-link":{exec:()=>k.init({title:"Insert Wiki Link",fields:[{id:"name",name:"Link Name",type:"text"}],OK:e=>S(e.name?`[[${e.name}]]`:"")})}},n("click",".js-wiki-toggle-collapse",function(e){const t=s(e.currentTarget,".js-wiki-pages-box");for(const o of t.querySelectorAll(".js-wiki-sidebar-toggle-display"))o.classList.toggle("d-none")}),n("click",".js-wiki-more-pages-link",function(e){e.preventDefault(),s(e.currentTarget,".js-wiki-pages-box").classList.toggle("wiki-show-more")}),n("preview:setup",".js-previewable-comment-form",function(e){l(e instanceof CustomEvent,"app/assets/modules/github/wiki.js:66");const t=e.currentTarget.querySelector("#wiki_format");if(t){e.detail.data.wiki_format=t.value}}),n("change","#wiki_format",function(e){const t=e.currentTarget,o=s(t,".js-previewable-comment-form");o.classList.contains("preview-selected")&&o.dispatchEvent(new CustomEvent("preview:render",{bubbles:!0,cancelable:!1}))}),A("asciidoc",[{menuName:"Text Formatting",content:[{menuName:"Headers",data:"<p>ASCIIDoc headers can be written in two ways: with differing underlines or with different indentation using <code>=</code> (equals sign). ASCIIDoc supports headings 1-4. The editor will automatically use the <code>=</code> notation. To create a level one header, prefix your line with one <code>=</code>. Level two headers are created with <code>==</code> and so on.</p>"},{menuName:"Bold / Italic",data:"<p>To display text as <strong>bold</strong>, wrap the text in <code>*</code> (asterisks). To display text as <em>italic</em>, wrap the text in <code>_</code> (underscores). To create <code>monospace</code> text, wrap the text in <code>+</code> (plus signs)."},{menuName:"Scripts",data:"<p>Superscript and subscript is created the same way as other inline formats. To create superscript text, wrap your text in <code>^</code> (carats). To create subscript text, wrap your text in <code>~</code> (tildes).</p>"},{menuName:"Special Characters",data:"<p>ASCIIDoc will automatically convert textual representations of commonly-used special characters. For example, <code>(R)</code> becomes &reg;, <code>(C)</code> becomes &copy; and <code>(TM)</code> becomes &trade;.</p>"}]},{menuName:"Blocks",content:[{menuName:"Paragraphs",data:"<p>ASCIIDoc allows paragraphs to have optional titles or icons to denote special sections. To make a normal paragraph, simply add a line between blocks and a new paragraph will start. If you want to title your paragraphs, adda line prefixed by <code>.</code> (full stop). An example paragraph with optional title is displayed below:<br><br><code>.Optional Title<br><br>This is my paragraph. It is two sentences long.</code></p>"},{menuName:"Source Blocks",data:"<p>To create source blocks (long blocks of code), follow the same syntax as above but with an extra line denoting the inline source and lines of four dashes (<code>----</code>) delimiting the source block.. An example of Python source is below:<br><br><code>.python.py<br>[source,python]<br>----<br># i just wrote a comment in python<br># and maybe one more<br>----</code></p>"},{menuName:"Comment Blocks",data:"<p>Comment blocks are useful if you want to keep notes for yourself inline but do not want them displayed to the public. To create a comment block, simply wrap the paragraph in dividers with four slashes (<code>////</code>). An example comment block is below:<br><br><code>////<br>My comment block is here now<br><br>It can be multiple paragraphs. Really.<br>////</p>"},{menuName:"Quote Blocks",data:"<p>Quote blocks work much like comment blocks &mdash; simply create dividers using four underscores (<code>____</code>) around your quote. An example quote block is displayed below:<br><code>____<br>This is my quote block. Quote something nice here, otherwise there is no point in quoting.<br>____</code></p>"}]},{menuName:"Macros",content:[{menuName:"Links",data:'<p>To create links to external pages, you can simply write the URI if you want the URI to link to itself. (i.e., <code>https://github.com/</code> will automatically be parsed to <a href="javascript:void(0);">https://github.com/</a>. If you want different text to be displayed, simply append it to the end of the URI in between <code>[</code> (brackets.) For example, <code>https://github.com/[GitHub]</code> will be parsed as <a href="javascript:void(0);">GitHub</a>, with the URI pointing to <code>https://github.com</code>.</p>'},{menuName:"Images",data:"<p>Images in ASCIIDoc work much like hyperlinks, but image URLs are prefixed with <code>image:</code>. For example, to link to an image at <code>images/icons/home.png</code>, write <code>image:images/icons/home.png</code>. Alt text can be added by appending the text to the URI in <code>[</code> (brackets).</p>"}]}]),A("markdown",[{menuName:"Block Elements",content:[{menuName:"Paragraphs &amp; Breaks",data:"<p>To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.</p><p>If you want to create a line break, end a line with two or more spaces, then hit Return/Enter.</p>"},{menuName:"Headers",data:"<p>Markdown supports two header formats. The wiki editor uses the &ldquo;atx&rdquo;-style headers. Simply prefix your header text with the number of <code>#</code> characters to specify heading depth. For example: <code># Header 1</code>, <code>## Header 2</code> and <code>### Header 3</code> will be progressively smaller headers. You may end your headers with any number of hashes.</p>"},{menuName:"Blockquotes",data:"<p>Markdown creates blockquotes email-style by prefixing each line with the <code>&gt;</code>. This looks best if you decide to hard-wrap text and prefix each line with a <code>&gt;</code> character, but Markdown supports just putting <code>&gt;</code> before your paragraph.</p>"},{menuName:"Lists",data:"<p>Markdown supports both ordered and unordered lists. To create an ordered list, simply prefix each line with a number (any number will do &mdash; this is why the editor only uses one number.) To create an unordered list, you can prefix each line with <code>*</code>, <code>+</code> or <code>-</code>.</p> List items can contain multiple paragraphs, however each paragraph must be indented by at least 4 spaces or a tab."},{menuName:"Code Blocks",data:"<p>Markdown wraps code blocks in pre-formatted tags to preserve indentation in your code blocks. To create a code block, indent the entire block by at least 4 spaces or one tab. Markdown will strip the extra indentation you’ve added to the code block.</p>"},{menuName:"Horizontal Rules",data:"Horizontal rules are created by placing three or more hyphens, asterisks or underscores on a line by themselves. Spaces are allowed between the hyphens, asterisks or underscores."}]},{menuName:"Span Elements",content:[{menuName:"Links",data:"<p>Markdown has two types of links: <strong>inline</strong> and <strong>reference</strong>. For both types of links, the text you want to display to the user is placed in square brackets. For example, if you want your link to display the text &ldquo;GitHub&rdquo;, you write <code>[GitHub]</code>.</p><p>To create an inline link, create a set of parentheses immediately after the brackets and write your URL within the parentheses. (e.g., <code>[GitHub](https://github.com/)</code>). Relative paths are allowed in inline links.</p><p>To create a reference link, use two sets of square brackets. <code>[[my internal link|internal-ref]]</code> will link to the internal reference <code>internal-ref</code>.</p>"},{menuName:"Emphasis",data:"<p>Asterisks (<code>*</code>) and underscores (<code>_</code>) are treated as emphasis and are wrapped with an <code>&lt;em&gt;</code> tag, which usually displays as italics in most browsers. Double asterisks (<code>**</code>) or double underscores (<code>__</code>) are treated as bold using the <code>&lt;strong&gt;</code> tag. To create italic or bold text, simply wrap your words in single/double asterisks/underscores. For example, <code>**My double emphasis text**</code> becomes <strong>My double emphasis text</strong>, and <code>*My single emphasis text*</code> becomes <em>My single emphasis text</em>.</p>"},{menuName:"Code",data:"<p>To create inline spans of code, simply wrap the code in backticks (<code>`</code>). Markdown will turn <code>`myFunction`</code> into <code>myFunction</code>.</p>"},{menuName:"Images",data:"<p>Markdown image syntax looks a lot like the syntax for links; it is essentially the same syntax preceded by an exclamation point (<code>!</code>). For example, if you want to link to an image at <code>https://github.com/unicorn.png</code> with the alternate text <code>My Unicorn</code>, you would write <code>![My Unicorn](https://github.com/unicorn.png)</code>.</p>"}]},{menuName:"Miscellaneous",content:[{menuName:"Automatic Links",data:'<p>If you want to create a link that displays the actual URL, markdown allows you to quickly wrap the URL in <code>&lt;</code> and <code>&gt;</code> to do so. For example, the link <a href="javascript:void(0);">https://github.com/</a> is easily produced by writing <code>&lt;https://github.com/&gt;</code>.</p>'},{menuName:"Escaping",data:"<p>If you want to use a special Markdown character in your document (such as displaying literal asterisks), you can escape the character with the backslash (<code>\\</code>). Markdown will ignore the character directly after a backslash."}]}]),A("org",[{menuName:"Block Elements",content:[{menuName:"Paragraphs &amp; Breaks",data:"<p>To create a paragraph, simply create a block of text that is not separated by one or more blank lines. Blocks of text separated by one or more blank lines will be parsed as paragraphs.</p>"},{menuName:"Headers",data:"<p>Simply prefix your header text with the number of <code>*</code> characters to specify heading depth. For example: <code>* Header 1</code>, <code>** Header 2</code> and <code>*** Header 3</code> will be progressively smaller headers.</p>"},{menuName:"Blockquotes",data:"<p>To create a blockquote, simple embed the text between <code>#+BEGIN_QUOTE</code> and <code>#+END_QUOTE</code>. An example quote block is displayed below:<br><code>#+BEGIN_QUOTE<br>This is my quote block. Quote something nice here, otherwise there is no point in quoting.<br>#+END_QUOTE</code></p>"},{menuName:"Lists",data:"<p>Org-mode supports both ordered and unordered lists. To create an ordered list, simply prefix each line with a number (any number will do &mdash; this is why the editor only uses one number.) To create an unordered list, you can prefix each line with <code>+</code> or <code>-</code>.</p>"},{menuName:"Code Blocks",data:"<p>Code Blocks are similar to blockquote, except that <code>#+BEGIN_EXAMPLE</code> and <code>#+END_EXAMPLE</code> are used.</p>"},{menuName:"Tables",data:"<p>Org-mode supports simple tables (tables with equal number of cells in each row). To create a simple table, just separate the contents of each cell with a <code>|</code> character. For example, <br><br><code>|one|two|three|<br>|four|five|six|</code><br><br> will appear as a table with two rows and three columns.  Additionally, <br><br><code>|one|two|three|<br>|---+---+-----|<br>|four|five|six|</code><br><br> will also appear as a table, but the first row will be interpreted as a header row and the <code>&lt;th&gt;</code> tag will be used to render it. </p>"}]},{menuName:"Span Elements",content:[{menuName:"Links",data:'<p>To create links to external pages, you need to enclose the URI in double square brackets. (i.e., <code>[[https://github.com/]]</code> will automatically be parsed to <a href="javascript:void(0);">https://github.com/</a>)If you want to add text, to be displayed to the user, you write the URI and the text next to each other, both enclosed in square brackets and both of them together enclosed in another pair of square brackets. For example, if you want your link to display the text &ldquo;GitHub&rdquo;, you write <code>[[https://github.com][GitHub]]</code>.</p>'},{menuName:"Emphasis",data:"<p>Forward slashes (<code>/</code>) are treated as emphasis and are wrapped with an <code>&lt;i&gt;</code> tag. Asterisks (<code>*</code>) are treated as bold using the <code>&lt;b&gt;</code> tag.</p>"},{menuName:"Code",data:"<p>To create inline spans of code, simply wrap the code in equal signs (<code>=</code>). Orgmode will turn <code>=myFunction=</code> into <code>myFunction</code>.</p>"},{menuName:"Images",data:"<p>Org-mode image syntax is exactly same as the syntax that you would use for a URI to link to itself. The image URI is enclosed in double square brackets. Alt text on images is not currently supported by Gollum's Org-mode parser.</p>"}]}]),A("pod",[{menuName:"Command Paragraphs",content:[{menuName:"Headings",data:"<p>All command paragraphs start with <code>=</code> (equals sign).</p><p>To create headings 1 through 4, begin your command paragraph with <code>=headN</code>, where <code>N</code> is the number of the heading 1 through 4. For example, to make a first-order heading (the largest possible,) write <code>=head1</code>, then on the next line begin your paragraph that you want under the heading.</p>"},{menuName:"Beginning &amp; Ending",data:"<p>Perl pod blocks should begin with <code>=pod</code> and end with <code>=cut</code>, signifying to Pod parsers that the pod block has begun and ended. These command paragraphs only signal the beginning and end of a pod block.</p>"},{menuName:"Other Formats",data:"<p>pod also allows blocks in other formats, such as HTML or plain text. To create one of these blocks, use the <code>=format SYNTAX</code> command paragraph, where <code>SYNTAX</code> is the syntax of the block (e.g. <code>html</code> or <code>txt</code>). At the end of your block, use the <code>=end SYNTAX</code> block.</p>"},{menuName:"Encoding",data:"<p>If you are having encoding troubles, use the <code>=encoding ENC_TYPE</code> command, where <code>ENC_TYPE</code> is the encoding type (e.g. <code>utf8</code>, <code>koi8-r</code>). This will affect the entire document, not just the block below the command.</p>"}]},{menuName:"Formatting",content:[{menuName:"Text",data:"<p>Formatting text as <strong>bold</strong>, <em>italic</em> or <code>code</code> works in the <code>S&lt;word&gt;</code> syntax, where <code>S</code> is an abbreviation for the type of text you are trying to create. For example, <code>B&lt;my bold text&gt;</code> becomes <strong>my bold text</strong>,  <code>I&lt;italic text&gt;</code> becomes <em>italic text</em> and <code>C&lt;code here()&gt;</code> becomes <code>code here()</code>.</p>"},{menuName:"Hyperlinks",data:"<p>Writing hyperlinks in pod is much like formatting text, using the same <code>S&lt;&gt;</code> syntax. Instead of <code>B</code>, <code>I</code> or <code>C</code>, use <code>L</code> to begin a hyperlink.</p><p>pod allows you to hyperlink to a <code>man</code> page, a Perl documentation page, or another web page. To link to a <code>man</code> or Perl documentation page, simply include the page name in the link (e.g. <code>L&lt;perl(1)&gt;</code> or <code>L&lt;Net::Ping&gt;</code>). If you want to link to a web page, separate the URL and the link text with a pipe (e.g. to link to github.com, write <code>L&lt;GitHub|https://github.com/&gt;</code>)."}]}]),A("textile",[{menuName:"Phrase Modifiers",content:[{menuName:"Emphasis / Strength",data:"<p>To place emphasis or strength on inline text, simply place <code>_</code> (underscores) around the text for emphasis or <code>*</code> (asterisks) around the text for strength. In most browsers, <code>_mytext_</code> will appear as italics and <code>*mytext*</code> will appear as bold.</p><p>To force italics or bold, simply double the characters: <code>__mytext__</code> will appear italic and <code>**mytext**</code> will appear as bold text.</p>"},{menuName:"Citations / Editing",data:'<p>To display citations, wrap your text in <code>??</code> (two question marks).</p><p>To display edit marks such as deleted text (strikethrough) or inserted text (underlined text), wrap your text in <code>-</code> (minuses) or <code>+</code> (pluses). For example <code>-mytext-</code> will be rendered as <span style="text-decoration: line-through;">mytext</span> and <code>+mytext+</code> will be rendered as <span style="text-decoration: underline;">mytext</span></p>'},{menuName:"Superscript / Subscript",data:"<p>To display superscript, wrap your text in <code>^</code> (carets). To display subscript, wrap your text in <code>~</code> (tildes).</p>"},{menuName:"Code",data:"<p>To display monospace code, wrap your text in <code>@</code> (at symbol). For example, <code>@mytext@</code> will appear as <code>mytext</code>.</p>"},{menuName:"Acronyms",data:'<p>To create an acronym, suffix the acronym with the definition in parentheses. For example, <code>JS(JavaScript)</code> will be displayed as <abbr title="JavaScript">JS</abbr>.</p>'}]},{menuName:"Block Modifiers",content:[{menuName:"Headings",data:"<p>To display a heading in Textile, prefix your line of text with <code>hn.</code>, where <code>n</code> equals the heading size you want (1 is largest, 6 is smallest).</p>"},{menuName:"Paragraphs / Quotes",data:"<p>To create a new paragraph, prefix your first line of a block of text with <code>p.</code>.</p><p>To create a blockquote, make sure at least one blank line exists between your text and any surrounding text, and then prefix that block with <code>bq.</code> If you need to extend a blockquote to more than one text block, write <code>bq..</code> (note the two periods) and prefix your next normal paragraph with <code>p.</code></p>"},{menuName:"Code Blocks",data:"<p>Code blocks in textile are simply prefixed like any other block. To create a code block, place the beginning of the block on a separate line and prefix it with <code>bc.</code></p><p>To display a preformatted block, prefix the block with <code>pre.</code></p>"},{menuName:"Lists",data:"<p>To create ordered lists, prefix each line with <code>#</code>. To create unordered lists, prefix each line with <code>*</code>.</p>"}]},{menuName:"Links / Images",content:[{menuName:"Links",data:'<p>To display a link, put the text you want to display in quotes, then a colon (<code>:</code>), then the URL after the colon. For example <code>&quot;GitHub&quot;:https://github.com/</code> will appear as <a href="javascript:void(0);">GitHub</a>.</p>'},{menuName:"Images",data:"<p>To display an image, simply wrap the image’s URL in <code>!</code> (exclamation points). If you want to link the image to a URL, you can blend the image and link syntax: place your image URL in the exclamation points and suffix that with a colon and your URL. For example, an image at <code>http://myurl/image.png</code> that should link to <code>http://myurl/</code> should be written as <code>!http://myurl/image.png!:http://myurl/</code>.</p>"}]}]),v("asciidoc",I),v("creole",q),v("markdown",H),v("org",F),v("pod",C),v("rdoc",j),v("textile",M)}}});
//# sourceMappingURL=wiki-9c4cd373.js.map
