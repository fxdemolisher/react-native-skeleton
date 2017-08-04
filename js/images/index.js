/**
 * Object containing all images in this folder, statically referenced via require so that the RN packager
 * knows to include them in the bundle.
 */
const Images = {
    kitten: require('./icon-kitten.jpeg'),
    splash: require('./icon-splash.jpeg'),
}

export {
    Images
}
