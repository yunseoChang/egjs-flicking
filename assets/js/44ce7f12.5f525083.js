"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6894],{58215:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(67294);function l(e){var n=e.children,t=e.hidden,l=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:l},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var i=t(87462),l=t(67294),r=t(72389),a=t(63725),o=t(86010),s="tabItem_LplD";function u(e){var n,t,r,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=p?p:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,a.lx)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=v[0])?void 0:r.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=(0,a.UB)(),y=b.tabGroupChoices,S=b.setTabGroupChoices,N=(0,l.useState)(g),T=N[0],w=N[1],x=[],I=(0,a.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var Z=y[m];null!=Z&&Z!==T&&k.some((function(e){return e.value===Z}))&&w(Z)}var z=function(e){var n=e.currentTarget,t=x.indexOf(n),i=k[t].value;i!==T&&(I(n),w(i),null!=m&&S(m,i))},E=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=x.indexOf(e.currentTarget)+1;t=x[i]||x[0];break;case"ArrowLeft":var l=x.indexOf(e.currentTarget)-1;t=x[l]||x[x.length-1]}null==(n=t)||n.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},f)},k.map((function(e){var n=e.value,t=e.label,r=e.attributes;return l.createElement("li",(0,i.Z)({role:"tab",tabIndex:T===n?0:-1,"aria-selected":T===n,key:n,ref:function(e){return x.push(e)},onKeyDown:E,onFocus:z,onClick:z},r,{className:(0,o.Z)("tabs__item",s,null==r?void 0:r.className,{"tabs__item--active":T===n})}),null!=t?t:n)}))),u?(0,l.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==T})}))))}function c(e){var n=(0,r.Z)();return l.createElement(u,(0,i.Z)({key:String(n)},e))}},61439:function(e,n,t){t.r(n),t.d(n,{assets:function(){return f},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var i=t(87462),l=t(63366),r=(t(67294),t(3905)),a=t(9877),o=t(58215),s=t(31736),u=t(44996),c=["components"],d={title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},p=void 0,m={unversionedId:"ssr",id:"version-4.4.2/ssr",title:"Server Side Rendering (SSR)",description:'As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you\'re using the "prev" align or using the bound option.',source:"@site/versioned_docs/version-4.4.2/ssr.mdx",sourceDirName:".",slug:"/ssr",permalink:"/egjs-flicking/docs/4.4.2/ssr",editUrl:null,tags:[],version:"4.4.2",frontMatter:{title:"Server Side Rendering (SSR)",id:"ssr",slug:"/ssr",custom_edit_url:null},sidebar:"version-4.4.2/docs",previous:{title:"Polyfills",permalink:"/egjs-flicking/docs/4.4.2/polyfills"},next:{title:"Migration Guide from v3 to v4",permalink:"/egjs-flicking/docs/4.4.2/migration-from-v3"}},f={},v=[{value:"firstPanelSize",id:"firstpanelsize",level:3},{value:"hideBeforeInit",id:"hidebeforeinit",level:3},{value:"How to use",id:"how-to-use",level:3}],k={toc:v};function h(e){var n=e.components,t=(0,l.Z)(e,c);return(0,r.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As Flicking does not know the size of the panel element until it is rendered, it is hard to place the panels at the correct positions on Server-Side Rendering (SSR) unless you're using the ",(0,r.kt)("inlineCode",{parentName:"p"},'"prev"')," align or using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bound")," option."),(0,r.kt)("p",null,"To solve this problem, Flicking offers 2 options for the frameworks, ",(0,r.kt)("inlineCode",{parentName:"p"},"firstPanelSize")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit"),"."),(0,r.kt)("h3",{id:"firstpanelsize"},"firstPanelSize"),(0,r.kt)("p",null,"If you know the exact size of the first panel element, like ",(0,r.kt)("inlineCode",{parentName:"p"},'"200px"')," or ",(0,r.kt)("inlineCode",{parentName:"p"},'"50%"'),", you can use that value to correctly place the panel elements before Flicking's mounted."),(0,r.kt)("img",{src:(0,u.Z)("/img/firstPanelSize.png")}),(0,r.kt)("p",null,"But if the panel's size is responsive for the screen size or you're using a ",(0,r.kt)("inlineCode",{parentName:"p"},"circular")," option, this won't work well as Flicking doesn't know about other panel sizes.",(0,r.kt)("br",{parentName:"p"}),"\n","In that case, please use ",(0,r.kt)("inlineCode",{parentName:"p"},"hideBeforeInit")," instead."),(0,r.kt)("img",{src:(0,u.Z)("/img/firstPanelSize-circular.gif")}),(0,r.kt)("h3",{id:"hidebeforeinit"},"hideBeforeInit"),(0,r.kt)("p",null,"Enabling this option will hide panel elements until it's mounted.",(0,r.kt)("br",{parentName:"p"}),"\n","This will show empty screen before it's mounted, so use this option only when you're okay with that."),(0,r.kt)("img",{src:(0,u.Z)("/img/hideBeforeInit.gif")}),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)(a.Z,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"js",mdxType:"TabItem"},"In native JS, you can attach class `flicking-hidden` to the viewport element and remove that on `ready` event to mimic the behavior of `hideBeforeInit`.",(0,r.kt)(s.Z,{className:"html",title:"html",mdxType:"CodeBlock"},'<div id="flicking" class="flicking-viewport flicking-hidden">\n  <div class="flicking-camera">\n    ...\n  </div>\n</div>'),(0,r.kt)(s.Z,{className:"js",title:"js",mdxType:"CodeBlock"},'import Flicking, { EVENTS } from "@egjs/flicking";\n\nconst flicking = new Flicking("#flicking");\nflicking.once(EVENTS.READY, () => {\n  flicking.element.classList.remove("flicking-hidden");\n}')),(0,r.kt)(o.Z,{value:"react",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"vue",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"vue3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<Flicking :hideBeforeInit="true" :firstPanelSize="\'200px\'">\n   {{ ... }}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"angular",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking [hideBeforeInit]="true" [firstPanelSize]="\'200px\'">\n  {{ ... }}\n</ngx-flicking>\n'))),(0,r.kt)(o.Z,{value:"preact",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n'))),(0,r.kt)(o.Z,{value:"svelte",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Flicking hideBeforeInit={true} firstPanelSize="200px">\n  {...}\n</Flicking>\n')))))}h.isMDXComponent=!0}}]);