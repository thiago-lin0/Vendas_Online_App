import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

interface ContainerInputProps {
  isError?: boolean;
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
  border-radius: 10px;
`;
