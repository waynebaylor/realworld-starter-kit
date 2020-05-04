import { setUser, getUser } from '../state/userState';
import { RegisterReq, RegisterResp, LoginReq, LoginResp, UserDetails, UpdateSettingsReq, UpdateSettingsResp } from '../types';

export const register = async (info: RegisterReq): Promise<RegisterResp> => {
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

export const login = async (info: LoginReq): Promise<LoginResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/users/login', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: info })
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};

export const logout = () => {
  setUser(null);
};

export const updateSettings = async (info: UpdateSettingsReq): Promise<UpdateSettingsResp> => {
  const user = getUser() as UserDetails;
  
  if(!info.password) {
    delete info['password'];
  }

  const resp = await fetch('https://conduit.productionready.io/api/user', {
    method: 'PUT',
    mode: 'cors',
    headers: { 
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`
    },
    body: JSON.stringify({ user: info })
  });

  const respJson = await resp.json();
  
  return {
    hasErrors: resp.status !== 200,
    response: respJson
  }
};