import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Styles} from '/styles'

import {BaseComponent} from './BaseComponent'

const styles = {
    button: {
        ...Styles.Text.Standard,
        backgroundColor: Styles.Color.Blue,
        borderColor: Styles.Color.Black.alpha(0.05),
        borderRadius: Styles.Size.Small / 2,
        borderWidth: 2,
        color: Styles.Color.White,
        fontSize: Styles.Font.Size.Medium,
        padding: Styles.Size.Small,
        textAlign: 'center',
    },
}

const stylesheet = StyleSheet.create(styles)

/**
 * A widget that is a simple button with adjustable styles.
 */
class Button extends BaseComponent {
    onPress = () => {
        if (!this.props.onPress) {
            return
        }

        this.requestAnimationFrame(() => {
            this.props.onPress()
        })
    }

    render() {
        return (
            <TouchableOpacity accessibilityComponentType="button"
                              accessibilityTraits="button"
                              disabled={this.props.disabled}
                              onPress={this.onPress}
                              renderToHardwareTextureAndroid={true}
                              shouldRasterizeIOS={true}>

                <Text numberOfLines={1}
                      style={stylesheet.button}>
                    {this.props.text}
                </Text>

            </TouchableOpacity>
        )
    }
}

export {
    Button
}
