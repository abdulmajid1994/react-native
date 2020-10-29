(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var o=a(0),n=a.n(o);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),p=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},b=function(e){var t=p(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(a),d=o,h=b["".concat(i,".").concat(d)]||b[d]||u[d]||r;return a?n.a.createElement(h,l(l({ref:t},c),{},{components:a})):n.a.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1106:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/0.63-logbox-a209851328e548bf0810bdee050fb960.png"},591:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var o=a(2),n=a(7),r=(a(0),a(1006)),i={title:"Announcing React Native 0.63 with LogBox",author:"Mike Grabowski",authorTitle:"CTO and Co-Founder at Callstack",authorURL:"https://twitter.com/grabbou",authorImageURL:"https://avatars0.githubusercontent.com/u/2464966?s=460&v=4",authorTwitter:"grabbou",tags:["announcement","release"]},l={permalink:"/react-native/blog/2020/07/06/version-0.63",source:"@site/blog/2020-07-06-version-0.63.md",description:"Today we\u2019re releasing React Native 0.63 that ships with LogBox turned on by default.",date:"2020-07-06T00:00:00.000Z",tags:[{label:"announcement",permalink:"/react-native/blog/tags/announcement"},{label:"release",permalink:"/react-native/blog/tags/release"}],title:"Announcing React Native 0.63 with LogBox",readingTime:7.12,truncated:!1,prevItem:{title:"React Native Team Principles",permalink:"/react-native/blog/2020/07/17/react-native-principles"},nextItem:{title:"Announcing React Native 0.62 with Flipper",permalink:"/react-native/blog/2020/03/26/version-0.62"}},s=[{value:"LogBox",id:"logbox",children:[]},{value:"Pressable",id:"pressable",children:[]},{value:"Native Colors (PlatformColor, DynamicColorIOS)",id:"native-colors-platformcolor-dynamiccolorios",children:[]},{value:"Dropping iOS 9 and Node.js 8 support",id:"dropping-ios-9-and-nodejs-8-support",children:[]},{value:"Other notable improvements",id:"other-notable-improvements",children:[]},{value:"Thanks",id:"thanks",children:[]}],c={rightToc:s};function p(e){var t=e.components,i=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Today we\u2019re releasing React Native 0.63 that ships with LogBox turned on by default."),Object(r.b)("h2",{id:"logbox"},"LogBox"),Object(r.b)("p",null,"We\u2019ve heard frequent feedback from the community that errors and warnings are difficult to debug in React Native. To address these issues we took a look at the entire error, warning, and log system in React Native and redesigned it ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=Y8brBH5O-bQ&feature=youtu.be"}),"from the ground up"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Screenshot of LogBox",src:a(1106).default})),Object(r.b)("p",null,"LogBox is a completely redesigned redbox, yellowbox, and logging experience in React Native. In 0.62 we introduced LogBox as an opt-in. In this release, we\u2019re launching LogBox as the default experience in all of React Native."),Object(r.b)("p",null,"LogBox addresses complaints that errors and warnings were too verbose, poorly formatted, or unactionable by focusing on three primary goals:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Concise"),": Logs should provide the minimum amount of information necessary to debug an issue."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Formatted"),": Logs should be formatted so that you can quickly find the information you need."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Actionable"),": Logs should be actionable, so you can fix the issue and move on.")),Object(r.b)("p",null,"To achieve these goals, LogBox includes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Log notifications"),": We\u2019ve redesigned the warning notifications and added support for errors so that all console.warn and console.log messages show up as notifications instead of covering your app."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code Frames"),": Every error and warning now includes a code frame that shows the source code of the log right inside the app, allowing you to quickly identify the source of your issue."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Component Stacks"),": All component stacks are now stripped from error messages and put into their own section with the top three frames visible. This gives you a single, consistent space to expect stack frame information that doesn\u2019t clutter the log message."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Stack Frame Collapsing"),": By default we now collapse call stack frames not related to your application\u2019s code so you can quickly see the issue in your app and not sift through React Native internals."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Syntax Error Formatting"),": We\u2019ve improved the formatting for syntax errors and added codeframes with syntax highlighting so you can see the source of the error, fix it, and continue coding without React Native getting in your way.")),Object(r.b)("p",null,"We\u2019ve wrapped all of these features into an improved visual design that\u2019s consistent between errors and warnings and allows paginating through all logs in one enjoyable UI."),Object(r.b)("p",null,"With this change we\u2019re also deprecating YellowBox in favor of LogBox APIs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LogBox.ignoreLogs()"),": This function replaces ",Object(r.b)("inlineCode",{parentName:"li"},"YellowBox.ignoreLogs([])")," as a way to silence any logs that match the given strings or regexes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"LogBox.ignoreAllLogs()"),": This function replaces ",Object(r.b)("inlineCode",{parentName:"li"},"console.disableYellowBox")," as a way to turn off error or warning notifications. Note: this only disables notifications, uncaught errors will still open a full screen LogBox.")),Object(r.b)("p",null,"In 0.63, we will warn when using these deprecated modules or methods. Please update your call sites off of these APIs before they are removed in 0.64."),Object(r.b)("p",null,"For more information on LogBox and debugging react native, see the docs ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/debugging#in-app-errors-and-warnings"}),"here"),"."),Object(r.b)("h2",{id:"pressable"},"Pressable"),Object(r.b)("p",null,"React Native is built to enable applications to meet user\u2019s expectations of the platform. This includes avoiding \u201ctells\u201d\u2014little things that give away that the experience was built with React Native. One major source of these tells has been the Touchable components: ",Object(r.b)("inlineCode",{parentName:"p"},"Button"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableWithoutFeedback"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableHighlight"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableBounce"),". These components make your application interactive by allowing you to provide visual feedback to user interactions. However, because they include built-in styles and effects that don\u2019t match the platform interaction, users can tell when experiences are written with React Native."),Object(r.b)("p",null,"Further, as React Native has grown and our bar for high-quality applications has gone up, these components haven't grown with it. React Native now supports platforms like Web, Desktop, and TV, but support for additional input modalities has been lacking. React Native needs to support high-quality interaction experiences on all platforms."),Object(r.b)("p",null,"To address these problems, we are shipping a new core component called ",Object(r.b)("inlineCode",{parentName:"p"},"Pressable"),". This component can be used to detect various types of interactions. The API was designed to provide direct access to the current state of interaction without having to maintain state manually in a parent component. It was also designed to enable platforms to extend it's capabilities to include hover, blur, focus, and more. We expect that most people will build and share components utilizing ",Object(r.b)("inlineCode",{parentName:"p"},"Pressable")," under the hood instead of relying on the default experience of something like ",Object(r.b)("inlineCode",{parentName:"p"},"TouchableOpacity"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Pressable, Text } from 'react-native';\n\n<Pressable\n  onPress={() => {\n    console.log('pressed');\n  }}\n  style={({ pressed }) => ({\n    backgroundColor: pressed ? 'lightskyblue' : 'white'\n  })}>\n  <Text style={styles.text}>Press Me!</Text>\n</Pressable>;\n")),Object(r.b)("p",{className:"snippet-caption"},"A simple example of a Pressable component in action"),Object(r.b)("p",null,"You can learn more about it from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/pressable"}),"the documentation"),"."),Object(r.b)("h2",{id:"native-colors-platformcolor-dynamiccolorios"},"Native Colors (PlatformColor, DynamicColorIOS)"),Object(r.b)("p",null,"Every native platform has the concept of system-defined colors. Colors that automatically respond to system theme settings such as Light or Dark mode, accessibility settings such as a High Contrast mode, and even its context within the app such as the traits of a containing view or window."),Object(r.b)("p",null,"While it is possible to detect some of these settings via the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/appearance#getcolorscheme"}),Object(r.b)("inlineCode",{parentName:"a"},"Appearance"))," API and/or ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/accessibilityinfo#isgrayscaleenabled"}),Object(r.b)("inlineCode",{parentName:"a"},"AccessibilityInfo"))," and set your styles accordingly, such abstractions are not only costly to develop but are just approximating the appearance of native colors. These inconsistencies are particularly noticeable when working on a hybrid application, where React Native elements co-exist next to the native ones."),Object(r.b)("p",null,"React Native now provides an out-of-the-box solution to use these system colors. ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor()")," is a new API that can be used like any other color in React Native."),Object(r.b)("p",null,"For example, on iOS, the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uicolor/ui_element_colors?language=objc"}),"system provides a color called ",Object(r.b)("inlineCode",{parentName:"a"},"labelColor")),". That can be used in React Native with ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Text, PlatformColor } from 'react-native';\n\n<Text style={{ color: PlatformColor('labelColor') }}>\n  This is a label\n</Text>;\n")),Object(r.b)("p",{className:"snippet-caption"},"Sets the color of the Text component to labelColor as defined by iOS."),Object(r.b)("p",null,"Android, on the other hand, ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/R.attr#colorButtonNormal"}),"provides colors like colorButtonNormal"),". You can use this color in React Native with:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { View, Text, PlatformColor } from 'react-native';\n\n<View\n  style={{\n    backgroundColor: PlatformColor('?attr/colorButtonNormal')\n  }}>\n  <Text>This is colored like a button!</Text>\n</View>;\n")),Object(r.b)("p",{className:"snippet-caption"},"Sets the background color of the View component to colorButtonNormal as defined by Android."),Object(r.b)("p",null,"You can learn more about ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor")," from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/platformcolor"}),"the documentation"),". You can also check the actual ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/blob/master/packages/rn-tester/js/examples/PlatformColor/PlatformColorExample.js"}),"code examples present in the RNTester"),"."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," is an iOS only API that lets you define which color to use in light and dark mode. Similar to ",Object(r.b)("inlineCode",{parentName:"p"},"PlatformColor"),", this can be used anywhere you can use colors. ",Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," uses iOS\u2019s ",Object(r.b)("inlineCode",{parentName:"p"},"colorWithDynamicProvider")," under the hood."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"import { Text, DynamicColorIOS } from 'react-native';\n\nconst customDynamicTextColor = DynamicColorIOS({\n  dark: 'lightskyblue',\n  light: 'midnightblue'\n});\n\n<Text style={{ color: customDynamicTextColor }}>\n  This color changes automatically based on the system theme!\n</Text>;\n")),Object(r.b)("p",{className:"snippet-caption"},"Changes the text color based on the system theme"),Object(r.b)("p",null,"You can learn more about ",Object(r.b)("inlineCode",{parentName:"p"},"DynamicColorIOS")," from ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactnative.dev/docs/dynamiccolorios"}),"the documentation"),"."),Object(r.b)("h2",{id:"dropping-ios-9-and-nodejs-8-support"},"Dropping iOS 9 and Node.js 8 support"),Object(r.b)("p",null,"After over four years from its release, we are dropping support for iOS 9. This change will allow us to move faster by being able to reduce the number of compatibility checks that need to be placed in the native code to detect whether a given feature was supported on a certain iOS version. With its ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://david-smith.org/iosversionstats/"}),"market share of 1%"),", it shouldn\u2019t have much negative impact on your customers."),Object(r.b)("p",null,"At the same time, we are dropping support for Node 8. ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/fr/blog/release/v8.9.0/"}),"Its LTS maintenance cycle expired in December 2019"),". The current LTS is Node 10 and it is now the version that we are targeting. If you are still using Node 8 for the development of React Native applications, we encourage you to upgrade in order to receive all the latest security fixes and updates."),Object(r.b)("h2",{id:"other-notable-improvements"},"Other notable improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Support rendering ",Object(r.b)("inlineCode",{parentName:"strong"},"<View />")," in ",Object(r.b)("inlineCode",{parentName:"strong"},"<Text />")," without explicit size"),": You can now render any ",Object(r.b)("inlineCode",{parentName:"li"},"<View />")," inside any ",Object(r.b)("inlineCode",{parentName:"li"},"<Text />")," component without setting its width and height explicitly, which wasn\u2019t always possible. On previous releases of React Native, this would result in a RedBox."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Changed iOS LaunchScreen from ",Object(r.b)("inlineCode",{parentName:"strong"},"xib")," to ",Object(r.b)("inlineCode",{parentName:"strong"},"storyboard")),": Starting April 30, 2020, all apps submitted to the App Store must use an Xcode storyboard to provide the app\u2019s launch screen and all iPhone apps must support all iPhone screens. This commit adjusts the default React Native template to be compatible with this requirement.")),Object(r.b)("h2",{id:"thanks"},"Thanks"),Object(r.b)("p",null,"Thank you to the hundreds of contributors that helped make 0.63 possible!"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Special thanks to ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/rickhanlonii"}),"Rick Hanlon")," for authoring the section on ",Object(r.b)("inlineCode",{parentName:"p"},"LogBox")," and ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://twitter.com/Eli_White"}),"Eli White")," for authoring the ",Object(r.b)("inlineCode",{parentName:"p"},"Pressable")," part of this article.")),Object(r.b)("p",null,"To see all the updates, take a look at the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/react-native-community/releases/blob/master/CHANGELOG.md#0630"}),"0.63 changelog"),"."))}p.isMDXComponent=!0}}]);