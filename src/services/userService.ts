import { setUser } from '../state/userState';
import { RegisterProps, RegisterResp, LoginProps, LoginResp, UserDetails } from '../types';

export const register = async (info: RegisterProps): Promise<RegisterResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/users', {
    method: 'POST',
    mode: 'cors',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: info})
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  };
};

export const logout = () => {
  setUser(null);
};

export const login = async (info: LoginProps): Promise<LoginResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/users/login', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: info })
  });

  const respJson = await resp.json();

  setUser(respJson.user as UserDetails);

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};