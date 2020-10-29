(window.webpackJsonp=window.webpackJsonp||[]).push([[847],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=l,h=u["".concat(o,".").concat(p)]||u[p]||d[p]||r;return n?a.a.createElement(h,i(i({ref:t},c),{},{components:n})):a.a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},916:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var l=n(2),a=n(7),r=(n(0),n(1006)),o={id:"stylesheet",title:"StyleSheet"},i={unversionedId:"stylesheet",id:"version-0.60/stylesheet",isDocsHomePage:!1,title:"StyleSheet",description:"A StyleSheet is an abstraction similar to CSS StyleSheets",source:"@site/versioned_docs/version-0.60/stylesheet.md",slug:"/stylesheet",permalink:"/react-native/docs/0.60/stylesheet",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/stylesheet.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"StatusBarIOS",permalink:"/react-native/docs/0.60/statusbarios"},next:{title:"Systrace",permalink:"/react-native/docs/0.60/systrace"}},s=[{value:"Methods",id:"methods",children:[{value:"<code>setStyleAttributePreprocessor()</code>",id:"setstyleattributepreprocessor",children:[]},{value:"<code>create()</code>",id:"create",children:[]},{value:"<code>flatten</code>",id:"flatten",children:[]},{value:"<code>compose</code>",id:"compose",children:[]}]},{value:"Properties",id:"properties",children:[{value:"<code>hairlineWidth</code>",id:"hairlinewidth",children:[]},{value:"<code>absoluteFill</code>",id:"absolutefill",children:[]},{value:"<code>absoluteFillObject</code>",id:"absolutefillobject",children:[]},{value:"<code>absoluteFill</code> vs. <code>absoluteFillObject</code>",id:"absolutefill-vs-absolutefillobject",children:[]}]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A StyleSheet is an abstraction similar to CSS StyleSheets"),Object(r.b)("p",null,"Create a new StyleSheet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"const styles = StyleSheet.create({\n  container: {\n    borderRadius: 4,\n    borderWidth: 0.5,\n    borderColor: '#d6d7da'\n  },\n  title: {\n    fontSize: 19,\n    fontWeight: 'bold'\n  },\n  activeTitle: {\n    color: 'red'\n  }\n});\n")),Object(r.b)("p",null,"Use a StyleSheet:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"<View style={styles.container}>\n  <Text\n    style={[\n      styles.title,\n      this.props.isActive && styles.activeTitle\n    ]}\n  />\n</View>\n")),Object(r.b)("p",null,"Code quality:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"By moving styles away from the render function, you're making the code easier to understand."),Object(r.b)("li",{parentName:"ul"},"Naming the styles is a good way to add meaning to the low level components in the render function.")),Object(r.b)("hr",null),Object(r.b)("h1",{id:"reference"},"Reference"),Object(r.b)("h2",{id:"methods"},"Methods"),Object(r.b)("h3",{id:"setstyleattributepreprocessor"},Object(r.b)("inlineCode",{parentName:"h3"},"setStyleAttributePreprocessor()")),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"static setStyleAttributePreprocessor(property, process)\n")),Object(r.b)("p",null,"WARNING: EXPERIMENTAL. Breaking changes will probably happen a lot and will not be reliably announced. The whole thing might be deleted, who knows? Use at your own risk."),Object(r.b)("p",null,"Sets a function to use to pre-process a style property value. This is used internally to process color and transform values. You should not use this unless you really know what you are doing and have exhausted other options."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"create"},Object(r.b)("inlineCode",{parentName:"h3"},"create()")),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"static create(obj)\n")),Object(r.b)("p",null,"Creates a StyleSheet style reference from the given object."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"flatten"},Object(r.b)("inlineCode",{parentName:"h3"},"flatten")),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"static flatten(style)\n")),Object(r.b)("p",null,"Flattens an array of style objects, into one aggregated style object. Alternatively, this method can be used to lookup IDs, returned by ",Object(r.b)("inlineCode",{parentName:"p"},"StyleSheet.register"),"."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("em",{parentName:"p"},"NOTE"),": Exercise caution as abusing this can tax you in terms of optimizations. IDs enable optimizations through the bridge and memory in general. Refering to style objects directly will deprive you of these optimizations.")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"var styles = StyleSheet.create({\n  listItem: {\n    flex: 1,\n    fontSize: 16,\n    color: 'white'\n  },\n  selectedListItem: {\n    color: 'green'\n  }\n});\n\nStyleSheet.flatten([styles.listItem, styles.selectedListItem]);\n// returns { flex: 1, fontSize: 16, color: 'green' }\n")),Object(r.b)("p",null,"Alternative use:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"var styles = StyleSheet.create({\n  listItem: {\n    flex: 1,\n    fontSize: 16,\n    color: 'white'\n  },\n  selectedListItem: {\n    color: 'green'\n  }\n});\n\nStyleSheet.flatten(styles.listItem);\n// returns { flex: 1, fontSize: 16, color: 'white' }\n// Simply styles.listItem would return its ID (number)\n")),Object(r.b)("p",null,"This method internally uses ",Object(r.b)("inlineCode",{parentName:"p"},"StyleSheetRegistry.getStyleByID(style)")," to resolve style objects represented by IDs. Thus, an array of style objects (instances of ",Object(r.b)("inlineCode",{parentName:"p"},"StyleSheet.create()"),"), are individually resolved to, their respective objects, merged as one and then returned. This also explains the alternative use."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"compose"},Object(r.b)("inlineCode",{parentName:"h3"},"compose")),Object(r.b)("p",null,"Combines two styles such that ",Object(r.b)("inlineCode",{parentName:"p"},"style2")," will override any styles in ",Object(r.b)("inlineCode",{parentName:"p"},"style1"),". If either style is falsy, the other one is returned without allocating an array, saving allocations and maintaining reference equality for PureComponent checks."),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"static compose(style1, style2)\n")),Object(r.b)("h2",{id:"properties"},"Properties"),Object(r.b)("h3",{id:"hairlinewidth"},Object(r.b)("inlineCode",{parentName:"h3"},"hairlineWidth")),Object(r.b)("p",null,"This is defined as the width of a thin line on the platform. It can be used as the thickness of a border or division between two elements. Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"var styles = StyleSheet.create({\n  separator: {\n    borderBottomColor: '#bbb',\n    borderBottomWidth: StyleSheet.hairlineWidth\n  }\n});\n")),Object(r.b)("p",null,"This constant will always be a round number of pixels (so a line defined by it can look crisp) and will try to match the standard width of a thin line on the underlying platform. However, you should not rely on it being a constant size, because on different platforms and screen densities its value may be calculated differently."),Object(r.b)("p",null,"A line with hairline width may not be visible if your simulator is downscaled."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"absolutefill"},Object(r.b)("inlineCode",{parentName:"h3"},"absoluteFill")),Object(r.b)("p",null,"A very common pattern is to create overlays with position absolute and zero positioning (",Object(r.b)("inlineCode",{parentName:"p"},"position: 'absolute', left: 0, right: 0, top: 0, bottom: 0"),"), so ",Object(r.b)("inlineCode",{parentName:"p"},"absoluteFill")," can be used for convenience and to reduce duplication of these repeated styles. If you want, absoluteFill can be used to create a customized entry in a StyleSheet, e.g.:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"const styles = StyleSheet.create({\n  wrapper: {\n    ...StyleSheet.absoluteFill\n  }\n});\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"absolutefillobject"},Object(r.b)("inlineCode",{parentName:"h3"},"absoluteFillObject")),Object(r.b)("p",null,"Sometimes you may want ",Object(r.b)("inlineCode",{parentName:"p"},"absoluteFill")," but with a couple tweaks - ",Object(r.b)("inlineCode",{parentName:"p"},"absoluteFillObject")," can be used to create a customized entry in a ",Object(r.b)("inlineCode",{parentName:"p"},"StyleSheet"),", e.g.:"),Object(r.b)("pre",null,Object(r.b)("code",Object(l.a)({parentName:"pre"},{className:"language-jsx"}),"const styles = StyleSheet.create({\n  wrapper: {\n    ...StyleSheet.absoluteFillObject,\n    top: 10,\n    backgroundColor: 'transparent'\n  }\n});\n")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"absolutefill-vs-absolutefillobject"},Object(r.b)("inlineCode",{parentName:"h3"},"absoluteFill")," vs. ",Object(r.b)("inlineCode",{parentName:"h3"},"absoluteFillObject")),Object(r.b)("p",null,"Currently, there is no difference between using ",Object(r.b)("inlineCode",{parentName:"p"},"absoluteFill")," vs. ",Object(r.b)("inlineCode",{parentName:"p"},"absoluteFillObject")," as you can see in the ",Object(r.b)("a",Object(l.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/Libraries/StyleSheet/StyleSheet.js#L255"}),"source code")))}b.isMDXComponent=!0}}]);