(window.webpackJsonp=window.webpackJsonp||[]).push([[800],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return p}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var d=b.a.createContext({}),o=function(e){var t=b.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=o(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=o(a),j=n,p=s["".concat(l,".").concat(j)]||s[j]||O[j]||r;return a?b.a.createElement(p,c(c({ref:t},d),{},{components:a})):b.a.createElement(p,c({ref:t},d))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<r;d++)l[d]=a[d];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},870:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(7),r=(a(0),a(1006)),l={id:"statusbar",title:"StatusBar"},c={unversionedId:"statusbar",id:"statusbar",isDocsHomePage:!1,title:"StatusBar",description:"Component to control the app status bar.",source:"@site/../docs/statusbar.md",slug:"/statusbar",permalink:"/react-native/docs/next/statusbar",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/statusbar.md",version:"current",lastUpdatedAt:1598176699,sidebar:"components",previous:{title:"SectionList",permalink:"/react-native/docs/next/sectionlist"},next:{title:"Switch",permalink:"/react-native/docs/next/switch"}},i=[{value:"Usage with Navigator",id:"usage-with-navigator",children:[]},{value:"Imperative API",id:"imperative-api",children:[]},{value:"Constants",id:"constants",children:[{value:'<code>currentHeight</code> <div class="label android">Android</div>',id:"currentheight-android",children:[]}]},{value:"Props",id:"props",children:[{value:"<code>animated</code>",id:"animated",children:[]},{value:'<code>backgroundColor</code> <div class="label android">Android</div>',id:"backgroundcolor-android",children:[]},{value:"<code>barStyle</code>",id:"barstyle",children:[]},{value:"<code>hidden</code>",id:"hidden",children:[]},{value:'<code>networkActivityIndicatorVisible</code> <div class="label ios">iOS</div>',id:"networkactivityindicatorvisible-ios",children:[]},{value:'<code>showHideTransition</code> <div class="label ios">iOS</div>',id:"showhidetransition-ios",children:[]},{value:'<code>translucent</code> <div class="label android">Android</div>',id:"translucent-android",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>popStackEntry()</code>",id:"popstackentry",children:[]},{value:"<code>pushStackEntry()</code>",id:"pushstackentry",children:[]},{value:"<code>replaceStackEntry()</code>",id:"replacestackentry",children:[]},{value:'<code>setBackgroundColor()</code> <div class="label android">Android</div>',id:"setbackgroundcolor-android",children:[]},{value:"<code>setBarStyle()</code>",id:"setbarstyle",children:[]},{value:"<code>setHidden()</code>",id:"sethidden",children:[]},{value:'<code>setNetworkActivityIndicatorVisible()</code> <div class="label ios">iOS</div>',id:"setnetworkactivityindicatorvisible-ios",children:[]},{value:'<code>setTranslucent()</code> <div class="label android">Android</div>',id:"settranslucent-android",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"StatusBarAnimation",id:"statusbaranimation",children:[]},{value:"StatusBarStyle",id:"statusbarstyle",children:[]}]}],d={rightToc:i};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Component to control the app status bar."),Object(r.b)("h3",{id:"usage-with-navigator"},"Usage with Navigator"),Object(r.b)("p",null,"It is possible to have multiple ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components mounted at the same time. The props will be merged in the order the ",Object(r.b)("inlineCode",{parentName:"p"},"StatusBar")," components were mounted."),Object(r.b)("div",{className:"snack-player","data-snack-name":"StatusBar Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Button%2C%20Platform%2C%20SafeAreaView%2C%20StatusBar%2C%20StyleSheet%2C%20Text%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20STYLES%20%3D%20%5B'default'%2C%20'dark-content'%2C%20'light-content'%5D%3B%0Aconst%20TRANSITIONS%20%3D%20%5B'fade'%2C%20'slide'%2C%20'none'%5D%3B%0A%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Bhidden%2C%20setHidden%5D%20%3D%20useState(false)%3B%0A%20%20const%20%5BstatusBarStyle%2C%20setStatusBarStyle%5D%20%3D%20useState(STYLES%5B0%5D)%3B%0A%20%20const%20%5BstatusBarTransition%2C%20setStatusBarTransition%5D%20%3D%20useState(TRANSITIONS%5B0%5D)%3B%0A%0A%20%20const%20changeStatusBarVisibility%20%3D%20()%20%3D%3E%20setHidden(!hidden)%3B%0A%0A%20%20const%20changeStatusBarStyle%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20styleId%20%3D%20STYLES.indexOf(statusBarStyle)%20%2B%201%3B%0A%20%20%20%20if%20(styleId%20%3D%3D%3D%20STYLES.length)%20%7B%0A%20%20%20%20%20%20setStatusBarStyle(STYLES%5B0%5D)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setStatusBarStyle(STYLES%5BstyleId%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20const%20changeStatusBarTransition%20%3D%20()%20%3D%3E%20%7B%0A%20%20%20%20const%20transition%20%3D%20TRANSITIONS.indexOf(statusBarTransition)%20%2B%201%3B%0A%20%20%20%20if%20(transition%20%3D%3D%3D%20TRANSITIONS.length)%20%7B%0A%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5B0%5D)%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20setStatusBarTransition(TRANSITIONS%5Btransition%5D)%3B%0A%20%20%20%20%7D%0A%20%20%7D%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CSafeAreaView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CStatusBar%0A%20%20%20%20%20%20%20%20animated%3D%7Btrue%7D%0A%20%20%20%20%20%20%20%20backgroundColor%3D%22%2361dafb%22%0A%20%20%20%20%20%20%20%20barStyle%3D%7BstatusBarStyle%7D%0A%20%20%20%20%20%20%20%20showHideTransition%3D%7BstatusBarTransition%7D%0A%20%20%20%20%20%20%20%20hidden%3D%7Bhidden%7D%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%0A%20%20%20%20%20%20%20%20StatusBar%20Visibility%3A%7B'%5Cn'%7D%0A%20%20%20%20%20%20%20%20%7Bhidden%20%3F%20'Hidden'%20%3A%20'Visible'%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%0A%20%20%20%20%20%20%20%20StatusBar%20Style%3A%7B'%5Cn'%7D%0A%20%20%20%20%20%20%20%20%7BstatusBarStyle%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%0A%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.textStyle%7D%3E%0A%20%20%20%20%20%20%20%20%20%20StatusBar%20Transition%3A%7B'%5Cn'%7D%0A%20%20%20%20%20%20%20%20%20%20%7BstatusBarTransition%7D%0A%20%20%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%20%20)%20%3A%20null%7D%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.buttonsContainer%7D%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Toggle%20StatusBar%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BchangeStatusBarVisibility%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20title%3D%22Change%20StatusBar%20Style%22%0A%20%20%20%20%20%20%20%20%20%20onPress%3D%7BchangeStatusBarStyle%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%7BPlatform.OS%20%3D%3D%3D%20'ios'%20%3F%20(%0A%20%20%20%20%20%20%20%20%20%20%3CButton%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Change%20StatusBar%20Transition%22%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7BchangeStatusBarTransition%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20)%20%3A%20null%7D%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FSafeAreaView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20backgroundColor%3A%20'%23ECF0F1'%0A%20%20%7D%2C%0A%20%20buttonsContainer%3A%20%7B%0A%20%20%20%20padding%3A%2010%0A%20%20%7D%2C%0A%20%20textStyle%3A%20%7B%0A%20%20%20%20textAlign%3A%20'center'%2C%0A%20%20%20%20marginBottom%3A%208%0A%20%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(r.b)("h3",{id:"imperative-api"},"Imperative API"),Object(r.b)("p",null,"For cases where using a component is not ideal, there is also an imperative API exposed as static functions on the component. It is however not recommended to use the static API and the component for the same prop because any value set by the static API will get overridden by the one set by the component in the next render."),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"constants"},"Constants"),Object(r.b)("h3",{id:"currentheight-android"},Object(r.b)("inlineCode",{parentName:"h3"},"currentHeight")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"The height of the status bar, which includes the notch height, if present."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)("h3",{id:"animated"},Object(r.b)("inlineCode",{parentName:"h3"},"animated")),Object(r.b)("p",null,"If the transition between status bar property changes should be animated. Supported for ",Object(r.b)("inlineCode",{parentName:"p"},"backgroundColor"),", ",Object(r.b)("inlineCode",{parentName:"p"},"barStyle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"hidden")," properties."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"backgroundcolor-android"},Object(r.b)("inlineCode",{parentName:"h3"},"backgroundColor")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"The background color of the status bar."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"colors"}),"color")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"default system StatusBar background color, or ",Object(r.b)("inlineCode",{parentName:"td"},"'black'")," if not defined")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"barstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"barStyle")),Object(r.b)("p",null,"Sets the color of the status bar text."),Object(r.b)("p",null,"On Android, this will only have an impact on API versions 23 and above."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"statusbar#statusbarstyle"}),"StatusBarStyle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'default'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"hidden"},Object(r.b)("inlineCode",{parentName:"h3"},"hidden")),Object(r.b)("p",null,"If the status bar is hidden."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"networkactivityindicatorvisible-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"networkActivityIndicatorVisible")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"If the network activity indicator should be visible."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"showhidetransition-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"showHideTransition")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("p",null,"The transition effect when showing and hiding the status bar using the ",Object(r.b)("inlineCode",{parentName:"p"},"hidden")," prop."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"statusbar#statusbaranimation"}),"StatusBarAnimation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'fade'"))))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"translucent-android"},Object(r.b)("inlineCode",{parentName:"h3"},"translucent")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("p",null,"If the status bar is translucent. When translucent is set to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", the app will draw under the status bar. This is useful when using a semi transparent status bar color."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"false"))))),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"popstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"popStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static popStackEntry(entry: any)\n")),Object(r.b)("p",null,"Get and remove the last StatusBar entry from the stack."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry"),".")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"pushstackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"pushStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static pushStackEntry(props: any)\n")),Object(r.b)("p",null,"Push a StatusBar entry onto the stack. The return value should be passed to ",Object(r.b)("inlineCode",{parentName:"p"},"popStackEntry")," when complete."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"replacestackentry"},Object(r.b)("inlineCode",{parentName:"h3"},"replaceStackEntry()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static replaceStackEntry(entry: any, props: any)\n")),Object(r.b)("p",null,"Replace an existing StatusBar stack entry with new props."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"entry ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Entry returned from ",Object(r.b)("inlineCode",{parentName:"td"},"pushStackEntry")," to replace.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"props ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object containing the StatusBar props to use in the replacement stack entry.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbackgroundcolor-android"},Object(r.b)("inlineCode",{parentName:"h3"},"setBackgroundColor()")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBackgroundColor(color: string, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the background color for the status bar."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Background color.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setbarstyle"},Object(r.b)("inlineCode",{parentName:"h3"},"setBarStyle()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setBarStyle(style: StatusBarStyle, [animated]: boolean)\n")),Object(r.b)("p",null,"Set the status bar style."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"style ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"statusbar#statusbarstyle"}),"StatusBarStyle")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Status bar style to set.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animated"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animate the style change.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"sethidden"},Object(r.b)("inlineCode",{parentName:"h3"},"setHidden()")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setHidden(hidden: boolean, [animation]: StatusBarAnimation)\n")),Object(r.b)("p",null,"Show or hide the status bar."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"hidden ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Hide the status bar.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"animation ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"statusbar#statusbaranimation"}),"StatusBarAnimation")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Animation when changing the status bar hidden property.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnetworkactivityindicatorvisible-ios"},Object(r.b)("inlineCode",{parentName:"h3"},"setNetworkActivityIndicatorVisible()")," ",Object(r.b)("div",{class:"label ios"},"iOS")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setNetworkActivityIndicatorVisible(visible: boolean)\n")),Object(r.b)("p",null,"Control the visibility of the network activity indicator."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Show the indicator.")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"settranslucent-android"},Object(r.b)("inlineCode",{parentName:"h3"},"setTranslucent()")," ",Object(r.b)("div",{class:"label android"},"Android")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static setTranslucent(translucent: boolean)\n")),Object(r.b)("p",null,"Control the translucency of the status bar."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"translucent ",Object(r.b)("div",{class:"label basic required"},"Required")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set as translucent.")))),Object(r.b)("h2",{id:"type-definitions"},"Type Definitions"),Object(r.b)("h3",{id:"statusbaranimation"},"StatusBarAnimation"),Object(r.b)("p",null,"Status bar animation type for transitions on the iOS."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'fade'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fade animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'slide'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Slide animation")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'none'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No animation")))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"statusbarstyle"},"StatusBarStyle"),Object(r.b)("p",null,"Status bar style type."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"enum")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Constants:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'default'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default status bar style (dark for iOS, light for Android)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'light-content'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dark background, white texts and icons")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"'dark-content'")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Light background, dark texts and icons (requires API>=23 on Android)")))))}o.isMDXComponent=!0}}]);