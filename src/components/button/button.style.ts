import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ContainerButtonProps {
  margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ContainerButtonProps>`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  ${(props: ContainerButtonProps) => (props.margin ? `margin: ${props.margin}` : '')};
`;

export const ContainerButtonSecondary = styled(ContainerButton)<ContainerButtonProps>`
  ${(props: ContainerButtonProps) => (props.margin ? `margin: ${props.margin}` : '')};
  background-color: transparent;
  border: 1px solid ${theme.colors.mainTheme.primary};
`;

export const GradientButton = styled(LinearGradient)<ContainerButtonProps>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  ${(props: ContainerButtonProps) => (props.margin ? `margin: ${props.margin}` : '')};
`;
