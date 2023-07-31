// import React, { useState } from 'react';
import { View } from 'react-native';

import Button from '../../../components/button/Buttos';
import Input from '../../../components/input/Input';
import { theme } from '../../../themes/theme';
import { ContainerLogin, ImageLogo } from '../styles/login.style';
// import Modal from '../../../components/modal/Modal';

const Login = () => {
  // const [modalVisible, setModalVisible] = useState(false);
  const handleClcik = async () => {
    console.log('clicou');
  };
  return (
    <View>
      {/* <Modal
        onCloseModal={() => setModalVisible(false)}
        visible={modalVisible}
        title={'teste title'}
        text="teste text"
      /> */}
      <ContainerLogin>
        <ImageLogo
          source={require('../../../assets/images/logo.png')}
          alt={'Logo KO?'}
          resizeMode={'center'}
        />
        <Input
          title={'E-mail :'}
          placeholder="Digite seu email"
          cursorColor={theme.colors.purpleTheme.purple80}
          margin={'0px 0px 10px 0px'}
        />
        <Input
          secureTextEntry
          title={'Senha :'}
          placeholder="Digite sua senha"
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
