1. React Native apps use the SDK from the actual OS of the device, while hybrid are web based and load int he browser. Native uses on code base per platoform, while hybrid uses one code base for muiltple platforms. 

2. React uses divs, while in React Native you use views to seperate differnet sections. React also uses html html and css, and React Native uses custom components, and a css style transpiler, and uses a component called a StyleSheet.

3. You have the ability to write the code all in javascript and jsx and then it will transpile to run along side the native code on the device. This can also limit you to what the native code has to offer, which is why you have the ability to add the Native React code in with the native for the device by ejecting. 

4. Localstorage is based in the window object on your machine and is synchronous, while asyncStorage is stored on the phone and is asynchronous. They both have a setItem and getItem which allows you to store a key:value pair. 