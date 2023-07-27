import { TouchableOpacityProps } from 'react-native';

import { theme } from '../../themes/theme';
import Text from '../text/Text';
import { ContainerButton } from './button.style';
import { textTypes } from '../text/textTypes';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  margin?: string;
}

const Button = ({ title, margin, ...props }: ButtonProps) => {
  return (
    <ContainerButton margin={margin} {...props}>
      <Text types={textTypes.BUTTON_BOLD} color={theme.colors.neutralThemes.white}>
        {title}
      </Text>
    </ContainerButton>
  );
};

export default Button;
