(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),s=n,h=u["".concat(b,".").concat(s)]||u[s]||p[s]||c;return a?r.a.createElement(h,l(l({ref:t},i),{},{components:a})):r.a.createElement(h,l({ref:t},i))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},596:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(7),c=(a(0),a(1006)),b={id:"switch",title:"Switch"},l={unversionedId:"switch",id:"version-0.62/switch",isDocsHomePage:!1,title:"Switch",description:"Renders a boolean input.",source:"@site/versioned_docs/version-0.62/switch.md",slug:"/switch",permalink:"/react-native/docs/0.62/switch",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/switch.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/components",previous:{title:"StatusBar",permalink:"/react-native/docs/0.62/statusbar"},next:{title:"Text",permalink:"/react-native/docs/0.62/text"}},o=[{value:"Example",id:"example",children:[]},{value:"Props",id:"props",children:[{value:"<code>disabled</code>",id:"disabled",children:[]},{value:"<code>ios_backgroundColor</code>",id:"ios_backgroundcolor",children:[]},{value:"<code>onChange</code>",id:"onchange",children:[]},{value:"<code>onValueChange</code>",id:"onvaluechange",children:[]},{value:"<code>thumbColor</code>",id:"thumbcolor",children:[]},{value:"<code>trackColor</code>",id:"trackcolor",children:[]},{value:"<code>value</code>",id:"value",children:[]}]}],i={rightToc:o};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Renders a boolean input."),Object(c.b)("p",null,"This is a controlled component that requires an ",Object(c.b)("inlineCode",{parentName:"p"},"onValueChange")," callback that updates the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop in order for the component to reflect user actions. If the ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop is not updated, the component will continue to render the supplied ",Object(c.b)("inlineCode",{parentName:"p"},"value")," prop instead of the expected result of any user actions."),Object(c.b)("h2",{id:"example"},"Example"),Object(c.b)("div",{className:"snack-player","data-snack-name":"Switch","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20%22react%22%3B%0Aimport%20%7B%20View%2C%20Switch%2C%20StyleSheet%20%7D%20from%20%22react-native%22%3B%0A%0Aexport%20default%20function%20App()%20%7B%0A%20%20const%20%5BisEnabled%2C%20setIsEnabled%5D%20%3D%20useState(false)%3B%0A%20%20const%20toggleSwitch%20%3D%20()%20%3D%3E%20setIsEnabled(previousState%20%3D%3E%20!previousState)%3B%0A%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%20%20%3CSwitch%0A%20%20%20%20%20%20%20%20trackColor%3D%7B%7B%20false%3A%20%22%23767577%22%2C%20true%3A%20%22%2381b0ff%22%20%7D%7D%0A%20%20%20%20%20%20%20%20thumbColor%3D%7BisEnabled%20%3F%20%22%23f5dd4b%22%20%3A%20%22%23f4f3f4%22%7D%0A%20%20%20%20%20%20%20%20ios_backgroundColor%3D%22%233e3e3e%22%0A%20%20%20%20%20%20%20%20onValueChange%3D%7BtoggleSwitch%7D%0A%20%20%20%20%20%20%20%20value%3D%7BisEnabled%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0A%20%20container%3A%20%7B%0A%20%20%20%20flex%3A%201%2C%0A%20%20%20%20alignItems%3A%20%22center%22%2C%0A%20%20%20%20justifyContent%3A%20%22center%22%0A%20%20%7D%0A%7D)%3B","data-snack-platform":"web","data-snack-supported-platforms":"android,ios","data-snack-theme":"light","data-snack-preview":"true"}),Object(c.b)("hr",null),Object(c.b)("h1",{id:"reference"},"Reference"),Object(c.b)("h2",{id:"props"},"Props"),Object(c.b)("p",null,"Inherits ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.62/view#props"}),"View Props"),"."),Object(c.b)("h3",{id:"disabled"},Object(c.b)("inlineCode",{parentName:"h3"},"disabled")),Object(c.b)("p",null,"If true the user won't be able to toggle the switch. Default value is false."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"ios_backgroundcolor"},Object(c.b)("inlineCode",{parentName:"h3"},"ios_backgroundColor")),Object(c.b)("p",null,"On iOS, custom color for the background. This background color can be seen either when the switch value is false or when the switch is disabled (and the switch is translucent)."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.62/colors"}),"color")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onchange"},Object(c.b)("inlineCode",{parentName:"h3"},"onChange")),Object(c.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the change event as an argument. If you want to only receive the new value, use ",Object(c.b)("inlineCode",{parentName:"p"},"onValueChange")," instead."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"onvaluechange"},Object(c.b)("inlineCode",{parentName:"h3"},"onValueChange")),Object(c.b)("p",null,"Invoked when the user tries to change the value of the switch. Receives the new value as an argument. If you want to instead receive an event, use ",Object(c.b)("inlineCode",{parentName:"p"},"onChange"),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"function"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"thumbcolor"},Object(c.b)("inlineCode",{parentName:"h3"},"thumbColor")),Object(c.b)("p",null,"Color of the foreground switch grip. If this is set on iOS, the switch grip will lose its drop shadow."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.62/colors"}),"color")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"trackcolor"},Object(c.b)("inlineCode",{parentName:"h3"},"trackColor")),Object(c.b)("p",null,"Custom colors for the switch track."),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"iOS"),": When the switch value is false, the track shrinks into the border. If you want to change the color of the background exposed by the shrunken track, use ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.62/switch#ios_backgroundColor"}),Object(c.b)("inlineCode",{parentName:"a"},"ios_backgroundColor")),"."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"object: {false: ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.62/colors"}),"color"),", true: ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native/docs/0.62/colors"}),"color"),"}"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"value"},Object(c.b)("inlineCode",{parentName:"h3"},"value")),Object(c.b)("p",null,"The value of the switch. If true the switch will be turned on. Default value is false."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bool"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))))}d.isMDXComponent=!0}}]);