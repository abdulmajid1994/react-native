(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),g=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=g(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=g(n),h=i,d=p["".concat(a,".").concat(h)]||p[h]||u[h]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return g}));var i=n(2),r=n(7),o=(n(0),n(1006)),a={id:"using-a-scrollview",title:"Using a ScrollView"},c={unversionedId:"using-a-scrollview",id:"version-0.61/using-a-scrollview",isDocsHomePage:!1,title:"Using a ScrollView",description:"The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).",source:"@site/versioned_docs/version-0.61/using-a-scrollview.md",slug:"/using-a-scrollview",permalink:"/react-native/docs/0.61/using-a-scrollview",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/using-a-scrollview.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Handling Touches",permalink:"/react-native/docs/0.61/handling-touches"},next:{title:"Using List Views",permalink:"/react-native/docs/0.61/using-a-listview"}},l=[],s={rightToc:l};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/react-native/docs/0.61/scrollview"}),"ScrollView")," is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," property)."),Object(o.b)("p",null,"This example creates a vertical ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView")," with both images and text mixed together."),Object(o.b)("div",{className:"snack-player","data-snack-name":"Using ScrollView","data-snack-description":"Example usage","data-snack-code":"import%20React%2C%20%7B%20Component%20%7D%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%2C%20Image%2C%20Text%20%7D%20from%20'react-native'%3B%0A%0Aexport%20default%20class%20IScrolledDownAndWhatHappenedNextShockedMe%20extends%20Component%20%7B%0A%20%20render()%20%7B%0A%20%20%20%20%20%20return%20(%0A%20%20%20%20%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A96%7D%7D%3EScroll%20me%20plz%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A96%7D%7D%3EIf%20you%20like%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A96%7D%7D%3EScrolling%20down%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A96%7D%7D%3EWhat's%20the%20best%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A96%7D%7D%3EFramework%20around%3F%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CImage%20source%3D%7B%7Buri%3A%20%22https%3A%2F%2Freactnative.dev%2Fimg%2Ftiny_logo.png%22%2C%20width%3A%2064%2C%20height%3A%2064%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CText%20style%3D%7B%7BfontSize%3A80%7D%7D%3EReact%20Native%3C%2FText%3E%0A%20%20%20%20%20%20%20%20%3C%2FScrollView%3E%0A%20%20%20%20)%3B%0A%20%20%7D%0A%7D","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true"}),Object(o.b)("p",null,"ScrollViews can be configured to allow paging through views using swiping gestures by using the ",Object(o.b)("inlineCode",{parentName:"p"},"pagingEnabled")," props. Swiping horizontally between views can also be implemented on Android using the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-viewpager"}),"ViewPager")," component."),Object(o.b)("p",null,"On iOS a ScrollView with a single item can be used to allow the user to zoom content. Set up the ",Object(o.b)("inlineCode",{parentName:"p"},"maximumZoomScale")," and ",Object(o.b)("inlineCode",{parentName:"p"},"minimumZoomScale")," props and your user will be able to use pinch and expand gestures to zoom in and out."),Object(o.b)("p",null,"The ScrollView works best to present a small amount of things of a limited size. All the elements and views of a ",Object(o.b)("inlineCode",{parentName:"p"},"ScrollView")," are rendered, even if they are not currently shown on the screen. If you have a long list of more items than can fit on the screen, you should use a ",Object(o.b)("inlineCode",{parentName:"p"},"FlatList")," instead. So let's ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/react-native/docs/0.61/using-a-listview"}),"learn about list views")," next."))}g.isMDXComponent=!0}}]);