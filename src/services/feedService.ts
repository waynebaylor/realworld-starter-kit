import { UserDetails, ArticleDetails } from '../types';
import * as qs from 'query-string';
import { getUser, isLoggedIn } from '../state/userState';

export interface ArticlesReq {
  limit: number;
  offset: number;
}

export interface ArticlesResp {
  hasErrors: boolean;
  response: {
    articles: ArticleDetails[];
    articlesCount: number;
  } | null;
}

/**
 * get global feed articles
 */

export const getGlobalFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => {
  let headers = {};
  if (isLoggedIn()) {
    const user = getUser() as UserDetails;
    headers = { Authorization: `Token ${user.token as string}` };
  }

  const params = qs.stringify(req);
  const resp = await fetch(`https://conduit.productionready.io/api/articles?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers,
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};

/**
 * get your feed articles
 */

export const getYourFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => {
  const user = getUser() as UserDetails;

  const params = qs.stringify(req);
  const resp = await fetch(`https://conduit.productionready.io/api/articles/feed?${params}`, {
    method: 'GET',
    mode: 'cors',
    headers: {
      Authorization: `Token ${user.token as string}`,
    },
  });

  const respJson = await resp.json();

  return {
    hasErrors: resp.status !== 200,
    response: respJson,
  };
};
