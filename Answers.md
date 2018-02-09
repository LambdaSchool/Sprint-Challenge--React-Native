# React-Native Sprint


## Answers

### What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?  

*Answer*:  
  **React-Native** have access to the `native features` available in the device/OS. Whereas **Hybrid-apps** uses Webview (a browser that loads webpage similar to Google Chrome) to render the app.


### In what ways is React Native different syntactically from React?

*Answer*:  
  **React** have Components with name similar to `HTML` tags, whereas **React-Native** have Components like `<View>`, `<Text>`, `<Button>`, etc ... In React-Native, the styles are created by using a component `StyleSheet`.

### What are some of the strengths of writing a mobile app in React Native versus the other native languages? React Blog

*Answer*:  
  * We can develop React-Native apps using Javascript
  * Learn React-Native once and use anywhere.
  * React-Native is available for `Android`, `iOS`, `macOS`, `Windows`, etc ...
  * Cross-Platform development without React-Native would require us to learn more languages like _Java_ for Android, _Swift_ for iOS and _C#_ for Windows.

### What is are some differences between localStorage and AsyncStorage? What are some similarities between the two?

*Answer*:  
  Both `localStorage` & `AsyncStorage` are used for client-side data persistence.
  * `localStorage` is available in web/browsers, `AsyncStorage` is available in React-Native
  * `localStorage` is synchronous, `AsyncStorage` is asynchronous and returns a *Promise*

