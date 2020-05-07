import { getUser } from '../state/userState';
import { UserDetails, ProfileDetails } from '../types';
import { ServiceResp } from '.';

/**
 * follow a user
 */

export interface FollowUserReq {
  username: string;
}

export type FollowUserResp = ServiceResp<ProfileDetails>;

export const followUser = async ({ username }: FollowUserReq): Promise<FollowUserResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};

/**
 * unfollow a user
 */

export type UnfollowUserReq = FollowUserReq;
export type UnfollowUserResp = FollowUserResp;

export const unfollowUser = async ({ username }: UnfollowUserReq): Promise<UnfollowUserResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      Authorization: `Token ${user.token}`,
    },
  });

  const respObj = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respObj,
  };
};
