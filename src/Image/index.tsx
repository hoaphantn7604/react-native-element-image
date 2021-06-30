import React, { useEffect, useRef, useState } from 'react';
import { Image, ImageBackground } from 'react-native';
import { PropsImage } from './type';

const resolveAssetSource = Image.resolveAssetSource;

const ImageAuto: PropsImage = props => {
  const { style, onSize = (size) => { }, background } = props;
  const [autoWidth, setAutoWidth] = useState<number | null>(null);
  const [autoHeight, setAutoHeight] = useState<number | null>(null);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
    };
  }, []);

  useEffect(() => {
    onProps(props);
  });

  const onProps = (localProps: any) => {
    const { source } = localProps;
    if (source.uri) {
      const sourceToUse = source.uri ? source.uri : source;

      Image.getSize(
        sourceToUse,
        (width, height) => adjustSize(width, height, props),
        console.log,
      );
    } else {
      const sourceToUse = resolveAssetSource(source);
      adjustSize(sourceToUse.width, sourceToUse.height, props);
    }
  };

  const adjustSize = (
    sourceWidth: number,
    sourceHeight: number,
    localProps: any,
  ) => {
    const { width, height } = localProps;

    let ratio = 1;

    if (width && height) {
      ratio = Math.min(width / sourceWidth, height / sourceHeight);
    } else if (width) {
      ratio = width / sourceWidth;
    } else if (height) {
      ratio = height / sourceHeight;
    }

    if (mounted.current) {
      const ratioWidth = sourceWidth * ratio;
      const ratioHeight = sourceHeight * ratio;

      setAutoWidth(ratioWidth);
      setAutoHeight(ratioHeight);
      if (onSize) {
        onSize({ width: ratioWidth, height: ratioHeight });
      }
    }
  };

  if (autoWidth && autoHeight) {
    if (background) {
      return <ImageBackground
        {...props}
        style={[style, { width: autoWidth, height: autoHeight }]}
      />;
    }
    return <Image {...props} style={[style, { width: autoWidth, height: autoHeight }]} />
  }
  return null;
};

export default ImageAuto;
