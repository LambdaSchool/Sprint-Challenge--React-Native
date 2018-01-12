
* 1. What makes React Native apps different from hybrid apps built with Cordova and the like?
Answer:
Apps built using Cordova are pure web applications built using HTML, CSS and Javascript which are rendered using WebView. So, apps built using Cordova do not use native controls of the smartphone OS. With React Native, on the other hand, we have access to native controls. Also, since React Native components link to native controls, JavaScript is not doing the heavy lifting in React Native. This results in significantly better performance of React Native apps compared to Cordova apps.

* 2. In what ways is React Native different syntactically from React?
Answer: 
Some of the differences between React Native and ReactJS are:
a. React Native is a framework while ReactJS is a javsscript library.
b. React Native doesn't use HTML to render the app. It uses alternative components in similar way. For example a
<View> component is similar to the <div> and <Text> component is similar to the <p> tag. Whereas, ReactJS uses HTML components to render an app.
c. To style React Native components, we create stylesheets in javascript similar to the CSS in ReactJS.
d. To Navigate to different pages in React Native, Navigator component is used whereas in ReactJS Router component is used.

* 3. What are some drawbacks of writing a mobile app in React Native versus the other native languages?
Answer:
- React Native doesnot support all native APIs.
- React Native has a smaller third party libraries as compared to the native languages.
- When using native applications in the mobile, such as camera, it is a lot easier to use in the native frameworks as compared to the React Native.
- The graphical elements in React Native are automatically transformed to the Android and iOS platforms, which varies the placement of elements. Thus, native languages are more helpful when making platform specific apps.

* 4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?
Answer: 
-With React Native, you can develop 2 different applications, that is, for Android and iOS. The same code can be used for both and it transfers the graphical elements to match the platform. Thus, we have to learn just 1 language for 2 different platforms.
-React Native is written in Javascript which makes it very easy for a web developer to move from web development to the mobile development.
-React Native is good for beginners which helps develop apps for 2 different platforms.


