# react-native-skeleton

## What is it?

A skeleton project for both Android and iOS, using Facebook's React Native. Contains the usual set up [create-react-native-app](https://facebook.github.io/react-native/docs/getting-started.html)  as well as some other goodies.

## Why does this exist?

When you work for companies most of your code belongs to them. Some of us get tired of starting from a blank slate on every new gig. It was time for me to make a skeleton project that is open source and uses the things that I usually include.

## Requirements:

1. iOS Development
    1. XCode + command line tools
    1. NPM/Node
    1. CocoaPods (via brew)
1. Android Development
    1. Android Studio
    1. Android SDK (w/ build tools 25+)
1. Patience

## What's Included?

1. JavaScript Layer
    1. Absolute imports (via [babel-root-slash-import](https://www.npmjs.com/package/babel-root-slash-import))
    1. Style color manipilation (via [color](https://www.npmjs.com/package/color))
    1. Date/Time manipulation (via [momentjs](https://momentjs.com/))
    1. Gradients (via [react-native-linear-gradient](https://www.npmjs.com/package/react-native-linear-gradient))
    1. Global store (via [redux](https://www.npmjs.com/package/redux)  w/ [react-redux](https://www.npmjs.com/package/react-redux)  bindings and [redux-thunk](https://www.npmjs.com/package/redux-thunk))
    1. Persistant redux store (via [redux-persist](https://www.npmjs.com/package/redux-persist) w/ [migrations](https://www.npmjs.com/package/redux-persist-migrate))
    1. Local network (e.g. wifi) dev bundle loading
    1. Common styling and a responsive grid system
 1. Android
     1. Gradle wrapper (of course)
     1. Launcher icon and res customization per build type (e.g. debug/release)
     1. Native->RN environment and application information bridge
     1. Customization points for RN's view managers

    
## Settings Up
    
### Android

1. Start up android studio
1. Import react-native-skeleton/android/build.gradle as a project
1. Turn off 'configure on demand'
    1. Settings->Build,Execution,Deployment->Compiler
    1. Uncheck 'configure on demand'
1. 
    