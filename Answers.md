#What makes React Native apps different from hybrid apps built with Cordova and the like?

*While Cordova and the like (Ionic, PhoneGap, etc) are hybrid apps, this means that they're essentially websites but embedded into a mobile app, React Native is not that. It's rendered using native components, which gives a much better UX since they conform better to the standards of the operating system. Essentially, React Native performs and hosts smoother animations.*

#In what ways is React Native different syntactically from React?

*Syntactically, there's a couple differences between the two. React uses HTML/CSS while React Native uses native components to render the UI. This leads to a lot of similarity in functions (like ComponentWillMount) but a lot more pre-written components get used (like <Button> or <FlatList>). There's also a use of "alternate" components in React Native compared to what you'd see in react, like: <View> instead of <div>, <Text> instead of <span>, and so on.*

#What are some draw backs of writing a mobile app in React Native versus the other native languages?

*React Native doesn't necessarily support every Native API, so there's a reliance on the third-party community to create React Native modules. Additionally, React Native has a lot of trouble accessing certain parts of the phone, like the camera.*

#What are some of the strengths of writing a mobile app in React Native versus the other native languages?

*React Native is quicker and far more accessible of a platform for developers to use to get a relatively simple application up and running. It also smooths the transition from Web Dev into Mobile Dev and can be a lot less rocky than learning Objective-C, Swift, or Java. It's also entirely open source and anyone could contribute to it or analyze the codebase to get a better understanding of the framework!*
