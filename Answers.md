### You're not from around here, are you?
1. Hybrid apps that are built with Cordova are wrapped in a WebView.  This means that while they may generally look like a native app, everything is being done through the browser engine.  This imposes limitations on the functionality of an application, and it can also cause issues with performance. 

### I'm a native... sort of.
What React Native does is very different.  React Native actually uses native Android/iOS components to create genuine native apps that are sometimes comparable to native code in terms of speed and performance (with some glaring exceptions).

### Syntax Differences
2. There are a few differences to keep in mind when switching between React Native and React.js.  For one, the React Native components are different than the html tags used on React for the web.  Looping through lists also requires additional steps when working with React Native's list views as compared to mapping them out in React for the web.  Additionally, all text must be wrapped inside of <Text> tags or an error will be thrown.  

Styling rules are also different.  The only way to style react components is through inline JavaScript.  It is not possible to link a stylesheet to individual components in React Native. 

3. By using React Native, you lose the ability to implement certain functuality within the applications.  There are a limited number of native components that are accessible with the Raect Native API, and it provides a very clear "DO NOT CROSS" line in terms of application development.

Additionally, React Native will suffer from performance issues in certain situations compared to native code.  While it is possible to include native modules, it can be argued that`` the need to use native code is on the verge of defeating the purpose of incorporating React Native in the first place.

4. While those disadvantages do exist, there are also a number of benefits that developers can enjoy by writing mobile applications in React Native. 
* Components can sometimes be reused
* Much of the code will be shared between iOS and Android, reducing development time
* It allows for everything to be written in JavaScript, which can reduce the learning curve but also speed up development
* The way React maintains state (and optionally redux, if implemented) can still prove beneficial to developers by keeping state in one place. 
