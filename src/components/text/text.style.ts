import styled from 'styled-components/native';

interface TextContainerProps {
  color?: string;
  fontSize: string;
  marginText?: string;
  fontFamily: 'Poppins-Bold' | 'Poppins-Regular' | 'Poppins-Light' | 'Poppins-SemiBold';
}

export const TextContainer = styled.Text<TextContainerProps>`
  ${(props: TextContainerProps) => (props.color ? `color: ${props.color}` : '')};
  ${(props: TextContainerProps) => (props.marginText ? `margin: ${props.marginText}` : '')};
  font-size: ${(props: TextContainerProps) => props.fontSize};
  font-family: ${(props: TextContainerProps) => props.fontFamily};
  padding-top: 3px;
`;
