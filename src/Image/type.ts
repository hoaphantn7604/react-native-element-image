import type React from 'react';
import type { ImageBackgroundProps, ImageStyle } from 'react-native';

interface onSize {
  width: number;
  height: number;
}

interface Props extends ImageBackgroundProps {
  style?: ImageStyle;
  height?: number;
  width?: number;
  background?: boolean;
  onSize?: (size: onSize) => void;
}

export type PropsImage = React.FC<Props>;
