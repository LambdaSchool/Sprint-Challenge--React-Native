1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?

Answer: React Native allows developers to write native app using JavaScript and most of the code needed to get started can be shared across platforms and be rendered using native components. This means that user experience will generally be closer to other native apps as they will follow the patterns and have better performance and smoother animations.
While Ionic uses web technologies to render the application which requires Cordova bridges to access native features. Then it will try to reproduce native behaviors to provide the best user experience.

2. In what ways is React Native different syntactically from React?

Answer: React Native is framework, whereas React is a JavaScript library. React Native doesn't use HTML to render the app, but uses native components that will map the actual real native iOS or Android components.
To style React Native components, you have to create StyleSheet in JavaScript. It looks similar to CSS, but it is not exactly the same. You cannot use CSS to style React Native components. Navigation is also different. React Native uses react-navigator that has screen which is similar to the component, and route name which is similar to the path in react-router-dom. 

3. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

Answer: React Native allows developers to write code shared cross platforms and to use JavaScript to develop. Whereas other native languages like swift or android have to have separate version of codes with different languages suitable for different platforms. 

4. What is are some differences between localStorage and AsyncStorage? What are some similarities between the two?

Answer: Similarity: they are both key-value storage systems that is global to the app. They only accept string type data.
Differences: localStorage is sync storage whereas AsyncStorage is async storage which accepts callbacks.