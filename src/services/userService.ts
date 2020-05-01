import { setUser, UserDetails } from '../state/userState';

interface RegisterProps {
  username: string,
  email: string,
  password: string
}

export interface ErrorDetails {
  errors: {
    [key: string]: string[]
  }
}

interface RegisterResp {
  hasErrors: boolean,
  response: UserDetails | ErrorDetails
}

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