(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{303:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(304),l=a(16),r=a(29),o=a(339),s=a(3),d=a(8),u=a(305),m=a(307),b=a(309),h=a(381),p=a(382),f=a(380),v=a(313),E=a(308),O=a(383),j=function(e){return i.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),i.a.createElement("g",{fill:"#7a7a7a"},i.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),i.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(384),k=a(316),C=a(105),N=a.n(C);var S=function e(t,a){return"link"===t.type?Object(m.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},T=Object(n.memo)((function(e){var t=e.items,a=Object(d.a)(e,["items"]);return t.map((function(e,t){return i.a.createElement(_,Object(s.a)({key:t,item:e},a))}))}));function _(e){switch(e.item.type){case"category":return i.a.createElement(I,e);case"link":default:return i.a.createElement(w,e)}}function I(e){var t,a,c,l=e.item,r=e.onItemClick,o=e.collapsible,m=e.activePath,b=Object(d.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,p=l.label,f=S(l,m),v=(a=f,c=Object(n.useRef)(a),Object(n.useEffect)((function(){c.current=a}),[a]),c.current),E=Object(n.useState)((function(){return!!o&&(!f&&l.collapsed)})),O=E[0],j=E[1],g=Object(n.useRef)(null),k=Object(n.useState)(void 0),C=k[0],_=k[1],I=function(e){var t;void 0===e&&(e=!0),_(e?(null===(t=g.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(n.useEffect)((function(){f&&!v&&O&&j(!1)}),[f,v,O]);var w=Object(n.useCallback)((function(e){e.preventDefault(),C||I(),setTimeout((function(){return j((function(e){return!e}))}),100)}),[C]);return 0===h.length?null:i.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":O})},i.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&f},t[N.a.menuLinkText]=!o,t)),onClick:o?w:void 0,href:o?"#!":void 0},b),p),i.a.createElement("ul",{className:"menu__list",ref:g,style:{height:C},onTransitionEnd:function(){O||I(!1)}},i.a.createElement(T,{items:h,tabIndex:O?"-1":"0",onItemClick:r,collapsible:o,activePath:m})))}function w(e){var t,a=e.item,n=e.onItemClick,c=e.activePath,l=(e.collapsible,Object(d.a)(e,["item","onItemClick","activePath","collapsible"])),r=a.href,o=a.label,m=S(a,c);return i.a.createElement("li",{className:"menu__list-item",key:o},i.a.createElement(v.a,Object(s.a)({className:Object(u.a)("menu__link",(t={"menu__link--active":m},t[N.a.menuLinkExternal]=!Object(E.a)(r),t)),to:r},Object(E.a)(r)&&{isNavLink:!0,exact:!0,onClick:n},l),o))}function y(e){var t=e.onClick;return i.a.createElement("button",{type:"button",title:Object(k.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(u.a)("button button--secondary button--outline",N.a.collapseSidebarButton),onClick:t},i.a.createElement(j,{className:N.a.collapseSidebarButtonIcon}))}function x(e){var t=e.responsiveSidebarOpened,a=e.onClick;return i.a.createElement("button",{"aria-label":t?Object(k.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(k.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?i.a.createElement("span",{className:Object(u.a)(N.a.sidebarMenuIcon,N.a.sidebarMenuCloseIcon)},"\xd7"):i.a.createElement(g.a,{className:N.a.sidebarMenuIcon,height:24,width:24}))}var A=function(e){var t,a,c=e.path,l=e.sidebar,r=e.sidebarCollapsible,o=void 0===r||r,s=e.onCollapse,d=e.isHidden,v=function(){var e=Object(b.a)().isAnnouncementBarClosed,t=Object(n.useState)(!e),a=t[0],i=t[1];return Object(f.a)((function(t){var a=t.scrollY;e||i(0===a)})),a}(),E=Object(m.useThemeConfig)(),j=E.navbar.hideOnScroll,g=E.hideableSidebar,k=Object(b.a)().isAnnouncementBarClosed,C=function(){var e=Object(n.useState)(!1),t=e[0],a=e[1];Object(h.a)(t);var i=Object(p.a)();return Object(n.useEffect)((function(){i===p.b.desktop&&a(!1)}),[i]),{showResponsiveSidebar:t,closeResponsiveSidebar:Object(n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:Object(n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),S=C.showResponsiveSidebar,_=C.closeResponsiveSidebar,I=C.toggleResponsiveSidebar;return i.a.createElement("div",{className:Object(u.a)(N.a.sidebar,(t={},t[N.a.sidebarWithHideableNavbar]=j,t[N.a.sidebarHidden]=d,t))},j&&i.a.createElement(O.a,{tabIndex:-1,className:N.a.sidebarLogo}),i.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",N.a.menu,(a={"menu--show":S},a[N.a.menuWithAnnouncementBar]=!k&&v,a))},i.a.createElement(x,{responsiveSidebarOpened:S,onClick:I}),i.a.createElement("ul",{className:"menu__list"},i.a.createElement(T,{items:l,onItemClick:_,collapsible:o,activePath:c}))),g&&i.a.createElement(y,{onClick:s}))},R=a(390),P=a(391),L=a(23),B=a(106),M=a.n(B);function H(e){var t,a,r,s,d,b=e.currentDocRoute,h=e.versionMetadata,p=e.children,f=Object(l.default)(),v=f.siteConfig,E=f.isClient,O=h.pluginId,g=h.permalinkToSidebar,C=h.docsSidebars,N=h.version,S=g[b.path],T=C[S],_=Object(n.useState)(!1),I=_[0],w=_[1],y=Object(n.useState)(!1),x=y[0],P=y[1],L=Object(n.useCallback)((function(){x&&P(!1),w(!I)}),[x]);return i.a.createElement(o.a,{key:E,wrapperClassName:m.ThemeClassNames.wrapper.docPages,pageClassName:m.ThemeClassNames.page.docPage,searchMetadatas:{version:N,tag:Object(m.docVersionSearchTag)(O,N)}},i.a.createElement("div",{className:M.a.docPage},T&&i.a.createElement("div",{className:Object(u.a)(M.a.docSidebarContainer,(t={},t[M.a.docSidebarContainerHidden]=I,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(M.a.docSidebarContainer)&&I&&P(!0)},role:"complementary"},i.a.createElement(A,{key:S,sidebar:T,path:b.path,sidebarCollapsible:null===(a=null===(r=v.themeConfig)||void 0===r?void 0:r.sidebarCollapsible)||void 0===a||a,onCollapse:L,isHidden:x}),x&&i.a.createElement("div",{className:M.a.collapsedDocSidebar,title:Object(k.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(k.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:L,onClick:L},i.a.createElement(j,{className:M.a.expandSidebarButtonIcon}))),i.a.createElement("main",{className:Object(u.a)(M.a.docMainContainer,(s={},s[M.a.docMainContainerEnhanced]=I||!T,s))},i.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",M.a.docItemWrapper,(d={},d[M.a.docItemWrapperEnhanced]=I,d))},i.a.createElement(c.a,{components:R.a},p)))))}t.default=function(e){var t=e.route.routes,a=e.versionMetadata,n=e.location,c=t.find((function(e){return Object(L.matchPath)(n.pathname,e)}));return c?i.a.createElement(H,{currentDocRoute:c,versionMetadata:a},Object(r.a)(t)):i.a.createElement(P.default,e)}},390:function(e,t,a){"use strict";var n=a(0),i=a.n(n),c=a(313),l=a(314),r=a(8),o=a(305),s=a(316),d=a(307),u=(a(78),a(79)),m=a.n(u),b=function(e){return function(t){var a,n=t.id,c=Object(r.a)(t,["id"]),l=Object(d.useThemeConfig)().navbar.hideOnScroll;return n?i.a.createElement(e,c,i.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(o.a)("anchor",(a={},a[m.a.enhancedAnchor]=!l,a)),id:n}),c.children,i.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(s.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):i.a.createElement(e,c)}},h={code:function(e){var t=e.children;return Object(n.isValidElement)(t)?t:t.includes("\n")?i.a.createElement(l.a,e):i.a.createElement("code",e)},a:function(e){return i.a.createElement(c.a,e)},pre:function(e){var t,a=e.children;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:i.a.createElement(l.a,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:b("h1"),h2:b("h2"),h3:b("h3"),h4:b("h4"),h5:b("h5"),h6:b("h6")};t.a=h},391:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(339),l=a(316);t.default=function(){return i.a.createElement(c.a,{title:"Page Not Found"},i.a.createElement("main",{className:"container margin-vert--xl"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col col--6 col--offset-3"},i.a.createElement("h1",{className:"hero__title"},i.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),i.a.createElement("p",null,i.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}}}]);