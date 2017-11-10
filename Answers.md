# Assessment for Mobile development with React Native

## Questions and Answers
1. What makes React Native apps different from hybrid apps built with Cordova and the like?

Both Cordova and React Native are mobile application frameworks for development.
Cordova displays the application in a webview. This means that the application functions within a small native web browser on the user's mobile deice. This way, Cordova uses HTML, CSS and JavaScript to build up the app.

React Native is a front end framework used to create native views, but it has no webview like Cordova. Instead, it relies on javascript interpreters so that the app can be written in javascript, but the inputs are rendered.

2. In what way is React Native different syntactically from React?
React Native is meant for mobile devices. While React Native is a framework to accomplish this, ReactJS is a Javascript library.

3. What are some draw backs of writing a mobile app in React Native versus the other native languages?
Drawbacks of using React Native include constant updates which may change expected performance, licensing issues with facebook, and sometimes unforseen difficulties with implementing modules


4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?
ReactJS/React Native are pretty hot right now, so they're both constantly being improved. The open source nature is driving much of the innovation, as well as the fact that it's supported by facebook, an unignorable entity in web development. Cross-platforming applications with React Native can cut down on development costs, and simplified debugging makes it much faster to write the app in the first place.


## Project

//Status: incomplete. I know this should be more simple than I am making it, but I think I have the wrong approach.

* You will be writing a simple app that makes a GET request to https://dog.ceo/api/breeds/list/all and lists all the breed names of dogs. I would suggest making a get request with Postman first so that you know the structure of the data coming back. You may use axios or whatever your preference is. You can also check out their documentation at https://dog.ceo/dog-api/.

## Stretch Problem
* Create a second View that displays the sub breeds of a given breed. Use React Navigation to create a clickable link on those breeds that have sub breeds in order to achieve this.