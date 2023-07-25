import styled from 'styled-components/native';

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
  background-color: blue;
`;
