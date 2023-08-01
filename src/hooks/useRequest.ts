import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { connectApiPost } from '../conection/conectionApi';
import { useGlobalReducer } from '../store/reducers/globalReducers/useGlobalReducer';
import { useUserReducer } from '../store/reducers/userReducers/useUserReducer';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const { navigate } = useNavigation<NavigationProp<ParamListBase>>();
  const { setUser } = useUserReducer(); //o dispatch está dentro desse hook
  const { setModal } = useGlobalReducer();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectApiPost<ReturnLogin>('http://192.168.0.65:8080/auth', body)
      .then((result) => {
        setUser(result.user);
        navigate('Home');
      })
      .catch(() => {
        setModal({
          visible: true,
          title: 'ERROR',
          text: 'usuário ou senha inválidos',
        });
        // setErrorMessage('usuário ou senha inválidas');
      });

    setLoading(false);
  };

  return {
    loading,
    errorMessage,
    setErrorMessage,
    authRequest,
  };
};
