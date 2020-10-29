(window.webpackJsonp=window.webpackJsonp||[]).push([[914],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),a=n.n(i);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=a.a.createContext({}),b=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(r.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,o=e.parentName,r=l(e,["components","mdxType","originalType","parentName"]),d=b(n),u=i,h=d["".concat(o,".").concat(u)]||d[u]||p[u]||c;return n?a.a.createElement(h,s(s({ref:t},r),{},{components:n})):a.a.createElement(h,s({ref:t},r))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var r=2;r<c;r++)o[r]=n[r];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},980:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(7),c=(n(0),n(1006)),o={id:"accessibility",title:"Accessibility"},s={unversionedId:"accessibility",id:"version-0.61/accessibility",isDocsHomePage:!1,title:"Accessibility",description:"Both Android and iOS provide APIs for integrating apps with assistive technologies like the bundled screen readers VoiceOver (iOS) and TalkBack (Android). React Native has complimentary APIs that let your app accommodate all users.",source:"@site/versioned_docs/version-0.61/accessibility.md",slug:"/accessibility",permalink:"/react-native/docs/0.61/accessibility",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.61/accessibility.md",version:"0.61",lastUpdatedAt:1603945169,sidebar:"version-0.61/docs",previous:{title:"Animations",permalink:"/react-native/docs/0.61/animations"},next:{title:"Improving User Experience",permalink:"/react-native/docs/0.61/improvingux"}},l=[{value:"Accessibility properties",id:"accessibility-properties",children:[{value:"<code>accessible</code> (Android, iOS)",id:"accessible-android-ios",children:[]},{value:"<code>accessibilityLabel</code> (Android, iOS)",id:"accessibilitylabel-android-ios",children:[]},{value:"<code>accessibilityHint</code> (Android, iOS)",id:"accessibilityhint-android-ios",children:[]},{value:"<code>accessibilityIgnoresInvertColors</code> (iOS)",id:"accessibilityignoresinvertcolors-ios",children:[]},{value:"<code>accessibilityRole</code> (Android, iOS)",id:"accessibilityrole-android-ios",children:[]},{value:"<code>accessibilityState</code> (Android, iOS)",id:"accessibilitystate-android-ios",children:[]},{value:"<code>accessibilityViewIsModal</code> (iOS)",id:"accessibilityviewismodal-ios",children:[]},{value:"<code>accessibilityElementsHidden</code> (iOS)",id:"accessibilityelementshidden-ios",children:[]},{value:"<code>onAccessibilityTap</code> (Android, iOS)",id:"onaccessibilitytap-android-ios",children:[]},{value:"<code>onMagicTap</code> (iOS)",id:"onmagictap-ios",children:[]},{value:"<code>onAccessibilityEscape</code> (iOS)",id:"onaccessibilityescape-ios",children:[]},{value:"<code>accessibilityLiveRegion</code> (Android)",id:"accessibilityliveregion-android",children:[]},{value:"<code>importantForAccessibility</code> (Android)",id:"importantforaccessibility-android",children:[]}]},{value:"Accessibility Actions",id:"accessibility-actions",children:[]},{value:"Checking if a Screen Reader is Enabled",id:"checking-if-a-screen-reader-is-enabled",children:[]},{value:"Sending Accessibility Events (Android)",id:"sending-accessibility-events-android",children:[]},{value:"Testing VoiceOver Support (iOS)",id:"testing-voiceover-support-ios",children:[]},{value:"Testing TalkBack Support (Android)",id:"testing-talkback-support-android",children:[]},{value:"Additional Resources",id:"additional-resources",children:[]}],r={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(i.a)({},r,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Both Android and iOS provide APIs for integrating apps with assistive technologies like the bundled screen readers VoiceOver (iOS) and TalkBack (Android). React Native has complimentary APIs that let your app accommodate all users."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Android and iOS differ slightly in their approaches, and thus the React Native implementations may vary by platform.")),Object(c.b)("h2",{id:"accessibility-properties"},"Accessibility properties"),Object(c.b)("h3",{id:"accessible-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessible")," (Android, iOS)"),Object(c.b)("p",null,"When ",Object(c.b)("inlineCode",{parentName:"p"},"true"),", indicates that the view is an accessibility element. When a view is an accessibility element, it groups its children into a single selectable component. By default, all touchable elements are accessible."),Object(c.b)("p",null,"On Android, ",Object(c.b)("inlineCode",{parentName:"p"},"accessible={true}")," property for a react-native View will be translated into native ",Object(c.b)("inlineCode",{parentName:"p"},"focusable={true}"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"<View accessible={true}>\n  <Text>text one</Text>\n  <Text>text two</Text>\n</View>\n")),Object(c.b)("p",null,"In the above example, we can't get accessibility focus separately on 'text one' and 'text two'. Instead we get focus on a parent view with 'accessible' property."),Object(c.b)("h3",{id:"accessibilitylabel-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityLabel")," (Android, iOS)"),Object(c.b)("p",null,"When a view is marked as accessible, it is a good practice to set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected. VoiceOver will read this string when a user selects the associated element."),Object(c.b)("p",null,"To use, set the ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityLabel")," property to a custom string on your View, Text or Touchable:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Tap me!"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Press me!</Text>\n  </View>\n</TouchableOpacity>\n')),Object(c.b)("p",null,"In the above example, the ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityLabel"),' on the TouchableOpacity element would default to "Press me!". The label is constructed by concatenating all Text node children separated by spaces.'),Object(c.b)("h3",{id:"accessibilityhint-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityHint")," (Android, iOS)"),Object(c.b)("p",null,"An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not clear from the accessibility label."),Object(c.b)("p",null,"To use, set the ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityHint")," property to a custom string on your View, Text or Touchable:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'<TouchableOpacity\n  accessible={true}\n  accessibilityLabel="Go back"\n  accessibilityHint="Navigates to the previous screen"\n  onPress={onPress}>\n  <View style={styles.button}>\n    <Text style={styles.buttonText}>Back</Text>\n  </View>\n</TouchableOpacity>\n')),Object(c.b)("p",null,"iOS In the above example, VoiceOver will read the hint after the label, if the user has hints enabled in the device's VoiceOver settings. Read more about guidelines for accessibilityHint in the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/objectivec/nsobject/1615093-accessibilityhint"}),"iOS Developer Docs")),Object(c.b)("p",null,"Android In the above example, TalkBack will read the hint after the label. At this time, hints cannot be turned off on Android."),Object(c.b)("h3",{id:"accessibilityignoresinvertcolors-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityIgnoresInvertColors")," (iOS)"),Object(c.b)("p",null,"Inverting screen colors is an Accessibility feature that makes the iPhone and iPad easier on the eyes for some people with a sensitivity to brightness, easier to distinguish for some people with color blindness, and easier to make out for some people with low vision. However, sometimes you have views such as photos that you don't want to be inverted. In this case, you can set this property to be false so that these specific views won't have their colors inverted."),Object(c.b)("h3",{id:"accessibilityrole-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityRole")," (Android, iOS)"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"accessibilityRole")," communicates the purpose of a component to the user of an assistive technology."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"accessibilityRole")," can be one of the following:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"none")," Used when the element has no role."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"button")," Used when the element should be treated as a button."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"link")," Used when the element should be treated as a link."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"search")," Used when the text field element should also be treated as a search field."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"image")," Used when the element should be treated as an image. Can be combined with button or link, for example."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"keyboardkey")," Used when the element acts as a keyboard key."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"text")," Used when the element should be treated as static text that cannot change."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"adjustable"),' Used when an element can be "adjusted" (e.g. a slider).'),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"imagebutton")," Used when the element should be treated as a button and is also an image."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"header")," Used when an element acts as a header for a content section (e.g. the title of a navigation bar)."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"summary")," Used when an element can be used to provide a quick summary of current conditions in the app when the app first launches."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"alert")," Used when an element contains important text to be presented to the user."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"checkbox")," Used when an element represents a checkbox which can be checked, unchecked, or have mixed checked state."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"combobox")," Used when an element represents a combo box, which allows the user to select among several choices."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"menu")," Used when the component is a menu of choices."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"menubar")," Used when a component is a container of multiple menus."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"menuitem")," Used to represent an item within a menu."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"progressbar")," Used to represent a component which indicates progress of a task."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"radio")," Used to represent a radio button."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"radiogroup")," Used to represent a group of radio buttons."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"scrollbar")," Used to represent a scroll bar."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"spinbutton")," Used to represent a button which opens a list of choices."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"switch")," Used to represent a switch which can be turned on and off."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"tab")," Used to represent a tab."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"tablist")," Used to represent a list of tabs."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"timer")," Used to represent a timer."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"toolbar")," Used to represent a tool bar (a container of action buttons or components).")),Object(c.b)("h3",{id:"accessibilitystate-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityState")," (Android, iOS)"),Object(c.b)("p",null,"Describes the current state of a component to the user of an assistive technology."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"accessibilityState")," is an object. It contains the following fields:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"disabled"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Indicates whether the element is disabled or not."),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"selected"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Indicates whether a selectable element is currently selected or not."),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"checked"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),'Indicates the state of a checkable element. This field can either take a boolean or the "mixed" string to represent mixed checkboxes.'),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean or 'mixed'"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"busy"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Indicates whether an element is currently busy or not."),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"expanded"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Indicates whether an expandable element is currently expanded or collapsed."),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"boolean"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"To use, set the ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityState")," to an object with a specific definition."),Object(c.b)("h3",{id:"accessibilityviewismodal-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityViewIsModal")," (iOS)"),Object(c.b)("p",null,"A Boolean value indicating whether VoiceOver should ignore the elements within views that are siblings of the receiver."),Object(c.b)("p",null,"For example, in a window that contains sibling views ",Object(c.b)("inlineCode",{parentName:"p"},"A")," and ",Object(c.b)("inlineCode",{parentName:"p"},"B"),", setting ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(c.b)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",Object(c.b)("inlineCode",{parentName:"p"},"A"),". On the other hand, if view ",Object(c.b)("inlineCode",{parentName:"p"},"B")," contains a child view ",Object(c.b)("inlineCode",{parentName:"p"},"C")," and you set ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityViewIsModal")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(c.b)("inlineCode",{parentName:"p"},"C"),", VoiceOver does not ignore the elements in view ",Object(c.b)("inlineCode",{parentName:"p"},"A"),"."),Object(c.b)("h3",{id:"accessibilityelementshidden-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityElementsHidden")," (iOS)"),Object(c.b)("p",null,"A Boolean value indicating whether the accessibility elements contained within this accessibility element are hidden."),Object(c.b)("p",null,"For example, in a window that contains sibling views ",Object(c.b)("inlineCode",{parentName:"p"},"A")," and ",Object(c.b)("inlineCode",{parentName:"p"},"B"),", setting ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityElementsHidden")," to ",Object(c.b)("inlineCode",{parentName:"p"},"true")," on view ",Object(c.b)("inlineCode",{parentName:"p"},"B")," causes VoiceOver to ignore the elements in the view ",Object(c.b)("inlineCode",{parentName:"p"},"B"),". This is similar to the Android property ",Object(c.b)("inlineCode",{parentName:"p"},'importantForAccessibility="no-hide-descendants"'),"."),Object(c.b)("h3",{id:"onaccessibilitytap-android-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"onAccessibilityTap")," (Android, iOS)"),Object(c.b)("p",null,"Use this property to assign a custom function to be called when someone activates an accessible element by double tapping on it while it's selected."),Object(c.b)("h3",{id:"onmagictap-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"onMagicTap")," (iOS)"),Object(c.b)("p",null,'Assign this property to a custom function which will be called when someone performs the "magic tap" gesture, which is a double-tap with two fingers. A magic tap function should perform the most relevant action a user could take on a component. In the Phone app on iPhone, a magic tap answers a phone call, or ends the current one. If the selected element does not have an ',Object(c.b)("inlineCode",{parentName:"p"},"onMagicTap")," function, the system will traverse up the view hierarchy until it finds a view that does."),Object(c.b)("h3",{id:"onaccessibilityescape-ios"},Object(c.b)("inlineCode",{parentName:"h3"},"onAccessibilityEscape")," (iOS)"),Object(c.b)("p",null,'Assign this property to a custom function which will be called when someone performs the "escape" gesture, which is a two finger Z shaped gesture. An escape function should move back hierarchically in the user interface. This can mean moving up or back in a navigation hierarchy or dismissing a modal user interface. If the selected element does not have an ',Object(c.b)("inlineCode",{parentName:"p"},"onAccessibilityEscape")," function, the system will attempt to traverse up the view hierarchy until it finds a view that does or bonk to indicate it was unable to find one."),Object(c.b)("h3",{id:"accessibilityliveregion-android"},Object(c.b)("inlineCode",{parentName:"h3"},"accessibilityLiveRegion")," (Android)"),Object(c.b)("p",null,"When components dynamically change, we want TalkBack to alert the end user. This is made possible by the ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityLiveRegion")," property. It can be set to ",Object(c.b)("inlineCode",{parentName:"p"},"none"),", ",Object(c.b)("inlineCode",{parentName:"p"},"polite")," and ",Object(c.b)("inlineCode",{parentName:"p"},"assertive"),":"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"none")," Accessibility services should not announce changes to this view."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"polite")," Accessibility services should announce changes to this view."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"assertive")," Accessibility services should interrupt ongoing speech to immediately announce changes to this view.")),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),'<TouchableWithoutFeedback onPress={addOne}>\n  <View style={styles.embedded}>\n    <Text>Click me</Text>\n  </View>\n</TouchableWithoutFeedback>\n<Text accessibilityLiveRegion="polite">\n  Clicked {count} times\n</Text>\n')),Object(c.b)("p",null,"In the above example method ",Object(c.b)("inlineCode",{parentName:"p"},"addOne")," changes the state variable ",Object(c.b)("inlineCode",{parentName:"p"},"count"),". As soon as an end user clicks the TouchableWithoutFeedback, TalkBack reads text in the Text view because of its ",Object(c.b)("inlineCode",{parentName:"p"},'accessibilityLiveRegion="polite"')," property."),Object(c.b)("h3",{id:"importantforaccessibility-android"},Object(c.b)("inlineCode",{parentName:"h3"},"importantForAccessibility")," (Android)"),Object(c.b)("p",null,"In the case of two overlapping UI components with the same parent, default accessibility focus can have unpredictable behavior. The ",Object(c.b)("inlineCode",{parentName:"p"},"importantForAccessibility")," property will resolve this by controlling if a view fires accessibility events and if it is reported to accessibility services. It can be set to ",Object(c.b)("inlineCode",{parentName:"p"},"auto"),", ",Object(c.b)("inlineCode",{parentName:"p"},"yes"),", ",Object(c.b)("inlineCode",{parentName:"p"},"no")," and ",Object(c.b)("inlineCode",{parentName:"p"},"no-hide-descendants")," (the last value will force accessibility services to ignore the component and all of its children)."),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"<View style={styles.container}>\n  <View\n    style={[styles.layout, { backgroundColor: 'green' }]}\n    importantForAccessibility=\"yes\">\n    <Text>First layout</Text>\n  </View>\n  <View\n    style={[styles.layout, { backgroundColor: 'yellow' }]}\n    importantForAccessibility=\"no-hide-descendants\">\n    <Text>Second layout</Text>\n  </View>\n</View>\n")),Object(c.b)("p",null,"In the above example, the ",Object(c.b)("inlineCode",{parentName:"p"},"yellow")," layout and its descendants are completely invisible to TalkBack and all other accessibility services. So we can use overlapping views with the same parent without confusing TalkBack."),Object(c.b)("h2",{id:"accessibility-actions"},"Accessibility Actions"),Object(c.b)("p",null,"Accessibility actions allow an assistive technology to programmatically invoke the actions of a component. In order to support accessibility actions, a component must do two things:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Define the list of actions it supports via the ",Object(c.b)("inlineCode",{parentName:"li"},"accessibilityActions")," property."),Object(c.b)("li",{parentName:"ul"},"Implement an ",Object(c.b)("inlineCode",{parentName:"li"},"onAccessibilityAction")," function to handle action requests.")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"accessibilityActions")," property should contain a list of action objects. Each action object should contain the following fields:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(i.a)({parentName:"tr"},{align:null}),"Required"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"name"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"label"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(i.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("p",null,"Actions either represent standard actions, such as clicking a button or adjusting a slider, or custom actions specific to a given component such as deleting an email message. The ",Object(c.b)("inlineCode",{parentName:"p"},"name")," field is required for both standard and custom actions, but ",Object(c.b)("inlineCode",{parentName:"p"},"label")," is optional for standard actions."),Object(c.b)("p",null,"When adding support for standard actions, ",Object(c.b)("inlineCode",{parentName:"p"},"name")," must be one of the following:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'magicTap'")," - iOS only - While VoiceOver focus is on or inside the component, the user double tapped with two fingers."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'escape'")," - iOS only - While VoiceOver focus is on or inside the component, the user performed a two finger scrub gesture (left, right, left)."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'activate'")," - Activate the component. Typically this should perform the same action as when the user touches or clicks the component when not using an assistive technology. This is generated when a screen reader user double taps the component."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'increment'")," - Increment an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",Object(c.b)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes upward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume up button."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'decrement'")," - Decrement an adjustable component. On iOS, VoiceOver generates this action when the component has a role of ",Object(c.b)("inlineCode",{parentName:"li"},"'adjustable'")," and the user places focus on it and swipes downward. On Android, TalkBack generates this action when the user places accessibility focus on the component and presses the volume down button."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"'longpress'")," - Android only - This action is generated when the user places accessibility focus on the component and double tap and holds one finger on the screen. Typically, this should perform the same action as when the user holds down one finger on the component while not using an assistive technology.")),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"label")," field is optional for standard actions, and is often unused by assistive technologies. For custom actions, it is a localized string containing a description of the action to be presented to the user."),Object(c.b)("p",null,"To handle action requests, a component must implement an ",Object(c.b)("inlineCode",{parentName:"p"},"onAccessibilityAction")," function. The only argument to this function is an event containing the name of the action to perform. The below example from RNTester shows how to create a component which defines and handles several custom actions."),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"<View\n  accessible={true}\n  accessibilityActions={[\n    { name: 'cut', label: 'cut' },\n    { name: 'copy', label: 'copy' },\n    { name: 'paste', label: 'paste' }\n  ]}\n  onAccessibilityAction={(event) => {\n    switch (event.nativeEvent.actionName) {\n      case 'cut':\n        Alert.alert('Alert', 'cut action success');\n        break;\n      case 'copy':\n        Alert.alert('Alert', 'copy action success');\n        break;\n      case 'paste':\n        Alert.alert('Alert', 'paste action success');\n        break;\n    }\n  }}\n/>\n")),Object(c.b)("h2",{id:"checking-if-a-screen-reader-is-enabled"},"Checking if a Screen Reader is Enabled"),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"AccessibilityInfo")," API allows you to determine whether or not a screen reader is currently active. See the ",Object(c.b)("a",Object(i.a)({parentName:"p"},{href:"accessibilityinfo"}),"AccessibilityInfo documentation")," for details."),Object(c.b)("h2",{id:"sending-accessibility-events-android"},"Sending Accessibility Events (Android)"),Object(c.b)("p",null,"Sometimes it is useful to trigger an accessibility event on a UI component (i.e. when a custom view appears on a screen or set accessibility focus to a view). Native UIManager module exposes a method \u2018sendAccessibilityEvent\u2019 for this purpose. It takes two arguments: view tag and a type of an event. The supported event types are ",Object(c.b)("inlineCode",{parentName:"p"},"typeWindowStateChanged"),", ",Object(c.b)("inlineCode",{parentName:"p"},"typeViewFocused")," and ",Object(c.b)("inlineCode",{parentName:"p"},"typeViewClicked"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsx"}),"import {\n  Platform,\n  UIManager,\n  findNodeHandle\n} from 'react-native';\n\nif (Platform.OS === 'android') {\n  UIManager.sendAccessibilityEvent(\n    findNodeHandle(this),\n    UIManager.AccessibilityEventTypes.typeViewFocused\n  );\n}\n")),Object(c.b)("h2",{id:"testing-voiceover-support-ios"},"Testing VoiceOver Support (iOS)"),Object(c.b)("p",null,"To enable VoiceOver, go to the Settings app on your iOS device (it's not available for simulator). Tap General, then Accessibility. There you will find many tools that people use to make their devices more usable, such as bolder text, increased contrast, and VoiceOver."),Object(c.b)("p",null,'To enable VoiceOver, tap on VoiceOver under "Vision" and toggle the switch that appears at the top.'),Object(c.b)("p",null,'At the very bottom of the Accessibility settings, there is an "Accessibility Shortcut". You can use this to toggle VoiceOver by triple clicking the Home button.'),Object(c.b)("h2",{id:"testing-talkback-support-android"},"Testing TalkBack Support (Android)"),Object(c.b)("p",null,'To enable TalkBack, go to the Settings app on your Android device or emulator. Tap Accessibility, then TalkBack. Toggle the "Use service" switch to enable or disable it.'),Object(c.b)("p",null,"P.S. Android emulator doesn\u2019t have TalkBack by default. To install it:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Download TalkBack file here: ",Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://google-talkback.en.uptodown.com/android"}),"https://google-talkback.en.uptodown.com/android")),Object(c.b)("li",{parentName:"ol"},"Drag the downloaded ",Object(c.b)("inlineCode",{parentName:"li"},".apk")," file into the emulator")),Object(c.b)("p",null,"You can use the volume key shortcut to toggle TalkBack. To turn on the volume key shortcut, go to the Settings app, then Accessibility. At the top, turn on Volume key shortcut."),Object(c.b)("p",null,"To use the volume key shortcut, press both volume keys for 3 seconds to start an accessibility tool."),Object(c.b)("p",null,"Additionally, if you prefer, you can toggle TalkBack via command line with:"),Object(c.b)("pre",null,Object(c.b)("code",Object(i.a)({parentName:"pre"},{className:"language-shell"}),"# disable\nadb shell settings put secure enabled_accessibility_services com.android.talkback/com.google.android.marvin.talkback.TalkBackService\n\n# enable\nadb shell settings put secure enabled_accessibility_services com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService\n")),Object(c.b)("h2",{id:"additional-resources"},"Additional Resources"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(i.a)({parentName:"li"},{href:"https://engineering.fb.com/ios/making-react-native-apps-accessible/"}),"Making React Native Apps Accessible"))))}b.isMDXComponent=!0}}]);