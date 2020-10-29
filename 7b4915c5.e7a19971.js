(window.webpackJsonp=window.webpackJsonp||[]).push([[461],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=a.a.createContext({}),b=function(e){var n=a.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=b(e.components);return a.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},u=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=b(t),u=r,m=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return t?a.a.createElement(m,l(l({ref:n},d),{},{components:t})):a.a.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},545:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),i=(t(0),t(1006)),o={id:"keyboard",title:"Keyboard"},l={unversionedId:"keyboard",id:"version-0.60/keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard module to control keyboard events.",source:"@site/versioned_docs/version-0.60/keyboard.md",slug:"/keyboard",permalink:"/react-native/docs/0.60/keyboard",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/keyboard.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"InteractionManager",permalink:"/react-native/docs/0.60/interactionmanager"},next:{title:"Layout Props",permalink:"/react-native/docs/0.60/layout-props"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>addListener()</code>",id:"addlistener",children:[]},{value:"<code>removeListener()</code>",id:"removelistener",children:[]},{value:"<code>removeAllListeners()</code>",id:"removealllisteners",children:[]},{value:"<code>dismiss()</code>",id:"dismiss",children:[]}]}],d={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Keyboard")," module to control keyboard events."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("p",null,"The Keyboard module allows you to listen for native events and react to them, as well as make changes to the keyboard, like dismissing it."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { Component } from 'react';\nimport { Keyboard, TextInput } from 'react-native';\n\nclass Example extends Component {\n  componentDidMount() {\n    this.keyboardDidShowListener = Keyboard.addListener(\n      'keyboardDidShow',\n      this._keyboardDidShow\n    );\n    this.keyboardDidHideListener = Keyboard.addListener(\n      'keyboardDidHide',\n      this._keyboardDidHide\n    );\n  }\n\n  componentWillUnmount() {\n    this.keyboardDidShowListener.remove();\n    this.keyboardDidHideListener.remove();\n  }\n\n  _keyboardDidShow() {\n    alert('Keyboard Shown');\n  }\n\n  _keyboardDidHide() {\n    alert('Keyboard Hidden');\n  }\n\n  render() {\n    return <TextInput onSubmitEditing={Keyboard.dismiss} />;\n  }\n}\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"addlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static addListener(eventName, callback)\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"addListener")," function connects a JavaScript function to an identified native keyboard notification event."),Object(i.b)("p",null,"This function then returns the reference to the listener."),Object(i.b)("p",null,"@param {string} eventName The ",Object(i.b)("inlineCode",{parentName:"p"},"nativeEvent")," is the string that identifies the event you're listening for. This can be any of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidShow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidHide")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardWillChangeFrame")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"keyboardDidChangeFrame"))),Object(i.b)("p",null,"Note that if you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustResize"),", only ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidShow")," and ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardDidHide")," events will be available on Android. If you set ",Object(i.b)("inlineCode",{parentName:"p"},"android:windowSoftInputMode")," to ",Object(i.b)("inlineCode",{parentName:"p"},"adjustNothing"),", no events will be available on Android. ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillShow")," as well as ",Object(i.b)("inlineCode",{parentName:"p"},"keyboardWillHide")," are generally not available on Android since there is no native corresponding event."),Object(i.b)("p",null,"@param {function} callback function to be called when the event fires."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removelistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static removeListener(eventName, callback)\n")),Object(i.b)("p",null,"Removes a specific listener."),Object(i.b)("p",null,"@param {string} eventName The ",Object(i.b)("inlineCode",{parentName:"p"},"nativeEvent")," is the string that identifies the event you're listening for. @param {function} callback function to be called when the event fires."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removealllisteners"},Object(i.b)("inlineCode",{parentName:"h3"},"removeAllListeners()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static removeAllListeners(eventName)\n")),Object(i.b)("p",null,"Removes all listeners for a specific event type."),Object(i.b)("p",null,"@param {string} eventType The native event string listeners are watching which will be removed."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dismiss"},Object(i.b)("inlineCode",{parentName:"h3"},"dismiss()")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"static dismiss()\n")),Object(i.b)("p",null,"Dismisses the active keyboard and removes focus."))}b.isMDXComponent=!0}}]);