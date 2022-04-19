"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8260],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return g}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),k=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=k(t.components);return n.createElement(p.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=k(a),g=r,c=d["".concat(p,".").concat(g)]||d[g]||o[g]||l;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var k=2;k<l;k++)i[k]=a[k];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60408:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return o}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={custom_edit_url:null},p=void 0,k={unversionedId:"api/ExternalPanel",id:"version-4.1.1/api/ExternalPanel",title:"ExternalPanel",description:"\uc2ac\ub77c\uc774\ub4dc \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub85c, \ub2e8\uc77c HTMLElement\uc758 \uc815\ubcf4\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.1.1/api/ExternalPanel.mdx",sourceDirName:"api",slug:"/api/ExternalPanel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/ExternalPanel",editUrl:null,tags:[],version:"4.1.1",frontMatter:{custom_edit_url:null},sidebar:"version-4.1.1/api",previous:{title:"ElementPanel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/ElementPanel"},next:{title:"Panel",permalink:"/egjs-flicking/ko/docs/4.1.1/api/Panel"}},m={},o=[{value:"Constructor",id:"constructor",level:2},{value:"Properties",id:"properties",level:2},{value:"index",id:"index",level:3},{value:"position",id:"position",level:3},{value:"size",id:"size",level:3},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",level:3},{value:"height",id:"height",level:3},{value:"margin",id:"margin",level:3},{value:"alignPosition",id:"alignPosition",level:3},{value:"removed",id:"removed",level:3},{value:"range",id:"range",level:3},{value:"toggled",id:"toggled",level:3},{value:"toggleDirection",id:"toggleDirection",level:3},{value:"offset",id:"offset",level:3},{value:"progress",id:"progress",level:3},{value:"outsetProgress",id:"outsetProgress",level:3},{value:"visibleRatio",id:"visibleRatio",level:3},{value:"align",id:"align",level:3},{value:"Methods",id:"methods",level:2},{value:"resize",id:"resize",level:3},{value:"contains",id:"contains",level:3},{value:"destroy",id:"destroy",level:3},{value:"includePosition",id:"includePosition",level:3},{value:"includeRange",id:"includeRange",level:3},{value:"focus",id:"focus",level:3},{value:"prev",id:"prev",level:3},{value:"next",id:"next",level:3},{value:"increaseIndex",id:"increaseIndex",level:3},{value:"decreaseIndex",id:"decreaseIndex",level:3},{value:"increasePosition",id:"increasePosition",level:3},{value:"decreasePosition",id:"decreasePosition",level:3},{value:"toggle",id:"toggle",level:3},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",level:3}],d={toc:o};function g(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"class ExternalPanel extends Panel\n")),(0,l.kt)("p",null,"\uc2ac\ub77c\uc774\ub4dc \ub370\uc774\ud130 \ucef4\ud3ec\ub10c\ud2b8\ub85c, \ub2e8\uc77c HTMLElement\uc758 \uc815\ubcf4\ub97c \uac16\uace0 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("div",{className:"container"},(0,l.kt)("div",{className:"row mb-2"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Properties")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("strong",null,"Methods"))),(0,l.kt)("div",{className:"row"},(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#index"},"index"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#position"},"position"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#size"},"size"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#height"},"height"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#margin"},"margin"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#alignPosition"},"alignPosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#removed"},"removed"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#range"},"range"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#toggled"},"toggled"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#toggleDirection"},"toggleDirection"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#offset"},"offset"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#progress"},"progress"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#outsetProgress"},"outsetProgress"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#visibleRatio"},"visibleRatio"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#align"},"align")),(0,l.kt)("div",{className:"col col--6"},(0,l.kt)("a",{href:"#resize"},"resize"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#contains"},"contains"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#destroy"},"destroy"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#includePosition"},"includePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#includeRange"},"includeRange"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#focus"},"focus"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#prev"},"prev"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#next"},"next"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#increaseIndex"},"increaseIndex"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#decreaseIndex"},"decreaseIndex"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#increasePosition"},"increasePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#decreasePosition"},"decreasePosition"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#toggle"},"toggle"),(0,l.kt)("br",null),(0,l.kt)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),(0,l.kt)("h2",{id:"constructor"},"Constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"new ExternalPanel(options, options.el, options.index, options.align, options.flicking)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options"),(0,l.kt)("td",{parentName:"tr",align:"center"},"object"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc635\uc158 \uc624\ube0c\uc81d\ud2b8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.el"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc774 \ucc38\uc870\ud558\ub294 ",(0,l.kt)("inlineCode",{parentName:"td"},"HTMLElement"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.index"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 \uc778\ub371\uc2a4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.align"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc758 \ucd08\uae30 ",(0,l.kt)("a",{parentName:"td",href:"Flicking#align"},"align"),"\uac12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"options.flicking"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110\uc774 \ucc38\uc870\ud558\ub294 ",(0,l.kt)("a",{parentName:"td",href:"Flicking"},"Flicking")," \uc778\uc2a4\ud134\uc2a4")))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"index"},"index"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"position"},"position"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \ud604\uc7ac \uc88c\ud45c, ",(0,l.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc744 \ud3ec\ud568\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"size"},"size"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \uce90\uc2dc\ub41c \ud06c\uae30",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774 \uac12\uc740 ",(0,l.kt)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("a",{parentName:"p",href:"Panel#element"},"element"),"\uc758 ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetWidth"),"\uc640 \ub3d9\uc77c\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"offsetHeight"),"\uc640 \ub3d9\uc77c\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"CSS ",(0,l.kt)("inlineCode",{parentName:"p"},"margin"),"\uc744 \ud3ec\ud568\ud55c \ud328\ub110\uc758 \ud06c\uae30",(0,l.kt)("br",{parentName:"p"}),"\n","\uc774 \uac12\uc740 ",(0,l.kt)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\uc77c \uacbd\uc6b0 margin left/right\uc744 \ud3ec\ud568\ud558\uace0, ",(0,l.kt)("inlineCode",{parentName:"p"},"false"),"\uc77c \uacbd\uc6b0 margin top/bottom\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"height"},"height"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 \ub192\uc774"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"margin"},"margin"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 CSS ",(0,l.kt)("inlineCode",{parentName:"p"},"margin")," \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prev"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"margin-left"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"margin-top"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"next"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),"\uc774 ",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"margin-right"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"false"),"\uc77c \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"td"},"margin-bottom"),"\uc5d0 \ud574\ub2f9\ud558\ub294 \uac12")))),(0,l.kt)("h3",{id:"alignPosition"},"alignPosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc815\ub82c \uae30\uc900 \uc704\uce58. ",(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\uc758 \ubdf0\ud3ec\ud2b8 \ub0b4\uc5d0\uc11c\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition"),"\uc774 \uc704\uce58\ud574\uc57c \ud558\ub294 \uacf3\uc785\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"removed"},"removed"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc774 ",(0,l.kt)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"range"},"range"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110 \uc5d8\ub9ac\uba3c\ud2b8\uc758 Bounding box \ubc94\uc704"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PROPERTY"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Bounding box's left(",(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Bounding box's right(",(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",(0,l.kt)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),(0,l.kt)("h3",{id:"toggled"},"toggled"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\uc5c8\ub294\uc9c0 \uc5ec\ubd80\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": boolean"),(0,l.kt)("h3",{id:"toggleDirection"},"toggleDirection"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc704\uce58\uac00 circular \ub3d9\uc791\uc5d0 \uc758\ud574 \ud1a0\uae00\ub418\ub294 \ubc29\ud5a5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": ",(0,l.kt)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),(0,l.kt)("h3",{id:"offset"},"offset"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Panel#order"},"Panel#order"),"\uc5d0 \uc758\ud55c \uc2e4\uc81c \uc704\uce58 \ubcc0\uacbd\uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"progress"},"progress"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc774 \ud328\ub110\ub85c\ubd80\ud130 \uc774\uc804/\ub2e4\uc74c \ud328\ub110\uc73c\ub85c\uc758 \uc774\ub3d9 \uc9c4\ud589\ub960"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"outsetProgress"},"outsetProgress"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud604\uc7ac \ud328\ub110\uc774 \ubdf0\ud3ec\ud2b8 \uc601\uc5ed \ubc16\uc73c\ub85c \uc644\uc804\ud788 \uc0ac\ub77c\uc9c0\ub294 \uc9c0\uc810\uc744 \uae30\uc900\uc73c\ub85c \ud558\ub294 \uc9c4\ud589\ub3c4(prev\ubc29\ud5a5: -1, \uc120\ud0dd \uc9c0\uc810: 0, next\ubc29\ud5a5: 1)"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"visibleRatio"},"visibleRatio"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-warning"},"readonly"),(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ubdf0\ud3ec\ud2b8 \uc548\uc5d0\uc11c \ud328\ub110\uc774 \ubcf4\uc774\ub294 \uc601\uc5ed\uc758 \ube44\uc728"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": number"),(0,l.kt)("h3",{id:"align"},"align"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition"),"\uc774 \ud328\ub110 \ub0b4\uc758 \uc5b4\ub514\uc5d0 \uc704\uce58\ud574\uc57c \ud558\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"resize"},"resize"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \ud06c\uae30\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("h3",{id:"contains"},"contains"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8\uac00 \uc774 \ud328\ub110\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Panel#element"},"element")," \ub0b4\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud328\ub110\uc758 ",(0,l.kt)("a",{parentName:"li",href:"Panel#element"},"element"),"\ub0b4\uc5d0 \ud574\ub2f9 \uc5d8\ub9ac\uba3c\ud2b8 \ud3ec\ud568 \uc5ec\ubd80")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"element"),(0,l.kt)("td",{parentName:"tr",align:"center"},"HTMLElement"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 HTMLElement")))),(0,l.kt)("h3",{id:"destroy"},"destroy"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ub0b4\ubd80 \uc0c1\ud0dc\ub97c \ucd08\uae30\ud654\ud558\uace0 ",(0,l.kt)("a",{parentName:"p",href:"Panel#removed"},"removed"),"\ub97c ",(0,l.kt)("inlineCode",{parentName:"p"},"true"),"\ub85c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": void"),(0,l.kt)("h3",{id:"includePosition"},"includePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \uc88c\ud45c\uac00 \ud604\uc7ac \ud328\ub110\uc758 ",(0,l.kt)("a",{parentName:"p",href:"Panel#range"},"range"),"\ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"pos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \uc88c\ud45c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",(0,l.kt)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"includeRange"},"includeRange"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc8fc\uc5b4\uc9c4 \ubc94\uc704\uac00 \uc774 \ud328\ub110 \ub0b4\ubd80\uc5d0 \uc644\uc804\ud788 \ud3ec\ud568\ub418\ub294\uc9c0\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ubc94\uc704\uac00 \ud328\ub110 \uc601\uc5ed \ub0b4\uc5d0 \uc644\uc804\ud788 \uc18d\ud574\uc788\ub294\uc9c0 \uc5ec\ubd80")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"min"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\uc18c \ubc94\uc704")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"max"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud655\uc778\ud558\uace0\uc790 \ud558\ub294 \ucd5c\ub300 \ubc94\uc704")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"includeMargin"),(0,l.kt)("td",{parentName:"tr",align:"center"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"},"false"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\ud328\ub110 \uc601\uc5ed\uc5d0 ",(0,l.kt)("a",{parentName:"td",href:"Panel#margin"},"margin"),"\uac12\uc744 \ud3ec\ud568\uc2dc\ud0b5\ub2c8\ub2e4")))),(0,l.kt)("h3",{id:"focus"},"focus"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"Camera"},"Camera"),"\ub97c \uc774 \ud328\ub110\ub85c \uc774\ub3d9\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud328\ub110 \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"duration"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")))),(0,l.kt)("h3",{id:"prev"},"prev"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\uc774\uc804(",(0,l.kt)("inlineCode",{parentName:"p"},"index - 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \uc774\uc804 \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \uccab\ubc88\uc9f8 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uc804 \ud328\ub110")),(0,l.kt)("h3",{id:"next"},"next"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ub2e4\uc74c(",(0,l.kt)("inlineCode",{parentName:"p"},"index + 1"),") \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. \ub2e4\uc74c \ud328\ub110\uc774 \uc5c6\uc744 \uacbd\uc6b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4",(0,l.kt)("br",{parentName:"p"}),"\n",(0,l.kt)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," \ubaa8\ub4dc\uac00 \ud65c\uc131\ud654\ub418\uc5c8\uc744 \ub54c \ub9c8\uc9c0\ub9c9 \ud328\ub110\uc5d0\uc11c \uc774 \uba54\uc18c\ub4dc\ub97c \ud638\ucd9c\ud560 \uacbd\uc6b0 \uccab\ubc88\uc9f8 \ud328\ub110\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": ",(0,l.kt)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc74c \ud328\ub110")),(0,l.kt)("h3",{id:"increaseIndex"},"increaseIndex"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"val"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"decreaseIndex"},"decreaseIndex"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc778\ub371\uc2a4\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"val"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"increasePosition"},"increasePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758 \uc704\uce58\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"val"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"decreasePosition"},"decreasePosition"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,"\ud328\ub110\uc758\uc704\uce58\ub97c \uc8fc\uc5b4\uc9c4 \uac12\ub9cc\ud07c \uac10\uc18c\uc2dc\ud0b5\ub2c8\ub2e4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"val"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"0\ubcf4\ub2e4 \uac19\uac70\ub098 \ud070 \uc815\uc218")))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"toggle"},"toggle"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": boolean"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"toggled")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:"center"},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:"center"},"OPTIONAL"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DEFAULT"),(0,l.kt)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"prevPos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"newPos"),(0,l.kt)("td",{parentName:"tr",align:"center"},"number"),(0,l.kt)("td",{parentName:"tr",align:"center"},"no"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."),(0,l.kt)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),(0,l.kt)("div",{className:"bulma-tags"},(0,l.kt)("span",{className:"bulma-tag is-danger"},"inherited")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Returns"),": this"),(0,l.kt)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",(0,l.kt)("strong",null,"internal")," use only."))}g.isMDXComponent=!0}}]);