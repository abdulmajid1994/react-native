(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||r;return a?i.a.createElement(h,s(s({ref:t},l),{},{components:a})):i.a.createElement(h,s({ref:t},l))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},1007:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},1008:function(e,t,a){"use strict";var n=a(0),i=a(1009);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},1009:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},1010:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1008),o=a(1007),s=a(54),c=a.n(s),l=37,u=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,p=e.values,d=e.groupId,b=e.className,h=Object(r.a)(),f=h.tabGroupChoices,m=h.setTabGroupChoices,y=Object(n.useState)(s),v=y[0],g=y[1],O=Object(n.useState)(!1),j=O[0],w=O[1];if(null!=d){var k=f[d];null!=k&&k!==v&&p.some((function(e){return e.value===k}))&&g(k)}var N=function(e){g(e),null!=d&&m(d,e)},S=[],A=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},x=function(){w(!1)};return Object(n.useEffect)((function(){return window.addEventListener("keydown",A),window.addEventListener("mousedown",x),function(){window.removeEventListener("keydown",A),window.removeEventListener("mousedown",x)}}),[]),i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},b)},p.map((function(e){var t=e.value,a=e.label;return i.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:j?{}:{outline:"none"},key:t,ref:function(e){return S.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(S,e.target,e),A(e)},onFocus:function(){return N(t)},onClick:function(){N(t),w(!1)},onPointerDown:function(){return w(!1)}},a)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((function(e){return e.props.value===v}))[0]))}},1011:function(e,t,a){"use strict";var n=a(0),i=a.n(n);t.a=function(e){return i.a.createElement("div",null,e.children)}},1012:function(e,t,a){"use strict";var n=a(6),i=!!n.a.canUseDOM&&navigator.platform.startsWith("Mac"),r=!!n.a.canUseDOM&&navigator.platform.startsWith("Win"),o=i?"ios":"android",s=i?"macos":r?"windows":"linux";t.a={defaultGuide:"quickstart",defaultOs:s,defaultPackageManager:"npm",defaultPlatform:o,defaultSyntax:"functional",getDevNotesTabs:function(e){return void 0===e&&(e=["android","ios","web","windows"]),[e.includes("android")?{label:"Android",value:"android"}:void 0,e.includes("ios")?{label:"iOS",value:"ios"}:void 0,e.includes("web")?{label:"Web",value:"web"}:void 0,e.includes("windows")?{label:"Windows",value:"windows"}:void 0].filter(Boolean)},guides:[{label:"Expo CLI Quickstart",value:"quickstart"},{label:"React Native CLI Quickstart",value:"native"}],oses:[{label:"macOS",value:"macos"},{label:"Windows",value:"windows"},{label:"Linux",value:"linux"}],packageManagers:[{label:"npm",value:"npm"},{label:"Yarn",value:"yarn"}],platforms:[{label:"Android",value:"android"},{label:"iOS",value:"ios"}],syntax:[{label:"Function Component",value:"functional"},{label:"Class Component",value:"classical"}]}},1073:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/diagram_pkce-e0b4a829176ac05d07b0bcec73994985.svg"},241:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return u})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(7),r=(a(0),a(1006)),o=a(1010),s=a(1011),c=a(1012),l={id:"security",title:"Security"},u={unversionedId:"security",id:"version-0.62/security",isDocsHomePage:!1,title:"Security",description:"Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable\u2014we\u2019ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!",source:"@site/versioned_docs/version-0.62/security.md",slug:"/security",permalink:"/react-native/docs/0.62/security",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.62/security.md",version:"0.62",lastUpdatedAt:1603945169,sidebar:"version-0.62/docs",previous:{title:"Networking",permalink:"/react-native/docs/0.62/network"},next:{title:"Native Modules Setup",permalink:"/react-native/docs/0.62/native-modules-setup"}},p=[{value:"Storing Sensitive Info",id:"storing-sensitive-info",children:[{value:"Async Storage",id:"async-storage",children:[]},{value:"Secure Storage",id:"secure-storage",children:[]}]},{value:"Authentication and Deep Linking",id:"authentication-and-deep-linking",children:[{value:"OAuth2 and Redirects",id:"oauth2-and-redirects",children:[]}]},{value:"Network Security",id:"network-security",children:[{value:"SSL Pinning",id:"ssl-pinning",children:[]}]},{value:"Summary",id:"summary",children:[]}],d={rightToc:p};function b(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Security is often overlooked when building apps. It is true that it is impossible to build software that is completely impenetrable\u2014we\u2019ve yet to invent a completely impenetrable lock (bank vaults do, after all, still get broken into). However, the probability of falling victim to a malicious attack or being exposed for a security vulnerability is inversely proportional to the effort you\u2019re willing to put in to protecting your application against any such eventuality. Although an ordinary padlock is pickable, it is still much harder to get past than a cabinet hook!"),Object(r.b)("p",null,"In this guide, you will learn about best practices for storing sensitive information, authentication, network security, and tools that will help you secure your app. This is not a preflight checklist\u2014it is a catalogue of options, each of which will help further protect your app and users."),Object(r.b)("h2",{id:"storing-sensitive-info"},"Storing Sensitive Info"),Object(r.b)("p",null,"Never store sensitive API keys in your app code. Anything included in your code could be accessed in plain text by anyone inspecting the app bundle. Tools like ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/zetachang/react-native-dotenv"}),"react-native-dotenv")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/luggit/react-native-config/"}),"react-native-config")," are great for adding environment-specific variables like API endpoints, but they should not be confused with server-side environment variables, which can often contain secrets and api keys."),Object(r.b)("p",null,"If you must have an API key or a secret to access some resource from your app, the most secure way to handle this would be to build an orchestration layer between your app and the resource. This could be a serverless function (e.g. using AWS Lambda or Google Cloud Functions) which can forward the request with the required API key or secret. Secrets in server side code cannot be accessed by the API consumers the same way secrets in your app code can."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For persisted user data, choose the right type of storage based on its sensitivity.")," As your app is used, you\u2019ll often find the need to save data on the device, whether to support your app being used offline, cut down on network requests or save your user\u2019s access token between sessions so they wouldn\u2019t have to re-authenticate each time they use the app."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Persisted vs unpersisted")," \u2014 persisted data is written to the device\u2019s memory, which lets the data be read by your app across application launches without having to do another network request to fetch it or asking the user to re-enter it. But this also can make that data more vulnerable to being accessed by attackers. Unpersisted data is never written to memory\u2014so there's no data to access!")),Object(r.b)("h3",{id:"async-storage"},"Async Storage"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/async-storage"}),"Async Storage")," is a community-maintained module for React Native that provides an asynchronous, unencrypted, key-value store. Async Storage is not shared between apps: every app has its own sandbox environment and has no access to data from other apps."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Do")," use asynch storage when..."),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("strong",{parentName:"th"},"Don't")," use asynch storage for..."))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting non-sensitive data across app runs"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Token storage")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting Redux state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Secrets")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Persisting GraphQL state"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Storing global app-wide variables"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(r.b)("h4",{id:"developer-notes"},"Developer Notes"),Object(r.b)(o.a,{groupId:"guide",defaultValue:"web",values:c.a.getDevNotesTabs(["web"]),mdxType:"Tabs"},Object(r.b)(s.a,{value:"web",mdxType:"TabItem"},Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Async Storage is the React Native equivalent of Local Storage from the web")))),Object(r.b)("h3",{id:"secure-storage"},"Secure Storage"),Object(r.b)("p",null,"React Native does not come bundled with any way of storing sensitive data. However, there are pre-existing solutions for Android and iOS platforms."),Object(r.b)("h4",{id:"ios---keychain-services"},"iOS - Keychain Services"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/security/keychain_services"}),"Keychain Services")," allows you to securely store small chunks of sensitive info for the user. This is an ideal place to store certificates, tokens, passwords, and any other sensitive information that doesn\u2019t belong in Async Storage."),Object(r.b)("h4",{id:"android---secure-shared-preferences"},"Android - Secure Shared Preferences"),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/reference/android/content/SharedPreferences"}),"Shared Preferences")," is the Android equivalent for a persistent key-value data store. ",Object(r.b)("strong",{parentName:"p"},"Data in Shared Preferences is not encrypted by default"),", but ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/topic/security/data"}),"Encrypted Shared Preferences")," wraps the Shared Preferences class for Android, and automatically encrypts keys and values."),Object(r.b)("h4",{id:"android---keystore"},"Android - Keystore"),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/articles/keystore"}),"Android Keystore")," system lets you store cryptographic keys in a container to make it more difficult to extract from the device."),Object(r.b)("p",null,"In order to use iOS Keychain services or Android Secure Shared Preferences, you can either write a bridge yourself or use a library which wraps them for you and provides a unified API at your own risk. Some libraries to consider:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/oblador/react-native-keychain"}),"react-native-keychain")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mCodex/react-native-sensitive-info"}),"react-native-sensitive-info")," - secure for iOS, but uses Android Shared Preferences for Android (which is not secure by default). There is however a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/mCodex/react-native-sensitive-info/tree/keystore"}),"fork"),") that uses Android Keystore"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/CodingZeal/redux-persist-sensitive-storage"}),"redux-persist-sensitive-storage")," - wraps react-native-sensitive-info")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Be mindful of unintentionally storing or exposing sensitive info.")," This could happen accidentally, for example saving sensitive form data in redux state and persisting the whole state tree in Async Storage. Or sending user tokens and personal info to an application monitoring service such as Sentry or Crashlytics.")),Object(r.b)("h2",{id:"authentication-and-deep-linking"},"Authentication and Deep Linking"),Object(r.b)("p",null,"Mobile apps have a unique vulnerability that is non-existent in the web: ",Object(r.b)("strong",{parentName:"p"},"deep linking"),". Deep linking is a way of sending data directly to a native application from an outside source. A deep link looks like ",Object(r.b)("inlineCode",{parentName:"p"},"app://")," where ",Object(r.b)("inlineCode",{parentName:"p"},"app")," is your app scheme and anything following the // could be used internally to handle the request."),Object(r.b)("p",null,"For example, if you were building an ecommerce app, you could use ",Object(r.b)("inlineCode",{parentName:"p"},"app://products/1")," to deep link to your app and open the product detail page for a product with id 1. You can think of these kind of like URLs on the web, but with one crucial distinction:"),Object(r.b)("p",null,"Deep links are not secure and you should never send any sensitive information in them."),Object(r.b)("p",null,"The reason deep links are not secure is because there is no centralized method of registering URL schemes. As an application developer, you can use almost any url scheme you choose by ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/inter-process_communication/allowing_apps_and_websites_to_link_to_your_content/defining_a_custom_url_scheme_for_your_app"}),"configuring it in Xcode")," for iOS or ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.android.com/training/app-links/deep-linking"}),"adding an intent on Android"),"."),Object(r.b)("p",null,"There is nothing stopping a malicious application from hijacking your deep link by also registering to the same scheme and then obtaining access to the data your link contains. Sending something like ",Object(r.b)("inlineCode",{parentName:"p"},"app://products/1")," is not harmful, but sending tokens is a security concern."),Object(r.b)("p",null,"When the operating system has two or more applications to choose from when opening a link, Android will show the user a modal and ask them to choose which application to use to open the link. On iOS however, the operating system will make the choice for you, so the user will be blissfully unaware. Apple has made steps to address this issue in later iOS versions (iOS 11) where the instituted a first-come-first-served principle, although this vulnerability could still be exploited in different ways which you can read more about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://blog.trendmicro.com/trendlabs-security-intelligence/ios-url-scheme-susceptible-to-hijacking/"}),"here"),". Using ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/ios/universal-links/"}),"universal links")," will allow linking to content within your app securely in iOS."),Object(r.b)("h3",{id:"oauth2-and-redirects"},"OAuth2 and Redirects"),Object(r.b)("p",null,"The OAuth2 authentication protocol is incredibly popular nowadays, prided as the most complete and secure protocol around. The OpenID Connect protocol is also based on this. In OAuth2, the user is asked to authenticate via a third party. On successful completion, this third party redirects back to the requesting application with a verification code which can be exchanged for a JWT \u2014 a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://jwt.io/introduction/"}),"JSON Web Token"),". JWT is an open standard for securely transmitting information between parties on the web."),Object(r.b)("p",null,"On the web, this redirect step is secure, because URLs on the web are guaranteed to be unique. This is not true for apps because, as mentioned earlier, there is no centralized method of registering URL schemes! In order to address this security concern, an additional check must be added in the form of PKCE."),Object(r.b)("p",null,Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://oauth.net/2/pkce/"}),"PKCE"),", pronounced \u201cPixy\u201d stands for Proof of Key Code Exchange, and is an extension to the OAuth 2 spec. This involves adding an additional layer of security which verifies that the authentication and token exchange requests come from the same client. PKCE uses the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.movable-type.co.uk/scripts/sha256.html"}),"SHA 265")," Cryptographic Hash Algorithm. SHA 265 creates a unique \u201csignature\u201d for a text or file of any size, but it is:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Always the same length regardless of the input file"),Object(r.b)("li",{parentName:"ul"},"Guaranteed to be always produce the same result for the same input"),Object(r.b)("li",{parentName:"ul"},"One way (that is, you can\u2019t reverse engineer it to reveal the original input)")),Object(r.b)("p",null,"Now you have two values:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"code_verifier")," - a large random string generated by the client"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"code_challenge")," - the SHA 265 of the code_verifier")),Object(r.b)("p",null,"During the initial ",Object(r.b)("inlineCode",{parentName:"p"},"/authorize")," request, the client also sends the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge")," for the ",Object(r.b)("inlineCode",{parentName:"p"},"code_verifier")," it keeps in memory. After the authorize request has returned correctly, the client also sends the ",Object(r.b)("inlineCode",{parentName:"p"},"code_verifier")," that was used to generate the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge"),". The IDP will then calculate the ",Object(r.b)("inlineCode",{parentName:"p"},"code_challenge"),", see if it matches what was set on the very first ",Object(r.b)("inlineCode",{parentName:"p"},"/authorize")," request, and only send the access token if the values match."),Object(r.b)("p",null,"This guarantees that only the application that triggered the initial authorization flow would be able to successfully exchange the verification code for a JWT. So even if a malicious application gets access to the verification code, it will be useless on its own. To see this in action, check out ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://aaronparecki.com/oauth-2-simplified/#mobile-apps"}),"this example"),"."),Object(r.b)("p",null,"A library to consider for native OAuth is ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/FormidableLabs/react-native-app-auth"}),"react-native-app-auth"),". React-native-app-auth is an SDK for communicating with OAuth2 providers. It wraps the native ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openid/AppAuth-iOS"}),"AppAuth-iOS")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/openid/AppAuth-Android"}),"AppAuth-Android")," libraries and can support PKCE."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"React-native-app-auth can support PKCE only if your Identity Provider supports it.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"OAuth2 with PKCE",src:a(1073).default})),Object(r.b)("h2",{id:"network-security"},"Network Security"),Object(r.b)("p",null,"Your APIs should always use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.ssl.com/faqs/faq-what-is-ssl/"}),"SSL encryption"),". SSL encryption protects against the requested data being read in plain text between when it leaves the server and before it reaches the client. You\u2019ll know the endpoint is secure, because it starts with ",Object(r.b)("inlineCode",{parentName:"p"},"https://")," instead of ",Object(r.b)("inlineCode",{parentName:"p"},"http://"),"."),Object(r.b)("h3",{id:"ssl-pinning"},"SSL Pinning"),Object(r.b)("p",null,"Using https endpoints could still leave your data vulnerable to interception. With https, the client will only trust the server if it can provide a valid certificate that is signed by a trusted Certificate Authority that is pre-installed on the client. An attacker could take advantage of this by installing a malicious root CA certificate to the user\u2019s device, so the client would trust all certificates that are signed by the attacker. Thus, relying on certificates alone could still leave you vulnerable to a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Man-in-the-middle_attack"}),"man-in-the-middle attack"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"SSL pinning")," is a technique that can be used on the client side to avoid this attack. It works by embedding (or pinning) a list of trusted certificates to the client during development, so that only the requests signed with one of the trusted certificates will be accepted, and any self-signed certificates will not be."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"When using SSL pinning, you should be mindful of certificate expiry. Certificates expire every 1-2 years and when one does, it\u2019ll need to be updated in the app as well as on the server. As soon as the certificate on the server has been updated, any apps with the old certificate embedded in them will cease to work.")),Object(r.b)("h2",{id:"summary"},"Summary"),Object(r.b)("p",null,"There is no bulletproof way to handle security, but with conscious effort and diligence, it is possible to significantly reduce the likelihood of a security breach in your application. Invest in security proportional to the sensitivity of the data stored in your application, the number of users, and the damage a hacker could do when gaining access to their account. And remember: it\u2019s significantly harder to access information that was never requested in the first place."))}b.isMDXComponent=!0}}]);