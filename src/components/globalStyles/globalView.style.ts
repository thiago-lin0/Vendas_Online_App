import styled from 'styled-components/native';

interface DisplayProps {
  marginDisplay?: string;
}

export const DisplayFlexColumn = styled.View<DisplayProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${(props: DisplayProps) => (props.marginDisplay ? props.marginDisplay : '0px')};
`;
