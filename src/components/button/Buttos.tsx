import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import {
  ButtonDisabled,
  ContainerButton,
  ContainerButtonSecondary,
  GradientButton,
} from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
  disabled?: boolean;
  loading?: boolean;
  onPress?: () => void;
}

const Button = ({ title, type, loading, disabled, onPress, margin, ...props }: ButtonProps) => {
  const handleOnPress = () => {
    if (!loading && !disabled && onPress) {
      onPress();
    }
  };
  const renderText = (color: string) => {
    return (
      <>
        {loading ? (
          <ActivityIndicator size={'large'} color={'white'} />
        ) : (
          <Text types={textTypes.BUTTON_SEMIBOLD} color={color}>
            {title}
          </Text>
        )}
      </>
    );
  };
  if (disabled) {
    return (
      <ButtonDisabled type={type} margin={margin} {...props} onPress={handleOnPress}>
        {renderText(theme.colors.neutralThemes.white)}
      </ButtonDisabled>
    );
  }
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ContainerButtonSecondary type={type} margin={margin} {...props} onPress={handleOnPress}>
          {renderText(theme.colors.mainTheme.primary)}
        </ContainerButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButton margin={margin} {...props} onPress={handleOnPress}>
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            {renderText(theme.colors.neutralThemes.white)}
          </GradientButton>
        </ContainerButton>
      );
  }
};

export default Button;
