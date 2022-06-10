"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[5894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),h=a,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44534:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"internationalization",title:"Internationalization",sidebar_label:"I18n"},c=void 0,s={unversionedId:"internationalization",id:"version-2.4.0/internationalization",title:"Internationalization",description:"richie has built-in localization and internationalization:",source:"@site/versioned_docs/version-2.4.0/internationalization.md",sourceDirName:".",slug:"/internationalization",permalink:"/docs/2.4.0/internationalization",draft:!1,tags:[],version:"2.4.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1654849904,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"internationalization",title:"Internationalization",sidebar_label:"I18n"},sidebar:"version-2.4.0/docs",previous:{title:"Building the frontend",permalink:"/docs/2.4.0/building-the-frontend"},next:{title:"Frontend overrides",permalink:"/docs/2.4.0/frontend-overrides"}},d={},u=[{value:"Contributing as a translator or proof-reader",id:"contributing-as-a-translator-or-proof-reader",level:2},{value:"Sign-up on Crowdin",id:"sign-up-on-crowdin",level:3},{value:"Join the Richie project",id:"join-the-richie-project",level:3},{value:"Add a new language",id:"add-a-new-language",level:3}],p={toc:u};function h(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"richie")," has built-in localization and internationalization:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"On the backend and CMS, i18n is built on the shoulders of Django and DjangoCMS,"),(0,o.kt)("li",{parentName:"ul"},"On the frontend, we use React Intl.")),(0,o.kt)("h2",{id:"contributing-as-a-translator-or-proof-reader"},"Contributing as a translator or proof-reader"),(0,o.kt)("p",null,"We use the ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com"},"Crowdin")," web platform to translate Richie to different languages.\nAll translations are hosted at ",(0,o.kt)("a",{parentName:"p",href:"https://i18n.richie.education"},"https://i18n.richie.education"),", which allows translators and\nproof-readers to contribute on translations in the languages they master."),(0,o.kt)("h3",{id:"sign-up-on-crowdin"},"Sign-up on Crowdin"),(0,o.kt)("p",null,"If you don't have an account on Crowdin already, go to ",(0,o.kt)("a",{parentName:"p",href:"https://accounts.crowdin.com/register"},"https://accounts.crowdin.com/register")," and\nfill out the form to create a free account."),(0,o.kt)("h3",{id:"join-the-richie-project"},"Join the Richie project"),(0,o.kt)("p",null,"Now that you have an account on Crowdin,\n",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/richie"},'look for the project called "Richie"'),', select the language\non which you wish to contribute and click the "Join" button as demonstrated below:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"How to join Richie on Crowdin",src:n(74706).Z,width:"2462",height:"1506"})),(0,o.kt)("p",null,"We will then review you application and you should soon start translating strings!"),(0,o.kt)("p",null,"For more information on how Crowdin works, you can refer to\n",(0,o.kt)("a",{parentName:"p",href:"https://support.crowdin.com"},"their documentation"),"."),(0,o.kt)("h3",{id:"add-a-new-language"},"Add a new language"),(0,o.kt)("p",null,'If Richie is not yet translated in the language you want, let us know by clicking the "contact"\nlink on ',(0,o.kt)("a",{parentName:"p",href:"https://i18n.richie.education"},"Richie's Crowdin profile page")," and we will consider adding\nit."),(0,o.kt)("p",null,"If you request a new language, the Richie community will expect you to keep this language\nup-to-date each time strings are modified or new strings are added, and this before each\nrelease."),(0,o.kt)("p",null,"Before asking for a new language, make sure it does not already exist. If your language already\nexists in another variant (e.g. Brazilian portuguese vs Portugal portuguese), you may consider\ncontributing on the existing language if your resources to contribute are limited."))}h.isMDXComponent=!0},74706:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/crowdin-join-richie-fd505b1a132bafb2bdafc715649a7c0f.gif"}}]);