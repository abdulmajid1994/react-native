(window.webpackJsonp=window.webpackJsonp||[]).push([[845],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||i;return a?r.a.createElement(m,c(c({ref:t},s),{},{components:a})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},914:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),r=a(7),i=(a(0),a(1006)),o={title:"React Native Monthly #4",author:"Mike Grabowski",authorTitle:"CTO at Callstack",authorURL:"https://github.com/grabbou",authorImageURL:"https://pbs.twimg.com/profile_images/988860423897313281/L9ErG_lr_400x400.jpg",authorTwitter:"grabbou",tags:["engineering"]},c={permalink:"/react-native/blog/2017/09/21/react-native-monthly-4",source:"@site/blog/2017-09-21-react-native-monthly-4.md",description:"The React Native monthly meeting continues! Here are the notes from each team:",date:"2017-09-21T00:00:00.000Z",tags:[{label:"engineering",permalink:"/react-native/blog/tags/engineering"}],title:"React Native Monthly #4",readingTime:2.54,truncated:!1,prevItem:{title:"React Native Monthly #5",permalink:"/react-native/blog/2017/11/06/react-native-monthly-5"},nextItem:{title:"React Native Monthly #3",permalink:"/react-native/blog/2017/08/30/react-native-monthly-3"}},l=[{value:"Callstack",id:"callstack",children:[]},{value:"GeekyAnts",id:"geekyants",children:[]},{value:"Expo",id:"expo",children:[]},{value:"Facebook",id:"facebook",children:[]},{value:"Microsoft",id:"microsoft",children:[]},{value:"Next session",id:"next-session",children:[]}],s={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The React Native monthly meeting continues! Here are the notes from each team:"),Object(i.b)("h3",{id:"callstack"},"Callstack"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-native.eu"}),"React Native EU")," is over. More than 300 participants from 33 countries have visited Wroclaw. Talks can be found ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.youtube.com/channel/UCUNE_g1mQPuyW975WjgjYxA/videos"}),"on Youtube"),"."),Object(i.b)("li",{parentName:"ul"},"We are slowly getting back to our open source schedule after the conference. One thing worth mentioning is that we are working on a next release of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/callstack/react-native-opentok"}),"react-native-opentok")," that fixes most of the existing issues.")),Object(i.b)("h3",{id:"geekyants"},"GeekyAnts"),Object(i.b)("p",null,"Trying to lower the entry barrier for the developers embracing React Native with the following things:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Announced ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://builderx.io/"}),"BuilderX.io")," at ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://react-native.eu"}),"React Native EU"),". BuilderX is a design tool that directly works with JavaScript files (only React Native is supported at the moment) to generate beautiful, readable, and editable code."),Object(i.b)("li",{parentName:"ul"},"Launched ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://reactnativeseed.com/"}),"ReactNativeSeed.com")," which provides a set of boilerplates for your next React Native project. It comes with a variety of options that include TypeScript & Flow for data-types, MobX, Redux, and mobx-state-tree for state-management with CRNA and plain React-Native as the stack.")),Object(i.b)("h3",{id:"expo"},"Expo"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Will release SDK 21 shortly, which adds support for react-native 0.48.3 and a bunch of bugfixes/reliability improvements/new features in the Expo SDK, including video recording, a new splash screen API, support for ",Object(i.b)("inlineCode",{parentName:"li"},"react-native-gesture-handler"),", and improved error handling."),Object(i.b)("li",{parentName:"ul"},"Re: ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kmagiera/react-native-gesture-handler"}),"react-native-gesture-handler"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/kmagiera"}),"Krzysztof Magiera")," of ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://swmansion.com/"}),"Software Mansion")," continues pushing this forward and we've been helping him with testing it and funding part of his development time. Having this integrated in Expo in SDK21 will allow people to play with it easily in Snack, so we're excited to see what people come up with."),Object(i.b)("li",{parentName:"ul"},"Re: improved error logging / handling - see ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://gist.github.com/brentvatne/00407710a854627aa021fdf90490b958"}),"this gist of an internal Expo PR"),' for details on logging, (in particular, "Problem 2"), and ',Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/expo/xdl/commit/1d62eca293dfb867fc0afc920c3dad94b7209987"}),"this commit")," for a change that handles failed attempts to import npm standard library modules. There is plenty of opportunity to improve error messages upstream in React Native in this way and we will work on follow up upstream PRs. It would be great for the community to get involved too."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://native.directory/"}),"native.directory")," continues to grow, you can add your projects from ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-community/native-directory"}),"the Github repo"),"."),Object(i.b)("li",{parentName:"ul"},"Visit hackathons around North America, including ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://pennapps.com/"}),"PennApps"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://hackthenorth.com/"}),"Hack The North"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://hackmit.org/"}),"HackMIT"),", and soon ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://mhacks.org/"}),"MHacks"),".")),Object(i.b)("h3",{id:"facebook"},"Facebook"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Working on improving ",Object(i.b)("inlineCode",{parentName:"li"},"<Text>")," and ",Object(i.b)("inlineCode",{parentName:"li"},"<TextInput>")," components on Android. (Native auto-growing for ",Object(i.b)("inlineCode",{parentName:"li"},"<TextInput>"),"; deeply nested ",Object(i.b)("inlineCode",{parentName:"li"},"<Text>")," components layout issues; better code structure; performance optimizations)."),Object(i.b)("li",{parentName:"ul"},"We're still looking for additional contributors who would like to help triage issues and pull requests.")),Object(i.b)("h3",{id:"microsoft"},"Microsoft"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Released Code Signing feature for CodePush. React Native developers are now able to sign their application bundles in CodePush. The announcement can be found ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://microsoft.github.io/code-push/articles/CodeSigningAnnouncement.html"}),"here")),Object(i.b)("li",{parentName:"ul"},"Working on completing integration of CodePush to Mobile Center. Considering test/crash integration as well.")),Object(i.b)("h2",{id:"next-session"},"Next session"),Object(i.b)("p",null,"The next session is scheduled for Wednesday 10, October 2017. As this was only our fourth meeting, we'd like to know how do these notes benefit the React Native community. Feel free to ping me ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/grabbou"}),"on Twitter")," if you have any suggestion on how we should improve the output of the meeting."))}b.isMDXComponent=!0}}]);