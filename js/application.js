import React from 'react'
import {AppState, Image, StyleSheet, View} from 'react-native'
import {Provider} from 'react-redux'

import {Images} from '/images'
import {RootComponent, rootReducer} from '/screens'
import {Store} from '/store'
import {Styles} from '/styles'
import {BaseComponent} from '/widgets'

const styles = {
    splashWrapper: {
        alignItems: 'center',
        backgroundColor: Styles.Color.White,
        flex: 1,
        justifyContent: 'center',
    },
    splashImage: {
        height: 400,
    },
}

const stylesheet = StyleSheet.create(styles)

/**
 * Wraps a Redux store provider and the navigation stack to provide the app's entry point.
 */
class Application extends BaseComponent {
    constructor(props) {
        super(props)
        
        // Start as not ready, displaying nothing.
        this.state = { isStoreReady: false }
        
        // Initialize our permanent storage, with a callback when store hydration is completed.
        this.storage = new Store(
            rootReducer,
            () => {
                this.setState({ isStoreReady: true })
            }
        )
    }

    /**
     * Renders a splash screen while the store is coming online.
     */
    renderSplash() {
        return (
            <View style={stylesheet.splashWrapper}>
                <Image resizeMode="contain"
                       source={Images.splash}
                       style={stylesheet.splashImage} />
            </View>
        )
    }
    
    render() {
        // If store isn't readyyet, display splash.
        if (!this.state.isStoreReady) {
            return this.renderSplash()
        }
        
        // Otherwise, render the actual root screen, wrapped in the store provider.
        return (
            <Provider store={this.storage.store}>
                <RootComponent />
            </Provider>
        )
    }
}

export {
    Application
}
