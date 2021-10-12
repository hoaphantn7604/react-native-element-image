import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { AvatarProps } from './type';
import { Image, Text } from 'react-native';
import { styles } from './styles';

const img_avatar = require('./icons/ic-avatar.png');
const img_camera = require('./icons/ic-camera.png');

const AvatarComponent: AvatarProps = props => {
  const {
    containerStyle = {},
    size = 100,
    borderColor = 'white',
    name,
    nameStyle,
    iconEnable = true,
    renderIcon,
    onPressIcon,
  } = props;

  const _renderIcon = () => {
    if (iconEnable) {
      if (renderIcon) {
        return renderIcon;
      } else {
        return (
          <TouchableWithoutFeedback
            onPress={() => {
              onPressIcon && onPressIcon();
            }}>
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: size / 4,
                position: 'absolute',
                right: 5,
                bottom: 5,
                padding: 3,
              }}>
              <Image
                style={{
                  width: size / 4.5,
                  height: size / 4.5,
                  tintColor: 'gray',
                }}
                source={img_camera}
              />
            </View>
          </TouchableWithoutFeedback>
        );
      }
    }
    return null;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={{
          width: size + 5,
          height: size + 5,
          borderRadius: size / 2,
          backgroundColor: borderColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          {...props}
          style={{ width: size, height: size, borderRadius: size / 2 }}
          source={img_avatar}
        />
        {_renderIcon()}
      </View>
      {name ? <Text style={[styles.name, nameStyle]}>{name}</Text> : null}
    </View>
  );
};

export default AvatarComponent;
