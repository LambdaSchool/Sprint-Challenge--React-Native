1. What makes React Native apps different from hybrid apps built with Cordova and the like?

    - React and React Native, while very similar, cannot be cross-platform from mobile to Web app using each others code. ou cannot take a React Web app and instantly complile it down to a React Native app.
    While with Cordova, it's very common to do just that,to start developing a pure web application, then later bundle it as a Cordova application, and reuse as much code as possible for all the mobile platforms.
    - Cordova and the like are compiled down on a mobile web browser engine called WebView meaning that there isn't a limit to what option of library or framework that can be used for a Cordova application. While React Native is its own framework, React || JSX. 
    So in short React Native is a React-centric opinionated approach to mobile development, while Cordova allows us to bundle web technologies inside the WebView shell.
    - In the React-Native development, hot-reloading comes straight out of the box, and the debugging process has been simplified with big, scary red screen and error sourcemaps that locates, identifies, and notifies where the error is and possible fixes.

1. In what ways is React Native different syntactically from React?

    - For React-Native you can compare some of the syntax similar to HTML, where for example a *View* component is similar to a *div* tag, and a *Text* component is similar to a *p* tag.
    - And since there is no CSS in React-Native the styling is different with using StyleSheets and flexBox with camel casing instead of hyphens: so *justify-content* in React CSS is *justifyContent* in the styling of React-Native and *background-color* would be *backgroundColor*, etc. Same with Animations, no more CSS, but there is Animated API provided by React-Native.

1. What are some draw backs of writing a mobile app in React Native versus the other native languages?

    - React Native does not support all of the native APIs.
    - React Native has a smaller community than the native platforms, and also less third party libraries
    - When wanting to access other native applications, such as the camera, it is a lot easier to do through the native frameworks. React Native does not support this, which means that this has to be written in native modules or through a third party library.

1. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

    - With React Native there is no need to develop two separate applications. Instead the same code base can be used for both Android and iOS.
    - Since React-Native using JSX, knowing ReacT with help jump immediatly into building mobile apps instead of having to learn an entirely new language.
    - The ability to have `Hot Reloading`: When developing in React Native and a file is saved, the changes are immediately shown on the device where the app is running. This speeds up the process of getting feedback on recent changes.