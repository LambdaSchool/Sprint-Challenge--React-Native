1. What makes React Native apps different from hybrid apps built with Cordova and the like?

React Native uses technology to build a true mobile application built on javascript. Since it is a native application it has access to the mobile devices native buttons and functions by default. Due to it not being a web application there is no DOM, not HTML, index, or CSS.
React Native uses javascript manipulation to implement the styling that we are familiar with that comes standard with CSS.

Cordova and other hybrid applications are really just a clever emulator for a native application. They run on the mobile devices browser and then are converted visually to look like a native application. While this allows for some easy deployment to multiple systems and allows you to use virtually any dependency/addon that will work with a mobile browser; it really is just an emulated native application; any native functionality you desire will likely have to be implemented via HTML and CSS.

2. In what ways is React Native different syntactically from React?

React Native does not use html of any kind; so you cannot use standard html div's or p's. Instead you are required to use commands like view and text. In addition because there is no html, there is not CSS; in order to style your componenents you need to utilize the React Native specific styleSheet object.

3. What are some draw backs of writing a mobile app in React Native versus the other native languages?

One of the biggest drawbacks is that React Native is it's own framework that has specific api's associated with it. So all your favorite web API's will not work with React Native. Then there is cross platform capabilities. While React Native has the ability to be cross platform, its not as simple as hybrid apps. With hybrid apps you can change a few lines and bundle it up differently for each platform you want to deploy your app to.

React Native can be used multiplatform, however it does not have the support of other Native development frameworks/APIs since it is a standalone framework.

4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

React Native is an open source framework that is undergoing constant improvement.
Because it is a crossplatform language based on javascript you can build on code base and then alter it to meet the specific needs of the platforms you are hoping to deploy your application to.

React Native is generally a faster language to program in; and has a lot of built-in features that speed up development.