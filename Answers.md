# Answers for Sprint-Challenge-Mobile

## 1. What makes React Native apps different from hybrid apps built with Cordova and the like?

#### React native is a strictly React-based mobile development platform, and limits the language to JSX. Cordova and other hybrid approaches can use multiple languages, and typically bundle them together in some sort of web viewer. In many cases, hybrid apps can start off as web-based apps, and then the bulk of the code can be rebundled to a mobile app. With React-Native, you're building a strictly mobile app. 

## 2. In what ways is React Native different syntactically from React?

#### React Native does not use HTML or CSS and some of the components are different. You declare a stylesheet written in JS rather than having CSS styles. Some of the syntax feels similar to HTML, such as using `View` instead of `div` and `Text` instead of `p`.

## 3. What are some draw backs of writing a mobile app in React Native versus the other native languages?

#### React Native can feel strange at first, and is a little bit more limited in it's ability to style components. The code, in most cases, is also not reusable in other environments. There is also quite a bit more setup involved in testing your application.

## 4. What are some of the strengths of writing a mobile app in React Native versus the other native languages?

#### Since React Native forces you to use flexbox and develop with a mobile-only approach, you can generally be more sure that your app design will translate well to a mobile environment. 