/**
 * get a user profile
 */

import { ServiceResp } from '.';
import { ProfileDetails, UserDetails } from '../types';
import { isLoggedIn, getUser } from '../state/userState';

export interface SingleProfileResp {
  profile: ProfileDetails;
}

export interface GetProfileReq {
  username: string;
}

export type GetProfileResp = ServiceResp<SingleProfileResp>;

export const getProfile = async ({ username }: GetProfileReq): Promise<GetProfileResp> => {
  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token as string}` };
  }

  const resp = await fetch(`https://conduit.productionready.io/api/profiles/${username}`, {
    method: 'GET',
    mode: 'cors',
    headers,
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};
