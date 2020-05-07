import { ErrorResp, ServiceResp } from '.';
import { getUser, setUser } from '../state/userState';
import { UserDetails } from '../types';

export interface UserResp {
  user: UserDetails;
}

/**
 * register a user
 */

export interface RegisterReq {
  username: string;
  email: string;
  password: string;
}

export type RegisterResp = ServiceResp<UserResp | ErrorResp>;

export const register = async (info: RegisterReq): Promise<RegisterResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/users', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: info }),
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};

/**
 * login a user
 */

export interface LoginReq {
  email: string;
  password: string;
}

export type LoginResp = ServiceResp<UserResp | ErrorResp>;

export const login = async (info: LoginReq): Promise<LoginResp> => {
  const resp = await fetch('https://conduit.productionready.io/api/users/login', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: info }),
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};

/**
 * logout a user
 */

export const logout = () => {
  setUser(null);
};

/**
 * update a user's settings
 */

export interface UpdateSettingsReq {
  email: string;
  username: string;
  bio: string;
  image: string;
  password: string;
}

export type UpdateSettingsResp = ServiceResp<UserResp | ErrorResp>;

export const updateSettings = async (info: UpdateSettingsReq): Promise<UpdateSettingsResp> => {
  const user = getUser() as UserDetails;

  if (!info.password) {
    delete info['password'];
  }

  const resp = await fetch('https://conduit.productionready.io/api/user', {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${user.token}`,
    },
    body: JSON.stringify({ user: info }),
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};
