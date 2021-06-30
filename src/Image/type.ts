import { ImageBackgroundProps } from 'react-native';
import React from 'react';

interface onSize {
  width: number;
  height: number;
}

interface Props extends ImageBackgroundProps {
  height?: number;
  width?: number;
  background?: boolean;
  onSize?: (size: onSize) => void;
}

export type PropsImage = React.FC<Props>;
