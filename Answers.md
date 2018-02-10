1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?

  RN apps are written in JavaScript and compile down to native code for your target platform. RN app rely on pre-built components to use native platform features. Ionic apps use HTML5/CSS to produce that app and Cordova or PhoneGap to get access to native platform features.

2. In what ways is React Native different syntactically from React?

  RN apps have a diffrent set of JSX elements/components like <div> in React vs <view> in RN. Also you can't write stardard CSS in RN.

3. What are some of the strengths of writing a mobile app in React Native versus the other native languages? 

  All the bussness logic of your app can be writen once and all that needs to change is how you interact with native features change depending on your target platform.

4. What is are some differences between `localStorage` and `AsyncStorage`? What are some similarities between the two?

  LocalStorage is used in the browser and is not asynchronous, where as AsyncStore is for native platforms and is asynchronous but, they both do the same thing. Store presistant data between views or sessions.

  