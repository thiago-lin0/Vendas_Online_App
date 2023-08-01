import { useState } from 'react';

import { connectApiPost } from '../conection/conectionApi';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';
import { useUserReducer } from '../store/reducers/userReducers/useUserReducer';

export const useRequest = () => {
  const { setUser } = useUserReducer(); //o dispatch está dentro desse hook
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectApiPost<ReturnLogin>('http://192.168.0.65:8080/auth', body)
      .then((result) => {
        setUser(result.user);
      })
      .catch(() => {
        setErrorMessage('usuário ou senha inválidas');
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
