#What makes React Native apps different from hybrid apps built with Cordova and the like?

Both technologies are pretty similar but React Native allows us to build react apps from a React approach rather than a web approach like in Cordova. React doesn't use a WebView, but they do still run JavaScript in a JavaScript engine so it's not entirely native. In Cordova, if you want a native look and feel, you have to recreate native components yourself while they come built in, in React Native. Because React Native isn't running in a WebView and you are getting access to a decent number of native components, you should be able to expect better performance.

#In what ways is React Native different syntactically from React?

You lose access to web tags such as `div` and styles are added directly to components instead of through css styling.

#What are some draw backs of writing a mobile app in React Native versus the other native languages?

React Native is still running JavaScript through an engine which is going to makes it less effecient by nature. Rather than talking to the Google API directly from Java, you would be talking to React's JavaScript API. You add another middleman to the process. 

Android > Android API > React Native API > Your Code

#What are some of the strengths of writing a mobile app in React Native versus the other native languages?

As someone who is a huge fan of Java, I really hate working with the Android SDK. It's probably just from lack of experience with it. React Native is a lot easier to get into and feels like it's quicker to make things in.

#Project & Stretch Problem

[@snack.expo.io](https://snack.expo.io/@jourdanclark/sprint-challenge-mobile)




