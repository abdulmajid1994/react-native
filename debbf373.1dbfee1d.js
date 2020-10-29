(window.webpackJsonp=window.webpackJsonp||[]).push([[803],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),c=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=c(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,O=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?r.a.createElement(O,b(b({ref:t},s),{},{components:n})):r.a.createElement(O,b({ref:t},s))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},872:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(2),r=n(7),i=(n(0),n(1006)),l={id:"permissionsandroid",title:"PermissionsAndroid"},b={unversionedId:"permissionsandroid",id:"version-0.60/permissionsandroid",isDocsHomePage:!1,title:"PermissionsAndroid",description:"Project with Native Code Required",source:"@site/versioned_docs/version-0.60/permissionsandroid.md",slug:"/permissionsandroid",permalink:"/react-native/docs/0.60/permissionsandroid",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.60/permissionsandroid.md",version:"0.60",lastUpdatedAt:1603945169,sidebar:"version-0.60/api",previous:{title:"PanResponder",permalink:"/react-native/docs/0.60/panresponder"},next:{title:"PixelRatio",permalink:"/react-native/docs/0.60/pixelratio"}},o=[{value:"Example",id:"example",children:[]},{value:"Permissions that require prompting the user",id:"permissions-that-require-prompting-the-user",children:[]},{value:"Result strings for requesting permissions",id:"result-strings-for-requesting-permissions",children:[]},{value:"Methods",id:"methods",children:[{value:"<code>constructor()</code>",id:"constructor",children:[]},{value:"<code>check()</code>",id:"check",children:[]},{value:"<code>request()</code>",id:"request",children:[]},{value:"<code>requestMultiple()</code>",id:"requestmultiple",children:[]}]}],s={rightToc:o};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{class:"banner-native-code-required"},Object(i.b)("h3",null,"Project with Native Code Required"),Object(i.b)("p",null,"The following section only applies to projects with native code exposed. If you are using the managed `expo-cli` workflow, see the guide on ",Object(i.b)("a",{href:"https://docs.expo.io/versions/latest/sdk/permissions/"},"Permissions")," in the Expo documentation for the appropriate alternative.")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid"),' provides access to Android M\'s new permissions model. The so-called "normal" permissions are granted by default when the application is installed as long as they appear in ',Object(i.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),'. However, "dangerous" permissions require a dialog prompt. You should use this module for those permissions.'),Object(i.b)("p",null,"On devices before SDK version 23, the permissions are automatically granted if they appear in the manifest, so ",Object(i.b)("inlineCode",{parentName:"p"},"check")," should always result to ",Object(i.b)("inlineCode",{parentName:"p"},"true")," and ",Object(i.b)("inlineCode",{parentName:"p"},"request")," should always resolve to ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS.GRANTED"),"."),Object(i.b)("p",null,"If a user has previously turned off a permission that you prompt for, the OS will advise your app to show a rationale for needing the permission. The optional ",Object(i.b)("inlineCode",{parentName:"p"},"rationale")," argument will show a dialog prompt only if necessary - otherwise the normal permission prompt will appear."),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { PermissionsAndroid } from 'react-native';\n\nasync function requestCameraPermission() {\n  try {\n    const granted = await PermissionsAndroid.request(\n      PermissionsAndroid.PERMISSIONS.CAMERA,\n      {\n        title: 'Cool Photo App Camera Permission',\n        message:\n          'Cool Photo App needs access to your camera ' +\n          'so you can take awesome pictures.',\n        buttonNeutral: 'Ask Me Later',\n        buttonNegative: 'Cancel',\n        buttonPositive: 'OK'\n      }\n    );\n    if (granted === PermissionsAndroid.RESULTS.GRANTED) {\n      console.log('You can use the camera');\n    } else {\n      console.log('Camera permission denied');\n    }\n  } catch (err) {\n    console.warn(err);\n  }\n}\n")),Object(i.b)("h3",{id:"permissions-that-require-prompting-the-user"},"Permissions that require prompting the user"),Object(i.b)("p",null,"Available as constants under ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.PERMISSIONS"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALENDAR"),": 'android.permission.READ_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALENDAR"),": 'android.permission.WRITE_CALENDAR'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CAMERA"),": 'android.permission.CAMERA'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CONTACTS"),": 'android.permission.READ_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CONTACTS"),": 'android.permission.WRITE_CONTACTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GET_ACCOUNTS"),": 'android.permission.GET_ACCOUNTS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_FINE_LOCATION"),": 'android.permission.ACCESS_FINE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ACCESS_COARSE_LOCATION"),": 'android.permission.ACCESS_COARSE_LOCATION'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECORD_AUDIO"),": 'android.permission.RECORD_AUDIO'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_PHONE_STATE"),": 'android.permission.READ_PHONE_STATE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"CALL_PHONE"),": 'android.permission.CALL_PHONE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_CALL_LOG"),": 'android.permission.READ_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_CALL_LOG"),": 'android.permission.WRITE_CALL_LOG'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ADD_VOICEMAIL"),": 'com.android.voicemail.permission.ADD_VOICEMAIL'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"USE_SIP"),": 'android.permission.USE_SIP'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"PROCESS_OUTGOING_CALLS"),": 'android.permission.PROCESS_OUTGOING_CALLS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BODY_SENSORS"),": 'android.permission.BODY_SENSORS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"SEND_SMS"),": 'android.permission.SEND_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_SMS"),": 'android.permission.RECEIVE_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_SMS"),": 'android.permission.READ_SMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_WAP_PUSH"),": 'android.permission.RECEIVE_WAP_PUSH'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RECEIVE_MMS"),": 'android.permission.RECEIVE_MMS'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"READ_EXTERNAL_STORAGE"),": 'android.permission.READ_EXTERNAL_STORAGE'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"WRITE_EXTERNAL_STORAGE"),": 'android.permission.WRITE_EXTERNAL_STORAGE'")),Object(i.b)("h3",{id:"result-strings-for-requesting-permissions"},"Result strings for requesting permissions"),Object(i.b)("p",null,"Available as constants under ",Object(i.b)("inlineCode",{parentName:"p"},"PermissionsAndroid.RESULTS"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"GRANTED"),": 'granted'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"DENIED"),": 'denied'"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"NEVER_ASK_AGAIN"),": 'never_ask_again'")),Object(i.b)("hr",null),Object(i.b)("h1",{id:"reference"},"Reference"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"constructor"},Object(i.b)("inlineCode",{parentName:"h3"},"constructor()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"constructor();\n")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"check"},Object(i.b)("inlineCode",{parentName:"h3"},"check()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"check(permission);\n")),Object(i.b)("p",null,"Returns a promise resolving to a boolean value as to whether the specified permissions has been granted."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The permission to check for.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"request"},Object(i.b)("inlineCode",{parentName:"h3"},"request()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"request(permission, [rationale]);\n")),Object(i.b)("p",null,"Prompts the user to enable a permission and returns a promise resolving to a string value (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."),Object(i.b)("p",null,"If ",Object(i.b)("inlineCode",{parentName:"p"},"rationale")," is provided, this function checks with the OS whether it is necessary to show a dialog explaining why the permission is needed (",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.android.com/training/permissions/requesting.html#explain"}),"https://developer.android.com/training/permissions/requesting.html#explain"),") and then shows the system permission dialog."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permission"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The permission to request.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"rationale"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"object"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"See ",Object(i.b)("inlineCode",{parentName:"td"},"rationale")," below.")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Rationale:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"title"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The title of the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"message"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The message of the dialog.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonPositive"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the positive button.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNegative"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the negative button.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"buttonNeutral"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The text of the neutral button.")))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"requestmultiple"},Object(i.b)("inlineCode",{parentName:"h3"},"requestMultiple()")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"requestMultiple(permissions);\n")),Object(i.b)("p",null,"Prompts the user to enable multiple permissions in the same dialog and returns an object with the permissions as keys and strings as values (see result strings above) indicating whether the user allowed or denied the request or does not want to be asked again."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Parameters:")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"permissions"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"array"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Array of permissions to request.")))))}c.isMDXComponent=!0}}]);