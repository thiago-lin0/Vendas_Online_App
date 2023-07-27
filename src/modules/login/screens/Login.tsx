import { View } from 'react-native';

import Button from '../../../components/button/Buttos';
import Input from '../../../components/input/Input';
import Text from '../../../components/text/Text';
import { ContainerLogin } from '../styles/login.style';
import { textTypes } from '../../../components/text/textTypes';

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
