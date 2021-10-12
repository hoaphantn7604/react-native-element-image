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

#### Image Props
| Props              | Params               | isRequire | Description                   |
| ------------------ | -------------------- | --------- | ------------------------------|
| source             | ImageSourcePropType  | Yes       |                               |
| width              | Number               |           | Fixed width, automatic height |
| height             | Number               |           | Fixed height, automatic width |
| background         | Boolean              | No        | if true is Image Background   |
| onSize             | (size) => void       | No        | get Image size                |


#### Avatar Props
| Props              | Params               | isRequire | Description                   |
| ------------------ | -------------------- | --------- | ------------------------------|
| containerStyle     | ViewStyle            | No        |                               |
| size               | Number               | No        | Default is 100px              |
| source             | ImageSourcePropType  | Yes       |                               |
| borderColor        | String               | No        | Default is white              |
| name               | String               | No        |                               |
| nameStyle          | TextStyle            | No        |                               |
| iconEnable         | Boolean              | No        | Default is true               |
| renderIcon         | Element              | No        | Customize icon camera         |
| onPressIcon        | ()=> void            | No        | Event click icon camera       |

## Usage
```javascript
    import React from 'react';
    import { StyleSheet, View, Text } from 'react-native';
    import { Image, Avatar } from 'react-native-element-image';
    const img = require('./assets/default.png');

    const ImageScreen = _props => {
        return (
            <View style={styles.container}>
                <Avatar
                    size={80}
                    containerStyle={styles.avatar}
                    source={img}
                    iconEnable={false}
                    onPressIcon={() => alert('Click')}
                    nameStyle={{ fontSize: 20 }}
                />
                <Avatar
                    size={80}
                    containerStyle={styles.avatar}
                    source={img}
                    iconEnable
                    onPressIcon={() => alert('Click')}
                    nameStyle={{ fontSize: 20 }}
                />

                <Avatar
                    size={100}
                    containerStyle={styles.avatar}
                    source={img}
                    iconEnable
                    onPressIcon={() => alert('Click')}
                    name="User name"
                    nameStyle={{ fontSize: 20, marginBottom: 20 }}
                />
                <Text>Width: 200, Height: Automatic</Text>
                <Image style={styles.image} source={img} width={200} />
                <Text style={styles.text}>Width: Automatic, Height: 200</Text>
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
        text: { marginTop: 50 },
        avatar: { marginTop: 10 },
    });

```