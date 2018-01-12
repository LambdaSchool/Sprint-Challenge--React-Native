# Questions

1. What makes React Native apps different from hybrid apps built with Cordova and the like?

  Hybrid apps run JavaScript in WebView and have native extensions to control the phone. They are websites that have been embedded into an app. React-Native compiles to native code and has direct access to native controls. Using RN, you can build in JS but have the feel of a truly native app (C or Java).

  Cordova: actually runs within the browser.
    Pros: You can re-use large portions of your web app's code for your mobile app. There are libraries to overcome the lack of native control. You can use whatever tech stack you normally would to create your web app.

    Cons: It is a web app, and uses WebView to use web functionality inside the app. There can be latency issues, and it doesn't have direct access to native elements. Bound by mobile browswer limitations and compatibility, iOS browser is slower than chrome, so iOS apps may feel more sluggish than their Android counterparts. If you want to debug on the fly, you need to build that ability into Cordova, as debugging is done just like website's are debugged.

  React Native: allows react developers to move quickly into mobile, and focuses more on JS. 
    Pros: Access to native controls. Compiles directly to native code. Native is multi-threaded allowing more computations to run simultaneously, freeing itself from the bounds of the mobile browser and JS limitation. live reloading and hot module debugging are built in to react.

    Cons: Cannot directly port your existing React App into React Native. While many parts of RN are similar to React, there are 'language' differences. Cannot style with true CSS (is that really a bad thing?) but uses language similar to CSS.

2. In what ways is React Native different syntactically from React?

  view vs div
  JSX vs JSX + HTML
  Text vs h# or p
  screen vs component 
  Navigation vs Router
  direct styling vs css

  everything seems to be proper case in RN vs lower/camel case in React

3. What are some draw backs of writing a mobile app in React Native versus the other native languages?

  younger framework/language than C/Java, community is smaller, meaning less resources to pool for knowledge. RN may not support all APIs available. JS isn't as strict as C or Java, which can introduce errors. Not officially supported by Apple/Google. Tends to lag behind SDK.

4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

  quickly growing community of users. develop the app once, deploy to both iOS and Android. RN is JS, and JS is one of the fastest growing and most widely used languages. Development is similar to web architecture, where Java and C are NOT. Can use Expo and emulators for testing/debugging both platforms. Hot Reloading, no need to wait for compile to test changes.