"use strict";(self.webpackChunkrichie_education_docs=self.webpackChunkrichie_education_docs||[]).push([[7682],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(t),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return t?r.createElement(m,s(s({ref:n},l),{},{components:t})):r.createElement(m,s({ref:n},l))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22922:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var r=t(87462),o=t(63366),i=(t(67294),t(3905)),s=["components"],a={id:"synchronizing-course-runs",title:"Synchronizing course runs between Richie and OpenEdX",sidebar_label:"Synchronizing course runs"},c=void 0,u={unversionedId:"synchronizing-course-runs",id:"version-2.14.1/synchronizing-course-runs",title:"Synchronizing course runs between Richie and OpenEdX",description:"Richie can receive automatic course runs updates on a dedicated API endpoint.",source:"@site/versioned_docs/version-2.14.1/synchronizing-course-runs.md",sourceDirName:".",slug:"/synchronizing-course-runs",permalink:"/docs/synchronizing-course-runs",draft:!1,tags:[],version:"2.14.1",lastUpdatedBy:"Mehdi Benadda",lastUpdatedAt:1655108611,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"synchronizing-course-runs",title:"Synchronizing course runs between Richie and OpenEdX",sidebar_label:"Synchronizing course runs"}},l={},d=[{value:"Configure a shared secret",id:"configure-a-shared-secret",level:2},{value:"Configure LMS backends",id:"configure-lms-backends",level:2},{value:"Make a synchronization query",id:"make-a-synchronization-query",level:2}],p={toc:d};function h(e){var n=e.components,t=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Richie can receive automatic course runs updates on a dedicated API endpoint."),(0,i.kt)("h2",{id:"configure-a-shared-secret"},"Configure a shared secret"),(0,i.kt)("p",null,"In order to activate the course run synchronization API endpoint, you first need to configure the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_COURSE_RUN_SYNC_SECRETS")," setting with one or more secrets:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'RICHIE_COURSE_RUN_SYNC_SECRETS = ["SharedSecret", "OtherSharedSecret"]\n')),(0,i.kt)("p",null,"This setting collects several secrets in order to allow rotating them without any downtime. Any\nof the secrets listed in this setting can be used to sign your queries. "),(0,i.kt)("p",null,"Your secret should be shared with the LMS or distant system that needs to synchronize its course\nruns with the Richie instance. Richie will try the declared secrets one by one until it finds\none that matches the signature sent by the remote system."),(0,i.kt)("h2",{id:"configure-lms-backends"},"Configure LMS backends"),(0,i.kt)("p",null,"You then need to configure the LMS handler via the ",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," setting as explained\nin our ",(0,i.kt)("a",{parentName:"p",href:"lms-backends#configuring-the-lms-handler"},"guide on configuring LMS backends"),". This is\nrequired if you want Richie to create a new course run automatically and associate it with the\nright course when the resource link submitted to the course run synchronization API endpoint is\nunknown to Richie."),(0,i.kt)("p",null,"Each course run can be set to react differently to a synchronization request, thanks to the\n",(0,i.kt)("inlineCode",{parentName:"p"},"sync_mode")," field. This field can be set to one of the following values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"manual"),": this course run is ignored by the course runs synchronization script. In this case,\nthe course run can only be edited manually using the DjangoCMS frontend editing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync_to_draft"),": only the draft version of this course run is synchronized. A manual\npublication is necessary for the update to be visible on the public site."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sync_to_public"),": the public version of this course run is updated by the synchronization\nscript. As a results, updates are directly visible on the public site without further\npublication by a staff user in Richie.")),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"lms-backends#default_course_run_sync_mode"},"DEFAULT_COURSE_RUN_SYNC_MODE parameter")," in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"RICHIE_LMS_BACKENDS")," setting, defines what default value is used for new course runs."),(0,i.kt)("h2",{id:"make-a-synchronization-query"},"Make a synchronization query"),(0,i.kt)("p",null,"You can refer to the ",(0,i.kt)("a",{parentName:"p",href:"api/course-run-synchronization-api"},"documentation of the course run synchronization API")," for details\non the query expected by this endpoint."),(0,i.kt)("p",null,"We also share here our sample code to call this synchronization endpoint from OpenEdX. This code\nshould run on the ",(0,i.kt)("inlineCode",{parentName:"p"},"post_publish")," signal emitted by the OpenEdX ",(0,i.kt)("inlineCode",{parentName:"p"},"cms")," application each time a\ncourse run is modified and published."),(0,i.kt)("p",null,"Or you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/fccn/richie-openedx-sync"},"Richie Open edX Synchronization"),"\nwhich is based on the following code sample and also includes the enrollment count."),(0,i.kt)("p",null,"Given a ",(0,i.kt)("inlineCode",{parentName:"p"},"COURSE_HOOK")," setting defined as follows in your OpenEdX instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'COURSE_HOOK = {\n    "secret": "SharedSecret",\n    "url": "https://richie.example.com/api/v1.0/course-runs-sync/",\n}\n')),(0,i.kt)("p",null,"The code for the synchronization function in OpenEdX could look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import hashlib\nimport hmac\nimport json\n\nfrom django.conf import settings\n\nfrom microsite_configuration import microsite\nimport requests\nfrom xmodule.modulestore.django import modulestore\n\n\ndef update_course(course_key, *args, **kwargs):\n    """Synchronize an OpenEdX course, identified by its course key, with a Richie instance."""\n    course = modulestore().get_course(course_key)\n    edxapp_domain = microsite.get_value("site_domain", settings.LMS_BASE)\n\n    data = {\n        "resource_link": "https://{:s}/courses/{!s}/info".format(\n            edxapp_domain, course_key\n        ),\n        "start": course.start and course.start.isoformat(),\n        "end": course.end and course.end.isoformat(),\n        "enrollment_start": course.enrollment_start and course.enrollment_start.isoformat(),\n        "enrollment_end": course.enrollment_end and course.enrollment_end.isoformat(),\n        "languages": [course.language or settings.LANGUAGE_CODE],\n    }\n\n    signature = hmac.new(\n        setting.COURSE_HOOK["secret"].encode("utf-8"),\n        msg=json.dumps(data).encode("utf-8"),\n        digestmod=hashlib.sha256,\n    ).hexdigest()\n\n    response = requests.post(\n        setting.COURSE_HOOK["url"],\n        json=data,\n        headers={"Authorization": "SIG-HMAC-SHA256 {:s}".format(signature)},\n    )\n')),(0,i.kt)("p",null,"Thanks to the signal emitted in OpenEdX, this function can then be triggered each time a course\nis modified and published:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from django.dispatch import receiver\nfrom xmodule.modulestore.django import SignalHandler\n\n\n@receiver(SignalHandler.course_published, dispatch_uid='update_course_on_publish')\ndef update_course_on_publish(sender, course_key, **kwargs):\n    update_course(course_key)\n")))}h.isMDXComponent=!0}}]);