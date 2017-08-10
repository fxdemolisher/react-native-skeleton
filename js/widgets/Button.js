import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'

import {Styles} from '/styles'

import {BaseComponent} from './BaseComponent'

const styles = {
    button: {
        backgroundColor: Styles.Color.Blue,
        borderColor: Styles.Color.Black.alpha(0.05),
        borderRadius: Styles.Size.Small / 2,
        borderWidth: 2,
    },
    text: {
        ...Styles.Text.Standard,
        color: Styles.Color.White,
        fontSize: Styles.Font.Size.Medium,
        padding: Styles.Size.Small,
        textAlign: 'center',
    }
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
        const outerStyle = [
            stylesheet.button,
            this.props.style,
        ]

        return (
            <TouchableOpacity accessibilityComponentType="button"
                              accessibilityTraits="button"
                              disabled={this.props.disabled}
                              onPress={this.onPress}
                              renderToHardwareTextureAndroid={true}
                              shouldRasterizeIOS={true}
                              style={outerStyle}>

                <Text numberOfLines={1}
                      style={stylesheet.text}>
                    {this.props.text}
                </Text>

            </TouchableOpacity>
        )
    }
}

export {
    Button
}
