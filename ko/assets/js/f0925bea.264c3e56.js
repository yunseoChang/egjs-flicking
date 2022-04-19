"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[777],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(p,".").concat(d)]||m[d]||s[d]||i;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4046:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={custom_edit_url:null},p=void 0,c={unversionedId:"api/Status",id:"version-4.1.1/api/Status",title:"Status",description:"Status",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.1/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/ko/docs/4.1.1/api/Status",editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"FreeControlOptions",permalink:"/egjs-flicking/ko/docs/4.1.1/api/FreeControlOptions"},next:{title:"EVENT",permalink:"/egjs-flicking/ko/docs/4.1.1/api/EVENT"}},u={},s=[{value:"Status",id:"Status",level:3}],m={toc:s};function d(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),(0,i.kt)("h3",{id:"Status"},"Status"),(0,i.kt)("div",{className:"bulma-tags"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus"),"\uc5d0 \uc758\ud574 \ubc18\ud658\ub41c Flicking \uc0c1\ud0dc \uac1d\uccb4"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,i.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,i.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud65c\uc131\ud654\ub41c \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position"),(0,i.kt)("td",{parentName:"tr",align:"center"},"object"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c ",(0,i.kt)("a",{parentName:"td",href:"Camera#position"},"position"),"\uc744 \uc124\uc815\ud558\uae30 \uc704\ud55c \uc815\ubcf4\ub4e4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position.panel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c\uac00 \uc704\uce58\ud55c \ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \ub0b4\uc5d0\uc11c\uc758 \uce74\uba54\ub77c \uc704\uce58\uc758 \uc9c4\ud589\ub3c4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"visibleOffset"),(0,i.kt)("td",{parentName:"tr",align:"center"},"number"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud604\uc7ac \ubcf4\uc774\ub294 \ud328\ub110\ub4e4\uc744 \uc800\uc7a5\ud588\uc744 \ub54c, \uc6d0\ub798\uc758 \uc778\ub371\uc2a4 \ub300\ube44 offset. ",(0,i.kt)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," \uc635\uc158\uc744 \uc0ac\uc6a9\ud588\uc744 \ub54c\ub9cc \uc0ac\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \uc815\ubcf4\ub97c \ub2f4\uc740 \ubc30\uc5f4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels.index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"index"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \uc778\ub371\uc2a4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"panels.html"),(0,i.kt)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 ",(0,i.kt)("inlineCode",{parentName:"td"},"outerHTML"))))))}d.isMDXComponent=!0}}]);