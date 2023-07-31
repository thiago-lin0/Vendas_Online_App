import axios from 'axios';
import { useState } from 'react';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { connectApiPost } from '../../../conection/conectionApi';

export const UseLogin = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleClcik = async () => {
    console.log('clicou');
    setLoading(true);
    await connectApiPost('http://192.168.0.65:8080/auth', {
      email,
      password,
    }).catch(() => {
      setError('usuário ou senha inválidas');
    });
    setLoading(false);
  };

  const handleClickEmail = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setError('');
    setEmail(event.nativeEvent.text);
  };

  const handleClickPassWord = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setError('');
    setPassword(event.nativeEvent.text);
  };

  return {
    email,
    password,
    error,
    loading,
    handleClcik,
    handleClickEmail,
    handleClickPassWord,
  };
};
