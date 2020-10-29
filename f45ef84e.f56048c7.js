(window.webpackJsonp=window.webpackJsonp||[]).push([[894],{1006:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},b=Object.keys(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)r=b[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=n.a.createContext({}),p=function(e){var t=n.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,u=s["".concat(c,".").concat(d)]||s[d]||O[d]||b;return r?n.a.createElement(u,o(o({ref:t},i),{},{components:r})):n.a.createElement(u,o({ref:t},i))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=r.length,c=new Array(b);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<b;i++)c[i]=r[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},961:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var a=r(2),n=r(7),b=(r(0),r(1006)),c={id:"progressviewios",title:"ProgressViewIOS"},o={unversionedId:"progressviewios",id:"version-0.60/progressviewios",isDocsHomePage:!1,title:"ProgressViewIOS",description:"Uses ProgressViewIOS to render a UIProgressView on iOS.",source:"@site/versioned_docs/version-0.60/progressviewios.md",slug:"/progressviewios",permalink:"/react-native/docs/0.60/progressviewios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/progressviewios.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"ProgressBarAndroid",permalink:"/react-native/docs/0.60/progressbarandroid"},next:{title:"RefreshControl",permalink:"/react-native/docs/0.60/refreshcontrol"}},l=[{value:"Props",id:"props",children:[{value:"<code>progress</code>",id:"progress",children:[]},{value:"<code>progressImage</code>",id:"progressimage",children:[]},{value:"<code>progressTintColor</code>",id:"progresstintcolor",children:[]},{value:"<code>progressViewStyle</code>",id:"progressviewstyle",children:[]},{value:"<code>trackImage</code>",id:"trackimage",children:[]},{value:"<code>trackTintColor</code>",id:"tracktintcolor",children:[]}]}],i={rightToc:l};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Uses ",Object(b.b)("inlineCode",{parentName:"p"},"ProgressViewIOS")," to render a UIProgressView on iOS."),Object(b.b)("hr",null),Object(b.b)("h1",{id:"reference"},"Reference"),Object(b.b)("h2",{id:"props"},"Props"),Object(b.b)("p",null,"Inherits ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native/docs/0.60/view#props"}),"View Props"),"."),Object(b.b)("h3",{id:"progress"},Object(b.b)("inlineCode",{parentName:"h3"},"progress")),Object(b.b)("p",null,"The progress value (between 0 and 1)."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressimage"},Object(b.b)("inlineCode",{parentName:"h3"},"progressImage")),Object(b.b)("p",null,"A stretchable image to display as the progress bar."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progresstintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"progressTintColor")),Object(b.b)("p",null,"The tint color of the progress bar itself."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"progressviewstyle"},Object(b.b)("inlineCode",{parentName:"h3"},"progressViewStyle")),Object(b.b)("p",null,"The progress bar style."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"enum('default', 'bar')"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"trackimage"},Object(b.b)("inlineCode",{parentName:"h3"},"trackImage")),Object(b.b)("p",null,"A stretchable image to display behind the progress bar."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Image.propTypes.source"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tracktintcolor"},Object(b.b)("inlineCode",{parentName:"h3"},"trackTintColor")),Object(b.b)("p",null,"The tint color of the progress bar track."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);