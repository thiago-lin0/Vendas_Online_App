import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { connectApiPost } from '../conection/conectionApi';
import { setUserAction } from '../store/reducers/userReducers';
import { RequestLogin } from '../types/requestLogin';
import { ReturnLogin } from '../types/returnLogin';

export const useRequest = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authRequest = async (body: RequestLogin) => {
    setLoading(true);
    await connectApiPost<ReturnLogin>('http://192.168.0.65:8080/auth', body)
      .then((result) => {
        dispatch(setUserAction(result.user));
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
