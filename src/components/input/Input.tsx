import { useState } from 'react';
import { TextInputProps, View } from 'react-native';

import { theme } from '../../themes/theme';
import { DisplayFlexColumn } from '../globalStyles/globalView.style';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerInput, IconEye } from './Input.style';

interface InputProps extends TextInputProps {
  title?: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  margin?: string;
}

const Input = ({ title, errorMessage, secureTextEntry, margin, ...props }: InputProps) => {
  const [currentsecureText, setCurrentsecureText] = useState<boolean>(!!secureTextEntry);

  const handleOnPressEye = () => {
    setCurrentsecureText((current) => !current);
  };
  return (
    <DisplayFlexColumn marginDisplay={margin}>
      {title && (
        <Text
          margin={'0px 0px 4px 8px'}
          types={textTypes.PARAGRAPH_SMALL_SEMIBOLD}
          color={theme.colors.grayThemes.gray100}
        >
          {title}
        </Text>
      )}
      <View>
        <ContainerInput
          hasSecureTextEntry={secureTextEntry}
          isError={!!errorMessage}
          {...props}
          secureTextEntry={currentsecureText}
        />
        {secureTextEntry && (
          <IconEye
            onPress={handleOnPressEye}
            name={currentsecureText ? 'eye' : 'eye-off'}
            size={40}
            color={theme.colors.grayThemes.gray80}
          />
        )}
      </View>
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
