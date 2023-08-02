import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from '../storageProxy';

//limpa os dados
export const unsetAuthorizationToken = async () => removeItemStorage(AUTHORIZATION_KEY);

// setar token
export const setAuthorizationToken = async (token: string) => {
  setItemStorage(AUTHORIZATION_KEY, token);
};

//Buscar token
export const getAuthorizationToken = async () => await getItemStorage(AUTHORIZATION_KEY);
