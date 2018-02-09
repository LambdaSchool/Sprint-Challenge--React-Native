## 1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
#### * React Native apps use software from the OS, while hybrid apps use sdk from the web that load in browser.
#### * Hybrids are basically websites pushed onto a mobile platform and styled to look native, while React Native apps are specifically designed for mobile platforms.
## 2. In what ways is React Native different syntactically from React?
#### * React Native handles components in a slightly different way than React.
#### * Styling is done using stylesheets rather than traditional CSS.
#### * Styling views use camelCase to name styles rather than hyphens like React.
#### * Navigation in React is handled with ReactRouter while in React Native it is handled by Navigator.

## 3. What are some of the strengths of writing a mobile app in React Native versus other native languages?
#### * React Native allows for apps that run on both iOS and Android with the same code.
#### * Development, testing, and debugging are simpler in React Native because it allows for changes to show on save.

## 4. What are some differences between localStorage and AsyncStorage? What are some similarities between the two?

#### *Similarities*
#### * both store data for React Native apps

#### *Differences*
#### * quite simply, one is asynchronous while the other is not.
#### * Async is persistent outside of a session and built into React Native.
#### * Local persists in web browser during a specific session.