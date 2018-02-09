## Questions
1. What makes apps built with React Native different from hybrid style apps built with Cordova/Ionic?
   The answer, the  rough answer that is being looked for is that react native apps are 75% or more of pure react with specific react native components added in which get compiled down to specific android and ios implementations. This means that you have to maintain two codebases , pure react for web and react native which apart from react native api is not too different in pattern from react and is part of the react project. Now for what i agree with https://medium.com/dev-channel/why-progressive-web-apps-vs-native-is-the-wrong-question-to-ask-fb8555addcbb#.mhxuqcxhg

   Progressive web app can offer hadware access to almost everything a native web app can and the app doesn't need to be hosted on the store. Just once codebase is needed for all platforms. There are so many advantages and i just touched upon the main ones. 

   That said before html5 web hadware access matured react native was and to some extent is still a good strategy when you compare it to having to create three seperate codepbases, web, android , ios with very little sharing between them. 

   
1. In what ways is React Native different syntactically from React?
React components get translated to html but react native components get compiled to android or ios components. 
Styling in react native uses javascript. 
Navigation in react is through react.router while in native it's the navigator component. 
Your app can detect what hardware it is running on and run customized presentational components for each platform that you have defined
1. What are some of the strengths of writing a mobile app in React Native versus the other native languages? 
[React Blog](https://reactjs.org/blog/2015/03/26/introducing-react-native.html)
Writing a mobile app in other native languages such as ios swift or java for android requires learning two new ecosystems and languages whereas if you know react , react native is not a big stretch to learn and shares a lot of the codebase from react

1. What is are some differences between `localStorage` and `AsyncStorage`? What are some similarities between the two?
localStorage and AsyncStorage both support persistant data both  offline and between app restarts. localStorage is a web api while AsyncStorag while AsyncStorgage maps to Android (rockdb or sqLite) and ios native local storage implementations