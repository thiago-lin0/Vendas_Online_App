import { TextInputProps } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerInput } from './Input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
}

const Input = ({ title, errorMessage, ...props }: InputProps) => {
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
      <ContainerInput isError={!!errorMessage} {...props} />
      {errorMessage && (
        <Text
          margin={'0px 0px 0px 8px'}
          types={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.errorTheme.red80}
        >
          {errorMessage}
        </Text>
      )}
    </DisplayFlexColumn>
  );
};

export default Input;
