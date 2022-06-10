"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[1753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=t(87462),r=t(63366),i=(t(67294),t(3905)),a=["components"],l={id:"frontend-overrides",title:"Overriding frontend components",sidebar_label:"Frontend overrides"},s=void 0,p={unversionedId:"frontend-overrides",id:"version-2.12.0/frontend-overrides",title:"Overriding frontend components",description:"Once you are able to build the frontend in your project (see previous section), you can override some parts of the frontend with a drop-in replacement you built yourself.",source:"@site/versioned_docs/version-2.12.0/frontend-overrides.md",sourceDirName:".",slug:"/frontend-overrides",permalink:"/docs/2.12.0/frontend-overrides",draft:!1,tags:[],version:"2.12.0",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1654849904,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"frontend-overrides",title:"Overriding frontend components",sidebar_label:"Frontend overrides"},sidebar:"version-2.12.0/docs",previous:{title:"I18n",permalink:"/docs/2.12.0/internationalization"},next:{title:"LMS connection",permalink:"/docs/2.12.0/lms-connection"}},d={},c=[{value:"Defining your overrides",id:"defining-your-overrides",level:2},{value:"Building a component override",id:"building-a-component-override",level:2},{value:"Override translation",id:"override-translation",level:2},{value:"Create new translation keys",id:"create-new-translation-keys",level:3},{value:"Override an existing translation key",id:"override-an-existing-translation-key",level:3}],u={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Once you are able to build the frontend in your project (see previous section), you can override some parts of the frontend with a drop-in replacement you built yourself."),(0,i.kt)("p",null,"This enables you to customize Richie to your own needs in the same way you could do it with backend templates by overriding templates or blocks which do not suit your needs."),(0,i.kt)("h2",{id:"defining-your-overrides"},"Defining your overrides"),(0,i.kt)("p",null,"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"json")," settings files somewhere in your project. You'll use it to declare the overrides for your custom Richie build."),(0,i.kt)("p",null,"Currently, it is only possible to override components. Richie's build is only set up to handle them."),(0,i.kt)("p",null,"Inside, create an object with only one key: ",(0,i.kt)("inlineCode",{parentName:"p"},'"overrides"'),". This is an object, whose key-value pairs is the name of a component as a key and the path to the drop-in replacement as the value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "overrides": {\n    "CourseGlimpse": "src/richie/components/CustomCourseGlimpse.tsx"\n  }\n}\n')),(0,i.kt)("h2",{id:"building-a-component-override"},"Building a component override"),(0,i.kt)("p",null,"As overrides are supposed to be drop-in replacements, directly processed by the bundler instead of the original file, they need to expose the same API."),(0,i.kt)("p",null,"For example, if our component to override was the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface CourseGlimpseProps {\n  course: Course;\n  context: { someProp: string };\n}\n\nexport const CourseGlimpse: React.FC<CourseGlimpseProps> = ({ course, context }) => {\n  // Whatever happens in this component\n  return <p>The glimpse</p>;\n};\n")),(0,i.kt)("p",null,"Then, your override needs to provide the same exports, explicitly a named ",(0,i.kt)("inlineCode",{parentName:"p"},"CourseGlimpseProps")," interface and a named ",(0,i.kt)("inlineCode",{parentName:"p"},"CourseGlimpse")," component."),(0,i.kt)("p",null,"You also need to respect the assumptions made by other components that use your overridden version, if you are not overriding a root component."),(0,i.kt)("p",null,"For example returning ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," might break a layout if the original component never returned such a value, etc. You also need to make sure to avoid conflict with the parameters accepted by the original component."),(0,i.kt)("h2",{id:"override-translation"},"Override translation"),(0,i.kt)("p",null,"When you create an application based on richie, you can encounter two cases about translations:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You created or overrode a react component and created new translation keys"),(0,i.kt)("li",{parentName:"ol"},"You just want to override a translation in an existing richie component")),(0,i.kt)("h3",{id:"create-new-translation-keys"},"Create new translation keys"),(0,i.kt)("p",null,"Once you created your new component with its translation keys, you have to extract them with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  formatjs extract './**/*.ts*' --ignore ./node_modules --ignore './**/*.d.ts' --out-file './i18n/frontend.json --id-interpolation-pattern '[sha512:contenthash:base64:6]' --format crowdin\n")),(0,i.kt)("p",null,"This command extracts all translations defined in your typescript files then generates a ",(0,i.kt)("inlineCode",{parentName:"p"},"frontend.json")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/")," directory. This file is like a pot file, this is the base to create your translations in any language you want."),(0,i.kt)("p",null,"As ",(0,i.kt)("inlineCode",{parentName:"p"},"--format")," option indicates, this command generates a file compatible with crowdin. If you want to customize this command to fit your needs, read the ",(0,i.kt)("a",{parentName:"p",href:"https://formatjs.io/docs/tooling/cli/"},"formatjs/cli documentation"),"."),(0,i.kt)("p",null,"Once translations keys are extracted and your local translations are ready, you need to compile these translations. In fact, the compilation process first aggregates all translation files found from provided paths then merges them with richie translations according their filename and finally generates an output formatted for ",(0,i.kt)("inlineCode",{parentName:"p"},"react-intl"),". Below, here is an example of a compilation command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  node-modules/richie-education/i18n/compile-translations.js ./i18n/locales/*.json\n")),(0,i.kt)("p",null,"This command looks for all translation files in ",(0,i.kt)("inlineCode",{parentName:"p"},"i18n/locales")," directory then merges files found with richie translation files. You can pass several path patterns. You can also use an ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore")," argument to ignore a particular path."),(0,i.kt)("h3",{id:"override-an-existing-translation-key"},"Override an existing translation key"),(0,i.kt)("p",null,"As explain above, the compilation process aggregates translations files then ",(0,i.kt)("strong",{parentName:"p"},"merges them according their filename"),". That means if you want override for example the english translation, you just have to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US.json")," file and redefine translation keys used by Richie."),(0,i.kt)("p",null,"Richie uses one file per language. Currently 4 languages supported:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"English: filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"en-US.json")),(0,i.kt)("li",{parentName:"ul"},"French: filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"fr-FR.json")),(0,i.kt)("li",{parentName:"ul"},"Canadian french: filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"fr-CA.json")),(0,i.kt)("li",{parentName:"ul"},"Spanish: filename is ",(0,i.kt)("inlineCode",{parentName:"li"},"es-ES.json"))),(0,i.kt)("p",null,"For example, richie uses the translation key ",(0,i.kt)("inlineCode",{parentName:"p"},"components.UserLogin.logIn")," for the Log in button. If you want to change this label for the english translation, you just have to create a translation file ",(0,i.kt)("inlineCode",{parentName:"p"},"en-US.json")," which redefines this translation key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "components.UserLogin.logIn": {\n    "description": "Overriden text for the login button.",\n    "message": "Authentication"\n  },\n}\n')),(0,i.kt)("p",null,"Then, for example if you put your overridden translation in i18n/overrides directory, you have to launch the compilation command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  node-modules/richie-education/i18n/compile-translations.js ./i18n/overrides/*.json\n")),(0,i.kt)("p",null,'In this way, "',(0,i.kt)("em",{parentName:"p"},"Authentication"),'" will be displayed as label for login button instead of "',(0,i.kt)("em",{parentName:"p"},"Sign in"),'".'))}m.isMDXComponent=!0}}]);