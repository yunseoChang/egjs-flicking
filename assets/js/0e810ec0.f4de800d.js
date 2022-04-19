"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6218],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60323:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={custom_edit_url:null},c=void 0,p={unversionedId:"api/MOVE_TYPE",id:"version-4.6.0/api/MOVE_TYPE",title:"MOVE_TYPE",description:"MOVETYPE",source:"@site/versioned_docs/version-4.6.0/api/MOVE_TYPE.mdx",sourceDirName:"api",slug:"/api/MOVE_TYPE",permalink:"/egjs-flicking/docs/api/MOVE_TYPE",editUrl:null,tags:[],version:"4.6.0",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"DIRECTION",permalink:"/egjs-flicking/docs/api/DIRECTION"},next:{title:"CIRCULAR_FALLBACK",permalink:"/egjs-flicking/docs/api/CIRCULAR_FALLBACK"}},u={},s=[{value:"MOVE_TYPE",id:"MOVE_TYPE",level:3}],m={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MOVE_TYPE\n")),(0,o.kt)("h3",{id:"MOVE_TYPE"},"MOVE_TYPE"),(0,o.kt)("div",{className:"bulma-tags"}),(0,o.kt)("p",null,"An object with all possible ",(0,o.kt)("a",{parentName:"p",href:"Flicking#moveType"},"moveType"),"s"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Type"),": object"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,o.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"SNAP"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"snap"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,o.kt)("a",{parentName:"td",href:"SnapControl"},"SnapControl")," as a Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"FREE_SCROLL"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"freeScroll"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,o.kt)("a",{parentName:"td",href:"FreeControl"},"FreeControl")," as a Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"STRICT"),(0,o.kt)("td",{parentName:"tr",align:"center"},'"strict"'),(0,o.kt)("td",{parentName:"tr",align:"center"},"Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#moveType"},"moveType")," that enables ",(0,o.kt)("a",{parentName:"td",href:"StrictControl"},"StrictControl")," as a Flicking's ",(0,o.kt)("a",{parentName:"td",href:"Flicking#control"},"control"))))))}f.isMDXComponent=!0}}]);