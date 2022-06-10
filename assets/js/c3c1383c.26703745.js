"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[5667],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"discover",title:"Getting started with Richie",sidebar_label:"Quick start"},s=void 0,c={unversionedId:"discover",id:"version-1.14/discover",title:"Getting started with Richie",description:"If you're just looking for a quick preview of Richie, you can take a look and have a tour of Richie on our dedicated demo site.",source:"@site/versioned_docs/version-1.14/quick-start.md",sourceDirName:".",slug:"/discover",permalink:"/docs/1.14/discover",draft:!1,tags:[],version:"1.14",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1654849904,formattedLastUpdatedAt:"6/10/2022",frontMatter:{id:"discover",title:"Getting started with Richie",sidebar_label:"Quick start"},sidebar:"version-1.14/docs",next:{title:"Docker development",permalink:"/docs/1.14/docker-development"}},p={},d=[{value:"Architecture",id:"architecture",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Docker",id:"docker",level:3},{value:"Project bootstrap",id:"project-bootstrap",level:3},{value:"Adding content",id:"adding-content",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you're just looking for a quick preview of ",(0,o.kt)("inlineCode",{parentName:"p"},"Richie"),", you can take a look and have a tour of ",(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," on our dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://demo.richie.education"},"demo site"),"."),(0,o.kt)("p",null,"Login/password are ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),". The database is regularly flushed."),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Richie")," is a ",(0,o.kt)("strong",{parentName:"p"},"container-native application")," but can also be installed\n",(0,o.kt)("a",{parentName:"p",href:"/docs/1.14/native-installation"},"on your machine"),"."),(0,o.kt)("p",null,"For development, the project is defined using a ",(0,o.kt)("a",{parentName:"p",href:"../docker-compose.yml"},"docker-compose file")," and\nconsists of 4 services:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"db"),": the ",(0,o.kt)("inlineCode",{parentName:"li"},"Postgresql")," database,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"elasticsearch"),": the search engine,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"app"),": the actual ",(0,o.kt)("inlineCode",{parentName:"li"},"DjangoCMS")," project with all our application code,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"node"),": used for front-end related tasks, ",(0,o.kt)("em",{parentName:"li"},"i.e.")," transpiling ",(0,o.kt)("inlineCode",{parentName:"li"},"TypeScript")," sources, bundling\nthem into a JS package, and building the CSS files from Sass sources.")),(0,o.kt)("p",null,'At "France Universit\xe9 Num\xe9rique", we deploy our applications on ',(0,o.kt)("inlineCode",{parentName:"p"},"OpenShift"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Kubernetes")," using\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openfun/arnold"},(0,o.kt)("inlineCode",{parentName:"a"},"Arnold")),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("h3",{id:"docker"},"Docker"),(0,o.kt)("p",null,"First, make sure you have a recent version of Docker and\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install"},"Docker Compose")," installed on your laptop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker -v\n  Docker version 1.13.1, build 092cba3\n\n$ docker-compose --version\n  docker-compose version 1.17.1, build 6d101fb\n")),(0,o.kt)("p",null,"\u26a0\ufe0f You may need to run the following commands with ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," but this can be avoided by assigning your\nuser to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," group."),(0,o.kt)("h3",{id:"project-bootstrap"},"Project bootstrap"),(0,o.kt)("p",null,"The easiest way to start working on the project is to use our ",(0,o.kt)("inlineCode",{parentName:"p"},"Makefile"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make bootstrap\n")),(0,o.kt)("p",null,"This command builds the ",(0,o.kt)("inlineCode",{parentName:"p"},"app")," container, installs front-end and back-end dependencies, builds the\nfront-end application and styles, and performs database migrations. It's a good idea to use this\ncommand each time you are pulling code from the project repository to avoid dependency-related or\nmigration-related issues."),(0,o.kt)("p",null,"Now that your ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," services are ready to be used, start the full CMS by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make run\n")),(0,o.kt)("h3",{id:"adding-content"},"Adding content"),(0,o.kt)("p",null,"Once the CMS is up and running, you can create a superuser account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make superuser\n")),(0,o.kt)("p",null,"You can create a basic demo site by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ make demo-site\n")),(0,o.kt)("p",null,"Note that if you don't create the demo site and start from a blank CMS, you will get some errors\nrequesting you to create some required root pages. So it is easier as a first approach to test the\nCMS with the demo site."),(0,o.kt)("p",null,"You should be able to view the site at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8070"},"localhost:8070")))}m.isMDXComponent=!0}}]);