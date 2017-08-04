import {NativeModules} from 'react-native'

/**
 * Restarts the RN app via the navigation bridge.
 */
function restartApplication() {
    NativeModules.nav.restart()
}

/**
 * Returns the current environment as an object.
 */
function currentEnvironment(callback) {
    NativeModules.env.current((error, jsonString) => {
        const content = (jsonString != null ? JSON.parse(jsonString) : null)
        callback(error, content)
    })
}

/**
 * Sets the 'localBundleInDebug' native flag. Requires an app restart after changing the value of the flag.
 */
function setLocalBundleInDebug(localBundleInDebug) {
    NativeModules.env.localBundleInDebug(localBundleInDebug)
}

export {
    currentEnvironment,
    restartApplication,
    setLocalBundleInDebug,
}
