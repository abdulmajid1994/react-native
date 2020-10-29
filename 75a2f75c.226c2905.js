(window.webpackJsonp=window.webpackJsonp||[]).push([[439],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,O=p["".concat(i,".").concat(s)]||p[s]||u[s]||o;return n?r.a.createElement(O,b(b({ref:t},l),{},{components:n})):r.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},523:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={id:"keyboardavoidingview",title:"KeyboardAvoidingView"},b={unversionedId:"keyboardavoidingview",id:"version-0.61/keyboardavoidingview",isDocsHomePage:!1,title:"KeyboardAvoidingView",description:"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the position of the keyboard.",source:"@site/versioned_docs/version-0.61/keyboardavoidingview.md",slug:"/keyboardavoidingview",permalink:"/react-native/docs/0.61/keyboardavoidingview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/keyboardavoidingview.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/components",previous:{title:"InputAccessoryView",permalink:"/react-native/docs/0.61/inputaccessoryview"},next:{title:"\ud83d\udea7 MaskedViewIOS",permalink:"/react-native/docs/0.61/maskedviewios"}},c=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>behavior</code>",id:"behavior",children:[]},{value:"<code>contentContainerStyle</code>",id:"contentcontainerstyle",children:[]},{value:"<code>enabled</code>",id:"enabled",children:[]},{value:"<code>keyboardVerticalOffset</code>",id:"keyboardverticaloffset",children:[]}]}],l={rightToc:c};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"It is a component to solve the common problem of views that need to move out of the way of the virtual keyboard. It can automatically adjust either its height, position, or bottom padding based on the position of the keyboard."),Object(o.b)("p",null,"Example usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { KeyboardAvoidingView } from 'react-native';\n\n<KeyboardAvoidingView\n  style={styles.container}\n  behavior=\"padding\"\n  enabled>\n  ... your UI ...\n</KeyboardAvoidingView>;\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("video",{src:"/img/keyboardavoidingview.mp4",muted:!0,autoplay:!0,loop:!0,width:"320",height:"448"}),Object(o.b)("hr",null),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)("p",null,"Inherits ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native/docs/0.61/view#props"}),"View Props"),"."),Object(o.b)("h3",{id:"behavior"},Object(o.b)("inlineCode",{parentName:"h3"},"behavior")),Object(o.b)("p",null,"Specify how to react to the presence of the keyboard."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: Android and iOS both interact with this prop differently.")," ",Object(o.b)("em",{parentName:"p"},"Android may behave better when given no behavior prop at all, whereas iOS is the opposite.")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('height', 'position', 'padding')"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contentcontainerstyle"},Object(o.b)("inlineCode",{parentName:"h3"},"contentContainerStyle")),Object(o.b)("p",null,"The style of the content container(View) when behavior is 'position'."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"View.style"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled")),Object(o.b)("p",null,"Enabled or disabled KeyboardAvoidingView. The default is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"boolean"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"keyboardverticaloffset"},Object(o.b)("inlineCode",{parentName:"h3"},"keyboardVerticalOffset")),Object(o.b)("p",null,"This is the distance between the top of the user screen and the react native view, may be non-zero in some use cases. Defaults to 0."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))))}d.isMDXComponent=!0}}]);