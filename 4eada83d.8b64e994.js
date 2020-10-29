(window.webpackJsonp=window.webpackJsonp||[]).push([[305],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(a),s=n,O=p["".concat(c,".").concat(s)]||p[s]||u[s]||b;return a?r.a.createElement(O,l(l({ref:t},i),{},{components:a})):r.a.createElement(O,l({ref:t},i))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var i=2;i<b;i++)c[i]=a[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},390:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(7),b=(a(0),a(1006)),c={id:"touchablenativefeedback",title:"TouchableNativeFeedback"},l={unversionedId:"touchablenativefeedback",id:"touchablenativefeedback",isDocsHomePage:!1,title:"TouchableNativeFeedback",description:"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the Pressable API.",source:"@site/../docs/touchablenativefeedback.md",slug:"/touchablenativefeedback",permalink:"/react-native/docs/next/touchablenativefeedback",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/touchablenativefeedback.md",version:"current",lastUpdatedAt:1598019764,sidebar:"components",previous:{title:"DrawerLayoutAndroid",permalink:"/react-native/docs/next/drawerlayoutandroid"},next:{title:"InputAccessoryView",permalink:"/react-native/docs/next/inputaccessoryview"}},o=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"TouchableWithoutFeedback Props",id:"touchablewithoutfeedback-props",children:[]},{value:"<code>background</code>",id:"background",children:[]},{value:"<code>useForeground</code>",id:"useforeground",children:[]},{value:"<code>hasTVPreferredFocus</code>",id:"hastvpreferredfocus",children:[]},{value:"<code>nextFocusDown</code>",id:"nextfocusdown",children:[]},{value:"<code>nextFocusForward</code>",id:"nextfocusforward",children:[]},{value:"<code>nextFocusLeft</code>",id:"nextfocusleft",children:[]},{value:"<code>nextFocusRight</code>",id:"nextfocusright",children:[]},{value:"<code>nextFocusUp</code>",id:"nextfocusup",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>SelectableBackground()</code>",id:"selectablebackground",children:[]},{value:"<code>SelectableBackgroundBorderless()</code>",id:"selectablebackgroundborderless",children:[]},{value:"<code>Ripple()</code>",id:"ripple",children:[]},{value:"<code>canUseNativeForeground()</code>",id:"canusenativeforeground",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"If you're looking for a more extensive and future-proof way to handle touch-based input, check out the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/next/pressable"}),"Pressable")," API.")),Object(b.b)("p",null,"A wrapper for making views respond properly to touches (Android only). On Android this component uses native state drawable to display touch feedback."),Object(b.b)("p",null,"At the moment it only supports having a single View instance as a child node, as it's implemented by replacing that View with another instance of RCTView node with some additional properties set."),Object(b.b)("p",null,"Background drawable of native feedback touchable can be customized with ",Object(b.b)("inlineCode",{parentName:"p"},"background")," property."),Object(b.b)("h2",{id:"example"},"Example"),Object(b.b)("div",{className:"snack-player","data-snack-name":"TouchableNativeFeedback Android Component Example","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20Text%2C%20View%2C%20StyleSheet%2C%20TouchableNativeFeedback%20%7D%20from%20%22react-native%22%3B%0Aimport%20Constants%20from%20%22expo-constants%22%3B%0A%0Aconst%20randomHexColor%20%3D%20()%20%3D%3E%20%7B%0A%20%20return%20%22%23000000%22.replace(%2F0%2Fg%2C%20function()%20%7B%0A%20%20%20%20return%20(~~(Math.random()%20*%2016)).toString(16)%3B%0A%20%20%7D)%3B%0A%7D%3B%0Aconst%20App%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5BrippleColor%2C%20setRippleColor%5D%20%3D%20useState(randomHexColor())%3B%0A%20%20const%20%5BrippleOverflow%2C%20setRippleOverflow%5D%20%3D%20useState(false)%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CTouchableNativeFeedback%0A%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20setRippleColor(randomHexColor())%3B%0A%20%20%20%20%20%20%20%20%20%20setRippleOverflow(!rippleOverflow)%3B%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20background%3D%7BTouchableNativeFeedback.Ripple(rippleColor%2C%20rippleOverflow)%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.touchable%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7Bstyles.text%7D%3ETouchableNativeFeedback%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FTouchableNativeFeedback%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%2C%0A%20%20%20%20paddingTop%3A%20Constants.statusBarHeight%2C%0A%20%20%20%20backgroundColor%3A%20%22%23ecf0f1%22%2C%0A%20%20%20%20padding%3A%208%0A%20%20%7D%2C%0A%20%20touchable%3A%20%7B%20flex%3A%200.5%2C%20borderColor%3A%20%22black%22%2C%20borderWidth%3A%201%20%7D%2C%0A%20%20text%3A%20%7B%20alignSelf%3A%20%22center%22%20%7D%0A%7D)%3B%0A%0Aexport%20default%20App%3B","data-snack-platform":"web","data-snack-supported-platforms":"android","data-snack-theme":"light","data-snack-preview":"true"}),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("h3",{id:"touchablewithoutfeedback-props"},Object(b.b)("a",Object(n.a)({parentName:"h3"},{href:"/react-native/docs/next/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props")),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/next/touchablewithoutfeedback#props"}),"TouchableWithoutFeedback Props"),"."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"background"},Object(b.b)("inlineCode",{parentName:"h3"},"background")),Object(b.b)("p",null,"Determines the type of background drawable that's going to be used to display feedback. It takes an object with ",Object(b.b)("inlineCode",{parentName:"p"},"type")," property and extra data depending on the ",Object(b.b)("inlineCode",{parentName:"p"},"type"),". It's recommended to use one of the static methods to generate that dictionary."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"backgroundPropType"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"useforeground"},Object(b.b)("inlineCode",{parentName:"h3"},"useForeground")),Object(b.b)("p",null,"Set to true to add the ripple effect to the foreground of the view, instead of the background. This is useful if one of your child views has a background of its own, or you're e.g. displaying images, and you don't want the ripple to be covered by them."),Object(b.b)("p",null,"Check TouchableNativeFeedback.canUseNativeForeground() first, as this is only available on Android 6.0 and above. If you try to use this on older versions you will get a warning and fallback to background."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"hastvpreferredfocus"},Object(b.b)("inlineCode",{parentName:"h3"},"hasTVPreferredFocus")),Object(b.b)("p",null,"TV preferred focus (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusdown"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusDown")),Object(b.b)("p",null,"TV next focus down (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusforward"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusForward")),Object(b.b)("p",null,"TV next focus forward (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusleft"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusLeft")),Object(b.b)("p",null,"TV next focus left (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusright"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusRight")),Object(b.b)("p",null,"TV next focus right (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"nextfocusup"},Object(b.b)("inlineCode",{parentName:"h3"},"nextFocusUp")),Object(b.b)("p",null,"TV next focus up (see documentation for the View component)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Platform"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Android")))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"selectablebackground"},Object(b.b)("inlineCode",{parentName:"h3"},"SelectableBackground()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackground(rippleRadius: ?number)\n")),Object(b.b)("p",null,"Creates an object that represents android theme's default background for selectable elements (?android:attr/selectableItemBackground). ",Object(b.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"selectablebackgroundborderless"},Object(b.b)("inlineCode",{parentName:"h3"},"SelectableBackgroundBorderless()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static SelectableBackgroundBorderless(rippleRadius: ?number)\n")),Object(b.b)("p",null,"Creates an object that represent android theme's default background for borderless selectable elements (?android:attr/selectableItemBackgroundBorderless). Available on android API level 21+. ",Object(b.b)("inlineCode",{parentName:"p"},"rippleRadius")," parameter controls the radius of the ripple effect."),Object(b.b)("hr",null),Object(b.b)("h3",{id:"ripple"},Object(b.b)("inlineCode",{parentName:"h3"},"Ripple()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static Ripple(color: string, borderless: boolean, rippleRadius: ?number)\n")),Object(b.b)("p",null,"Creates an object that represents ripple drawable with specified color (as a string). If property ",Object(b.b)("inlineCode",{parentName:"p"},"borderless")," evaluates to true the ripple will render outside of the view bounds (see native actionbar buttons as an example of that behavior). This background type is available on Android API level 21+."),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters:")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"color"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ripple color")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"borderless"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If the ripple can render outside its bounds")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rippleRadius"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"?number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"controls the radius of the ripple effect")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"canusenativeforeground"},Object(b.b)("inlineCode",{parentName:"h3"},"canUseNativeForeground()")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"static canUseNativeForeground()\n")))}d.isMDXComponent=!0}}]);