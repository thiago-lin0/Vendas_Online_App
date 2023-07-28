import { useMemo } from 'react';
import { TextProps as TextPropsNative } from 'react-native';

import { TextContainer } from './text.style';
import { textTypes } from './textTypes';

interface TextProps extends TextPropsNative {
  color?: string;
  types?: string;
  margin?: string;
}

const Text = ({ color, types, margin, ...props }: TextProps) => {
  const fontSize = useMemo(() => {
    switch (types) {
      case textTypes.TITLE_REGULAR:
      case textTypes.TITLE_BOLD:
      case textTypes.TITLE_LIGHT:
      case textTypes.TITLE_SEMIBOLD:
        return '24px';
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.SUB_TITLE_SEMIBOLD:
        return '20px';
      case textTypes.BUTTON_BOLD:
      case textTypes.BUTTON_REGULAR:
      case textTypes.BUTTON_LIGHT:
      case textTypes.BUTTON_SEMIBOLD:
        return '18px';
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
        return '14px';
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
        return '10px';
      default:
        return '14px';
    }
  }, [types]);

  const fontFamily = useMemo(() => {
    switch (types) {
      case textTypes.TITLE_BOLD:
      case textTypes.SUB_TITLE_BOLD:
      case textTypes.PARAGRAPH_BOLD:
      case textTypes.PARAGRAPH_SMALL_BOLD:
      case textTypes.BUTTON_BOLD:
        return 'Poppins-Bold';
      case textTypes.TITLE_SEMIBOLD:
      case textTypes.SUB_TITLE_SEMIBOLD:
      case textTypes.PARAGRAPH_SEMIBOLD:
      case textTypes.PARAGRAPH_SMALL_SEMIBOLD:
      case textTypes.BUTTON_SEMIBOLD:
        return 'Poppins-SemiBold';
      case textTypes.SUB_TITLE_REGULAR:
      case textTypes.TITLE_REGULAR:
      case textTypes.PARAGRAPH_REGULAR:
      case textTypes.PARAGRAPH_SMALL_REGULAR:
      case textTypes.BUTTON_REGULAR:
        return 'Poppins-Regular';
      case textTypes.TITLE_LIGHT:
      case textTypes.SUB_TITLE_LIGHT:
      case textTypes.PARAGRAPH_LIGHT:
      case textTypes.PARAGRAPH_SMALL_LIGHT:
      case textTypes.BUTTON_LIGHT:
        return 'Poppins-Light';
      default:
        return 'Poppins-Regular';
    }
  }, [types]);

  return (
    <TextContainer
      marginText={margin}
      fontFamily={fontFamily}
      fontSize={fontSize}
      color={color}
      {...props}
    />
  );
};

export default Text;
