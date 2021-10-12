import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Image, Avatar} from 'react-native-element-image';
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
        nameStyle={{fontSize: 20}}
      />
      <Avatar
        size={80}
        containerStyle={styles.avatar}
        source={img}
        iconEnable
        onPressIcon={() => alert('Click')}
        nameStyle={{fontSize: 20}}
      />

      <Avatar
        size={100}
        containerStyle={styles.avatar}
        source={img}
        iconEnable
        onPressIcon={() => alert('Click')}
        name="User name"
        nameStyle={{fontSize: 20, marginBottom: 20}}
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
  text: {marginTop: 50},
  avatar: {marginTop: 10},
});
