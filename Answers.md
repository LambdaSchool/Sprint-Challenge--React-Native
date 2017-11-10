1) What makes React Native apps different from hybrid apps built with Cordova and the like?

I am not familiar with Cordova.  But looking its home page and wiki page, Cordova seems like another solution to write cross platform mobile apps in one language.  And it Cordova's case, html, js, and css. Where as React Native doesnt use html but, its own html like tag syntax, which is JSX and prebuilt components.  I'd also guess React Native is different as its built off of the JS8 enginge and still can use other React tools such as Redux and Flow.


2) In what ways is React Native different syntactically from React?

React Native uses JSX xml like tags and certain kind of styling, as React uses html and css.


3) What are some draw backs of writing a mobile app in React Native versus the other native languages?

Its harder to get all the bells and whistles of premade unique functions/features of the native language.  Since React Native tries to make consistant apps from Android and IOS, React Native only executes well the intersection of those two platforms features, such as imgs, text, buttons, views... etc.  Whereas Android has  a toast and back button, IOS doesnt.  IOS has a default list view, the sneak peak feature of continually pressing the app icon, and siri.  So React Native will have a wonky way of implementing the disjoint features of IOS and Android.


4) What are some of the strengths of writing a mobile app in React Native versus the other native languages?

You write the code in one jaunt.  Don't have to rewrite in two languages, e.x. Swift/Obj C (IOS) and Java (Andriod).  Half the amount of middle to know, half the amount of bugs, one IDE of Expo and no Android Studio and XCode, half the amount of testing etc...  Its writtin in JavaScript and JSX so that may be easier for most people than Obj C, Swift, Java.

