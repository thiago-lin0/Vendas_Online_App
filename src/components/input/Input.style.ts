import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ContainerInputProps {
  isError?: boolean;
  hasSecureTextEntry?: boolean;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralThemes.white};
  color: ${theme.colors.neutralThemes.black};
  border: 1px solid
    ${(props: ContainerInputProps) =>
      props.isError ? theme.colors.errorTheme.red80 : theme.colors.grayThemes.gray80};
  padding-right: ${(props: ContainerInputProps) => (props.hasSecureTextEntry ? '60px' : '16px')};
  border-radius: 10px;
`;

export const IconEye = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 3px;
`;
