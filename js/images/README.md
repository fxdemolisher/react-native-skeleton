Images used in RN should be dropped into this folder.

For every image added add the corresponding line in the Imags object in index.js:

	myNewImage: require('./my-new-image.png'),

To use the image as in your components import images as follows:

	import {Images} from '/images'
	
Then use like this:

	<... source={Images.myNewImage} />
