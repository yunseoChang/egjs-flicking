(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{236:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return O}));var a=n(3),r=n(8),b=(n(0),n(304)),c={custom_edit_url:null},l={unversionedId:"api/Panel",id:"version-4.2.5/api/Panel",isDocsHomePage:!1,title:"Panel",description:"`ts",source:"@site/versioned_docs/version-4.2.5/api/Panel.mdx",sourceDirName:"api",slug:"/api/Panel",permalink:"/egjs-flicking/docs/api/Panel",editUrl:null,version:"4.2.5",frontMatter:{custom_edit_url:null},sidebar:"version-4.2.5/api",previous:{title:"ExternalPanel",permalink:"/egjs-flicking/docs/api/ExternalPanel"},next:{title:"ExternalRenderer",permalink:"/egjs-flicking/docs/api/ExternalRenderer"}},i=[{value:"Constructor",id:"constructor",children:[]},{value:"Properties",id:"properties",children:[{value:"index",id:"index",children:[]},{value:"position",id:"position",children:[]},{value:"size",id:"size",children:[]},{value:"sizeIncludingMargin",id:"sizeIncludingMargin",children:[]},{value:"height",id:"height",children:[]},{value:"margin",id:"margin",children:[]},{value:"alignPosition",id:"alignPosition",children:[]},{value:"removed",id:"removed",children:[]},{value:"range",id:"range",children:[]},{value:"toggled",id:"toggled",children:[]},{value:"toggleDirection",id:"toggleDirection",children:[]},{value:"offset",id:"offset",children:[]},{value:"progress",id:"progress",children:[]},{value:"outsetProgress",id:"outsetProgress",children:[]},{value:"visibleRatio",id:"visibleRatio",children:[]},{value:"align",id:"align",children:[]}]},{value:"Methods",id:"methods",children:[{value:"resize",id:"resize",children:[]},{value:"setSize",id:"setSize",children:[]},{value:"contains",id:"contains",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"includePosition",id:"includePosition",children:[]},{value:"includeRange",id:"includeRange",children:[]},{value:"focus",id:"focus",children:[]},{value:"prev",id:"prev",children:[]},{value:"next",id:"next",children:[]},{value:"increaseIndex",id:"increaseIndex",children:[]},{value:"decreaseIndex",id:"decreaseIndex",children:[]},{value:"increasePosition",id:"increasePosition",children:[]},{value:"decreasePosition",id:"decreasePosition",children:[]},{value:"toggle",id:"toggle",children:[]},{value:"updateCircularToggleDirection",id:"updateCircularToggleDirection",children:[]}]}],p={toc:i};function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class Panel\n")),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#index"},"index"),Object(b.b)("br",null),Object(b.b)("a",{href:"#position"},"position"),Object(b.b)("br",null),Object(b.b)("a",{href:"#size"},"size"),Object(b.b)("br",null),Object(b.b)("a",{href:"#sizeIncludingMargin"},"sizeIncludingMargin"),Object(b.b)("br",null),Object(b.b)("a",{href:"#height"},"height"),Object(b.b)("br",null),Object(b.b)("a",{href:"#margin"},"margin"),Object(b.b)("br",null),Object(b.b)("a",{href:"#alignPosition"},"alignPosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#removed"},"removed"),Object(b.b)("br",null),Object(b.b)("a",{href:"#range"},"range"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggled"},"toggled"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggleDirection"},"toggleDirection"),Object(b.b)("br",null),Object(b.b)("a",{href:"#offset"},"offset"),Object(b.b)("br",null),Object(b.b)("a",{href:"#progress"},"progress"),Object(b.b)("br",null),Object(b.b)("a",{href:"#outsetProgress"},"outsetProgress"),Object(b.b)("br",null),Object(b.b)("a",{href:"#visibleRatio"},"visibleRatio"),Object(b.b)("br",null),Object(b.b)("a",{href:"#align"},"align")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#resize"},"resize"),Object(b.b)("br",null),Object(b.b)("a",{href:"#setSize"},"setSize"),Object(b.b)("br",null),Object(b.b)("a",{href:"#contains"},"contains"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#includePosition"},"includePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#includeRange"},"includeRange"),Object(b.b)("br",null),Object(b.b)("a",{href:"#focus"},"focus"),Object(b.b)("br",null),Object(b.b)("a",{href:"#prev"},"prev"),Object(b.b)("br",null),Object(b.b)("a",{href:"#next"},"next"),Object(b.b)("br",null),Object(b.b)("a",{href:"#increaseIndex"},"increaseIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#decreaseIndex"},"decreaseIndex"),Object(b.b)("br",null),Object(b.b)("a",{href:"#increasePosition"},"increasePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#decreasePosition"},"decreasePosition"),Object(b.b)("br",null),Object(b.b)("a",{href:"#toggle"},"toggle"),Object(b.b)("br",null),Object(b.b)("a",{href:"#updateCircularToggleDirection"},"updateCircularToggleDirection")))),Object(b.b)("h2",{id:"constructor"},"Constructor"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"new Panel(options, options.index, options.align, options.flicking)\n")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An options object")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.index"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An initial index of the panel")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.align"),Object(b.b)("td",{parentName:"tr",align:"center"},"Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An initial ",Object(b.b)("a",{parentName:"td",href:"Flicking#align"},"align")," value of the panel")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"options.flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A Flicking instance panel's referencing")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"index"},"index"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Index of the panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"position"},"position"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Position of the panel, including ",Object(b.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"size"},"size"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Cached size of the panel element",Object(b.b)("br",{parentName:"p"}),"\n","This is equal to ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s ",Object(b.b)("inlineCode",{parentName:"p"},"offsetWidth")," if ",Object(b.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"p"},"offsetHeight")," else"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"sizeIncludingMargin"},"sizeIncludingMargin"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Panel's size including CSS ",Object(b.b)("inlineCode",{parentName:"p"},"margin"),Object(b.b)("br",{parentName:"p"}),"\n","This value includes ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element"),"'s margin left/right if ",Object(b.b)("a",{parentName:"p",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", and margin top/bottom else"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"height"},"height"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Height of the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"margin"},"margin"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Cached CSS ",Object(b.b)("inlineCode",{parentName:"p"},"margin")," value of the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prev"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(b.b)("inlineCode",{parentName:"td"},"margin-left")," when the ",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"margin-top")," else")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"next"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS ",Object(b.b)("inlineCode",{parentName:"td"},"margin-right")," when the ",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", and ",Object(b.b)("inlineCode",{parentName:"td"},"margin-bottom")," else")))),Object(b.b)("h3",{id:"alignPosition"},"alignPosition"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Align position inside the panel where ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera"),"'s ",Object(b.b)("a",{parentName:"p",href:"Camera#alignPosition"},"alignPosition")," inside viewport should be located at"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"removed"},"removed"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A value indicating whether the panel's ",Object(b.b)("a",{parentName:"p",href:"Flicking#remove"},"remove"),"d"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"range"},"range"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Panel element's range of the bounding box"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"Bounding box's left(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / top(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"max"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"Bounding box's right(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": true) / bottom(",Object(b.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),": false)")))),Object(b.b)("h3",{id:"toggled"},"toggled"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A value indicating whether the panel's position is toggled by circular behavior"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"toggleDirection"},"toggleDirection"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"A direction where the panel's position is toggled"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"DIRECTION"},"DIRECTION")),Object(b.b)("h3",{id:"offset"},"offset"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Actual position offset determined by ",Object(b.b)("a",{parentName:"p",href:"Panel#order"},"Panel#order")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"progress"},"progress"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Progress of movement between previous or next panel relative to current panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"outsetProgress"},"outsetProgress"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Progress of movement between points that panel is completely invisible outside of viewport(prev direction: -1, selected point: 0, next direction: 1)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"visibleRatio"},"visibleRatio"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"Percentage of area where panel is visible in the viewport"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"align"},"align"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"A value indicating where the ",Object(b.b)("a",{parentName:"p",href:"Panel#alignPosition"},"alignPosition")," should be located at inside the panel element"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Constants.ALIGN ","|"," string ","|"," number"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"resize"},"resize"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Update size of the panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"cached"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Predefined cached size of the panel")))),Object(b.b)("h3",{id:"setSize"},"setSize"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Change panel's size. This will change the actual size of the panel element by changing its CSS width/height property"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"size"),Object(b.b)("td",{parentName:"tr",align:"center"},"object"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"New panel size")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"size.width"),Object(b.b)("td",{parentName:"tr",align:"center"},"number ","|"," string"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"size.height"),Object(b.b)("td",{parentName:"tr",align:"center"},"number ","|"," string"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"CSS string or number(in px)")))),Object(b.b)("h3",{id:"contains"},"contains"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Check whether the given element is inside of this panel's ",Object(b.b)("a",{parentName:"p",href:"Panel#element"},"element")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating the element is inside of this panel ",Object(b.b)("a",{parentName:"li",href:"Panel#element"},"element"))),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"element"),Object(b.b)("td",{parentName:"tr",align:"center"},"HTMLElement"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"The HTMLElement to check")))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Reset internal state and set ",Object(b.b)("a",{parentName:"p",href:"Panel#removed"},"removed")," to ",Object(b.b)("inlineCode",{parentName:"p"},"true")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"includePosition"},"includePosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Check whether the given position is inside of this panel's ",Object(b.b)("a",{parentName:"p",href:"Panel#range"},"range")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given position is included in the panel range")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"pos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"A position to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(b.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"false"),Object(b.b)("td",{parentName:"tr",align:"center"},"Include ",Object(b.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(b.b)("h3",{id:"includeRange"},"includeRange"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Check whether the given range is fully included in this panel's area"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Boolean value indicating whether the given range is fully included in the panel range")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"min"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Minimum value of the range to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"max"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Maximum value of the range to check")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"includeMargin"),Object(b.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"},"false"),Object(b.b)("td",{parentName:"tr",align:"center"},"Include ",Object(b.b)("a",{parentName:"td",href:"Panel#margin"},"margin")," to the range")))),Object(b.b)("h3",{id:"focus"},"focus"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Move ",Object(b.b)("a",{parentName:"p",href:"Camera"},"Camera")," to this panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A Promise which will be resolved after reaching the panel")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"Duration of the animation (unit: ms)")))),Object(b.b)("h3",{id:"prev"},"prev"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Get previous(",Object(b.b)("inlineCode",{parentName:"p"},"index - 1"),") panel. When the previous panel does not exist, this will return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead",Object(b.b)("br",{parentName:"p"}),"\n","If the ",Object(b.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the last panel if called from the first panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The previous panel")),Object(b.b)("h3",{id:"next"},"next"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Get next(",Object(b.b)("inlineCode",{parentName:"p"},"index + 1"),") panel. When the next panel does not exist, this will return ",Object(b.b)("inlineCode",{parentName:"p"},"null")," instead",Object(b.b)("br",{parentName:"p"}),"\n","If the ",Object(b.b)("a",{parentName:"p",href:"Flicking#circularEnabled"},"circular")," is enabled, this will return the first panel if called from the last panel"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": ",Object(b.b)("a",{parentName:"p",href:"Panel"},"Panel")," ","|"," null"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"The previous panel")),Object(b.b)("h3",{id:"increaseIndex"},"increaseIndex"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Increase panel's index by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"decreaseIndex"},"decreaseIndex"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Decrease panel's index by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"increasePosition"},"increasePosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Increase panel's position by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"decreasePosition"},"decreasePosition"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Decrease panel's position by the given value"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"val"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An integer greater than or equal to 0")))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"toggle"},"toggle"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": boolean"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"toggled")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"prevPos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"newPos"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"})))),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("h3",{id:"updateCircularToggleDirection"},"updateCircularToggleDirection"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This function is for ",Object(b.b)("strong",null,"internal")," use only."))}O.isMDXComponent=!0},304:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),O=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=O(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),o=O(n),j=a,m=o["".concat(c,".").concat(j)]||o[j]||s[j]||b;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var p=2;p<b;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);