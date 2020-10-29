(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=i,h=p["".concat(r,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(h,c(c({ref:t},s),{},{components:n})):a.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<o;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},884:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(7),o=(n(0),n(1006)),r={id:"actionsheetios",title:"ActionSheetIOS"},c={unversionedId:"actionsheetios",id:"version-0.61/actionsheetios",isDocsHomePage:!1,title:"ActionSheetIOS",description:"Reference",source:"@site/versioned_docs/version-0.61/actionsheetios.md",slug:"/actionsheetios",permalink:"/react-native/docs/0.61/actionsheetios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/actionsheetios.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/api",previous:{title:"AccessibilityInfo",permalink:"/react-native/docs/0.61/accessibilityinfo"},next:{title:"Alert",permalink:"/react-native/docs/0.61/alert"}},l=[{value:"Methods",id:"methods",children:[{value:"<code>showActionSheetWithOptions()</code>",id:"showactionsheetwithoptions",children:[]},{value:"<code>showShareActionSheetWithOptions()</code>",id:"showshareactionsheetwithoptions",children:[]}]}],s={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"reference"},"Reference"),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"showactionsheetwithoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"showActionSheetWithOptions()")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"static showActionSheetWithOptions(options, callback)\n")),Object(o.b)("p",null,"Display an iOS action sheet. The ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object must contain one or more of:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options")," (array of strings) - a list of button titles (required)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"cancelButtonIndex")," (int) - index of cancel button in ",Object(o.b)("inlineCode",{parentName:"li"},"options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"destructiveButtonIndex")," (int) - index of destructive button in ",Object(o.b)("inlineCode",{parentName:"li"},"options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"title")," (string) - a title to show above the action sheet"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to show below the title"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"anchor")," (number) - the node to which the action sheet should be anchored (used for iPad)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"tintColor")," (string) - the ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"/react-native/docs/0.61/colors"}),"color")," used for non-destructive button titles")),Object(o.b)("p",null,"The 'callback' function takes one parameter, the zero-based index of the selected item."),Object(o.b)("p",null,"Minimal example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"ActionSheetIOS.showActionSheetWithOptions(\n  {\n    options: ['Cancel', 'Remove'],\n    destructiveButtonIndex: 1,\n    cancelButtonIndex: 0\n  },\n  (buttonIndex) => {\n    if (buttonIndex === 1) {\n      /* destructive action */\n    }\n  }\n);\n")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"showshareactionsheetwithoptions"},Object(o.b)("inlineCode",{parentName:"h3"},"showShareActionSheetWithOptions()")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"static showShareActionSheetWithOptions(options, failureCallback, successCallback)\n")),Object(o.b)("p",null,"Display the iOS share sheet. The ",Object(o.b)("inlineCode",{parentName:"p"},"options")," object should contain one or both of ",Object(o.b)("inlineCode",{parentName:"p"},"message")," and ",Object(o.b)("inlineCode",{parentName:"p"},"url")," and can additionally have a ",Object(o.b)("inlineCode",{parentName:"p"},"subject")," or ",Object(o.b)("inlineCode",{parentName:"p"},"excludedActivityTypes"),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," (string) - a URL to share"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"message")," (string) - a message to share"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"subject")," (string) - a subject for the message"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"excludedActivityTypes")," (array) - the activities to exclude from the ActionSheet")),Object(o.b)("p",null,"NOTE: if ",Object(o.b)("inlineCode",{parentName:"p"},"url")," points to a local file, or is a base64-encoded uri, the file it points to will be loaded and shared directly. In this way, you can share images, videos, PDF files, etc."),Object(o.b)("p",null,"The 'failureCallback' function takes one parameter, an error object. The only property defined on this object is an optional ",Object(o.b)("inlineCode",{parentName:"p"},"stack")," property of type ",Object(o.b)("inlineCode",{parentName:"p"},"string"),"."),Object(o.b)("p",null,"The 'successCallback' function takes two parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"a boolean value signifying success or failure"),Object(o.b)("li",{parentName:"ul"},"a string that, in the case of success, indicates the method of sharing")))}b.isMDXComponent=!0}}]);