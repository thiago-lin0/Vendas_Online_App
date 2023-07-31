import styled from 'styled-components/native';

import { theme } from '../../../themes/theme';

export const ContainerLogin = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.neutralThemes.white};
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const ImageLogo = styled.Image`
  position: absolute;
  top: 150px;
  width: 100px;
  height: 100px;
`;
