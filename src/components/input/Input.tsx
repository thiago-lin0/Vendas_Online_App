import { TextInputProps } from 'react-native';

import { ContainerInput } from './Input.style';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { theme } from '../../themes/theme';

interface InputProps extends TextInputProps {
  title?: string;
}

const Input = ({ title, ...props }: InputProps) => {
  return (
    <DisplayFlexColumn>
      {title && (
        <Text
          margin={'0px 0px 4px 8px'}
          types={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.grayThemes.gray100}
        >
          {title}
        </Text>
      )}
      <ContainerInput {...props} />
    </DisplayFlexColumn>
  );
};

export default Input;
