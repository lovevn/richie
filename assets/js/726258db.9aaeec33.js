"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[2309],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"installation",title:"Installing Richie for development",sidebar_label:"Installation"},s=void 0,p={unversionedId:"installation",id:"installation",title:"Installing Richie for development",description:"Richie is a container-native application but can also be installed",source:"@site/../docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/next/installation",draft:!1,tags:[],version:"current",lastUpdatedBy:"Samuel Paccoud - France Universit\xe9 Num\xe9rique",lastUpdatedAt:1649946629,formattedLastUpdatedAt:"4/14/2022",frontMatter:{id:"installation",title:"Installing Richie for development",sidebar_label:"Installation"},sidebar:"docs",previous:{title:"Web Analytics",permalink:"/docs/next/web-analytics"},next:{title:"Docker development",permalink:"/docs/next/docker-development"}},c={},u=[{value:"Docker",id:"docker",level:2},{value:"Project bootstrap",id:"project-bootstrap",level:3},{value:"Adding content",id:"adding-content",level:3},{value:"Connecting Richie to an LMS",id:"connecting-richie-to-an-lms",level:2}],d={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," is a ",(0,o.kt)("strong",{parentName:"p"},"container-native application")," but can also be installed\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/native-installation"},"on your machine"),"."),(0,o.kt)("p",null,"For development, the project is defined using a\n",(0,o.kt)("a",{target:"_blank",href:n(98613).Z},"docker-compose file")," and consists of:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"3 running services:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"database"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"postgresql")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"mysql")," at your preference,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"elasticsearch"),": the search engine,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"app"),": the actual ",(0,o.kt)("inlineCode",{parentName:"li"},"DjangoCMS")," project with all our application code."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"2 containers for building purposes:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"node"),": used for front-end related tasks, ",(0,o.kt)("em",{parentName:"li"},"i.e.")," transpiling\n",(0,o.kt)("inlineCode",{parentName:"li"},"TypeScript")," sources, bundling them into a JS package, and building the\nCSS files from Sass sources,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"crowdin"),": used to upload and retrieve i18n files to and from the\n",(0,o.kt)("a",{parentName:"li",href:"https://crowdin.com/"},"Crowding")," service that we use to crowd source\ntranslations,")))),(0,o.kt)("p",null,'At "France Universit\xe9 Num\xe9rique", we deploy our applications on ',(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes"),"\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/arnold"},(0,o.kt)("inlineCode",{parentName:"a"},"Arnold")),"."),(0,o.kt)("h2",{id:"docker"},"Docker"),(0,o.kt)("p",null,"First, make sure you have a recent version of Docker and\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install"},"Docker Compose")," installed on your\nlaptop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker -v\n  Docker version 20.10.12, build e91ed57\n\n$ docker-compose --version\n  docker-compose version 1.29.2, build 5becea4c\n")),(0,o.kt)("p",null,"\u26a0\ufe0f You may need to run the following commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," but this can be\navoided by assigning your user to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," group."),(0,o.kt)("h3",{id:"project-bootstrap"},"Project bootstrap"),(0,o.kt)("p",null,"The easiest way to start working on the project is to use our ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make bootstrap\n")),(0,o.kt)("p",null,"This command builds the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," container, installs front-end and back-end\ndependencies, builds the front-end application and styles, and performs\ndatabase migrations. It's a good idea to use this command each time you are\npulling code from the project repository to avoid dependency-related or\nmigration-related issues."),(0,o.kt)("p",null,"Now that your ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," services are ready to be used, start the full CMS by\nrunning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make run\n")),(0,o.kt)("h3",{id:"adding-content"},"Adding content"),(0,o.kt)("p",null,"Once the CMS is up and running, you can create a superuser account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make superuser\n")),(0,o.kt)("p",null,"You can create a basic demo site by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make demo-site\n")),(0,o.kt)("p",null,"Note that if you don't create the demo site and start from a blank CMS, you\nwill get some errors requesting you to create some required root pages. So it\nis easier as a first approach to test the CMS with the demo site."),(0,o.kt)("p",null,"You should be able to view the site at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8070"},"localhost:8070")),(0,o.kt)("h2",{id:"connecting-richie-to-an-lms"},"Connecting Richie to an LMS"),(0,o.kt)("p",null,"It is possible to use Richie as a catalogue aggregating courses from one or\nmore LMS without any specific connection. In this case, each course run in\nthe catalogue points to a course on the LMS, and the LMS points back to the\ncatalogue to browse courses."),(0,o.kt)("p",null,"This approach is used for example on ",(0,o.kt)("a",{parentName:"p",href:"https://www.fun-campus.fr"},"https://www.fun-campus.fr")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://catalogue.edulib.org"},"https://catalogue.edulib.org"),"."),(0,o.kt)("p",null,"For a seamless user experience, it is possible to connect a Richie instance\nto an OpenEdX instance (or some other LMS like Moodle at the cost of minor\nadaptations), in several ways that we explain in the\n",(0,o.kt)("a",{parentName:"p",href:"lms-connection"},"LMS connection guide"),"."),(0,o.kt)("p",null,"This approach is used for example on ",(0,o.kt)("a",{parentName:"p",href:"https://www.fun-mooc.fr"},"https://www.fun-mooc.fr")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nau.edu.pt"},"https://www.nau.edu.pt"),"."))}m.isMDXComponent=!0},98613:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/docker-compose-645242554c78d13c4ef0144698e560c2.yml"}}]);