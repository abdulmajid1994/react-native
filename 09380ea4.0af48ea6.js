(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||o;return a?i.a.createElement(m,c(c({ref:t},s),{},{components:a})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var s=2;s<o;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1013:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/GettingStartedXcodeCommandLineTools-8259be8d3ab8575bec2b71988163c850.png"},1026:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/GettingStartediOSSuccess-e6dd7fc2baa303d1f30373d996a6e51d.png"},60:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),i=a(7),o=(a(0),a(1006)),r={},c={unversionedId:"_getting-started-macos-ios",id:"version-0.62/_getting-started-macos-ios",isDocsHomePage:!1,title:"_getting-started-macos-ios",description:"Installing dependencies",source:"@site/versioned_docs/version-0.62/_getting-started-macos-ios.md",slug:"/_getting-started-macos-ios",permalink:"/react-native/docs/0.62/_getting-started-macos-ios",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/_getting-started-macos-ios.md",version:"0.62",lastUpdatedAt:1603945169},l=[{value:"Installing dependencies",id:"installing-dependencies",children:[{value:"Node &amp; Watchman",id:"node--watchman",children:[]},{value:"Xcode &amp; CocoaPods",id:"xcode--cocoapods",children:[]},{value:"React Native Command Line Interface",id:"react-native-command-line-interface",children:[]}]},{value:"Creating a new application",id:"creating-a-new-application",children:[{value:"Optional Using a specific version or template",id:"optional-using-a-specific-version-or-template",children:[]}]},{value:"Running your React Native application",id:"running-your-react-native-application",children:[{value:"Step 1: Start Metro",id:"step-1-start-metro",children:[]},{value:"Step 2: Start your application",id:"step-2-start-your-application",children:[]},{value:"Running on a device",id:"running-on-a-device",children:[]},{value:"Modifying your app",id:"modifying-your-app",children:[]},{value:"That&#39;s it!",id:"thats-it",children:[]}]},{value:"Now what?",id:"now-what",children:[]}],s={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installing-dependencies"},"Installing dependencies"),Object(o.b)("p",null,"You will need Node, Watchman, the React Native command line interface, and Xcode."),Object(o.b)("p",null,"While you can use any editor of your choice to develop your app, you will need to install Xcode in order to set up the necessary tooling to build your React Native app for iOS."),Object(o.b)("h3",{id:"node--watchman"},"Node & Watchman"),Object(o.b)("p",null,"We recommend installing Node and Watchman using ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://brew.sh/"}),"Homebrew"),". Run the following commands in a Terminal after installing Homebrew:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"brew install node\nbrew install watchman\n")),Object(o.b)("p",null,"If you have already installed Node on your system, make sure it is Node 10 or newer."),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/watchman"}),"Watchman")," is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance."),Object(o.b)("h3",{id:"xcode--cocoapods"},"Xcode & CocoaPods"),Object(o.b)("p",null,"The easiest way to install Xcode is via the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://itunes.apple.com/us/app/xcode/id497799835?mt=12"}),"Mac App Store"),". Installing Xcode will also install the iOS Simulator and all the necessary tools to build your iOS app."),Object(o.b)("p",null,"If you have already installed Xcode on your system, make sure it is version 9.4 or newer."),Object(o.b)("h4",{id:"command-line-tools"},"Command Line Tools"),Object(o.b)("p",null,'You will also need to install the Xcode Command Line Tools. Open Xcode, then choose "Preferences..." from the Xcode menu. Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.'),Object(o.b)("p",null,Object(o.b)("img",{alt:"Xcode Command Line Tools",src:a(1013).default})),Object(o.b)("h4",{id:"installing-an-ios-simulator-in-xcode"},"Installing an iOS Simulator in Xcode"),Object(o.b)("p",null,"To install a simulator, open ",Object(o.b)("strong",null,"Xcode > Preferences...")," and select the ",Object(o.b)("strong",null,"Components")," tab. Select a simulator with the corresponding version of iOS you wish to use."),Object(o.b)("h4",{id:"cocoapods"},"CocoaPods"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://cocoapods.org/"}),"CocoaPods")," is built with Ruby and it will be installable with the default Ruby available on macOS. You can use a Ruby Version manager, however we recommend that you use the standard Ruby available on macOS unless you know what you're doing."),Object(o.b)("p",null,"Using the default Ruby install will require you to use ",Object(o.b)("inlineCode",{parentName:"p"},"sudo")," when installing gems. (This is only an issue for the duration of the gem installation, though.)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"sudo gem install cocoapods\n")),Object(o.b)("p",null,"For more information, please visit ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://guides.cocoapods.org/using/getting-started.html"}),"CocoaPods Getting Started guide"),"."),Object(o.b)("h3",{id:"react-native-command-line-interface"},"React Native Command Line Interface"),Object(o.b)("p",null,"React Native has a built-in command line interface. Rather than install and manage a specific version of the CLI globally, we recommend you access the current version at runtime using ",Object(o.b)("inlineCode",{parentName:"p"},"npx"),", which ships with Node.js. With ",Object(o.b)("inlineCode",{parentName:"p"},"npx react-native <command>"),", the current stable version of the CLI will be downloaded and executed at the time the command is run."),Object(o.b)("h2",{id:"creating-a-new-application"},"Creating a new application"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you previously installed a global ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," package, please remove it as it may cause unexpected issues.")),Object(o.b)("p",null,"You can use React Native's built-in command line interface to generate a new project. Let's create a new React Native project called \"AwesomeProject\":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native init AwesomeProject\n")),Object(o.b)("p",null,'This is not necessary if you are integrating React Native into an existing application, if you "ejected" from Expo, or if you\'re adding iOS support to an existing React Native project (see ',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.62/platform-specific-code"}),"Platform Specific Code"),"). You can also use a third-party CLI to init your React Native app, such as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/infinitered/ignite"}),"Ignite CLI"),"."),Object(o.b)("h3",{id:"optional-using-a-specific-version-or-template"},"[Optional]"," Using a specific version or template"),Object(o.b)("p",null,"If you want to start a new project with a specific React Native version, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"--version")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native init AwesomeProject --version X.XX.X\n")),Object(o.b)("p",null,"You can also start a project with a custom React Native template, like TypeScript, with ",Object(o.b)("inlineCode",{parentName:"p"},"--template")," argument:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native init AwesomeTSProject --template react-native-template-typescript\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," If the above command is failing, you may have old version of ",Object(o.b)("inlineCode",{parentName:"p"},"react-native")," or ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," installed globally on your pc. Try uninstalling the cli and run the cli using ",Object(o.b)("inlineCode",{parentName:"p"},"npx"),".")),Object(o.b)("h2",{id:"running-your-react-native-application"},"Running your React Native application"),Object(o.b)("h3",{id:"step-1-start-metro"},"Step 1: Start Metro"),Object(o.b)("p",null,'First, you will need to start Metro, the JavaScript bundler that ships with React Native. Metro "takes in an entry file and various options, and returns a single JavaScript file that includes all your code and its dependencies."\u2014',Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/concepts"}),"Metro Docs")),Object(o.b)("p",null,"To start Metro, run ",Object(o.b)("inlineCode",{parentName:"p"},"npx react-native start")," inside your React Native project folder:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native start\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"react-native start")," starts Metro Bundler."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you use the Yarn package manager, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"yarn")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," when running React Native commands inside an existing project.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you're familiar with web development, Metro is a lot like webpack\u2014for React Native apps. Unlike Kotlin or Java, JavaScript isn't compiled\u2014and neither is React Native. Bundling isn't the same as compiling, but it can help improve startup performance and translate some platform-specific JavaScript into more JavaScript.")),Object(o.b)("h3",{id:"step-2-start-your-application"},"Step 2: Start your application"),Object(o.b)("p",null,"Let Metro Bundler run in its own terminal. Open a new terminal inside your React Native project folder. Run the following:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx react-native run-ios\n")),Object(o.b)("p",null,"You should see your new app running in the iOS Simulator shortly."),Object(o.b)("p",null,Object(o.b)("img",{alt:"AwesomeProject on iOS",src:a(1026).default})),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npx react-native run-ios")," is one way to run your app. You can also run it directly from within Xcode."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you can't get this to work, see the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.62/troubleshooting#content"}),"Troubleshooting")," page.")),Object(o.b)("h3",{id:"running-on-a-device"},"Running on a device"),Object(o.b)("p",null,"The above command will automatically run your app on the iOS Simulator by default. If you want to run the app on an actual physical iOS device, please follow the instructions ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/0.62/running-on-device"}),"here"),"."),Object(o.b)("h3",{id:"modifying-your-app"},"Modifying your app"),Object(o.b)("p",null,"Now that you have successfully run the app, let's modify it."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Open ",Object(o.b)("inlineCode",{parentName:"li"},"App.js")," in your text editor of choice and edit some lines."),Object(o.b)("li",{parentName:"ul"},"Hit ",Object(o.b)("inlineCode",{parentName:"li"},"\u2318R")," in your iOS Simulator to reload the app and see your changes!")),Object(o.b)("h3",{id:"thats-it"},"That's it!"),Object(o.b)("p",null,"Congratulations! You've successfully run and modified your first React Native app."),Object(o.b)("center",null,Object(o.b)("img",{src:"/docs/assets/GettingStartedCongratulations.png",width:"150"})),Object(o.b)("h2",{id:"now-what"},"Now what?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If you want to add this new React Native code to an existing application, check out the ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/react-native/docs/0.62/integration-with-existing-apps"}),"Integration guide"),".")),Object(o.b)("p",null,"If you're curious to learn more about React Native, check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"getting-started"}),"Introduction to React Native"),"."))}p.isMDXComponent=!0}}]);