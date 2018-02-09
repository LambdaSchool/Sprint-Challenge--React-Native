## Answers
1. Question: What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
    - Answer: React Native apps get translated & compiled from JavaScript into native language for the OS like Java and Objective C, and they do not need to run in a browser like those aps built with Cordova/Ionic. In general the Native Apps perform better, and have access to a wider variety of functions available from within the Native OS, and can also utilize native code along with the Transpiled JavaScript code, this allows for collaboration from developers from Native and JS backgrounds on the same project.
2. Question: In what ways is React Native different syntactically from React?
    - Answer: React Native utilizes pre-defined components to render, where React can render custom components. React Native renders to a Native App, where React renders to a specified DOM element.
3. Question: What are some of the strengths of writing a mobile app in React Native versus the other native languages?
    - Answer: The ability to deploy to both Android / iOS / Web from the same environment using React Native & React Native for Web all with just one Programming Language: JavaScript. No need to have access to Xcode which is only available on OSX, and not having to install any development SDK like Xcode / Android Studio and learn Objective C or Java.
4. Question: What is are some differences between `localStorage` and `AsyncStorage`? What are some similarities between the two?
    - Answer:

| Comparison | LocalStorage | AsyncStorage |
|--:|:--:|:--:|
|Data Persistence | [X] | [X] |
|Data Storage | Local Browser | Local Device Cache |
|Storage Model | [Key][Value] | [Key][Value] |
|Functionality | Synchronous | Async |
|Return Model | Direct | Promise |
