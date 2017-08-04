import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'

import {Styles} from '/styles'
import {BaseComponent, Button} from '/widgets'

const styles = {
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: Styles.Size.Large,
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
 * A screen for incrementing the global counter.
 */
class CountUpScreen extends BaseComponent {
    gotoBack = () => {
        this.props.dispatch(NavigationActions.back())
    }

    countUp = () => {
        this.props.dispatch({ type: 'countUp' })
    }

    render() {
        return (
            <View style={stylesheet.container}>
                <View style={stylesheet.counter}>
                    <Text style={stylesheet.counterLabel}>Count:</Text>
                    <Text style={stylesheet.counterValue}>{this.props.count}</Text>
                </View>

                <Button onPress={this.countUp}
                        text="Count Up"/>

                <Button onPress={this.gotoBack}
                        text="Go Back"/>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

CountUpScreen = connect(mapStateToProps)(CountUpScreen)

const countUpReducer = (state = { count: 0 }, action) => {
    if (action.type == 'countUp') {
        return {
            ...state,
            count: state.count + 1,
        }
    }

    return state
}

export {
    CountUpScreen,
    countUpReducer,
}
