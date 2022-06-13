"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[8009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(m,r(r({ref:t},p),{},{components:n})):o.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8085:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],l={id:"tls-connection",title:"Connecting Richie and OpenEdX over TLS for development",sidebar_label:"TLS connection for development"},c=void 0,s={unversionedId:"tls-connection",id:"version-2.9.1/tls-connection",title:"Connecting Richie and OpenEdX over TLS for development",description:"Purpose",source:"@site/versioned_docs/version-2.9.1/tls-connection.md",sourceDirName:".",slug:"/tls-connection",permalink:"/docs/2.9.1/tls-connection",draft:!1,tags:[],version:"2.9.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"tls-connection",title:"Connecting Richie and OpenEdX over TLS for development",sidebar_label:"TLS connection for development"}},p={},d=[{value:"Purpose",id:"purpose",level:2},{value:"Run OpenEdx and Richie on sibling domains",id:"run-openedx-and-richie-on-sibling-domains",level:2},{value:"Enable TLS",id:"enable-tls",level:2},{value:"1. Install mkcert and its Certificate Authority",id:"1-install-mkcert-and-its-certificate-authority",level:3},{value:"a. Install <code>mkcert</code> on your local machine",id:"a-install-mkcert-on-your-local-machine",level:4},{value:"b. Install Mkcert Certificate Authority",id:"b-install-mkcert-certificate-authority",level:4},{value:"2. On Richie",id:"2-on-richie",level:3},{value:"3. On OpenEdx",id:"3-on-openedx",level:3},{value:"4. Start Richie and OpenEdx over SSL",id:"4-start-richie-and-openedx-over-ssl",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("p",null,"By default in the docker-compose environment for development, Richie is hosted on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:8070"),"\nand uses a fake LMS backend (",(0,i.kt)("inlineCode",{parentName:"p"},"base.BaseLMSBackend"),") as you can see if you check the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," setting in ",(0,i.kt)("inlineCode",{parentName:"p"},"env.d/development"),"."),(0,i.kt)("p",null,"This base backend uses session storage to fake enrollments to course runs."),(0,i.kt)("p",null,"If you want to test real enrollments to an OpenEdX instance hosted on an external domain, OpenEdX\nwill need to generate a CORS CSRF Cookie. This cookie is flagged as secure, which implies that\nwe are not able to use it without SSL connections."),(0,i.kt)("p",null,"So if you need to use the OpenEdx API to Create, Update or Delete data from Richie, you have to\nenable SSL on Richie and OpenEdx on your development environment, which requires a little bit more\nconfiguration. Below, we explain how to serve OpenEdx and Richie over SSL."),(0,i.kt)("h2",{id:"run-openedx-and-richie-on-sibling-domains"},"Run OpenEdx and Richie on sibling domains"),(0,i.kt)("p",null,"Richie and OpenEdx must be on sibling domains ie domains that both are subdomains of the same\nparent domain, because sharing secure Cookies on ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," or unrelated domains is blocked.\nTo do that, you have to edit your hosts file (",(0,i.kt)("em",{parentName:"p"},".e.g")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," on a ","*","NIX system) to alias a\ndomain ",(0,i.kt)("inlineCode",{parentName:"p"},"local.dev")," with two subdomains ",(0,i.kt)("inlineCode",{parentName:"p"},"richie")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"edx")," pointing to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# /etc/hosts\n127.0.0.1 richie.local.dev\n127.0.0.1 edx.local.dev\n")),(0,i.kt)("p",null,"Once this has been done, the OpenEdx app should respond on ",(0,i.kt)("a",{parentName:"p",href:"http://edx.local.dev:8073"},"http://edx.local.dev:8073"),"\nand Richie should respond on ",(0,i.kt)("a",{parentName:"p",href:"http://richie.local.dev:8070"},"http://richie.local.dev:8070"),". The Richie application should now be\nable to make CORS XHR requests to the OpenEdX application."),(0,i.kt)("h2",{id:"enable-tls"},"Enable TLS"),(0,i.kt)("p",null,"If you want to develop with OpenEdx as LMS backend of the Richie application (see the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," setting), you need to enable TLS for your development servers.\nBoth Richie and OpenEdx use Nginx as reverse proxy which eases the SSL setup."),(0,i.kt)("h3",{id:"1-install-mkcert-and-its-certificate-authority"},"1. Install mkcert and its Certificate Authority"),(0,i.kt)("p",null,"First you will need to install mkcert and its Certificate Authority.\n",(0,i.kt)("a",{parentName:"p",href:"https://mkcert.org/"},"mkcert")," is a little util to ease local certificate generation."),(0,i.kt)("h4",{id:"a-install-mkcert-on-your-local-machine"},"a. Install ",(0,i.kt)("inlineCode",{parentName:"h4"},"mkcert")," on your local machine"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/FiloSottile/mkcert"},"Read the doc")),(0,i.kt)("li",{parentName:"ul"},"Linux users who do not want to use linuxbrew : ",(0,i.kt)("a",{parentName:"li",href:"https://www.prado.lt/how-to-create-locally-trusted-ssl-certificates-in-local-development-environment-on-linux-with-mkcert"},"read this article"),".")),(0,i.kt)("h4",{id:"b-install-mkcert-certificate-authority"},"b. Install Mkcert Certificate Authority"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkcert -install")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you do not want to use mkcert, you can generate ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/how-to-get-https-working-on-your-local-development-environment-in-5-minutes-7af615770eec/"},"CA and certificate with openssl"),".\nYou will have to put your certificate and its key in the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker/files/etc/nginx/ssl")," directory\nand respectively name them ",(0,i.kt)("inlineCode",{parentName:"p"},"richie.local.dev.pem")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"richie.local.dev.key"),".")),(0,i.kt)("h3",{id:"2-on-richie"},"2. On Richie"),(0,i.kt)("p",null,"Then, to setup the SSL configuration with mkcert, run our helper script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/setup-ssl\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you do not want to use mkcert, read the instructions above to generate a Richie certificate,\nand run the helper script with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--no-cert")," option:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/setup-ssl --no-cert\n")),(0,i.kt)("h3",{id:"3-on-openedx"},"3. On OpenEdx"),(0,i.kt)("p",null,"In the same way, you also have to enable SSL in OpenEdx, by updating the Nginx configuration.\nRead how to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openfun/openedx-docker/blob/master/docs/richie-configuration.md#richie-configuration"},"enable SSL on OpenEdx"),"."),(0,i.kt)("p",null,"Once this has been done, the OpenEdx app should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://edx.local.dev:8073"},"https://edx.local.dev:8073"),"\nand Richie should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://richie.local.dev:8070"},"https://richie.local.dev:8070"),". The richie application should be able\nto share cookies with the OpenEdx application to allow CORS CSRF Protected XHR requests."),(0,i.kt)("h3",{id:"4-start-richie-and-openedx-over-ssl"},"4. Start Richie and OpenEdx over SSL"),(0,i.kt)("p",null,"Now, the OpenEdx application should respond on ",(0,i.kt)("a",{parentName:"p",href:"https://edx.local.dev:8073"},"https://edx.local.dev:8073"),", and Richie\non ",(0,i.kt)("a",{parentName:"p",href:"https://richie.local.dev:8070"},"https://richie.local.dev:8070")," without browser warning about the certificate validity."),(0,i.kt)("p",null,"You need to follow these steps once. The next time you want to use SSL, you can run the following\ncommand on both the Richie and OpenEdX projects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ make run-ssl\n")),(0,i.kt)("p",null,"Of course, you can still run apps without ssl by using:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ make run\n")))}h.isMDXComponent=!0}}]);