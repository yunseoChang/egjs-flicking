"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7011],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=n.createContext({}),c=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(t),d=o,y=f["".concat(a,".").concat(d)]||f[d]||u[d]||i;return t?n.createElement(y,l(l({ref:r},p),{},{components:t})):n.createElement(y,l({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77760:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),l=["components"],s={title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},a=void 0,c={unversionedId:"polyfills",id:"version-4.5.1/polyfills",title:"Polyfills",description:"Flicking is based on es5 and additionally needs es6 Promise to work properly.",source:"@site/versioned_docs/version-4.5.1/polyfills.mdx",sourceDirName:".",slug:"/polyfills",permalink:"/egjs-flicking/docs/4.5.1/polyfills",editUrl:null,tags:[],version:"4.5.1",frontMatter:{title:"Polyfills",id:"polyfills",slug:"/polyfills",custom_edit_url:null},sidebar:"docs",previous:{title:"Handling errors",permalink:"/egjs-flicking/docs/4.5.1/error-handling"},next:{title:"Server Side Rendering (SSR)",permalink:"/egjs-flicking/docs/4.5.1/ssr"}},p={},u=[],f={toc:u};function d(e){var r=e.components,t=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flicking is based on es5 and additionally needs es6 Promise to work properly.",(0,i.kt)("br",{parentName:"p"}),"\n","es5 is basically supported on IE9+ (",(0,i.kt)("a",{parentName:"p",href:"http://kangax.github.io/compat-table/es5/"},"Source"),")",(0,i.kt)("br",{parentName:"p"}),"\n","So, only es6 Promise is needed to run Flicking on the older browsers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/es6-promise/dist/es6-promise.auto.js"><\/script>\n')),(0,i.kt)("p",null,"Adding the above script will make Flicking run on the older browsers."))}d.isMDXComponent=!0}}]);