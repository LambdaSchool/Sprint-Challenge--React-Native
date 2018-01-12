## Answers

1. What makes React Native apps different from hybrid apps built with Cordova and the like?

React Native is far superior in terms of UI performance and rendering. In terms of logics, it enforces certain development paradigm (based on React) which can be upside or downside, depending on developer’s background and preferences. Cordova leaves the choice of framework to the developer: it can be based on React, Angular or older frameworks / libraries, such as Backbone, JQuery Mobile. React Native is also much more convenient in terms of debugging and building.

But Cordova is currently still holds multiple advantages for cross platform hybrid mobile application development:

More mature ecosystem (2010 vs 2014), in terms of available plugins and public knowledge.
More documentation.
Easier to use for developers with no native platform skills.
Better support for old platforms (React Native doesn’t support iOS 7).
Wider support of new platforms.
Less volatile (React Native has a new version release every 2 weeks, with no promise for backwards compatibility)

2. In what ways is React Native different syntactically from React?

To start, React Native does not use css for styling, instead it uses the prop "style". While the styling structure is different between the two, most of the syntax is the same. React is a single page multi-component application, React Native navigates between "scenes" or pages. In React HTML is wrapped in <div>'s whereas React Native JSX replaces HTML and <View>'s replace <div>'s.

3. What are some draw backs of writing a mobile app in React Native versus the other native languages?

React Native does not support all of the native APIs. The most used APIs are supported, but sometimes there is a need to access other APIs or functionality. Since not all functionality is included in React Native, this has been solved by the introduction of Native Modules. These modules are parts of the code which are written in the native language and then incorporated into the rest of the code. This is a decent way of solving the problem of not having support for all APIs, but it requires the developers to have knowledge about the native language, which is something that the developer perhaps wanted to avoid by choosing React Native. It also results in code duplication since the native module has to be written for both Android and iOS separately. React Native has a smaller community than the native platforms, and also less third party libraries. To use the third party libraries developed for the native platform, these incorporations have to be written in native modules. When wanting to access other native applications, such as the camera, it is a lot easier to do through the native frameworks. React Native does not support this, which means that this has to be written in native modules or through a third party library. Android and iOS apps look different and have different design guidelines. The graphical elements are automatically transformed to match the given platform, but the placement may still vary. This causes a lot of if-statements or separate code to follow the design guidelines for both platforms. There is an uncertainty concerning the long-term support for React Native. Facebook could one day decide to stop updating the framework or the native platform could make changes that are hard to wrap around.

4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

The biggest advantage with React Native, there is no need to develop two separate applications. Instead the same code base can be used for both Android and iOS. This is a big advantage since there is no need to learn two different languages and platforms, it is enough to know only one. When using React Native to develop a relatively simple app, the time from start to having the application on the market is often shorter than when developing the application natively. For a web developer, going from web to mobile development can be tricky. React Native smooths the transition since it is a JavaScript framework. Most web developers have encountered JavaScript, which makes this way of developing mobile apps more familiar and easier to learn. When developing in React Native and a file is saved, the changes are immediately shown on the device where the app is running. This speeds up the process of getting feedback on recent changes. React Native is open source which comes with the opportunity to inspect the code. This can be helpful to increase the understanding of the framework, but also to help improve the framework by fixing bugs or adding features.
