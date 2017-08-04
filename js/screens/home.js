import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'

import {Images} from '/images'
import {restartApplication} from '/nativeActions'
import {Styles} from '/styles'
import {BaseComponent, Button} from '/widgets'

const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: Styles.Size.Large,
    },
    homeImage: {
        height: 200,
        marginBottom: Styles.Size.Large,
    },
    counter: {
        flex: 0,
        flexDirection: 'row',
        marginBottom: Styles.Size.Small,
    },
    counterLabel: {
        ...Styles.Text.Standard,
        marginRight: Styles.Size.Small,
        textAlign: 'right',
    },
    counterValue: {
        ...Styles.Text.Bold,
    },
}

const stylesheet = StyleSheet.create(styles)

/**
 * The main screen of the app.
 */
class HomeScreen extends BaseComponent {
    gotoCountUp = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'countUp' }))
    }

    gotoApplicationInformation = () => {
        this.props.dispatch(NavigationActions.navigate({ routeName: 'applicationInformation' }))
    }

    fullReset = () => {
        this.props.storage
            .persistor
            .purge()
            .then(() => { restartApplication() })
    }

    render() {
        return (
            <View style={stylesheet.container}>
                <Image resizeMode="contain"
                       source={Images.kitten}
                       style={stylesheet.homeImage} />

                <View style={stylesheet.counter}>
                    <Text style={stylesheet.counterLabel}>Count:</Text>
                    <Text style={stylesheet.counterValue}>{this.props.count}</Text>
                </View>

                <Button onPress={this.gotoCountUp}
                        text="Count Up Screen"/>

                <Button onPress={this.gotoApplicationInformation}
                        text="Application Information"/>

                <Button onPress={restartApplication}
                        text="Restart App"/>

                <Button onPress={this.fullReset}
                        text="Full Reset"/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count,
        storage: state.storage,
    }
}

HomeScreen = connect(mapStateToProps)(HomeScreen)

export {
    HomeScreen,
}
