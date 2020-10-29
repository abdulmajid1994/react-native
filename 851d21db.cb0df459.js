(window.webpackJsonp=window.webpackJsonp||[]).push([[499],{1006:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,s(s({ref:t},p),{},{components:n})):r.a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},583:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(2),r=n(7),i=(n(0),n(1006)),o={title:"Using TypeScript with React Native",author:"Ash Furrow",authorTitle:"Software Engineer at Artsy",authorURL:"https://github.com/ashfurrow",authorImageURL:"https://avatars2.githubusercontent.com/u/498212?s=460&v=4",authorTwitter:"ashfurrow",tags:["engineering"]},s={permalink:"/react-native/blog/2018/05/07/using-typescript-with-react-native",source:"@site/blog/2018-05-07-using-typescript-with-react-native.md",description:"JavaScript! We all love it. But some of us also love types. Luckily, options exist to add stronger types to JavaScript. My favourite is TypeScript, but React Native supports Flow out of the box. Which you prefer is a matter of preference, they each have their own approach on how to add the magic of types to JavaScript. Today, we're going to look at how to use TypeScript in React Native apps.",date:"2018-05-07T00:00:00.000Z",tags:[{label:"engineering",permalink:"/react-native/blog/tags/engineering"}],title:"Using TypeScript with React Native",readingTime:7.365,truncated:!1,prevItem:{title:"State of React Native 2018",permalink:"/react-native/blog/2018/06/14/state-of-react-native-2018"},nextItem:{title:"Built with React Native - The Build.com app",permalink:"/react-native/blog/2018/04/09/build-com-app"}},c=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Initializing",id:"initializing",children:[]},{value:"Adding TypeScript",id:"adding-typescript",children:[]},{value:"Migrating to TypeScript",id:"migrating-to-typescript",children:[]},{value:"Adding TypeScript Testing Infrastructure",id:"adding-typescript-testing-infrastructure",children:[]},{value:"Installing Dependency Type Declarations",id:"installing-dependency-type-declarations",children:[]},{value:"Ignoring More Files",id:"ignoring-more-files",children:[]},{value:"Adding a Component",id:"adding-a-component",children:[]},{value:"Adding a Component Test",id:"adding-a-component-test",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"JavaScript! We all love it. But some of us also love ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Data_type"}),"types"),". Luckily, options exist to add stronger types to JavaScript. My favourite is ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org"}),"TypeScript"),", but React Native supports ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://flow.org"}),"Flow")," out of the box. Which you prefer is a matter of preference, they each have their own approach on how to add the magic of types to JavaScript. Today, we're going to look at how to use TypeScript in React Native apps."),Object(i.b)("p",null,"This post uses Microsoft's ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Microsoft/TypeScript-React-Native-Starter"}),"TypeScript-React-Native-Starter")," repo as a guide."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Update"),": Since this blog post was written, ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/"}),"Babel 7 was released with integrated TypeScript support"),". Babel 7 replaces all the set up described in this blog post with just one command:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"react-native init MyAwesomeProject --template typescript\n")),Object(i.b)("p",null,"However, there ",Object(i.b)("em",{parentName:"p"},"are")," some limitations to Babel's TypeScript support, which the blog post above goes into in detail. The steps outlined in ",Object(i.b)("em",{parentName:"p"},"this")," post still work, and Artsy is still using ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ds300/react-native-typescript-transformer"}),"react-native-typescript-transformer")," in production, but the fastest way to get up and running with React Native and TypeScript is using the above command. You can always switch later if you have to."),Object(i.b)("p",null,"In any case, have fun! The original blog post continues below."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)("p",null,"Because you might be developing on one of several different platforms, targeting several different types of devices, basic setup can be involved. You should first ensure that you can run a plain React Native app without TypeScript. Follow ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/getting-started"}),"the instructions on the React Native website to get started"),". When you've managed to deploy to a device or emulator, you'll be ready to start a TypeScript React Native app."),Object(i.b)("p",null,"You will also need ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/"}),"Node.js"),", ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com"}),"npm"),", and ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://yarnpkg.com/lang/en"}),"Yarn"),"."),Object(i.b)("h2",{id:"initializing"},"Initializing"),Object(i.b)("p",null,"Once you've tried scaffolding out an ordinary React Native project, you'll be ready to start adding TypeScript. Let's go ahead and do that."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"react-native init MyAwesomeProject\ncd MyAwesomeProject\n")),Object(i.b)("h2",{id:"adding-typescript"},"Adding TypeScript"),Object(i.b)("p",null,"The next step is to add TypeScript to your project. The following commands will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"add TypeScript to your project"),Object(i.b)("li",{parentName:"ul"},"add ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/ds300/react-native-typescript-transformer"}),"React Native TypeScript Transformer")," to your project"),Object(i.b)("li",{parentName:"ul"},"initialize an empty TypeScript config file, which we'll configure next"),Object(i.b)("li",{parentName:"ul"},"add an empty React Native TypeScript Transformer config file, which we'll configure next"),Object(i.b)("li",{parentName:"ul"},"adds ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/DefinitelyTyped/DefinitelyTyped"}),"typings")," for React and React Native")),Object(i.b)("p",null,"Okay, let's go ahead and run these."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev typescript\nyarn add --dev react-native-typescript-transformer\nyarn tsc --init --pretty --jsx react\ntouch rn-cli.config.js\nyarn add --dev @types/react @types/react-native\n")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"tsconfig.json")," file contains all the settings for the TypeScript compiler. The defaults created by the command above are mostly fine, but open the file and uncomment the following line:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  /* Search the config file for the following line and uncomment it. */\n  // "allowSyntheticDefaultImports": true,  /* Allow default imports from modules with no default export. This does not affect code emit, just typechecking. */\n}\n')),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"rn-cli.config.js")," contains the settings for the React Native TypeScript Transformer. Open it and add the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"module.exports = {\n  getTransformModulePath() {\n    return require.resolve('react-native-typescript-transformer');\n  },\n  getSourceExts() {\n    return ['ts', 'tsx'];\n  }\n};\n")),Object(i.b)("h2",{id:"migrating-to-typescript"},"Migrating to TypeScript"),Object(i.b)("p",null,"Rename the generated ",Object(i.b)("inlineCode",{parentName:"p"},"App.js")," and ",Object(i.b)("inlineCode",{parentName:"p"},"__tests_/App.js")," files to ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx"),". ",Object(i.b)("inlineCode",{parentName:"p"},"index.js")," needs to use the ",Object(i.b)("inlineCode",{parentName:"p"},".js")," extension. All new files should use the ",Object(i.b)("inlineCode",{parentName:"p"},".tsx")," extension (or ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," if the file doesn't contain any JSX)."),Object(i.b)("p",null,"If you tried to run the app now, you'd get an error like ",Object(i.b)("inlineCode",{parentName:"p"},"object prototype may only be an object or null"),". This is caused by a failure to import the default export from React as well as a named export on the same line. Open ",Object(i.b)("inlineCode",{parentName:"p"},"App.tsx")," and modify the import at the top of the file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),"-import React, { Component } from 'react';\n+import React from 'react'\n+import { Component } from 'react';\n")),Object(i.b)("p",null,"Some of this has to do with differences in how Babel and TypeScript interoperate with CommonJS modules. In the future, the two will stabilize on the same behaviour."),Object(i.b)("p",null,"At this point, you should be able to run the React Native app."),Object(i.b)("h2",{id:"adding-typescript-testing-infrastructure"},"Adding TypeScript Testing Infrastructure"),Object(i.b)("p",null,"React Native ships with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/jest"}),"Jest"),", so for testing a React Native app with TypeScript, we'll want to add ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/ts-jest"}),"ts-jest")," to our ",Object(i.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev ts-jest\n")),Object(i.b)("p",null,"Then, we'll open up our ",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," and replace the ",Object(i.b)("inlineCode",{parentName:"p"},"jest")," field with the following:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n  "jest": {\n    "preset": "react-native",\n    "moduleFileExtensions": [\n      "ts",\n      "tsx",\n      "js"\n    ],\n    "transform": {\n      "^.+\\\\.(js)$": "<rootDir>/node_modules/babel-jest",\n      "\\\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"\n    },\n    "testRegex": "(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$",\n    "testPathIgnorePatterns": [\n      "\\\\.snap$",\n      "<rootDir>/node_modules/"\n    ],\n    "cacheDirectory": ".jest/cache"\n  }\n}\n')),Object(i.b)("p",null,"This will configure Jest to run ",Object(i.b)("inlineCode",{parentName:"p"},".ts")," and ",Object(i.b)("inlineCode",{parentName:"p"},".tsx")," files with ",Object(i.b)("inlineCode",{parentName:"p"},"ts-jest"),"."),Object(i.b)("h2",{id:"installing-dependency-type-declarations"},"Installing Dependency Type Declarations"),Object(i.b)("p",null,"To get the best experience in TypeScript, we want the type-checker to understand the shape and API of our dependencies. Some libraries will publish their packages with ",Object(i.b)("inlineCode",{parentName:"p"},".d.ts")," files (type declaration/type definition files), which can describe the shape of the underlying JavaScript. For other libraries, we'll need to explicitly install the appropriate package in the ",Object(i.b)("inlineCode",{parentName:"p"},"@types/")," npm scope."),Object(i.b)("p",null,"For example, here we'll need types for Jest, React, and React Native, and React Test Renderer."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"yarn add --dev @types/jest @types/react @types/react-native @types/react-test-renderer\n")),Object(i.b)("p",null,"We saved these declaration file packages to our ",Object(i.b)("em",{parentName:"p"},"dev")," dependencies because this is a React Native ",Object(i.b)("em",{parentName:"p"},"app")," that only uses these dependencies during development and not during runtime. If we were publishing a library to NPM, we might have to add some of these type dependencies as regular dependencies."),Object(i.b)("p",null,"You can read more ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html"}),"here about getting ",Object(i.b)("inlineCode",{parentName:"a"},".d.ts")," files"),"."),Object(i.b)("h2",{id:"ignoring-more-files"},"Ignoring More Files"),Object(i.b)("p",null,"For your source control, you'll want to start ignoring the ",Object(i.b)("inlineCode",{parentName:"p"},".jest")," folder. If you're using git, we can just add entries to our ",Object(i.b)("inlineCode",{parentName:"p"},".gitignore")," file."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-config"}),"# Jest\n#\n.jest/\n")),Object(i.b)("p",null,"As a checkpoint, consider committing your files into version control."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),'git init\ngit add .gitignore # import to do this first, to ignore our files\ngit add .\ngit commit -am "Initial commit."\n')),Object(i.b)("h2",{id:"adding-a-component"},"Adding a Component"),Object(i.b)("p",null,"Let's add a component to our app. Let's go ahead and create a ",Object(i.b)("inlineCode",{parentName:"p"},"Hello.tsx")," component. It's a pedagogical component, not something that you'd actually write in an app, but something nontrivial that shows off how to use TypeScript in React Native."),Object(i.b)("p",null,"Create a ",Object(i.b)("inlineCode",{parentName:"p"},"components")," directory and add the following example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// components/Hello.tsx\nimport React from 'react';\nimport { Button, StyleSheet, Text, View } from 'react-native';\n\nexport interface Props {\n  name: string;\n  enthusiasmLevel?: number;\n}\n\ninterface State {\n  enthusiasmLevel: number;\n}\n\nexport class Hello extends React.Component<Props, State> {\n  constructor(props: Props) {\n    super(props);\n\n    if ((props.enthusiasmLevel || 0) <= 0) {\n      throw new Error(\n        'You could be a little more enthusiastic. :D'\n      );\n    }\n\n    this.state = {\n      enthusiasmLevel: props.enthusiasmLevel || 1\n    };\n  }\n\n  onIncrement = () =>\n    this.setState({\n      enthusiasmLevel: this.state.enthusiasmLevel + 1\n    });\n  onDecrement = () =>\n    this.setState({\n      enthusiasmLevel: this.state.enthusiasmLevel - 1\n    });\n  getExclamationMarks = (numChars: number) =>\n    Array(numChars + 1).join('!');\n\n  render() {\n    return (\n      <View style={styles.root}>\n        <Text style={styles.greeting}>\n          Hello{' '}\n          {this.props.name +\n            this.getExclamationMarks(this.state.enthusiasmLevel)}\n        </Text>\n\n        <View style={styles.buttons}>\n          <View style={styles.button}>\n            <Button\n              title=\"-\"\n              onPress={this.onDecrement}\n              accessibilityLabel=\"decrement\"\n              color=\"red\"\n            />\n          </View>\n\n          <View style={styles.button}>\n            <Button\n              title=\"+\"\n              onPress={this.onIncrement}\n              accessibilityLabel=\"increment\"\n              color=\"blue\"\n            />\n          </View>\n        </View>\n      </View>\n    );\n  }\n}\n\n// styles\nconst styles = StyleSheet.create({\n  root: {\n    alignItems: 'center',\n    alignSelf: 'center'\n  },\n  buttons: {\n    flexDirection: 'row',\n    minHeight: 70,\n    alignItems: 'stretch',\n    alignSelf: 'center',\n    borderWidth: 5\n  },\n  button: {\n    flex: 1,\n    paddingVertical: 0\n  },\n  greeting: {\n    color: '#999',\n    fontWeight: 'bold'\n  }\n});\n")),Object(i.b)("p",null,"Whoa! That's a lot, but let's break it down:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Instead of rendering HTML elements like ",Object(i.b)("inlineCode",{parentName:"li"},"div"),", ",Object(i.b)("inlineCode",{parentName:"li"},"span"),", ",Object(i.b)("inlineCode",{parentName:"li"},"h1"),", etc., we're rendering components like ",Object(i.b)("inlineCode",{parentName:"li"},"View")," and ",Object(i.b)("inlineCode",{parentName:"li"},"Button"),". These are native components that work across different platforms."),Object(i.b)("li",{parentName:"ul"},"Styling is specified using the ",Object(i.b)("inlineCode",{parentName:"li"},"StyleSheet.create")," function that React Native gives us. React's stylesheets allow us to control our layout using Flexbox, and style using other constructs similar to those in CSS.")),Object(i.b)("h2",{id:"adding-a-component-test"},"Adding a Component Test"),Object(i.b)("p",null,"Now that we've got a component, let's try testing it."),Object(i.b)("p",null,"We already have Jest installed as a test runner. We're going to write snapshot tests for our components, let's add the required add-on for snapshot tests:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"yarn add --dev react-addons-test-utils\n")),Object(i.b)("p",null,"Now let's create a ",Object(i.b)("inlineCode",{parentName:"p"},"__tests__")," folder in the ",Object(i.b)("inlineCode",{parentName:"p"},"components")," directory and add a test for ",Object(i.b)("inlineCode",{parentName:"p"},"Hello.tsx"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"// components/__tests__/Hello.tsx\nimport React from 'react';\nimport renderer from 'react-test-renderer';\n\nimport { Hello } from '../Hello';\n\nit('renders correctly with defaults', () => {\n  const button = renderer\n    .create(<Hello name=\"World\" enthusiasmLevel={1} />)\n    .toJSON();\n  expect(button).toMatchSnapshot();\n});\n")),Object(i.b)("p",null,"The first time the test is run, it will create a snapshot of the rendered component and store it in the ",Object(i.b)("inlineCode",{parentName:"p"},"components/__tests__/__snapshots__/Hello.tsx.snap")," file. When you modify your component, you'll need to update the snapshots and review the update for inadvertent changes. You can read more about testing React Native components ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/jest/docs/en/tutorial-react-native.html"}),"here"),"."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Check out the official ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://reactjs.org/tutorial/tutorial.html"}),"React tutorial")," and state-management library ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://redux.js.org"}),"Redux"),". These resources can be helpful when writing React Native apps. Additionally, you may want to look at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://microsoft.github.io/reactxp/"}),"ReactXP"),", a component library written entirely in TypeScript that supports both React on the web as well as React Native."),Object(i.b)("p",null,"Have fun in a more type-safe React Native development environment!"))}l.isMDXComponent=!0}}]);