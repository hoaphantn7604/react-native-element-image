## react-native-element-image
Automatically calculate width or height based on input Image component for React Native.

#### Source code demo
- [react-native-template-components](https://github.com/hoaphantn7604/react-native-template-components) A beautiful template for React Native.

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