import { Text, View } from 'react-native';

import Button from '../../../components/button/Buttos';
import Input from '../../../components/input/Input';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text>Login</Text>
        <Input placeholder="Digite algo" />
        <Button margin="16px" title="ENTRAR" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
