import styled from 'styled-components/native';
import { theme } from '../../themes/theme';

export const ContainerInput = styled.TextInput`
  width: 100%;
  height: 48px;
  padding: 16px;
  background-color: ${theme.colors.neutralThemes.white};
  color: ${theme.colors.neutralThemes.black};
  border: 1px solid ${theme.colors.grayThemes.gray80};
  border-radius: 10px;
`;
