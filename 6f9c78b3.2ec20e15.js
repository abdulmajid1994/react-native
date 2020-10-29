(window.webpackJsonp=window.webpackJsonp||[]).push([[416],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,h=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return n?r.a.createElement(h,c(c({ref:t},s),{},{components:n})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},500:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={id:"handling-text-input",title:"Handling Text Input"},c={unversionedId:"handling-text-input",id:"handling-text-input",isDocsHomePage:!1,title:"Handling Text Input",description:"TextInput is a Core Component that allows the user to enter text. It has an onChangeText prop that takes a function to be called every time the text changed, and an onSubmitEditing prop that takes a function to be called when the text is submitted.",source:"@site/../docs/handling-text-input.md",slug:"/handling-text-input",permalink:"/react-native/docs/next/handling-text-input",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/../docs/handling-text-input.md",version:"current",lastUpdatedAt:1589574270,sidebar:"docs",previous:{title:"React Fundamentals",permalink:"/react-native/docs/next/intro-react"},next:{title:"Using a ScrollView",permalink:"/react-native/docs/next/using-a-scrollview"}},p=[],s={rightToc:p};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"textinput#content"}),Object(o.b)("inlineCode",{parentName:"a"},"TextInput"))," is a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"intro-react-native-components"}),"Core Component")," that allows the user to enter text. It has an ",Object(o.b)("inlineCode",{parentName:"p"},"onChangeText")," prop that takes a function to be called every time the text changed, and an ",Object(o.b)("inlineCode",{parentName:"p"},"onSubmitEditing")," prop that takes a function to be called when the text is submitted."),Object(o.b)("p",null,'For example, let\'s say that as the user types, you\'re translating their words into a different language. In this new language, every single word is written the same way: \ud83c\udf55. So the sentence "Hello there Bob" would be translated as "\ud83c\udf55\ud83c\udf55\ud83c\udf55".'),Object(o.b)("div",{className:"snack-player","data-snack-name":"Handling Text Input","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20useState%20%7D%20from%20'react'%3B%0Aimport%20%7B%20Text%2C%20TextInput%2C%20View%20%7D%20from%20'react-native'%3B%0A%0Aconst%20PizzaTranslator%20%3D%20()%20%3D%3E%20%7B%0A%20%20const%20%5Btext%2C%20setText%5D%20%3D%20useState('')%3B%0A%20%20return%20(%0A%20%20%20%20%3CView%20style%3D%7B%7Bpadding%3A%2010%7D%7D%3E%0A%20%20%20%20%20%20%3CTextInput%0A%20%20%20%20%20%20%20%20style%3D%7B%7Bheight%3A%2040%7D%7D%0A%20%20%20%20%20%20%20%20placeholder%3D%22Type%20here%20to%20translate!%22%0A%20%20%20%20%20%20%20%20onChangeText%3D%7Btext%20%3D%3E%20setText(text)%7D%0A%20%20%20%20%20%20%20%20defaultValue%3D%7Btext%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CText%20style%3D%7B%7Bpadding%3A%2010%2C%20fontSize%3A%2042%7D%7D%3E%0A%20%20%20%20%20%20%20%20%7Btext.split('%20').map((word)%20%3D%3E%20word%20%26%26%20'%F0%9F%8D%95').join('%20')%7D%0A%20%20%20%20%20%20%3C%2FText%3E%0A%20%20%20%20%3C%2FView%3E%0A%20%20)%3B%0A%7D%0A%0Aexport%20default%20PizzaTranslator%3B","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("p",null,"In this example, we store ",Object(o.b)("inlineCode",{parentName:"p"},"text")," in the state, because it changes over time."),Object(o.b)("p",null,"There are a lot more things you might want to do with a text input. For example, you could validate the text inside while the user types. For more detailed examples, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/docs/forms.html#controlled-components"}),"React docs on controlled components"),", or the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native/docs/next/textinput"}),"reference docs for TextInput"),"."),Object(o.b)("p",null,"Text input is one of the ways the user interacts with the app. Next, let's look at another type of input and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native/docs/next/handling-touches"}),"learn how to handle touches"),"."))}l.isMDXComponent=!0}}]);