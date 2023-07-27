import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  types?: string;
}

const Text = ({ color, types, ...props }: TextProps) => {
  const handleFontSize = useMemo(() => {
    switch (types) {
      case textTypes.TITLE:
        return '32px';
      default:
        return '16px';
    }
  }, [types]);

  return <TextContainer fontSize={handleFontSize} color={color} {...props} />;
};

export default Text;
