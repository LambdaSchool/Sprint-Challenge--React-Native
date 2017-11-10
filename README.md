# Assessment for Mobile development with React Native
* Answers to your written questions will be recorded in *Answers.md* 
* This is to be worked on alone but you can use outside resources. You can *reference* any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something. 
* **Just a friendly Reminder** Don't fret or get anxious about this, this is a no-pressure assessment that is only going to help guide you here in the near future. This is NOT a pass/fail situation. 
## Start by forking and cloning this repository.
## Questions
1. What makes React Native apps different from hybrid apps built with Cordova and the like?
    > A `hybrid app` functions like an app and has access to some system resources and APIs but is run in something like a webview or some sort of browser render. It is assumed to be less performant 
    > and more walled away from native-like functionality because of how it's created.  A `native app` is compiled to something closer to the native language used by the system.  In a `native app` the 
    > javascript and css-like code is compiled rather than rendered in a view.
2. In what ways is React Native different syntactically from React?
    > Syantactically speaking, `React` & `React Native` are similiar in syntax but `React Native` does not use or compile to html & css. The code used is meant to mimic how html & css function but 
    > creates native views and screens.  It's visual sugar to make working with it more familiar and easy to move between a `React` web app and 'React Native' mobile apps.
3. What are some draw backs of writing a mobile app in React Native versus the other native languages?
    > One drawback that stands out to me is that you would have to use code that works with 'React Native'. If there is an implementation of a feature, library or native function that isn't written 
    > as a plugin for `React Native` and Javascript then you would have a difficult time being able to use it.  You also are having to compile javascript to native code so it might not be as 
    > performant as native in some cases.
4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?
    > A big strength for `React Native` is the same reason someone might want to use `React` on the web.  It provides great structure, although opinionated, to larger projects. It allows moving 
    > from a web project to a mobile project much easier.  It's all the same language.  Also, being able to compile to multiple mobile OSs from the same base code is amazing.
## Project
* You will be writing a simple app that makes a GET request to https://dog.ceo/api/breeds/list/all and lists all the breed names of dogs. I would suggest making a get request with Postman first so that you know the structure of the data coming back. You may use axios or whatever your preference is. You can also check out their documentation at https://dog.ceo/dog-api/.

## Stretch Problem
* Create a second View that displays the sub breeds of a given breed. Use React Navigation to create a clickable link on those breeds that have sub breeds in order to achieve this.