(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1006:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return p}));var n=a(0),i=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),d=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},b=function(e){var t=d(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=d(a),m=n,p=b["".concat(r,".").concat(m)]||b[m]||u[m]||o;return a?i.a.createElement(p,s(s({ref:t},l),{},{components:a})):i.a.createElement(p,s({ref:t},l))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,r=new Array(o);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,r[1]=s;for(var l=2;l<o;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(7),o=(a(0),a(1006)),r={id:"images",title:"Images"},s={unversionedId:"images",id:"version-0.63/images",isDocsHomePage:!1,title:"Images",description:"Static Image Resources",source:"@site/versioned_docs/version-0.63/images.md",slug:"/images",permalink:"/react-native/docs/images",editUrl:"https://github.com/facebook/react-native-website/blob/master/website/versioned_docs/version-0.63/images.md",version:"0.63",lastUpdatedAt:1603945169,sidebar:"version-0.63/docs",previous:{title:"Layout with Flexbox",permalink:"/react-native/docs/flexbox"},next:{title:"Color Reference",permalink:"/react-native/docs/colors"}},c=[{value:"Static Image Resources",id:"static-image-resources",children:[]},{value:"Static Non-Image Resources",id:"static-non-image-resources",children:[]},{value:"Images From Hybrid App&#39;s Resources",id:"images-from-hybrid-apps-resources",children:[]},{value:"Network Images",id:"network-images",children:[{value:"Network Requests for Images",id:"network-requests-for-images",children:[]}]},{value:"Uri Data Images",id:"uri-data-images",children:[{value:"Cache Control (iOS Only)",id:"cache-control-ios-only",children:[]}]},{value:"Local Filesystem Images",id:"local-filesystem-images",children:[{value:"Best Camera Roll Image",id:"best-camera-roll-image",children:[]}]},{value:"Why Not Automatically Size Everything?",id:"why-not-automatically-size-everything",children:[]},{value:"Source as an object",id:"source-as-an-object",children:[]},{value:"Background Image via Nesting",id:"background-image-via-nesting",children:[]},{value:"iOS Border Radius Styles",id:"ios-border-radius-styles",children:[]},{value:"Off-thread Decoding",id:"off-thread-decoding",children:[]}],l={rightToc:c};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"static-image-resources"},"Static Image Resources"),Object(o.b)("p",null,"React Native provides a unified way of managing images and other media assets in your Android and iOS apps. To add a static image to your app, place it somewhere in your source code tree and reference it like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image source={require('./my-icon.png')} />\n")),Object(o.b)("p",null,"The image name is resolved the same way JS modules are resolved. In the example above, the bundler will look for ",Object(o.b)("inlineCode",{parentName:"p"},"my-icon.png")," in the same folder as the component that requires it. Also, if you have ",Object(o.b)("inlineCode",{parentName:"p"},"my-icon.ios.png")," and ",Object(o.b)("inlineCode",{parentName:"p"},"my-icon.android.png"),", the bundler will pick the correct file for the platform."),Object(o.b)("p",null,"You can also use the ",Object(o.b)("inlineCode",{parentName:"p"},"@2x")," and ",Object(o.b)("inlineCode",{parentName:"p"},"@3x")," suffixes to provide images for different screen densities. If you have the following file structure:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),".\n\u251c\u2500\u2500 button.js\n\u2514\u2500\u2500 img\n    \u251c\u2500\u2500 check.png\n    \u251c\u2500\u2500 check@2x.png\n    \u2514\u2500\u2500 check@3x.png\n")),Object(o.b)("p",null,"...and ",Object(o.b)("inlineCode",{parentName:"p"},"button.js")," code contains:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image source={require('./img/check.png')} />\n")),Object(o.b)("p",null,"...the bundler will bundle and serve the image corresponding to device's screen density. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"check@2x.png"),", will be used on an iPhone 7, while",Object(o.b)("inlineCode",{parentName:"p"},"check@3x.png")," will be used on an iPhone 7 Plus or a Nexus 5. If there is no image matching the screen density, the closest best option will be selected."),Object(o.b)("p",null,"On Windows, you might need to restart the bundler if you add new images to your project."),Object(o.b)("p",null,"Here are some benefits that you get:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Same system on Android and iOS."),Object(o.b)("li",{parentName:"ol"},"Images live in the same folder as your JavaScript code. Components are self-contained."),Object(o.b)("li",{parentName:"ol"},"No global namespace, i.e. you don't have to worry about name collisions."),Object(o.b)("li",{parentName:"ol"},"Only the images that are actually used will be packaged into your app."),Object(o.b)("li",{parentName:"ol"},"Adding and changing images doesn't require app recompilation, you can refresh the simulator as you normally do."),Object(o.b)("li",{parentName:"ol"},"The bundler knows the image dimensions, no need to duplicate it in the code."),Object(o.b)("li",{parentName:"ol"},"Images can be distributed via ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"npm")," packages.")),Object(o.b)("p",null,"In order for this to work, the image name in ",Object(o.b)("inlineCode",{parentName:"p"},"require")," has to be known statically."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// GOOD\n<Image source={require('./my-icon.png')} />;\n\n// BAD\nvar icon = this.props.active\n  ? 'my-icon-active'\n  : 'my-icon-inactive';\n<Image source={require('./' + icon + '.png')} />;\n\n// GOOD\nvar icon = this.props.active\n  ? require('./my-icon-active.png')\n  : require('./my-icon-inactive.png');\n<Image source={icon} />;\n")),Object(o.b)("p",null,"Note that image sources required this way include size (width, height) info for the Image. If you need to scale the image dynamically (i.e. via flex), you may need to manually set ",Object(o.b)("inlineCode",{parentName:"p"},"{ width: undefined, height: undefined }")," on the style attribute."),Object(o.b)("h2",{id:"static-non-image-resources"},"Static Non-Image Resources"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"require")," syntax described above can be used to statically include audio, video or document files in your project as well. Most common file types are supported including ",Object(o.b)("inlineCode",{parentName:"p"},".mp3"),", ",Object(o.b)("inlineCode",{parentName:"p"},".wav"),", ",Object(o.b)("inlineCode",{parentName:"p"},".mp4"),", ",Object(o.b)("inlineCode",{parentName:"p"},".mov"),", ",Object(o.b)("inlineCode",{parentName:"p"},".html")," and ",Object(o.b)("inlineCode",{parentName:"p"},".pdf"),". See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/metro/blob/master/packages/metro-config/src/defaults/defaults.js#L14-L44"}),"bundler defaults")," for the full list."),Object(o.b)("p",null,"You can add support for other types by adding an ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration#resolver-options"}),Object(o.b)("inlineCode",{parentName:"a"},"assetExts")," resolver option")," in your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/metro/docs/configuration"}),"Metro configuration"),"."),Object(o.b)("p",null,"A caveat is that videos must use absolute positioning instead of ",Object(o.b)("inlineCode",{parentName:"p"},"flexGrow"),", since size info is not currently passed for non-image assets. This limitation doesn't occur for videos that are linked directly into Xcode or the Assets folder for Android."),Object(o.b)("h2",{id:"images-from-hybrid-apps-resources"},"Images From Hybrid App's Resources"),Object(o.b)("p",null,"If you are building a hybrid app (some UIs in React Native, some UIs in platform code) you can still use images that are already bundled into the app."),Object(o.b)("p",null,"For images included via Xcode asset catalogs or in the Android drawable folder, use the image name without the extension:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{ uri: 'app_icon' }}\n  style={{ width: 40, height: 40 }}\n/>\n")),Object(o.b)("p",null,"For images in the Android assets folder, use the ",Object(o.b)("inlineCode",{parentName:"p"},"asset:/")," scheme:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{ uri: 'asset:/app_icon.png' }}\n  style={{ width: 40, height: 40 }}\n/>\n")),Object(o.b)("p",null,"These approaches provide no safety checks. It's up to you to guarantee that those images are available in the application. Also you have to specify image dimensions manually."),Object(o.b)("h2",{id:"network-images"},"Network Images"),Object(o.b)("p",null,"Many of the images you will display in your app will not be available at compile time, or you will want to load some dynamically to keep the binary size down. Unlike with static resources, ",Object(o.b)("em",{parentName:"p"},"you will need to manually specify the dimensions of your image"),". It's highly recommended that you use https as well in order to satisfy ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/running-on-device#app-transport-security"}),"App Transport Security")," requirements on iOS."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// GOOD\n<Image source={{uri: 'https://reactjs.org/logo-og.png'}}\n       style={{width: 400, height: 400}} />\n\n// BAD\n<Image source={{uri: 'https://reactjs.org/logo-og.png'}} />\n")),Object(o.b)("h3",{id:"network-requests-for-images"},"Network Requests for Images"),Object(o.b)("p",null,"If you would like to set such things as the HTTP-Verb, Headers or a Body along with the image request, you may do this by defining these properties on the source object:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{\n    uri: 'https://reactjs.org/logo-og.png',\n    method: 'POST',\n    headers: {\n      Pragma: 'no-cache'\n    },\n    body: 'Your Body goes here'\n  }}\n  style={{ width: 400, height: 400 }}\n/>\n")),Object(o.b)("h2",{id:"uri-data-images"},"Uri Data Images"),Object(o.b)("p",null,"Sometimes, you might be getting encoded image data from a REST API call. You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"'data:'")," uri scheme to use these images. Same as for network resources, ",Object(o.b)("em",{parentName:"p"},"you will need to manually specify the dimensions of your image"),"."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"This is recommended for very small and dynamic images only, like icons in a list from a DB.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"// include at least width and height!\n<Image\n  style={{\n    width: 51,\n    height: 51,\n    resizeMode: 'contain'\n  }}\n  source={{\n    uri:\n      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='\n  }}\n/>\n")),Object(o.b)("h3",{id:"cache-control-ios-only"},"Cache Control (iOS Only)"),Object(o.b)("p",null,"In some cases you might only want to display an image if it is already in the local cache, i.e. a low resolution placeholder until a higher resolution is available. In other cases you do not care if the image is outdated and are willing to display an outdated image to save bandwidth. The ",Object(o.b)("inlineCode",{parentName:"p"},"cache")," source property gives you control over how the network layer interacts with the cache."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"default"),": Use the native platforms default strategy."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"reload"),": The data for the URL will be loaded from the originating source. No existing cache data should be used to satisfy a URL load request."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"force-cache"),": The existing cached data will be used to satisfy the request, regardless of its age or expiration date. If there is no existing data in the cache corresponding the request, the data is loaded from the originating source."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"only-if-cached"),": The existing cache data will be used to satisfy a request, regardless of its age or expiration date. If there is no existing data in the cache corresponding to a URL load request, no attempt is made to load the data from the originating source, and the load is considered to have failed.")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image\n  source={{\n    uri: 'https://reactjs.org/logo-og.png',\n    cache: 'only-if-cached'\n  }}\n  style={{ width: 400, height: 400 }}\n/>\n")),Object(o.b)("h2",{id:"local-filesystem-images"},"Local Filesystem Images"),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/react-native-community/react-native-cameraroll"}),"CameraRoll")," for an example of using local resources that are outside of ",Object(o.b)("inlineCode",{parentName:"p"},"Images.xcassets"),"."),Object(o.b)("h3",{id:"best-camera-roll-image"},"Best Camera Roll Image"),Object(o.b)("p",null,"iOS saves multiple sizes for the same image in your Camera Roll, it is very important to pick the one that's as close as possible for performance reasons. You wouldn't want to use the full quality 3264x2448 image as source when displaying a 200x200 thumbnail. If there's an exact match, React Native will pick it, otherwise it's going to use the first one that's at least 50% bigger in order to avoid blur when resizing from a close size. All of this is done by default so you don't have to worry about writing the tedious (and error prone) code to do it yourself."),Object(o.b)("h2",{id:"why-not-automatically-size-everything"},"Why Not Automatically Size Everything?"),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"In the browser")," if you don't give a size to an image, the browser is going to render a 0x0 element, download the image, and then render the image based with the correct size. The big issue with this behavior is that your UI is going to jump all around as images load, this makes for a very bad user experience."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"In React Native")," this behavior is intentionally not implemented. It is more work for the developer to know the dimensions (or aspect ratio) of the remote image in advance, but we believe that it leads to a better user experience. Static images loaded from the app bundle via the ",Object(o.b)("inlineCode",{parentName:"p"},"require('./my-icon.png')")," syntax ",Object(o.b)("em",{parentName:"p"},"can be automatically sized")," because their dimensions are available immediately at the time of mounting."),Object(o.b)("p",null,"For example, the result of ",Object(o.b)("inlineCode",{parentName:"p"},"require('./my-icon.png')")," might be:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'{"__packager_asset":true,"uri":"my-icon.png","width":591,"height":573}\n')),Object(o.b)("h2",{id:"source-as-an-object"},"Source as an object"),Object(o.b)("p",null,"In React Native, one interesting decision is that the ",Object(o.b)("inlineCode",{parentName:"p"},"src")," attribute is named ",Object(o.b)("inlineCode",{parentName:"p"},"source")," and doesn't take a string but an object with a ",Object(o.b)("inlineCode",{parentName:"p"},"uri")," attribute."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"<Image source={{ uri: 'something.jpg' }} />\n")),Object(o.b)("p",null,"On the infrastructure side, the reason is that it allows us to attach metadata to this object. For example if you are using ",Object(o.b)("inlineCode",{parentName:"p"},"require('./my-icon.png')"),", then we add information about its actual location and size (don't rely on this fact, it might change in the future!). This is also future proofing, for example we may want to support sprites at some point, instead of outputting ",Object(o.b)("inlineCode",{parentName:"p"},"{uri: ...}"),", we can output ",Object(o.b)("inlineCode",{parentName:"p"},"{uri: ..., crop: {left: 10, top: 50, width: 20, height: 40}}")," and transparently support spriting on all the existing call sites."),Object(o.b)("p",null,"On the user side, this lets you annotate the object with useful attributes such as the dimension of the image in order to compute the size it's going to be displayed in. Feel free to use it as your data structure to store more information about your image."),Object(o.b)("h2",{id:"background-image-via-nesting"},"Background Image via Nesting"),Object(o.b)("p",null,"A common feature request from developers familiar with the web is ",Object(o.b)("inlineCode",{parentName:"p"},"background-image"),". To handle this use case, you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," component, which has the same props as ",Object(o.b)("inlineCode",{parentName:"p"},"<Image>"),", and add whatever children to it you would like to layer on top of it."),Object(o.b)("p",null,"You might not want to use ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>")," in some cases, since the implementation is basic. Refer to ",Object(o.b)("inlineCode",{parentName:"p"},"<ImageBackground>"),"'s ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native/docs/imagebackground"}),"documentation")," for more insight, and create your own custom component when needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"return (\n  <ImageBackground source={...} style={{width: '100%', height: '100%'}}>\n    <Text>Inside</Text>\n  </ImageBackground>\n);\n")),Object(o.b)("p",null,"Note that you must specify some width and height style attributes."),Object(o.b)("h2",{id:"ios-border-radius-styles"},"iOS Border Radius Styles"),Object(o.b)("p",null,"Please note that the following corner specific, border radius style properties are currently ignored by iOS's image component:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"borderTopLeftRadius")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"borderTopRightRadius")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"borderBottomLeftRadius")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"borderBottomRightRadius"))),Object(o.b)("h2",{id:"off-thread-decoding"},"Off-thread Decoding"),Object(o.b)("p",null,"Image decoding can take more than a frame-worth of time. This is one of the major sources of frame drops on the web because decoding is done in the main thread. In React Native, image decoding is done in a different thread. In practice, you already need to handle the case when the image is not downloaded yet, so displaying the placeholder for a few more frames while it is decoding does not require any code change."))}d.isMDXComponent=!0}}]);