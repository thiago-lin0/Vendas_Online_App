import { Text } from 'react-native';

import Input from '../../../components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <ContainerLogin>
      <Text>Login</Text>
      <Input placeholder="Digite algo" />
    </ContainerLogin>
  );
};

export default Login;
