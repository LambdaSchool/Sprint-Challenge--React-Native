1. What makes React Native apps different from hybrid apps built with Cordova and the like?
    To me, the ability to have 3rd party plug-ins makes it highly customizable.  Also, it would seem if you can do react, you can create a mobile app. 
    From my experience with it this week, I can easily transfer my front end react knowledge to designing mobile apps. 
2. In what ways is React Native different syntactically from React?
    The syntax is sorta the same, but you cannot do div elements.  Instead, you have to do views.  Some of the features are the same, such as buttons, text, etc etc, its just how you call it that's different.  Text, Buttons..and I found a new buddy, "TouchableHighlight" which makes the whole button thing.... not so annoying.  
3. What are some draw backs of writing a mobile app in React Native versus the other native languages?
    well after some research, I found this article which sums up the comparison pretty nicely. https://www.toptal.com/mobile/comparing-react-native-to-cordova
    with react you can write anything you want if you know react.. but you can't just convert your project within a few minutes from a web app to a mobile app.
4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?
    React, from what I can tell, renders differently than some of the other languages.  Mostly, because its not bound to webview.  The app will render in different threads, making processing much much faster.  Instead of linear processing, you've got multimple things running at the same time, increasing speeds. 