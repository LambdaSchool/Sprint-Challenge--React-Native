## Questions
1. What makes React Native apps different from hybrid apps built with Cordova and the like?
---
  * Cordova wraps a single page web app with the device's web browser creating a webView, which tends to be slower than native apps, as well as having a different look and feel. React Native uses
  native UI elements so it will look and feel just like a native app. It also tends to be faster since
  the app doesn't live inside a web browser. 
---
2. In what ways is React Native different syntactically from React?
---
  * Since React Native isn't using a webView, there is no DOM, so you can't use the standard HTML tags.
  div becomes View, p Text, etc... You can't use CSS files for styling, rather styling is done with Javascript thus all of the styling properties follow Javascript's naming conventions. In CSS you have
  "background-color", for React Native that becomes "backgroundColor".
---
3. What are some draw backs of writing a mobile app in React Native versus the other native languages?
---
  * React Native apps are slower than true native apps, since they're written in Javascript which has
  to be interpreted by the device's Javascript engine. With React Native there isn't complete API access. There are some things that you just can't do, and if you need to do, will require writing a native module. Intereacting with other native apps, for example, isn't supported and you would have to write a native module to get that working.
---
4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?
---
  * You don't have to write two separate apps to support both IOS and Android. You can have a shared codebase for both versions and make whatever device specific changes that need to be made quite easily. It's faster to write a React Native app, since again, you don't need to write two different apps. It also uses the concepts from web development, so if you already know that, it's much easier to get started than having to go learn a new language and ecosystem.
---