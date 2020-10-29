(window.webpackJsonp=window.webpackJsonp||[]).push([[867],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,f=b["".concat(i,".").concat(d)]||b[d]||u[d]||o;return n?r.a.createElement(f,c(c({ref:t},l),{},{components:n})):r.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},936:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(7),o=(n(0),n(1006)),i={title:"Making React Native apps accessible",author:"Georgiy Kassabli",authorTitle:"Software Engineer at Facebook",authorURL:"https://www.facebook.com/georgiy.kassabli",authorImageURL:"https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160/p160x160/1978838_795592927136196_1205041943_n.jpg?_nc_log=1&oh=d7a500fdece1250955a4d27b0a80fee2&oe=59E8165A",hero:"/blog/assets/blue-hero.png",tags:["engineering"]},c={permalink:"/react-native/blog/2015/11/23/making-react-native-apps-accessible",source:"@site/blog/2015-11-23-making-react-native-apps-accessible.md",description:"With the recent launch of React on web and React Native on mobile, we've provided a new front-end framework for developers to build products. One key aspect of building a robust product is ensuring that anyone can use it, including people who have vision loss or other disabilities. The Accessibility API for React and React Native enables you to make any React-powered experience usable by someone who may use assistive technology, like a screen reader for the blind and visually impaired.",date:"2015-11-23T00:00:00.000Z",tags:[{label:"engineering",permalink:"/react-native/blog/tags/engineering"}],title:"Making React Native apps accessible",readingTime:1.08,truncated:!1,prevItem:{title:"Introducing Hot Reloading",permalink:"/react-native/blog/2016/03/24/introducing-hot-reloading"},nextItem:{title:"React Native for Android: How we built the first cross-platform React Native app",permalink:"/react-native/blog/2015/09/14/react-native-for-android"}},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With the recent launch of React on web and React Native on mobile, we've provided a new front-end framework for developers to build products. One key aspect of building a robust product is ensuring that anyone can use it, including people who have vision loss or other disabilities. The Accessibility API for React and React Native enables you to make any React-powered experience usable by someone who may use assistive technology, like a screen reader for the blind and visually impaired."),Object(o.b)("p",null,"For this post, we're going to focus on React Native apps. We've designed the React Accessibility API to look and feel similar to the Android and iOS APIs. If you've developed accessible applications for Android, iOS, or the web before, you should feel comfortable with the framework and nomenclature of the React AX API. For instance, you can make a UI element ",Object(o.b)("em",{parentName:"p"},"accessible")," (therefore exposed to assistive technology) and use ",Object(o.b)("em",{parentName:"p"},"accessibilityLabel")," to provide a string description for the element:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"<View accessible={true} accessibilityLabel=\u201dThis is simple view\u201d>\n")),Object(o.b)("p",null,"Let's walk through a slightly more involved application of the React AX API by looking at one of Facebook's own React-powered products: the ",Object(o.b)("strong",{parentName:"p"},"Ads Manager app"),"."),Object(o.b)("footer",null,Object(o.b)("a",{href:"https://code.facebook.com/posts/435862739941212/making-react-native-apps-accessible/",className:"btn"},"Read more")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is an excerpt. Read the rest of the post on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.facebook.com/posts/435862739941212/making-react-native-apps-accessible/"}),"Facebook Code"),".")))}p.isMDXComponent=!0}}]);