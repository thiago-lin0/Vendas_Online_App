import { TextInputProps } from 'react-native';

import { ContainerInput } from './Input.style';

interface InputProps extends TextInputProps {}

const Input = ({ ...props }: InputProps) => {
  return <ContainerInput {...props} />;
};

export default Input;
