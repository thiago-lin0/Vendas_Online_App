import { TouchableOpacityProps } from 'react-native';
import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { textTypes } from '../text/textTypes';
import { ContainerButton, ContainerButtonSecondary, GradientButton } from './button.style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
  type?: string;
}

const Button = ({ title, type, margin, ...props }: ButtonProps) => {
  switch (type) {
    case theme.buttons.buttonsTheme.secondary:
      return (
        <ContainerButtonSecondary type={type} margin={margin} {...props}>
          <Text types={textTypes.BUTTON_BOLD} color={theme.colors.mainTheme.primary}>
            {title}
          </Text>
        </ContainerButtonSecondary>
      );
    case theme.buttons.buttonsTheme.primary:
    default:
      return (
        <ContainerButton margin={margin} {...props}>
          <GradientButton
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 1.0, y: 0.0 }}
            colors={[theme.colors.purpleTheme.purple80, theme.colors.pinkTheme.pink80]}
          >
            <Text types={textTypes.BUTTON_BOLD} color={theme.colors.neutralThemes.white}>
              {title}
            </Text>
          </GradientButton>
        </ContainerButton>
      );
  }
};

export default Button;
