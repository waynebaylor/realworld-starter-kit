import { ServiceResp } from '.';
import { getUser } from '../state/userState';
import { ArticleDetails, UserDetails } from '../types';

/**
 * favorite an article
 */

export interface FavoritePostReq {
  slug: string;
}

export type FavoritePostResp = ServiceResp<{ article: ArticleDetails }>;

export const favoritePost = async (req: FavoritePostReq): Promise<FavoritePostResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}/favorite`, {
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
 * unfavorite an article
 */

export type UnfavoritePostReq = FavoritePostReq;
export type UnfavoritePostResp = FavoritePostResp;

export const unfavoritePost = async (req: UnfavoritePostReq): Promise<UnfavoritePostResp> => {
  const user = getUser() as UserDetails;

  const resp = await fetch(`https://conduit.productionready.io/api/articles/${req.slug}/favorite`, {
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
