# What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
* Hybrid apps are more like a website than an app, but they've been embedded to run in an app-like way. React Native apps are created specifically for mobile devices.
* Cordova is more solid/well-established, but React Native seems more flexible -- and it may be easier to start using if you're already familiar with React.

# In what ways is React Native different syntactically from React?
* We're abstracted a little further from HTML, using <View> components rather than <div> tags.
* Styling is similar conceptually, but implemented a little differently.
* Navigation/Routing is implemented in a different way.

# What are some of the strengths of writing a mobile app in React Native versus the other native languages?
* React Native supports both iOS and Android using the same source code.
* Similarity to React and the use of JavaScript makes React Native accessible - "learn once, write anywhere."

# What is are some differences between localStorage and AsyncStorage? What are some similarities between the two?
localStorage : web browser :: AsyncStorage : native application

### Similarities:
* Both allow you to store data that persists between sessions
* Both are based on a key-value system

### Differences:
* The data stored differently in either case (and AsyncStorage is stored differently on Android vs iOS)
* localStorage has a data size restriction related to cookies that (I would guess) AsyncStorage does not
* AsyncStorage methods always return promise objects.