import { View } from 'react-native';

import Button from '../../../components/button/Buttos';
import Input from '../../../components/input/Input';
import Text from '../../../components/text/Text';
import { textTypes } from '../../../components/text/textTypes';
import { ContainerLogin } from '../styles/login.style';

const Login = () => {
  return (
    <View>
      <ContainerLogin>
        <Text types={textTypes.TITLE}>Login</Text>
        <Input placeholder="Digite algo" />
        <Button margin="16px" title="ENTRAR" />
      </ContainerLogin>
    </View>
  );
};

export default Login;
