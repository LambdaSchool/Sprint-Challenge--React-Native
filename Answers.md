1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
* Hybrid style apps are websites embedded in a mobile app
* Native apps are delevoped in the language required by the platform it targets
* React Native apps are written in Javascript so the code can be shared across platforms- since React Native apps render using native components the user experience is closer to that of Native Apps.

1. In what ways is React Native different syntactically from React?
* React Native does not use HTML to render the app- instead it uses components that map the native componenets. ex: instead of a `div` tag or a `p` tag in React/HTML- you would use a`View` component or a `Text` component in React Native.
1. What are some of the strengths of writing a mobile app in React Native versus the other native languages? [React Blog](https://reactjs.org/blog/2015/03/26/introducing-react-native.html)
* React Native Apps are mainy written in JavaScript, so if you do not know the language specfic to a platform, but know Javascript-you can still make an app for that platform.

1. What is are some differences between `localStorage` and `AsyncStorage`? What are some similarities between the two?
* In React Native `AsyncStorage` is used instead of `localStorage`.
* `localStorage` is used to persist data in a browser.
* `AsyncStorage` is used to persist data on an application- the data will persist if you restart or quit the application on the mobile device.