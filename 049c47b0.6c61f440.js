(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=o(a),O=n,d=s["".concat(l,".").concat(O)]||s[O]||j[O]||b;return a?r.a.createElement(d,c(c({ref:t},p),{},{components:a})):r.a.createElement(d,c({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var p=2;p<b;p++)l[p]=a[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(7),b=(a(0),a(1006)),l={id:"appregistry",title:"AppRegistry"},c={unversionedId:"appregistry",id:"version-0.63/appregistry",isDocsHomePage:!1,title:"AppRegistry",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.63/appregistry.md",slug:"/appregistry",permalink:"/react-native/docs/appregistry",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/appregistry.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/api",previous:{title:"Appearance",permalink:"/react-native/docs/appearance"},next:{title:"AppState",permalink:"/react-native/docs/appstate"}},i=[{value:"Methods",id:"methods",children:[{value:"<code>setWrapperComponentProvider()</code>",id:"setwrappercomponentprovider",children:[]},{value:"<code>enableArchitectureIndicator()</code>",id:"enablearchitectureindicator",children:[]},{value:"<code>registerConfig()</code>",id:"registerconfig",children:[]},{value:"<code>registerComponent()</code>",id:"registercomponent",children:[]},{value:"<code>registerRunnable()</code>",id:"registerrunnable",children:[]},{value:"<code>registerSection()</code>",id:"registersection",children:[]},{value:"<code>getAppKeys()</code>",id:"getappkeys",children:[]},{value:"<code>getSectionKeys()</code>",id:"getsectionkeys",children:[]},{value:"<code>getSections()</code>",id:"getsections",children:[]},{value:"<code>getRunnable()</code>",id:"getrunnable",children:[]},{value:"<code>getRegistry()</code>",id:"getregistry",children:[]},{value:"<code>setComponentProviderInstrumentationHook()</code>",id:"setcomponentproviderinstrumentationhook",children:[]},{value:"<code>runApplication()</code>",id:"runapplication",children:[]},{value:"<code>unmountApplicationComponentAtRootTag()</code>",id:"unmountapplicationcomponentatroottag",children:[]},{value:"<code>registerHeadlessTask()</code>",id:"registerheadlesstask",children:[]},{value:"<code>registerCancellableHeadlessTask()</code>",id:"registercancellableheadlesstask",children:[]},{value:"<code>startHeadlessTask()</code>",id:"startheadlesstask",children:[]},{value:"<code>cancelHeadlessTask()</code>",id:"cancelheadlesstask",children:[]}]}],p={rightToc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{class:"banner-native-code-required"},Object(b.b)("h3",null,"Project with Native Code Required"),Object(b.b)("p",null,"If you are using the managed ",Object(b.b)("code",null,"expo-cli")," workflow there is only ever one entry component registered with ",Object(b.b)("code",null,"AppRegistry")," and it is handled automatically, you do not need to use this API.")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"AppRegistry")," is the JS entry point to running all React Native apps. App root components should register themselves with ",Object(b.b)("inlineCode",{parentName:"p"},"AppRegistry.registerComponent"),", then the native system can load the bundle for the app and then actually run the app when it's ready by invoking ",Object(b.b)("inlineCode",{parentName:"p"},"AppRegistry.runApplication"),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import { Text, AppRegistry } from 'react-native';\n\nconst App = (props) => (\n  <View>\n    <Text>App1</Text>\n  </View>\n);\n\nAppRegistry.registerComponent('Appname', () => App);\n")),Object(b.b)("p",null,'To "stop" an application when a view should be destroyed, call ',Object(b.b)("inlineCode",{parentName:"p"},"AppRegistry.unmountApplicationComponentAtRootTag")," with the tag that was passed into ",Object(b.b)("inlineCode",{parentName:"p"},"runApplication"),". These should always be used as a pair."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"AppRegistry")," should be required early in the ",Object(b.b)("inlineCode",{parentName:"p"},"require")," sequence to make sure the JS execution environment is setup before other modules are required."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"setwrappercomponentprovider"},Object(b.b)("inlineCode",{parentName:"h3"},"setWrapperComponentProvider()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setWrapperComponentProvider(provider)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"provider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ComponentProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"enablearchitectureindicator"},Object(b.b)("inlineCode",{parentName:"h3"},"enableArchitectureIndicator()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static enableArchitectureIndicator(enabled)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enabled"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registerconfig"},Object(b.b)("inlineCode",{parentName:"h3"},"registerConfig()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerConfig([config])\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"config"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"AppConfig"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(b.b)("p",null,"Valid ",Object(b.b)("inlineCode",{parentName:"p"},"AppConfig")," keys are:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'appKey' (string)- Required."),Object(b.b)("li",{parentName:"ul"},"'component' (ComponentProvider) - Optional."),Object(b.b)("li",{parentName:"ul"},"'run' (Function) - Optional."),Object(b.b)("li",{parentName:"ul"},"'section' (boolean) - Optional.")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registercomponent"},Object(b.b)("inlineCode",{parentName:"h3"},"registerComponent()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerComponent(appKey, componentProvider, section?)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ComponentProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"section"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"no")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registerrunnable"},Object(b.b)("inlineCode",{parentName:"h3"},"registerRunnable()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerRunnable(appKey, run)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"run"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registersection"},Object(b.b)("inlineCode",{parentName:"h3"},"registerSection()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerSection(appKey, component)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"component"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ComponentProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getappkeys"},Object(b.b)("inlineCode",{parentName:"h3"},"getAppKeys()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getAppKeys()\n")),Object(b.b)("p",null,"Returns an Array of AppKeys"),Object(b.b)("h3",{id:"getsectionkeys"},Object(b.b)("inlineCode",{parentName:"h3"},"getSectionKeys()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getSectionKeys()\n")),Object(b.b)("p",null,"Returns an Array of SectionKeys"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getsections"},Object(b.b)("inlineCode",{parentName:"h3"},"getSections()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getSections()\n")),Object(b.b)("p",null,"Returns all Runnables which is an object with key of ",Object(b.b)("inlineCode",{parentName:"p"},"AppKeys")," and value of type of ",Object(b.b)("inlineCode",{parentName:"p"},"Runnable")," which consist of:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'component' (ComponentProvider)."),Object(b.b)("li",{parentName:"ul"},"'run' (Function).")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getrunnable"},Object(b.b)("inlineCode",{parentName:"h3"},"getRunnable()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getRunnable(appKey)\n")),Object(b.b)("p",null,"Returns a ",Object(b.b)("inlineCode",{parentName:"p"},"Runnable")," object which consist of:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'component' (ComponentProvider)."),Object(b.b)("li",{parentName:"ul"},"'run' (Function).")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getregistry"},Object(b.b)("inlineCode",{parentName:"h3"},"getRegistry()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static getRegistry()\n")),Object(b.b)("p",null,"Returns a type ",Object(b.b)("inlineCode",{parentName:"p"},"Registry")," which consist of:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'sections' (Array of strings)."),Object(b.b)("li",{parentName:"ul"},"'runnables' (Runnables).")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setcomponentproviderinstrumentationhook"},Object(b.b)("inlineCode",{parentName:"h3"},"setComponentProviderInstrumentationHook()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setComponentProviderInstrumentationHook(hook)\n")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hook"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Function"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(b.b)("p",null,"A valid ",Object(b.b)("inlineCode",{parentName:"p"},"hook")," accepts the following as arguments:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"'component' (ComponentProvider)- Required."),Object(b.b)("li",{parentName:"ul"},"'scopedPerformanceLogger' (IPerformanceLogger)- Required.")),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"hook")," function returns a React Component"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"runapplication"},Object(b.b)("inlineCode",{parentName:"h3"},"runApplication()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static runApplication(appKey, appParameters)\n")),Object(b.b)("p",null,"Loads the JavaScript bundle and runs the app."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"appParameters"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unmountapplicationcomponentatroottag"},Object(b.b)("inlineCode",{parentName:"h3"},"unmountApplicationComponentAtRootTag()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static unmountApplicationComponentAtRootTag(rootTag)\n")),Object(b.b)("p",null,"Stops an application when a view should be destroyed."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rootTag"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registerheadlesstask"},Object(b.b)("inlineCode",{parentName:"h3"},"registerHeadlessTask()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerHeadlessTask(taskKey, taskProvider)\n")),Object(b.b)("p",null,"Register a headless task. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context."),Object(b.b)("p",null,"This is a way to run tasks in JavaScript while your app is in the background. It can be used, for example, to sync fresh data, handle push notifications, or play music."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TaskProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A valid ",Object(b.b)("inlineCode",{parentName:"li"},"TaskProvider")," is a function that returns a ",Object(b.b)("inlineCode",{parentName:"li"},"Task"),"."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("inlineCode",{parentName:"li"},"Task")," is a function that accepts any data as argument and returns a Promise that resolves to undefined.")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"registercancellableheadlesstask"},Object(b.b)("inlineCode",{parentName:"h3"},"registerCancellableHeadlessTask()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static registerCancellableHeadlessTask(taskKey, taskProvider, taskCancelProvider)\n")),Object(b.b)("p",null,"Register a headless task which can be cancelled. A headless task is a bit of code that runs without a UI. @param taskKey the key associated with this task @param taskProvider a promise returning function that takes some data passed from the native side as the only argument; when the promise is resolved or rejected the native side is notified of this event and it may decide to destroy the JS context. @param taskCancelProvider a void returning function that takes no arguments; when a cancellation is requested, the function being executed by taskProvider should wrap up and return ASAP."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TaskProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskCancelProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TaskCancelProvider"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See below.")))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"A valid ",Object(b.b)("inlineCode",{parentName:"li"},"TaskProvider")," is a function that returns a ",Object(b.b)("inlineCode",{parentName:"li"},"Task"),"."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("inlineCode",{parentName:"li"},"Task")," is a function that accepts any data as argument and returns a Promise that resolves to undefined."),Object(b.b)("li",{parentName:"ul"},"A valid ",Object(b.b)("inlineCode",{parentName:"li"},"TaskCancelProvider")," is a function that returns a ",Object(b.b)("inlineCode",{parentName:"li"},"TaskCanceller"),"."),Object(b.b)("li",{parentName:"ul"},"A ",Object(b.b)("inlineCode",{parentName:"li"},"TaskCanceller")," is a function that accepts no argument and returns void.")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"startheadlesstask"},Object(b.b)("inlineCode",{parentName:"h3"},"startHeadlessTask()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static startHeadlessTask(taskId, taskKey, data)\n")),Object(b.b)("p",null,"Only called from native code. Starts a headless task."),Object(b.b)("p",null,"@param taskId the native id for this task instance to keep track of its execution @param taskKey the key for the task to start @param data the data to pass to the task"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"cancelheadlesstask"},Object(b.b)("inlineCode",{parentName:"h3"},"cancelHeadlessTask()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static cancelHeadlessTask(taskId, taskKey)\n")),Object(b.b)("p",null,"Only called from native code. Cancels a headless task."),Object(b.b)("p",null,"@param taskId the native id for this task instance that was used when startHeadlessTask was called @param taskKey the key for the task that was used when startHeadlessTask was called"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskId"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"taskKey"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))))}o.isMDXComponent=!0}}]);