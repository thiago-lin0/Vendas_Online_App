import { useState } from 'react';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

import { connectApiPost } from '../conection/conectionApi';
import { UserType } from '../types/userType';

export const useRequest = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [user, setUser] = useState<UserType>();

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
    user,
  };
};
