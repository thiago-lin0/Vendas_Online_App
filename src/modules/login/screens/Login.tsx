import { View } from 'react-native';

import Button from '../../../components/button/Buttos';
import Input from '../../../components/input/Input';
import Text from '../../../components/text/Text';
import { textTypes } from '../../../components/text/textTypes';
import { theme } from '../../../themes/theme';
import { ContainerLogin } from '../styles/login.style';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';

const Login = () => {
  const handleClcik = () => {
    console.log('clicou');
  };
  return (
    <View>
      <ContainerLogin>
        <Icon name="home" />
        <Text types={textTypes.TITLE_BOLD}>Login</Text>
        <Input
          title={'E-mail :'}
          placeholder="Digite seu email"
          cursorColor={theme.colors.purpleTheme.purple80}
        />
        <Button
          type={theme.buttons.buttonsTheme.primary}
          margin="16px"
          title="ENTRAR"
          onPress={handleClcik}
        />
      </ContainerLogin>
    </View>
  );
};

export default Login;
