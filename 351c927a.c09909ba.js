(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1006:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return p}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),b=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=b(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},h=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),d=b(t),h=a,p=d["".concat(c,".").concat(h)]||d[h]||u[h]||i;return t?r.a.createElement(p,l(l({ref:n},o),{},{components:t})):r.a.createElement(p,l({ref:n},o))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<i;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},298:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(7),i=(t(0),t(1006)),c={id:"accessibilityinfo",title:"AccessibilityInfo"},l={unversionedId:"accessibilityinfo",id:"version-0.60/accessibilityinfo",isDocsHomePage:!1,title:"AccessibilityInfo",description:"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The AccessibilityInfo API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes.",source:"@site/versioned_docs/version-0.60/accessibilityinfo.md",slug:"/accessibilityinfo",permalink:"/react-native/docs/0.60/accessibilityinfo",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/accessibilityinfo.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",next:{title:"ActionSheetIOS",permalink:"/react-native/docs/0.60/actionsheetios"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>isBoldTextEnabled()</code>",id:"isboldtextenabled",children:[]},{value:"<code>isGrayscaleEnabled()</code>",id:"isgrayscaleenabled",children:[]},{value:"<code>isInvertColorsEnabled()</code>",id:"isinvertcolorsenabled",children:[]},{value:"<code>isReduceMotionEnabled()</code>",id:"isreducemotionenabled",children:[]},{value:"<code>isReduceTransparencyEnabled()</code>",id:"isreducetransparencyenabled",children:[]},{value:"<code>isScreenReaderEnabled()</code>",id:"isscreenreaderenabled",children:[]},{value:"<code>addEventListener()</code>",id:"addeventlistener",children:[]},{value:"<code>setAccessibilityFocus()</code>",id:"setaccessibilityfocus",children:[]},{value:"<code>announceForAccessibility()</code>",id:"announceforaccessibility",children:[]},{value:"<code>removeEventListener()</code>",id:"removeeventlistener",children:[]}]}],o={rightToc:s};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes it's useful to know whether or not the device has a screen reader that is currently active. The ",Object(i.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API is designed for this purpose. You can use it to query the current state of the screen reader as well as to register to be notified when the state of the screen reader changes."),Object(i.b)("p",null,"Here's a small example illustrating how to use ",Object(i.b)("inlineCode",{parentName:"p"},"AccessibilityInfo"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"class AccessibilityStatusExample extends React.Component {\n  state = {\n    reduceMotionEnabled: false,\n    screenReaderEnabled: false\n  };\n\n  componentDidMount() {\n    AccessibilityInfo.addEventListener(\n      'reduceMotionChanged',\n      this._handleReduceMotionToggled\n    );\n    AccessibilityInfo.addEventListener(\n      'screenReaderChanged',\n      this._handleScreenReaderToggled\n    );\n\n    AccessibilityInfo.isReduceMotionEnabled().then(\n      (reduceMotionEnabled) => {\n        this.setState({ reduceMotionEnabled });\n      }\n    );\n    AccessibilityInfo.isScreenReaderEnabled().then(\n      (screenReaderEnabled) => {\n        this.setState({ screenReaderEnabled });\n      }\n    );\n  }\n\n  componentWillUnmount() {\n    AccessibilityInfo.removeEventListener(\n      'reduceMotionChanged',\n      this._handleReduceMotionToggled\n    );\n\n    AccessibilityInfo.removeEventListener(\n      'screenReaderChanged',\n      this._handleScreenReaderToggled\n    );\n  }\n\n  _handleReduceMotionToggled = (reduceMotionEnabled) => {\n    this.setState({ reduceMotionEnabled });\n  };\n\n  _handleScreenReaderToggled = (screenReaderEnabled) => {\n    this.setState({ screenReaderEnabled });\n  };\n\n  render() {\n    return (\n      <View>\n        <Text>\n          The reduce motion is{' '}\n          {this.state.reduceMotionEnabled\n            ? 'enabled'\n            : 'disabled'}\n          .\n        </Text>\n        <Text>\n          The screen reader is{' '}\n          {this.state.screenReaderEnabled\n            ? 'enabled'\n            : 'disabled'}\n          .\n        </Text>\n      </View>\n    );\n  }\n}\n")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"isboldtextenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isBoldTextEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isBoldTextEnabled()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether a bold text is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when bold text is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"isgrayscaleenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isGrayscaleEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isGrayscaleEnabled()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether grayscale is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when grayscale is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"isinvertcolorsenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isInvertColorsEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isInvertColorsEnabled()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether invert colors is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when invert colors is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"isreducemotionenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isReduceMotionEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceMotionEnabled()\n")),Object(i.b)("p",null,"Query whether reduce motion is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when reduce motion is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"isreducetransparencyenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isReduceTransparencyEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isReduceTransparencyEnabled()\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"iOS-Only.")," Query whether reduce transparency is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when a reduce transparency is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("h3",{id:"isscreenreaderenabled"},Object(i.b)("inlineCode",{parentName:"h3"},"isScreenReaderEnabled()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static isScreenReaderEnabled()\n")),Object(i.b)("p",null,"Query whether a screen reader is currently enabled. Returns a promise which resolves to a boolean. The result is ",Object(i.b)("inlineCode",{parentName:"p"},"true")," when a screen reader is enabled and ",Object(i.b)("inlineCode",{parentName:"p"},"false")," otherwise."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"addeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"addEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static addEventListener(eventName, handler)\n")),Object(i.b)("p",null,"Add an event handler. Supported events:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"boldTextChanged"),": iOS-only event. Fires when the state of the bold text toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when bold text is enabled and ",Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"grayscaleChanged"),": iOS-only event. Fires when the state of the gray scale toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when a gray scale is enabled and ",Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"invertColorsChanged"),": iOS-only event. Fires when the state of the invert colors toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when invert colors is enabled and ",Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"reduceMotionChanged"),": Fires when the state of the reduce motion toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true"),' when a reduce motion is enabled (or when "Transition Animation Scale" in "Developer options" is "Animation off") and ',Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"screenReaderChanged"),": Fires when the state of the screen reader changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when a screen reader is enabled and ",Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"reduceTransparencyChanged"),": iOS-only event. Fires when the state of the reduce transparency toggle changes. The argument to the event handler is a boolean. The boolean is ",Object(i.b)("inlineCode",{parentName:"li"},"true")," when reduce transparency is enabled and ",Object(i.b)("inlineCode",{parentName:"li"},"false")," otherwise."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"announcementFinished"),": iOS-only event. Fires when the screen reader has finished making an announcement. The argument to the event handler is a dictionary with these keys:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"announcement"),": The string announced by the screen reader."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the announcement was successfully made.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setaccessibilityfocus"},Object(i.b)("inlineCode",{parentName:"h3"},"setAccessibilityFocus()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static setAccessibilityFocus(reactTag)\n")),Object(i.b)("p",null,"Set accessibility focus to a React component. On Android, this is equivalent to ",Object(i.b)("inlineCode",{parentName:"p"},"UIManager.sendAccessibilityEvent(reactTag, UIManager.AccessibilityEventTypes.typeViewFocused);"),"."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"announceforaccessibility"},Object(i.b)("inlineCode",{parentName:"h3"},"announceForAccessibility()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static announceForAccessibility(announcement)\n")),Object(i.b)("p",null,"Post a string to be announced by the screen reader."),Object(i.b)("hr",null),Object(i.b)("h3",{id:"removeeventlistener"},Object(i.b)("inlineCode",{parentName:"h3"},"removeEventListener()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"static removeEventListener(eventName, handler)\n")),Object(i.b)("p",null,"Remove an event handler."))}b.isMDXComponent=!0}}]);