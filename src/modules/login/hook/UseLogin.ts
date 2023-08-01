import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

import { useRequest } from '../../../hooks/useRequest';
import { useUserReducer } from '../../../store/reducers/userReducers/useUserReducer';

export const UseLogin = () => {
  const { user } = useUserReducer();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loading, errorMessage, authRequest, setErrorMessage } = useRequest();

  console.log('user', user);
  const handleClcik = async () => {
    authRequest({
      email,
      password,
    });
  };

  const handleClickEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setEmail(event.nativeEvent.text);
  };

  const handleClickPassWord = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setErrorMessage('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    errorMessage,
    loading,
    handleClcik,
    handleClickEmail,
    handleClickPassWord,
  };
};
