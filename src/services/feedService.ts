import * as qs from 'query-string';
import { getUser, isLoggedIn } from '../state/userState';
import { ArticleDetails, UserDetails } from '../types';

export interface ArticlesReq {
  limit: number;
  offset: number;
  tag?: string;
  author?: string;
  favorited?: string;
}

export interface ArticlesResp {
  hasErrors: boolean;
  response: {
    articles: ArticleDetails[];
    articlesCount: number;
  } | null;
}

/**
 * get feed articles.
 * "your feed" has an additional url fragment, so need special handling for that.
 */

export const getFeedArticles = async (req: ArticlesReq, yourFeed: boolean = false): Promise<ArticlesResp> => {
  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token as string}` };
  }

  const params = qs.stringify(req);
  const resp = await fetch(`https://conduit.productionready.io/api/articles${yourFeed ? '/feed' : ''}?${params}`, {
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
