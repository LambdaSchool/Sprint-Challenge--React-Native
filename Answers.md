1. Cordova runs applications inside a WebView, which is essentially a mobile browser. Since the application is running in a mobile browser,
the developer writes actual HTML and CSS and is allowed to use any JavaScript framework that she chooses. However, because apps are running
in a WebView, they will generally be less performant than React Native apps, which interface directly with native APIs. 

2. Unlike React, React Native does not use HTML or CSS. For example, instead of using <div> and <p> tags, React Native uses
<View> and <Text>. Also, while the stylesheets that React Native uses look similar to CSS, there are some syntax differences. For example, 
the CSS property 'background-color' is instead written as 'backgroundColor'. 

3. A disadvantage of React Native is that since it uses JavaScript, it will generally be less performant than native apps written in Java or Swift. Another disadvantage is that some developers prefer the type safety of strongly typed languages like Java and Swift over JavaScript's
weak typing system.

4. A major advantage of React Native is that you only need to write one React Native application and it will run on both iOS and Android. 
Developers can write Android and iOS apps without knowing Java or Swift.
