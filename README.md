## react-native-element-image
`react-native-element-image` Automatically calculate width or height based on input Image component for React Native.

## Getting started

```js
    npm install react-native-element-image --save
```
or
```js
    yarn add npm install react-native-element-image
```

#### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/image/demo.png)

#### Props
| Props              | Params               | isRequire | Description                   |
| ------------------ | -------------------- | --------- | ------------------------------|
| source             | ImageSourcePropType  | Yes       |                               |
| width              | Number               |           | Fixed width, automatic height |
| height             | Number               |           | Fixed height, automatic width |
| background         | Boolean              | No        | if true is Image Background   |
| onSize             | (size) => void       | No        | get Image size                |


## Usage
```javascript
    import React from 'react';
    import {StyleSheet, View} from 'react-native';
    import {Image} from 'react-native-element-image';
    const img = require('./assets/default.png');

    const ImageScreen = _props => {
        return (
            <View style={styles.container}>
                <Image style={styles.image} source={img} width={200} />
                <Image style={styles.image} source={img} height={200} />
            </View>
        );
    };

    export default ImageScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        image: {
            margin: 20,
        },
    });
```

### Suggested Packages
- [react-native-utils-scale](https://www.npmjs.com/package/react-native-utils-scale) for flexible UI on many different screen sizes.
- [react-native-element-dropdown](https://www.npmjs.com/package/react-native-element-dropdown) A react-native dropdown component easy to customize for both iOS and Android.
- [react-native-element-textinput](https://www.npmjs.com/package/react-native-element-textinput) A react-native TextInput component easy to customize for both iOS and Android.
- [react-native-element-timer](https://www.npmjs.com/package/react-native-element-timer) React Native Timer Countdown.
- [react-native-vertical-swipe-view](https://www.npmjs.com/package/react-native-vertical-swipe-view) React Native Vertical Swipe View.
- [react-native-checkbox-tree](https://www.npmjs.com/package/react-native-checkbox-tree) A simple and elegant checkbox tree for React Native.
- [react-native-curved-bottom-bar](https://www.npmjs.com/package/react-native-curved-bottom-bar) A high performance, beautiful and fully customizable curved bottom navigation bar for React Native.
- [react-native-webrtc-simple](https://www.npmjs.com/package/react-native-webrtc-simple) A simple and easy to use module that help in making video call for React Native.