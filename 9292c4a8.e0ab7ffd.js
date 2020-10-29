(window.webpackJsonp=window.webpackJsonp||[]).push([[538],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(o,".").concat(s)]||d[s]||m[s]||c;return a?r.a.createElement(u,i(i({ref:t},l),{},{components:a})):r.a.createElement(u,i({ref:t},l))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=s;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<c;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},620:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(7),c=(a(0),a(1006)),o={id:"imagebackground",title:"ImageBackground"},i={unversionedId:"imagebackground",id:"version-0.60/imagebackground",isDocsHomePage:!1,title:"ImageBackground",description:"A common feature request from developers familiar with the web is background-image. To handle this use case, you can use the ` component, which has the same props as `, and add whatever children to it you would like to layer on top of it.",source:"@site/versioned_docs/version-0.60/imagebackground.md",slug:"/imagebackground",permalink:"/react-native/docs/0.60/imagebackground",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/imagebackground.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/components",previous:{title:"Image",permalink:"/react-native/docs/0.60/image"},next:{title:"InputAccessoryView",permalink:"/react-native/docs/0.60/inputaccessoryview"}},b=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>style</code>",id:"style",children:[]},{value:"<code>imageStyle</code>",id:"imagestyle",children:[]},{value:"<code>imageRef</code>",id:"imageref",children:[]}]}],l={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"A common feature request from developers familiar with the web is ",Object(c.b)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",Object(c.b)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),Object(c.b)("p",null,"You might not want to use ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is basic. Refer to ",Object(c.b)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/Image/ImageBackground.js"}),"source code")," for more insight, and create your own custom component when needed."),Object(c.b)("p",null,"Note that you must specify some width and height style attributes."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"return (\n  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);\n")),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.60/image#props"}),"Image Props"),"."),Object(c.b)("h3",{id:"style"},Object(c.b)("inlineCode",{parentName:"h3"},"style")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.60/view-style-props"}),"view styles")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("h3",{id:"imagestyle"},Object(c.b)("inlineCode",{parentName:"h3"},"imageStyle")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.60/image-style-props"}),"image styles")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("h3",{id:"imageref"},Object(c.b)("inlineCode",{parentName:"h3"},"imageRef")),Object(c.b)("p",null,"Allows to set a reference to the inner ",Object(c.b)("inlineCode",{parentName:"p"},"Image")," component"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"https://reactjs.org/docs/refs-and-the-dom.html"}),"Ref")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}p.isMDXComponent=!0}}]);