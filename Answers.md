1. Cordova is a WebView wrapper that uses the DOM as a view. React Native is a "real" app that renders native components.
2. React Native doesn't get to take advantage of CSS or HTML elements, so the components used will be different from regular React applications (e.g. using View instead of div)
3. High performance, native components, and high code reusability between Android and IOS
4. Both provide local persistent data storage for key/value string pairs. Localstorage is synchronous and AsyncStorage is asynchronous.