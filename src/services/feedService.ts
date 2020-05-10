import { UserDetails, ArticleDetails } from '../types';
import * as qs from 'query-string';
import { getUser, isLoggedIn } from '../state/userState';
import { GetArticleResp } from './articleService';

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

const getFeedArticles = async (req: ArticlesReq, yourFeed: boolean = false): Promise<ArticlesResp> => {
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

/**
 * get global feed articles
 */

export const getGlobalFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => getFeedArticles(req);

/**
 * get your feed articles
 */

export const getYourFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => getFeedArticles(req, true);

/**
 * get tag feed articles
 */

export const getTagFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => getFeedArticles(req);

/**
 * get feed articles for a specific profile
 */

export const getProfileFeedArticles = async (req: ArticlesReq): Promise<ArticlesResp> => getFeedArticles(req);

/**
 * get feed articles favorited by a user
 */

export const getFavoriteProfileFeedArticels = async (req: ArticlesReq): Promise<ArticlesResp> => getFeedArticles(req);
