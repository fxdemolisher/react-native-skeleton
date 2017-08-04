import React from 'react'
import {Easing} from 'react-native'
import {StackNavigator, addNavigationHelpers} from 'react-navigation';
import {combineReducers} from 'redux'
import {connect} from 'react-redux'

import {BaseComponent} from '/widgets'

import {ApplicationInformationScreen} from './applicationInformation'
import {CountUpScreen, countUpReducer} from './countUp'
import {HomeScreen} from './home'

// Custom forward/back transition configuration.
const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 300,
            easing: Easing.inOut(Easing.quad),
            useNativeDriver: true,
        },
        screenInterpolator: ({layout, position, scene}) => {
            const index = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [width, 0, 0],
            })

            const opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [1, 1, 0.2],
            })

            const scale = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [1, 1, 0.95],
            })

            return {
                opacity: opacity,
                transform: [
                    { scale: scale },
                    { translateX: translateX },
                ]
            }
        },
    }
}

// Set up root navigation.
const RootNavigation = StackNavigator(
    // Route configs.
    {
        home: {
            screen: HomeScreen,
            path: '/',
        },
        countUp: {
            screen: CountUpScreen,
            path: '/count-up',
        },
        applicationInformation: {
            screen: ApplicationInformationScreen,
            path: '/application-information',
        }
    },

    // Navigation config.
    {
        headerMode: 'none',
        initialRouteName: 'home',
        mode: 'card',
        transitionConfig: transitionConfig,
    }
)

/**
 * Root component of the app, wraps our navigator to allow for redux support.
 */
class RootComponent extends BaseComponent {
    render() {
        const navigationHelpers = addNavigationHelpers({
            dispatch: this.props.dispatch,
            state: this.props.nav,
        })

        return (
            <RootNavigation navigation={navigationHelpers}/>
        )
    }
}

RootComponent = connect((state) => ({ nav: state.nav }))(RootComponent)

// Set up navigation reducer.
const initialNavAction = RootNavigation.router.getActionForPathAndParams('/')
const initialNavState = RootNavigation.router.getStateForAction(initialNavAction);
const navReducer = (state = initialNavState, action) => {
  const nextState = RootNavigation.router.getStateForAction(action, state);
  return nextState || state;
}

// Create a root reducer, made up of all the other reducers.
const rootReducer = combineReducers({
    app: (state = { }) => (state), // No-op reducer for migration versioning.
    counter: countUpReducer,
    nav: navReducer,
    storage: (state = {}) => (state), // Required so that storage is available everywhere.
})

export {
    RootComponent,
    rootReducer,
}
