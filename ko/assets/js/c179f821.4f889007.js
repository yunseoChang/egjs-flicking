(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(8),r=(t(0),t(304)),l=t(311),c=t(312),o={title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},s={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick Start",description:"<Tabs",source:"@site/docs/quick-start.mdx",sourceDirName:".",slug:"/quick-start",permalink:"/egjs-flicking/ko/docs/next/quick-start",editUrl:null,version:"current",frontMatter:{title:"Quick Start",id:"quick-start",slug:"/quick-start",custom_edit_url:null},sidebar:"docs",previous:{title:"Installation",permalink:"/egjs-flicking/ko/docs/next/"},next:{title:"Using the Methods",permalink:"/egjs-flicking/ko/docs/next/using-the-methods"}},p=[],d={toc:p};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)(l.a,{groupId:"cfc",defaultValue:"js",values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue@2",value:"vue"},{label:"Vue@3",value:"vue3"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"},{label:"Svelte",value:"svelte"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"js",mdxType:"TabItem"},Object(r.b)("p",null,"Add the script/CSS to the page."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"><\/script>\n<link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />\n')),Object(r.b)("p",null,"Or, you can rather import them if you're using a bundler like ",Object(r.b)("a",{parentName:"p",href:"https://webpack.js.org/"},"webpack")," or ",Object(r.b)("a",{parentName:"p",href:"https://rollupjs.org/guide/en/"},"rollup"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'import Flicking from "@egjs/flicking";\nimport "@egjs/flicking/dist/flicking.css";\n')),Object(r.b)("p",null,"Then, add some basic HTML layout of Flicking to your page."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Viewport element --\x3e\n<div id="carousel" class="flicking-viewport">\n  \x3c!-- Camera element --\x3e\n  <div class="flicking-camera">\n    \x3c!-- Panels, class names are your choice --\x3e\n    <div class="panel"></div>\n    <div class="panel"></div>\n    <div class="panel"></div>\n  </div>\n</div>\n')),Object(r.b)("p",null,"You should add the ",Object(r.b)("inlineCode",{parentName:"p"},"vertical")," class to viewport element, if you're making a vertical carousel."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<div class="flicking-viewport vertical">\n')),Object(r.b)("p",null,"Then initialize Flicking instance with JavaScript after."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},'const flicking = new Flicking("#carousel", {\n  align: "center",\n  circular: true,\n  bound: true,\n  renderOnlyVisible: true\n});\n'))),Object(r.b)(c.a,{value:"react",mdxType:"TabItem"},Object(r.b)("p",null,"You can import & use Flicking as a React Component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/react-flicking";\nimport "@egjs/react-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/react-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div class="panel">1</div>\n    <div class="panel">2</div>\n    <div class="panel">3</div>\n  </Flicking>\n)\n')),Object(r.b)("h3",null,"Using the components as a panel"),Object(r.b)("p",null,"If you're using the React Component as a panel, it should use a ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can't use a React component that renders multiple elements"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n")))),Object(r.b)("h3",null,"Bypassing ref forwarding"),Object(r.b)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",Object(r.b)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",Object(r.b)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),Object(r.b)("p",null,"Or, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Flicking will use ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",Object(r.b)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",Object(r.b)("br",{parentName:"p"}),"\n","So, if you're using the ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",Object(r.b)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),Object(r.b)("blockquote",{parentName:"div"},Object(r.b)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes."))))),Object(r.b)(c.a,{value:"vue",mdxType:"TabItem"},Object(r.b)("p",null,"You can register Flicking either locally..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import { Flicking } from "@egjs/vue-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),Object(r.b)("p",null,"or globally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import Flicking from "@egjs/vue-flicking";\nimport "@egjs/vue-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue-flicking/dist/flicking-inline.css";\n\nVue.use(Flicking);\n')),Object(r.b)("p",null,"Then use Flicking like the other Vue components."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n'))),Object(r.b)(c.a,{value:"vue3",mdxType:"TabItem"},Object(r.b)("p",null,"You can register Flicking either locally..."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="SomeComponent.vue - <script>"',title:'"SomeComponent.vue',"-":!0,'<script>"':!0},'import Flicking from "@egjs/vue3-flicking";\n\nexport default {\n  components: {\n    Flicking: Flicking\n  }\n}\n')),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-css",metastring:'title="SomeComponent.vue - <style>"',title:'"SomeComponent.vue',"-":!0,'<style>"':!0},'@import url("node_modules/@egjs/vue-flicking/dist/flicking.css");\n// Or, if you have to support IE9\n@import url("node_modules/@egjs/vue-flicking/dist/flicking-inline.css");\n')),Object(r.b)("p",null,"or globally."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js",metastring:'title="main.js"',title:'"main.js"'},'import { createApp } from "vue"\nimport App from "./App.vue"\nimport Flicking from "../dist/flicking.esm";\nimport "@egjs/vue3-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/vue3-flicking/dist/flicking-inline.css";\n\nconst app = createApp(App);\n\napp.component("Flicking", Flicking);\napp.mount("#app");\n')),Object(r.b)("p",null,"Then use Flicking like the other Vue components."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<Flicking :options="{ align: \'prev\', circular: true }" @move-end="onMoveEnd">\n  <div class="panel">1</div>\n  <div class="panel">2</div>\n  <div class="panel">3</div>\n</Flicking>\n')),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can't use a Vue component that uses fragments(a.k.a. multi-root node components) as a panel"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n")),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-html",metastring:'title="Panels.vue"',title:'"Panels.vue"'},'<template>\n  <div :key="0">0</div>\n  <div :key="1">1</div>\n  <div :key="2">2</div>\n</template>\n'))))),Object(r.b)(c.a,{value:"angular",mdxType:"TabItem"},Object(r.b)("p",null,"You can add ",Object(r.b)("inlineCode",{parentName:"p"},"NgxFlickingModule")," at ",Object(r.b)("inlineCode",{parentName:"p"},"imports")," of your app module to use Flicking."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { NgxFlickingModule } from '@egjs/ngx-flicking';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    NgxFlickingModule /* Add in imports */\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { } /* Your app */\n")),Object(r.b)("p",null,"Now you can use the component ",Object(r.b)("inlineCode",{parentName:"p"},"ngx-flicking")," and the directive ",Object(r.b)("inlineCode",{parentName:"p"},"flicking-panel")," in your templates.",Object(r.b)("br",{parentName:"p"}),"\n","You should add directive ",Object(r.b)("inlineCode",{parentName:"p"},"flicking-panel")," to the panel elements you use"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ circular: true, gap: 10, duration: 500 }"\n  [plugins]="plugins"\n  (needPanel)="onNeedPanel($event)"\n  (moveEnd)="onMoveEnd($event)"\n>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg01.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg02.jpg" />\n  </div>\n  <div flicking-panel class="panel">\n    <img src="https://naver.github.io/egjs-flicking/images/bg03.jpg" />\n  </div>\n</ngx-flicking>\n'))),Object(r.b)(c.a,{value:"preact",mdxType:"TabItem"},Object(r.b)("p",null,"You can import & use Flicking as a Preact Component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="SomeComponent.jsx"',title:'"SomeComponent.jsx"'},'import Flicking from "@egjs/preact-flicking";\nimport "@egjs/preact-flicking/dist/flicking.css";\n// Or, if you have to support IE9\nimport "@egjs/preact-flicking/dist/flicking-inline.css";\n\nexport default () => (\n  <Flicking\n    align="prev"\n    circular={true}\n    onMoveEnd={e => {\n      console.log(e);\n    }}>\n    <div class="panel">1</div>\n    <div class="panel">2</div>\n    <div class="panel">3</div>\n  </Flicking>\n)\n')),Object(r.b)("h3",null,"Using the components as a panel"),Object(r.b)("p",null,"If you're using the React Component as a panel, it should use a ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/forwarding-refs.html"},"ref forwarding")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Panel.jsx"',title:'"Panel.jsx"'},"// If you're using a functional component\nexport default React.forwardRef(({ index }, ref) => (<div ref={ref}>{ index + 1 }</div>));\n\n// Or... if you're using a class-based React component\nclass Panel extends React.Component {\n  public render() {\n    return <div ref={this.props.elRef}>{ index + 1 }</div>;\n  }\n}\n\nexport default React.forwardRef((props, ref) => <Panel elRef={ref} {...props} />);\n")),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You can't use a React component that renders multiple elements"),Object(r.b)("pre",{parentName:"div"},Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <Panels /> // This won't work\n</Flicking>\n\nconst Panels = () => <>\n  <div key={0}>0</div>\n  <div key={1}>1</div>\n  <div key={2}>2</div>\n</>;\n")))),Object(r.b)("h3",null,"Bypassing ref forwarding"),Object(r.b)("p",null,"If you don't like this behavior, there's a few ways to avoid it.",Object(r.b)("br",{parentName:"p"}),"\n","The easiest way is wrapping each ",Object(r.b)("inlineCode",{parentName:"p"},"Panel")," component with another element tag."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking>\n  <div><Panel index={1} /></div>\n  <div><Panel index={2} /></div>\n  <div><Panel index={3} /></div>\n</Flicking>\n")),Object(r.b)("p",null,"Or, you can use the ",Object(r.b)("inlineCode",{parentName:"p"},"useFindDOMNode")," option of Flicking."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx"},"<Flicking useFindDOMNode={true}>\n  <Panel index={1} />\n  <Panel index={2} />\n  <Panel index={3} />\n</Flicking>\n")),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Flicking will use ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/react-dom.html#finddomnode"},"findDOMNode")," instead of using refs when the ",Object(r.b)("inlineCode",{parentName:"p"},"useFindDOMNode")," option is enabled.",Object(r.b)("br",{parentName:"p"}),"\n","So, if you're using the ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"Strict Mode"),", Flicking can show ",Object(r.b)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html#warning-about-deprecated-finddomnode-usage"},"warning about deprecated findDOMNode usage")," at the developer console.",Object(r.b)("br",{parentName:"p"}),"\n","And also, be aware that the component should always return a single DOM that never changes."),Object(r.b)("blockquote",{parentName:"div"},Object(r.b)("p",{parentName:"blockquote"},"Therefore findDOMNode only worked if components always return a single DOM node that never changes."))))),Object(r.b)(c.a,{value:"svelte",mdxType:"TabItem"},Object(r.b)("p",null,"You can import ",Object(r.b)("inlineCode",{parentName:"p"},"Flicking")," and ",Object(r.b)("inlineCode",{parentName:"p"},"FlickingPanel"),' from the "@egjs/svelte-flicking" package.'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-jsx",metastring:'title="App.svelte"',title:'"App.svelte"'},'<script lang="ts">\n  import Flicking, { FlickingPanel } from "@egjs/svelte-flicking";\n  import "@egjs/svelte-flicking/dist/flicking.css";\n  // Or, if you have to support IE9\n  import "@egjs/svelte-flicking/dist/flicking-inline.css";\n<\/script>\n\n<Flicking options={{ align: "center", circular: true }}>\n  \x3c!-- Those will render "div" element --\x3e\n  <FlickingPanel>0</FlickingPanel>\n  <FlickingPanel>1</FlickingPanel>\n  <FlickingPanel>2</FlickingPanel>\n</Flicking>\n')))))}u.isMDXComponent=!0},304:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?i.a.createElement(b,c(c({ref:n},s),{},{components:t})):i.a.createElement(b,c({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<r;s++)l[s]=t[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},305:function(e,n,t){"use strict";function a(e){var n,t,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(i&&(i+=" "),i+=t);else for(n in e)e[n]&&(i&&(i+=" "),i+=n);return i}n.a=function(){for(var e,n,t=0,i="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(i&&(i+=" "),i+=n);return i}},309:function(e,n,t){"use strict";var a=t(0),i=t(310);n.a=function(){var e=Object(a.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},310:function(e,n,t){"use strict";var a=t(0),i=Object(a.createContext)(void 0);n.a=i},311:function(e,n,t){"use strict";var a=t(0),i=t.n(a),r=t(309),l=t(305),c=t(60),o=t.n(c);var s=37,p=39;n.a=function(e){var n=e.lazy,t=e.block,c=e.defaultValue,d=e.values,u=e.groupId,m=e.className,b=Object(r.a)(),g=b.tabGroupChoices,v=b.setTabGroupChoices,j=Object(a.useState)(c),f=j[0],O=j[1],h=a.Children.toArray(e.children),k=[];if(null!=u){var N=g[u];null!=N&&N!==f&&d.some((function(e){return e.value===N}))&&O(N)}var w=function(e){var n=e.currentTarget,t=k.indexOf(n),a=d[t].value;O(a),null!=u&&(v(u,a),setTimeout((function(){var e,t,a,i,r,l,c,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,i=e.bottom,r=e.right,l=window,c=l.innerHeight,s=l.innerWidth,t>=0&&r<=s&&i<=c&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(o.a.tabItemActive),setTimeout((function(){return n.classList.remove(o.a.tabItemActive)}),2e3))}),150))},y=function(e){var n,t;switch(e.keyCode){case p:var a=k.indexOf(e.target)+1;t=k[a]||k[0];break;case s:var i=k.indexOf(e.target)-1;t=k[i]||k[k.length-1]}null===(n=t)||void 0===n||n.focus()};return i.a.createElement("div",{className:"tabs-container"},i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},m)},d.map((function(e){var n=e.value,t=e.label;return i.a.createElement("li",{role:"tab",tabIndex:f===n?0:-1,"aria-selected":f===n,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:y,onFocus:w,onClick:w},t)}))),n?Object(a.cloneElement)(h.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):i.a.createElement("div",{className:"margin-vert--md"},h.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==f})}))))}},312:function(e,n,t){"use strict";var a=t(0),i=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return i.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);