import type React from 'react';
import type { ImageProps, TextStyle, ViewStyle } from 'react-native';

interface Props extends ImageProps {
  containerStyle?: ViewStyle;
  size?: number;
  borderColor?: string;
  name?: string;
  nameStyle?: TextStyle;
  iconEnable?: boolean;
  renderIcon?: JSX.Element | undefined;
  onPressIcon?: () => void;
}

export type AvatarProps = React.FC<Props>;
