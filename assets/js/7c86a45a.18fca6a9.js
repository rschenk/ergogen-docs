"use strict";(self.webpackChunkergogen_docs=self.webpackChunkergogen_docs||[]).push([[577],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9644:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],c={sidebar_position:3},u="Units",s={unversionedId:"units",id:"units",isDocsHomePage:!1,title:"Units",description:"We start with an optional units clause, where we can define units to use in relative calculations.",source:"@site/docs/units.md",sourceDirName:".",slug:"/units",permalink:"/units",editUrl:"https://github.com/ergogen/ergogen-docs/edit/main/website/docs/units.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Preprocessing",permalink:"/preprocessing"},next:{title:"Points",permalink:"/points"}},l=[],p={toc:l};function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"units"},"Units"),(0,i.kt)("p",null,"We start with an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"units")," clause, where we can define units to use in relative calculations.",(0,i.kt)("br",{parentName:"p"}),"\n","The three predefined ones are ",(0,i.kt)("inlineCode",{parentName:"p"},"u"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"cx"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"cy"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"u: 19 # 19mm MX spacing\ncx: 18 # 18mm Choc X spacing\ncY: 17 # 17mm Choc Y spacing\n")),(0,i.kt)("p",null,"But we can add any other (or modify these predefined ones), or even use an existing measure in calculating a new value (for example, ",(0,i.kt)("inlineCode",{parentName:"p"},"double: 2 u"),").\nRecall how each string that can be interpreted as a math formula will be treated like a number, so this is a great way to add math-level variables to your config."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"units:\n  a: cy - 7\n  b: a * 1.5\n")))}m.isMDXComponent=!0}}]);