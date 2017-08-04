import * as ColorManipulator from 'color'

import {Responsive} from './responsive'

/**
 * Colors available for styling.
 * Usage:
 *   import {Styles} from '/styles'
 *   const foo = Styles.Color.Black
 */
const Color = {
    Black: ColorManipulator.default('#000000FF'),
    Blue: ColorManipulator.default('#0000FFFF'),
    Clear: ColorManipulator.default('#FFFFFF00'),
    White: ColorManipulator.default('#FFFFFFFF'),
}

/**
 * Font family names available for styling.
 * Usage:
 *   import {Styles} from '/styles'
 *   const foo = Styles.Font.Family.RobotoRegular
 */
const FontFamily = {
    RobotoRegular: 'Roboto-Regular',
    RobotoBold: 'Roboto-Bold',
}

/**
 * Font sizes available for styling.
 * Usage:
 *   import {Styles} from '/styles'
 *   const foo = Styles.Font.Size.Normal
 */
const FontSize = new Responsive()
    .add(
         'Large',
         Responsive.Screen.Small(20),
         Responsive.Screen.Medium(24),
         Responsive.Screen.Large(28)
    )
    .add(
         'Medium',
         Responsive.Screen.Small(16),
         Responsive.Screen.Medium(20),
         Responsive.Screen.Large(24)
    )
    .add(
         'Small',
         Responsive.Screen.Small(12),
         Responsive.Screen.Medium(16),
         Responsive.Screen.Large(20)
    )

/**
 * Definitions for fonts.
 */
const Font = {
    Family: FontFamily,
    Size: FontSize,
}

/**
 * Sizes (margin, padding, spacing, etc) available for styling.
 * Usage:
 *   import {Styles} from '/styles'
 *   const foo = Styles.Size.Small
 */
const Size = new Responsive()
    .add(
         'Large',
         Responsive.Screen.Small(20),
         Responsive.Screen.Medium(24),
         Responsive.Screen.Large(32)
    )
    .add(
         'Medium',
         Responsive.Screen.Small(16),
         Responsive.Screen.Medium(20),
         Responsive.Screen.Large(24)
    )
    .add(
         'Small',
         Responsive.Screen.Small(12),
         Responsive.Screen.Medium(16),
         Responsive.Screen.Large(20)
    )

/**
 * Various text styles.
 *
 * Usage:
 *   import {Styles} from '/styles'
 *   <Text style={Styles.Text.Standard}>
 */
const Text = {
    Standard: {
        backgroundColor: Color.Clear,
        color: Color.Black,
        fontFamily: Font.Family.RobotoRegular,
        fontSize: Font.Size.Large,
    },
    Bold: {
        backgroundColor: Color.Clear,
        color: Color.Black,
        fontFamily: Font.Family.RobotoBold,
        fontSize: Font.Size.Large,
    }
}

/**
 * Collection of our styles.
 */
const Styles = {
    Color: Color,
    Font: Font,
    Size: Size,
    Text: Text,
}

export {
    Styles,
}
