import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationActions} from 'react-navigation';
import {connect} from 'react-redux'

import {currentEnvironment} from '/nativeActions'
import {Styles} from '/styles'
import {BaseComponent, Button} from '/widgets'

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: Styles.Size.Large,
    },
    item: {
        marginBottom: Styles.Size.Small,
    },
    label: {
        ...Styles.Text.Standard,
        fontSize: Styles.Font.Size.Small,
    },
    value: {
        ...Styles.Text.Standard,
        fontSize: Styles.Font.Size.Medium,
    },
}

const stylesheet = StyleSheet.create(styles)

/**
 * A screen for displaying application information.
 */
class ApplicationInformationScreen extends BaseComponent {
    constructor(props) {
        super(props)

        this.state = {}

        currentEnvironment((error, environment) => {
            if (!environment) {
                return
            }

            this.setState({ environment: environment })
        })
    }

    gotoBack = () => {
        this.props.dispatch(NavigationActions.back())
    }

    renderInformation() {
        if (!this.state.environment) {
            return
        }

        const elements = []
        for (const key of Object.keys(this.state.environment)) {
            const value = this.state.environment[key]

            elements.push(
                <View key={key}
                      style={stylesheet.item}>
                    <Text style={stylesheet.label}>{key}:</Text>
                    <Text style={stylesheet.value}>{"" + value}</Text>
                </View>
            )
        }

        return elements
    }

    render() {
        return (
            <View style={stylesheet.container}>
                {this.renderInformation()}

                <Button onPress={this.gotoBack}
                        text="Go Back"/>

            </View>
        )
    }
}

ApplicationInformationScreen = connect()(ApplicationInformationScreen)

export {
    ApplicationInformationScreen,
}
