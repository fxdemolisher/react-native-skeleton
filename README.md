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
    1. Persistant redux store (via [redux-persist](https://www.npmjs.com/package/redux-persist) w/ [migrations](https://www.npmjs.com/package/redux-persist-migrate)) w/ reset capability
    1. Local network (e.g. wifi) dev bundle loading
    1. Common styling and a responsive grid system
    1. Splash screen on start w/ image
    1. Static image packaging and use
 1. Android
     1. Gradle wrapper (of course)
     1. One configuration closure for app info (e.g. version, build, sdk, etc).
     1. Launcher icon and res customization per build type (e.g. debug/release)
     1. Native->RN environment and application information bridge
     1. Customization points for RN's view managers
     1. Default fonts included (Roboto)
1. iOS
    1. Base project set up
    1. RN bundling in dev/simulator mode
    1. Native->RN environment and application info bridge
    1. Same default fonts as in Android (Roboto)
    
## Settings Up:
    
### Android

1. Start up android studio
1. Import react-native-skeleton/android/build.gradle as a project
1. Turn off 'configure on demand'
    1. Settings->Build,Execution,Deployment->Compiler
    1. Uncheck 'configure on demand'

### iOS

1. Install Xcode, command line tools, and [CocoaPods](https://www.cocoapods.org) 
1. Go to $PROJECT_ROOT/ios
    1. Run 'pod install'
1. Open project in xCode
1. Run it

## TODOs:

1. Some form of type system (e.g. flowtype or typescript)
1. More bridges
1. Stress testing via volunteers

## NOTE:
Please submit feature requests, bugs, comments, etc via github's [issue tracker](https://github.com/fxdemolisher/react-native-skeleton/issues)

## Does it work?

![Demo GIF](https://github.com/fxdemolisher/react-native-skeleton/blob/master/demo.gif)
