"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9900],{24239:(e,n,r)=>{r.d(n,{Z:()=>v});var t=r(24246),o=(r(27378),r(40624)),a=r(41876),s=r(41428),l=r(7812),c=r(64149),i=r(36712),u=r(52615);const d={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function p({href:e,children:n}){return(0,t.jsx)(s.Z,{href:e,className:(0,o.Z)("card padding--lg",d.cardContainer),children:n})}function h({href:e,icon:n,title:r,description:a}){return(0,t.jsxs)(p,{href:e,children:[(0,t.jsxs)(u.Z,{as:"h2",className:(0,o.Z)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),a&&(0,t.jsx)("p",{className:(0,o.Z)("text--truncate",d.cardDescription),title:a,children:a})]})}function m({item:e}){const n=(0,a.LM)(e),r=function(){const{selectMessage:e}=(0,l.c)();return n=>e(n,(0,i.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:n}))}();return n?(0,t.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(o=e.description)&&void 0!==o?o:r(e.items.length)}):null;var o}function f({item:e}){const n=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var r;const o=(0,a.xz)(null!==(r=e.docId)&&void 0!==r?r:void 0);var s;return(0,t.jsx)(h,{href:e.href,icon:n,title:e.label,description:null!==(s=e.description)&&void 0!==s?s:null==o?void 0:o.description})}function g({item:e}){switch(e.type){case"link":return(0,t.jsx)(f,{item:e});case"category":return(0,t.jsx)(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function b(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function j({className:e}){const n=(0,a.jA)();return(0,t.jsx)(v,{items:n.items,className:e})}function v(e){const{items:n,className:r}=e;if(!n)return(0,t.jsx)(j,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){b(e,n,r[n])}))}return e}({},e));const s=(0,a.MN)(n);return(0,t.jsx)("section",{className:(0,o.Z)("row",r),children:s.map(((e,n)=>(0,t.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,t.jsx)(g,{item:e})},n)))})}},61132:(e,n,r)=>{r.d(n,{Z:()=>s});var t=r(24246),o=(r(27378),r(40624));const a={tabItem:"tabItem_pnkT"};function s({children:e,hidden:n,className:r}){return(0,t.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,r),hidden:n,children:e})}},97555:(e,n,r)=>{r.d(n,{Z:()=>N});var t=r(24246),o=r(27378),a=r(40624),s=r(75527),l=r(3620),c=r(44479),i=r(62821),u=r(52196),d=r(53589);function p(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function h(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function m(e){var n,r;return null!==(r=null===(n=o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))||void 0===n?void 0:n.filter(Boolean))&&void 0!==r?r:[]}function f(e){const{values:n,children:r}=e;return(0,o.useMemo)((()=>{const e=null!=n?n:function(e){return m(e).map((({props:{value:e,label:n,attributes:r,default:t}})=>({value:e,label:n,attributes:r,default:t})))}(r);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function g({value:e,tabValues:n}){return n.some((n=>n.value===e))}function b({queryString:e=!1,groupId:n}){const r=(0,l.k6)(),t=function({queryString:e=!1,groupId:n}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:e,groupId:n}),a=(0,i._X)(t),s=(0,o.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace(h(function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){p(e,n,r[n])}))}return e}({},r.location),{search:n.toString()}))}),[t,r]);return[a,s]}function j(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,a=f(e),[s,l]=(0,o.useState)((()=>function({defaultValue:e,tabValues:n}){if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!g({value:e,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}var r;const t=null!==(r=n.find((e=>e.default)))&&void 0!==r?r:n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[i,u]=b({queryString:r,groupId:t}),[p,h]=function({groupId:e}){const n=function(e){return e?`docusaurus.tab.${e}`:null}(e),[r,t]=(0,d.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:t}),m=(()=>{const e=null!=i?i:p;return g({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!g({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,a]),tabValues:a}}var v=r(29088);const y={tabList:"tabList_Qoir",tabItem:"tabItem_AQgk"};function x(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function w(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{},t=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),t.forEach((function(n){x(e,n,r[n])}))}return e}function O(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})),e}function k({className:e,block:n,selectedValue:r,selectValue:o,tabValues:l}){const c=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=l[t].value;a!==r&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;var r;n=null!==(r=c[t])&&void 0!==r?r:c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;var t;n=null!==(t=c[r])&&void 0!==t?t:c[c.length-1];break}}null==n||n.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:l.map((({value:e,label:n,attributes:o})=>(0,t.jsx)("li",O(w({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>c.push(e),onKeyDown:d,onClick:u},o),{className:(0,a.Z)("tabs__item",y.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===e}),children:null!=n?n:e}),e)))})}function P({lazy:e,children:n,selectedValue:r}){const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function D(e){const n=j(e);return(0,t.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,t.jsx)(k,w({},e,n)),(0,t.jsx)(P,w({},e,n))]})}function N(e){const n=(0,v.Z)();return(0,t.jsx)(D,O(w({},e),{children:m(e.children)}),String(n))}},7812:(e,n,r)=>{r.d(n,{c:()=>i});var t=r(27378),o=r(4423);const a=["zero","one","two","few","many","other"];function s(e){return a.filter((n=>e.includes(n)))}const l={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,t.useMemo)((()=>{try{return function(e){const n=new Intl.PluralRules(e);return{locale:e,pluralForms:s(n.resolvedOptions().pluralCategories),select:e=>n.select(e)}}(e)}catch(n){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${n.message}\n`),l}}),[e])}function i(){const e=c();return{selectMessage:(n,r)=>function(e,n,r){const t=e.split("|");if(1===t.length)return t[0];t.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${t.length}: ${e}`);const o=r.select(n),a=r.pluralForms.indexOf(o);return t[Math.min(a,t.length-1)]}(r,n,e)}}},31366:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var t=r(24246),o=r(71670),a=r(97555),s=r(61132),l=r(24239);const c={slug:"/migration"},i="Upgrading Docusaurus",u={id:"migration/index",title:"Upgrading Docusaurus",description:"Docusaurus versioning is based on the major.minor.patch scheme and respects Semantic Versioning.",source:"@site/docs/migration/index.mdx",sourceDirName:"migration",slug:"/migration",permalink:"/docs/migration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/migration/index.mdx",tags:[],version:"current",lastUpdatedBy:"Mikey O'Toole",lastUpdatedAt:1713452696e3,frontMatter:{slug:"/migration"},sidebar:"docs",previous:{title:"Client architecture",permalink:"/docs/advanced/client"},next:{title:"To Docusaurus v3",permalink:"/docs/migration/v3"}},d={},p=[{value:"Troubleshooting upgrades",id:"troubleshooting-upgrades",level:2},{value:"Run the <code>clear</code> command",id:"run-the-clear-command",level:3},{value:"Remove <code>node_modules</code> and your lock file(s)",id:"remove-node_modules-and-your-lock-files",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"upgrading-docusaurus",children:"Upgrading Docusaurus"}),"\n",(0,t.jsxs)(n.p,{children:["Docusaurus versioning is based on the ",(0,t.jsx)(n.code,{children:"major.minor.patch"})," scheme and respects ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:(0,t.jsx)(n.strong,{children:"Semantic Versioning"})}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Breaking changes"})," are only released on major version upgrades, and thoroughly documented in the following upgrade guides."]}),"\n","\n",(0,t.jsx)(l.Z,{}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting-upgrades",children:"Troubleshooting upgrades"}),"\n",(0,t.jsx)(n.p,{children:"When upgrading Docusaurus you may experience issues caused by mismatching cached dependencies - there are a few troubleshooting steps you should perform to resolve these common issues before reporting a bug or seeking support."}),"\n",(0,t.jsxs)(n.h3,{id:"run-the-clear-command",children:["Run the ",(0,t.jsx)(n.code,{children:"clear"})," command"]}),"\n",(0,t.jsx)(n.p,{children:"This CLI command is used to clear a Docusaurus site's generated assets, caches and build artifacts."}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,t.jsxs)(n.h3,{id:"remove-node_modules-and-your-lock-files",children:["Remove ",(0,t.jsx)(n.code,{children:"node_modules"})," and your lock file(s)"]}),"\n",(0,t.jsxs)(n.p,{children:["Remove the ",(0,t.jsx)(n.code,{children:"node_modules"})," folder and your package manager's lock file using the following:"]}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(s.Z,{label:"Bash",value:"bash",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,t.jsx)(s.Z,{label:"PowerShell",value:"powershell",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-powershell",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Then reinstall packages and regenerate the ",(0,t.jsx)(n.code,{children:"lock"})," file using:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(s.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install\n"})})}),(0,t.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,t.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},71670:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>s});var t=r(27378);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);