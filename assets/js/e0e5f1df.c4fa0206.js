"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[9488],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return n?o.createElement(k,i(i({ref:t},l),{},{components:n})):o.createElement(k,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42239:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"discover",title:"Getting started with Richie",sidebar_label:"Quick start"},p=void 0,d={unversionedId:"discover",id:"version-2.7.1/discover",title:"Getting started with Richie",description:"If you're just looking for a quick preview of Richie, you can take a look and have a tour of Richie on our dedicated demo site.",source:"@site/versioned_docs/version-2.7.1/quick-start.md",sourceDirName:".",slug:"/discover",permalink:"/docs/2.7.1/discover",draft:!1,tags:[],version:"2.7.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"discover",title:"Getting started with Richie",sidebar_label:"Quick start"},sidebar:"version-2.7.1/docs",next:{title:"Docker development",permalink:"/docs/2.7.1/docker-development"}},l={},s=[{value:"Architecture",id:"architecture",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Docker",id:"docker",level:3},{value:"Project bootstrap",id:"project-bootstrap",level:3},{value:"Adding content",id:"adding-content",level:3},{value:"Basic - Connecting Richie to OpenEdx",id:"basic---connecting-richie-to-openedx",level:3},{value:"Advanced - Connecting Richie to OpenEdx",id:"advanced---connecting-richie-to-openedx",level:3}],u={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you're just looking for a quick preview of ",(0,a.kt)("inlineCode",{parentName:"p"},"Richie"),", you can take a look and have a tour of ",(0,a.kt)("inlineCode",{parentName:"p"},"Richie")," on our dedicated ",(0,a.kt)("a",{parentName:"p",href:"https://demo.richie.education"},"demo site"),"."),(0,a.kt)("p",null,"Login/password are ",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"admin"),". The database is regularly flushed."),(0,a.kt)("h2",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Richie")," is a ",(0,a.kt)("strong",{parentName:"p"},"container-native application")," but can also be installed\n",(0,a.kt)("a",{parentName:"p",href:"/docs/2.7.1/native-installation"},"on your machine"),"."),(0,a.kt)("p",null,"For development, the project is defined using a ",(0,a.kt)("a",{parentName:"p",href:"../docker-compose.yml"},"docker-compose file")," and\nconsists of 4 services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"db"),": the ",(0,a.kt)("inlineCode",{parentName:"li"},"Postgresql")," database,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"elasticsearch"),": the search engine,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"app"),": the actual ",(0,a.kt)("inlineCode",{parentName:"li"},"DjangoCMS")," project with all our application code,"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"node"),": used for front-end related tasks, ",(0,a.kt)("em",{parentName:"li"},"i.e.")," transpiling ",(0,a.kt)("inlineCode",{parentName:"li"},"TypeScript")," sources, bundling\nthem into a JS package, and building the CSS files from Sass sources.")),(0,a.kt)("p",null,'At "France Universit\xe9 Num\xe9rique", we deploy our applications on ',(0,a.kt)("inlineCode",{parentName:"p"},"OpenShift"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"Kubernetes")," using\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openfun/arnold"},(0,a.kt)("inlineCode",{parentName:"a"},"Arnold")),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"First, make sure you have a recent version of Docker and\n",(0,a.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install"},"Docker Compose")," installed on your laptop:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker -v\n  Docker version 1.13.1, build 092cba3\n\n$ docker-compose --version\n  docker-compose version 1.17.1, build 6d101fb\n")),(0,a.kt)("p",null,"\u26a0\ufe0f You may need to run the following commands with ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," but this can be avoided by assigning your\nuser to the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," group."),(0,a.kt)("h3",{id:"project-bootstrap"},"Project bootstrap"),(0,a.kt)("p",null,"The easiest way to start working on the project is to use our ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ make bootstrap\n")),(0,a.kt)("p",null,"This command builds the ",(0,a.kt)("inlineCode",{parentName:"p"},"app")," container, installs front-end and back-end dependencies, builds the\nfront-end application and styles, and performs database migrations. It's a good idea to use this\ncommand each time you are pulling code from the project repository to avoid dependency-related or\nmigration-related issues."),(0,a.kt)("p",null,"Now that your ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," services are ready to be used, start the full CMS by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ make run\n")),(0,a.kt)("h3",{id:"adding-content"},"Adding content"),(0,a.kt)("p",null,"Once the CMS is up and running, you can create a superuser account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ make superuser\n")),(0,a.kt)("p",null,"You can create a basic demo site by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ make demo-site\n")),(0,a.kt)("p",null,"Note that if you don't create the demo site and start from a blank CMS, you will get some errors\nrequesting you to create some required root pages. So it is easier as a first approach to test the\nCMS with the demo site."),(0,a.kt)("p",null,"You should be able to view the site at ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8070"},"localhost:8070")),(0,a.kt)("h3",{id:"basic---connecting-richie-to-openedx"},"Basic - Connecting Richie to OpenEdx"),(0,a.kt)("p",null,"This project is pre-configured to connect with an OpenEdx instance started with\n","[OpenEdx Docker]","(",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker%5D"},"https://github.com/openfun/openedx-docker]"),", which provides a ready to use\ndocker-compose stack of OpenEdx in several flavors. Head over to\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker#readme"},"OpenEdx Docker README")," for instructions on how\nto bootstrap an instance."),(0,a.kt)("p",null,"Just start apps with ",(0,a.kt)("inlineCode",{parentName:"p"},"make run"),"."),(0,a.kt)("p",null,"Richie should respond on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8070")," and OpenEdx on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8073"),"."),(0,a.kt)("h3",{id:"advanced---connecting-richie-to-openedx"},"Advanced - Connecting Richie to OpenEdx"),(0,a.kt)("p",null,"If you want users to enroll on courses in OpenEdx directly from Richie via API calls, you should\nread ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.7.1/lms-connection#connecting-richie-and-openedx-over-tls"},"the advanced guide")," to connect\nRichie to OpenEdx over TLS."))}m.isMDXComponent=!0}}]);