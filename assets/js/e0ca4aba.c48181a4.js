"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2766],{58215:function(n,e,t){t.d(e,{Z:function(){return l}});var i=t(67294);function l(n){var e=n.children,t=n.hidden,l=n.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:l},e)}},9877:function(n,e,t){t.d(e,{Z:function(){return c}});var i=t(87462),l=t(67294),r=t(72389),a=t(63725),o=t(86010),s="tabItem_LplD";function u(n){var e,t,r,u=n.lazy,c=n.block,p=n.defaultValue,g=n.values,m=n.groupId,f=n.className,v=l.Children.map(n.children,(function(n){if((0,l.isValidElement)(n)&&void 0!==n.props.value)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),d=null!=g?g:v.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),k=(0,a.lx)(d,(function(n,e){return n.value===e.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var j=null===p?p:null!=(e=null!=p?p:null==(t=v.find((function(n){return n.props.default})))?void 0:t.props.value)?e:null==(r=v[0])?void 0:r.props.value;if(null!==j&&!d.some((function(n){return n.value===j})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+d.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,a.UB)(),b=h.tabGroupChoices,y=h.setTabGroupChoices,w=(0,l.useState)(j),E=w[0],F=w[1],N=[],Z=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var x=b[m];null!=x&&x!==E&&d.some((function(n){return n.value===x}))&&F(x)}var S=function(n){var e=n.currentTarget,t=N.indexOf(e),i=d[t].value;i!==E&&(Z(e),F(i),null!=m&&y(m,i))},C=function(n){var e,t=null;switch(n.key){case"ArrowRight":var i=N.indexOf(n.currentTarget)+1;t=N[i]||N[0];break;case"ArrowLeft":var l=N.indexOf(n.currentTarget)-1;t=N[l]||N[N.length-1]}null==(e=t)||e.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},d.map((function(n){var e=n.value,t=n.label,r=n.attributes;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:E===e?0:-1,"aria-selected":E===e,key:e,ref:function(n){return N.push(n)},onKeyDown:C,onFocus:S,onClick:S},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":E===e})}),null!=t?t:e)}))),u?(0,l.cloneElement)(v.filter((function(n){return n.props.value===E}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(n,e){return(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==E})}))))}function c(n){var e=(0,r.Z)();return l.createElement(u,(0,i.Z)({key:String(e)},n))}},4220:function(n,e,t){t.d(e,{Z:function(){return w}});var i=t(63366),l=t(67294),r=t(9877),a=t(58215),o=t(31736),s=function(n,e){return void 0===e&&(e='"'),"string"==typeof n?""+e+n+e:n},u=function(n,e){return void 0===e&&(e="class"),n.class?" "+e+'="'+n.class+'"':""},c=function(n,e){return void 0===e&&(e=!1),n.style?e?" style={{ "+Object.keys(n.style).map((function(e){return e+": "+s(n.style[e])})).join(", ")+" }}":' style="'+Object.keys(n.style).map((function(e){return e+": "+n.style[e]+";"})).join(" ")+'"':""},p=function(n){return""+Object.keys(n).map((function(e){return e+": "+s(n[e],"'")})).join(", ")},g=function(n,e){var t=void 0===e?{}:e,i=t.prefix,l=t.includeFlicking,r=void 0===l||l?[["Flicking","@egjs/"+(i?i+"-":"")+"flicking"]]:[];return n&&r.push.apply(r,n),""+r.map((function(n){return Array.isArray(n)?"import "+n[0]+' from "'+n[1]+'";':'import "'+n+'";'})).join("\n")},m=function(n){return n.map((function(n){return"new "+n[0]+"("+(n[1]?"{ "+p(n[1])+" }":"")})).join(", ")+")"},f=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,p=void 0===a?{}:a,m=n.plugins,f=void 0===m?[]:m,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=function(n){return""+Object.keys(n).map((function(e){return e+": "+s(n[e])})).join(",\n  ")},b=Object.keys(p).map((function(n){return"const "+n+" = "+p[n]+";\n"})).join(""),y=e?'const flicking = new Flicking("#flick", {\n  '+h(e)+"\n});\n\n":'const flicking = new Flicking("#flick")',w=f.length>0?"flicking.addPlugins("+f.map((function(n){return"new "+n[0]+"("+(n[1]?"{\n  "+h(n[1])+"\n}":"")+")"}))+");":"",E=[].concat(f.map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),F=Object.keys(r).map((function(n){return'flicking.on("'+n+'", '+r[n]+")\n"})).join(""),N=t.filter((function(n){return n.isSlot}));return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"html"},'<div id="flick" class="flicking-viewport'+(!1===e.horizontal?" vertical":"")+'">\n  <div class="flicking-camera">\n    '+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </div>"+(N.length?"\n  "+N.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  "):"")+"\n</div>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"js"},(g(E)+"\n\n"+b+y+w+F).trim()))},v=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,p=n.plugins,f=n.siblings,v=n.imports,d=void 0===v?[]:v,k=p?"\n  private _plugins = ["+m(p)+"];\n":"",j=t.filter((function(n){return n.isSlot})),h=[["{ Component }","react"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/react-flicking"]],b=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("");b&&(b+="\n"),p&&h.push(["{ "+p.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),h.push.apply(h,d);var y=j.length?"\n      <ViewportSlot>\n        "+j.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n        ")+"\n      </ViewportSlot>":"",w=Object.keys(r).map((function(n){return" on"+(n[0].toUpperCase()+n.slice(1))+"={"+r[n]+"}"})).join("");return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},g(h,{includeFlicking:!1})+"\n"+b+"\nexport default class DemoComponent extends Component {"+k+"\n  public render() {\n    return "+(f?"<>\n    ":"")+"<Flicking"+(e?" "+Object.keys(e).map((function(n){return n+"="+("string"==typeof e[n]?'"'+e[n]+'"':"{"+e[n]+"}")})).join(" "):"")+(p?" plugins={this._plugins}":"")+w+">\n      "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n      ")+y+"\n    </Flicking>"+(f?"\n    "+f.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n    ")+"\n    </>":"")+";\n  }\n}")},d=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=f?",\n  data() {\n    return {\n      plugins: ["+m(f)+"]\n    }\n  }":"",y=[].concat((null!=f?f:[]).map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),w=Object.keys(s),E=w.length>0?",\n  methods: {\n    "+w.map((function(n){return n+": "+s[n].split("\n").map((function(n,e){return e>0?"    "+n:n})).join("\n")})).join(",\n")+"\n  }":"",F=Object.keys(r).map((function(n){return" @"+n.replace(/([A-Z])/g,"-$1").toLowerCase()+'="'+r[n]+'"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"template"},"<Flicking"+(e?' :options="{ '+h+' }"':"")+(f?' :plugins="plugins"':"")+F+">\n  "+t.map((function(n){return"<"+n.tag+(n.isSlot?' slot="viewport"':"")+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+"\n</Flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"script"},g(y,{prefix:"vue"})+"\n\nexport default {\n  components: {\n    Flicking\n  }"+b+E+"\n}"))},k=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=f?"\n  public plugins: Plugin[] = ["+m(f)+"];\n":"",y=[["{ Component }","@angular/core"],[f?"Flicking, { Plugin }":"Flicking","@egjs/ngx-flicking"]];f&&y.push(["{ "+f.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]);var w=Object.keys(s),E=w.length>0?"\n"+w.map((function(n){return(n+" = "+s[n]).split("\n").map((function(n){return"  "+n})).join("\n")}))+"\n":"",F=j.filter((function(n){return!Array.isArray(n)})),N=F.length?",\n  styleUrls: [\n"+F.map((function(n){return'    "../node_modules/'+n+'"'}))+"\n  ]":"";y.push.apply(y,j.filter((function(n){return Array.isArray(n)})));var Z=Object.keys(r).map((function(n){return" ("+n+')="'+r[n]+'($event)"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"demo.component.html"},"<ngx-flicking"+(e?' [options]="{ '+h+' }"':"")+(f?' [plugins]="plugins"':"")+Z+">\n  "+t.map((function(n){return"<"+n.tag+" "+(n.isSlot?"in-viewport":"flicking-panel")+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+"\n</ngx-flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-ts",title:"demo.component.ts"},g(y,{includeFlicking:!1})+"\n\n@Component({\n  templateUrl: './demo.component.html'"+N+"\n})\nexport class DemoComponent {"+b+E+"}"))},j=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=void 0===v?[]:v,k=n.imports,j=void 0===k?[]:k,h=p(e),b=t.filter((function(n){return n.isSlot})),y=f?",\n  data() {\n    return {\n      plugins: ["+m(f)+"]\n    }\n  }":"",w=b.length?"\n  <template #viewport>\n    "+b.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </template>":"",E=[].concat((null!=f?f:[]).map((function(n){return["{ "+n[0]+" }","@egjs/flicking-plugins"]})),j),F=Object.keys(s),N=F.length>0?",\n  methods: {\n    "+F.map((function(n){return n+": "+s[n].split("\n").map((function(n,e){return e>0?"    "+n:n})).join("\n")})).join(",\n")+"\n  }":"",Z=Object.keys(r).map((function(n){return" @"+n.replace(/([A-Z])/g,"-$1").toLowerCase()+'="'+r[n]+'"'})).join("");return l.createElement(l.Fragment,null,l.createElement(o.Z,{className:"language-html",title:"template"},"<Flicking"+(e?' :options="{ '+h+' }"':"")+(f?' :plugins="plugins"':"")+Z+">\n  "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n  ")+w+"\n</Flicking>"+(d?"\n"+d.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):"")),l.createElement(o.Z,{className:"language-js",title:"script"},g(E,{prefix:"vue3"})+"\n\nexport default {\n  components: {\n    Flicking\n  }"+y+N+"\n}"))},h=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,p=n.plugins,f=n.siblings,v=n.imports,d=void 0===v?[]:v,k=p?"\n  private _plugins = ["+m(p)+"];\n":"",j=t.filter((function(n){return n.isSlot})),h=[["{ Component }","preact"],[j.length?"Flicking, { ViewportSlot }":"Flicking","@egjs/preact-flicking"]],b=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("");b&&(b+="\n"),p&&h.push(["{ "+p.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),h.push.apply(h,d);var y=j.length?"\n      <ViewportSlot>\n        "+j.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n        ")+"\n      </ViewportSlot>":"",w=Object.keys(r).map((function(n){return" on"+(n[0].toUpperCase()+n.slice(1))+"={"+r[n]+"}"})).join("");return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},g(h,{includeFlicking:!1})+"\n"+b+"\nexport default class DemoComponent extends Component {"+k+"\n  public render() {\n    return "+(f?"<>\n    ":"")+"<Flicking"+(e?" "+Object.keys(e).map((function(n){return n+"="+("string"==typeof e[n]?'"'+e[n]+'"':"{"+e[n]+"}")})).join(" "):"")+(p?" plugins={this._plugins}":"")+w+">\n      "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n      ")+y+"\n    </Flicking>"+(f?"\n    "+f.map((function(n){return"<"+n.tag+u(n,"className")+c(n,!0)+">"+n.content.replace(/class/g,"className")+"</"+n.tag+">"})).join("\n    ")+"\n    </>":"")+";\n  }\n}")},b=function(n){var e=n.options,t=n.panels,i=n.events,r=void 0===i?{}:i,a=n.methods,s=void 0===a?{}:a,f=n.plugins,v=n.siblings,d=n.imports,k=void 0===d?[]:d,j=p(e),h=f?"\n\nconst plugins = ["+m(f)+"];":"",b=t.filter((function(n){return n.isSlot})),y=Object.keys(s).map((function(n){return"\nconst "+n+" = "+s[n]+";"})).join("").replace(/(\s+)e\./g,"$1e.detail."),w=[["Flicking, { FlickingPanel }","@egjs/svelte-flicking"]];f&&w.push(["{ "+f.map((function(n){return n[0]}))+" }","@egjs/flicking-plugins"]),w.push.apply(w,k);var E=Object.keys(r).map((function(n){return" on:"+n+"={"+r[n]+"}"})).join(""),F=b.length?'\n  <svelte:fragment slot="viewport">\n    '+b.map((function(n){return"<"+n.tag+u(n)+c(n,!0)+">"+n.content+"</"+n.tag+">"})).join("\n    ")+"\n  </svelte:fragment>":"";return l.createElement(o.Z,{className:"language-jsx",title:"DemoComponent.jsx"},'<script lang="ts">\n'+g(w,{includeFlicking:!1})+h+y+"\n<\/script>\n\n<Flicking"+(e?" options={{ "+j+" }}":"")+(f?" plugins={plugins}":"")+E+">\n  "+t.filter((function(n){return!n.isSlot})).map((function(n){return"<FlickingPanel"+u(n)+c(n)+">"+n.content+"</FlickingPanel>"})).join("\n  ")+F+"\n</Flicking>"+(v?"\n"+v.map((function(n){return"<"+n.tag+u(n)+c(n)+">"+n.content+"</"+n.tag+">"})).join("\n"):""))},y=["js","react","vue","vue3","angular","preact","svelte"],w=function(n){var e=n.js,t=n.react,o=n.vue,s=n.vue3,u=n.angular,c=n.preact,p=n.svelte,g=(0,i.Z)(n,y);return l.createElement(r.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}]},l.createElement(a.Z,{value:"js"},e||l.createElement(f,g)),l.createElement(a.Z,{value:"react"},t||l.createElement(v,g)),l.createElement(a.Z,{value:"vue"},o||l.createElement(d,g)),l.createElement(a.Z,{value:"vue3"},s||l.createElement(j,g)),l.createElement(a.Z,{value:"angular"},u||l.createElement(k,g)),l.createElement(a.Z,{value:"preact"},c||l.createElement(h,g)),l.createElement(a.Z,{value:"svelte"},p||l.createElement(b,g)))}},92629:function(n,e,t){t.r(e),t.d(e,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return g}});var i=t(87462),l=t(63366),r=(t(67294),t(3905)),a=t(4220),o=["components"],s={title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},u=void 0,c={unversionedId:"tutorials/viewport-slot",id:"tutorials/viewport-slot",title:"Rendering elements inside the wrapper element",description:"You can place elements inside the .flicking-viewport element like the following:",source:"@site/docs/tutorials/viewport-slot.mdx",sourceDirName:"tutorials",slug:"/viewport-slot",permalink:"/egjs-flicking/docs/next/viewport-slot",editUrl:null,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Rendering elements inside the wrapper element",id:"viewport-slot",slug:"/viewport-slot",custom_edit_url:null,sidebar_position:8},sidebar:"docs",previous:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/docs/next/ssr"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/next/migration-from-v3"}},p={},g=[],m={toc:g};function f(n){var e=n.components,t=(0,l.Z)(n,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"You can place elements inside the ",(0,r.kt)("inlineCode",{parentName:"p"},".flicking-viewport")," element like the following:"),(0,r.kt)(a.Z,{options:{circular:!0},panels:[{tag:"div",class:"panel",content:"1"},{tag:"div",class:"panel",content:"2"},{tag:"div",class:"panel",content:"3"},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0},{tag:"span",class:"item-inside-viewport",content:"",isSlot:!0}],mdxType:"SourceCode"}))}f.isMDXComponent=!0}}]);