(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{257:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(303)),i={custom_edit_url:null},b={unversionedId:"api/Status",id:"api/Status",isDocsHomePage:!1,title:"Status",description:"`ts",source:"@site/docs/api/Status.mdx",sourceDirName:"api",slug:"/api/Status",permalink:"/egjs-flicking/docs/next/api/Status",editUrl:null,version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"Plugin",permalink:"/egjs-flicking/docs/next/api/Plugin"},next:{title:"ControlParams",permalink:"/egjs-flicking/docs/next/api/ControlParams"}},o=[{value:"Status",id:"Status",children:[]}],l={toc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"interface Status\n")),Object(c.b)("h3",{id:"Status"},"Status"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"Flicking Status returned by ",Object(c.b)("a",{parentName:"p",href:"Flicking#getStatus"},"Flicking#getStatus")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"index"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"An index of the active panel")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"position"),Object(c.b)("td",{parentName:"tr",align:"center"},"object"),Object(c.b)("td",{parentName:"tr",align:"center"},"A info to restore camera ",Object(c.b)("a",{parentName:"td",href:"Camera#position"},"position"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"position.panel"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"An index of the panel camera is located at")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"position.progressInPanel"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"A progress of the camera position inside the panel")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"visibleOffset"),Object(c.b)("td",{parentName:"tr",align:"center"},"number"),Object(c.b)("td",{parentName:"tr",align:"center"},"An offset to visible panel's original index. This value is available only when ",Object(c.b)("inlineCode",{parentName:"td"},"visiblePanelsOnly")," is ",Object(c.b)("inlineCode",{parentName:"td"},"true"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"panels"),Object(c.b)("td",{parentName:"tr",align:"center"},"Array","<","object",">"),Object(c.b)("td",{parentName:"tr",align:"center"},"A data array of panels")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"panels.index"),Object(c.b)("td",{parentName:"tr",align:"center"},"index"),Object(c.b)("td",{parentName:"tr",align:"center"},"An index of the panel")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"panels.html"),Object(c.b)("td",{parentName:"tr",align:"center"},"string ","|"," undefined"),Object(c.b)("td",{parentName:"tr",align:"center"},"An ",Object(c.b)("inlineCode",{parentName:"td"},"outerHTML")," of the panel element")))))}p.isMDXComponent=!0},303:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||c;return n?a.a.createElement(m,b(b({ref:t},l),{},{components:n})):a.a.createElement(m,b({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);