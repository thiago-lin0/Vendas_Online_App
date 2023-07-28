import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

import { theme } from '../../themes/theme';

export const ContainerModal = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${theme.colors.neutralThemes.white};
  height: 200px;
  width: 100%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 16px;

  shadow-color: #000;
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 10;
`;

export const IconClose = styled(Icon)`
  position: absolute;
  right: 12px;
  top: 5px;
  z-index: 99;
`;
